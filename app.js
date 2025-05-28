window.onload = () => {
    function showTime() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        hours = (hours < 10) ? '0' + hours : hours;
        minutes = (minutes < 10) ? '0' + minutes : minutes;
        seconds = (seconds < 10) ? '0' + seconds : seconds;

        let time24Hr = hours + ':' + minutes + ':' + seconds + '\n';

        //12 hours time
        let hours12 = date.getHours();
        let endStr = (hours12 < 12) ? 'AM' : 'PM';
        hours12 = (hours12 > 12) ? hours12 - 12 : hours12;
        if (hours12 == '0')
            hours12 = '12';

        hours12 = (hours12 < 10) ? '0' + hours12 : hours12;

        let time12Hr = hours12 + ':' + minutes + ':' + seconds + ' ' + endStr;
        document.querySelector("#myClock").innerText = time24Hr + time12Hr;


        setTimeout(showTime, 1000);
    }

    showTime();
}