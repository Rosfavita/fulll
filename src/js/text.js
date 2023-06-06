let TextHidden = document.getElementsByClassName('info__main-text-desktop')[0]
let TextHiddenTwo = TextHidden.getElementsByClassName(
  'info__main-text-desktop-full'
)[0]
let TextButton = document.getElementsByClassName('info__button-next')[0]
let TextHiddenButton = document.getElementsByClassName(
  'info__button-next-hide'
)[0]

TextButton.addEventListener('click', openText)
TextHiddenButton.addEventListener('click', closeText)
window.addEventListener('resize', function () {
  if (window.innerWidth < 767) {
    TextHidden.style.display = 'none'
    TextHiddenTwo.style.display = 'none'
    TextButton.style.display = 'flex'
    TextHiddenButton.style.display = 'none'
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    TextHiddenTwo.style.display = 'none'
    TextHidden.style.display = 'block'
    TextButton.style.display = 'flex'
    TextHiddenButton.style.display = 'none'
  } else {
    TextHiddenTwo.style.display = 'inline'
    TextHidden.style.display = 'block'
  }
})

function closeText() {
  if (window.innerWidth < 767) {
    TextHidden.style.display = 'none'
    TextHiddenTwo.style.display = 'none'
    TextButton.style.display = 'flex'
    TextHiddenButton.style.display = 'none'
  } else if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    TextHiddenTwo.style.display = 'none'
    TextButton.style.display = 'flex'
    TextHiddenButton.style.display = 'none'
  }
}
function openText() {
  if (window.innerWidth < 767) {
    TextHidden.style.display = 'block'
    TextHiddenTwo.style.display = 'inline'
    TextButton.style.display = 'none'
    TextHiddenButton.style.display = 'flex'
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1120) {
    TextHiddenTwo.style.display = 'inline'
    TextButton.style.display = 'none'
    TextHiddenButton.style.display = 'flex'
  }
}
