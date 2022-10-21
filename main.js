let back = document.querySelector("#back");
let overlay = document.querySelector(".overlay");
let modal = document.querySelector(".modal");
let closeModal = document.querySelector("#close");

back.addEventListener('click', () => {
    overlay.classList.remove("hide");
    modal.classList.remove("hide");
    sectionModal.classList.remove("hide");
    thank.classList.add("hide");
    closeModal.classList.remove("hide");
});

let select = document.querySelectorAll(".select");

select.forEach((e) => {
    e.addEventListener('click',  () => {
        overlay.classList.remove("hide");
        modal.classList.remove("hide");
        sectionModal.classList.remove("hide");
        thank.classList.add("hide");
        closeModal.classList.remove("hide");
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.add("hide");
});

let bookmark = document.querySelector("#bookmark");
let bookmarked = document.querySelector("#bookmarked");

bookmark.addEventListener('click', () => {
    bookmark.classList.add('hide')
    bookmarked.classList.remove('hide')
});

bookmarked.addEventListener('click', () => {
    bookmark.classList.remove('hide')
    bookmarked.classList.add('hide')
});

let checkEmpty = document.querySelector("#check-empty");
let checkOne = document.querySelector("#check-one");
let checkTwo = document.querySelector("#check-two");

let hEmpty = document.querySelector("#h3-empty");
let hOne = document.querySelector("#h3-one");
let hTwo = document.querySelector("#h3-two");

let botModalEmpty = document.querySelector(".bot-modal-empty");
let botModalOne = document.querySelector(".bot-modal-one");
let botModalTwo = document.querySelector(".bot-modal-two");

let emptyOp = document.querySelector("#empty");
let oneOp = document.querySelector("#one");
let twoOp = document.querySelector("#two");


checkEmpty.addEventListener('change', () => {
    if (checkEmpty.checked = true) {
        hEmpty.classList.add("h3check")
        hOne.classList.remove("h3check")
        hTwo.classList.remove("h3check")
        botModalEmpty.classList.remove("hide");
        botModalTwo.classList.add("hide");
        botModalOne.classList.add("hide");

        emptyOp.classList.add("border-option")
        oneOp.classList.remove("border-option")
        twoOp.classList.remove("border-option")
    }
});

checkOne.addEventListener('change', () => {
    if (checkOne.checked = true) {
        hEmpty.classList.remove("h3check")
        hOne.classList.add("h3check")
        hTwo.classList.remove("h3check")
        botModalOne.classList.remove("hide");
        botModalTwo.classList.add("hide");
        botModalEmpty.classList.add("hide");

        emptyOp.classList.remove("border-option")
        oneOp.classList.add("border-option")
        twoOp.classList.remove("border-option")
    }
});

checkTwo.addEventListener('change', () => {
    if (checkTwo.checked = true) {
        hEmpty.classList.remove("h3check")
        hOne.classList.remove("h3check")
        hTwo.classList.add("h3check")
        botModalTwo.classList.remove("hide");
        botModalOne.classList.add("hide");
        botModalEmpty.classList.add("hide");

        emptyOp.classList.remove("border-option")
        oneOp.classList.remove("border-option")
        twoOp.classList.add("border-option")
    }
});

let continueBtn = document.querySelectorAll(".continue");
let sectionModal = document.querySelector(".section-modal");
let thank = document.querySelector(".thank");


continueBtn.forEach((e) => {
    e.addEventListener('click',  () => {
        sectionModal.classList.add("hide");
        thank.classList.remove("hide");
        closeModal.classList.add("hide");
    });
});

let finish = document.querySelector("#finish");

finish.addEventListener('click', () => {
    modal.classList.add("hide");
})

// *******************

let menu = document.querySelector("#menu");
let closeMenu = document.querySelector("#close-menu");

let nav = document.querySelector(".nav-mob");

menu.addEventListener('click', () => {
    menu.classList.add('hide')
    closeMenu.classList.remove('hide')
    nav.classList.remove('hide')
    overlay.classList.remove("hide");
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('hide')
    closeMenu.classList.add('hide')
    nav.classList.add('hide')
    overlay.classList.add("hide");
});