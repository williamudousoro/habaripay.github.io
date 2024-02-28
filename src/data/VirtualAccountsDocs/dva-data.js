import { colors } from "../constants";

//Dynamic Virtual Account

export const createDynamicVAAccountsResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
              "status": 200,
              "success": true,
              "message": "Success",
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
    responseMsg: "Invalid/Wrong Authorization",
    pill: colors?.orangeColor,
    code: `{
              "success": false,
              "message": "Merchant authentication failed",
              "data": {}
  }`,
  },
];

export const getPoolCountResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
              "status": 200,
              "success": true,
              "message": "Success",
              "data": {
                  "count_dynamic_virtual_account": 8
              }
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
    responseMsg: "Invalid/Wrong API Keys",
    pill: colors?.orangeColor,
    code: `{
              "success": false,
              "message": "Merchant authentication failed",
              "data": {}
  }`,
  },
];

export const initiateDynamicVATransactionApi = [
  {
    title: "Body",
    children: [
      {
        key: "amount",
        dataType: "Integer",
        description: "Amount is in Kobo",
        required: true,
      },
      {
        key: "duration",
        dataType: "Integer",
        description:
          "Time allowed before an account/transaction is expired. Duration is in seconds. i.e duration:60 = 1 minute",
        required: true,
      },
      {
        key: "email",
        dataType: "string",
        description: "a valid email address for notification to customer",
        required: true,
      },
      {
        key: "transaction_ref",
        dataType: "string",
        description:
          "Unique transaction Reference that identifies the transaction on your system",
        required: true,
      },
    ],
  },
];

export const initiateDynamicVATransactionResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
              "status": 200,
              "success": true,
              "message": "Success",
              "data": {
                  "is_blocked": false,
                  "account_name": "SQUAD CHECKOUT",
                  "account_number": "4879261135",
                  "expected_amount": "100.00",
                  "expires_at": "2023-08-08T08:23:27.791Z",
                  "transaction_reference": "dva123",
                  "bank": "GTBank",
                  "currency": "NGN"
              }
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
    pill: colors?.greenColor,
    code: `{
              "success": false,
              "message": "Merchant authentication failed",
              "data": {}
  }`,
  },
];

export const reQueryTransactionApi = [
  {
    title: "Path",
    children: [
      {
        key: "transaction_reference",
        dataType: "String",
        description:
          "Merchant's transaction reference passed when initiating / generating the dynamic virtual account.",
        required: true,
      },
    ],
  },
];

export const reQueryTransactionResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
              "status": 200,
              "success": true,
              "message": "Success",
              "data": {
                  "count": 3,
                  "rows": [
                      {
                          "transaction_status": "EXPIRED",
                          "transaction_reference": "Aq1111BddCDqdddqdqqEw4",
                          "created_at": "2023-08-08T07:02:59.672Z",
                          "refund": false
                      },
                      {
                          "transaction_status": "SUCCESS",
                          "transaction_reference": "Aq1111BddCDqdddqdqqEw4",
                          "created_at": "2023-08-08T07:02:54.052Z",
                          "refund": null
                      },
                      {
                          "transaction_status": "MISMATCH",
                          "transaction_reference": "Aq1111BddCDqdddqdqqEw4",
                          "created_at": "2023-08-08T07:02:29.392Z",
                          "refund": false
                      }
                  ]
              }
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
    pill: colors?.greenColor,
    code: `{
              "success": false,
              "message": "Merchant authentication failed",
              "data": {}
  }`,
  },
];

export const editAmountOrDurationApi = [
  {
    title: "Body",
    children: [
      {
        key: "transaction_reference",
        dataType: "String",
        description:
          "The transaction ref of the already initiated transaction.",
        required: true,
      },
      {
        key: "amount",
        dataType: "Integer",
        description: "Amount is in Kobo",
        required: false,
      },
      {
        key: "duration",
        dataType: "Integer",
        description:
          "Amount of time before transaction expires. Duration is in seconds.",
        required: false,
      },
    ],
  },
];

export const editAmountOrDurationResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
              "status": 200,
              "success": true,
              "message": "Success",
              "data": {
                  "account_number": "0852491446",
                  "currency": "NGN",
                  "amount": 5000,
                  "expires_at": "2023-08-30T17:01:46.973Z",
                  "transaction_reference": "ify21"
              }
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
    pill: colors?.greenColor,
    code: `{
              "success": false,
              "message": "Merchant authentication failed",
              "data": {}
  }`,
  },
  {
    status: "404:Not Found",
    responseMsg: "Invalid Transaction Ref",
    pill: colors?.greenColor,
    code: `{
              "status": 404,
              "success": false,
              "message": "Transaction not found",
              "data": {}
  }`,
  },
];

export const simulatePaymentEndpointApi = [
  {
    title: "Body",
    children: [
      {
        key: "virtual_account_number",
        dataType: "String",
        description:
          "10-digit Dynamic Account gotten after initiating a virtual transfer. ",
        required: true,
      },
      {
        key: "amount",
        dataType: "String",
        description:
          "Amount is in naira. This is the expected amount to be transferred into the dynamic virtual account.",
        required: true,
      },
      {
        key: "dva",
        dataType: "boolean",
        description: "true",
        required: true,
      },
    ],
  },
];

export const simulatePaymentEndpointResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
              "status": 200,
              "success": true,
              "message": "Success",
              "data": "Payment successful"
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
    pill: colors?.greenColor,
    code: `{
              "success": false,
              "message": "Merchant authentication failed",
              "data": {}
  }`,
  },
];
