let nock = require('nock');

module.exports.hash = "43b58e99c6ce1c8d4df4f3bcbd767346";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://endpoint', {"encodedQueryParams":false})
  .get('/phoneNumbers')
  .query(false)
  .reply(200, {"phoneNumbers":[{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"application","purchaseDate":"2021-06-24T15:18:14.7689633+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T06:36:43.2477114+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T06:36:13.5514009+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T05:09:18.7391177+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T05:11:43.8093725+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T05:09:44.856727+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T05:10:43.0470316+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T05:11:13.2871013+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T06:35:43.3598754+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T06:35:14.2925013+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T06:35:17.7642032+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T06:37:57.7589612+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T06:38:01.2490062+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"person","purchaseDate":"2021-06-24T06:38:10.7033129+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"geographic","capabilities":{"calling":"inbound+outbound","sms":"none"},"assignmentType":"application","purchaseDate":"2021-06-24T15:41:42.6103267+00:00","cost":{"amount":1,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:30:51.9182995+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:30:17.6614122+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:31:47.0550566+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:32:08.7055072+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:32:20.4489554+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:31:24.7610118+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:31:27.7725472+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:28:06.2941982+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:27:58.4564095+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:35:55.6362141+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:35:38.2751041+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:37:12.122407+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:40:52.6849802+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:37:21.3246132+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:37:52.844006+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:37:26.0949019+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:37:16.7736485+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:39:07.5114194+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:38:24.9591048+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:37:31.4083206+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:39:24.2533723+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:39:16.2862265+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:39:37.7662022+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:37:46.6018872+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:39:50.4679082+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:39:44.6881974+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:37:55.8644165+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:39:55.9240487+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:40:20.5570756+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:41:22.1720088+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:38:41.0997634+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:38:44.9865457+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:11:13.6760492+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:13:14.7544127+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:38:51.5548845+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:22:13.6608168+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:23:13.802374+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:40:56.1826813+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:23:43.4526026+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:24:12.4592203+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:41:17.7235497+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:32:43.9547602+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:41:10.859962+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-23T23:41:30.851053+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"none","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2022-01-11T22:26:05.2198645+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"none","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2022-01-11T17:06:02.0097082+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:08:43.2976318+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound","sms":"outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:09:13.3731647+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:33:13.7739402+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:25:13.6206509+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:25:44.3664664+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:29:43.2087273+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:37:14.4369365+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:27:13.4604535+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:27:47.6058406+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:26:43.3088723+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:42:44.4416133+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:28:13.2155644+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:41:58.7312966+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:39:14.5759855+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:40:28.2331315+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:28:43.2865444+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:43:44.3267753+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:43:14.5582972+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:30:42.3622994+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:35:58.515204+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:30:13.3981412+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:36:12.1300788+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:36:43.3727213+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:31:43.1246125+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:45:58.3886965+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:44:13.795794+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:33:42.3770211+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:34:13.0593291+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:44:43.2825566+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:45:43.3853897+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:45:13.8368509+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:48:14.4930555+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T02:47:29.3763702+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:37:12.9376761+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T00:37:43.0423694+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T03:18:13.4190469+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T01:01:13.3943797+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T01:02:13.0024309+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}},{"id":"14155550100","phoneNumber":"+14155550100","countryCode":"US","phoneNumberType":"tollFree","capabilities":{"calling":"inbound+outbound","sms":"inbound+outbound"},"assignmentType":"application","purchaseDate":"2021-06-24T03:18:42.3038608+00:00","cost":{"amount":2,"currencyCode":"USD","billingFrequency":"monthly"}}],"nextLink":"/phoneNumbers?skip=100&api-version=2022-12-01&top=100"}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'MS-CV',
  'CPXWQ5KMv0WQzjYaaikcZA.0',
  'Strict-Transport-Security',
  'max-age=2592000',
  'api-supported-versions',
  '2021-03-07, 2022-01-11-preview2, 2022-06-01-preview, 2022-12-01',
  'X-Processing-Time',
  '2412ms',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-Azure-Ref',
  '0pwqSYwAAAADFEXIw2yxHS4OIMj/yaQerTUVYMzFFREdFMDMxNQA5ZmM3YjUxOS1hOGNjLTRmODktOTM1ZS1jOTE0OGFlMDllODE=',
  'Date',
  'Thu, 08 Dec 2022 16:02:49 GMT'
]);

nock('https://endpoint', {"encodedQueryParams":false})
  .get('/phoneNumbers')
  .query(false)
  .reply(200, {"phoneNumbers":[]}, [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/json; charset=utf-8',
  'MS-CV',
  'w8XH8o0yv0iUQ1474uWgpw.0',
  'Strict-Transport-Security',
  'max-age=2592000',
  'api-supported-versions',
  '2021-03-07, 2022-01-11-preview2, 2022-06-01-preview, 2022-12-01',
  'X-Processing-Time',
  '2448ms',
  'X-Cache',
  'CONFIG_NOCACHE',
  'X-Azure-Ref',
  '0qQqSYwAAAAChol3wc5EfSIIlVbEGKRQyTUVYMzFFREdFMDMxNQA5ZmM3YjUxOS1hOGNjLTRmODktOTM1ZS1jOTE0OGFlMDllODE=',
  'Date',
  'Thu, 08 Dec 2022 16:02:51 GMT'
]);
