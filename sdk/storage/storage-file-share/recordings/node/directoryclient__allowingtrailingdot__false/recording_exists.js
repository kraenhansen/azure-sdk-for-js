let nock = require('nock');

module.exports.hash = "53b636bfddde47d9c5b89eff5523ea66";

module.exports.testInfo = {"uniqueName":{"share":"share167746443050106303","dir":"dir167746443076105690"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443050106303')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:30 GMT',
  'ETag',
  '"0x8DB186932F40146"',
  'x-ms-request-id',
  '8eb00be8-b01a-0009-2852-4a3c4a000000',
  'x-ms-client-request-id',
  'b442fefc-8f92-46b4-9e31-d5adf90985cd',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:30 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443050106303/dir167746443076105690.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:31 GMT',
  'ETag',
  '"0x8DB1869331DE145"',
  'x-ms-request-id',
  '8eb00bea-b01a-0009-2952-4a3c4a000000',
  'x-ms-client-request-id',
  'afc684d7-c451-4918-9e98-37f106f73372',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:31.1286085Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:31.1286085Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:31.1286085Z',
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
  .get('/share167746443050106303/dir167746443076105690.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:31 GMT',
  'ETag',
  '"0x8DB1869331DE145"',
  'x-ms-request-id',
  '8eb00beb-b01a-0009-2a52-4a3c4a000000',
  'x-ms-client-request-id',
  'aa0db481-54c0-45d2-89c6-9e5c83bae1b2',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2023-02-27T02:20:31.1286085Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:31.1286085Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:31.1286085Z',
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
  'Mon, 27 Feb 2023 02:20:30 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746443050106303')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea1f-201a-0006-4252-4a03a9000000',
  'x-ms-client-request-id',
  '48e9525f-f044-4cdf-85ab-d25e3639746c',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:30 GMT'
]);
