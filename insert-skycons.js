var icons = new Skycons()

var x = document.getElementsByName("clear-day");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.CLEAR_DAY)
}

var x = document.getElementsByName("partly-cloudy-day");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.PARTLY_CLOUDY_DAY)
}

var x = document.getElementsByName("rain");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.RAIN)
}

var x = document.getElementsByName("snow");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.SNOW)
}


icons.play();
