'use strict'
const ture = [
    {
        ime: "Planinska staza",
        duzina: 12,
        opis: "Šetnja kroz planinske staze sa prelepim pogledima.",
        tagovi: ["priroda", "planinska", "avantura"]
    },
    {
        ime: "Istorijska setnja gradom",
        duzina: 7,
        opis: "Obilazak najvažnijih istorijskih lokacija u gradu.",
        tagovi: ["istorijska", "gradska"]
    },
    {
        ime: "Rečna tura",
        duzina: 18,
        opis: "Vožnja čamcem i šetnja pored reke.",
        tagovi: ["priroda", "vodena"]
    }
];
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
PrikaziTure();
