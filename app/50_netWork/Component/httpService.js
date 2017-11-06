/**
 * Created by evan on 2017/4/10.
 * 自己封装的网络请求方法
 * 未调用
 */
// import * as RefreshToken from '../views/common/RefreshToken';
const timeout = 15000;
let HttpUtils = {
    obj2params: function (obj) {
        let p = [];
        for (let key in obj) {
            p.push(key + '=' + encodeURIComponent(obj[key]));
        }
        return p.join('&');
    }
};

function filterJSON(res) {
    return res.json();
}

function filterStatus(res) {
    if (res.ok) {
        return res;
    } else {
        throw new Error('');
    }
}

function timeoutFetch(ms, promise) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject(new Error("fetch time out"));
        }, ms);
        promise.then(
            (res) => {
                clearTimeout(timer);
                resolve(res);
            },
            (err) => {
                clearTimeout(timer);
                reject(err);
            }
        );
    })
}

export function request(uri, type = "GET", headers = {}, data = "") {
    let fetchOption = {
        method: type,
        headers: headers
    };
    if (type == "GET") {
        uri = uri + "?" + HttpUtils.obj2params(data);
    }
    if (type === "POST") {
        fetchOption.body = JSON.stringify(data);
    }
    return fetch(uri, fetchOption);

}

export function get(uri, data = "") {
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    return request(uri, "GET", headers, data);
}

export function loginGet(uri, headers = {}, data = "") {
    return request(uri, "GET", headers, data);
}

export function post(uri, data = "") {
    let headers;
    headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    return request(uri, "POST", headers, data);
}

export function refreshBeforePost(uri, componentProps, data = "") {
    // //请求之前先refresh当前toekn
    // RefreshToken.refreshToken(componentProps,()=>{
    //
    // });
    //执行请求操作

    let access_token = componentProps.currentUser().access_token;
    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + access_token
    };
    return request(uri, "POST", headers, data);
}