const trumpetObj = document.getElementById('trumpet');
const cornetObj = document.getElementById('cornet');
const tubaObj = document.getElementById('tuba');

const botObj = document.getElementById('bot');

trumpetObj.addEventListener('click', function(){
  // My first method call
  // console.log('Trumpet button was clicked on');
  UserPicked('trumpet');
});

cornetObj.addEventListener('click', function(){
  // My first method call
  // console.log('Cornet button was clicked on');
  UserPicked('cornet');
});

tubaObj.addEventListener('click', function(){
  // My first method call
  // console.log('Tuba button was clicked on');
  UserPicked('tuba');
});

function UserPicked(whichOne) {
  console.log('User called this user picked function: ' + whichOne);
  // window.alert(whichOne);
  // botObj.textContent = 'My favorite instrument is a: ' + whichOne;
  botObj.innerHTML = '<h1>' + whichOne.toUpperCase() + '</h1>';
  
  // Display large image
  // Display the Date range
  // Display Description
  // Play sound
}
