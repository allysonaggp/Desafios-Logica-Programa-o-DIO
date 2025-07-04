/*
Calculadora de Partidas Rankeadas

Entendendo o Desafio
 
Agora é a sua hora de brilhar e construir um perfil de destaque na DIO! Explore todos os conceitos explorados até aqui e replique (ou melhore, porque não?) este projeto prático. Para isso, crie seu próprio repositório e aumente ainda mais seu portfólio de projetos no GitHub, o qual pode fazer toda diferença em suas entrevistas técnicas 😎
 
Neste repositório, insira todos os links e arquivos necessários para seu projeto, seja um arquivo de banco de dados ou um link para o template no Figma.
 
Dica: Se o expert forneceu um repositório Github, você pode dar um "fork" no repositório dele para organizar suas alterações e evoluções mantendo uma referência direta ao código-fonte original.
 
Instruções para entrega
 # 2️⃣ Calculadora de partidas Rankeadas
**O Que deve ser utilizado**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções

## Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**" */

console.log('### Calculadora de partidas Rankeadas ###\n')

let vitorias = 40
let derrotas = 2
let saldoVitorias = " "

function calcularSaldoDeVitorias(vitorias, derrotas) {
    return (vitorias - derrotas)
}
 
    saldoVitorias = calcularSaldoDeVitorias(vitorias, derrotas)
  

    if (saldo < 10) {
        nivel = 'Ferro'
    } else if (saldo >= 11 && saldo < 20) {
        nivel = 'Bronze'
    } else if (saldo >= 21 && saldo < 50) {
        nivel = 'Prata'
    } else if (saldo >= 51 && saldo < 80) {
        nivel = 'Ouro'
    } else if (saldo >= 81 && saldo < 90) {
        nivel = 'Diamante'
    } else if (saldo >= 91 && saldo < 100) {
        nivel = 'Lendario'
    } else if (saldo >= 101) {
        nivel = 'Imortal'
    }
    console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)


//--------------------------------------------------------------------------------


