function strictEquals(a, b) {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  } else {
    return Object.is(a, b);
  }
}

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
