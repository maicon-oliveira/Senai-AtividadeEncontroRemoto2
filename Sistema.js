let numeroDeAlunos = 10;

let contador = 0;

let nomesAlunos = ["Rafael", "Handryo", "Gabriel", "Ana"]

for (let nome of nomesAlunos) {
    console.log(`Esta pessoa se chama ${nome}`);
}

nomesAlunos.forEach(nome => {
    console.log(`O nome é ${nome}`);
});

/*
while (contador <= numeroDeAlunos) {
    
    if (contador == 0) {
        console.log("O número é ZERO");
    } else if (contador % 2 != 0) {
        console.log(`O número ${contador} é IMPAR`);
    } else {
        console.log(`O número ${contador} é Par`);
    }

    contador++;
}



/*
for (let contador = 0; contador <= numeroDeAlunos; contador++) {
   
    if(contador == 0) {
        console.log("O número atual é ZERO");
    } else if (contador % 2 == 0) {
        console.log("O número " + contador + " é PAR");
    } else {
        console.log(`O número ${contador} é IMPAR`);
    }
}
*/