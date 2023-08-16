let navbar = document.getElementById('navbar')
let languageSection = document.getElementById('language-section')
let languagePosition = languageSection.getBoundingClientRect()

function watchWindowChange() {
  if (languagePosition.height > window.scrollY) {
    navbar.classList.remove(
      'position-fixed',
      'top-0',
      'shadow-sm',
      'w-100',
      'z-9999'
    )
  } else {
    navbar.classList.add(
      'position-fixed',
      'top-0',
      'shadow-sm',
      'w-100',
      'z-9999'
    )
  }
}

watchWindowChange()

window.addEventListener('scroll', watchWindowChange)
