import { DbAddAccount } from './db-add-account';

describe('DbAddAccount UseCase', () => {
  test('Should call Encrypter with correct password', () => {
    class EncrypterStub {
      async encrypt(value: string): Promise<string> {
        return new Promise((resolve) => resolve('hashed_password'));
      }
    }

    const encripterStub = new EncrypterStub();
    const sut = new DbAddAccount(encripterStub);

    const encryptSpy = jest.spyOn(encripterStub, 'encrypt');

    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password',
    };

    sut.add(accountData);
    expect(encryptSpy).toHaveBeenCalledWith('valid_password');
  });
});
