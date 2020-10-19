
// Richiesta del nome utente
var nome = prompt("Digita il tuo nome");

console.log(nome)


// Richiesta del cognome utente
var cognome = prompt("Digita il tuo cognome");

console.log(cognome)


// Richiesta colore preferito

var colour = prompt("Digita il tuo colore preferito");

console.log(colour)

// Output composto da: nomecognomecolorepreferito19
password = nome + cognome + colour + 19;
console.log("l'output sarà ", password);


// Restituzione in pagina dell'output

document.getElementById('password_gen').innerHTML = "Complimenti, la tua password generata automaticamente è " + password
