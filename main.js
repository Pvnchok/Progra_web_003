

// Cuando el DOM esté listo

$(document).ready(function() {

 // Validar el formulario

 $("#miFormulario").validate({

  errorClass: "error",

  validClass: "valid",

  rules: {

   // Reglas para el campo correo electrónico

   email: {

    required: true,

    email: true

   },

   // Reglas para el campo contraseña

   password: {

    required: true,

    minlength: 10

   }

  },

  messages: {

   email: "Por favor, ingresa un correo electrónico válido",

   password: {

    required: "Por favor, crea una contraseña",

    minlength: "Tu contraseña debe tener al menos 10 caracteres"

   }

  },

  highlight: function(element) {

   $(element).addClass('error').removeClass('valid');

  },

  unhighlight: function(element) {

   $(element).removeClass('error').addClass('valid');

  }

 });

});

const API_URL = 'http://jsonplaceholder.typicode.com'

const xhr = new XMLHttpRequest();

function onRequestHandler() {
    if (this.readyState == 4 && this.status == 200) {
        // 0 = UNSET, no se ha llamado al metodo open
        // 1 = OPENED, se ha llamado al metodo open
        // 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
        // 3 = LOADING, esta cargando, es decir, esta recibiendo respuesta.
        // 4 = DONE, se ha completado la operacion
        console.log(this.response);
    }
}

xhr.addEventListener("load", onRequestHandler)
xhr.open("GET", '${API_URL}/users')
xhr.send();