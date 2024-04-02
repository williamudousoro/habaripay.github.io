"use strict";(self.webpackChunkhabari_docs=self.webpackChunkhabari_docs||[]).push([[256],{276:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>y,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var a=t(5893),r=t(1151),s=t(3615),i=t(6775),o=t(2477),c=t(5110);const l={sidebar_position:2},d="Initiate Payment",u={id:"Payments/Initiate-payment",title:"Initiate Payment",description:"This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal.",source:"@site/docs/Payments/Initiate-payment.mdx",sourceDirName:"Payments",slug:"/Payments/Initiate-payment",permalink:"/Payments/Initiate-payment",draft:!1,unlisted:!1,editUrl:"https://github.com/HabariPay/habaripay.github.io/tree/main/docs/Payments/Initiate-payment.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Payments",permalink:"/Payments/overview"},next:{title:"Squad Payment Modal",permalink:"/Payments/squad-payment-modal"}},h={},m=[{value:"This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal.",id:"this-api-allows-you-to-initiate-transaction-by-making-calls-from-your-server-which-returns-a-url-that-when-visited-will-call-up-our-payment-modal",level:5},{value:"Sample Request",id:"sample-request",level:3},{value:"Recurring Payment (Charge Authorization on Card)",id:"recurring-payment-charge-authorization-on-card",level:3},{value:"Card Tokenization",id:"card-tokenization",level:3},{value:"Sample Request for Card Tokenization",id:"sample-request-for-card-tokenization",level:3},{value:"Charge Card",id:"charge-card",level:3},{value:"Sample Request",id:"sample-request-1",level:3},{value:"Query All Transactions",id:"query-all-transactions",level:3},{value:"Go Live",id:"go-live",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",h5:"h5",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"initiate-payment",children:"Initiate Payment"}),"\n",(0,a.jsx)(n.h5,{id:"this-api-allows-you-to-initiate-transaction-by-making-calls-from-your-server-which-returns-a-url-that-when-visited-will-call-up-our-payment-modal",children:"This API allows you to initiate transaction by making calls from your server which returns a URL that when visited will call up our payment modal."}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Authorization"})," Any request made without the authorization key (secret key) will fail with a ** 401 ** (Unauthorized) response code."]})}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"If using other services such as dynamic virtual accounts, do not use the same transaction reference"})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The authorization key is sent via the request header as Bearer Token Authorization"})})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example"}),":\nAuthorization: Bearer sandbox_sk_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f"]}),"\n",(0,a.jsx)(c.Z,{}),"\n",(0,a.jsx)(s.Z,{items:o.rQ,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/transaction/initiate",method:"POST",summary:"This endpoint returns a checkout URL that when visited calls up the modal with the various payment channel."}),"\n",(0,a.jsx)(i.C,{items:o.K_}),"\n",(0,a.jsx)(n.h3,{id:"sample-request",children:"Sample Request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "amount":43000,\n    "email":"henimastic@gmail.com",\n    "currency":"NGN",\n    "initiate_type": "inline",\n    "transaction_ref":"4678388588350909090AH",\n    "callback_url":"http://squadco.com"\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"recurring-payment-charge-authorization-on-card",children:"Recurring Payment (Charge Authorization on Card)"}),"\n",(0,a.jsx)(n.p,{children:"This allows you charge a card without collecting the card information each time\nAuthorization Any request made without the authorization key (secret key) will fail with a 401 (Unauthorized) response code."}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsx)(n.p,{children:"Authorization Any request made without the authorization key (secret key) will fail with a 401 (Unauthorized) response code."})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"The authorization key is sent via the request header as Bearer Token Authorization"})}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"For recurring Payments test on Sandbox, ensure to use the test card: 5200000000000007"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example:"}),"\nAuthorization: Bearer sandbox_sk_94f2b798466408ef4d19e848ee1a4d1a3e93f104046f"]}),"\n",(0,a.jsx)(n.h3,{id:"card-tokenization",children:"Card Tokenization"}),"\n",(0,a.jsx)(n.p,{children:"To tokenize a card, just add a flag to the initiate payload when calling the initiate endpoint and the card will automatically be tokenized. The unique token code will automatically be added to the webhook notification that will be received after payment."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'"is_recurring":true\n'})}),"\n",(0,a.jsx)(n.h3,{id:"sample-request-for-card-tokenization",children:"Sample Request for Card Tokenization"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "amount":43000,\n    "email":"henimastic@gmail.com",\n    "currency":"NGN",\n    "initiate_type": "inline",\n    "transaction_ref":"bchs4678388588350909090AH",\n    "callback_url":"http://squadco.com",\n    "is_recurring":true\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"charge-card",children:"Charge Card"}),"\n",(0,a.jsx)(n.p,{children:"This allows you charge a card using the token generated during the initial transaction which was sent via webhook"}),"\n",(0,a.jsx)(s.Z,{items:o.D5,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/transaction/charge_card",method:"POST",summary:"This endpoint returns a checkout URL that when visited calls up the modal with the various payment channel."}),"\n",(0,a.jsx)(i.C,{items:o.yJ}),"\n",(0,a.jsx)(n.h3,{id:"sample-request-1",children:"Sample Request"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'{\n    "amount":10000,\n    "token_id":"tJlYMKcwPd",\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"query-all-transactions",children:"Query All Transactions"}),"\n",(0,a.jsx)(n.p,{children:"This endpoint allows you to query all transactions and filter using multiple parameters like transaction ref, start and end dates, amount, etc"}),"\n",(0,a.jsx)(n.p,{children:"N.B: The date parameters are compulsory and should be a maximum of one month gap"}),"\n",(0,a.jsx)(s.Z,{items:o.x6,parameters:!0,endpoint:"https://sandbox-api-d.squadco.com/transaction",method:"GET",summary:""}),"\n",(0,a.jsx)(i.C,{items:o.uP}),"\n",(0,a.jsx)(n.h3,{id:"go-live",children:"Go Live"}),"\n",(0,a.jsx)(n.p,{children:"To go live, simply:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Change the base URL of your endpoints from sandbox-api-d.squadco.com to\napi-d.squadco.com"}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://dashboard.squadco.com/login",children:"Sign up on our Live Environment"})}),"\n",(0,a.jsx)(n.li,{children:"Complete your KYC"}),"\n",(0,a.jsx)(n.li,{children:"Use the secret key provided on the dashboard to replace the test keys gotten from the sandbox environment to authenticate your live transactions."}),"\n"]})]})}function y(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},5110:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(7294),r=t(9286),s=t(5893);const i=e=>{let{selectedLanguage:n,setSelectedLanguage:t}=e;const[r,i]=(0,a.useState)(!1),o=(0,a.useRef)(null),c=e=>{o.current&&!o.current.contains(e.target)&&i(!1)};return(0,a.useEffect)((()=>(document.addEventListener("click",c),()=>{document.removeEventListener("click",c)})),[]),(0,s.jsxs)("div",{className:"group",ref:o,children:[(0,s.jsxs)("div",{onClick:()=>i(!r),className:"flex cursor-pointer",children:[(0,s.jsx)("p",{className:"text-[#3F826D] text-[10px] md:text-xs dark:text-[#4CB393]",children:n}),(0,s.jsx)("span",{children:(0,s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512",className:"fill-[#008488] dark:fill-[#4CB393] ml-1 mt-[2px]",children:(0,s.jsx)("path",{d:"M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"})})})]}),r&&(0,s.jsx)("div",{className:"absolute z-20 m-0 top-11 right-0 p-1 bg-transparent border border-solid border-[#EBEBF2] dark:border-[#303337] rounded w-24",children:["cURL","Javascript","Dart"].map((e=>(0,s.jsx)("p",{onClick:()=>(e=>{t(e),i(!1)})(e),className:"px-2 text-xs m-0 py-2 cursor-pointer hover:bg-[#E2EEF5] dark:hover:bg-[#101417] text-[#424242] dark:text-[#E2E8EF] rounded",children:e},e)))})]})};var o=t(7536),c=(t(6310),t(8388));const l=()=>{const[e,n]=a.useState(!1),[t,l]=(0,a.useState)(""),[d,u]=(0,a.useState)(""),[h,m]=(0,a.useState)(""),[p,y]=(0,a.useState)("cURL"),[g,x]=(0,a.useState)(!1);let b=`\n  const axios = require('axios');\n  let data = JSON.stringify({\n    "amount": ${t?t+",":"_ ,"}\n    "email": ${d?d+",":"_ ,"}\n    "key": ${h?h+",":"_ ,"}\n    "currency": "NGN",\n    "initiate_type": "inline",\n    "CallBack_URL": "https://www.linkedin.com/",\n  });\n  \n  let config = {\n    method: 'post',\n    maxBodyLength: Infinity,\n    url: 'https://sandbox-api.squadco.com/payment/Initiate',\n    headers: { \n      'Authorization': '47M3DMZD', \n      'Content-Type': 'application/json'\n    },\n    data : data\n  };\n  \n  axios.request(config)\n  .then((response) => {\n    console.log(JSON.stringify(response.data));\n  })\n  .catch((error) => {\n    console.log(error);\n  });\n  \n`,_=`\n  var headers = {\n    'Authorization': '47M3DMZD',\n    'Content-Type': 'application/json'\n  };\n  var request = http.Request('POST', Uri.parse('https://sandbox-api.squadco.com/payment/Initiate'));\n  request.body = json.encode({\n    "amount": ${t?t+",":"_ ,"}\n    "email": ${d?d+",":"_ ,"}\n    "key":${h?h+",":"_ ,"}\n    "currency": "NGN",\n    "initiate_type": "inline",\n    "CallBack_URL": "https://www.linkedin.com/",\n  });\n  request.headers.addAll(headers);\n  \n  http.StreamedResponse response = await request.send();\n  \n  if (response.statusCode == 200) {\n    print(await response.stream.bytesToString());\n  }\n  else {\n    print(response.reasonPhrase);\n  }\n  \n`,f=`\n  curl --location 'https://sandbox-api.squadco.com/payment/Initiate' \n  --header 'Authorization: 47M3DMZD'\n  --header 'Content-Type: application/json'\n  --data-raw '{\n    "amount":${t?t+",":"_ ,"}\n    "email":${d?d+",":"_ ,"}\n    "key":${h?h+",":"_ ,"}\n      "currency":"NGN",\n      "initiate_type": "inline",\n      "CallBack_URL" : "https://www.linkedin.com/",\n  }\n\n`;const{register:k,handleSubmit:v,formState:{errors:w}}=(0,o.cI)();return(0,s.jsxs)("div",{className:"flex flex-col justify-center align-middle border-2 border-solid border-[#EBEBF2] dark:border-[#303337] rounded-lg md:px-5 px-2",children:[(0,s.jsxs)("div",{className:"relative h-10 flex justify-between pt-3.5 text-[11px] md:text-[13px] leading-[10px]  border-b-2 border-0 border-solid border-[#EBEBF2] dark:border-b-[#303337]",children:[(0,s.jsxs)("div",{className:"flex ",children:[(0,s.jsx)("p",{className:"text-[#3F826D] font-semibold dark:text-[#4CB393]",children:"POST"}),(0,s.jsx)("p",{className:"text-[rgba(45,72,117,0.70)] dark:text-[#a8b7cc] pl-2 md:pl-4",children:"sandbox-api.squadco.com/payment/Initiate"})]}),(0,s.jsx)(i,{selectedLanguage:p,setSelectedLanguage:y})]}),(0,s.jsxs)("div",{className:"pt-8",children:[(0,s.jsx)("h4",{className:"text-[#0B3142] leading-3 dark:text-[#E2E8EF]",children:"Enter Payment details"}),(0,s.jsx)("p",{className:"text-sm text-[#475569] leading-3 dark:text-[#94A3B8]",children:"Help us send transactions receipts to the customers"})]}),(0,s.jsxs)("div",{className:"py-6 md:grid md:grid-cols-2 md:gap-9 items-center",children:[(0,s.jsx)("div",{className:"",children:(0,s.jsxs)("form",{className:"text-base",onSubmit:v((e=>{!function(){console.log("fired here");const e={amount:100*Number(t),email:d,currency_code:"NGN",key:h,initiate_type:"inline"},a=new window.squad({onClose:()=>{console.log("Widget closed"),n(!1)},onLoad:()=>{console.log("Widget loaded successfully"),n(!1)},onSuccess:()=>{x(!0)},...e});a.setup(),a.open()}()})),children:[(0,s.jsxs)("div",{className:"flex flex-col pb-5",children:[(0,s.jsx)("label",{className:"pb-1 text-sm",htmlFor:"amount",children:"Charge Amount (\u20a6)"}),(0,s.jsx)("input",{id:"amount",type:"text",placeholder:"e.g 10000",...k("amount",{required:"Amount is required",onChange:e=>{l(e.target.value)}}),className:(0,c.m6)("rounded-[4px] px-3 py-3 border-[#BDBDBD] border-solid border placeholder:text-[#828282] dark:bg-transparent ",w?.amount&&"border-red-500")}),w.amount&&(0,s.jsx)("p",{className:"text-red-600 text-xs m-0 p-0 pt-1 transition-all",children:w.amount.message})]}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("label",{className:"pb-1 text-sm",htmlFor:"email",children:"Customer Email Address"}),(0,s.jsx)("input",{id:"email",type:"email",placeholder:"e.g example@email.com",...k("email",{required:"Email is required",onChange:e=>{u(e.target.value)}}),className:(0,c.m6)("rounded-[4px] px-3 py-3 border-[#BDBDBD] border-solid border placeholder:text-[#828282] dark:bg-transparent",w?.email&&"border-red-500")}),w.email&&(0,s.jsx)("p",{className:"text-red-600 text-xs m-0 p-0 pt-1 transition-all",children:w.email.message})]}),(0,s.jsxs)("div",{className:"flex flex-col pt-5",children:[(0,s.jsx)("label",{className:"pb-1 text-sm",htmlFor:"mkey",children:"Merchant key"}),(0,s.jsx)("input",{id:"mkey",type:"text",placeholder:"e.g sandbox_sk_ec8d24ec25...",...k("merchant_key",{required:"Merchant key is required",onChange:e=>{m(e.target.value)}}),className:(0,c.m6)("rounded-[4px] px-3 py-3 border-[#BDBDBD] border-solid border placeholder:text-[#828282] dark:bg-transparent",w?.merchant_key&&"border-red-500")}),w.merchant_key&&(0,s.jsx)("p",{className:"text-red-600 text-xs m-0 p-0 pt-1 transition-all",children:w.merchant_key.message})]}),(0,s.jsx)("button",{type:"submit",className:"bg-[#e51e56] w-full hover:bg-[#d43d68] border-none text-white mt-7 mb-2 py-3 rounded-[4px] font-semibold cursor-pointer",children:"Send Request"})]})}),(0,s.jsx)("div",{className:"",children:(0,s.jsx)(r.Z,{className:"language-jsx h-72 overflow-scroll",children:"cURL"===p?f:"Javascript"===p?b:_})}),(0,s.jsx)("div",{})]})]})}},2477:(e,n,t)=>{t.d(n,{D5:()=>i,K_:()=>s,Tm:()=>m,mE:()=>h,nN:()=>u,nQ:()=>d,rQ:()=>r,uP:()=>l,x6:()=>c,yJ:()=>o});var a=t(8830);const r=[{title:"Header",children:[{key:"Authorization",dataType:"String",description:"API keys (Secret Key) that authorize your transactions and gotten from your squad dashboard",required:!0}]},{title:"Body",children:[{key:"email",dataType:"String",description:"Customer's email address.",required:!0},{key:"amount",dataType:"String",description:"The amount you are debiting customer (expressed in the lowest currency value - kobo& cent). 10000 = 100NGN for Naira Transactions",required:!0},{key:"initiate_type",dataType:"String",description:"This states the method by which the transaction is initiated. At the moment, this can only take the value 'inline'.",required:!0},{key:"currency",dataType:"String",description:"The currency you want the amount to be charged in. Allowed value is either NGN or USD.",required:!0},{key:"transaction_ref",dataType:"String",description:"This states the method by which the transaction is initiated. At the moment, this can only take the value 'inline'.",required:!1},{key:"customer_name",dataType:"String",description:"Name of Customer carrying out the transaction",required:!1},{key:"callback_url",dataType:"String",description:"Sample: http://squadco.com",required:!1},{key:"payment_channels",dataType:"Array",description:"An array of payment channels to control what channels you want to make available for the user to make a payment with. Available channels include; ['card', 'bank' , 'ussd','transfer']",required:!1},{key:"metadata",dataType:"Object",description:"Object that contains any additional information that you want to record with the transaction. The custom fields in the object will be returned via webhook and the payment verification endpoint.",required:!1},{key:"pass_charge",dataType:"Boolean",description:"It takes two possible values: True or False. It is set to False by default. When set to True, the charges on the transaction is computed and passed on to the customer(payer). But when set to False, the charge is passed to the merchant and will be deducted from the amount to be settled to the merchant.",required:!1},{key:"sub_merchant_id",dataType:"String",description:"This is the ID of a meerchant that was created by an aggregator which allows the aggregator initiate a transaction on behalf of the submerchant. This parameter is an optional field that is passed only by a registered aggregator",required:!1}]}],s=[{status:"200:OK",responseMsg:"Successful",pill:a.O?.greenColor,code:'{\n    "status": 200,\n    "message": "success",\n    "data": {\n        "auth_url": null,\n        "access_token": null,\n        "merchant_info": {\n            "merchant_response": null,\n            "merchant_name": null,\n            "merchant_logo": null,\n            "merchant_id": "SBN1EBZEQ8"\n        },\n        "currency": "NGN",\n        "recurring": {\n            "frequency": null,\n            "duration": null,\n            "type": 0,\n            "plan_code": null,\n            "customer_name": null\n        },\n        "is_recurring": false,\n        "plan_code": null,\n        "callback_url": "http://squadco.com",\n        "transaction_ref": "4678388588350909090AH",\n        "transaction_memo": null,\n        "transaction_amount": 43000,\n        "authorized_channels": [\n            "card",\n            "ussd",\n            "bank"\n        ],\n        "checkout_url": "https://sandbox-pay.squadco.com/4678388588350909090AH"\n    }\n}\n\n'},{status:"401:Unauthorized",responseMsg:"Invalid/No Authorization Key",pill:a.O?.orangeColor,code:'{\n            "status": 401,\n            "message": "Initiate transaction Unauthorized",\n            "data": null\n}'},{status:"400:Bad Request",responseMsg:"Bad Request",pill:a.O?.orangeColor,code:'{\n        "type": "https://tools.ietf.org/html/rfc7231#section-6.5.1",\n        "title": "One or more validation errors occurred.",\n        "status": 400,\n        "traceId": "|8aec540f-493270cdd9661378.",\n        "errors": {\n            "email": [\n                "The email field is required."\n            ]\n        }\n}\n'}],i=[{title:"Body",children:[{key:"amount",dataType:"Integer",description:"Amount to charge from card in the lowest currency value. kobo for NGN transactions or cent for USD transactions",required:!0},{key:"token_id",dataType:"String",description:"A unique tokenization code for each card transaction and it is returned via the webhook for first charge on the card.",required:!0},{key:"transaction_ref",dataType:"String",description:"Unique case-sensitive transaction reference. If you do not pass this parameter, Squad will generate a unique reference for you.",required:!1}]}],o=[{status:"200:OK",responseMsg:"Successful",pill:a.O?.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "transaction_amount": 0,\n                "transaction_ref": null,\n                "email": null,\n                "transaction_status": null,\n                "transaction_currency_id": null,\n                "created_at": "0001-01-01T00:00:00",\n                "transaction_type": null,\n                "merchant_name": null,\n                "merchant_business_name": null,\n                "gateway_transaction_ref": null,\n                "recurring": null,\n                "merchant_email": null,\n                "plan_code": null\n            }\n}'},{status:"400:Bad Request",responseMsg:"Bad Request",pill:a.O?.orangeColor,code:'{\n            "status": 400,\n            "success": false,\n            "message": "amount cannot be < 0",\n            "data": {}\n}'}],c=[{title:"Query",children:[{key:"currency",dataType:"string",description:"transacting currency",required:!1},{key:"start_date",dataType:"date",description:"start date of transaction",required:!0},{key:"end_date",dataType:"date",description:"end date of transaction",required:!0},{key:"page",dataType:"integer",description:"number of transactions to be displayed in a page",required:!1},{key:"perpage",dataType:"integer",description:"number of transactions to be displayed in a page",required:!1},{key:"reference",dataType:"string",description:"transaction ref of a transaction",required:!1}]}],l=[{status:"200:OK",responseMsg:"Success",pill:a.O?.greenColor,code:'"status": 200,\n    "success": true,\n    "message": "Success",\n    "data": [\n        {\n            "id": 589,\n            "transaction_amount": 500000,\n            "transaction_ref": "SQDEMO6384411820295800001",\n            "email": "demo@merchant.com",\n            "merchant_id": "AABBCCDDEEFFGGHHJJKK",\n            "merchant_amount": 495000,\n            "merchant_name": "Demo Habari Shop",\n            "merchant_business_name": "Ogbologba and Sons Limited",\n            "merchant_email": "demo@merchant.com",\n            "customer_email": "demo@merchant.com",\n            "customer_name": "Test QA",\n            "meta_data": "{"ip_address":"154.113.177.121","Customer_name":"Test QA","user_agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36","referring_site":"https://pay.squadinc.co/","payment_link_id":"GH9Y19","payment_link_type":"otp","source":"Desktop","device_id":null,"order_id":null,"auth_code":null,"fingerprintData":null,"callback_url":null,"initiate_type":null,"browser_screen_height":695,"browser_screen_width":1536,"referrer_url":"https://pay.squadinc.co/","extra":"{}"}",\n            "meta": {\n                "ip_address": [],\n                "Customer_name": [],\n                "user_agent": [],\n                "referring_site": [],\n                "payment_link_id": [],\n                "payment_link_type": [],\n                "source": [],\n                "device_id": [],\n                "order_id": [],\n                "auth_code": [],\n                "fingerprintData": [],\n                "callback_url": [],\n                "initiate_type": [],\n                "browser_screen_height": [],\n                "browser_screen_width": [],\n                "referrer_url": [],\n                "extra": []\n            },\n            "transaction_status": "success",\n            "transaction_charges": 0,\n            "transaction_currency_id": "NGN",\n            "transaction_gateway_id": "",\n            "transaction_type": "Card",\n            "flat_charge": 0,\n            "is_suspicious": false,\n            "is_refund": false,\n            "created_at": "2024-02-21T13:16:43.012+00:00"\n}'}],d=[{title:"Query",children:[{key:"transaction_ref",dataType:"String",description:"Unique transaction reference that identifies each transaction",required:!0}]}],u=[{status:"200:OK",responseMsg:"Valid Transaction Reference",pill:a.O?.greenColor,code:'{\n            "status": 200,\n            "success": true,\n            "message": "Success",\n            "data": {\n                "transaction_amount": 5000,\n                "transaction_ref": "SQCHIZ3634573076082",\n                "email": "ayo@gmail.com",\n                "transaction_status": "Success",\n                "transaction_currency_id": "NGN",\n                "created_at": "0001-01-01T00:00:00",\n                "transaction_type": "VirtualAccount",\n                "merchant_name": "CHIZOBA ANTHONY",\n                "merchant_business_name": null,\n                "gateway_transaction_ref": "SQCHIZ3634573076082",\n                "recurring": null,\n                "merchant_email": "okoyeanthonychizoba@gmail.com",\n                "plan_code": null\n            }\n}\n'},{status:"400:Bad Request",responseMsg:"Invalid Transaction Reference",pill:a.O?.orangeColor,code:'{\n            "status": 400,\n            "success": false,\n            "message": "Invalid transaction reference",\n            "data": {}\n}'},{status:"401:Unauthorized",responseMsg:"Unauthorized Request",pill:a.O?.orangeColor,code:'{\n            "success": false,\n            "message": "",\n            "data": {}\n}'},{status:"403:Forbidden",responseMsg:"Invalid API Key",pill:a.O?.orangeColor,code:'{\n            "success": false,\n            "message": "API key is invalid. Key must start with sandbox_sk_",\n            "data": {}\n}'}],h=[{title:"Body",children:[{key:"display_name",dataType:"String",description:"Name of sub-merchant",required:!0},{key:"account_name",dataType:"String",description:"Sub-merchant's settlement bank account name",required:!0},{key:"account_number",dataType:"String",description:"Sub-merchant's settlement account number",required:!0},{key:"bank_code",dataType:"String",description:"Sub-merchant's settlement bank code. e.g 058",required:!0},{key:"bank",dataType:"String",description:"Name of sub-merchant's settlement bank e.g GTBank",required:!0}]}],m=[{status:"200:OK",responseMsg:"Success",pill:a.O?.greenColor,code:'{\n      "status": 200,\n      "success": true,\n      "message": "Success",\n      "data": {\n          "account_id": "AGGERYG8WF34"\n      }\n}'},{status:"400:Bad Request",responseMsg:"Error in request payload",pill:a.O?.orangeColor,code:'{\n      "status": 400,\n      "success": false,\n      "message": ""account_number" is required",\n      "data": {}\n}'},{status:"401:Unauthorized",responseMsg:"No Authorization",pill:a.O?.orangeColor,code:'{\n      "success": false,\n      "message": "",\n      "data": {}\n}'},{status:"403:Forbidden",responseMsg:"Wrong/Invalid API Keys",pill:a.O?.orangeColor,code:'{\n      "success": false,\n      "message": "Merchant authentication failed",\n      "data": {}\n}'}]},8830:(e,n,t)=>{t.d(n,{O:()=>a});const a={greenColor:"bg-[#217837]",orangeColor:"bg-[#A94A09]"}}}]);