import { colors } from "../constants";

const squadPaymentData = [];
const verifyTransactionData = [];

export const sampleRequest = {
  amount: 43000,
  email: "henimastic@gmail.com",
  currency: "NGN",
  initiate_type: "inline",
  transaction_ref: "4678388588350909090AH",
  callback_url: "http://squadco.com",
};

export const initiatePaymentApi = [
  {
    title: "Header",
    children: [
      {
        key: "Authorization",
        dataType: "String",
        description:
          "API keys (Secret Key) that authorize your transactions and gotten from your squad dashboard",
        required: true,
      },
    ],
  },
  {
    title: "Body",
    children: [
      {
        key: "email",
        dataType: "String",
        description: "Customer's email address.",
        required: true,
      },
      {
        key: "amount",
        dataType: "String",
        description:
          "The amount you are debiting customer (expressed in the lowest currency value - kobo& cent). 10000 = 100NGN for Naira Transactions",
        required: true,
      },
      {
        key: "initiate_type",
        dataType: "String",
        description:
          "This states the method by which the transaction is initiated. At the moment, this can only take the value 'inline'.",
        required: true,
      },
      {
        key: "currency",
        dataType: "String",
        description:
          "The currency you want the amount to be charged in. Allowed value is either NGN or USD.",
        required: true,
      },
      {
        key: "transaction_ref",
        dataType: "String",
        description:
          "This states the method by which the transaction is initiated. At the moment, this can only take the value 'inline'.",
        required: false,
      },
      {
        key: "customer_name",
        dataType: "String",
        description: "Name of Customer carrying out the transaction",
        required: false,
      },
      {
        key: "callback_url",
        dataType: "String",
        description: "Sample: http://squadco.com",
        required: false,
      },
      {
        key: "payment_channels",
        dataType: "Array",
        description:
          "An array of payment channels to control what channels you want to make available for the user to make a payment with. Available channels include; ['card', 'bank' , 'ussd','transfer']",
        required: false,
      },
      {
        key: "metadata",
        dataType: "Object",
        description:
          "Object that contains any additional information that you want to record with the transaction. The custom fields in the object will be returned via webhook and the payment verification endpoint.",
        required: false,
      },
      {
        key: "pass_charge",
        dataType: "Boolean",
        description:
          "It takes two possible values: True or False. It is set to False by default. When set to True, the charges on the transaction is computed and passed on to the customer(payer). But when set to False, the charge is passed to the merchant and will be deducted from the amount to be settled to the merchant.",
        required: false,
      },
      {
        key: "sub_merchant_id",
        dataType: "String",
        description:
          "This is the ID of a meerchant that was created by an aggregator which allows the aggregator initiate a transaction on behalf of the submerchant. This parameter is an optional field that is passed only by a registered aggregator",
        required: false,
      },
    ],
  },
];

export const initiatePaymentResponse = [
  {
    status: "200:OK",
    responseMsg: "Successful",
    pill: colors?.greenColor,
    code: `{
    "status": 200,
    "message": "success",
    "data": {
        "auth_url": null,
        "access_token": null,
        "merchant_info": {
            "merchant_response": null,
            "merchant_name": null,
            "merchant_logo": null,
            "merchant_id": "SBN1EBZEQ8"
        },
        "currency": "NGN",
        "recurring": {
            "frequency": null,
            "duration": null,
            "type": 0,
            "plan_code": null,
            "customer_name": null
        },
        "is_recurring": false,
        "plan_code": null,
        "callback_url": "http://squadco.com",
        "transaction_ref": "4678388588350909090AH",
        "transaction_memo": null,
        "transaction_amount": 43000,
        "authorized_channels": [
            "card",
            "ussd",
            "bank"
        ],
        "checkout_url": "https://sandbox-pay.squadco.com/4678388588350909090AH"
    }
}

`,
  },
  {
    status: "401:Unauthorized",
    responseMsg: "Invalid/No Authorization Key",
    pill: colors?.orangeColor,
    code: `{
            "status": 401,
            "message": "Initiate transaction Unauthorized",
            "data": null
}`,
  },
  {
    status: "400:Bad Request",
    responseMsg: "Bad Request",
    pill: colors?.orangeColor,
    code: `{
        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",
        "title": "One or more validation errors occurred.",
        "status": 400,
        "traceId": "|8aec540f-493270cdd9661378.",
        "errors": {
            "email": [
                "The email field is required."
            ]
        }
}
`,
  },
];

