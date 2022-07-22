function showTime(){
    let date = new Date()

    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()

    hours = formateHours(hours)

    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    let formateTime = getFormateTime(hours)

    document.querySelector("#clock").innerHTML = `${hours} : ${minutes} : ${seconds} : ${formateTime}`
}

function addZero(time){
    if(time < 10){
        time = '0' + time;
    }
    return time
}

function formateHours(time){
    if(time >= 12){
        time = time - 12
    }
    return time
}

function getFormateTime(time){
    let formate = 'AM'

    if(time >= 12){
        formate = 'PM'
    }
    return formate
}

showTime()

setInterval(showTime, 1000)