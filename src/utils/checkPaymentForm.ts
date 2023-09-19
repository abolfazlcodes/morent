export function checkProperties<T>(obj: T) {
  for (const key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      (obj[key as keyof T] === "" || obj[key as keyof T] === false)
    ) {
      return false;
    }
    return true;
  }
}
