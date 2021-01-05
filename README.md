# Bienvenidos a mi e-commerce

Para este proyecto me base en una pagina de Nueva Zelandia de ropa de estilo surf que me gusto mucho, al no tener tanta idea de estilos, los copie solamente con la intencion de que quede bien la pagina esteticamente; lo funcional ya depende de mi.

La verdad que trate de cumplir lo mas posible con lo que planteaban los desafios sin desviarme mucho, no utilice niguna libreria externa, salvo las solicitadas durabte el curso y alguna para las images o iconos.

## Funcionalidad de la app:

Basicamente mi e-commerce se trata de una pagina de indumentaria, por el momento hay solo 8 productos los cuales representan el catalogo ( luego se ampliara mas). Cada producto tiene un nombre, precio, categoria e id propio. Por el momento dentro de la app es posible filtrar esos productos por categoria unicamente y clickeando sobre el producto podremos ir a otra pagina donde habra mas detalles de el mismo utilizando como referencia el id (esos detalles tambien falta pulirlos, pero ya estan hechas las rutas y conexiones necesarias).

La app tambien posee un CartWidget que es desplegable y se puede ver en todo momento que se desee. Por el momento tiene hardcodeado unos items por default; pero pronto servira para mostrar una previsualizacion de todos los items que se hayan agregado al carro para finalmente comprarlos.

Navegacion:
Para navegar dentro de la app estableci rutas utilizando "react-router-dom". Las rutas que elegi como posibles son: "/" => Nos lleva al inicio o "home" de nuestra app (se puede acceder a esta ruta en todo momento clickeando sobre el logo ) "/category/:name" => Nos lleva a las categorias, donde name es el parametro. Por ejemplo "/category/hombre" para ver la categoria de hombre "/item/:id" => Nos lleva a una pagina donde veremos en detalle nuestro producto seleccionado guiandonos por el parametro que representaria justamente el id de cada producto; en caso de no coincidir ese id con ninguno de nuestros productos se visualizara un mensaje que dice "no existe tal producto". "*" => Para cualquier otra ruta que no coincida con lo anterior se mostrara un mensaje que no existe tal direccion y preguntarle si no quiere volver al home

Finalmente quisiera agregar que al ir al inicio o al detalle de cada producto se vera un gif de cargando, esto esta hecho mediante una promesa combinado con un setTimeOut con proposito de simular "delays" por parte del servidor.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
