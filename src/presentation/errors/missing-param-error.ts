export class MissingParamError extends Error {
  constructor(paramName: string) {
    // As classes que herdam no JS precisa de um SUPER, pq?.
    super(`Missing param: ${paramName}`)
    // Boa prática retornar o nome da class?
    this.name = 'MissingParamError'
  }
}