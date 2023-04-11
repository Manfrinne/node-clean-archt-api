import { HttpRequest, HttpResponse } from "../protocols/http"
import { MissingParamError } from "../errors/missing-param-error"
import { badRequest } from "../helpers/http-helper"
import { Controller } from "../protocols/controller"
import { EmailValidator } from '../protocols/email-validator'
import { InvalidParamError } from "../errors/invalid-param-error"

export class SignUpController implements Controller {
  // O private readonly significa uma classe c/ escopo local
  private readonly emailValidator: EmailValidator

  // Noção de injeção de dependência de acordo com contrato/protocolo especificado pela Interface EmailValidator
  constructor (emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  handle (httpRequest: HttpRequest): HttpResponse {
    // Verificação dos parâmetros obrigatório
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }

    // Verificação da injeção de dependência. Importante aqui é que conseguimos verificar a dependência mesmo antes de cria-la, seguindo apensa a noção de contrato determinado no protocols. Aplicação de Inversão de Dependência.
    const isValid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isValid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}