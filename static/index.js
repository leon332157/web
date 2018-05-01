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
        httpGet('/save/0');
        location.reload();
    }
    else {
    }
}

function add_money() {
    var h3 = document.getElementById('money');
    var text = h3.innerText;
    var num = parseFloat(text);
    h3.innerText = num + 1;
    httpGet('/save/' + h3.innerText);
}

function sub_money() {
    var h3 = document.getElementById('money');
    var text = h3.innerText;
    var num = parseFloat(text);
    h3.innerText = num - 1;
    httpGet('/save/' + h3.innerText);
}