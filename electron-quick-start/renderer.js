// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const request = require('request')
let result = document.getElementById('result'),
    btn = document.getElementsByTagName('button')[0];
btn.addEventListener('click', function () {
    request({
        url: 'http://gank.io/api/data/%E7%A6%8F%E5%88%A9/500/1',
        method: 'GET',
    }, function (error, response, body) {
        let data = JSON.parse(body),
            random = Math.floor( Math.random() * data.results.length),
            imgStr = `<img  src='${data.results[random].url}' class ='img-responsive center-block'>`
        result.innerHTML = imgStr
        console.log(data);
        
    })
})