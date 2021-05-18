

var section1 = document.getElementById("section-first");
var section2 = document.getElementById("section-second");
var section3 = document.getElementById("section-third");

document.addEventListener('scroll', () => {
    let scrollHeight = window.scrollY
    let scaleDown2 = false
    let = scaleUp3 = false
    let = scaleDown3 = false
    let scaleSize1 = 100 - Math.round(scrollHeight * 0.2)  //100-0
    let scaleSize2 = Math.round(scrollHeight * 0.2)//100-0
    let scaleSize3 = Math.round(scrollHeight * 0.2) - 140 + 20

    section1.style.scale = scaleSize1 + "%";
    section1.style.opacity = scaleSize1 + "%";

    if (scaleSize2 > 110) {
        scaleDown2 = true

    }

    if (scaleDown2) {
        var scaleSize2Down = 110
        scaleSize2Down = scaleSize2Down - (scaleSize2 - 110)
        section2.style.scale = scaleSize2Down + "%";
        section2.style.opacity = scaleSize2Down + "%";
        scaleUp3 = true

    } else {
        section2.style.scale = scaleSize2 + "%";
        section2.style.opacity = scaleSize2 + "%";
    }

    if (scaleSize3 > 110) {
        scaleUp3 = false
    }

    if (scaleUp3) {
        section3.style.scale = scaleSize3 + "%";
        section3.style.opacity = scaleSize3 + "%";
    } else {

    }

})
