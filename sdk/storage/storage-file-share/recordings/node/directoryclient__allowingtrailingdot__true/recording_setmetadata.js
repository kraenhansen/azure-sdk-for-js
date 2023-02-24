let nock = require('nock');

module.exports.hash = "4ef28efc30180ee9ff6ef6187702ebc9";

module.exports.testInfo = {"uniqueName":{"share":"share167746441448607668","dir":"dir167746441474402099"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441448607668')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:14 GMT',
  'ETag',
  '"0x8DB18692968B95D"',
  'x-ms-request-id',
  '8eb00b99-b01a-0009-6a52-4a3c4a000000',
  'x-ms-client-request-id',
  'd8a31cad-9e24-4ee3-ad44-9c57dca5bd61',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:14 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441448607668/dir167746441474402099.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:15 GMT',
  'ETag',
  '"0x8DB1869299282F0"',
  'x-ms-request-id',
  '8eb00b9b-b01a-0009-6b52-4a3c4a000000',
  'x-ms-client-request-id',
  '94f8c4b1-4d46-4941-9ba8-b0c098737848',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:15.1157488Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:15.1157488Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:15.1157488Z',
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
  'Mon, 27 Feb 2023 02:20:14 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441448607668/dir167746441474402099.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:15 GMT',
  'ETag',
  '"0x8DB186929B8F71D"',
  'x-ms-request-id',
  '8eb00b9c-b01a-0009-6c52-4a3c4a000000',
  'x-ms-client-request-id',
  'e5fb854d-dcbc-43d9-9406-b11b6f269821',
  'x-ms-version',
  '2022-11-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:14 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746441448607668/dir167746441474402099.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:15 GMT',
  'ETag',
  '"0x8DB186929B8F71D"',
  'x-ms-request-id',
  '8eb00b9d-b01a-0009-6d52-4a3c4a000000',
  'x-ms-client-request-id',
  'e74947f5-4db4-4ff9-aefe-839649502d1d',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'false',
  'x-ms-file-change-time',
  '2023-02-27T02:20:15.3677597Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:15.1157488Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:15.1157488Z',
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
  'Mon, 27 Feb 2023 02:20:14 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441448607668/dir167746441474402099.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:15 GMT',
  'ETag',
  '"0x8DB18692A071869"',
  'x-ms-request-id',
  '8eb00b9e-b01a-0009-6e52-4a3c4a000000',
  'x-ms-client-request-id',
  '69058819-9f1d-447f-8428-53ef27d338e7',
  'x-ms-version',
  '2022-11-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:15 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746441448607668/dir167746441474402099.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:15 GMT',
  'ETag',
  '"0x8DB18692A071869"',
  'x-ms-request-id',
  '8eb00b9f-b01a-0009-6f52-4a3c4a000000',
  'x-ms-client-request-id',
  'dc5a6df9-f4dd-4082-a62b-9b11d916d0dd',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-meta-key1',
  'Value1',
  'x-ms-file-change-time',
  '2023-02-27T02:20:15.8797929Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:15.1157488Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:15.1157488Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Last-Modified,ETag,x-ms-server-encrypted,x-ms-meta-key1,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:15 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441448607668')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00ba0-b01a-0009-7052-4a3c4a000000',
  'x-ms-client-request-id',
  '71982641-8d42-444a-8dce-87d859aa92af',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:15 GMT'
]);