export const chargeCardApi = [
  {
    title: "Body",
    children: [
      {
        key: "amount",
        dataType: "Integer",
        description:
          "Amount to charge from card in the lowest currency value. kobo for NGN transactions or cent for USD transactions",
        required: true,
      },
      {
        key: "token_id",
        dataType: "String",
        description:
          "A unique tokenization code for each card transaction and it is returned via the webhook for first charge on the card.",
        required: true,
      },
      {
        key: "transaction_ref",
        dataType: "String",
        description:
          "Unique case-sensitive transaction reference. If you do not pass this parameter, Squad will generate a unique reference for you.",
        required: false,
      },
    ],
  },
];

export const chargeCardResponse = [
  {
    status: "200:OK",
    responseMsg: "Successful",
    pill: colors?.greenColor,
    code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "transaction_amount": 0,
                "transaction_ref": null,
                "email": null,
                "transaction_status": null,
                "transaction_currency_id": null,
                "created_at": "0001-01-01T00:00:00",
                "transaction_type": null,
                "merchant_name": null,
                "merchant_business_name": null,
                "gateway_transaction_ref": null,
                "recurring": null,
                "merchant_email": null,
                "plan_code": null
            }
}`,
  },
  {
    status: "400:Bad Request",
    responseMsg: "Bad Request",
    pill: colors?.orangeColor,
    code: `{
            "status": 400,
            "success": false,
            "message": "amount cannot be < 0",
            "data": {}
}`,
  },
];

export const queryAllTransactionsApi = [
  {
    title: "Query",
    children: [
      {
        key: "currency",
        dataType: "string",
        description: "transacting currency",
        required: false,
      },
      {
        key: "start_date",
        dataType: "date",
        description: "start date of transaction",
        required: true,
      },
      {
        key: "end_date",
        dataType: "date",
        description: "end date of transaction",
        required: true,
      },
      {
        key: "page",
        dataType: "integer",
        description: "number of transactions to be displayed in a page",
        required: false,
      },
      {
        key: "perpage",
        dataType: "integer",
        description: "number of transactions to be displayed in a page",
        required: false,
      },
      {
        key: "reference",
        dataType: "string",
        description: "transaction ref of a transaction",
        required: false,
      },
    ],
  },
];

export const queryAllTransactionsResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `"status": 200,
    "success": true,
    "message": "Success",
    "data": [
        {
            "id": 589,
            "transaction_amount": 500000,
            "transaction_ref": "SQDEMO6384411820295800001",
            "email": "demo@merchant.com",
            "merchant_id": "AABBCCDDEEFFGGHHJJKK",
            "merchant_amount": 495000,
            "merchant_name": "Demo Habari Shop",
            "merchant_business_name": "Ogbologba and Sons Limited",
            "merchant_email": "demo@merchant.com",
            "customer_email": "demo@merchant.com",
            "customer_name": "Test QA",
            "meta_data": "{\"ip_address\":\"154.113.177.121\",\"Customer_name\":\"Test QA\",\"user_agent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36\",\"referring_site\":\"https://pay.squadinc.co/\",\"payment_link_id\":\"GH9Y19\",\"payment_link_type\":\"otp\",\"source\":\"Desktop\",\"device_id\":null,\"order_id\":null,\"auth_code\":null,\"fingerprintData\":null,\"callback_url\":null,\"initiate_type\":null,\"browser_screen_height\":695,\"browser_screen_width\":1536,\"referrer_url\":\"https://pay.squadinc.co/\",\"extra\":\"{}\"}",
            "meta": {
                "ip_address": [],
                "Customer_name": [],
                "user_agent": [],
                "referring_site": [],
                "payment_link_id": [],
                "payment_link_type": [],
                "source": [],
                "device_id": [],
                "order_id": [],
                "auth_code": [],
                "fingerprintData": [],
                "callback_url": [],
                "initiate_type": [],
                "browser_screen_height": [],
                "browser_screen_width": [],
                "referrer_url": [],
                "extra": []
            },
            "transaction_status": "success",
            "transaction_charges": 0,
            "transaction_currency_id": "NGN",
            "transaction_gateway_id": "",
            "transaction_type": "Card",
            "flat_charge": 0,
            "is_suspicious": false,
            "is_refund": false,
            "created_at": "2024-02-21T13:16:43.012+00:00"
}`,
  },
];

export const verifyTransactionApi = [
  {
    title: "Query",
    children: [
      {
        key: "transaction_ref",
        dataType: "String",
        description:
          "Unique transaction reference that identifies each transaction",
        required: true,
      },
    ],
  },
];

export const verifyTransactionResponse = [
  {
    status: "200:OK",
    responseMsg: "Valid Transaction Reference",
    pill: colors?.greenColor,
    code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "transaction_amount": 5000,
                "transaction_ref": "SQCHIZ3634573076082",
                "email": "ayo@gmail.com",
                "transaction_status": "Success",
                "transaction_currency_id": "NGN",
                "created_at": "0001-01-01T00:00:00",
                "transaction_type": "VirtualAccount",
                "merchant_name": "CHIZOBA ANTHONY",
                "merchant_business_name": null,
                "gateway_transaction_ref": "SQCHIZ3634573076082",
                "recurring": null,
                "merchant_email": "okoyeanthonychizoba@gmail.com",
                "plan_code": null
            }
}
`,
  },
  {
    status: "400:Bad Request",
    responseMsg: "Invalid Transaction Reference",
    pill: colors?.orangeColor,
    code: `{
            "status": 400,
            "success": false,
            "message": "Invalid transaction reference",
            "data": {}
}`,
  },
  {
    status: "401:Unauthorized",
    responseMsg: "Unauthorized Request",
    pill: colors?.orangeColor,
    code: `{
            "success": false,
            "message": "",
            "data": {}
}`,
  },
  {
    status: "403:Forbidden",
    responseMsg: "Invalid API Key",
    pill: colors?.orangeColor,
    code: `{
            "success": false,
            "message": "API key is invalid. Key must start with sandbox_sk_",
            "data": {}
}`,
  },
];

