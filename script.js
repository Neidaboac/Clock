var $ = document.querySelector.bind(document);
var $$ = document.querySelector.bind(document);

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 -> 23
    var m = date.getMinutes(); // 0 -> 59
    var s = date.getSeconds(); // 0 -> 59
    var sessions = "AM"


    var d = date.getDay(); // 0 -> 6, sun -> sat
    var dd = date.getDate(); // 0 -> 31
    var mm = date.getMonth(); // 0 -> 11
    var yy = date.getFullYear(); // 1000 -> 9999


    if (h == 0) {
        h = 12;
    }

    if (h > 12) {
        h = h - 12
        sessions = "PM"
    }

    if (h < 10) {
        h = "0" + h
    } else {
        h = h
    }

    if (m < 10) {
        m = "0" + m
    } else {
        m = m
    }

    if (s < 10) {
        s = "0" + s
    } else {
        s = s
    }

    // Day
    if (d === 0) {
        d = "Sun"
    }
    if (d === 1) {
        d = "Mon"
    }
    if (d === 2) {
        d = "Tue"
    }
    if (d === 3) {
        d = "Wed"
    }
    if (d === 4) {
        d = "Thu"
    }
    if (d === 5) {
        d = "Fri"
    }
    if (d === 6) {
        d = "Sat"
    }

    // Month
    if (mm === 0) {
        mm = "Jan"
    }
    if (mm === 1) {
        mm = "Feb"
    }
    if (mm === 2) {
        mm = "Mar"
    }
    if (mm === 3) {
        mm = "Apr"
    }
    if (mm === 4) {
        mm = "May"
    }
    if (mm === 5) {
        mm = "Jun"
    }
    if (mm === 6) {
        mm = "Jul"
    }
    if (mm === 7) {
        mm = "Aug"
    }
    if (mm === 8) {
        mm = "Sep"
    }
    if (mm === 9) {
        mm = "Oct"
    }
    if (mm === 10) {
        mm = "Nov"
    }
    if (mm === 11) {
        mm = "Dec"
    }

    // Date 

    if (dd === 1 || dd === 2 || dd === 3 || dd === 21 || dd === 22 || dd === 23 || dd === 31) {
        if (dd === 1 || dd === 21 || dd === 31) {
            dd = dd + "st"
        }
        if (dd === 2 || dd === 22) {
            dd = dd + "nd"
        }
        if (dd === 3 || dd === 23) {
            dd = dd + "rd"
        }
    } else {
        dd = dd + "th"
    }

    // Show clock
    var time = h + ":" + m + ":" + s + " " + sessions;
    var clockDisplay = $('.clock')
    clockDisplay.innerHTML = time

    // Show calendar
    var calendar = d + ", " + mm + " " + dd + ", " + yy;
    var calendarDisplay = $('.date')
    calendarDisplay.innerHTML = calendar

    // setTimeout(showTime, 1000)


}
setInterval(showTime, 1000)

showTime()