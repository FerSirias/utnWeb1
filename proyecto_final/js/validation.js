document.getElementById("volunteer-form").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || phone === "" || email === "" || country === "" || message === "") {
      alert("Por favor, complete todos los campos.");
      event.preventDefault();
    } else {
      alert("¡Formulario enviado exitosamente!");
    }
  });