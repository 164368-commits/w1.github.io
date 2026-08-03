/* =========================
   รูปผลงานทั้งหมด 10 รูป
========================= */

const images = [
    "SWU_10090110702501A-0-D0101_1749800445651_page-0001.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0002.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0003.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0004.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0005.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0006.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0007.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0008.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0009.jpg",
    "SWU_10090110702501A-0-D0101_1749800445651_page-0010.jpg"
];

let current = 0;


/* =========================
   เปิดรูป
========================= */

function openImage(number) {

    current = number;

    document.getElementById("showImage").src =
        images[current];

    document.getElementById("lightbox").style.display =
        "flex";
}


/* =========================
   รูปถัดไป
========================= */

function nextImage() {

    current++;

    if (current >= images.length) {
        current = 0;
    }

    document.getElementById("showImage").src =
        images[current];
}


/* =========================
   รูปก่อนหน้า
========================= */

function prevImage() {

    current--;

    if (current < 0) {
        current = images.length - 1;
    }

    document.getElementById("showImage").src =
        images[current];
}


/* =========================
   ปิดรูป
========================= */

function closeImage() {

    document.getElementById("lightbox").style.display =
        "none";
}


/* =========================
   คลิกพื้นที่ด้านนอกเพื่อปิด
========================= */

document.getElementById("lightbox").onclick =
function(event) {

    if (event.target === this) {
        closeImage();
    }

};


/* =========================
   ใช้ปุ่มคีย์บอร์ด
========================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        prevImage();
    }

    if (event.key === "Escape") {
        closeImage();
    }

});
