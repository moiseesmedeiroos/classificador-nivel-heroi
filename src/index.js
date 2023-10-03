// irei atribuir valores as variáveis. Não chamarei input do usuário pois estou rodando no node.js

let xp = 2500
let nome = "Moisés"

// Condicionais

if (xp <= 1000){
    console.log("O Herói de nome " + nome + " está no nível ferro")
}
else if (xp > 1000, xp <= 2000) {
    console.log("O Herói de nome " + nome + " está no nível bronze")
}
else if (xp > 2000, xp <= 6000) {
    console.log("O Herói de nome " + nome + " está no nível Prata")
}
else if (xp > 6000, xp <= 7000) {
    console.log("O Herói de nome " + nome + " está no nível Ouro")
}
else if (xp > 7000, xp <= 8000) {
    console.log("O Herói de nome " + nome + " está no nível Platina")
}
else if (xp > 8000, xp <= 9000) {
    console.log("O Herói de nome " + nome + " está no nível Ascendente")
}
else if (xp > 9000, xp <= 10000) {
    console.log("O Herói de nome " + nome + " está no nível Imortal")
} 
else {
    console.log("O Herói de nome " + nome + " está no nível Radiante")
}