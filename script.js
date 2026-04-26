(function() {
    emailjs.init("Wyo-PGV4G-cfD3Pgk");
})();

const form = document.getElementById("contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

emailjs.sendForm(
    "service_hrajhpu",
    "template_4kmu30j",
    this
).then(
    function() {
        form.reset();
        document.querySelector(".contact").innerHTML = "<h2>Thank you! We will contact you soon.</h2>";
    },
    function(error) {
        alert("Something went wrong. Please try again.");
    }
);
});