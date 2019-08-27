# Challenge Módulo 3 GoReact

Esse código é referente ao desafio do módulo 3 de React.js do Bootcamp da Rocketseat

# Desafio 3

Configure uma estrutura com create-react-app. Além disso, utilize as ferramentas ESLint, EditorConfig e Prettier durante o desenvolvimento desse projeto.

Neste desafio você vai construir uma aplicação utilizando a biblioteca React Map GL da Uber. A aplicação se trata de um repositório de localização de desenvolvedores. O usuário poderá adicionar desenvolvedores ao mapa clicando sobre o mesmo e informando o username do Github do desenvolvedor, dessa forma, a aplicação irá captar os dados do dev via API e salvá-lo no estado do Redux.

## Utilize o seguinte layout na aplicação:

![Listagem](/assets/listagem.png)
![New](/assets/new.png)

Veja que na esquerda temos uma lista dos usuários cadastrados enquanto que no mapa temos os avatares do usuário indicando sua posição no mapa.

## Ponto de partida

Para você se basear para utilização do mapa e controle do clique deixei um projeto para você utilizar como exemplo: https://github.com/Rocketseat/goreact-exemplo-mapbox. Nesse projeto utilizamos a biblioteca [MapBox](http://mapbox.com/) para renderizar o mapa, **talvez seja necessário você criar uma conta gratuita** para obter um **access token**.

## Fluxo

1. O usuário acessa a aplicação;
2. O usuário clica sobre o mapa para adicionar um novo usuário à posição clicada;
3. Um modal abre sobre a tela com um único campo, o username do Github;
4. A aplicação busca informações como nome e avatar do usuário da API do Github e salva o usuário no store do Redux;
5. O usuário adicionado agora aparece no mapa e na lista lateral;
6. Caso o usuário digitado no input for inválido uma mensagem deve ser retornada, assim como se tudo ocorrer bem deve ser retornada uma mensagem de sucesso (você pode utilizar a lib https://github.com/fkhadra/react-toastify);
7. Deve ser possível excluir usuários da listagem clicando sobre o “x” na sidebar;

## Exemplo de URL da API

Usuário: http://api.github.com/users/diego3g

## Entrega

Esse desafio **não precisa ser entregue** e não receberá correção, mas você pode ver o resultado do código do desafio feito por mim aqui: https://github.com/Rocketseat/bootcamp-reactjs-desafio-03

_PS.: Tente fazer o desafio sem olhar o código antes :)_

_PS2.: Após concluir o desafio, adicionar esse código ao seu Github é uma boa forma de demonstrar seus conhecimentos para oportunidades futuras :D_

Booooooora dev!!!

“Se você acha que pode, ou que não pode, das duas formas você está certo”!

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
