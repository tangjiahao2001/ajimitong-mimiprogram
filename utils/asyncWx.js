/** promise形式的getSetting */
export const getSetting=()=>{
    return new Promise((resolve,reject)=>{
        wx.getSetting({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {}
        });
    })
}

/** promise形式的chooseAddress */
export const chooseAddress=()=>{
    return new Promise((resolve,reject)=>{
        wx.chooseAddress({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {}
        });
    })
}

/** promise形式的openSetting */
export const openSetting=()=>{
    return new Promise((resolve,reject)=>{
        wx.openSetting({
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            },
            complete: () => {}
        });
    })
}

/** promise 形式的showModal
 * 
 * @param {object} param0 参数
 * @returns 
 */
export const showModal=({content})=>{
    return new Promise((resolve,reject)=>{
        wx.showModal({
            title: '提示',
            content: content,
            success :(res) => { /* this引用外部的 */
                resolve(res);
            },
            fail:(err) => {
                reject(err);
            }
        })
    })
}

/** promise 形式的 showToast
 * 
 * @param {object} param0 参数
 * @returns 
 */
export const showToast=({title})=>{
    return new Promise((resolve,reject)=>{
        wx.showToast({
            title: title,
            icon: 'none',
            image: '',
            duration: 1500,
            mask: false,
            success: (result) => {
                
            },
            fail: () => {},
            complete: () => {}
        });
          
        wx.showToast({
            title: title,
            icon: 'none',
            success :(res) => { /* this引用外部的 */
                resolve(res);
            },
            fail:(err) => {
                reject(err);
            }
        })
    })
}

/**promise形式的  login
 * 
 */
export const login=()=>{
    return new Promise((resolve,reject)=>{
        wx.login({
            timeout:10000,
            success: (result) => {
                resolve(result);
            },
            fail: (err) => {
                reject(err);
            }
        });
    })
}

/**
 * promise 形式的 小程序微信支付
 * @param {*} pay 支付所要的参数
 * @returns 
 */
export const requestPayment=(pay)=>{
    return new Promise((resolve,reject)=>{
        wx.requestPayment({
            ...pay,
            success: (result) => {
                resolve(result)
            },
            fail: (err) => {
                reject(err)
            },
        });
    })
}
