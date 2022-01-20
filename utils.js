/**
 * @param {string} string 
 * @returns {boolean}
 */
function isValidNumber(string) {
    return !isNaN(parseInt(string)) && string.match(/^(\s+?)?[0-9]+?(\s+?)?$/gi);
}

/**
 * @param {number} until 
 */
function showModuloThreeNumbersUntil(until) {
    for (let i = 1; i <= until; i++) {
        if (i % 3 === 0) {
            console.info(i);
        }
    }
}

module.exports = {
    isValidNumber,
    showModuloThreeNumbersUntil,
}
