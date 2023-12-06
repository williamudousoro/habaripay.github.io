export const javascriptCode = `js




`;

export const dartCode = `dart




`;

export const curlCode = `Curl https://api.squad.co/payment/Initiate
-H "Authorization: Bearer sk_test_DEFAULT"
-H "Content-Type: application/json" 
${`-d{"amount":${amount ? amount + "," : "_ ,"} "email": "${
  email ? email + " " : "_ "
}"}`}
-X POST 




`;
