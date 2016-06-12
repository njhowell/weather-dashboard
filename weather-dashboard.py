from flask import Flask, render_template, request, redirect, url_for
import forecastio
from datetime import datetime
from dateutil import tz
from geopy.geocoders import Nominatim

import config
app = Flask(__name__)

@app.template_filter('localtime')
def _jinja2_filter_datetime(date):
    return date.replace(tzinfo=tz.tzutc()).astimezone(tz.gettz('Europe/London')).strftime("%H%M")

@app.template_filter('weekday')
def _jinja2_filter_weekday(date):
    return date.strftime("%A")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/l', methods=['POST'])
def l():
    #work out location
    geolocator = Nominatim()
    location = geolocator.geocode(request.form['inputLocation'])
    return redirect(url_for('forecast', lat=location.latitude, lng=location.longitude))


@app.route('/f/<lat>/<lng>')
def forecast(lat=52.3454, lng=0.3347):
    forecast = forecastio.load_forecast(config.forecastio_api_key, lat, lng, units="uk")
    return render_template('forecast.html', forecast=forecast)




if __name__ == "__main__":
    application.run(host='0.0.0.0')
