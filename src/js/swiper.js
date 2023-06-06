let swiper = null
let swiperTwo = null
let swiperThree = null
function handleResize() {
  let windowWidth = window.innerWidth
  let element = document.getElementsByClassName('check-width')
  let element2 = document.getElementsByClassName('brands-list__navigation')
  if (windowWidth >= 768) {
    if (swiper) {
      swiper.destroy()
      swiper = null
      swiperTwo.destroy()
      swiperTwo = null
    }
    for (let i = 0; i < element.length; i++) {
      element[i].classList.remove('swiper-slide')
    }
    element2[0].classList.remove('swiper-wrapper')
  } else {
    element2[0].classList.add('swiper-wrapper')
    if (!swiper) {
      swiper = new Swiper('.mySwiper', {
        pagination: {
          el: '.swiper-pagination'
        }
      })
      swiperTwo = new Swiper('.mySwiper-two', {
        pagination: {
          el: '.swiper-pagination-two'
        }
      })
      swiperThree = new Swiper('.mySwiper-three', {
        pagination: {
          el: '.swiper-pagination-three'
        }
      })
    }
    for (let i = 0; i < element.length; i++) {
      element[i].classList.add('swiper-slide')
    }
  }
}

window.addEventListener('resize', handleResize)
handleResize()

let button = document.querySelector('.brands-list__button-next')
let pcBrands = document.getElementsByClassName('brands-list__pc')
let buttonHide = document.querySelector('.brands-list__button-next-hide')

button.addEventListener('click', function () {
  if ((pcBrands[0].style.display = 'none')) {
    for (let i = 0; i < pcBrands.length; i++) {
      pcBrands[i].style.display = 'block'
    }
  }
  button.style.display = 'none'
  buttonHide.style.display = 'flex'
})
buttonHide.addEventListener('click', function () {
  if ((pcBrands[0].style.display = 'block')) {
    for (let i = 0; i < pcBrands.length; i++) {
      pcBrands[i].style.display = 'none'
    }
  }
  buttonHide.style.display = 'none'
  button.style.display = 'flex'
})

let buttonTwo = document.querySelector('.type-list__button-next')
let pcType = document.getElementsByClassName('type-list__pc')
let buttonTwoHide = document.querySelector('.type-list__button-next-hide')

buttonTwo.addEventListener('click', function () {
  if ((pcType[0].style.display = 'none')) {
    for (let i = 0; i < pcType.length; i++) {
      pcType[i].style.display = 'block'
    }
  }
  buttonTwo.style.display = 'none'
  buttonTwoHide.style.display = 'flex'
})
buttonTwoHide.addEventListener('click', function () {
  if ((pcType[0].style.display = 'block')) {
    for (let i = 0; i < pcType.length; i++) {
      pcType[i].style.display = 'none'
    }
  }
  buttonTwoHide.style.display = 'none'
  buttonTwo.style.display = 'flex'
})
