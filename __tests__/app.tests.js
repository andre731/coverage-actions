const request = require('supertest');
const app = require('../app');

describe('Testando a API', () => {
  it('Deve retornar a mensagem "Olá, mundo!" na raiz', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Olá, mundo!');
  });
});