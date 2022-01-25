const navbar = document.querySelector(".navbar");
const btn = document.getElementById('btn');
const link = document.getElementById("link");
const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");
const link4 = document.getElementById("link4");



btn.addEventListener('click', () =>{
  const visibility = navbar.getAttribute("data-visible");

  link.addEventListener('click', ()=>{
    navbar.setAttribute("data-visible", false);
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
  
  });
  link1.addEventListener('click', ()=>{
    navbar.setAttribute("data-visible", false);
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
  
  });
  link2.addEventListener('click', ()=>{
    navbar.setAttribute("data-visible", false);
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
  
  });
  link3.addEventListener('click', ()=>{
    navbar.setAttribute("data-visible", false);
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
  
  });
  link4.addEventListener('click', ()=>{
    navbar.setAttribute("data-visible", false);
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
  
  });

  if(visibility === 'false'){
    navbar.setAttribute("data-visible", true);
    btn.classList.remove("fa-bars");
    btn.classList.add("fa-times")
} 
  else if (visibility === "true")
    {
  navbar.setAttribute("data-visible", false);
  btn.classList.remove("fa-times");
  btn.classList.add("fa-bars");


  }

});






