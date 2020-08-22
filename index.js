setInterval(() => {
    
    d=new Date();
    hourtime = d.getHours();
    minutetime = d.getMinutes();
    secondtime = d.getSeconds();
    if (hourtime > 12)
    {
        ampm = "PM"
    }
    else{
        ampm = "AM"
    }
    hour12format = hourtime % 12;
    

    if (hour12format.toString().length == 1) {
        hour12format = "0" + hour12format;
    }
    if (hourtime.toString().length == 1) {
        hourtime = "0" + hourtime;
    }
    if (secondtime.toString().length == 1) {
        secondtime = "0" + secondtime;
    }
    digitalTime = hour12format+" : "+minutetime+" : "+secondtime+" "+ampm ;
    console.log(digitalTime);
    hrotation = 30* hourtime  + minutetime/2;
    mrotation = minutetime * 6;
    srotation = secondtime * 6;

    hourhand.style.transform = `rotate(${hrotation}deg)`;
    secondhand.style.transform = `rotate(${srotation}deg)`;
    minutehand.style.transform = `rotate(${mrotation}deg)`;

    document.getElementById("digitalClock").innerHTML = `<div>${digitalTime}</div>`;
    
}, 1000);