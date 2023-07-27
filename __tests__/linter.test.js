import { checkFile } from '../index.mjs';

describe("firstPerson rule", () => {
    it("should detect first person language", () => {
        const text = "I am writing a test.";
        const expected = [
            {
                index: 0,  // The position where "I" is found.
                offset: 1,  // The length of "I".
                // Any other data you expect in the result.
            },
            // More expected results here if there are multiple matches in the text.
        ];

        const result = checkFile(text);
        expect(result).toEqual(expected);
    });

    it("should not detect first person language when there is none", () => {
        const text = "This test does not contain first person language.";
        const expected = [];  // No matches expected.

        const result = checkFile(text);
        expect(result).toEqual(expected);
    });

    // Additional test cases as needed...
});
