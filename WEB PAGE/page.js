function kaydir() {
    document.getElementById("icerik").scrollIntoView({ behavior: "smooth" });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("adhdForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            alert("Your survey has been sent, thanks for your participation.");
            console.log("Anket gönderildi.");

            form.reset();
            window.scrollTo({top: 0, behavior:'smooth'});
        });
    }
});