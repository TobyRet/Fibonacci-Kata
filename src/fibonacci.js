export function fibonacciFor(number) {
  if(number === 1) return 0
  if(number === 2) return 1
  if(number > 2) {
    return (fibonacciFor (number - 1) + fibonacciFor (number - 2))
  }
}
