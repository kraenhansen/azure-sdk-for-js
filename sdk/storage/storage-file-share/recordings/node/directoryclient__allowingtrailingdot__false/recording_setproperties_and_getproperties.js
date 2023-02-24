let nock = require('nock');

module.exports.hash = "20d7a1087e2eb0188e379dfc27a7344f";

module.exports.testInfo = {"uniqueName":{"share":"share167746442393802227","dir":"dir167746442420203755"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442393802227')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:24 GMT',
  'ETag',
  '"0x8DB18692F0ACB9B"',
  'x-ms-request-id',
  '8eb00bc7-b01a-0009-0f52-4a3c4a000000',
  'x-ms-client-request-id',
  'cb0f4140-c079-419f-9b7b-07ba741de121',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:24 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442393802227/dir167746442420203755.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:24 GMT',
  'ETag',
  '"0x8DB18692F34643C"',
  'x-ms-request-id',
  '8eb00bc9-b01a-0009-1052-4a3c4a000000',
  'x-ms-client-request-id',
  '5b64fb29-0232-461f-bd44-de40762e97fc',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:24.5652540Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:24.5652540Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:24.5652540Z',
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
  'Mon, 27 Feb 2023 02:20:24 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442393802227/dir167746442420203755.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:24 GMT',
  'ETag',
  '"0x8DB18692F5AFFA2"',
  'x-ms-request-id',
  '8eb00bca-b01a-0009-1152-4a3c4a000000',
  'x-ms-client-request-id',
  '3a4358dc-71b3-4700-a7bc-b3dd7df41509',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:24.8182690Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:24.5652540Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:24.5652540Z',
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
  'Mon, 27 Feb 2023 02:20:24 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746442393802227/dir167746442420203755.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:24 GMT',
  'ETag',
  '"0x8DB18692F5AFFA2"',
  'x-ms-request-id',
  '8eb00bcb-b01a-0009-1252-4a3c4a000000',
  'x-ms-client-request-id',
  '004b95d2-db89-40a6-a550-40bd8398b795',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2023-02-27T02:20:24.8182690Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:24.5652540Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:24.5652540Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Last-Modified,ETag,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:24 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746442393802227')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bcc-b01a-0009-1352-4a3c4a000000',
  'x-ms-client-request-id',
  '8a7f9598-1358-421c-b8bf-ab14059e0f6f',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:25 GMT'
]);
