var config = 
{
    apiKey: "AIzaSyBFz08XTX6xwItjdgNcZsW3LYYfg1CJjEc",
    authDomain: "covid-oxy.firebaseapp.com",
    databaseURL: "https://covid-oxy-default-rtdb.firebaseio.com",
    projectId: "covid-oxy",
    storageBucket: "covid-oxy.appspot.com",
    messagingSenderId: "289037954196",
    appId: "1:289037954196:web:ebb39e5ae4f697af079881",
    measurementId: "G-W3WCXWHP9V"
};


firebase.initializeApp(config);

var con = firebase.database().ref('users');

document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();

    var userInfo = con.push();
    userInfo.set({
        name: getId("name"),
        email: getId("email"),
        password: getId("password")
    });

    alert("sent");
    console.log("sent");
    document.getElementById("form").reset();
});

function getId(Id)
{
    return document.getElementById(id).value;
}