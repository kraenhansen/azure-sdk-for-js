let nock = require('nock');

module.exports.hash = "20d7a1087e2eb0188e379dfc27a7344f";

module.exports.testInfo = {"uniqueName":{"share":"share167746440530508737","dir":"dir167746440557800022"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440530508737')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:05 GMT',
  'ETag',
  '"0x8DB186923F06E91"',
  'x-ms-request-id',
  '4d1ae9f6-201a-0006-2752-4a03a9000000',
  'x-ms-client-request-id',
  'aad3b1e7-2edf-4350-8ad7-58cfd21e19d6',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:05 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440530508737/dir167746440557800022.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:05 GMT',
  'ETag',
  '"0x8DB1869241AE66F"',
  'x-ms-request-id',
  '4d1ae9f8-201a-0006-2852-4a03a9000000',
  'x-ms-client-request-id',
  'ccdb94fb-5973-49e4-bfb2-956907ec5970',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:05.9432559Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:05.9432559Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:05.9432559Z',
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
  'Mon, 27 Feb 2023 02:20:05 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440530508737/dir167746440557800022.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:06 GMT',
  'ETag',
  '"0x8DB18692441CFC5"',
  'x-ms-request-id',
  '4d1ae9f9-201a-0006-2952-4a03a9000000',
  'x-ms-client-request-id',
  '60bf4261-bb21-4bc2-967e-4862625d3c1f',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:06.1982661Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:05.9432559Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:05.9432559Z',
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
  'Mon, 27 Feb 2023 02:20:06 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746440530508737/dir167746440557800022.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:06 GMT',
  'ETag',
  '"0x8DB18692441CFC5"',
  'x-ms-request-id',
  '4d1ae9fb-201a-0006-2a52-4a03a9000000',
  'x-ms-client-request-id',
  '43faa945-8878-4bc4-a749-f3397fc72b3b',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2023-02-27T02:20:06.1982661Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:05.9432559Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:05.9432559Z',
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
  'Mon, 27 Feb 2023 02:20:06 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746440530508737')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1ae9fc-201a-0006-2b52-4a03a9000000',
  'x-ms-client-request-id',
  'a6f3d95b-4760-4677-886f-9ff3960f3303',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:06 GMT'
]);
