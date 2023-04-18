
for(let count = 0; count < 5; count++ ) {
    console.log(count);
}

/* Basic Example - Encontrar el primer numero par del contador */
for (let count = 1; count <= 12; count++) {
    if (count % 2 === 0) {
        console.log(count);
        break;
    }
}

for (let count = 1; count <= 12; count++) {
    if (count % 2 !== 0) {
        continue;
        console.log(count) // No se ejecuta nada dentro del if, ya que le decimos que si la condicion es verdadera, pase a la siguiente iteracion
    }
    else {
        console.log(count);
    }
}