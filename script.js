// JavaScript for Back to Top Button
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show/hide button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
      setTimeout(() => backToTopButton.classList.add("show"), 10); // Add show class with delay
    } else {
      backToTopButton.classList.remove("show");
      setTimeout(() => (backToTopButton.style.display = "none"), 300); // Hide after fade-out
    }
  });

  // Smooth scroll to top
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent default anchor behavior
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  });
});
