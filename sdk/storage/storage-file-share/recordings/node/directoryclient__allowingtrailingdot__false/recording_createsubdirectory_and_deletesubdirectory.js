let nock = require('nock');

module.exports.hash = "711d351c2addca77ce3bba418192aaa7";

module.exports.testInfo = {"uniqueName":{"share":"share167746442524802851","dir":"dir167746442553504551","subdir":"subdir167746442579604741"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442524802851')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:25 GMT',
  'ETag',
  '"0x8DB18692FD301D2"',
  'x-ms-request-id',
  '8eb00bcd-b01a-0009-1452-4a3c4a000000',
  'x-ms-client-request-id',
  '086fa290-c899-4dc6-a848-bcccce1fa621',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:25 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442524802851/dir167746442553504551.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:25 GMT',
  'ETag',
  '"0x8DB186930001B7C"',
  'x-ms-request-id',
  '8eb00bcf-b01a-0009-1552-4a3c4a000000',
  'x-ms-client-request-id',
  '0210c21c-bfe5-4f9b-9f1b-9eb5aee71b12',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:25.9003260Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:25.9003260Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:25.9003260Z',
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
  'Mon, 27 Feb 2023 02:20:25 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442524802851/dir167746442553504551./subdir167746442579604741.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:26 GMT',
  'ETag',
  '"0x8DB1869302AAE94"',
  'x-ms-request-id',
  '8eb00bd0-b01a-0009-1652-4a3c4a000000',
  'x-ms-client-request-id',
  '1e6ef871-9c0c-47b8-915c-a022bb3fb26b',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:26.1793428Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:26.1793428Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:26.1793428Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:25 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746442524802851/dir167746442553504551.')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167746442524802851\" DirectoryPath=\"dir167746442553504551\"><DirectoryId>13835128424026341376</DirectoryId><Entries><Directory><Name>subdir167746442579604741</Name><FileId>11529285414812647424</FileId><Properties /></Directory></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00bd1-b01a-0009-1752-4a3c4a000000',
  'x-ms-client-request-id',
  '414977ad-d41b-4d7a-9570-287903d5e76d',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:26 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746442524802851/dir167746442553504551./subdir167746442579604741.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:26 GMT',
  'ETag',
  '"0x8DB1869302AAE94"',
  'x-ms-request-id',
  '8eb00bd2-b01a-0009-1852-4a3c4a000000',
  'x-ms-client-request-id',
  'e1c8ff04-3b09-47b0-9b4a-f3ad146ed1c0',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2023-02-27T02:20:26.1793428Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:26.1793428Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:26.1793428Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Last-Modified,ETag,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:26 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746442524802851/dir167746442553504551./subdir167746442579604741.')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bd3-b01a-0009-1952-4a3c4a000000',
  'x-ms-client-request-id',
  '532698fe-43a4-46ce-be88-d731a18f4678',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:26 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746442524802851/dir167746442553504551./subdir167746442579604741.')
  .query(true)
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceNotFound</Code><Message>The specified resource does not exist.\nRequestId:8eb00bd4-b01a-0009-1a52-4a3c4a000000\nTime:2023-02-27T02:20:27.1808794Z</Message></Error>", [
  'Content-Length',
  '223',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00bd4-b01a-0009-1a52-4a3c4a000000',
  'x-ms-client-request-id',
  'bdc557fb-3eb4-4373-b34c-49bfe0ce063e',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:26 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746442524802851')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bd5-b01a-0009-1b52-4a3c4a000000',
  'x-ms-client-request-id',
  '14d1cc5b-e887-4503-a1a8-eb871cbf1a84',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:26 GMT'
]);
