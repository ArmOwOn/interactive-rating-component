"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const rate1 = document.querySelector("#ratingbtn1");
    const rate2 = document.querySelector("#ratingbtn2");
    const rate3 = document.querySelector("#ratingbtn3");
    const rate4 = document.querySelector("#ratingbtn4");
    const rate5 = document.querySelector("#ratingbtn5");
    const submitbtn = document.querySelector(".submit-btn");
    const thankyoubtn = document.querySelector(".thank-you-btn");
    const btnReset = () => {
        const ratingbtn = document.querySelectorAll(".ratingbtn");
        Array.from(ratingbtn).forEach((btn) => {
            btn.style.backgroundColor = "var(--Very-Dark-Blue)";
            btn.style.color = "var(--Medium-Grey)";
        });
    };
    rate1.addEventListener("click", () => {
        btnReset();
        rate1.style.backgroundColor = "var(--Orange)";
        rate1.style.color = "var(--White)";
        thankyoubtn.innerHTML = "You selected 1 out of 5";
    });
    rate2.addEventListener("click", () => {
        btnReset();
        rate2.style.backgroundColor = "var(--Orange)";
        rate2.style.color = "var(--White)";
        thankyoubtn.innerHTML = "You selected 2 out of 5";
    });
    rate3.addEventListener("click", () => {
        btnReset();
        rate3.style.backgroundColor = "var(--Orange)";
        rate3.style.color = "var(--White)";
        thankyoubtn.innerHTML = "You selected 3 out of 5";
    });
    rate4.addEventListener("click", () => {
        btnReset();
        rate4.style.backgroundColor = "var(--Orange)";
        rate4.style.color = "var(--White)";
        thankyoubtn.innerHTML = "You selected 4 out of 5";
    });
    rate5.addEventListener("click", () => {
        btnReset();
        rate5.style.backgroundColor = "var(--Orange)";
        rate5.style.color = "var(--White)";
        thankyoubtn.innerHTML = "You selected 5 out of 5";
    });
    submitbtn.addEventListener("click", () => {
        btnReset();
        if (thankyoubtn.innerHTML == "") {
            alert();
        }
        else {
            document.querySelector(".card").style.display = "none";
            document.querySelector(".card-back").style.display = "flex";
        }
        ;
    });
    thankyoubtn.addEventListener("click", () => {
        document.querySelector(".card").style.display = "flex";
        document.querySelector(".card-back").style.display = "none";
    });
});
