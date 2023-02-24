let nock = require('nock');

module.exports.hash = "53b636bfddde47d9c5b89eff5523ea66";

module.exports.testInfo = {"uniqueName":{"share":"share167746441129105788","dir":"dir167746441162803497"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441129105788')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:11 GMT',
  'ETag',
  '"0x8DB186927816F33"',
  'x-ms-request-id',
  '4d1aea14-201a-0006-3e52-4a03a9000000',
  'x-ms-client-request-id',
  '36c2d8e8-63aa-48c0-a3e9-b33e56ed6a9f',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:11 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441129105788/dir167746441162803497.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:12 GMT',
  'ETag',
  '"0x8DB186927B77B03"',
  'x-ms-request-id',
  '4d1aea16-201a-0006-3f52-4a03a9000000',
  'x-ms-client-request-id',
  '673e8ca6-c7ef-4e8b-bc97-7ff65e0cd177',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:12.0025859Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:12.0025859Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:12.0025859Z',
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
  'Mon, 27 Feb 2023 02:20:11 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746441129105788/dir167746441162803497.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:12 GMT',
  'ETag',
  '"0x8DB186927B77B03"',
  'x-ms-request-id',
  '4d1aea17-201a-0006-4052-4a03a9000000',
  'x-ms-client-request-id',
  '5ebddeaf-2cb9-4fb3-a90e-7270b32715a3',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2023-02-27T02:20:12.0025859Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:12.0025859Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:12.0025859Z',
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
  'Mon, 27 Feb 2023 02:20:11 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441129105788')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00b8f-b01a-0009-6352-4a3c4a000000',
  'x-ms-client-request-id',
  '323b16f5-0047-4b40-8c1f-45a4f267d857',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:12 GMT'
]);
