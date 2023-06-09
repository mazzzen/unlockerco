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

import React from 'react';
import PropTypes from 'prop-types';
import labels from '../locale/en.json.js';
import {
    metadata as metadataPropType,
    labels as labelsPropType
} from './PropTypes.js';
import PhoneInput from './PhoneInputWithCountry.js';
export function createPhoneInput(defaultMetadata) {
    var PhoneInputDefault = /*#__PURE__*/ React.forwardRef(function(props, ref) {
        return /*#__PURE__*/ React.createElement(PhoneInput, _extends({
            ref: ref
        }, props));
    });
    PhoneInputDefault.propTypes = {
        metadata: metadataPropType.isRequired,
        labels: labelsPropType.isRequired
    };
    PhoneInputDefault.defaultProps = {
        metadata: defaultMetadata,
        labels: labels
    };
    return PhoneInputDefault;
}
export default createPhoneInput();
//# sourceMappingURL=PhoneInputWithCountryDefault.js.map