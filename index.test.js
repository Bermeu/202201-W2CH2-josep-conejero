function strictEquals(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  } else {
    return Object.is(a, b);
  }
}

describe("Given a strictEquals function", () => {
  describe("When it receives the number 1 and the number 1", () => {
    test("Then it should return true", () => {
      // Arrange
      const firstValue = 1;
      const secondValue = 1;
      const expectedPosition = true;

      // Act
      const returnedValued = strictEquals(firstValue, secondValue);

      // Assert
      expect(returnedValued).toBe(expectedPosition);
    });
  });
});

describe("Given a strictEquals function", () => {
  describe("When it receives two values NaN", () => {
    test("Then it should return false", () => {
      // Arrange
      const firstValue = 0 / 0;
      const secondValue = 0 / 0;
      const expectedPosition = false;

      // Act
      const returnedValued = strictEquals(firstValue, secondValue);

      // Assert
      expect(returnedValued).toBe(expectedPosition);
    });
  });
});

describe("Given a strictEquals function", () => {
  describe("When it receives zero and minus zero", () => {
    test("Then it should return true", () => {
      // Arrange
      const firstValue = 0;
      const secondValue = -0;
      const expectedPosition = true;

      // Act
      const returnedValued = strictEquals(firstValue, secondValue);

      // Assert
      expect(returnedValued).toBe(expectedPosition);
    });
  });
});

describe("Given a strictEquals function", () => {
  describe("When it receives minus zero and zero", () => {
    test("Then it should return true", () => {
      // Arrange
      const firstValue = -0;
      const secondValue = 0;
      const expectedPosition = true;

      // Act
      const returnedValued = strictEquals(firstValue, secondValue);

      // Assert
      expect(returnedValued).toBe(expectedPosition);
    });
  });
});

describe("Given a strictEquals function", () => {
  describe("When it receives the number 1 and the string '1'", () => {
    test("Then it should return false", () => {
      // Arrange
      const firstValue = 1;
      const secondValue = "1";
      const expectedPosition = false;

      // Act
      const returnedValued = strictEquals(firstValue, secondValue);

      // Assert
      expect(returnedValued).toBe(expectedPosition);
    });
  });
});

describe("Given a strictEquals function", () => {
  describe("When it receives a true value and a false value", () => {
    test("Then it should return false", () => {
      // Arrange
      const firstValue = true;
      const secondValue = false;
      const expectedPosition = false;

      // Act
      const returnedValued = strictEquals(firstValue, secondValue);

      // Assert
      expect(returnedValued).toBe(expectedPosition);
    });
  });
});

describe("Given a strictEquals function", () => {
  describe("When it receives a false value and a false value", () => {
    test("Then it should return true", () => {
      // Arrange
      const firstValue = false;
      const secondValue = false;
      const expectedPosition = true;

      // Act
      const returnedValued = strictEquals(firstValue, secondValue);

      // Assert
      expect(returnedValued).toBe(expectedPosition);
    });
  });
});

describe("Given a strictEquals function", () => {
  describe("When it receives the string 'Water' and the string 'oil'", () => {
    test("Then it should return false", () => {
      // Arrange
      const firstValue = "Water";
      const secondValue = "oil";
      const expectedPosition = false;

      // Act
      const returnedValued = strictEquals(firstValue, secondValue);

      // Assert
      expect(returnedValued).toBe(expectedPosition);
    });
  });
});
