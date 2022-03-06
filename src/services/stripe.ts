import Stripe from 'stripe';
import packageInfo  from '../../package.json';

const { version } = packageInfo;

export const stripe = new Stripe(
    'sk_test_51KaQ6GFaBPnldZkK22wwWolRvITIzphbhrA0dTrk1m8j1mGVFDMJMQcSLOGkYTqTxl8wv6k6GFkmtiCK1YKgfD4A00ViJWrW7s',
    {
        apiVersion: '2020-08-27',
        appInfo: {
            name: 'alex',
            version
        },
    }
)