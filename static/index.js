'use strict';
function title() {
    let OriginTitile = document.title, titleTime;
    document.addEventListener('visibilitychange', function () {
        if (document.hidden) {
            document.title = 'Where are you going?';
            clearTimeout(titleTime);
        } else {
            document.title = 'Hi again!';
            titleTime = setTimeout(function () {
                document.title = OriginTitile;
            }, 2000);
        }
    });
}

function httpGet(theUrl) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); // false for synchronous request
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

function reset_money() {
    if (confirm('Are you sure you want to reset emoney to 0?')) {
        httpGet('http://data.yatumankan.cf/save/0');
        location.reload();
    }
    else {
    }
}

function add_money() {
    var text = h3.innerText;
    var num = parseFloat(text);
    h3.innerText = num + 1;
    httpGet('http://data.yatumankan.cfsave/' + h3.innerText);
}

function sub_money() {
    var text = h3.innerText;
    var num = parseFloat(text);
    h3.innerText = num - 1;
    httpGet('http://data.yatumankan.cf/save/' + h3.innerText);
}

function get_money() {
    var xhr = new XMLHttpRequest();
    xhr.timeout = 10000;
    xhr.open("GET", 'http://data.yatumankan.cf/get', true);
    xhr.onload = function (event) {
        var money = parseFloat(xhr.responseText);
        h3.innerText = money;
    };
    var fail=function (event) {
        alert('Fail to get money number, default to 0');
        var money = 0;
        h3.innerText = money;
    };
    xhr.ontimeout = fail
    xhr.send(null)
}
