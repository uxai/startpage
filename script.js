function search() {
    window.location.href = "https://duckduckgo.com/?q=" + document.getElementById("search").value
}
function setTime() {
    let greeting = document.getElementById("greeting")
    let hour     = document.getElementById("hour")
    let minute   = document.getElementById("minute")
    let second   = document.getElementById("second")
    let moon     = document.getElementById("moon-icon")
    let sun      = document.getElementById("sun-icon")

    const date = new Date()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    
    if(h < 12 && h > 5) {
        greeting.innerHTML = "Good Morning!"
        if(!sun.classList.contains("active")) {
            sun.classList.add("active")
        }
        moon.classList.remove("active")
    } else if(h < 18) {
        greeting.innerHTML = "Good Afternoon!"
        if(!sun.classList.contains("active")) {
            sun.classList.add("active")
        }
        moon.classList.remove("active")
    } else if(h <= 23) {
        greeting.innerHTML = "Good Evening!"
        if(!moon.classList.contains("active")) {
            moon.classList.add("active")
        }
        sun.classList.remove("active")
    } else {
        gretting.innerHTML = "Good Night!"
        if(!moon.classList.contains("active")) {
            moon.classList.add("active")
        }
        sun.classList.remove("active")
    }
    hour.innerHTML = (h < 10) ? "0" + h : h
    minute.innerHTML = (m < 10) ? "0" + m : m
    second.innerHTML = (s < 10) ? "0" + s : s
    setTimeout(setTime, 1000);
}
setTime()