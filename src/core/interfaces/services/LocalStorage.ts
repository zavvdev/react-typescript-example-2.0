export type LocalStorageKeyType = string;
export type LocalStorageValueType = string;
export type LocalStorageReturnType = LocalStorageValueType | null;

interface LocalStorageInterface {
  get: (key: LocalStorageKeyType) => LocalStorageReturnType;
  set: (key: LocalStorageKeyType, value: LocalStorageValueType) => void;
  remove: (key: LocalStorageKeyType) => void;
  clear: () => void;
  getByIndex: (index: number) => LocalStorageReturnType;
  getStorageLength: () => void;
}

export type { LocalStorageInterface };
