export function sanitizeInput(input: string, pattern = /[<>"']/g) {
  return input.replace(pattern, '');
}