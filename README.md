# Mi Liga

Algunos consejos para el trabajo con ReactJS

- `ctrl + k + c`  => Comentarios en JSX
- `ctrl + k + u`  => Removemos el comentario en React (u = undo)

**Frameworks CSS para react**
- Material UI
- Material UI Next
- react Bootstrap
- PrimerReact

En este proyecto se trabajará con *Material UI Next*. Para ello debemos ir al sitio oficial para ver la documentación (material-ui.com)[https://material-ui.com/es/getting-started/installation/]

Ejecutamos el comando de instalación para usar la librería en el proyecto

- `npm install @material-ui/core`

En el archivo `index.html` copiamos los enlaces

```css
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
``` 
O podemos usar los **@import url('la-url')** para importar los estilos


Y para los íconos usamos

- `npm install @material-ui/icons`

Luego de esto podemos ir al sitio Material UI Next en la sección de componentes para ver los componentes disponibles para ello


## Instalando React Router

Instalamos `react-router-dom` para configurar las rutas en la aplicación

- `npm install --save react-router-dom`;

- **BrowserRoter** Si el servidor donde se aloja la aplicación, puede manejar las peticiones dinámicas, entonces se utiliza este.

- **HashRouter** Se trabaja si tenermos sitio web estáticos como en GithubPages


Con los `/:` dos puntos le indicamos a la ruta que vamos a trabajar con un parámetro. A este parametro, se le debe poner un nombre.

Como los estados son inmutables, debemos agregar subelementos a las propiedades para poderlas modificar.

## Consumir de datos en React

- API o servicio remoto
- Algún archivo localmente en la aplicación
- Hardcode (Colocando los datos directamente en la aplicación)

- **Consumir archivos JSON locales**




## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
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
