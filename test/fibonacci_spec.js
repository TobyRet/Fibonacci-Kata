import {fibonacciFor} from '../src/fibonacci'
import {expect} from 'chai'

describe('Fibonacci', () => {
  it('it gets the nth fibonacciFor number', () => {
		expect(fibonacciFor(1)).to.equal(0)
    expect(fibonacciFor(2)).to.equal(1)
    expect(fibonacciFor(3)).to.equal(1)
    expect(fibonacciFor(4)).to.equal(2)
    expect(fibonacciFor(5)).to.equal(3)
    expect(fibonacciFor(6)).to.equal(5)
    expect(fibonacciFor(7)).to.equal(8)
    expect(fibonacciFor(8)).to.equal(13)
	})
})
