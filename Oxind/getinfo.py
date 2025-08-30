import requests
from flask import Flask, render_template, request, redirect,jsonify,Response
import pyrebase
city = 0
state = 0

config = {
            apiKey: "AIzaSyBFz08XTX6xwItjdgNcZsW3LYYfg1CJjEc",
            authDomain: "covid-oxy.firebaseapp.com",
            databaseURL: "https://covid-oxy-default-rtdb.firebaseio.com",
            projectId: "covid-oxy",
            storageBucket: "covid-oxy.appspot.com",
            messagingSenderId: "289037954196",
            appId: "1:289037954196:web:ebb39e5ae4f697af079881",
            measurementId: "G-W3WCXWHP9V"
            }

firebase = pyrebase.initialize_app(config)
db = firebase.database()    
app = Flask(__name__)

@app.route("/form", methods=["GET", "POST"])
def update():
    if request.method == "POST":
        state = request.form['state']
        city = request.form['city']
        global state
        global city

@app.route("/", methods=["GET", "POST"])
def show():
    
    if request.method == "POST":
        user = db.child("users").child(state).child(city).get()
        t = user.val()['providername']
        y = user.val()['providerphone']
        q = user.val()['provideraddress']
        w = user.val()['oxygentype']
        b = user.val()['oxygenqty']

        return render_template("index.html")
    
if __name__ == '__main__':
    app.run(debug=True)