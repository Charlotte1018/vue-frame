module.exports = {
    /*
     * params:
        let msg = {
            url: 'userApid',
            method: 'GET',
        }
     * 
    */
    http: function (msg) {
        let myHeaders = new Headers();
        let IP=localStorage.getItem('ip');
        let init = {
            method: msg.method,
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };
        return new Promise((resolve, reject) => {
            fetch(IP + msg.url, init).then((resolve) => {
                let retCode = resolve.status;
                // console.log(resolve);
                // return resolve.json();
                if (retCode === 200) {

                    return resolve.json()
                } else if (retCode === 404) {
                    alert(404)
                    //页面跳转
                }
                else if (retCode === 400) {
                    alert(400)
                    //页面跳转  状态为1的信息
                }
                else if (retCode === 500) {
                    alert(500)
                    //页面跳转
                }
                else if (retCode === 401) {
                    alert(401)
                    //页面跳转
                }
            }).then(data => {
                resolve(data);
            })
        })
    }
}