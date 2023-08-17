function handleValidationMess(element, message) {
  const parent = element.closest('.form-group')
  const error = parent.querySelector('.show-error')
  return (error.innerHTML = message)
}

function validateForm() {
  // initial valid state
  let isValid = true

  // get all fieldInput
  let fieldName = document.getElementById('name')
  let fieldUserName = document.getElementById('username')
  let fieldPassword = document.getElementById('password')
  let fieldConfirmPassword = document.getElementById('confirm_password')
  let fieldEmail = document.getElementById('email')
  let fieldPhone = document.getElementById('phone')
  let fieldBirthday = document.getElementById('birthday')
  let fieldGender = document.querySelectorAll('input[name="gender"]')
  let fieldAddress = document.getElementById('address')

  // regex
  let specialCharacterRegex = /[`!@#$%^&*()+\-=\[\]{};':"\\|,.<>\/?~]/
  let regexEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
  let regexMobile = /^(?:\+84|0)[1-9][0-9]{8}$/

  // fullname validation
  const nameValue = fieldName.value
  if (!nameValue.trim()) {
    handleValidationMess(fieldName, 'Họ tên không được để trống!')
    isValid = false
  } else if (nameValue.length > 200) {
    handleValidationMess(fieldName, 'Họ tên không quá 200 ký tự!')
    isValid = false
  } else if (specialCharacterRegex.test(nameValue)) {
    handleValidationMess(fieldName, 'Họ tên không được chứa ký tự đặc biệt!')
    isValid = false
  } else {
    handleValidationMess(fieldName, '')
  }

  // username validation
  const usernameValue = fieldUserName.value
  if (!usernameValue.trim()) {
    handleValidationMess(fieldUserName, 'Username không được để trống!')
    isValid = false
  } else if (usernameValue.length > 200) {
    handleValidationMess(fieldUserName, 'Username không quá 200 ký tự!')
    isValid = false
  } else if (specialCharacterRegex.test(usernameValue)) {
    handleValidationMess(
      fieldUserName,
      'Username không được chứa ký tự đặc biệt!'
    )
    isValid = false
  } else {
    handleValidationMess(fieldUserName, '')
  }

  // password validation
  const passwordValue = fieldPassword.value
  if (!passwordValue.trim()) {
    handleValidationMess(fieldPassword, 'Mật khẩu không được để trống!')
    isValid = false
  } else if (passwordValue.length < 6 || passwordValue.length > 51) {
    handleValidationMess(fieldPassword, 'Mật khẩu phải từ 6 đến 50 ký tự!')
    isValid = false
  } else {
    handleValidationMess(fieldPassword, '')
  }

  // confirm password validation
  const confirmPasswordValue = fieldConfirmPassword.value
  if (!confirmPasswordValue.trim()) {
    handleValidationMess(
      fieldConfirmPassword,
      'Xác nhận mật khẩu không được để trống!'
    )
    isValid = false
  } else if (
    confirmPasswordValue.length < 6 ||
    confirmPasswordValue.length > 51
  ) {
    handleValidationMess(
      fieldConfirmPassword,
      'Xác nhận mật khẩu phải từ 6 đến 50 ký tự!'
    )
    isValid = false
  } else if (confirmPasswordValue !== passwordValue) {
    handleValidationMess(
      fieldConfirmPassword,
      'Xác nhận mật khẩu không trùng khớp!'
    )
    isValid = false
  } else {
    handleValidationMess(fieldConfirmPassword, '')
  }

  // email validation
  const emailValue = fieldEmail.value
  if (!emailValue.trim()) {
    handleValidationMess(fieldEmail, 'Email không được để trống!')
    isValid = false
  } else if (!regexEmail.test(emailValue)) {
    handleValidationMess(fieldEmail, 'Email không đúng định dạng!')
    isValid = false
  } else if (emailValue.length > 100) {
    handleValidationMess(fieldEmail, 'Email không quá 100 ký tự!')
    isValid = false
  } else {
    handleValidationMess(fieldEmail, '')
  }

  // phone validation
  const phoneValue = fieldPhone.value
  if (!phoneValue.trim()) {
    handleValidationMess(fieldPhone, 'Số điện thoại không được để trống!')
    isValid = false
  } else if (!regexMobile.test(phoneValue)) {
    handleValidationMess(fieldPhone, 'Số điện thoại không đúng định dạng!')
    isValid = false
  } else {
    handleValidationMess(fieldPhone, '')
  }

  // birthday validation
  const birthdayValue = fieldBirthday.value
  let birthayTimestamp = new Date(birthdayValue).getTime()
  let today = new Date().getTime()
  if (!birthdayValue) {
    handleValidationMess(fieldBirthday, 'Ngày sinh không được để trống!')
    isValid = false
  } else if (birthayTimestamp > today) {
    handleValidationMess(
      fieldBirthday,
      'Ngày sinh không được lớn hơn ngày hiện tại!'
    )
    isValid = false
  } else {
    handleValidationMess(fieldBirthday, '')
  }

  // gender validation
  let genderChecked = Array.from(fieldGender).find(field => field.checked)
  if (!genderChecked) {
    handleValidationMess(fieldGender[0], 'Giới tính không được để trống!')
    isValid = false
  } else {
    handleValidationMess(fieldGender[0], '')
  }

  // address validation
  const addressValue = fieldAddress.value
  if (addressValue.length > 500) {
    handleValidationMess(fieldAddress, 'Địa chỉ không quá 500 ký tự!')
    isValid = false
  }

  return isValid
}

document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault()
  if (validateForm()) {
    const formData = new FormData(event.target)
    const formValues = Object.fromEntries(formData)
    // get form values object
    console.log(formValues)
    toastr.success('Đăng ký thành công!', 'Success')
    setTimeout(() => {
      window.location.href = 'HomePage.html'
    }, 1000)
  }
})
