import {
  LocalStorageInterface,
  LocalStorageKeyType,
  LocalStorageReturnType,
  LocalStorageValueType,
} from "core/interfaces/services/LocalStorage";

class LocalStorageService implements LocalStorageInterface {
  private repository;

  constructor(webApiStorage: Storage) {
    this.repository = webApiStorage;
  }

  get(key: LocalStorageKeyType): LocalStorageReturnType {
    return this.repository.getItem(key);
  }

  set(key: LocalStorageKeyType, value: LocalStorageValueType): void {
    this.repository.setItem(key, value);
  }

  remove(key: LocalStorageKeyType): void {
    this.repository.removeItem(key);
  }

  clear(): void {
    this.repository.clear();
  }

  getByIndex(index: number): LocalStorageReturnType {
    return this.repository.key(index);
  }

  getStorageLength(): number {
    return this.repository.length;
  }
}

const localStorageService = new LocalStorageService(localStorage);

export { localStorageService };
