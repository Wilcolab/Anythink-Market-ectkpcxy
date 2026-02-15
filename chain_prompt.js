function toKebabCase(input) {
    // Step 1: Validate that input is a non-empty string
    if (typeof input !== 'string' || input.length === 0) {
        return '';
    }

    // Step 2: Convert to lowercase and replace spaces, underscores, and special characters with hyphens
    let result = input
        .toLowerCase()
        .replace(/[\s_\W]+/g, '-');

    // Step 3: Remove duplicate hyphens and trim hyphens from start and end
    result = result.replace(/-+/g, '-').replace(/^-+|-+$/g, '');

    return result;
}