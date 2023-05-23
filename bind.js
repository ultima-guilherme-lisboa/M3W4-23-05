function media() {
    console.log((this.nota1 + this.nota2 + this.nota3 / 3 ))
 }

 let aluno = {
    "nome": "JOAO",
    "nota1": 10,
    "nota2": 8,
    "nota3": 9,
 }

 let notaAluno = media.bind(aluno)


 notaAluno()