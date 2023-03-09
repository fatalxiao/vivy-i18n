/**
 * @file I18n.ts
 * @author Liangxiaojun
 */

import PropTypes from 'prop-types';
import {useStoreState} from 'react-vivy';

// Vendors
import {translate} from '../index';

// Types
import {I18nProps} from '../types';

export const I18n = ({index, ...restProps}: I18nProps) => {
    useStoreState();
    return translate(index, restProps);
};

I18n.propTypes = {

    /**
     * format: '{MODEL_NAMESPACE}/{I18N_KEY}'
     */
    index: PropTypes.string

};
