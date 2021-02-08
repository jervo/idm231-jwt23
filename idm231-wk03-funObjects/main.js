const trumpetObj = document.getElementById('trumpet');
const frenchHornObj = document.getElementById('frenchHorn');
const tubaObj = document.getElementById('tuba');

const botObj = document.getElementById('bot');

// trumpetObj.addEventListener('click', function(evt){
//   UserPicked(evt.target.id);
// });

trumpetObj.addEventListener('click', function(){
  //console.log('Brass Trumpet');
  UserPicked('Brass Trumpet');
});
frenchHorn.addEventListener('click', function(){
  //console.log('Brass French Horn');
  UserPicked('Brass French Horn');
});
tubaObj.addEventListener('click', function(){
  //console.log('Brass Tuba');
  UserPicked('Brass Tuba');
});

function UserPicked(whichOne) {
  console.log('UserPicked fun ' + whichOne);
  // botObj.textContent = whichOne;
  // botObj.textContent = whichOne.toUpperCase();
  botObj.innerHTML = '<h1>' + whichOne.toUpperCase() + '</h1>';
  // Display large image
  // Display Date Range 
  // Display Description
  // Play item sound
}