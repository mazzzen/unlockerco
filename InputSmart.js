var _excluded = ["country", "international", "withCountryCallingCode", "metadata"];

function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};
    var target = _objectWithoutPropertiesLoose(source, excluded);
    var key, i;
    if (Object.getOwnPropertySymbols) {
        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
        for (i = 0; i < sourceSymbolKeys.length; i++) {
            key = sourceSymbolKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
            target[key] = source[key];
        }
    }
    return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}

import React, {
    useCallback
} from 'react';
import PropTypes from 'prop-types';
import Input from 'input-format/react';
import {
    AsYouType,
    parsePhoneNumberCharacter
} from 'libphonenumber-js/core';
import {
    getInputValuePrefix,
    removeInputValuePrefix
} from './helpers/inputValuePrefix.js';
export function createInput(defaultMetadata) {
    /**
     * `InputSmart` is a "smarter" implementation of a `Component`
     * that can be passed to `<PhoneInput/>`. It parses and formats
     * the user's and maintains the caret's position in the process.
     * The caret positioning is maintained using `input-format` library.
     * Relies on being run in a DOM environment for calling caret positioning functions.
     */
    function InputSmart(_ref, ref) {
        var country = _ref.country,
            international = _ref.international,
            withCountryCallingCode = _ref.withCountryCallingCode,
            metadata = _ref.metadata,
            rest = _objectWithoutProperties(_ref, _excluded);

        var format = useCallback(function(value) {
            // "As you type" formatter.
            var formatter = new AsYouType(country, metadata);
            var prefix = getInputValuePrefix({
                country: country,
                international: international,
                withCountryCallingCode: withCountryCallingCode,
                metadata: metadata
            }); // Format the number.

            var text = formatter.input(prefix + value);
            var template = formatter.getTemplate();

            if (prefix) {
                text = removeInputValuePrefix(text, prefix); // `AsYouType.getTemplate()` can be `undefined`.

                if (template) {
                    template = removeInputValuePrefix(template, prefix);
                }
            }

            return {
                text: text,
                template: template
            };
        }, [country, metadata]);
        return /*#__PURE__*/ React.createElement(Input, _extends({}, rest, {
            ref: ref,
            parse: parsePhoneNumberCharacter,
            format: format
        }));
    }

    InputSmart = /*#__PURE__*/ React.forwardRef(InputSmart);
    InputSmart.propTypes = {
        /**
         * The parsed phone number.
         * "Parsed" not in a sense of "E.164"
         * but rather in a sense of "having only
         * digits and possibly a leading plus character".
         * Examples: `""`, `"+"`, `"+123"`, `"123"`.
         */
        value: PropTypes.string.isRequired,

        /**
         * A function of `value: string`.
         * Updates the `value` property.
         */
        onChange: PropTypes.func.isRequired,

        /**
         * A two-letter country code for formatting `value`
         * as a national phone number (e.g. `(800) 555 35 35`).
         * E.g. "US", "RU", etc.
         * If no `country` is passed then `value`
         * is formatted as an international phone number.
         * (e.g. `+7 800 555 35 35`)
         * Perhaps the `country` property should have been called `defaultCountry`
         * because if `value` is an international number then `country` is ignored.
         */
        country: PropTypes.string,

        /**
         * If `country` property is passed along with `international={true}` property
         * then the phone number will be input in "international" format for that `country`
         * (without "country calling code").
         * For example, if `country="US"` property is passed to "without country select" input
         * then the phone number will be input in the "national" format for `US` (`(213) 373-4253`).
         * But if both `country="US"` and `international={true}` properties are passed then
         * the phone number will be input in the "international" format for `US` (`213 373 4253`)
         * (without "country calling code" `+1`).
         */
        international: PropTypes.bool,

        /**
         * If `country` and `international` properties are set,
         * then by default it won't include "country calling code" in the input field.
         * To change that, pass `withCountryCallingCode` property,
         * and it will include "country calling code" in the input field.
         */
        withCountryCallingCode: PropTypes.bool,

        /**
         * `libphonenumber-js` metadata.
         */
        metadata: PropTypes.object.isRequired
    };
    InputSmart.defaultProps = {
        metadata: defaultMetadata
    };
    return InputSmart;
}
export default createInput();
//# sourceMappingURL=InputSmart.js.map