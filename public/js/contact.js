// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyARaMtn0YtkCBUxvkFie_NANtNp13wGpT0",
    authDomain: "uniedu-link-africa.firebaseapp.com",
    databaseURL: "https://uniedu-link-africa-default-rtdb.firebaseio.com",
    projectId: "uniedu-link-africa",
    storageBucket: "uniedu-link-africa.appspot.com",
    messagingSenderId: "526049853747",
    appId: "1:526049853747:web:4bbdcd485766839564fe46"
  };
  firebase.initializeApp(firebaseConfig);
  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  //Get value
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get form value
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company: company,
    email: email,
    phone: phone,
    message: message
  });
}
