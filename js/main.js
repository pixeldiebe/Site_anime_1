
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

var colors = ["#FF6138","#2980B9", "#282741", "#FFBE53"];

var expandBox = anime({
  targets: '.expand-js-1',
  duration: 1000,
  width: '100%',
  easing: 'easeInOutSine',
  skewX: [ anime.stagger([-120, -20]) , 0 ],
  delay: anime.stagger(300),
  background: function(el, i, l){
    return colors[i];
  },
});

function runbox2() {

  console.log("the function has run");

  var expandBox2 = anime({
    targets: '.expand-js-2',
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
