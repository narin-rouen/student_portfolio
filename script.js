// Optimized Scroll to Top Button Functionality
document.addEventListener("DOMContentLoaded", function() {
  const backToTopButton = document.getElementById("back-to-top");
  
  // Show/hide button with fade effect
  window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
      setTimeout(() => backToTopButton.classList.add("show"), 10);
    } else {
      backToTopButton.classList.remove("show");
      setTimeout(() => {
        if (window.scrollY <= 300) {
          backToTopButton.style.display = "none";
        }
      }, 300);
    }
  });

  // Smooth scroll to top
  backToTopButton.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});