# Jot down some text

---

“O objetivo do treinamento é mostrar como criar uma API com uma arquitetura bem definida e desacoplada, utilizando TDD (programação orientada a testes) como metodologia de trabalho, Clean Architecture para fazer a distribuição de responsabilidades em camadas, sempre seguindo os princípios do SOLID e, sempre que possível, aplicando Design Patterns para resolver alguns problemas comuns.”

## Make a to-do list

---

### Introdução

- 0. Node.JS
  - Como Node.js funciona?
    - Node.js REPL
      [How To Use the Node.js REPL  | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-use-the-node-js-repl)

      “The Node.js Read-Eval-Print-Loop (REPL) is **an interactive shell that processes Node.js expressions** , allowing users to quickly test and explore JavaScript code within the Node environment without having to store it in a file.0 It can be started by simply running node on shell/console without any arguments and variables can also be used to store values and print later like any conventional script, making it an ideal tool for learning JavaScript syntax quickly.”

    ---
- 3. Configurando o Git

```bash
    git config --list
    
    git config --system
    
    git config --local
    
    git config --global
    
    git config --global --edit
    
    git config --global --core.editor code
    
    git commit --amend --no-edit

```

- 3.1. Configurando atalhos no Git file - .gitconfig
  
  ```bash
    [user]
      email = m4nfrinne@gmail.com
      name = manfrinne
    [core]
      editor = code --wait
    [alias]
      s = !git status -s
      c = !git add --all && git commit -m
      l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
  ```

- 4. Configurando as dependências

  ```bash
    git init
    
    npm init -y 
    
    # Add typescript e configurar file tsconfig.json
    npm install -D typescript @types/node
  
  ```
  
  - 4.1. File `tsconfig.json`

    ```json
    {
      "compilerOptions": {
        "outDir": "dist",
        "module": "commonjs",
        "target": "es2019",
        "esModuleInterop": true,
        "allowJs": true
      }
    }
    ```

  - 4.2. Jest bug
    - [x]  Verificar se nas aulas extras ele não fala uma solução.
    - [x]  Pesquisar no Google o erro.

    ```bash
      # solving, passar flag -g de global
      npm i -D jest @types/jest ts-jest -g
    ```

  - 4.3. Jest setup
    - Iniciar Jest e configurar arquivo `jest.config.ts`

      ```bash
        # iniciar e criar file jest.config.ts
        jest --init
      ```

      ```tsx
      // Indicates whether the coverage information should be collected while executing the test
        collectCoverage: true,
      
        // An array of glob patterns indicating a set of files for which coverage information should be collected
        collectCoverageFrom: ['<rootDir>src/**/*.ts'],
      
        // The directory where Jest should output its coverage files
        coverageDirectory: "coverage",
      
        // Indicates which provider should be used to instrument code for coverage
        coverageProvider: "v8",
      
        // The test environment that will be used for testing
        // testEnvironment: "jest-environment-node",
        testEnvironment: "node",
      
        // A map from regular expressions to paths to transformers
        transform: {
          '.+\\.ts$': 'ts-jest'
        },
      ```

    - **Resumo:**

      Basicamente nós configuramos o lint staged, husky e jest com typescript para garantir que nossos commits, arquivos e testes rodem automaticamente a medida que vamos desenvolvendo o sistema. Essa é uma estratégia da noção de programação orientada a testes (TDD). Depois vamos verificar essas lib e entender como funcionam.

      **To-do**

      - [ ]  Analisar os commits.
      - [ ]  Estudar as libs instaladas.
      - [ ]  Fazer um resumo descente especificando o funcionamento do código.

