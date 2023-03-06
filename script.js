// Place
let ul = document.querySelector('ul')
let li = document.querySelectorAll('li')
// Buttons
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")
const refresh = document.querySelector("#refresh")

// Create new target and delete target element function
const newTarget = () => {
  // create new element
  let addTarget = document.createElement('li')
  addTarget.innerHTML="<img draggable='false' src='target.png'>"
  addTarget.className="target"
  addTarget.style.cssText= `inset: ${Math.trunc(Math.random()*460)}px ${Math.trunc(Math.random()*960)}px`
  ul.append(addTarget)
  // delete new element
  li = document.querySelectorAll('li')
  li.forEach(event => {
    event.addEventListener('click', e => {
      e.target.remove()
    })
  })
}


start.addEventListener('click', () => {
  var interval = setInterval(newTarget, 500)
  start.style.display="none"
  stop.style.display="block"
  stop.addEventListener('click', () => {
    clearInterval(interval)
    stop.style.display="none"
    refresh.style.display="block"
    refresh.addEventListener('click', () => {
      location.reload()
    })
  })
})

