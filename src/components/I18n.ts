/**
 * @file I18n.ts
 * @author Liangxiaojun
 */

// Hooks
import {useModelState} from 'react-vivy';

// Vendors
import {translate} from '../index';

// Types
import {I18nProps} from '../types';

export const I18n = ({index, ...restProps}: I18nProps) => {

    const [nameSpace] = index?.split('/') || [];
    useModelState(nameSpace);

    return translate(index, restProps);

};
