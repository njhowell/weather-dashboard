from flask import Flask
from flask import render_template
import forecastio
from datetime import datetime
from dateutil import tz

import config
app = Flask(__name__)

@app.template_filter('localtime')
def _jinja2_filter_datetime(date):
    return date.replace(tzinfo=tz.tzutc()).astimezone(tz.gettz('Europe/London')).strftime("%H%M")


@app.route('/')
def index():
    lat = 52.3454
    lng = 0.3347

    forecast = forecastio.load_forecast(config.forecastio_api_key, lat, lng)

    return render_template('index.html', forecast=forecast)




if __name__ == "__main__":
    application.run(host='0.0.0.0')
