function Calcular() {
    let Nota1 = document.getElementById("Nota1").value;
    let Nota2 = document.getElementById("Nota2").value;
    let Result = document.getElementById("Resultado"); 
    
    n1 = Number(Nota1);
    n2 = Number(Nota2);
    
    Result.innerHTML = "Nota da Média: ";

    if (Nota1 == "" || Nota2 == "" || Nota1 < 0 || Nota2 < 0) {
        alert("Campo Vazio ou Nota Invalida!");
    } else {
        let NotaFinal = 0;
        NotaFinal = (n1 + (2 * n2)) / 3;
        Result.innerHTML += ` ${((n1 + 2 * n2) / 3).toFixed(1)}`; 
    }
   
}
