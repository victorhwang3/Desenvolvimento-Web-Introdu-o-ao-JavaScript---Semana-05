// 1) Exemplos de var, let e const


// var


function exemploVar() {
    console.log(a); // indefinido, devido ao hoisting
    var a = 10;
    console.log(a); // 10
}

exemploVar();

if (true) {
    var b = 20;
}
console.log(b); // 20, `var` não tem escopo de bloco


// let


function exemploLet() {
    let a = 10;
    if (true) {
        let a = 20; // escopo diferente
        console.log(a); // 20
    }
    console.log(a); // 10
}

exemploLet();

if (true) {
    let b = 30;
    console.log(b); // 30
}
console.log(typeof b); // undefined, `let` tem escopo de bloco


// const


function exemploConst() {
    const a = 10;
    console.log(a); // 10
    // a = 20; // Erro: Atribuir a variável constante.
}

exemploConst();

if (true) {
    const b = 40;
    console.log(b); // 40
}
// console.log(b); // Erro: b não está definido



// 2) Exemplos de operações com arrays


// Tamanho do array

let array = [1, 2, 3, 4, 5];
console.log(array.length); // 5


// Recuperação do elemento


let array = [1, 2, 3, 4, 5];
console.log(array[0]); // 1
console.log(array[3]); // 4


// Inclusão de elemento

let array = [1, 2, 3];
array[3] = 4;
console.log(array); // [1, 2, 3, 4]


// push (Adicionar o elemento no final)


let array = [1, 2, 3];
array.push(4);
console.log(array); // [1, 2, 3, 4]


// pop (Remover o último elemento)


let array = [1, 2, 3, 4];
array.pop();
console.log(array); // [1, 2, 3]


// shift (Remove o primeiro elemento)


let array = [1, 2, 3, 4];
array.shift();
console.log(array); // [2, 3, 4]


// unshift (Adicionar elemento ao início)


let array = [2, 3, 4];
array.unshift(1);
console.log(array); // [1, 2, 3, 4]
