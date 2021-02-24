const format = require('../assets/scripts/main');

describe('volume', () => {
    describe('is a valid number', () => {
        test('is between 0 to 100 inclusive', () => {
            expect(volumeValue).toBeWithinRange(0, 100);
        });
    });

    describe('properly changed icon', () => {
        test('is icon level 3', () => {
            if (volumeValue > 66) {
                expect(iconLevel).toBe("3");
            } else {
                expect(iconLevel).not.toBe("3");
            }
        });

        test('is icon level 2', () => {
            if (volumeValue < 67 && volumeValue > 33) {
                expect(iconLevel).toBe("2");
            } else {
                expect(iconLevel).not.toBe("2");
            }
        });

        test('is icon level 1', () => {
            if (volumeValue < 33 && volumeValue > 0) {
                expect(iconLevel).toBe("1");
            } else {
                expect(iconLevel).not.toBe("1");
            }
        });

        test('is icon level 0', () => {
            if (volumeValue === 0) {
                expect(iconLevel).toBe("0");
            } else {
                expect(iconLevel).not.toBe("0");
            }
        });
    });
});