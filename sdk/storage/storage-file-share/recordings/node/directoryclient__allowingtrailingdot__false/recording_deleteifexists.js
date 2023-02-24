let nock = require('nock');

module.exports.hash = "a3bd4f15a2998bbd7fea2fbe2c2d6d50";

module.exports.testInfo = {"uniqueName":{"share":"share167746443131801921","dir":"dir167746443157203996","dir1":"dir1167746443185208384"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443131801921')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:31 GMT',
  'ETag',
  '"0x8DB18693370C871"',
  'x-ms-request-id',
  '4d1aea21-201a-0006-4352-4a03a9000000',
  'x-ms-client-request-id',
  'ad80fb41-4190-4dff-a65e-d56287452621',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:30 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443131801921/dir167746443157203996.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:31 GMT',
  'ETag',
  '"0x8DB1869339A17F4"',
  'x-ms-request-id',
  '4d1aea23-201a-0006-4452-4a03a9000000',
  'x-ms-client-request-id',
  'b7672194-de79-41bd-9f9d-ca921260b221',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:31.9426548Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:31.9426548Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:31.9426548Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:30 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443131801921/dir1167746443185208384')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:32 GMT',
  'ETag',
  '"0x8DB186933C260D9"',
  'x-ms-request-id',
  '4d1aea25-201a-0006-4552-4a03a9000000',
  'x-ms-client-request-id',
  '9359e1e7-7095-4030-8b8b-7de7a6e794d2',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:32.2066649Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:32.2066649Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:32.2066649Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:32 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746443131801921/dir1167746443185208384...')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea27-201a-0006-4652-4a03a9000000',
  'x-ms-client-request-id',
  'fd246ecd-2d7d-4276-9253-f0ccfee35a28',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:32 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746443131801921/dir1167746443185208384')
  .query(true)
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceNotFound</Code><Message>The specified resource does not exist.\nRequestId:4d1aea28-201a-0006-4752-4a03a9000000\nTime:2023-02-27T02:20:32.7300028Z</Message></Error>", [
  'Content-Length',
  '223',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1aea28-201a-0006-4752-4a03a9000000',
  'x-ms-client-request-id',
  '3d7a4a74-a91b-428c-a88f-90308365a18f',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Date',
  'Mon, 27 Feb 2023 02:20:32 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746443131801921')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea29-201a-0006-4852-4a03a9000000',
  'x-ms-client-request-id',
  'b140cefb-b42f-4aee-8d18-0684dfc407e5',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:32 GMT'
]);
