import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => { 
    // Classe sut (System Under Test).
    const sut = new SignUpController()

    // Objeto que a classe precisa receber.
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }

    // A função 'handle' da classe sut precisa retornar status 400.
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)

    // Usamos o 'toEqual' para comparar valores, 'toBe' compara objetos.
    expect(httpResponse.body).toEqual(new Error("Missing param: name"))
   })
})