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
// lightbox11
document.getElementById("openLightbox11").addEventListener("click", function () {
    document.getElementById("lightbox11").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox11").style.display = "none";
});

document.getElementById("lightbox11").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox12
document.getElementById("openLightbox12").addEventListener("click", function () {
    document.getElementById("lightbox12").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox12").style.display = "none";
});

document.getElementById("lightbox12").addEventListener("click", function (event) {
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
// lightbox14
document.getElementById("openLightbox14").addEventListener("click", function () {
    document.getElementById("lightbox14").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox14").style.display = "none";
});

document.getElementById("lightbox14").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox15
document.getElementById("openLightbox15").addEventListener("click", function () {
    document.getElementById("lightbox15").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox15").style.display = "none";
});

document.getElementById("lightbox15").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox16
document.getElementById("openLightbox16").addEventListener("click", function () {
    document.getElementById("lightbox16").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox16").style.display = "none";
});

document.getElementById("lightbox16").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox17
document.getElementById("openLightbox17").addEventListener("click", function () {
    document.getElementById("lightbox17").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox17").style.display = "none";
});

document.getElementById("lightbox17").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox18
document.getElementById("openLightbox18").addEventListener("click", function () {
    document.getElementById("lightbox18").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox18").style.display = "none";
});

document.getElementById("lightbox18").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox19
document.getElementById("openLightbox19").addEventListener("click", function () {
    document.getElementById("lightbox19").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox19").style.display = "none";
});

document.getElementById("lightbox19").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox20
document.getElementById("openLightbox20").addEventListener("click", function () {
    document.getElementById("lightbox20").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox20").style.display = "none";
});

document.getElementById("lightbox20").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox21
// document.getElementById("openLightbox21").addEventListener("click", function () {
// document.getElementById("lightbox21").style.display = "flex";
// });

// document.getElementById("closeLightbox").addEventListener("click", function () {
// document.getElementById("lightbox21").style.display = "none";
// });

// document.getElementById("lightbox21").addEventListener("click", function (event) {
// if (event.target === this) {
//   this.style.display = "none";
// }
// });
// lightbox22
document.getElementById("openLightbox22").addEventListener("click", function () {
    document.getElementById("lightbox22").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox22").style.display = "none";
});

document.getElementById("lightbox22").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox23
document.getElementById("openLightbox23").addEventListener("click", function () {
    document.getElementById("lightbox23").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox23").style.display = "none";
});

document.getElementById("lightbox23").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox24
document.getElementById("openLightbox24").addEventListener("click", function () {
    document.getElementById("lightbox24").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox24").style.display = "none";
});

document.getElementById("lightbox24").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox25
document.getElementById("openLightbox25").addEventListener("click", function () {
    document.getElementById("lightbox25").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox25").style.display = "none";
});

document.getElementById("lightbox25").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox26
document.getElementById("openLightbox26").addEventListener("click", function () {
    document.getElementById("lightbox26").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox26").style.display = "none";
});

document.getElementById("lightbox26").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox27
document.getElementById("openLightbox27").addEventListener("click", function () {
    document.getElementById("lightbox27").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox27").style.display = "none";
});

document.getElementById("lightbox27").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox28
document.getElementById("openLightbox28").addEventListener("click", function () {
    document.getElementById("lightbox28").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox28").style.display = "none";
});

document.getElementById("lightbox28").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox29
document.getElementById("openLightbox29").addEventListener("click", function () {
    document.getElementById("lightbox29").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox29").style.display = "none";
});

document.getElementById("lightbox29").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox30
document.getElementById("openLightbox30").addEventListener("click", function () {
    document.getElementById("lightbox30").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox30").style.display = "none";
});

document.getElementById("lightbox30").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox31
document.getElementById("openLightbox31").addEventListener("click", function () {
    document.getElementById("lightbox31").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox31").style.display = "none";
});

document.getElementById("lightbox31").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox32
document.getElementById("openLightbox32").addEventListener("click", function () {
    document.getElementById("lightbox32").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox32").style.display = "none";
});

document.getElementById("lightbox32").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox33
document.getElementById("openLightbox33").addEventListener("click", function () {
    document.getElementById("lightbox33").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox33").style.display = "none";
});

document.getElementById("lightbox33").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox34
document.getElementById("openLightbox34").addEventListener("click", function () {
    document.getElementById("lightbox34").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox34").style.display = "none";
});

document.getElementById("lightbox34").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox35
document.getElementById("openLightbox35").addEventListener("click", function () {
    document.getElementById("lightbox35").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox35").style.display = "none";
});

document.getElementById("lightbox35").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox36
document.getElementById("openLightbox36").addEventListener("click", function () {
    document.getElementById("lightbox36").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox36").style.display = "none";
});

document.getElementById("lightbox36").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox37
document.getElementById("openLightbox37").addEventListener("click", function () {
    document.getElementById("lightbox37").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox37").style.display = "none";
});

document.getElementById("lightbox37").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox38
document.getElementById("openLightbox38").addEventListener("click", function () {
    document.getElementById("lightbox38").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox38").style.display = "none";
});

document.getElementById("lightbox38").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox39
document.getElementById("openLightbox39").addEventListener("click", function () {
    document.getElementById("lightbox39").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox39").style.display = "none";
});

document.getElementById("lightbox39").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox40
document.getElementById("openLightbox40").addEventListener("click", function () {
    document.getElementById("lightbox40").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox40").style.display = "none";
});

document.getElementById("lightbox40").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox41
document.getElementById("openLightbox41").addEventListener("click", function () {
    document.getElementById("lightbox41").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox41").style.display = "none";
});

document.getElementById("lightbox41").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});
// lightbox42
document.getElementById("openLightbox42").addEventListener("click", function () {
    document.getElementById("lightbox42").style.display = "flex";
});

document.getElementById("closeLightbox").addEventListener("click", function () {
    document.getElementById("lightbox42").style.display = "none";
});

document.getElementById("lightbox42").addEventListener("click", function (event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});