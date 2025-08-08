// Pruebas de API para Demoblaze usando Cypress
// Casos: signup y login

describe('Demoblaze API Tests', () => {
  const apiUrl = 'https://api.demoblaze.com';
  const testUser = `user${Date.now()}`;
  const testPassword = 'Test1234';

  it('Crear un nuevo usuario en signup', () => {
    cy.request('POST', `${apiUrl}/signup`, {
      username: testUser,
      password: testPassword
    }).then((response) => {
      expect(response.status).to.eq(200);
      // Si el usuario es nuevo, la respuesta es string vacío
      expect(response.body).to.satisfy(val => val === '' || val.errorMessage);
    });
  });

  it('Intentar crear un usuario ya existente', () => {
    cy.request('POST', `${apiUrl}/signup`, {
      username: testUser,
      password: testPassword
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('errorMessage');
    });
  });

  it('Usuario y password correcto en login', () => {
    cy.request('POST', `${apiUrl}/login`, {
      username: testUser,
      password: testPassword
    }).then((response) => {
      expect(response.status).to.eq(200);
      // Si el login es exitoso, la respuesta es un string (token)
      expect(response.body).to.be.a('string').and.not.empty;
    });
  });

  it('Usuario y password incorrecto en login', () => {
    cy.request('POST', `${apiUrl}/login`, {
      username: testUser,
      password: 'wrongPassword'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('errorMessage');
    });
  });
});
