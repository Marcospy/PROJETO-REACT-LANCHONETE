# reflexao
1- Oque ficou repetitivo no código?
Obervando o código notei que tem bastante tag e elementos html por exemplo div, h1, p, ul.

2- Se a lanchonete tivese 30 itens, o que aconteceria?
Talvez causaria travamentos

3- O código ficou maior ou menor?
ficou menor, pois ficou separado entre o App.jsx e ItemCardapio.jsx então app.jsx deixou de ser um código extenso oque dificultaria bastante a visualiação e alguma alteração no código

4- Se você mudar a cor de fundo do <ItemCardapio/>, quantos lugares precisa alterar?
Eu mudaria apenas em ItemCardapio

5- Como os dados(nome, preço) chegaram dentro do componente?
Através de um import

6- Porque uma variável comum ( let total=0) não atualiza a tela?
Não sei.

7- Onde foi necessário guardar o número total - no App.jsx ou no ItemCardapio.jsx? Porque?
No app.jsx porque tem uma função const adicionarAoPedido

8- Como o botão (filho) consegue avisar o app (pai) que houve um clique?
a informação é enviada via props, mas para avisar o "pai" de algo, passamos uma função de retorno (callback).