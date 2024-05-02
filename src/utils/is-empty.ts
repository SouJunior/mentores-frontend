export function isEmpty(obj: Record<string, any>) {
  return Object.values(obj).every((value) => !value)
}
