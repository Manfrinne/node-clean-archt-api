# Desenvolver uma aplicação node.js orientada a testes (TDD)

> O objetivo é mapear os passos de desenvolvimento de acordo com as aulas do curso. A ideia desse projeto é criar uma API completa baseado em Programação Orientada a Testes e Arquitetura Limpa, de acordo com os princípios SOLID.

## 0. SOLID

- **Princípio de única responsabilidade (Single-responsibility principle):**

  "uma classe deve ter apenas uma única responsabilidade (mudanças em apenas uma parte da especificação do software, devem ser capaz de afetar a especificação da classe)."

- **Princípio de aberto/fechado (Open-Closed principle):**

  "entidades de software devem ser abertas para extensão, mas fechadas para modificação."

- **Princípio da substituição de Liskov (Liskov substitution principle):**

  "objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa." deve ser capaz de afetar apenas a especificação da

- **Princípio da segregação de Interface (Interface segregation principle):**

  "muitas interfaces de clientes específicas, são melhores do que uma para todos propósitos."

- **Princípio da inversão de dependência (Dependency inversion principle):**

  "deve-se depender de abstrações, não de objetos concretos."

## 1. Introdução

- [x] 1. Configurando o Git
- [x] 2. Configurando as dependências
- [x] 3. Clean Architecture

---

## 3. SignUp API - Presentation Layer

- [x] 1. Criando o SignUpController e validando o request
- [x] 2. Criando erros personalizados
- [x] 3. Utilizando Mocks da maneira correta
- [x] 4. Testando exceções e integrando com o EmailValidator
- [x] 5. Integrando com o AddAccount UseCase

---

## 4. Jest

- [x] 1. Configurando o Jest e criando scripts de testes

## 5. Utils Layer

- [x] 1. Criando o EmailValidatorAdapter e mockando o validator

## 6. SignUp API - Data Layer

- [x] 1. Criando o DbAddAccount e integrando com o Encrypter
- [x] 2. Integrando com o AddAccountRepository

## 7. SignUp API - Infra Layer

- [x] 1. Criando o BcryptAdapter e mockando o bcrypt
- [x] 2. Configurando MongoDb em memória
- [x] 3. Testando o MongoDb

  - Se der problema, usar essa estratégia para mapear o '\_id' do MongoDB:

    ```typescript
    import { AddAccountRepository } from '../../../../data/protocols/add-account-repository';
    import { AccountModel } from '../../../../domain/models/account';
    import { AddAccountModel } from '../../../../domain/usecases/add-account';
    import { MongoHelper } from '../helpers/mongo-helper';

    export class AccountMongoRepository implements AddAccountRepository {
      async add(accountData: AddAccountModel): Promise<AccountModel> {
        const accountCollection = MongoHelper.getCollection('accounts');
        const result = await accountCollection.insertOne(accountData);
        const { _id, ...collectionWithoutId } = result;

        // Isso deve retornar um objeto sem o '_id'
        return Object.assign({}, accountWithoutId, { id: _id });
      }
    }
    ```

## 8. SignUp API - Main Layer

- [x] 1. Testando middlewares do express
- [x] 2. Criando teste de integração para o SignUp
- [ ] 3. Fazendo a composição do SignUp e desacoplando do express
