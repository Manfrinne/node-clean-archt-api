import bcrypt from 'bcrypt';
import { BcryptAdapter } from './bcrypt-adapter';

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return Promise.resolve('hashJestMocked');
  },
}));

const salt = 12;
const makeSut = (): BcryptAdapter => {
  return new BcryptAdapter(salt);
};

describe('Bcrypt Adapter', () => {
  test('Should call Bcrypt with correct values', async () => {
    const sut = makeSut();
    const hashSpy = jest.spyOn(bcrypt, 'hash');

    await sut.encrypt('any_value');

    expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
  });

  test('Should return a hash if success', async () => {
    const sut = makeSut();

    const hash = await sut.encrypt('hashJestMocked');

    expect(hash).toBe('hashJestMocked');
  });

  test('Should throw if BcryptAdapter throws', async () => {
    const sut = makeSut();

    jest.spyOn(bcrypt, 'hash').mockImplementationOnce(
      (Promise.reject = () => {
        throw new Error();
      })
    );

    const promise = sut.encrypt('any_value');
    await expect(promise).rejects.toThrow();
  });
});
