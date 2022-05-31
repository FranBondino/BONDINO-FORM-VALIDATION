window.onload = function() {

    // Input
  var nameVar = document.getElementById('nombreInput');
  var surNameVar = document.getElementById('apellidoInput');
  var emailVar = document.getElementById('correoInput');
  var telefonoVar = document.getElementById('telefonoInput');
  var direccionVar = document.getElementById('direccionInput')
  var passwordVar = document.getElementById('contraseñaInput')

  // Error message
  var nameError = document.getElementById('nameError');
  var surNameError = document.getElementById('surNameError');
  var emailError = document.getElementById('emailError');
  var telefonoError = document.getElementById('telefonoError');
  var direccionError = document.getElementById('direccionError')
  var passwordError = document.getElementById('passwordError')

  // Add event listeners
  nameVar.addEventListener('blur', validateName);
  nameVar.addEventListener('focus', clearNameError);

  surNameVar.addEventListener('blur', validateSurName);
  surNameVar.addEventListener('focus', clearSurNameError);

  emailVar.addEventListener('blur', validateEmail);
  emailVar.addEventListener('focus', clearEmailError);

  telefonoVar.addEventListener('blur', validateTelefono);
  telefonoVar.addEventListener('focus', clearTelefonoError);

  direccionVar.addEventListener('blur', validateDireccion);
  direccionVar.addEventListener('focus', clearDireccionError);

  passwordVar.addEventListener('blur', validatePassword);
  passwordVar.addEventListener('focus', clearPasswordError);

  // Clear error functions
  function clearNameError(e) {
    nameError.classList.add('hiddenError');
    }
  function clearSurNameError(e) {
    surNameError.classList.add('hiddenError');
    }
  function clearEmailError(e) {
    emailError.classList.add('hiddenError');
    }
  function clearTelefonoError(e) {
    telefonoError.classList.add('hiddenError');
    }
  function clearDireccionError(e) {
    direccionError.classList.add('hiddenError');
    }
  function clearPasswordError(e) {
    passwordError.classList.add('hiddenError');
    }

  // Validation functions
  function validateName(e) {
    var x = nameVar.value;
    if(x.length < 3) {
        nameError.classList.remove('hiddenError');
      }
    }
  function validateSurName(e) {
    var x = surNameVar.value;
    if(x.length < 3) {
        surNameError.classList.remove('hiddenError');
      }
    }

  function validateEmail(e) {
    var expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    var x = emailVar.value;
    var esValido = expReg.test(x);
    if(esValido==false) {
        emailError.classList.remove('hiddenError');
      }
    }

  function validateTelefono(e) {
    var expReg = /^[0-9]+$/;
    var x = telefonoVar.value;
    var esValido = expReg.test(x);
    if(esValido==false || x.length!==7) {
        telefonoError.classList.remove('hiddenError');
       }
    }

   function validateDireccion(e) {
    var x = direccionVar.value;
    var expReg = /^[a-z]+\s{1}[0-9]+$/;
    var esValido = expReg.test(x);
    if(esValido==false) {
        direccionError.classList.remove('hiddenError');
       }
    }

   function validatePassword(e) {
    var expReg = /^[A-Za-z0-9]*$/;
    var x = passwordVar.value;
    var esValido = expReg.test(x);
    if(esValido==false || x.length<8) {
       passwordError.classList.remove('hiddenError');
      }
    }

  }