let modal = document.getElementById('myAside')
let openModal = document.getElementById('open-aside')
let closeModal = document.getElementById('aside-close')
let cont = document.getElementById('content')
let body = document.body
openModal.addEventListener('click', function () {
  modal.style.display = 'flex'
  opacityWindow()
})
closeModal.addEventListener('click', function () {
  modal.style.display = 'none'
  opacityWindow()
})

let modalTwo = document.getElementById('myAsideTwo')
let openModalTwo = document.getElementsByClassName('aside__chat')
let closeModalTwo = document.getElementById('aside-close-two')
openModalTwo[0].addEventListener('click', function () {
  modalTwo.style.display = 'block'
  opacityWindow()
})

closeModalTwo.addEventListener('click', function () {
  modalTwo.style.display = 'none'
  opacityWindow()
})

let modalThree = document.getElementById('myAsideThree')
let openModalThree = document.getElementsByClassName('aside__call')
let closeModalThree = document.getElementById('aside-close-three')
openModalThree[0].addEventListener('click', function () {
  modalThree.style.display = 'block'
  opacityWindow()
})
closeModalThree.addEventListener('click', function () {
  modalThree.style.display = 'none'
  opacityWindow()
})
window.addEventListener('resize', function () {
  if (window.innerWidth < 1120) {
    modal.style.display = 'none'
  }
})
let background = document.getElementsByClassName('background-black')[0]
window.addEventListener('resize', opacityWindow)
function opacityWindow() {
  if (window.innerWidth >= 1120) {
    modal.style.display = 'flex'
    if (
      window.getComputedStyle(modalTwo).display === 'block' ||
      window.getComputedStyle(modalThree).display === 'block'
    ) {
      background.style.display = 'block'
      cont.style.opacity = '0.1'
      modal.style.opacity = '0.1'
    } else {
      cont.style.opacity = '1'
      background.style.display = 'none'
      body.style.overflow = 'scroll'
      modal.style.opacity = '1'
    }
  } else {
    if (window.getComputedStyle(modal).display === 'flex') {
      cont.style.opacity = '0.3'
      background.style.display = 'block'
    } else {
      cont.style.opacity = '1'
      background.style.display = 'none'
      body.style.overflow = 'scroll'
    }
    if (
      window.getComputedStyle(modalTwo).display === 'block' ||
      window.getComputedStyle(modalThree).display === 'block'
    ) {
      cont.style.opacity = '0.3'
      modal.style.display = 'none'
      background.style.display = 'block'
    }
  }
}
window.addEventListener('click', function () {
  if (window.getComputedStyle(background).display === 'block') {
    body.style.overflowY = 'hidden'
  } else {
    body.style.overflowY = 'scroll'
    body.style.overflowX = 'hidden'
  }
})

background.addEventListener('click', function () {
  if (window.innerWidth >= 1120) {
    modalThree.style.display = 'none'
    modalTwo.style.display = 'none'
    background.style.display = 'none'
    cont.style.opacity = '1'
    modal.style.opacity = '1'
  } else {
    modalThree.style.display = 'none'
    modalTwo.style.display = 'none'
    background.style.display = 'none'
    modal.style.display = 'none'
    cont.style.opacity = '1'
  }
})
