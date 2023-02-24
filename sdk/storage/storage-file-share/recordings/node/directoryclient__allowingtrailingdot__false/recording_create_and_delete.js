let nock = require('nock');

module.exports.hash = "bf0060d5fa43c5679fe545fdc706ddc4";

module.exports.testInfo = {"uniqueName":{"share":"share167746441968409330","dir":"dir167746441994605340","dir1":"dir1167746442021508471"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441968409330')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:20 GMT',
  'ETag',
  '"0x8DB18692C81C976"',
  'x-ms-request-id',
  '8eb00bb3-b01a-0009-7e52-4a3c4a000000',
  'x-ms-client-request-id',
  '99db0940-69db-4571-a569-129068b56cf4',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:20 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441968409330/dir167746441994605340.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:20 GMT',
  'ETag',
  '"0x8DB18692CABDBAC"',
  'x-ms-request-id',
  '8eb00bb5-b01a-0009-7f52-4a3c4a000000',
  'x-ms-client-request-id',
  '2a6db748-1337-48d7-899c-4c467034d600',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:20.3150252Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:20.3150252Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:20.3150252Z',
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
  'Mon, 27 Feb 2023 02:20:20 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441968409330/dir1167746442021508471...')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:20 GMT',
  'ETag',
  '"0x8DB18692CD6E3E6"',
  'x-ms-request-id',
  '8eb00bb6-b01a-0009-8052-4a3c4a000000',
  'x-ms-client-request-id',
  '9461c2d9-cef4-4851-8b8a-c8cccf3b3935',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:20.5970406Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:20.5970406Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:20.5970406Z',
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
  'Mon, 27 Feb 2023 02:20:20 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746441968409330/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167746441968409330\" DirectoryPath=\"\"><DirectoryId>0</DirectoryId><Entries><Directory><Name>dir1167746442021508471</Name><FileId>11529285414812647424</FileId><Properties /></Directory><Directory><Name>dir167746441994605340</Name><FileId>13835128424026341376</FileId><Properties /></Directory></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00bb7-b01a-0009-0152-4a3c4a000000',
  'x-ms-client-request-id',
  '86fccc7a-e9f7-4fbe-bda0-f656f4992432',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:20 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441968409330/dir1167746442021508471...')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bb8-b01a-0009-0252-4a3c4a000000',
  'x-ms-client-request-id',
  'c8d01b22-4819-4f9c-9c6a-b2148ca2b5e0',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:21 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746441968409330/dir1167746442021508471...')
  .query(true)
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceNotFound</Code><Message>The specified resource does not exist.\nRequestId:8eb00bb9-b01a-0009-0352-4a3c4a000000\nTime:2023-02-27T02:20:21.4004168Z</Message></Error>", [
  'Content-Length',
  '223',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00bb9-b01a-0009-0352-4a3c4a000000',
  'x-ms-client-request-id',
  'f094dd91-358d-4fb4-ac26-0b9079028f76',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:21 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441968409330')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bba-b01a-0009-0452-4a3c4a000000',
  'x-ms-client-request-id',
  'a8bb0672-3ed0-4484-b4a5-5f7c3e502a7c',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:21 GMT'
]);
