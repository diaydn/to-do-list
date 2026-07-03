const gorevInput = document.getElementById("gorevInput");
const btnEkle = document.getElementById("btnEkle");
const liste = document.getElementById("liste");

btnEkle.addEventListener("click", function() {  
    console.log("Butona tıklandı");
});


btnEkle.addEventListener("click", function() {
   
    const gorevYazi = gorevInput.value.trim();

    if(gorevYazi === ""){
        alert("Lütfen bir görev giriniz.")
         return;
    }


    const li=document.createElement("li");
    liste.appendChild(li);
    
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

    btnSil.addEventListener("click", function() {
       li.remove();
});


checkbox.addEventListener("change", function() {
    if(checkbox.checked){
        span.style.textDecoration = "line-through";
        span.style.color = "green";
    }else{
        span.style.textDecoration  = "none";
        span.style.color = "";
    }
});

});
 
