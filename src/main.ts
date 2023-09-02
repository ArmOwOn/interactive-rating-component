document.addEventListener("DOMContentLoaded", () => {
    const rate1 = document.querySelector("#ratingbtn1") as HTMLButtonElement;
    const rate2 = document.querySelector("#ratingbtn2") as HTMLButtonElement;
    const rate3 = document.querySelector("#ratingbtn3") as HTMLButtonElement;
    const rate4 = document.querySelector("#ratingbtn4") as HTMLButtonElement;
    const rate5 = document.querySelector("#ratingbtn5") as HTMLButtonElement;
    const submitbtn = document.querySelector(".submit-btn") as HTMLButtonElement;
    const thankyoubtn = document.querySelector(".thank-you-btn") as HTMLButtonElement;
    
    const btnReset = () => {
        const ratingbtn = document.querySelectorAll(".ratingbtn");
        Array.from(ratingbtn).forEach((btn: any) => {
            btn.style.backgroundColor = "var(--Very-Dark-Blue)";
            btn.style.color = "var(--Medium-Grey)";
        })};
        
    rate1.addEventListener("click", () => {
        btnReset();
        rate1.style.backgroundColor = "var(--Orange)";
        rate1.style.color = "var(--White)" ;
        thankyoubtn.innerHTML = "You selected 1 out of 5"
    });
    rate2.addEventListener("click", () => {
        btnReset();
        rate2.style.backgroundColor = "var(--Orange)";
        rate2.style.color = "var(--White)" ;
        thankyoubtn.innerHTML = "You selected 2 out of 5"
});
        rate3.addEventListener("click", () => {
    btnReset();
        rate3.style.backgroundColor = "var(--Orange)";
        rate3.style.color = "var(--White)" ;
        thankyoubtn.innerHTML = "You selected 3 out of 5"
    });
    rate4.addEventListener("click", () => {
        btnReset();
        rate4.style.backgroundColor = "var(--Orange)";
        rate4.style.color = "var(--White)" ;
        thankyoubtn.innerHTML = "You selected 4 out of 5"
    });
        rate5.addEventListener("click", () => {
        btnReset();
        rate5.style.backgroundColor = "var(--Orange)";
        rate5.style.color = "var(--White)" ;
        thankyoubtn.innerHTML = "You selected 5 out of 5"
    });
    
    submitbtn.addEventListener("click", () => {
        btnReset();
        if (thankyoubtn.innerHTML == "") {
            alert();
        } else {
            (document.querySelector(".card") as HTMLElement) .style.display = "none";
            (document.querySelector(".card-back") as HTMLElement) .style.display = "flex";
        };
    });
    thankyoubtn.addEventListener("click", () => {
        (document.querySelector(".card") as HTMLElement) .style.display = "flex";
        (document.querySelector(".card-back") as HTMLElement) .style.display = "none";
    });
});

