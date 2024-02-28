import { colors } from "../constants";

//API Specifications

export const customerModelApi = [
  {
    title: "Body",
    children: [
      {
        key: "first_name",
        dataType: "String",
        description: "customer first name",
        required: true,
      },
      {
        key: "last_name",
        dataType: "String",
        description: "customer last name",
        required: true,
      },
      {
        key: "middle_name",
        dataType: "String",
        description: "customer middle name",
        required: false,
      },
      {
        key: "mobile_num",
        dataType: "String",
        description: "08012345678 (doesn't take more than 11 digits)",
        required: true,
      },
      {
        key: "dob",
        dataType: "Date",
        description: "dd/mm/yyyy",
        required: true,
      },
      {
        key: "email",
        dataType: "String",
        description: "customer email",
        required: false,
      },
      {
        key: "bvn",
        dataType: "String",
        description: "BVN is compulsory",
        required: true,
      },
      {
        key: "gender",
        dataType: "String",
        description: "'1' - Male, '2' -Female",
        required: true,
      },
      {
        key: "address",
        dataType: "String",
        description: "customer address",
        required: true,
      },
      {
        key: "customer_identifier",
        dataType: "String",
        description: "unique customer identifier as given by merchant",
        required: true,
      },
      {
        key: "beneficiary_account",
        dataType: "String",
        description:
          "Beneficiary Account is the 10 Digit Bank Account Number (GTBank) provided by the Merchant where money sent to this Virtual account is paid into. Please note that when beneficiary account is not provided, money paid into this virtual account go into your wallet and will be paid out/settled in T+1 settlement time.",
        required: false,
      },
    ],
  },
];

export const customerModelResponse = [
  {
    status: "200:OK",
    responseMsg: "Success Response",
    pill: colors?.greenColor,
    code: `{
            "customer_identifier": "CCC",
            "first_name": "Techzilla- Joesph",
            "last_name": "Okoye",
            "mobile_num": "08139011943",
            "email": "ayo@gmail.com",
            "bvn": "12343211654",
            "dob": "30/10/1990",
            "address": "22 Kota street, UK",
            "gender": "1",
            "beneficiary_account": "4920299492"
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
    responseMsg: "Invalid/Wrong API keys",
    pill: colors?.orangeColor,
    code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
}`,
  },
];

export const BusinessModelApi = [
  {
    title: "Body",
    children: [
      {
        key: "bvn",
        dataType: "String",
        description: "Bank Verification Number",
        required: true,
      },
      {
        key: "business_name",
        dataType: "String",
        description: "Name of Business/Customer",
        required: true,
      },
      {
        key: "customer_identifier",
        dataType: "String",
        description:
          "An alphanumeric string used to identify a customer/business in your system which will be tied to the virtual account being created",
        required: true,
      },
      {
        key: "mobile_num",
        dataType: "String",
        description:
          "Customer's Phone Number Sample: 08012345678 (doesn't take more than 11 digits)",
        required: true,
      },
      {
        key: "beneficiary_account",
        dataType: "Date",
        description:
          "Beneficiary Account is your 10 Digit Bank Account Number (GTBank) where money sent to this Virtual account is paid into. Please note that when beneficiary account is not provided, money paid into this virtual account go into your wallet and will be paid out/settled in T+1 settlement time.",
        required: false,
      },
    ],
  },
];

