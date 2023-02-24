let nock = require('nock');

module.exports.hash = "23b025b71787a30364a6ae60a747fd6e";

module.exports.testInfo = {"uniqueName":{"share":"share167746442945800466","dir":"dir167746442971508673"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442945800466')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:29 GMT',
  'ETag',
  '"0x8DB18693254FF57"',
  'x-ms-request-id',
  '8eb00be0-b01a-0009-2452-4a3c4a000000',
  'x-ms-client-request-id',
  '45af6b55-6b3e-4bd7-bf7b-81b504033d60',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:29 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442945800466/dir167746442971508673.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:30 GMT',
  'ETag',
  '"0x8DB1869327DF594"',
  'x-ms-request-id',
  '8eb00be5-b01a-0009-2552-4a3c4a000000',
  'x-ms-client-request-id',
  '678dba5d-5547-4f93-a478-da894007b9e8',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:30.0805524Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:30.0805524Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:30.0805524Z',
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
  'Mon, 27 Feb 2023 02:20:29 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746442945800466/dir167746442971508673.')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults><Entries /><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00be6-b01a-0009-2652-4a3c4a000000',
  'x-ms-client-request-id',
  '1e580f85-cf03-4d27-9220-51fed6fe8376',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:29 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746442945800466')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00be7-b01a-0009-2752-4a3c4a000000',
  'x-ms-client-request-id',
  'abdd3b3b-5404-4cd8-b854-891dd08c76f6',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:29 GMT'
]);
