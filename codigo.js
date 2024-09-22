import emailjs from 'emailjs-com';

document.querySelectorAll('.Menu a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault(); 
  
      
      const sectionId = this.getAttribute('href').substring(1);
  
      
      const section = document.getElementById(sectionId);
  
      
      section.scrollIntoView({
         behavior: 'smooth', 
         block: 'start'
        });
    });
  });

  
  function sendEmail() {
      var templateParams = {
          nombre: document.querySelector('input[name="nombre"]').value,
          apellido: document.querySelector('input[name="apellido"]').value,
          email: document.querySelector('input[name="email"]').value,
          mensaje: document.querySelector('textarea[name="mensaje"]').value
        };
        const serviceID = 'service_eg5crwo';
        const templateID = 'template_fnfoqiw';


        emailjs.send(serviceID, templateID, templateParams)
        .then(function(response) {
            alert("Mensaje enviado correctamente.");
        }, function(error) {
            alert("Error al enviar el mensaje: " + JSON.stringify(error));
        });
        
    }
   



  