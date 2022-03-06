//YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyAweRQa_2BvSTntYKjlETlsbi-ucc4Q7tg",
  authDomain: "proswit-433d6.firebaseapp.com",
  databaseURL: "https://proswit-433d6-default-rtdb.firebaseio.com",
  projectId: "proswit-433d6",
  storageBucket: "proswit-433d6.appspot.com",
  messagingSenderId: "787227536951",
  appId: "1:787227536951:web:06c9fd881beeb31b1459b2",
  measurementId: "G-YQGFWCFTZK"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
  {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("msg").value = "";

  }
  function getData() 
  {
   firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;

  
  }});});}
  getData();

  function logout()
  {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }