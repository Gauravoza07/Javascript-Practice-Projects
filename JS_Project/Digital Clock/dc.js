const clock = document.getElementById('clock')

//setinterval method use to run the method at your interval of time

setInterval(function () {
    let date = new Date();
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);