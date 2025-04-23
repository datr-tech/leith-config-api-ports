import { ports } from '@app-lcap/ports';

describe('ports', () => {
  describe('positive', () => {
    test('should contain the expected number of ports', () => {
      // Arrange
      const numPortsExpected = 8;

      // Act
      const numPortsFound = Object.keys(ports).length;

      // Assert
      expect(numPortsFound).toEqual(numPortsExpected);
    });
  });
});
