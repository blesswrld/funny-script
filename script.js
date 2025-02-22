document.addEventListener("DOMContentLoaded", () => {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const loveMessage = document.getElementById("Message");

    yesBtn.addEventListener("click", () => {
        loveMessage.style.display = "block";
        yesBtn.disabled = true;
        noBtn.disabled = true;
    });

    noBtn.addEventListener("click", () => {
        noBtn.style.transform = "translateX(-10px)";
        setTimeout(() => {
            noBtn.style.transform = "translateX(10px)";
        }, 100);

        setTimeout(() => {
            noBtn.style.transform = "translateX(0)";
        }, 200);
    });
});
