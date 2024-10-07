export function getOrderedValues<T>(data: T, keys: (keyof T)[]): any[] {
    return keys.map(key => data[key]);
  }