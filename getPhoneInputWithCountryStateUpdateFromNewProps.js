function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}

function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

import {
    getInitialPhoneDigits,
    getCountryForPartialE164Number,
    parsePhoneNumber
} from './phoneInputHelpers.js';
import {
    isCountrySupportedWithError,
    getSupportedCountries
} from './countries.js';
export default function getPhoneInputWithCountryStateUpdateFromNewProps(props, prevProps, state) {
    var metadata = props.metadata,
        countries = props.countries,
        newDefaultCountry = props.defaultCountry,
        newValue = props.value,
        newReset = props.reset,
        international = props.international,
        displayInitialValueAsLocalNumber = props.displayInitialValueAsLocalNumber,
        initialValueFormat = props.initialValueFormat;
    var prevDefaultCountry = prevProps.defaultCountry,
        prevValue = prevProps.value,
        prevReset = prevProps.reset;
    var country = state.country,
        value = state.value,
        hasUserSelectedACountry = state.hasUserSelectedACountry;

    var _getInitialPhoneDigits = function _getInitialPhoneDigits(parameters) {
        return getInitialPhoneDigits(_objectSpread(_objectSpread({}, parameters), {}, {
            international: international,
            useNationalFormat: displayInitialValueAsLocalNumber || initialValueFormat === 'national',
            metadata: metadata
        }));
    }; // Some users requested a way to reset the component
    // (both number `<input/>` and country `<select/>`).
    // Whenever `reset` property changes both number `<input/>`
    // and country `<select/>` are reset.
    // It's not implemented as some instance `.reset()` method
    // because `ref` is forwarded to `<input/>`.
    // It's also not replaced with just resetting `country` on
    // external `value` reset, because a user could select a country
    // and then not input any `value`, and so the selected country
    // would be "stuck", if not using this `reset` property.
    // https://github.com/catamphetamine/react-phone-number-input/issues/300


    if (newReset !== prevReset) {
        return {
            phoneDigits: _getInitialPhoneDigits({
                value: undefined,
                defaultCountry: newDefaultCountry
            }),
            value: undefined,
            country: newDefaultCountry,
            hasUserSelectedACountry: undefined
        };
    } // `value` is the value currently shown in the component:
    // it's stored in the component's `state`, and it's not the `value` property.
    // `prevValue` is "previous `value` property".
    // `newValue` is "new `value` property".
    // If the default country changed
    // (e.g. in case of ajax GeoIP detection after page loaded)
    // then select it, but only if the user hasn't already manually
    // selected a country, and no phone number has been manually entered so far.
    // Because if the user has already started inputting a phone number
    // then they're okay with no country being selected at all ("International")
    // and they don't want to be disturbed, don't want their input to be screwed, etc.


    if (newDefaultCountry !== prevDefaultCountry) {
        var isNewDefaultCountrySupported = !newDefaultCountry || isCountrySupportedWithError(newDefaultCountry, metadata);

        var noValueHasBeenEnteredByTheUser = // By default, "no value has been entered" means `value` is `undefined`.
            !value || // When `international` is `true`, and some country has been pre-selected,
            // then the `<input/>` contains a pre-filled value of `+${countryCallingCode}${leadingDigits}`,
            // so in case of `international` being `true`, "the user hasn't entered anything" situation
            // doesn't just mean `value` is `undefined`, but could also mean `value` is `+${countryCallingCode}`.
            international && value === _getInitialPhoneDigits({
                value: undefined,
                defaultCountry: prevDefaultCountry
            }); // Only update the `defaultCountry` property if no phone number
        // has been entered by the user or pre-set by the application.


        var noValueHasBeenEntered = !newValue && noValueHasBeenEnteredByTheUser;

        if (!hasUserSelectedACountry && isNewDefaultCountrySupported && noValueHasBeenEntered) {
            return {
                country: newDefaultCountry,
                // If `phoneDigits` is empty, then automatically select the new `country`
                // and set `phoneDigits` to `+{getCountryCallingCode(newCountry)}`.
                // The code assumes that "no phone number has been entered by the user",
                // and no `value` property has been passed, so the `phoneNumber` parameter
                // of `_getInitialPhoneDigits({ value, phoneNumber, ... })` is `undefined`.
                phoneDigits: _getInitialPhoneDigits({
                    value: undefined,
                    defaultCountry: newDefaultCountry
                }),
                // `value` is `undefined` and it stays so.
                value: undefined
            };
        }
    } // If a new `value` is set externally.
    // (e.g. as a result of an ajax API request
    //  to get user's phone after page loaded)
    // The first part — `newValue !== prevValue` —
    // is basically `props.value !== prevProps.value`
    // so it means "if value property was changed externally".
    // The second part — `newValue !== value` —
    // is for ignoring the `getDerivedStateFromProps()` call
    // which happens in `this.onChange()` right after `this.setState()`.
    // If this `getDerivedStateFromProps()` call isn't ignored
    // then the country flag would reset on each input.


    if (!valuesAreEqual(newValue, prevValue) && !valuesAreEqual(newValue, value)) {
        var phoneNumber;
        var parsedCountry;

        if (newValue) {
            phoneNumber = parsePhoneNumber(newValue, metadata);
            var supportedCountries = getSupportedCountries(countries, metadata);

            if (phoneNumber && phoneNumber.country) {
                // Ignore `else` because all countries are supported in metadata.

                /* istanbul ignore next */
                if (!supportedCountries || supportedCountries.indexOf(phoneNumber.country) >= 0) {
                    parsedCountry = phoneNumber.country;
                }
            } else {
                parsedCountry = getCountryForPartialE164Number(newValue, {
                    country: undefined,
                    countries: supportedCountries,
                    metadata: metadata
                });
            }
        }

        var hasUserSelectedACountryUpdate;

        if (!newValue) {
            // Reset `hasUserSelectedACountry` flag in `state`.
            hasUserSelectedACountryUpdate = {
                hasUserSelectedACountry: undefined
            };
        }

        return _objectSpread(_objectSpread({}, hasUserSelectedACountryUpdate), {}, {
            phoneDigits: _getInitialPhoneDigits({
                phoneNumber: phoneNumber,
                value: newValue,
                defaultCountry: newDefaultCountry
            }),
            value: newValue,
            country: newValue ? parsedCountry : newDefaultCountry
        });
    } // `defaultCountry` didn't change.
    // `value` didn't change.
    // `phoneDigits` didn't change, because `value` didn't change.
    //
    // So no need to update state.

}

function valuesAreEqual(value1, value2) {
    // If `value` has been set to `null` externally then convert it to `undefined`.
    //
    // For example, `react-hook-form` sets `value` to `null` when the user clears the input.
    // https://gitlab.com/catamphetamine/react-phone-number-input/-/issues/164
    // In that case, without this conversion of `null` to `undefined`, it would reset
    // the selected country to `defaultCountry` because in that case `newValue !== value`
    // because `null !== undefined`.
    //
    // Historically, empty `value` is encoded as `undefined`.
    // Perhaps empty `value` would be better encoded as `null` instead.
    // But because that would be a potentially breaking change for some people,
    // it's left as is for the current "major" version of this library.
    //
    if (value1 === null) {
        value1 = undefined;
    }

    if (value2 === null) {
        value2 = undefined;
    }

    return value1 === value2;
}
//# sourceMappingURL=getPhoneInputWithCountryStateUpdateFromNewProps.js.map