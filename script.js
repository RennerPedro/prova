//Sistema pra validar as informações de contato
function Validar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var numero = document.getElementById("numero").value;

    //Aviso se falta alguma informação
    if (nome === "") {
      alert("Por favor, adicione seu nome!");
      return false;
    }

    if (email === "") {
      alert("Por favor, adicione seu e-mail!");
      return false;
    }

    if (numero === "") {
        alert("Por favor, adicione seu telefone!");
        return false;
    }

    //Recarrega o site estando tudo preenchido ou não
    else{
        return true;
    }    
}