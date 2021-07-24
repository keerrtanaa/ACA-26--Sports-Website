
  var firebaseConfig = {
    apiKey: "AIzaSyAdX6m5LjQCDRoJexpkcdVJq-Ye-SkBTXI",
    authDomain: "sports-website-e81d7.firebaseapp.com",
    projectId: "sports-website-e81d7",
    storageBucket: "sports-website-e81d7.appspot.com",
    messagingSenderId: "641771449443",
    appId: "1:641771449443:web:fe537a526aa032f3c59c56"
  };

  firebase.initializeApp(firebaseConfig);
  var UserInputsRef= firebase.database().ref('UserInputs')
   document.getElementById('form').addEventListener("submit",submitform)
   function submitform(e){
     e.preventDefault();
     
  function readResults(year){
    var centers;
    var results=firebase.database().ref(year);
    results.on('value',(data)=> {
      var ranks = data.val();
      document.getElementById('result').innerHTML="<br>"+ centers.toUpperCase();
    })
  }
