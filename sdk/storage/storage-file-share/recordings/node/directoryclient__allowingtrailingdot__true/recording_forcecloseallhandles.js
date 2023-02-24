let nock = require('nock');

module.exports.hash = "9898d73f1792f47eaa7bbe2aca4c97b3";

module.exports.testInfo = {"uniqueName":{"share":"share167746441865202140","dir":"dir167746441890707113"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441865202140')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:19 GMT',
  'ETag',
  '"0x8DB18692BE426B0"',
  'x-ms-request-id',
  '8eb00bad-b01a-0009-7a52-4a3c4a000000',
  'x-ms-client-request-id',
  '1b6f028c-106d-494a-9e55-24466c715532',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:19 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441865202140/dir167746441890707113.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:19 GMT',
  'ETag',
  '"0x8DB18692C0D0181"',
  'x-ms-request-id',
  '8eb00baf-b01a-0009-7b52-4a3c4a000000',
  'x-ms-client-request-id',
  '0096b371-fa5e-4f05-88d4-43ab3fac6e2b',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:19.2739713Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:19.2739713Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:19.2739713Z',
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
  'Mon, 27 Feb 2023 02:20:19 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441865202140/dir167746441890707113.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bb1-b01a-0009-7c52-4a3c4a000000',
  'x-ms-client-request-id',
  '4eee722e-1821-4bff-8bed-c8919eb6d423',
  'x-ms-version',
  '2022-11-02',
  'x-ms-number-of-handles-closed',
  '0',
  'x-ms-number-of-handles-failed',
  '0',
  'Date',
  'Mon, 27 Feb 2023 02:20:19 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441865202140')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bb2-b01a-0009-7d52-4a3c4a000000',
  'x-ms-client-request-id',
  '243f6e2f-41d1-4986-951a-b916ce18ac72',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:19 GMT'
]);
