let nock = require('nock');

module.exports.hash = "fd7b1834543a585571805abfe876d872";

module.exports.testInfo = {"uniqueName":{"share":"share167746441628805586","dir":"dir167746441654504247","file":"file167746441680708694"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441628805586')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:16 GMT',
  'ETag',
  '"0x8DB18692A7B6781"',
  'x-ms-request-id',
  '8eb00ba1-b01a-0009-7152-4a3c4a000000',
  'x-ms-client-request-id',
  'b6cff65a-c9c8-4b76-86b8-99cf8fd2ce97',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:15 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441628805586/dir167746441654504247.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:16 GMT',
  'ETag',
  '"0x8DB18692AA46BDD"',
  'x-ms-request-id',
  '8eb00ba3-b01a-0009-7252-4a3c4a000000',
  'x-ms-client-request-id',
  'c2ef7489-8bae-4208-8df2-fd2c59390fb8',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:16.9108445Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:16.9108445Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:16.9108445Z',
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
  'Mon, 27 Feb 2023 02:20:16 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441628805586/dir167746441654504247./file167746441680708694...')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:17 GMT',
  'ETag',
  '"0x8DB18692ACED7D4"',
  'x-ms-request-id',
  '8eb00ba4-b01a-0009-7352-4a3c4a000000',
  'x-ms-client-request-id',
  '5b0999d2-3b23-4e55-b91d-45272f340aea',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:17.1888596Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:17.1888596Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:17.1888596Z',
  'x-ms-file-permission-key',
  '12560293872808033297*5510371786133343095',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:16 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746441628805586/dir167746441654504247.')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167746441628805586\" DirectoryPath=\"dir167746441654504247.\"><DirectoryId>13835128424026341376</DirectoryId><Entries><File><Name>file167746441680708694...</Name><FileId>11529285414812647424</FileId><Properties><Content-Length>1024</Content-Length></Properties></File></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00ba5-b01a-0009-7452-4a3c4a000000',
  'x-ms-client-request-id',
  'b11cdf54-a021-4468-a115-e6a45e7efd42',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:16 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441628805586')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00ba6-b01a-0009-7552-4a3c4a000000',
  'x-ms-client-request-id',
  '3574af2e-78a8-434e-8c29-58fc0c4e8dca',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:16 GMT'
]);
