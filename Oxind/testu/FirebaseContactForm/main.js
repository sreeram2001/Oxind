// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBFz08XTX6xwItjdgNcZsW3LYYfg1CJjEc",
  authDomain: "covid-oxy.firebaseapp.com",
  databaseURL: "https://covid-oxy-default-rtdb.firebaseio.com",
  projectId: "covid-oxy",
  storageBucket: "covid-oxy.appspot.com",
  messagingSenderId: "289037954196",
  appId: "1:289037954196:web:ebb39e5ae4f697af079881",
  measurementId: "G-W3WCXWHP9V"
};
  firebase.initializeApp(firebaseConfig);

//In NoSQL database, we have collection which is similar to tables in Relational databases.
//Reference a collection named messages


/*Create an event listener to listen submission of the form*/

//Listen for the form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);


//Submit the form
function submitForm(e) {
  e.preventDefault();

  //Get values
  var name = getInputValues('name');
  var address = getInputValues('address');
  var city = getInputValues('city');
  var state = getInputValues('state');
  var phone = getInputValues('phone');
  var type = getInputValues('type');
  var quantity = getInputValues('quantity');
  var landmark = getInputValues('landmark');

  //console.log(name);

  //Sending the values to firebase to save message
  saveMessages(name, address, city, state, phone,type,quantity,landmark);

  //Show alert
  document.querySelector('.alert').style.display = 'block';

  //Hide alert after 3 seconds
  setTimeout(function(){
    //Set display property back to none.
    document.querySelector('.alert').style.display = 'none';
  }, 3000);

  //clear the form
  document.getElementById('contactForm').reset();

}

//function to get form values which takes id
function getInputValues(id) {
  return document.getElementById(id).value;
}

//function to save the message to firebase
function saveMessages(name, address, city, state, phone,type,quantity,landmark) {


  console.log(name)  
  var messagesRef = firebase.database().ref().child("users").child(city).child(state)
  var newMessageRef = messagesRef.push();

  //Sending an object to 'messages' collection
  newMessageRef.set({
    name: name,
    address: address,
    city: city,
    state: state,
    phone: phone,
    type:  type,
    quantity: quantity,
    landmark:landmark
  });
}
