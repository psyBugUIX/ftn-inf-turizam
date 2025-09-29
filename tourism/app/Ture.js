'use strict'
let ture = [];

function ucitajTure() {
    const stored = localStorage.getItem("ture");
    if (stored) {
        ture = JSON.parse(stored);
    } else {
        ture = [];
    }
}
function sacuvajTure() {
    localStorage.setItem("ture", JSON.stringify(ture));
}

function PrikaziTure() {
    const tourList = document.getElementById("turaList");
    tourList.innerHTML = "";

    for (let i = 0; i < ture.length; i++) {
        const tura = ture[i];

        const li = document.createElement("li");
        li.className = "tura-item";

        const header = document.createElement("div");
        header.className = "tura-header";
        header.textContent = tura.ime + " - " + tura.duzina + " km";

        const details = document.createElement("div");
        details.className = "tura-details hidden";
        details.innerHTML =
            "<p><strong>Opis:</strong> " + tura.opis + "</p>" +
            "<p><strong>Tagovi:</strong> " + tura.tagovi.join(", ") + "</p>";

        header.addEventListener("click", function () {
            details.classList.toggle("hidden");
        });
        li.appendChild(header);
        li.appendChild(details);
        tourList.appendChild(li);
    }
}
function dodajTuru(event) {
    event.preventDefault();

    const form = document.querySelector("#dodajTuruForm");
    const formData = new FormData(form);

    const ime = formData.get("ime").trim();
    const duzina = parseFloat(formData.get("duzina"));
    const opis = formData.get("opis").trim();
    const tagoviInput = formData.get("tagovi");

    let tagovi = tagoviInput.split(",");
    const cistiTagovi = [];
    for (let j = 0; j < tagovi.length; j++) {
        cistiTagovi.push(tagovi[j].trim());
    }

    const novaTura = {
        ime: ime,
        duzina: duzina,
        opis: opis,
        tagovi: cistiTagovi
    };

    ture.push(novaTura);
    sacuvajTure();
    PrikaziTure();
    form.reset();
}
ucitajTure();
PrikaziTure();

document.querySelector("#dodajTuruForm").addEventListener("submit", dodajTuru);