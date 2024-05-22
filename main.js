

// Cuando el DOM esté listo

$(document).ready(function() {

 // Validar el formulario

 $("#miFormulario").validate({

  errorClass: "error",

  validClass: "valid",

  rules: {

   // Reglas para el correo electrónico

   email: {

    required: true,

    email: true
// el correo debe tener almenos @
   },

   // Reglas para la contraseña

   password: {

    required: true,

    minlength: 10
// la contraseña debe tener al menos 10 caracteres
   }

  },



 // Aqui ponemos el mensaje de error que queremos que muestre
  
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

