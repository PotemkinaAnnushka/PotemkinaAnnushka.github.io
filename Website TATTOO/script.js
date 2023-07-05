gsap.to ('h1', {
    text: 'TATTOOED GIRLS',
    duration: 1.5,
    delay: 1,
    ease: "power2.out"
})
gsap.from ('.navBarItem', {
    opacity: 0, 
    duration:.5,
    stagger: .3,
    delay:2
})
gsap.from ('.descriptionGSAP', {
    ease: "sine.in",
    opacity: 0, 
    duration:.5,
    stagger: .4,
    delay:3
})

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    } 
    else {
    mybutton.style.display = "none";
  }
}
if (document.window(width) <= 500) {
      mybutton.style.display = "none";
  }
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}