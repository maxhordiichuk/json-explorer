export function isViewable(value: unknown) {
  return value === null || value instanceof Date || typeof value !== "object"
}
