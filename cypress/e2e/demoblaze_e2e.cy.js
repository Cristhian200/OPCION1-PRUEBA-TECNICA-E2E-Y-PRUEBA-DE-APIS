// Prueba E2E: Flujo de compra en Demoblaze
// Este archivo automatiza el proceso de compra solicitado en la prueba técnica

describe('Flujo de compra Demoblaze', () => {
  it('Agrega dos productos al carrito, visualiza el carrito, completa el formulario y finaliza la compra', () => {
    cy.visit('https://www.demoblaze.com/')

    // Agregar primer producto
    cy.contains('Samsung galaxy s6').click()
    cy.contains('Add to cart').click()
    cy.on('window:alert', () => {})
    cy.get('.navbar-brand').click()

    // Agregar segundo producto
    cy.contains('Nokia lumia 1520').click()
    cy.contains('Add to cart').click()
    cy.on('window:alert', () => {})
    cy.get('.navbar-brand').click()

    // Visualizar el carrito
    cy.contains('Cart').click()

    // Completar el formulario de compra
    cy.contains('Place Order').click()
    cy.get('#name').type('Cristhian')
    cy.get('#country').type('Ecuador')
    cy.get('#city').type('Quito')
    cy.get('#card').type('1234567890123456')
    cy.get('#month').type('08')
    cy.get('#year').type('2025')
    cy.contains('Purchase').click()

    // Finalizar la compra
    cy.contains('OK').click()
  })
})
