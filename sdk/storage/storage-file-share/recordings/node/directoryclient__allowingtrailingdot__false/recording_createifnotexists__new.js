let nock = require('nock');

module.exports.hash = "66e9bdae19be7198b4e7333c73860a97";

module.exports.testInfo = {"uniqueName":{"share":"share167746442264406687","dir":"dir167746442290107818","dir1":"dir1167746442316100197"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442264406687')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:22 GMT',
  'ETag',
  '"0x8DB18692E455512"',
  'x-ms-request-id',
  '8eb00bc1-b01a-0009-0a52-4a3c4a000000',
  'x-ms-client-request-id',
  '8c3caf17-4dff-4b0b-a55a-513aa920eff4',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:22 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442264406687/dir167746442290107818.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:23 GMT',
  'ETag',
  '"0x8DB18692E6E0488"',
  'x-ms-request-id',
  '8eb00bc3-b01a-0009-0b52-4a3c4a000000',
  'x-ms-client-request-id',
  '15ee5661-5cec-4af6-b406-93c45ec70ca8',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:23.2651912Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:23.2651912Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:23.2651912Z',
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
  'Mon, 27 Feb 2023 02:20:23 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442264406687/dir1167746442316100197...')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:23 GMT',
  'ETag',
  '"0x8DB18692E949F90"',
  'x-ms-request-id',
  '8eb00bc4-b01a-0009-0c52-4a3c4a000000',
  'x-ms-client-request-id',
  'c02e2cfa-2eca-4117-ba6b-6adad8988b12',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:23.5181968Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:23.5181968Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:23.5181968Z',
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
  'Mon, 27 Feb 2023 02:20:23 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746442264406687/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167746442264406687\" DirectoryPath=\"\"><DirectoryId>0</DirectoryId><Entries><Directory><Name>dir1167746442316100197</Name><FileId>11529285414812647424</FileId><Properties /></Directory><Directory><Name>dir167746442290107818</Name><FileId>13835128424026341376</FileId><Properties /></Directory></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00bc5-b01a-0009-0d52-4a3c4a000000',
  'x-ms-client-request-id',
  '40b0a292-51a8-46bc-a192-5b0a57e2de3c',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:23 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746442264406687')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bc6-b01a-0009-0e52-4a3c4a000000',
  'x-ms-client-request-id',
  'b1b4d48b-5f4b-4d23-9971-f59c413923f2',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:23 GMT'
]);
