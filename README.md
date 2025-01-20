# Instruções para Desenvolvimento

Este projeto requer a recriação de uma página mobile e desktop baseada em um design fornecido no Figma. A pessoa responsável por este teste deve utilizar o arquivo fornecido no projeto para desenvolver a página conforme as especificações do design.

## Datas e formulário

* Para ser considerada a entrega e termos acesso ao repositório é necessário que você preencha esse formulário: [link](https://forms.gle/bDBTrdyH2ahyn2DN9)
* O projeto deve ser entregue até o dia **22/01 às 17h**

### Figma Design
O design a ser seguido está disponível no Figma no seguinte [link](https://www.figma.com/design/EjPsqBt4o5yktKvks0f072/[Wecode]-Vaga-Desenvolvedor-J%C3%BAnior?node-id=3006-1347&t=0G4hjFDhmnEiECiD-0)


### Ferramentas Utilizadas

* React: O projeto deve ser desenvolvido utilizando React.
* SCSS: Utilize SCSS para estilização dos componentes.

### Estrutura do Projeto

O projeto está estruturado da seguinte forma:

* `src/`: Diretório contendo o código fonte do projeto.
* `public/`: Diretório contendo arquivos estáticos como imagens. 
* `README.md`: Este arquivo contendo as instruções para desenvolvimento.

## Como Começar

* Extraia este projeto para um diretório local.
* Navegue até o diretório do projeto.
* Instale as dependências do projeto utilizando `npm install`.
* Execute o projeto localmente com `npm start`.

## Desenvolvimento
* Utilize o arquivo fornecido no projeto como referência para criar a página mobile.
* Siga fielmente as especificações de design presentes no Figma.
* Utilize SCSS para estilização dos componentes.
* Mantenha o código limpo e bem organizado, seguindo as melhores práticas de desenvolvimento.

### Slider

Para o componente slider, você poderá utilizar a biblioteca que quiser. Sugerimos a utilização da biblioteca [react-slick](https://react-slick.neostack.com/).

Para a composição do card de produtos no slider, deverá ser utilizado as informações retornantes da função `getProducts` presente no arquivo `/src/utils.js`.

### Geolocalização por CEP

Para criar o componente de geolocalização onde o usuário insere o CEP para inputra seu estado, pode ser utilizada a API do viaCep [link](https://documenter.getpostman.com/view/8961871/SVn3svAh)

### Minicart

O produto adicionado ao minicart deve vir da interação com o botão de adicionar o carrinho no card de produto, ou seja precisa ser consumido do arquivo `/src/utils.js`.

