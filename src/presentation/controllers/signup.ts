export class SignUpController {
  handle (httpRequest: any): any {
    return {
      // Garantir retornar 400 se não inserir um 'nome'.
      statusCode: 400,
      body: new Error("Missing param: name")
    }
  }
}