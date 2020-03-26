function numRandom() {
    let aleatorio = Math.round(Math.random() * (6 - 1) + 1);
    return aleatorio;
}


function getJugada() {
    let jugada = new Array();
    for (let i = 0; i < 5; i++) {
        jugada.push(numRandom());
    }
    return jugada;
}

let jugadas = [4, 2, 5, 1, 3]//getJugada();

jugadas.sort();
console.log(jugadas);

/* 
function getRepetidos(jugada) {
    let repetidos = new Array(6).fill(0);

    for (i = 0; i < 6; i++) {
        for (j = 0; j < 7; j++) {
            if (jugada[i] == j) {
                repetidos[j] += 1;
            }
        }
    } return repetidos;
} */
function getEscalera(jugada) {
    let flag = true;
    let vueltas = 0;
    let mensaje = ""
    for (i = 0; i < (jugada.length); i++) {
        if ((flag == true) && (jugada[i] + 1 == jugada[i + 1])) {
            vueltas = vueltas + 1;
            flag = true;
            if (vueltas == 4) {
                mensaje = "Escalera";
                console.log(mensaje);
                return mensaje
            }
        } else {
            flag = false;

        }
    }
    return mensaje
}

function getRepetidos(jugada) {
    let repetidos = new Array(6).fill(0);
    jugada.forEach(
        x => {
            repetidos[x - 1] = repetidos[x - 1] + 1;
        }
    );
    return repetidos;
}


let repetidos = getRepetidos(jugadas);
console.log(repetidos);

function getResultado(repetidos,jugadas) {
    if (repetidos.includes(5)) {
        return "Generala";
    } else if (repetidos.includes(4)) {
        return "Poker";
    } else if (repetidos.includes(3) && repetidos.includes(2)) {
        return "Full"
    } else if (getEscalera(jugadas)){
    }else "No hay nada";
}



    let resultados = getResultado(repetidos,jugadas);

    console.log(resultados);