// Place
let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')

let toplam = document.querySelector('#toplam')
let toplamS = 1;

let vurulan = document.querySelector('#vurulan')
let vurulanS = 1;

// Buttons
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const refresh = document.querySelector("#refresh")
const fullscreen = document.querySelector("#fullscreen")

// create new element
const newTarget = () => {
  let addTarget = document.createElement('li')
  addTarget.innerHTML="<img draggable='false' src='target.png'>"
  addTarget.className="target"
  addTarget.style.cssText= `inset: ${Math.trunc(Math.random()*(ul.clientHeight - 40))}px ${Math.trunc(Math.random()*(ul.clientWidth - 40))}px`
  ul.append(addTarget)
  toplam.textContent = toplamS++
}

// delete new element
ul.addEventListener('click', e => {
  if(e.target.nodeName == "IMG") {
    e.target.remove()
    vurulan.textContent = vurulanS++
  }
})

function baslat() {
  var timer = null;
  var interval = 1000;
  var value = 0;
  start.addEventListener('click', () => {
    if(timer !== null) return;
    timer = setInterval(newTarget, interval);
  })
  stop.addEventListener('click', () => {
    clearInterval(timer)
    timer = null;
  })
}
baslat()
refresh.addEventListener('click', () => {
  location.reload()
})


function toggleFullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
          document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
          document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
  } else {
      if (document.cancelFullScreen) {
          document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
      }
  }
}
   
  /*tıklandığında çalıştırılacak fonksiyonu bağlama*/
  fullscreen.addEventListener('click', toggleFullScreen);