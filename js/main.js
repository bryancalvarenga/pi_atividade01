function mostrarAlerta(event) {
    event.preventDefault();   
    alert("Formulário enviado com sucesso!");    
}

window.onload = function() {
    loadHeader();
    loadFooter();
    const formulario = document.getElementById("form");
    formulario.addEventListener("submit", mostrarAlerta);
};