export const BusinessModelResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "first_name": "Techzilla-Will",
                "last_name": "Okoye",
                "bank_code": "058",
                "virtual_account_number": "2474681469",
                "beneficiary_account": null,
                "customer_identifier": "Tech910260",
                "created_at": "2023-08-07T13:18:21.287Z",
                "updated_at": "2023-08-07T13:18:21.287Z"
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
            "message": "\"customer_identifier\" is required",
            "data": {}
}`,
  },
  {
    status: "401:Unauthorized",
    responseMsg: "No API key",
    pill: colors?.orangeColor,
    code: `{
            "success": false,
            "message": "",
            "data": {}
}`,
  },
  {
    status: "403:Forbidden",
    responseMsg: "Invalid Authorization key or token",
    pill: colors?.orangeColor,
    code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
}`,
  },
  {
    status: "424: Failed Dependency",
    responseMsg: "Wrong Account Number",
    pill: colors?.orangeColor,
    code: `{
      "success": false,
      "message": "Validation Failure No record found for Account number- 1237398433",
      "data": {
        "first_name": null,
        "last_name": null,
        "bank_code": null,
        "virtual_account_number": null,
        "beneficiary_account": null,
        "customer_identifier": null,
        "created_at": "0001-01-01T00:00:00",
        "updated_at": "0001-01-01T00:00:00"
      },
      "status": "424"
}`,
  },
];

export const getWebhookErrorLogApi = [
  {
    title: "Query",
    children: [
      {
        key: "page",
        dataType: "Integer",
        description: "The page you are on",
        required: false,
      },
      {
        key: "perPage",
        dataType: "Integer",
        description: "Number of records you want to appear on a page",
        required: false,
      },
    ],
  },
];