- **********Links**********
  [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
  
  [npm: git-commit-msg-linter](https://www.npmjs.com/package/git-commit-msg-linter)
  
  Lib para patronizar commits
  
  [Node.js ES2015/ES6, ES2016 and ES2017 support](https://node.green/)
  
  [npm: @grapecity/wijmo.knockout.all](https://www.npmjs.com/package/husky)

---

- 5. Clean Arch

  - Gráfico apresentado na aula
  
    ![Modelo de arquitetura limpa com noções básicas de inversão de dependências e Design Patterns.](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2ffa269b-454b-4098-b15f-db07def7e340/Untitled.png)

    Modelo de arquitetura limpa com noções básicas de inversão de dependências e Design Patterns.

    ---

  - **********To-do**********
    - Explicar o que é SOLID.
      - **SOLID Wikipédia - [Link](https://pt.wikipedia.org/wiki/SOLID)**

        **[Princípio de única responsabilidade](https://en.wikipedia.org/wiki/Single-responsibility_principle) [[1]](https://pt.wikipedia.org/wiki/SOLID#cite_note-1)**

        "uma [classe](https://pt.wikipedia.org/wiki/Classe_(programa%C3%A7%C3%A3o)) deve ter apenas uma única responsabilidade (mudanças em apenas uma parte da especificação do software, devem ser capaz de afetar a especificação da classe)."

        **[Princípio de aberto/fechado](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_do_aberto/fechado) [[2]](https://pt.wikipedia.org/wiki/SOLID#cite_note-2)**

        "entidades de software devem ser abertas para extensão, mas fechadas para modificação."

        **[Princípio da substituição de Liskov](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_da_substitui%C3%A7%C3%A3o_de_Liskov)**

        "objetos em um programa devem ser substituíveis por instâncias de seus subtipos, sem alterar a funcionalidade do programa." deve ser capaz de afetar apenas a especificação da classe.

        **[Princípio da segregação de Interface](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_da_segrega%C3%A7%C3%A3o_de_Interface) [[3]](https://pt.wikipedia.org/wiki/SOLID#cite_note-3)**

        "muitas interfaces de clientes específicas, são melhores do que uma para todos propósitos."

        **[Princípio da inversão de dependência](https://pt.wikipedia.org/wiki/Princ%C3%ADpio_da_invers%C3%A3o_de_depend%C3%AAncia) [[4]](https://pt.wikipedia.org/wiki/SOLID#cite_note-4)**

        "deve-se depender de abstrações, não de objetos concretos."

        ---

      - ******************Pesquisar******************  
        - [ ]  Explicar o que é Design Patterns.
        - [ ]  Relacionar esses conceitos com a noção de Arquitetura Limpa.

        ---

    - **************Resumo**************

      Explicar os conceitos abordados na aula…

      ---

### SignUp API - Presentation Layer

- 1. Criando o SignUpController e validando o request:

    Inicialmente, colocamos em prática a ideia de TDD (Test Driven Development), criamos um arquivo para exportar a classe e outro arquivo para rodar os testes; com isso distinguimos entre arquivo de produção e arquivo de desenvolvimento. No TDD, primeiro induzimos o teste ao erro, forçando uma feature no teste que não foi implementada no arquivo em produção, mas depois implementamos a feature no recurso do sistema de forma bem simples, só para fazer o teste passar; a última etapa é claro, refatorar a class do arquivo em produção de uma forma mais satisfatória.

    ---

- 2. Criando erros personalizados:

    Refatoramos nosso código de acordo com algumas necessidade como, por exemplo, fixamos **protocolos** de funcionamento das classes por meio de interfaces para padronizar parâmetros. Criamos um **helper** para especificar erro de acordo com o status code do protocolo HTTP, nesse caso foi o bad request com código 400. Criamos uma classe genérica para o tratamento de **erros** personalizados.

    ---

- 3. Utilizando Mocks da maneira correta:
    Explicar aula...

    ---

- 4. Testando exceções e integrando com o EmailValidator:
    Explicar aula...

    ---

- 5. Integrando com o AddAccount UseCase:
  - No arquivo `signup.spec.ts`a função `makeAddAccount` é a implementação de um useCase, por isso de acordo com uma arquitetura limpa a interface `AddAccount` vai ficar em outro layer. Obs.: UseCase é diferente de Helpers que são os nossos protocolos/contratos. Os casos de uso vamos colocar no layer Domain.
  - Na interface `AddAccount` vamos separar o AccountModel porque esse é um serviço genérico que, no caso, é mais abrangente que o nosso caso de uso.

    ---

- ********************Pesquisar:********************
  - No HTTP Request, o método Get não usa o body, ele usa o query ou param, porquê?
  - Estudar sobre a noção de classe no JavaScript, como funciona e porque usar constructors, super, this, etc.

### Links

---

[https://github.com/rmanguinho/clean-ts-api](https://github.com/rmanguinho/clean-ts-api)