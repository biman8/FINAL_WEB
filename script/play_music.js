window.addEventListener("load", () => {
    var audio = new Audio("../script/lofi.mp3");
    function playAudio() {
        audio.play();
    }
    function pauseAudio() {
        audio.pause();
    }

    var btn = document.getElementById("play_music_btn");
    btn.addEventListener("click", () => {
        playAudio();
        if (btn.children[0].classList.contains("hidden")) {
            pauseAudio();
        }
        btn.children[0].classList.toggle("hidden");
        btn.children[1].classList.toggle("hidden");
    })
    window.addEventListener("keydown", (event) => {
        if (event.key == "m") {
            playAudio();
            btn.children[0].classList.add("hidden");
            btn.children[1].classList.remove("hidden");
        }
        if (event.key == "p") {
            pauseAudio();
            btn.children[0].classList.remove("hidden");
            btn.children[1].classList.add("hidden");
        }
    })
})