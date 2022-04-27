const alunos = [
    {
        nome: 'João'
        nota: 6,
        turma: '18'
    },
    {
        nome: 'Rafael'
        nota: 10,
        turma: '20'
    
    },
    {
        nome: 'Danilo'
        nota: 10,
        turma '4'
    },
];

function alunosAprovados(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr length; i++) {

        const {nota, nome} = arr[i]
        if(nota>= media) {
            aprovados push (nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));