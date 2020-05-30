const imgPrincipal = document.getElementById("img-principal");
const testimonial = document.querySelector(".testimonial");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

document.addEventListener("DOMContentLoaded", () => {
  imgPrincipal.src = "./images/image-tanya.jpg";
  testimonial.innerHTML = `  “ I’ve been interested in coding for a while but never taken the jump,
  until now. I couldn’t recommend this course enough. I’m now in the job
  of my dreams and so excited about the future. ” <br /><br />
  
  <div class="name">Tanya Sinclair <br class="salto" />  <strong>UX Engineer</strong> </div> 
  `;
});

prev.addEventListener("click", () => {
  imgPrincipal.src = "./images/image-john.jpg";
  testimonial.innerHTML = ` “If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”<br /><br />  <div class="name">John Taskpor <br class="salto" />  <strong>Front-end Developer</strong> </div> `;
});

next.addEventListener("click", () => {
  imgPrincipal.src = "./images/image-tanya.jpg";
  testimonial.innerHTML = `  “ I’ve been interested in coding for a while but never taken the jump,
  until now. I couldn’t recommend this course enough. I’m now in the job
  of my dreams and so excited about the future. ” <br /><br />
  
  <div class="name">Tanya Sinclair <br class="salto" />  <strong>UX Engineer</strong> </div> 
  `;
});
