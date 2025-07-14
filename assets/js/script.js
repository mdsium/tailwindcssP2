 //Swiper slider 
 const swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });

//menu active page hover color 
  const currentPath = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPath) {
      link.classList.add("text-[#222222]", "font-bold", "border-[#DD3142]");
    }
  });
