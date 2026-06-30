// ===== AUTO LOAD IMAGES (6 TO 58) =====

const gallery = document.getElementById("gallery");

for(let i=6;i<=58;i++){

const img=document.createElement("img");

img.src=`images/${i}.jpg`;

img.alt=`Image ${i}`;

img.loading="lazy";

gallery.appendChild(img);

}

// ===== IMAGE POPUP =====

const popup=document.getElementById("popup");

const popupImg=document.getElementById("popup-img");

const close=document.getElementById("close");

document.addEventListener("click",(e)=>{

if(e.target.tagName==="IMG"){

popup.style.display="flex";

popupImg.src=e.target.src;

document.body.style.overflow="hidden";

}

});

close.onclick=()=>{

popup.style.display="none";

document.body.style.overflow="auto";

}

popup.onclick=(e)=>{

if(e.target===popup){

popup.style.display="none";

document.body.style.overflow="auto";

}

}

// ===== FADE IN =====

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll("img,video,.premium").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".7s";

observer.observe(el);

});

// ===== BUTTON EFFECT =====

const btn=document.querySelector(".btn");

setInterval(()=>{

btn.style.boxShadow="0 0 20px #00eaff";

setTimeout(()=>{

btn.style.boxShadow="0 0 45px #7b2cff";

},500);

},1000);

// ===== DISABLE RIGHT CLICK =====

document.addEventListener("contextmenu",(e)=>{

e.preventDefault();

});

// ===== DISABLE IMAGE DRAG =====

document.addEventListener("dragstart",(e)=>{

if(e.target.tagName==="IMG"){

e.preventDefault();

}

});