const request = require('supertest');
const api = require('../app');

describe('Testando a API', () => {
  it('Deve retornar a mensagem "Olá, mundo!" na raiz', async () => {
    const response = await request(api.app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Olá, mundo!');
  });
});

afterAll(() => {
  api.closeServer()
})