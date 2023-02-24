let nock = require('nock');

module.exports.hash = "4ef28efc30180ee9ff6ef6187702ebc9";

module.exports.testInfo = {"uniqueName":{"share":"share167746443288604656","dir":"dir167746443314208957"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443288604656')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:33 GMT',
  'ETag',
  '"0x8DB186934608449"',
  'x-ms-request-id',
  '4d1aea2a-201a-0006-4952-4a03a9000000',
  'x-ms-client-request-id',
  'f8f1dcb7-1f6d-4a34-85ea-53d768ef3fde',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:33 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443288604656/dir167746443314208957.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:33 GMT',
  'ETag',
  '"0x8DB1869348C915B"',
  'x-ms-request-id',
  '4d1aea2c-201a-0006-4a52-4a03a9000000',
  'x-ms-client-request-id',
  '1bbc12c0-9274-4d8b-b898-bbc00205370e',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:33.5317339Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:33.5317339Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:33.5317339Z',
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
  'Mon, 27 Feb 2023 02:20:33 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443288604656/dir167746443314208957.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:33 GMT',
  'ETag',
  '"0x8DB186934B4B359"',
  'x-ms-request-id',
  '4d1aea2d-201a-0006-4b52-4a03a9000000',
  'x-ms-client-request-id',
  '3733eacb-0c35-4628-9792-9943b973f891',
  'x-ms-version',
  '2022-11-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:33 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746443288604656/dir167746443314208957.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:33 GMT',
  'ETag',
  '"0x8DB186934B4B359"',
  'x-ms-request-id',
  '4d1aea2e-201a-0006-4c52-4a03a9000000',
  'x-ms-client-request-id',
  '041bc5ea-2012-4b36-a6e5-2503d92cc571',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'false',
  'x-ms-file-change-time',
  '2023-02-27T02:20:33.7947481Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:33.5317339Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:33.5317339Z',
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
  'Mon, 27 Feb 2023 02:20:33 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443288604656/dir167746443314208957.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:34 GMT',
  'ETag',
  '"0x8DB1869350A0081"',
  'x-ms-request-id',
  '4d1aea2f-201a-0006-4d52-4a03a9000000',
  'x-ms-client-request-id',
  '45b46450-80d3-44f9-92ef-2f4139233e8a',
  'x-ms-version',
  '2022-11-02',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:34 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746443288604656/dir167746443314208957.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:34 GMT',
  'ETag',
  '"0x8DB1869350A0081"',
  'x-ms-request-id',
  '4d1aea30-201a-0006-4e52-4a03a9000000',
  'x-ms-client-request-id',
  '28a0f033-bba5-4d4c-8349-d2a30bcbbd42',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-meta-key1',
  'Value1',
  'x-ms-file-change-time',
  '2023-02-27T02:20:34.3537793Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:33.5317339Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:33.5317339Z',
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
  'Mon, 27 Feb 2023 02:20:34 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746443288604656')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea31-201a-0006-4f52-4a03a9000000',
  'x-ms-client-request-id',
  '5744f25c-17ff-4127-9301-59d2a9f6a6bf',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:34 GMT'
]);
