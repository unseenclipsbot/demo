const gallery = document.querySelector(".gallery");

// Load Images (6.jpg → 58.jpg)

for (let i = 6; i <= 58; i++) {

    const item = document.createElement("div");
    item.className = "item";

    const img = document.createElement("img");

    img.src = `images/${i}.jpg`;
    img.alt = `Image ${i}`;
    img.loading = "lazy";

    img.onerror = () => {
        item.remove();
    };

    item.appendChild(img);
    gallery.appendChild(item);

}

// Autoplay Videos (muted required)

document.querySelectorAll("video").forEach(video => {

    video.muted = true;
    video.loop = true;
    video.playsInline = true;

    const playPromise = video.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {});
    }

});

// Scroll Reveal Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

function observeItems() {

    document.querySelectorAll(".item").forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(40px)";
        item.style.transition = "0.6s ease";

        observer.observe(item);

    });

}

window.addEventListener("load", () => {

    setTimeout(observeItems, 200);

});