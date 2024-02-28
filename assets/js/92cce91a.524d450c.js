"use strict";(self.webpackChunkhabari_docs=self.webpackChunkhabari_docs||[]).push([[473],{2358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var o=t(5893),a=t(1151),r=t(3615);t(6775);const i=[{title:"Header",children:[{key:"x-squad-encrypted-body",dataType:"Hash",description:"This is the encrypted payload which serves as a test of truth for all transactions. This should be compared against the body sent via the webhook by encrypting the body of data and comparing the value with this value",required:!0},{key:"Content-type",dataType:"JSON",description:"application/json",required:!0}]}],s={sidebar_position:1},c="Webhook & Redirect URL",d={id:"webhook-direct-url/webhook-and-direct-url",title:"Webhook & Redirect URL",description:"Webhooks are used so that anytime an event occurs on your account, your application can be notified with instant, real-time notifications by Squad.",source:"@site/docs/webhook-direct-url/webhook-and-direct-url.mdx",sourceDirName:"webhook-direct-url",slug:"/webhook-direct-url/webhook-and-direct-url",permalink:"/webhook-direct-url/webhook-and-direct-url",draft:!1,unlisted:!1,editUrl:"https://github.com/HabariPay/habaripay.github.io/tree/main/docs/webhook-direct-url/webhook-and-direct-url.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Test Cards",permalink:"/Payments/test-cards"},next:{title:"Signature validation",permalink:"/webhook-direct-url/signature-validation"}},h={},l=[{value:"Webhook Validation",id:"webhook-validation",level:3},{value:"Sample Webhook for Card Transactions",id:"sample-webhook-for-card-transactions",level:3},{value:"Sample Webhook for Bank Transfer Option",id:"sample-webhook-for-bank-transfer-option",level:3},{value:"SAMPLE WEBHOOK FOR USSD PAYMENT OPTION",id:"sample-webhook-for-ussd-payment-option",level:3},{value:"Sample Webhook for Merchant USSD (USSD CODE ON THE DASHBOARD)",id:"sample-webhook-for-merchant-ussd-ussd-code-on-the-dashboard",level:3}];function u(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"webhook--redirect-url",children:"Webhook & Redirect URL"}),"\n",(0,o.jsx)(n.p,{children:"Webhooks are used so that anytime an event occurs on your account, your application can be notified with instant, real-time notifications by Squad."}),"\n",(0,o.jsx)(n.p,{children:"Squad webhooks are HTTP calls that are triggered by specific events. It is necessary only for behind-the-scenes transactions."}),"\n",(0,o.jsx)(n.p,{children:"This can be set up on your Squad Dashboard by specifying a URL we would send POST requests to whenever a successful transaction occurs."}),"\n",(0,o.jsx)(n.p,{children:"To process notifications, you need to:"}),"\n",(0,o.jsxs)(n.p,{children:["Paste your redirect and ",(0,o.jsx)(n.strong,{children:"Callback/Webhook URL"})," in the space provided on your dashboard by following the steps below:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Login to your Squad dashboard."}),"\n",(0,o.jsx)(n.li,{children:"Go to Profile > API & Webhook."}),"\n",(0,o.jsx)(n.li,{children:"In the Webhook URL field, enter your Notification URL."}),"\n",(0,o.jsx)(n.li,{children:"In the redirect URL field, enter your redirect URL- and on completion of payment, the customer will be redirected to the URL with the transaction reference passed as a query param."}),"\n",(0,o.jsx)(n.li,{children:"Enter a redirect URL for your customers to be redirected after they complete payment."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["NB",":The"," Redirect URL is optional."]}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"KINDLY ENSURE YOU HAVE A TRANSACTION REFERENCE CHECKER WHEN IMPLEMENTING WEBHOOKS TO AVOID GIVING DOUBLE VALUE ON TRANSACTIONS."})})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Sending IP: 18.133.63.109"})}),"\n",(0,o.jsx)(n.h3,{id:"webhook-validation",children:"Webhook Validation"}),"\n",(0,o.jsxs)(n.p,{children:["To configure webhook notifications: go to ",(0,o.jsx)(n.strong,{children:(0,o.jsx)(n.em,{children:"dashboard > profile > Api & Webhooks."})})]}),"\n",(0,o.jsx)(r.Z,{items:i,parameters:!0,endpoint:"https://api.gitbook.com/v1/users",method:"POST",header:"The Webhook is a post request that is triggered whenever a transaction is successful"}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.p,{children:"Sample POST request to be sent via webhook upon successful transaction"}),"\n",(0,o.jsx)(n.h3,{id:"sample-webhook-for-card-transactions",children:"Sample Webhook for Card Transactions"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n      "Event": "charge_successful",\n      "TransactionRef": "4678388588A0",\n      "Body": {\n        "amount": 83000,\n        "transaction_ref": "4678388588A0",\n        "gateway_ref": "4678388588A0_1_1",\n        "transaction_status": "success",\n        "email": "henimastic@gmail.com",\n        "merchant_id": "SBN1EBZEQ8",\n        "currency": "NGN",\n        "transaction_type": "Card",\n        "merchant_amount": 82170,\n        "created_at": "2022-09-06T15:28:02.477",\n        "customer_mobile": null,\n        "meta": {},\n        "payment_information": {\n          "payment_type": "card",\n          "pan": "408408******4081",\n          "recurring_id": null,\n          "card_type": "visa",\n          "token_id": "tJlYMKcwPd"\n        }\n      }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"sample-webhook-for-bank-transfer-option",children:"Sample Webhook for Bank Transfer Option"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n      "Event": "charge_successful",\n      "TransactionRef": "SQGRAN7557984665043",\n      "Body": {\n        "amount": 10000,\n        "transaction_ref": "SQGRAN7557984665043",\n        "gateway_ref": "SQGRAN7557984665043_2_1",\n        "transaction_status": "Success",\n        "email": "urannas@gmail.com",\n        "merchant_id": "HD3DDPKW",\n        "currency": "NGN",\n        "transaction_type": "Bank",\n        "merchant_amount": 9900,\n        "created_at": "2023-01-23T10:01:52.284",\n        "meta": {},\n        "is_recurring": false\n      }\n}\n\n'})}),"\n",(0,o.jsx)(n.h3,{id:"sample-webhook-for-ussd-payment-option",children:"SAMPLE WEBHOOK FOR USSD PAYMENT OPTION"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n      "Event": "charge_successful",\n      "TransactionRef": "SQCHIZ6035872641857",\n      "Body": {\n        "amount": 20000,\n        "transaction_ref": "SQCHIZ6035872641857",\n        "gateway_ref": "SQCHIZ6035872641857_3_1",\n        "transaction_status": "Success",\n        "email": "maaa@h.com",\n        "currency": "NGN",\n        "transaction_type": "Ussd",\n        "merchant_amount": 19800,\n        "created_at": "2023-01-25T13:41:16.223",\n        "customer_mobile": "0803***7205",\n        "meta": {\n          "plan": "premium"\n        },\n        "is_recurring": false\n      }\n}\n'})}),"\n",(0,o.jsx)(n.h3,{id:"sample-webhook-for-merchant-ussd-ussd-code-on-the-dashboard",children:"Sample Webhook for Merchant USSD (USSD CODE ON THE DASHBOARD)"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n      "Event": "charge_successful",\n      "TransactionRef": "SQCHIZ410708",\n      "Body": {\n        "amount": 10000,\n        "transaction_ref": "SQCHIZ410708",\n        "gateway_ref": "f7c810f4-b53e-4970-a3f6",\n        "transaction_status": "Success",\n        "email": "0803***0000",\n        "merchant_id": "********",\n        "currency": "NGN",\n        "transaction_type": "MerchantUssd",\n        "merchant_amount": 10000,\n        "created_at": "2022-11-30T16:21:52.8850061+00:00",\n        "customer_mobile": "0803***0000",\n        "meta": {},\n        "payment_information": {\n          "payment_type": "merchantussd",\n          "customer_ref": "123456"\n        },\n        "is_recurring": false\n      }\n}\n'})}),"\n",(0,o.jsx)("br",{}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:(0,o.jsx)(n.strong,{children:"Please Note that the encrypted body (x-squad-encrypted-body) is usually sent via the header"})})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}}}]);