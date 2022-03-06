const firebaseConfig = 
{
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

  
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

   function addRoom() 
   {
      room_name = document.getElementById("room_name").value; 
      firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name" });
       localStorage.setItem("room_name", room_name); 
       window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}