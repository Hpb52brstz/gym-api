import request from 'supertest';
import app from '../src/app.js';
import User from '../src/models/User.js';

describe('Auth routes', () => {
  const userData = {
    nome: 'Test User',
    email: 'testuser@email.com',
    telefone: '123456789',
    senha: 'senha123'
  };

  afterAll(async () => {
    await User.deleteMany({ email: userData.email }); // limpa usuário de teste
  });

  it('deve registrar um novo usuário e retornar um token', async () => {
    const res = await request(app).post('/api/auth/register').send(userData);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('token');
  });

  it('deve fazer login e retornar um token', async () => {
    const res = await request(app).post('/api/auth/login').send({
      email: userData.email,
      senha: userData.senha
    });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});