
let span_time = document.getElementById("time_span")

function settime(){
    let date = new Date()
let hours= date.getHours()
let minutes = date.getMinutes()
// let time_element = document.createElement("h1")
span_time.textContent = `${hours}:${minutes}`


}

setInterval(()=>{settime()},2000)

