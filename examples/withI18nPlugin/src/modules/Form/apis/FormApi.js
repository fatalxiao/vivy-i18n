/**
 * @file FormApi.js
 */

// Vendors
import axios from 'axios';

let source;

/**
 * Login
 * @param params
 * @returns {Promise<Response>}
 */
export function login(params) {

    if (source) {
        source.cancel();
    }

    source = axios.CancelToken.source();

    return axios.get('/login', {
        cancelToken: source.token,
        params
    });

}
