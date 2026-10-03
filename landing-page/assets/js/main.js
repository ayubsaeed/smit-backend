document.addEventListener("DOMContentLoaded", function() {
  
  const items = document.querySelectorAll(".process-item");
  
  items.forEach(function(item) {
    
    const trigger = item.querySelector(".process-trigger");
    const icon = item.querySelector(".process-icon");
    
    trigger.addEventListener("click", function() {
      
      const isActive = item.classList.contains("active");
      
      items.forEach(function(otherItem) {
        
        otherItem.classList.remove("active");
        
        const otherIcon = otherItem.querySelector(".process-icon");
        
        if (otherIcon) {
          otherIcon.textContent = "+";
        }
        
      });
      
      if (!isActive) {
        item.classList.add("active");
        icon.textContent = "−";
      }
      
    });
    
  });
  
  
  // Contact form demo
  const contactForm = document.querySelector(".contact-form-wrap form");
  
});