export const createSubMerchantsApi = [
  {
    title: "Body",
    children: [
      {
        key: "display_name",
        dataType: "String",
        description: "Name of sub-merchant",
        required: true,
      },
      {
        key: "account_name",
        dataType: "String",
        description: "Sub-merchant's settlement bank account name",
        required: true,
      },
      {
        key: "account_number",
        dataType: "String",
        description: "Sub-merchant's settlement account number",
        required: true,
      },
      {
        key: "bank_code",
        dataType: "String",
        description: "Sub-merchant's settlement bank code. e.g 058",
        required: true,
      },
      {
        key: "bank",
        dataType: "String",
        description: "Name of sub-merchant's settlement bank e.g GTBank",
        required: true,
      },
    ],
  },
];

export const createSubMerchantsResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
      "status": 200,
      "success": true,
      "message": "Success",
      "data": {
          "account_id": "AGGERYG8WF34"
      }
}`,
  },
  {
    status: "400:Bad Request",
    responseMsg: "Error in request payload",
    pill: colors?.orangeColor,
    code: `{
      "status": 400,
      "success": false,
      "message": "\"account_number\" is required",
      "data": {}
}`,
  },
  {
    status: "401:Unauthorized",
    responseMsg: "No Authorization",
    pill: colors?.orangeColor,
    code: `{
      "success": false,
      "message": "",
      "data": {}
}`,
  },
  {
    status: "403:Forbidden",
    responseMsg: "Wrong/Invalid API Keys",
    pill: colors?.orangeColor,
    code: `{
      "success": false,
      "message": "Merchant authentication failed",
      "data": {}
}`,
  },
];
