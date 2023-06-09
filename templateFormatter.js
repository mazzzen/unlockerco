function _createForOfIteratorHelperLoose(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (it) return (it = it.call(o)).next.bind(it);
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        return function() {
            if (i >= o.length) return {
                done: true
            };
            return {
                done: false,
                value: o[i++]
            };
        };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
        arr2[i] = arr[i];
    }
    return arr2;
}

import {
    count_occurences
} from './helpers.js';
import close_braces from './closeBraces.js'; // Takes a `template` where character placeholders
// are denoted by 'x'es (e.g. 'x (xxx) xxx-xx-xx').
//
// Returns a function which takes `value` characters
// and returns the `template` filled with those characters.
// If the `template` can only be partially filled
// then it is cut off.
//
// If `should_close_braces` is `true`,
// then it will also make sure all dangling braces are closed,
// e.g. "8 (8" -> "8 (8  )" (iPhone style phone number input).
//

export default function(template) {
    var placeholder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'x';
    var should_close_braces = arguments.length > 2 ? arguments[2] : undefined;

    if (!template) {
        return function(value) {
            return {
                text: value
            };
        };
    }

    var characters_in_template = count_occurences(placeholder, template);
    return function(value) {
        if (!value) {
            return {
                text: '',
                template: template
            };
        }

        var value_character_index = 0;
        var filled_in_template = ''; // Using `.split('')` here instead of normal `for ... of`
        // because the importing application doesn't neccessarily include an ES6 polyfill.
        // The `.split('')` approach discards "exotic" UTF-8 characters
        // (the ones consisting of four bytes)
        // but template placeholder characters don't fall into that range
        // and appending UTF-8 characters to a string in parts still works.

        for (var _iterator = _createForOfIteratorHelperLoose(template.split('')), _step; !(_step = _iterator()).done;) {
            var character = _step.value;

            if (character !== placeholder) {
                filled_in_template += character;
                continue;
            }

            filled_in_template += value[value_character_index];
            value_character_index++; // If the last available value character has been filled in,
            // then return the filled in template
            // (either trim the right part or retain it,
            //  if no more character placeholders in there)

            if (value_character_index === value.length) {
                // If there are more character placeholders
                // in the right part of the template
                // then simply trim it.
                if (value.length < characters_in_template) {
                    break;
                }
            }
        }

        if (should_close_braces) {
            filled_in_template = close_braces(filled_in_template, template);
        }

        return {
            text: filled_in_template,
            template: template
        };
    };
}
//# sourceMappingURL=templateFormatter.js.map