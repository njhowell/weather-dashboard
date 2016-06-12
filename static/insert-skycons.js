var icons = new Skycons()

var x = document.getElementsByName("clear-day");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.CLEAR_DAY);
}

var x = document.getElementsByName("clear-night");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.CLEAR_NIGHT);
}

var x = document.getElementsByName("partly-cloudy-day");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.PARTLY_CLOUDY_DAY);
}

var x = document.getElementsByName("partly-cloudy-night");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.PARTLY_CLOUDY_NIGHT);
}

var x = document.getElementsByName("cloudy");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.CLOUDY);
}
var x = document.getElementsByName("rain");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.RAIN);
}

var x = document.getElementsByName("sleet");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.SLEET);
}
var x = document.getElementsByName("snow");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.SNOW);
}

var x = document.getElementsByName("wind");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.WIND);
}

var x = document.getElementsByName("fog");
var i;
for (i = 0; i < x.length; i++) {
    icons.add(x[i], Skycons.FOG);
}

icons.play();
