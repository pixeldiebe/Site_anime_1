// ------------------ Create the Elements --------------------
const wrapperElem = document.querySelector('.anime-wrapper');
const numberOfdivs = 5;

function createElem() {
  let elem = document.createElement('div');
  //elem.classList.add('expand');
  elem.setAttribute("class", "expand expand-js-1");
  wrapperElem.appendChild(elem);
}
for(let i = 0; i < numberOfdivs; i++) createElem();

// ------------------ Header Animation -----------------------
var colors = ["#f5db61","#eeffac", "#a7c26a", "#77882f", "#8e2800"];
var colors2 = ["#fff0a5", "#b4beaf","#6c9577", "#486051", "#404940"];

var expandBox = anime({
  targets: '.expand-js-1',
  duration: 1300,
  //direction: 'reverse',
  width: [ anime.stagger(['20%','100%'])],
  //width: '100%',
  easing: 'easeInOutSine',
  skewX: [ anime.stagger([-120, -20]) , 0 ],
  delay: anime.stagger(300),
  background: function(el, i, l){
    return colors2[i];
  },
});


// --------------- Run Animation by trigger ----------------------------
function runbox2() {

  let directionSwitch = 'normal';

  var expandBox2 = anime({
    targets: '.expand-js-2',
    direction: directionSwitch,
    duration: 1500,
    easing: 'easeInOutSine',
    skewY: [-90,0],
    opacity: [0,1],
    delay: anime.stagger(400),
    background: function(el, i, l){
      return colors[i];
    },
    autoplay: true,
  });

}



// --------------- Animate the button ----------------------------
//document.getElementById('gobutton').onmouseover = mytest();
document.getElementById('gobutton').addEventListener("mouseover", vibrate );

function mytest() {
  console.log("success");
}

function vibrate() {

  console.log("mouse-over");

  anime({
    targets: '#gobutton',
    translateX: ['-.25rem', '.25rem'],
    duration: 50,
    direction: 'alternate',
    loop: 10,
    easing: 'easeOutBack',
  });

}

// ---------------- Test Animation for fun ----------------------

//anime animation
var blocksAnimation = anime({
    targets: '.js-box',
    direction: 'normal',
    duration: 4000,
/*
    translateX: function(el, i , l) {
        return (l + i) * 100;
    },
    */
    translateX: [
      {
        value: 100,
      },
      {
        value: 300,
      },
      {
        value: 600,
      }
    ],
    easing: 'easeOutCubic',
    background: ['#000','#FF6138','#000'],
    delay: (elm, i)  => i * 100,
    //loop: true,
});
