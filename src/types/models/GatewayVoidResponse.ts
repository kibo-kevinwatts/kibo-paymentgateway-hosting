/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ConnectionStatuses } from './ConnectionStatuses';
import type { KeyValueTuple } from './KeyValueTuple';

export type GatewayVoidResponse = {
    transactionId?: string | null;
    remoteConnectionStatus?: ConnectionStatuses;
    responseText?: string | null;
    responseCode?: string | null;
    isDeclined?: boolean;
    responseData?: Array<KeyValueTuple> | null;
};
