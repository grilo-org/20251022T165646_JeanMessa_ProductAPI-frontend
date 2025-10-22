<h3>Descrição</h3>
Frontend desenvolvido utilizando Angular que possibilita o uso de todos os endpoints do ProductAPI, usando recursos de responsividade para proporcionar uma experiência agradável ao usuário. Para visualizar a parte do backend acesse <a href="github.com/JeanMessa/productAPI">github.com/JeanMessa/productAPI</a>.

<h3>Dependências</h3>
Este projeto utiliza Angular 20.1, SCSS para estilização, Bootstrap 5.3.7 para auxiliar na estilização e na responsividade da página, ngx-toastr 19 para mostrar alertas amigáveis para os usuários.

<h3>Aprendizados</h3>
Desenvolvendo essa página pude aprender melhor na prática várias utilidades do Angular, dentre elas a componentização que me permitiu desenvolver um campo de moedas personalizado que funciona do jeito que eu precisava e pode ser reutilizado em várias páginas. Além disso, consegui realizar conexões com minha API, manter tokens, interagir com formulários e adquirir conhecimento de novas bibliotecas do Angular.

<h3>Páginas e Componentes</h3>
A seguir é possível visualizar alguns dos principais componentes e páginas.
<h4>Login</h4>
Tela para realizar o login conta com os campos de usuário e senha e o botão "Entrar" que só é ativado quando ambos campos forem preenchidos.
<p align="center">
<img width="75%" alt="image" src="https://github.com/user-attachments/assets/e620e1cd-da27-467c-9d54-deb935bb4229" />
</p>

<h4>Menu</h4>
Esse componente está presente em todas as páginas após fazer o login, e possui um link para a página de produtos, de cadastro de produtos e de cadastro de usuários, é válido destacar que os links para as páginas de cadastros só aparecerão se conectado em uma conta de nível administrador.
<img alt="image" src="https://github.com/user-attachments/assets/2481c278-a0da-4141-ae3d-8e6b9f92bd4f" />

<h4>Produtos</h4>
A página de produtos é também a tela inicial, sendo possível visualizar todos os produtos e filtrá-los por nome, preço mínimo e preço máximo, além disso, é possível excluir produtos e abrir a tela para editá-los.
<p align="center">
<img width="75%" alt="image" src="https://github.com/user-attachments/assets/1bf0dbbd-1999-4326-86fb-e94d3f4599ae" />
</p>

<h4>Cadastro de Produtos</h4>
Essa página só pode ser acessado quando conectado em uma conta de nível de usuário administrador e tem como função o cadastro de novos produtos, contendo um campo para o nome e um campo de moeda para o preço, após digitar ambos o botão salvar será ativado e permitirá o registro do produto, Caso o usuário precise, pode clicar no botão "Limpar" para esvasiar os campos do formulário.
<p align="center">
<img width="75%" alt="image" src="https://github.com/user-attachments/assets/fdb8ce7a-c0d5-4be6-be4a-c6279a96b3e3" />
</p>

<h4>Edição de Produtos</h4>
Como dito anteriormente, na página de produtos é possível abrir a tela de edição do produto, que é semelhante à página de cadastro. Nela, os dados do produto são carregados automaticamente nos campos, permitindo que o usuário faça alterações e depois clique no botão "Salvar". Além disso, só pode ser acessada por administradores.

<h4>Cadastro de Usuários</h4>
Página que necessita nível de usuário administrador para acessar e possui os campos de nome, senha e nível de usuário, além do campo para confirmar a senha, após todos os campos serem preenchidos é possível clicar no botão "Salvar" e registrar o novo usuário.
<p align="center">
<img width="75%" alt="image" src="https://github.com/user-attachments/assets/d3cf91b3-8010-4a75-b539-9b813f0eb269" />
</p>

<h4>Campo de Moeda</h4>
Esse componente possui as propriedades symbol, para escolher o símbolo da moeda que será usado, inputName, para indicar o name do campo e inputEvent, para indicar o evento que será acionado ao realizar um input no campo. Além disso, possui métodos para formatar automaticamente o campo de centavos, retornar o preço, reiniciar o valor dos campos e colocar valor nos campos de acordo com o preço passado por parâmetro.
<p align="center">
<img width="389" height="51" alt="image" src="https://github.com/user-attachments/assets/d6973ad8-2c76-4776-b863-1ef62c46bc30" />
</p>

<h3>Como testar</h3>
Teste através do site no Render: https://productapi-frontend.onrender.com, ou teste localmente seguindo o passo a passo:
Primeiramente, siga o passo a passo para iniciar o servidor do backend: <a href="github.com/JeanMessa/productAPI">github.com/JeanMessa/productAPI</a>, depois siga as instruções a seguir:

<ol>
  <li>Clone usando: 
    
    git clone https://github.com/JeanMessa/ProductAPI-frontend.git
  </li>
  <li>
    Instale o <a href="https://nodejs.org/en/download">Node.js</a>.
  </li>
  <li>
    Instale o Angular CLI:

    npm install -g @angular/cli
  </li>
  <li>
    Inicie o servidor do frontend:

    cd ProductAPI-frontend 
    npm install
    npm start
  </li>
  <li>
    Agora o projeto estará rodando em: <a href="http://localhost:4200/">http://localhost:4200/</a>  
  </li>
  Dica: Apenas usuários administradores podem criar novas contas, então para o primeiro login use o usuário: "admin" e a senha: "123" (ambos sem as aspas).
</ol>
