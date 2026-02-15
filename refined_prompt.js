function convertToCamelCase(input) {
    // Validation: Check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }

    // Handle empty strings and trim whitespace
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return '';
    }

    // Split by hyphens, underscores, and spaces, then filter out empty strings
    const words = trimmed.split(/[-_\s]+/).filter(word => word.length > 0);

    // Convert to camelCase
    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // First word stays lowercase, subsequent words are capitalized
            return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Example usage
console.log(convertToCamelCase('  laiba_nasir-dev  ')); // Output: laibaNasirDev
console.log(convertToCamelCase('hello world test'));     // Output: helloWorldTest
console.log(convertToCamelCase(''));                     // Output: ''
console.log(convertToCamelCase('   '));                  // Output: ''

// Test error handling
try {
    convertToCamelCase(123);
} catch (error) {
    console.error(error.message); // Output: Expected a string, but received number
}

/**
 * Converts a string to dot.case format.
 * 
 * This function takes an input string and transforms it into dot-separated lowercase words.
 * It handles multiple delimiters including hyphens, underscores, and spaces, normalizing
 * them into dots while removing empty segments.
 * 
 * @function convertToDotCase
 * @param {string} input - The string to convert to dot.case format
 * @returns {string} The converted string in dot.case format. Returns an empty string if input is empty or contains only whitespace.
 * 
 * @throws {TypeError} Throws a TypeError if the input is not a string
 * 
 * @example
 * // Convert hyphenated string
 * convertToDotCase('hello-world') // Returns: 'hello.world'
 * 
 * @example
 * // Convert underscored string
 * convertToDotCase('hello_world') // Returns: 'hello.world'
 * 
 * @example
 * // Convert space-separated string
 * convertToDotCase('hello world') // Returns: 'hello.world'
 * 
 * @example
 * // Handle mixed delimiters and whitespace
 * convertToDotCase('  hello-world_test  ') // Returns: 'hello.world.test'
 * 
 * @example
 * // Handle empty/whitespace-only input
 * convertToDotCase('   ') // Returns: ''
 */
function convertToDotCase(input) {
    // Validation: Check if input is a string
    if (typeof input !== 'string') {
        throw new TypeError(`Expected a string, but received ${typeof input}`);
    }

    // Handle empty strings and trim whitespace
    const trimmed = input.trim();
    if (trimmed.length === 0) {
        return '';
    }

    // Split by hyphens, underscores, and spaces, then filter out empty strings
    const words = trimmed.split(/[-_\s]+/).filter(word => word.length > 0);

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage
console.log(convertToDotCase('  laiba_nasir-dev  ')); // Output: laiba.nasir.dev
console.log(convertToDotCase('hello world test'));     // Output: hello.world.test
console.log(convertToDotCase(''));                     // Output: ''
console.log(convertToDotCase('   '));                  // Output: ''

// Test error handling
try {
    convertToDotCase(123);
} catch (error) {
    console.error(error.message); // Output: Expected a string, but received number
}