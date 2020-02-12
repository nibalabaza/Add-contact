function Contact (nom,prenom){
    this.nom = nom;
	this.prenom = prenom;
}
var contacts= [
    new Contact('Lévisse','Carole'),
     new Contact('Nelson','Mélodie'),
]

function add(nom,prenom){
    contacts.push(new Contact(nom,prenom))
};


var tab = ["Quitter", "Lister les contacts", "Ajouter un contact"];

console.log("Bienvenue dans le gestionnaire de contacts !"); 

while (true) {
	console.log("1 : " + tab[1]);
	console.log("2 : " + tab[2]);
	console.log("0 : " + tab[0]);

	var option = Number(prompt("Choisissez une option"));

	if (option == 0) { 

		break; 
	}
	if (option == 1) { 
		console.log("\nVoici la liste de tous vos contacts :")

		contacts.forEach(function (contact) { 
			console.log("Nom : " + contact.nom + " Prénom : " + contact.prenom)
		});

		console.log('\n'); 

	} else if (option == 2) { 
		console.log("Saisissez le nom ensuite le prénom du nouveau contact:")
		var nom = prompt("Entrez le nom du nouveau contact.");
        var prenom = prompt("Entrez le prénom du nouveau contact.");
        
        add(nom,prenom);
		console.log("\nLe contact a bien été ajouté !");

	} else {

		console.log("Vous devez saisir un nombre valide.");
	}
}


console.log("\nAu revoir.");

