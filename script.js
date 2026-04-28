// ==========================
// 🔹 GET MODAL ELEMENTS
// ==========================
const modal = document.getElementById("modelModal");
const title = document.getElementById("modelTitle");
const img = document.getElementById("modelImage");
const desc = document.getElementById("modelDesc");


// ==========================
// 🔥 CLICK HANDLER
// ==========================
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("click", () => {

        let modelName = card.querySelector("h3").innerText;
        let imageSrc = card.querySelector("img").src;

        title.textContent = modelName;
        img.src = imageSrc;
        desc.textContent =
            modelName + " is a high-performance BMW machine engineered for ultimate driving experience.";


        // ==========================
        // 🎮 CHECK IF M CARD
        // ==========================
        if (card.classList.contains("m-card")) {

            // 🔥 SPECIAL M ANIMATION (BEAST MODE)
            
            // SCREEN SHAKE
            document.body.style.animation = "shake 0.4s";

            // RED FLASH
            let flash = document.createElement("div");
            flash.style.position = "fixed";
            flash.style.inset = "0";
            flash.style.background = "rgba(255,0,0,0.2)";
            flash.style.zIndex = "9999";
            document.body.appendChild(flash);

            setTimeout(() => flash.remove(), 200);

            // CARD IMPACT
            card.style.transform = "scale(0.8)";
            setTimeout(() => {
                card.style.transform = "scale(1.2)";
            }, 100);

            setTimeout(() => {
                card.style.transform = "";
            }, 250);

            // MODAL BEAST ENTRY
            modal.style.display = "flex";
            modal.style.opacity = "0";
            modal.style.transform = "scale(0.5) rotate(-10deg)";

            setTimeout(() => {
                modal.style.transition = "0.3s ease";
                modal.style.opacity = "1";
                modal.style.transform = "scale(1.05) rotate(2deg)";
            }, 50);

            setTimeout(() => {
                modal.style.transform = "scale(1) rotate(0)";
            }, 200);

        } else {

            // ==========================
            // NORMAL CAR ANIMATION
            // ==========================
            card.style.transform = "scale(0.9)";

            setTimeout(() => {
                card.style.transform = "scale(1.05)";
            }, 100);

            setTimeout(() => {
                card.style.transform = "";
            }, 200);

            modal.style.display = "flex";
            modal.style.opacity = "0";
            modal.style.transform = "scale(0.7)";

            setTimeout(() => {
                modal.style.transition = "0.4s ease";
                modal.style.opacity = "1";
                modal.style.transform = "scale(1)";
            }, 50);
        }

    });

});


// ==========================
// 🔹 CLOSE MODAL
// ==========================
function closeModal() {
    modal.style.opacity = "0";
    modal.style.transform = "scale(0.6)";

    setTimeout(() => {
        modal.style.display = "none";
    }, 300);
}

document.getElementById("closeModal").onclick = closeModal;

window.onclick = (e) => {
    if (e.target === modal) closeModal();
};


// ==========================
// 🎮 3D CARD HOVER EFFECT
// ==========================
document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let rotateX = -(y - rect.height / 2) / 10;
        let rotateY = (x - rect.width / 2) / 10;

        card.style.transform =
            `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});


// ==========================
// ✨ CURSOR GLOW
// ==========================
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});


// ==========================
// 🌌 PARALLAX HERO
// ==========================
window.addEventListener("scroll", () => {
    let hero = document.querySelector(".hero");
    if (hero) {
        hero.style.backgroundPositionY = window.scrollY * 0.5 + "px";
    }
});


// ==========================
// 💥 RIPPLE EFFECT
// ==========================
document.addEventListener("click", function (e) {

    let ripple = document.createElement("span");

    ripple.style.position = "absolute";
    ripple.style.width = "10px";
    ripple.style.height = "10px";
    ripple.style.background = "white";
    ripple.style.borderRadius = "50%";
    ripple.style.left = e.pageX + "px";
    ripple.style.top = e.pageY + "px";
    ripple.style.opacity = "0.6";

    ripple.style.animation = "rippleAnim 0.6s linear";

    document.body.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
});


// ==========================
// 🔎 SEARCH FILTER
// ==========================
const searchBox = document.getElementById("searchBox");

if (searchBox) {
    searchBox.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        document.querySelectorAll(".card").forEach(card => {
            let text = card.innerText.toLowerCase();
            card.style.display = text.includes(value) ? "block" : "none";
        });

    });
}


// ==========================
// 📩 FORM VALIDATION
// ==========================
const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        let errorMsg = document.getElementById("errorMsg");

        if (!name || !email || !message) {
            errorMsg.textContent = "All fields are required!";
            return;
        }

        if (!email.includes("@")) {
            errorMsg.textContent = "Enter valid email!";
            return;
        }

        errorMsg.textContent = "";
        alert("Message sent 🚀");
        form.reset();
    });
}