import { HttpRequest, HttpResponse } from "../protocols/http"

export class SignUpController {
  // Utilizar interface para tipar parâmetros
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error("Missing param: name")
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error("Missing param: email")
      }
    }
  }
}