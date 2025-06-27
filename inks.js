// dropdown button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("dropdownButton");
    const dropdownContent = document.getElementById("dropdownContent");

    button.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents closing when clicking the button again
        dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
    });

    document.addEventListener("click", function (event) {
        if (!button.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = "none";
        }
    });
});
// dropdown button end

document.getElementById("openLightbox").addEventListener("click", function () {
    document.getElementById("lightbox").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox").style.display = "none";
});

// Close lightbox when clicking outside content
document.getElementById("lightbox").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox2
document.getElementById("openLightbox2").addEventListener("click", function () {
    document.getElementById("lightbox2").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox2").style.display = "none";
});

document.getElementById("lightbox2").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox3
document.getElementById("openLightbox3").addEventListener("click", function () {
    document.getElementById("lightbox3").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox3").style.display = "none";
});

document.getElementById("lightbox3").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox4
document.getElementById("openLightbox4").addEventListener("click", function () {
    document.getElementById("lightbox4").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox4").style.display = "none";
});

document.getElementById("lightbox4").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox5
document.getElementById("openLightbox5").addEventListener("click", function () {
    document.getElementById("lightbox5").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox5").style.display = "none";
});

document.getElementById("lightbox5").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox6
document.getElementById("openLightbox6").addEventListener("click", function () {
    document.getElementById("lightbox6").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox6").style.display = "none";
});

document.getElementById("lightbox6").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox7
document.getElementById("openLightbox7").addEventListener("click", function () {
    document.getElementById("lightbox7").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox7").style.display = "none";
});

document.getElementById("lightbox7").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox8
document.getElementById("openLightbox8").addEventListener("click", function () {
    document.getElementById("lightbox8").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox8").style.display = "none";
});

document.getElementById("lightbox8").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox9
document.getElementById("openLightbox9").addEventListener("click", function () {
    document.getElementById("lightbox9").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox9").style.display = "none";
});

document.getElementById("lightbox9").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox13
document.getElementById("openLightbox13").addEventListener("click", function () {
    document.getElementById("lightbox13").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox13").style.display = "none";
});

document.getElementById("lightbox13").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox10
document.getElementById("openLightbox10").addEventListener("click", function () {
    document.getElementById("lightbox10").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox10").style.display = "none";
});

document.getElementById("lightbox10").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});