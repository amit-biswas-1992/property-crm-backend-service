
var moment = require('moment')
export const constants = {
    PORT: 8080,
    API: '/api',
    VERSION_1: '/v1',
    VERSION_2: '/v2',
    VERSION_3: '/v3',
    BAD_REQ: 'BAD_REQUEST',
    UNAUTH_REQ: 'Unauthorized',
    NOT_FOUND: 'NOT_FOUND',
    UPDATE_FAILED: 'Update failed',
    GENERIC_ERROR: 'An error occurred',
    COM_KABBIK: 'com.kabbik',
    FB_BASE_URL: 'https://graph.facebook.com',
    //SHURJO_BASE_URL: 'https://sandbox.shurjopayment.com/api',
    SHURJO_BASE_URL: 'https://engine.shurjopayment.com/api',
    SMS_API_BASE_IP: '66.45.237.70',
    SMS_API_ID: '8IQ3HNF6SJ',
    SMS_API_USER_NAME: '01784464747',
    SMS_API_PASS: 'Wonder@987',
    ROOT_PATH: './',
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
    PHONE: 'phone',
    EXTERNAL_TOKEN: 'de3f20f29aa553d717528e289655ee0ee18b8d2575e60a6b68717000eedd118702e1750ec23123a18b2f4b7e597967d21a33',
    HTTP_200: 200, // ok
    HTTP_201: 201, // created
    HTTP_400: 400, // bad req
    HTTP_401: 401, // Unauthorized
    HTTP_404: 404,
    HTTP_500: 500,
    SMS_SENDER_ID: 820,
    //shurjopay
    SANDBOX_USERNAME: 'sp_sandbox',
    SANDBOX_PASSWORD: 'pyyk97hu&6u6',
    SP_USERNAME: 'wondersoftsolution',
    SP_PASSWORD: 'wondxwherq27zz2w',
    SP_ORDER_PREFIX: 'WON',
    STORE_ID: 33,
    RETURN_URL: 'https://kabbik.com/#/paymentSuccess',
    CANCEL_URL: 'https://kabbik.com/#/paymentFailure',
} as const;
