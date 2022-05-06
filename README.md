# Ejemplos de pruebas con Cucumber JS
## Instalación de dependencias
$ npm install
## Ejecución de pruebas
$ npx cucumber-js
## Configuración de publicación de resultados
* cp .env.example .env
* Entrar a [https://reports.cucumber.io/](https://reports.cucumber.io/)
* Crear una colección
* Copiar el token
* editar el .env para añadir el token de publicación
## Ejecución de pruebas y publicación
$  ./run_cucumber.sh

## Ejecución de sólo una feature
$ npx cucumber-js ./features/castellano.feature
## Ejecución de sólo un escenario de una feature
$ npx cucumber-js ./features/simple_math.feature:12
