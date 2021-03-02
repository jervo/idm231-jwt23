//
//
// 
function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("blackScreen");
}

const pisObj = document.getElementById('pis');
const scoObj = document.getElementById('sco');
const aquObj = document.getElementById('aqu');

const displayObj = document.getElementById('display');

pisObj.addEventListener('click', function (evt) {
  console.log('pis button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

scoObj.addEventListener('click', function (evt) {
  console.log('sco button clicked: ' + evt.target.id); 
  const idName = evt.target.id;
  userPicked(idName);
});

aquObj.addEventListener('click', function (evt) {
  console.log('aqu button clicked: ' + evt.target.id);
  const idName = evt.target.id;
  userPicked(idName);
});

function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'pis':
      // displayObj.src = 'img/ful_pisces.png';
      zDisplayObj.src = 'img/sml_pisces.png';
      // display title
      zTitleObj.innerHTML = 'PISCES';
      // display date range
      zDateRangeObj.innerHTML = '##-Month to ##-Month';
      // display description
      zMoreInfo.innerHTML = '<p>Pisces are cool, they swim in water.</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      bulletObj.play();
      break;
    case 'sco':
      // displayObj.src = 'img/ful_scorpio.png';
      zDisplayObj.src = 'img/sml_scorpio.png';
      // display title
      zTitleObj.innerHTML = 'SCORPIO';
      // display date range
      zDateRangeObj.innerHTML = '##-Month to ##-Month';
      // display description
      zMoreInfo.innerHTML = '<p>Scorpio are .....</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      haloObj.play();
      break;  
    case 'aqu':
      // displayObj.src = 'img/ful_aquarius.png';
      zDisplayObj.src = 'img/sml_aquarius.png';
      // display title
      zTitleObj.innerHTML = 'AQUARIUS';
      // display date range
      zDateRangeObj.innerHTML = '##-Month to ##-Month';
      // display description
      zMoreInfo.innerHTML = '<p>Aquarius are .....</p>';
      // Show hide modal
      modal.hidden = !modal.hidden;
      // play sound
      stopAllAudio();
      waterObj.play();
      break;
    default:
      displayObj.src = 'img/ful_blank.png';
  }
}

// Sound Controls
//

function stopAllAudio() {
  bulletObj.pause();
  bulletObj.currentTime = 0;
  //
  haloObj.pause();
  haloObj.currentTime = 0;
  //
  waterObj.pause();
  waterObj.currentTime = 0;
}

const bulletObj = document.getElementById('sndBullet');
const haloObj = document.getElementById('sndHalo');
const waterObj = document.getElementById('sndWater');

// Modal Controls
//

const modal = document.getElementById('modal');

const closeModalObj = document.getElementById('btn-modal-close');
closeModalObj.addEventListener('click', function() {
  modal.hidden = !modal.hidden;
  stopAllAudio();
});

// Link modal element/objects to JS
const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');




// Calendar Input Code
//

const userSubmitObj = document.getElementById('userSubmit');

userSubmitObj.addEventListener('click', function () {
  console.log('User submit button clicked');
  // Get the user first name and store it in a variable
  const userFirstName = document.getElementById('fname').value;
  console.log('userFirstName is: ' + userFirstName);

  // Get the user date and extract the month of year and day of month
  const userBday = new Date(document.getElementById('bday').value);
  console.log('userBday is: ' + userBday);

  // Figure out the zodiac sign based on month and of year and day of month
  let whichMonth = userBday.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);

  const whichDayOfMonth = userBday.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  let AstroSign = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "aqu";
  }

  console.log('AstroSign is: ' + AstroSign);

  userPicked(AstroSign);
  // Display custom image based on zodiac sign

}); 
