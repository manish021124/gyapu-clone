const registerPwdInput = document.getElementById("register-pwd");
const registerPwdConfirmInput = document.getElementById("register-confirm-pwd");
const loginPwdInput = document.getElementById("login-pwd");
const registerPwdImage = document.getElementById("register-pwd-visibility-image");
const registerPwdConfirmImage = document.getElementById("register-pwd-confirm-visibility-image");
const loginPwdImage = document.getElementById("login-pwd-visibility-image");

registerPwdImage.addEventListener("click", function () { togglePasswordVisibility(registerPwdInput, registerPwdImage) });
registerPwdConfirmImage.addEventListener("click", function () { togglePasswordVisibility(registerPwdConfirmInput, registerPwdConfirmImage) });
loginPwdImage.addEventListener("click", function () { togglePasswordVisibility(loginPwdInput, loginPwdImage) });

function togglePasswordVisibility(input, image) {
  if (input.type === "password") {
    input.type = "text";
    image.src = "/images/account/visibility.svg";
  } else {
    input.type = "password";
    image.src = "/images/account/visibility_off.svg";
  }
}