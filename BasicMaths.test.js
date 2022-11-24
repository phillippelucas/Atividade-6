const BasicMaths = require('./BasicMaths');

const basicMaths = new BasicMaths(10, 5);

test('Soma 10 + 5 = 10', () => {
    expect(basicMaths.Add()).toBe(15);
});

test('subtração 10 - 5 = 5', () => {
    expect(basicMaths.Substract()).toBe(5);
});

test('multiplicação 10 * 5 = 50', () => {
    expect(basicMaths.Multiply()).toBe(50);
});

test('dividir 10 / 5 = 2', () => {
    expect(basicMaths.Divide()).toBe(2);
});