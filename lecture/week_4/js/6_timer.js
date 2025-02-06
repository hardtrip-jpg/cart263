window.onload = function () {

    let ref = window.setInterval(addOtherText, 500);
    let counter = 0;
    function addOtherText() {
        let sp = document.createElement("span");
        sp.textContent = " ***-*** ";
        sp.classList.add("appearInStarText");
        document.getElementById("parent").appendChild(sp);
        counter++;
        if (counter === 10) {
            clearInterval(ref);
        }
    }
};


