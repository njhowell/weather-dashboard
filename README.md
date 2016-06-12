# Weather Dashboard

## About
This is a simple web application that displays a weather dashboard for a chosen location. It is indended to be displayed on large screens, e.g. TVs or other digital signage-type applications.

It uses the [Forecast.io](http://forecast.io) API to get weather information and icons are the amazing [Skycons](https://darkskyapp.github.io/skycons/) set from the same people.

## Get Started
This application is written using the Flask python framework. In order to run it, you need Flask, python-dateutil and geopy. I also use gunicorn to run it, but you may chose something else.

To get started on Ubuntu (or similar) systems:

```
sudo apt-get install -y python-pip python-dateutil
sudo pip install flask gunicorn geopy
```

Next, clone this repo somewhere. In there you will need to create a file called `config.py` with the following contents:
```
forecastio_api_key = "<your api key>"
```

You can obtain and API key for Forecast by registering at their [Developer page](https://developer.forecast.io/) (don't worry, it's free).

Once you have the API key set, you can start the application.

```
gunicorn --bind 0.0.0.0:5000 weather-dashboard:app
```

You may change the bind address and port to whatever you like.
