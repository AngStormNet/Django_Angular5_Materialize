/*
    Conf file
*/

import {environment} from '../../environments/environment';

export const CONF_API = {
    apihost: 'http://' + environment.api_host + ':' + environment.api_port + '/',
    version: '',  // put here version of api if needed o not forget the '/'
};
