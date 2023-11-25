window.addEventListener("load", () => {
    var expandBtns = Array.from(document.getElementsByClassName("expand_btn"));

    expandBtns.forEach(item => {
        item.addEventListener("click", (e) => {
            if (!Array.from(e.target.parentNode.children)[0].classList.contains("expanded")) {
                Array.from(e.target.parentNode.children)[0].classList.add("expanded");
            } else {
                Array.from(e.target.parentNode.children)[0].classList.remove("expanded");
            }
            e.target.children[0].classList.toggle("hidden");
            e.target.children[1].classList.toggle("hidden");
        })
        
    });
})