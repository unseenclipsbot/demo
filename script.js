/* SCROLL ANIMATION */
const observer = new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting) e.target.classList.add("show");
});
});

document.querySelectorAll(".fade-up").forEach(el=>{
observer.observe(el);
});

/* LIGHTBOX */
const lightbox=document.createElement("div");
lightbox.classList.add("lightbox");
lightbox.innerHTML=`<img><span class="close">×</span>`;
document.body.appendChild(lightbox);

const lbImg=lightbox.querySelector("img");

document.addEventListener("click",e=>{
if(e.target.tagName==="IMG" && e.target.closest(".gallery-item")){
lightbox.classList.add("active");
lbImg.src=e.target.src;
}
if(e.target.classList.contains("close")){
lightbox.classList.remove("active");
}
});

/* LOAD 58 IMAGES */
const masonry=document.getElementById("masonry");

for(let i=1;i<=58;i++){
const div=document.createElement("div");
div.className="gallery-item fade-up";
div.innerHTML=`<img src="images/${i}.jpg" loading="lazy">`;
masonry.appendChild(div);
}

/* LOAD 5 VIDEOS */
const videoGrid=document.getElementById("videoGrid");

for(let i=1;i<=5;i++){
const v=document.createElement("video");
v.src=`videos/${i}.mp4`;
v.controls=true;
v.className="fade-up";
videoGrid.appendChild(v);
}