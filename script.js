const num = document.querySelector("#num");
const numCopy = document.querySelector(".copy");
const btnModal = document.querySelector("#btnModal");
const nParou = document.querySelector("#nParou");
const avisoN = document.querySelector(".avisoN");
const avisoQdt = document.querySelector(".avisoQdt");
const qRifas = document.querySelector("#qtdRifas");
const cont = document.querySelector("#container");
const modal = document.querySelector(".modal");

let numInicial = 1;
let qtdRifa;
let numFinal;

nParou.addEventListener("input", (event) => {
    let nParouValue = event.target.value;
    
    if (nParouValue !== ""){
        nParou.classList.remove("border");
        avisoN.classList.add("hidden");
    }
});

qRifas.addEventListener("input", (event) => {
    let qRifasValue = event.target.value;
    if (qRifasValue !== ""){
        qRifas.classList.remove("border");
        avisoQdt.classList.add("hidden");
    }
});

btnModal.addEventListener("click", () => {
    
    if (nParou.value === "") {
        avisoN.classList.remove("hidden");
        nParou.classList.add("border");
        return;
    }

    if (qRifas.value === "") {
        avisoQdt.classList.remove("hidden");
        qRifas.classList.add("border");
        return;
    }

    numInicial = (parseInt(nParou.value) + 1);
    qtdRifa = qRifas.value;
    numFinal = parseInt(numInicial) + parseInt(qtdRifa);

    let numero = numInicial;
    switch(numero.toString().length) {
        case 1:
            numero = "000" + numero;
            break
        case 2:
            numero = "00" + numero;
            break
        case 3:
            numero = "0" + numero;
    };

    num.innerHTML = numero;
    numCopy.innerHTML = numero;

    cont.classList.remove("hidden");
    modal.classList.add("hidden");

    for (i = numInicial; i < (numFinal-1); i++) {
        let divs = document.querySelector(".container").cloneNode(true);
        document.querySelector(".container").after(divs);
        seqNum = parseInt(i) + 1;
        
        switch(seqNum.toString().length) {
            case 1:
                seqNum = "000" + seqNum;
                break
            case 2:
                seqNum = "00" + seqNum;
                break
            case 3:
                seqNum = "0" + seqNum;
        };
    
        num.innerHTML = seqNum;
        numCopy.innerHTML = seqNum;
    };
})
