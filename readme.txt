# Instrucciones para ejecutar la prueba E2E con Cypress

1. Instala las dependencias:
   npm install

2. Abre Cypress:
   npm run cypress:open

3. Ejecuta la prueba:
   Selecciona el archivo "demoblaze_e2e.cy.js" en la interfaz de Cypress y ejecuta la prueba.

Alternativamente, puedes ejecutar la prueba en modo headless:
   npm run cypress:run

La prueba automatiza el flujo de compra en https://www.demoblaze.com/ agregando dos productos al carrito, visualizando el carrito, completando el formulario y finalizando la compra.
