import request from 'supertest';
import app from '../config/app';

describe('SignUp Routes', () => {
  test('Should return an account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'John Doe',
        email: 'johnDoe@email.com',
        password: 'userPassword',
        passwordConfirmation: 'userPassword',
      })
      .expect(200);
  });
});
