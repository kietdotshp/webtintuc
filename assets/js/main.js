let navbar = document.getElementsByClassName('navbar-custom')
let languageSection = document.getElementsByClassName('language-section')
let languagePosition = languageSection[0].getBoundingClientRect()

let toggleTheme = document.getElementsByClassName('toggle-theme')

let toggleThemeIcon = document.querySelector('.toggle-theme > i')

if (localStorage.getItem('theme')) {
  document.documentElement.classList.toggle('dark-theme')
  if (toggleThemeIcon.classList.contains('fa-circle-half-stroke')) {
    toggleThemeIcon.classList.remove('fa-circle-half-stroke')
    toggleThemeIcon.classList.add('fa-sun')
  } else {
    toggleThemeIcon.classList.add('fa-circle-half-stroke')
    toggleThemeIcon.classList.remove('fa-sun')
  }
}

toggleTheme[0].addEventListener('click', function () {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'dark')
  } else {
    localStorage.setItem('theme', '')
  }
  document.documentElement.classList.toggle('dark-theme')
  if (toggleThemeIcon.classList.contains('fa-circle-half-stroke')) {
    toggleThemeIcon.classList.remove('fa-circle-half-stroke')
    toggleThemeIcon.classList.add('fa-sun')
  } else {
    toggleThemeIcon.classList.add('fa-circle-half-stroke')
    toggleThemeIcon.classList.remove('fa-sun')
  }
  watchWindowChange()
})

function watchWindowChange() {
  if (languagePosition.height > window.scrollY) {
    navbar[0].classList.remove(
      'position-fixed',
      'top-0',
      'shadow-sm',
      'w-100',
      'z-9999',
      'bg-main-red-color'
    )
  } else {
    navbar[0].classList.add(
      'position-fixed',
      'top-0',
      'shadow-sm',
      'w-100',
      'z-9999'
    )
    if (document.documentElement.classList.contains('dark-theme')) {
      navbar[0].classList.add('bg-main-red-color')
    } else {
      navbar[0].classList.remove('bg-main-red-color')
    }
  }
}

watchWindowChange()

window.addEventListener('scroll', watchWindowChange)
