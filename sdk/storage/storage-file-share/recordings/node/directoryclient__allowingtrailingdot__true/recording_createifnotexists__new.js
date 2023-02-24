let nock = require('nock');

module.exports.hash = "4d26cdbb810efa1a3285867b8f545a8b";

module.exports.testInfo = {"uniqueName":{"share":"share167746440400806683","dir":"dir167746440427405827","dir1":"dir1167746440453601454"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440400806683')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:04 GMT',
  'ETag',
  '"0x8DB18692329984C"',
  'x-ms-request-id',
  '4d1ae9f0-201a-0006-2252-4a03a9000000',
  'x-ms-client-request-id',
  '870eb00b-9a5b-4816-86ea-4fd1ea6b401c',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:04 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440400806683/dir167746440427405827.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:04 GMT',
  'ETag',
  '"0x8DB186923545F5E"',
  'x-ms-request-id',
  '4d1ae9f2-201a-0006-2352-4a03a9000000',
  'x-ms-client-request-id',
  '0b6f2111-acee-4680-9b56-d7c2df51b9da',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:04.6421854Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:04.6421854Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:04.6421854Z',
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
  'Mon, 27 Feb 2023 02:20:04 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440400806683/dir1167746440453601454...')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:04 GMT',
  'ETag',
  '"0x8DB1869237AACD9"',
  'x-ms-request-id',
  '4d1ae9f3-201a-0006-2452-4a03a9000000',
  'x-ms-client-request-id',
  'e5b89d19-3d20-4504-a3ce-116a409e4617',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:04.8932057Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:04.8932057Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:04.8932057Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:04 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746440400806683/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167746440400806683\" DirectoryPath=\"\"><DirectoryId>0</DirectoryId><Entries><Directory><Name>dir1167746440453601454...</Name><FileId>11529285414812647424</FileId><Properties /></Directory><Directory><Name>dir167746440427405827.</Name><FileId>13835128424026341376</FileId><Properties /></Directory></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1ae9f4-201a-0006-2552-4a03a9000000',
  'x-ms-client-request-id',
  '16bd26b4-c12d-49e9-941c-4d7080dc660f',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:05 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746440400806683')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1ae9f5-201a-0006-2652-4a03a9000000',
  'x-ms-client-request-id',
  'e4e33b42-20dc-4b93-83a4-054e1a877e2c',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:05 GMT'
]);
