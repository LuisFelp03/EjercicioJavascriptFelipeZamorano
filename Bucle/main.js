/* 1. Tabla de multiplicar */

let numero = prompt("Ingrese un número:");
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

/* 2. Acumulador de números */

let suma = 0;
let nume;
do {
    numer = parseInt(prompt("Ingrese un número (0 para terminar):"), 10);
    suma += nume;
} while (nume !== 0);
console.log(`La suma acumulada es: ${suma}`);

/*  3. Adivinar el número */

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

while (!adivinado) {
    let numero = parseInt(prompt("Adivine el número (entre 1 y 100):"), 10);
    intentos++;
    if (numero === numeroSecreto) {
        adivinado = true;
        console.log(`¡Felicidades! Adivinaste el número en ${intentos} intentos.`);
    } else if (numero < numeroSecreto) {
        console.log("El número es mayor.");
    } else {
        console.log("El número es menor.");
    }
}

/* 4. Número primo */

let numer = parseInt(prompt("Ingrese un número:"), 10);
let esPrimo = true;

if (numer <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(numer); i++) {
        if (numer % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

console.log(esPrimo ? "El número es primo." : "El número no es primo.");

/* 5. Divisores de un número */

let number = parseInt(prompt("Ingrese un número:"), 10);
console.log(`Los divisores de ${number} son:`);
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

/* 6. Recorrer array */

let arrayy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arrayy.length; i++) {
    console.log(arrayy[i]);
}

/* 7. Doble de los elementos del array */

let asrray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < asrray.length; i++) {
    console.log(asrray[i] * 2);
}

/* 8. Presentación de grupo familiar */

let familia = [
    {
        nombre: "Juan",
        edad: 35,
        parentesco: "Padre",
        profesion: "Ingeniero"
    },
    {
        nombre: "María",
        edad: 34,
        parentesco: "Madre",
        profesion: "Doctora"
    },
    {
        nombre: "Pedro",
        edad: 10,
        parentesco: "Hijo",
        profesion: "Estudiante"
    },
    {
        nombre: "Ana",
        edad: 8,
        parentesco: "Hija",
        profesion: "Estudiante"
    },
    {
        nombre: "Luis",
        edad: 65,
        parentesco: "Abuelo",
        profesion: "Jubilado"
    }
];

for (let i = 0; i < familia.length; i++) {
    let persona = familia[i];
    let presentacion = `Hola, soy ${persona.nombre}, tengo ${persona.edad} años, soy el/la ${persona.parentesco} y trabajo como ${persona.profesion}.`;
    console.log(presentacion);
}

// Imprimir el array familia
console.log(familia);

/* 9. Números impares del array */

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
        console.log(array[i]);
    }
}

/* 10. Suma de números pares e impares */

let sumaPares = 0;
let sumaImpares = 0;
let numeroo;

do {
    numero = parseInt(prompt("Ingrese un número (0 para terminar):"), 10);
    if (numeroo % 2 === 0) {
        sumaPares += numeroo;
    } else {
        sumaImpares += numeroo;
    }
} while (numero !== 0);

console.log(`La suma de los números pares es: ${sumaPares}`);
console.log(`La suma de los números impares es: ${sumaImpares}`);

/* 11. Número más grande del array */

let arraay = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let maximo = arraay[0];

for (let i = 1; i < arraay.length; i++) {
    if (arraay[i] > maximo) {
        maximo = arraay[i];
    }
}

console.log(`El número más grande es: ${maximo}`);

/* 12. Número más pequeño del array */

let aarray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let minimo = aarray[0];

for (let i = 1; i < aarray.length; i++) {
    if (aarray[i] < minimo) {
        minimo = aarray[i];
    }
}

console.log(`El número más pequeño es: ${minimo}`);

/* 13. Piedra, papel o tijeras */

let jugador1 = prompt("Ingrese el nombre del Jugador 1:");
let jugador2 = prompt("Ingrese el nombre del Jugador 2:");
let juegoActivo = true;

while (juegoActivo) {
    let mano1 = prompt(`${jugador1}, elija piedra, papel o tijeras:`);
    let mano2 = prompt(`${jugador2}, elija piedra, papel o tijeras:`);

    if (mano1 === mano2) {
        console.log("Empate. Jueguen de nuevo.");
    } else if (
        (mano1 === "piedra" && mano2 === "tijeras") ||
        (mano1 === "papel" && mano2 === "piedra") ||
        (mano1 === "tijeras" && mano2 === "papel")
    ) {
        console.log(`¡${jugador1} gana!`);
        juegoActivo = false;
    } else {
        console.log(`¡${jugador2} gana!`);
        juegoActivo = false;
    }
}

/* 14. Triángulo de asteriscos */

let asteriscos = '';
for (let i = 1; i <= 5; i++) {
    asteriscos += '*';
    console.log(asteriscos);
}

/* 15. Triángulo invertido de asteriscos */

for (let i = 5; i > 0; i--) {
    let asteriscos = '';
    for (let j = 0; j < i; j++) {
        asteriscos += '*';
    }
    console.log(asteriscos);
}

/* 16. Array ordenado sin usar sort */

let arry = [5, 2, 9, 1, 5, 6, 10, 3, 4, 7];

for (let i = 0; i < arry.length; i++) {
    for (let j = 0; j < arry.length - 1; j++) {
        if (arry[j] > arry[j + 1]) {
            let temp = arry[j];
            arry[j] = arry[j + 1];
            arry[j + 1] = temp;
        }
    }
}

console.log(arry);
