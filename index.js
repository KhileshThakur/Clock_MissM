
let hr, hrk, a, min, mink, sec, seck, m, h, date, day;
let daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"];

setTimeout(function () {
    a = new Date;
    hr = a.getHours();
    hrk = 0;
    hrk = hr * 30 - 90;
    document.querySelector('.hr').style.transform = `rotate(${hrk}deg)`;

    min = a.getMinutes();
    mink = 0;
    mink = min * 6 - 90;
    document.querySelector('.min').style.transform = `rotate(${mink}deg)`;

    sec = a.getSeconds();
    seck = 0;
    seck = sec * 6 - 90;
    document.querySelector('.sec').style.transform = `rotate(${seck}deg)`;
}, 1);


setInterval(function () {
    a = new Date;
    hr = a.getHours();
    hrk = 0;

    hrk = hr * 30 - 90;
    document.querySelector('.hr').style.transform = `rotate(${hrk}deg)`;

}, 120000);

setInterval(function () {
    a = new Date;
    min = a.getMinutes();
    mink = 0;

    mink = min * 6 - 90;
    document.querySelector('.min').style.transform = `rotate(${mink}deg)`;

}, 60000);


setInterval(function () {
    a = new Date;
    sec = a.getSeconds();
    seck = 0;

    seck = sec * 6 - 90;
    document.querySelector('.sec').style.transform = `rotate(${seck}deg)`;

}, 1000);


setInterval(function () {
    h = a.getHours();
    m = a.getMinutes();
    s = a.getSeconds();
    date = a.toLocaleDateString();
    day = a.getDay();
    document.getElementsByClassName('para')[0].innerHTML = `<h2>Time :   ${h}:${m}:${s}<br>Date :  ${date}<br>Day :  ${daylist[day]}</h2>`;

}, 1000);



