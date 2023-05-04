import request from 'supertest';
import app from '../config/app';

describe('Body Parser Middleware', () => {
  test('Should parse body as json', async () => {
    app.post('/test_parser_body', (req, res) => {
      res.send(req.body);
    });

    await request(app).post('/test_parser_body').send({ name: 'John Doe' }).expect({ name: 'John Doe' });
  });
});
