function capturar() {
    console.log("capturado");
    function Meme(Software, Empresa, Usuario) {
        this.Software = Software;
        this.Empresa = Empresa;
        this.Usuario = Usuario;
    }
    var captureSoftware = document.getElementById("Software").value;
    console.log(captureSoftware);
    var captureEmpresa = document.getElementById("Empresa").value;
    console.log(captureEmpresa);
    var captureUsuario = document.getElementById("Usuario").value;
    console.log(captureUsuario);
    sujeto = new Meme(captureSoftware, captureEmpresa, captureUsuario);
    agregar();
}
function gbtn() {

    button.style.background = "grey";
    button2.style.background = "orange";
    button3.style.background = "gold";
    div.style.background = "red";
    div2.style.background = "red";
}
function gbtn2() {
    button.style.background = "red";
    button2.style.background = "grey";
    button3.style.background = "gold";
    div.style.background = "orange";
    div2.style.background = "orange";
}
function gbtn3() {
    button.style.background = "red";
    button2.style.background = "orange";
    button3.style.background = "grey";
    div.style.background = "gold";
    div2.style.background = "gold";
}

var basedatos = [];
function agregar() {
    basedatos.push(sujeto)
    console.log(basedatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>' + sujeto.Software + '</td><td>' + sujeto.Empresa  + '</td><td>' + sujeto.Usuario + '</td></tbody>';
};
        var h1 = document.getElementById("Software");
        console.log(h1.innerHTML);
        h1.style.color = "blue";
        var h2 = document.getElementById("Empresa");
        console.log(h2.innerHTML);
        h2.style.color = "gold";
        var h3 = document.getElementById("Usuario");
        console.log(h2.innerHTML);
        h3.style.color = "red";
var button = document.getElementById("boton");
console.log(button.innerHTML);
button.style.color = "white";
button.style.background = "red";

var button2 = document.getElementById("boton2");
console.log(button2.innerHTML);
button2.style.color = "white";
button2.style.background = "orange";


var button3 = document.getElementById("boton3");
console.log(button2.innerHTML);
button3.style.color = "white";
button3.style.background = "gold";


var div = document.getElementById("titulo");
console.log(div.innerHTML);
var div2 = document.getElementById("user");
console.log(div2.innerHTML);