let calculator = {};

calculator.read = function(a, b) {
  calculator.a = a;
  calculator.b = b;
};

calculator.sum = function() {
  return this.a + this.b;
};

calculator.mul = function() {
  return this.a * this.b;
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
