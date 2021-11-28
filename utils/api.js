// hotapp接口
var hotapp = require('./hotapp');

// 引入asyncWx.js promise形式的封装
import { showToast } from "../utils/asyncWx";


/** 更新版本号
 * 
 */
function updateVersion(cb) {
    var version = (new Date()).valueOf().toString();
    wx.setStorageSync('version', version);

    /* hotapp内容,暂未发挥作用 */
    hotapp.post('version', version, function(res) {
        // console.log("但因"+res); // false
        // console.log("但因"+res.ret); // undefined
        if (res.ret == 0) {
            return typeof cb == "function" && cb(true);
        } else {
            return typeof cb == 'function' && cb(false);
        }
    });
}

/**
 * 对比版本号
 */
function checkVersion(cb) {
    var version = wx.getStorageSync('version');
    if (!version) {
        return typeof cb == 'function' && cb(true);
    }
    hotapp.get('version', function(res) {
        if (res.ret == 0 && res.data.value == version) {
            return typeof cb == 'function' && cb(false);
        } else {
            return typeof cb == 'function' && cb(true);
        }
    });
}

/** 格式化笔记的时间信息
 * 修饰每一个item的
 * create_time(已知)[1638031816]    update_time(已知)[1638031974]
 * update_date(创建)[2021-11-28]    date(创建)["今天","明天"]   
 * class(创建)["yestoday","today"]
 */
function formatItem(item) {
    /* var create_time = new Date(parseInt(item.create_time) * 1000);
    item.date = create_time.getFullYear()+'-'+(create_time.getMonth()+1)+'-'+create_time.getDate();
    item.create_date = create_time.getFullYear() + "-" + (create_time.getMonth() + 1) + "-" + create_time.getDate();
    var update_time = new Date(item.update_time * 1000);
    item.update_date = update_time.getFullYear() + "-" + (update_time.getMonth() + 1) + "-" + update_time.getDate() + " " + update_time.getHours() + "时" + update_time.getMinutes() + "分";
    
    //今天的日记和昨天的日记显示不同的颜色

    var d = new Date();
    var today = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
    var yestoday = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+(d.getDate()-1); */
    
    // es6优化字符串拼接如下:
    var create_time = new Date(parseInt(item.create_time) * 1000);
    item.date = `${create_time.getFullYear()}-${(create_time.getMonth()+1)}-${create_time.getDate()}`;
    item.create_date = `${create_time.getFullYear()}-${(create_time.getMonth() + 1)}-${create_time.getDate()}`;
    var update_time = new Date(item.update_time * 1000);
    item.update_date = `${update_time.getFullYear()}-${update_time.getMonth() + 1}-${update_time.getDate()} ${update_time.getHours()}时${update_time.getMinutes()}分`;
    //今天的日记和昨天的日记显示不同的颜色

    var d = new Date();
    var today = `${d.getFullYear()}-${(d.getMonth()+1)}-${d.getDate()}`;
    var yestoday = `${d.getFullYear()}-${(d.getMonth()+1)}-${(d.getDate()-1)}`;

    if(item.date == today){
        item.class = 'today';
        item.date = '今天';
    };
    if(item.date == yestoday){
        item.class = 'yesterday';
        item.date = '昨天';
    }

    return item;
}

/** 获取所有数据,获取存储中的
 * 
 */
function getItems(cb) {
    var that = this;
    var items = wx.getStorageSync('items');
    if (items) {
        return typeof cb == 'function' && cb(items);
    } else {
        var filters = {
            prefix: hotapp.getPrefix('item'),
            pageIndex: 1,
            pageSize: 1000000
        };

        hotapp.searchkey(filters, function(res) {
            if (res.ret == 0) {
                res.data.items.forEach(function(item) {
                    item = that.formatItem(item);
                    item.state = 2;
                });
                wx.setStorageSync('items', res.data.items);
                return typeof cb == 'function' && cb(res.data.items);
            } else {
                return typeof cb == 'function' && cb([]);
            }
        });
    }
}

/** 获取指定的value
 * 
 */
function show(key, cb) {
    this.getItems(function(items) {
        items.forEach(function(item) {
            if (item.key == key) {
                return typeof cb == 'function' && cb(item);
            }
        });
        if (items.length == 0) {
            // 一般是不会执行的,因为是点击了一个笔记,然后进去的,必然存在此可以,必须也有对象,除非缓存出现异常
            return typeof cb == 'function' && cb(false);
        }
    });
}

/**
 * 新增数据
 */
function store(item, cb) {
    var that = this;
    item = that.formatItem(item);
    this.getItems(items => {
        var isNew = true;
        items.forEach((oldItem, index, arr) => {
            if (oldItem.key == item.key) {
                arr[index] = item;
                isNew = false;
            }
        });
        if (isNew) {
            items.push(item);
            items.sort((a, b) => {
                return a.create_time < b.create_time;
            });
            // 向hotapp统计发送新增事件,可知道用户每天新增次数
            hotapp.onEvent('new');
        } else {
            // 向hotapp统计发送保存事件,可知道用户每天保存次数
            hotapp.onEvent('store');
        }
        // 重新存入存储
        wx.setStorageSync('items', items);

        wx.getNetworkType({
            success: function(res) {
                var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
                if(networkType == 'none'){
                    wx.showToast({
                        title: "保存本地成功",
                        success:function(){
                            // 返回首页
                            setTimeout(function(){
                                wx.hideToast();
                                wx.navigateBack({
                                    delta: 1
                                });
                                // wx.navigateBack();
                            },1000)
                        }
                    });
                }else{
                    wx.showToast({
                        title: '保存并同步中',
                        icon: 'loading'
                    });
                    that.updateVersion(function(success) {
                        console.log("success"+success);
                        if (success) {
                            hotapp.post(item.key, item.value, function(res) {
                                if (res.ret == 0) {
                                    item = res.data;
                                    item.state = 2;
                                } else {
                                    item.state = 1;
                                }
                                items.forEach(function(oldItem, index, arr) {
                                    if (oldItem.key == item.key) {
                                        arr[index] = item;
                                    }
                                });
                                wx.setStorageSync('items', items);
                                return typeof cb == 'function' && cb(true);
                            })

                        }
                    });
                };
            },
        });
    })
}

/**
 * 删除数据
 */
function destroy(item, cb) {
    var that = this;
    this.getItems(function(items) {
        items.forEach(function(oldItem, index, arr) {
            if (oldItem.key == item.key) {
                oldItem.state = 3;
                wx.setStorageSync('items', arr);
            }
        });
        wx.getNetworkType({
            success: function(res) {
                var networkType = res.networkType; // 返回网络类型2g，3g，4g，wifi
                if(networkType !='none'){
                    that.updateVersion(function(success) {
                        if (success) {
                            // 向hotapp统计发送删除事件,后台可知晓用户删除了哪些标题
                            hotapp.onEvent('delete', item.value.title);
                            hotapp.del(item.key, function(res) {
                                if (res.ret == 0) {
                                    that.updateVersion();
                                    return typeof cb == 'function' && cb(true);
                                };
                            });
                        };
                    });
                }else{
                    return typeof cb == 'function' && cb(true);
                };
            },
        });

    });
}

module.exports = {
    updateVersion: updateVersion,
    checkVersion: checkVersion,
    formatItem: formatItem,
    getItems: getItems,
    show: show,
    store: store,
    destroy: destroy
}
