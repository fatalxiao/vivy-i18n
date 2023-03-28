/**
 * @file I18n.ts
 * @author Liangxiaojun
 */

import {useStoreState} from 'react-vivy';

// Vendors
import {translate} from '../index';

// Types
import {I18nProps} from '../types';

export const I18n = ({index, ...restProps}: I18nProps) => {
    useStoreState();
    return translate(index, restProps);
};
