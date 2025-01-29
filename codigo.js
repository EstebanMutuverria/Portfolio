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
