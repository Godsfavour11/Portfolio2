// Hamburger menu toggle
//const toggleMenu = () => {
        // const icon = document.getElementById("hamburger");
       //const navLinks = document.querySelector(".nav-links");
       //  const overlay = document.getElementById("overlay");


       //navLinks.classList.toggle("show");
       //  overlay.classList.toggle("show");

       // Smooth scrolling for navigation links
   // if (icon.classList.contains("fa-bars")) {
       // icon.classList.remove("fa-bars");
   // icon.classList.add("fa-times");
//}
   //else {
   //    icon.classList.remove("fa-times");
   //    icon.classList.add("fa-bars");
   //}
   //};  
   function toggleMenu() {
       const icon = document.querySelector(".hamburger i");
       const navLinks = document.querySelector(".nav-links");
         const overlay = document.getElementById("overlay");


       navLinks.classList.toggle("show");
         overlay.classList.toggle("show");

       // Smooth scrolling for navigation links
    if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
}
else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
}
};