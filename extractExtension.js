import createExtensionPattern from './createExtensionPattern.js'; // Regexp of all known extension prefixes used by different regions followed by
// 1 or more valid digits, for use when parsing.

var EXTN_PATTERN = new RegExp('(?:' + createExtensionPattern() + ')$', 'i'); // Strips any extension (as in, the part of the number dialled after the call is
// connected, usually indicated with extn, ext, x or similar) from the end of
// the number, and returns it.

export default function extractExtension(number) {
    var start = number.search(EXTN_PATTERN);

    if (start < 0) {
        return {};
    } // If we find a potential extension, and the number preceding this is a viable
    // number, we assume it is an extension.


    var numberWithoutExtension = number.slice(0, start);
    var matches = number.match(EXTN_PATTERN);
    var i = 1;

    while (i < matches.length) {
        if (matches[i]) {
            return {
                number: numberWithoutExtension,
                ext: matches[i]
            };
        }

        i++;
    }
}
//# sourceMappingURL=extractExtension.js.map