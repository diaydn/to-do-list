const gorevInput = document.getElementById("gorevInput");
const btnEkle = document.getElementById("btnEkle");
const liste = document.getElementById("liste");

const toplam = document.getElementById("toplam");
const tamamlanan = document.getElementById("tamamlanan");

function sayaclariGuncelle() {
    const tumGorevler = liste.querySelectorAll("li");
    const tamamlananGorevler = liste.querySelectorAll("input[type='checkbox']:checked");

    toplam.textContent = tumGorevler.length;
    tamamlanan.textContent = tamamlananGorevler.length;
}

const gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

gorevler.forEach(function (gorevYazi) {

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = gorevYazi;

    const btnSil = document.createElement("button");
    btnSil.textContent = "Sil";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnSil);

    liste.appendChild(li);

    btnSil.addEventListener("click", function () {

        li.remove();

        let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

        gorevler = gorevler.filter(g => g !== gorevYazi);

        localStorage.setItem("gorevler", JSON.stringify(gorevler));

        sayaclariGuncelle();
    });

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "green";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "";
        }

        sayaclariGuncelle();
    });

});

sayaclariGuncelle();

btnEkle.addEventListener("click", function () {

    const gorevYazi = gorevInput.value.trim();

    if (gorevYazi === "") {
        alert("Lütfen bir görev giriniz.");
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = gorevYazi;

    const btnSil = document.createElement("button");
    btnSil.textContent = "Sil";

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(btnSil);

    liste.appendChild(li);

    gorevInput.value = "";

    let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];
    gorevler.push(gorevYazi);
    localStorage.setItem("gorevler", JSON.stringify(gorevler));

    sayaclariGuncelle();

    btnSil.addEventListener("click", function () {

        li.remove();

        let gorevler = JSON.parse(localStorage.getItem("gorevler")) || [];

        gorevler = gorevler.filter(g => g !== gorevYazi);

        localStorage.setItem("gorevler", JSON.stringify(gorevler));

        sayaclariGuncelle();
    });

    checkbox.addEventListener("change", function () {

        if (checkbox.checked) {
            span.style.textDecoration = "line-through";
            span.style.color = "green";
        } else {
            span.style.textDecoration = "none";
            span.style.color = "";
        }

        sayaclariGuncelle();
    });

});