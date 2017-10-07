(function() {

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC1VsdPvNvaW8CotfebX5Czy0FP2Jh5INM",
    authDomain: "pnhs-main.firebaseapp.com",
    databaseURL: "https://pnhs-main.firebaseio.com",
    projectId: "pnhs-main",
    storageBucket: "pnhs-main.appspot.com",
    messagingSenderId: "741801576752"
  };
  firebase.initializeApp(config);

  //Get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword);
  const btnLogin = document.getElementById('btnLogin');
  const btnSignup = document.getElementById('btnSignup');
  const btnLogout = document.getElementById('btnLogout');
  
  //Add login event
  btnLogin.addEventListener('click', e => {
   //Get email and pass
   const email = txtEmail.value;
   const password = txtPassword.value;
   const auth = firebase.auth();
   //Sign in
   const promise = auth.signInWithEmailAndPassword(email, pass);
   promise.catch(e => console.log(e.message));
 });
 
 //Add signup event
 btnSignup.addEventListener('click', e => {
   //Get email and pass
   const email = txtEmail.value;
   const password = txtPassword.value;
   const auth = firebase.auth();
   //Sign in
   const promise = auth.createUserWithEmailAndPassword(email, pass);
   promise
      .catch(e => console.log(e.message));
 });
 
 btnLogout.addEventListener('click', => {
  firebase.auth().signOut();
 
 //Add realtime listener
 firebase.auth().onAuthStateChanged(firebaseUser => {
  if(firebaseUser) {
    console.log(firebaseUser);
    btnLogout.classList.remove('hide');
  } else {
    console.log('not logged in');
    btnLogout.classList.remove('hide');
  }
}());