export const getWebhookErrorLogResponse = [
  {
    status: "200:OK",
    responseMsg: "Response description",
    pill: colors?.greenColor,
    code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "count": 2,
                "rows": [
                    {
                        "id": "229f9f3d-53e4-450e-a9e9-164a8b882a60",
                        "payload": {
                            "hash": "659c24ba0b6c3ac324b587f2f079c8ee876c56609ff11b7106cd868f84674a5c37fcb088373859f8d900713f03c47d819de79623cde67e70bbca945fd20f3cb3",
                            "meta": {
                                "freeze_transaction_ref": null,
                                "reason_for_frozen_transaction": null
                            },
                            "channel": "virtual-account",
                            "remarks": "Transfer FROM OKOYE, CHIZOBA ANTHONY | [CCtyttytC] TO CHIZOBA ANTHONY OKOYE",
                            "currency": "NGN",
                            "fee_charged": "0.05",
                            "sender_name": "OKOYE, CHIZOBA ANTHONY",
                            "encrypted_body": "DiPEa8Z4Cbfiqulhs3Q8lVJXGjMIFzbWwI2g7utVGbhXihbtK3H2xsA/+ZnjOpFA0AU8vAN5LUTEH6elfrK58ub2wydaRk0ngvQXWUFz3iB19qWBcdGQRnppKAT/AB5xyy1iQZvEHP7zq3Y7na5zcx9ttkU1mZIeAIoisM9k+ghVLxkTeql4UvfFcLyDdGzMd/BC4YgJFyrZxifhfhKi073od7xJnz4Hhz08UBE/FAwNYMWkwWD9izlbcaaJtfh1VIN6t9rl1gotlb5qmNq/UytgoSvuN5uaEXxegdB3VWvmsDMHqoYwDs4oEuv0lp8zUUG3cZ9zPQ6xH3shGQjVOWErkuIfCk62fRzkwxya4Gu/x2KHMSQjutbvD4vNDjVGfuCIoHuZEXPThWrq1jpTy7cNMLc8ZZ8IowJnfwWHL+O6fuepxXxfrJHlswMCI35ZHSvef1AEXgbUlx2O7yzytceCogpUkY+QJ1yLddl1FeE1u2JKOM+casP3pfiT+t3Mv55aSCVQO7hUy46gd6H/bIHaSIp2K3CcjfdflZ/bxCZaZoe/sRqfVdVIzpSpTc0Lq5sOXM2gijOdeg+zex/CgnMIKGJdzUT9YUJtaaVrMmhk0EcM0rHRrqs0iM7xaSTdZ7K8hnzl0RPJhDXIhu5a/Y2NxS3ZTC2lYRVZd6I3lerpoMQG69VfmqvaVgW2k03f",
                            "settled_amount": "49.95",
                            "principal_amount": "50.00",
                            "transaction_date": "2023-09-01T00:00:00.000Z",
                            "customer_identifier": "CCtyttytC",
                            "transaction_indicator": "C",
                            "transaction_reference": "REF20230901162737156459_1",
                            "virtual_account_number": "0760640237"
                        },
                        "transaction_ref": "REF20230901162737156459_1"
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
];

export const deleteWebhookErrorLogApi = [
  {
    title: "Path",
    children: [
      {
        key: "transaction_ref",
        dataType: "String",
        description:
          "Unique Transaction Ref that identifies each virtual account and gotten from the retrieved webhook error log",
        required: true,
      },
    ],
  },
];

export const deleteWebhookErrorLogResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": 1
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

export const queryCustomerTransactionApi = [
  {
    title: "Path",
    children: [
      {
        key: "customer_identifier",
        dataType: "String",
        description:
          "Unique Customer Identifier that identifies each virtual account",
        required: false,
      },
    ],
  },
];

export const queryAllMerchantTransactionsApi = [
  {
    title: "No Parameters",
  },
];

export const queryAllMerchantTransactionsMultipleFiltersApi = [
  {
    title: "Query",
    children: [
      {
        key: "page",
        dataType: "Integer",
        description: "Page Number to Display",
        required: false,
      },
      {
        key: "perPage",
        dataType: "Integer",
        description: "Number of records per Page",
        required: false,
      },
      {
        key: "virtualAccount",
        dataType: "Integer",
        description: "a unique 10-digit virtual account number",
        required: false,
      },
      {
        key: "customerIdentifier",
        dataType: "String",
        description:
          "Unique Identifier used to create/identify a customer's virtual account",
        required: false,
      },
      {
        key: "startDate",
        dataType: "Date",
        description: "MM-DD-YYYY E.G: 09-19-2022",
        required: false,
      },
      {
        key: "endDate",
        dataType: "Date",
        description: "MM-DD-YYYY E.G: 09-19-2022",
        required: false,
      },
      {
        key: "transactionReference",
        dataType: "String",
        description: "Unique Identifier of a transaction",
        required: false,
      },
      {
        key: "session_id",
        dataType: "String",
        description: "Unique ID that identifies all NIP transactions",
        required: false,
      },
      {
        key: "dir",
        dataType: "String",
        description:
          "Takes two possible values: 'DESC' and 'ASC'. 'DESC' - descending order ,'ASC' - ascending order",
        required: false,
      },
    ],
  },
];

export const queryAllMerchantTransactionsMultipleFiltersResponse = [
  {
    status: "200:OK",
    responseMsg: "Success",
    pill: colors?.greenColor,
    code: `{
    "status": 200,
    "success": true,
    "message": "Success",
    "data": {
        "count": 15,
        "rows": [
            {
                "transaction_reference": "REF20221007130357_1",
                "virtual_account_number": "0713810881",
                "principal_amount": "50.00",
                "settled_amount": "50.00",
                "fee_charged": "0.00",
                "transaction_date": "2022-10-07T00:00:00.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer FROM Sample | [CCC1234334] TO Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-10-07T12:04:11.635Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "CCC1234334"
                }
            },
            {
                "transaction_reference": "REF20221004191517_1",
                "virtual_account_number": "0708729381",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-10-04T00:00:00.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer FROM Sample Name4 | [OPPO] TO Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-10-04T18:15:29.463Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "OPPO"
                }
            },
            {
                "transaction_reference": "REF20220913181048_1",
                "virtual_account_number": "0709108705",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-09-13T18:10:48.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer FROM Sample Name4 | [TSP/00008786500] TO Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-09-20T09:51:04.999Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "TSP/00008786500"
                }
            },
            {
                "transaction_reference": "REF20220713143436_1",
                "virtual_account_number": "0713694755",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-07-13T14:34:36.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name | [123CCC] to Sample Name5",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-07-13T13:35:13.410Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "123CCC"
                }
            },
            {
                "transaction_reference": "REF20220707162950_1",
                "virtual_account_number": "0710954717",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-07-07T16:29:50.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name4 | [12345] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-07-07T15:30:06.761Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "12345"
                }
            },
            {
                "transaction_reference": "REF20220624160230_1",
                "virtual_account_number": "0710954717",
                "principal_amount": "30.00",
                "settled_amount": "29.85",
                "fee_charged": "0.15",
                "transaction_date": "2022-06-24T16:02:30.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name5 | [12345] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-24T15:03:29.054Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "12345"
                }
            },
            {
                "transaction_reference": "REF20220624155515_1",
                "virtual_account_number": "0710954717",
                "principal_amount": "30.00",
                "settled_amount": "29.85",
                "fee_charged": "0.15",
                "transaction_date": "2022-06-24T15:55:15.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name4 | [12345] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-24T14:56:23.266Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "12345"
                }
            },
            {
                "transaction_reference": "REF20220623095446_1",
                "virtual_account_number": "0710954717",
                "principal_amount": "30.00",
                "settled_amount": "29.85",
                "fee_charged": "0.15",
                "transaction_date": "2022-06-23T09:54:46.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name3 | [12345] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-23T08:55:06.599Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "12345"
                }
            },
            {
                "transaction_reference": "REF20220617131121_1",
                "virtual_account_number": "0708729381",
                "principal_amount": "30.00",
                "settled_amount": "29.85",
                "fee_charged": "0.15",
                "transaction_date": "2022-06-17T13:11:21.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name3 | [OPPO] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-17T12:11:38.228Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "OPPO"
                }
            },
            {
                "transaction_reference": "REF20220617130949_1",
                "virtual_account_number": "0708729381",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-06-17T13:09:49.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name3 | [OPPO] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-17T12:10:14.605Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "OPPO"
                }
            },
            {
                "transaction_reference": "REF20220617125618_1",
                "virtual_account_number": "0708729381",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-06-17T12:56:18.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from sample Name1 | [OPPO] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-17T11:56:42.868Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "OPPO"
                }
            },
            {
                "transaction_reference": "REF20220617115436_1",
                "virtual_account_number": "0709056301",
                "principal_amount": "50.00",
                "settled_amount": "49.75",
                "fee_charged": "0.25",
                "transaction_date": "2022-06-17T11:54:36.000Z",
                "transaction_indicator": "C",
                "remarks": "Transfer from Sample Name3 | [TSP/00002900] to Sample Name",
                "currency": "NGN",
                "alerted_merchant": false,
                "merchant_settlement_date": "2022-06-17T10:54:54.837Z",
                "frozen_transaction": null,
                "customer": {
                    "customer_identifier": "TSP/00002900"
                }
            }
        ],
        "query": {}
    }
}`,
  },
  {
    status: "400:Bad Request",
    responseMsg: "Wrong/ Invalid Input",
    pill: colors?.orangeColor,
    code: `{
        "status": 400,
        "success": false,
        "message": "\"virtualAccount\" is not allowed to be empty",
        "data": {}
}`,
  },
  {
    status: "401:Unauthorized",
    responseMsg: "No API Keys",
    pill: colors?.orangeColor,
    code: `{
            "success": false,
            "message": "",
            "data": {}
}`,
  },
  {
    status: "403:Forbidden",
    responseMsg: "Invalid Keys/Token",
    pill: colors?.orangeColor,
    code: `{
            "success": false,
            "message": "Merchant authentication failed",
            "data": {}
}`,
  },
];

export const customerDetailsByVirtualAccountNumberApi = [
  {
    title: "Path",
    children: [
      {
        key: "virtual_account_number",
        dataType: "String",
        description:
          "Unique 10-digit virtual account number assigned to a customer",
        required: true,
      },
    ],
  },
];

export const customerDetailsByVirtualAccountNumberResponse = [
  {
    status: "200:OK",
    responseMsg: "Valid Virtual Account Number",
    pill: colors?.greenColor,
    code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "first_name": "Timothy",
                "last_name": "Oke",
                "mobile_num": "08000000000",
                "email": "atioke@gmail.com",
                "customer_identifier": "CCtyttytC",
                "virtual_account_number": "0686786837"
            }
}`,
  },
  {
    status: "404:Not Found",
    responseMsg: "Invalid Virtual Account Number",
    pill: colors?.orangeColor,
    code: `{
            "status": 404,
            "success": false,
            "message": "Virtual account not found",
            "data": {}
}`,
  },
];

export const customerDetailsUsingCustomerIdentifierApi = [
  {
    title: "Path",
    children: [
      {
        key: "customer_identifier",
        dataType: "String",
        description:
          "Unique Customer Identifier that identifies each virtual account",
        required: false,
      },
    ],
  },
];

export const updateCustomerBVNAndUnfreezeTransactionApi = [
  {
    title: "Path",
    children: [
      {
        key: "customer_bvn",
        dataType: "String",
        description: "Bank Verification Number of Customer",
        required: true,
      },
      {
        key: "customer_identifier",
        dataType: "String",
        description: "Unique number given to customer by merchant.",
        required: true,
      },
      {
        key: "phone_number",
        dataType: "String",
        description: "customer's phone number",
        required: true,
      },
    ],
  },
];

export const queryAllMerchantVirtualAccountsApi = [
  {
    title: "Query",
    children: [
      {
        key: "page",
        dataType: "String",
        description: "Number of Pages",
        required: false,
      },
      {
        key: "perPage",
        dataType: "String",
        description: "Number of Accounts to be returned per page",
        required: false,
      },
      {
        key: "startDate",
        dataType: "Date",
        description: "YY-MM-DD",
        required: false,
      },
      {
        key: "EndDate",
        dataType: "Date",
        description: "YY-MM-DD",
        required: false,
      },
    ],
  },
];

export const updateBeneficiaryAccountApi = [
  {
    title: "Body",
    children: [
      {
        key: "beneficiary_account",
        dataType: "String",
        description: "10 digit valid NUBAN account number",
        required: true,
      },
      {
        key: "virtual_account_number",
        dataType: "String",
        description:
          "The Virtual account number whose beneficiary account is to be updated",
        required: true,
      },
    ],
  },
];

export const updateBeneficiaryAccountResponse = [
  {
    status: "200:OK",
    responseMsg: "Successful",
    pill: colors?.greenColor,
    code: `{
            "status": 200,
            "success": true,
            "message": "Success",
            "data": {
                "first_name": "Sheena",
                "last_name": "Grace",
                "virtual_account_number": "3832649897",
                "beneficiary_account": "1234567890",
                "customer_identifier": "2086601683696"
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
            "message": "\"virtual_account_number\" is required",
            "data": {}
}`,
  },
  {
    status: "401:Unauthorized",
    responseMsg: "No/Invalid API Key",
    pill: colors?.orangeColor,
    code: `{
            "success": false,
            "message": "",
            "data": {}
}`,
  },
];

export const simulatePaymentApi = [
  {
    title: "Header",
    children: [
      {
        key: "content-type",
        dataType: "String",
        description: "application/json",
        required: true,
      },
      {
        key: "Authorization",
        dataType: "String",
        description: "Private Key or Secret Key (Gotten from your dashboard)",
        required: true,
      },
    ],
  },
  {
    title: "Body",
    children: [
      {
        key: "virtual_account_number",
        dataType: "String",
        description:
          "Virtual Account number of customer that wants to make payment.",
        required: true,
      },
      {
        key: "amount",
        dataType: "String",
        description: "Simulated Amount",
        required: false,
      },
    ],
  },
];

export const simulatePaymentResponse = [
  {
    status: "200:OK",
    responseMsg: "Successful",
    pill: colors?.greenColor,
    code: `{
            "success": true,
            "message": "Success",
            "data": {}
}`,
  },
];
