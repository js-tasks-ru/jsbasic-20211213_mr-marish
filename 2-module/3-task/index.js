let calculator = {
  saveA: 0,
  saveB: 0,
  sum() {
    return this.saveA + this.saveB;
  },
  mul() {
    return this.saveA * this.saveB;
  },
  read(a, b) {
    this.saveA = a;
    this.saveB = b;
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
