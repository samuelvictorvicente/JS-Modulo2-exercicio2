debugger;
let fila = []       
let opcao = ""        
 
do {
  let pacientes = ""                                  
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt(
    "Pacientes:\n" + pacientes +
    "\nEscolha uma ação:\n1 - Novo paciente\n2 - Consultar paciente\n3 - Sair"
  )

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Qual é o nome do paciente?")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      if (!pacienteConsultado) {
        alert("Não há pacientes na fila!")
      } else {
        alert(pacienteConsultado + " foi removido da fila.")
      }
      break
    case "3":
      alert("Encerrando...")
      break
    default:
      alert("Opção inválida!")
      break
  }
} while (opcao !== "3");


/*
1- criou um array vazio com o nome de fila
2-criou uma variavel opcao do tipo string vazia
3- criou variavel pacientes com uma string vazia
4-criou um for para adicinar valor na variavel pacientes

--
5- let i é 0 e é igual a o array que tambem é zero, entao o bloco { nao executa}
6-variavel opcao vai ser igual ao que o usuario digitar, 1, 2 ou 3
7- o texto "Pacientes:\n" vai ser concatenado com o valor atual da variavel pacientes, que no momento esta vazia
8-printa na tela mostrando que nao tem fila e solicita ao usuario digita 1,2 ou 3
--
9- monitora o valor da variavel opcao digitada pelo usuario
10- apos digitar 1, sera criado uma nova variavel chamada novoPaciente que iria receber o nome do paciente digitado
11-o array fila vai adicionar o valor da variavel novoPaciente que no caso é samuel na posicao 0
12- o array agora vale 1
13- apos o case 1 executar, vai pular para o while
14- o while identifica que o valor da variavel opcao digitado pelo usuario é 1, entao é executado o do novamente
--
15-variavel pacientes tem o valor vazio
16-let i é 0, i é menor do que 1, entao executa o bloco
17-variavel pacientes vai receber o valor da string vazia concatenado com 0+1 que é igual a 1 concatenado com o texto "º - " concatenado com o valor da posição 0 do array fila que no caso é samuel e por fim pula de linha. 

-variavel pacientes tem o valor 1 "º - " samuel

18- incrementou 1 a i e agora ele vale 1 e verifica de novo se i é menor que que o amanho do array, que no caso atual nao é menor, e sim igual, entao o bloco nao foi executado
19- printa na tela mostrando que a variavel pacientes tem o valor 1º - samuel e ao mesmo tempo a variavel opcao vai receber o valor que o usuario digita, 1, 2 ou 3
20-monitora o valor da variavel opcao digitada pelo usuario
21-apos digitar 1, sera criado uma nova variavel chamada novoPaciente que ira receber o nome do paciente digitado
22-o array fila vai adicionar o valor da variavel novoPaciente que no caso é keren na posicao 1
23-o array agora vale 2
24- apos o case 1 executar, vai pular para o while
25- o while identifica que o valor da variavel opcao digitado pelo usuario é 1, entao é executado o do novamente
--

26- variavel pacientes tem o valor vazio
27-let i é 0,  i é menor do que 2, entao executa o bloco
28-variavel pacientes vai receber o valor atual vazio, pula linha,   concatena com 0+1 que é igual a 1 ,concatenado com o texto "º - " concatenado com o valor da posição 1 do array fila que no caso é samuel e por fim pula de linha. 
-variavel pacientes tem o valor  1 º - samuel

29-incrementou 1 a i e agora ele vale 1. i é menor do que o  tamanho do array, entao o bloco é executado.
30 - variavel pacientes tem o valor  1 º - samuel e recebe i que vale 1.  1+ 1 que é igual a 2, concatenado com º - concatenado com a posição 1 do array fila qu no caso é keren, e por fim pula linha
-variavel pacientes tem o valor  1 º - samuel  2º - keren

31-incrementou 1 a i e agora ele vale 2
32-let i é 2,  i não é menor do que 2, entao nao executa o bloco.

--

33- printa na tela mostrando que a variavel pacientes tem o valor 1º - samuel 2º - keren e ao mesmo tempo a variavel opcao vai receber o valor que o usuario digita, 1, 2 ou 3
34-monitora o valor da variavel opcao digitada pelo usuario
35-apos digitar 2, sera criado uma nova variavel chamada pacienteConsultado que ira remover e receber o valor da posição 0 do array fila, que no caso é samuel.
36- o valor pacienteConsultado na posição 0 do array fila é samuel, entao o bloco 1 do if nao executa, e pula para o else
37- o bloco do else mostra um alerta mostrando o valor  da variavel pacienteConsultado e concateta com o texto 
" foi removido da fila.".
38-o array agora vale 1
39-apos o case 2 executar, vai pular para o while
40-o while identifica que o valor da variavel opcao digitado pelo usuario é 2, entao é executado o do novamente
--

41-variavel pacientes tem o valor vazio
42-let i é 0,  i é menor do que 1, entao executa o bloco
43-variavel pacientes vai receber o valor atual vazio, pula linha,   concatena com 0+1 que é igual a 1 ,concatenado com o texto "º - " concatenado com o valor da posição 1 do array fila que no caso é keren e por fim pula de linha. 
44-incrementou 1 a i e agora ele vale 1. 
45-variavel pacientes tem o valor  1 º - keren
46-let i é 1,  i não é menor do que 1, entao não executa o bloco

--

47-printa na tela mostrando que a variavel pacientes tem o valor 1º - keren e ao mesmo tempo a variavel opcao vai receber o valor que o usuario digita, 1, 2 ou 3
48-monitora o valor da variavel opcao digitada pelo usuario
49-identifica que foi a opcao 3
50- da um alert com o texto encerrando
51- o while identifica que o valor da variavel opção nao é diferente que 3, entao encerra a execução.



*/ 