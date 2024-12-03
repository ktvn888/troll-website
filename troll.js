document.getElementById("trollButton").addEventListener("click", function() {
    const button = document.getElementById("trollButton");
    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left = x + "px";
    button.style.top = y + "px";

    const message = document.createElement("div");
    message.className = "message";
    message.innerText = "Anh yêu em nhiều lắm! ❤️";
    document.body.appendChild(message);

    setTimeout(() => {
        message.remove();
    }, 2000);
});
