document.getElementById("loveButton").addEventListener("click", function() {
    const button = document.getElementById("loveButton");
    const audio = document.getElementById("loveAudio");
    audio.play();

    const x = Math.random() * (window.innerWidth - button.clientWidth);
    const y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.left = x + "px";
    button.style.top = y + "px";

    const messages = ["Anh yêu em!", "Em là ánh sáng cuộc đời anh!", "Bé iu của anh! ❤️", "Em là tất cả!", "Bùi Hoàng Phương xinh gáiiii!", "beiu Bùi Hoàng Phương của anh!"];
    const messageText = messages[Math.floor(Math.random() * messages.length)];

    const message = document.createElement("div");
    message.className = "message";
    message.innerText = messageText;
    document.body.appendChild(message);
    message.style.left = `${Math.random() * (window.innerWidth - message.clientWidth)}px`;
    message.style.top = `${Math.random() * (window.innerHeight - message.clientHeight)}px`;

    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "💖";
    document.body.appendChild(heart);
    heart.style.left = `${Math.random() * (window.innerWidth - heart.clientWidth)}px`;
    heart.style.top = `${Math.random() * (window.innerHeight - heart.clientHeight)}px`;

    setTimeout(() => {
        message.remove();
        heart.remove();
    }, 5000);
});
