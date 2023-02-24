let nock = require('nock');

module.exports.hash = "a18176223400c2cc573fcb6318812029";

module.exports.testInfo = {"uniqueName":{"share":"share167746443605804753","dir":"dir167746443633205359"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443605804753')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:36 GMT',
  'ETag',
  '"0x8DB1869364468F2"',
  'x-ms-request-id',
  '4d1aea38-201a-0006-5552-4a03a9000000',
  'x-ms-client-request-id',
  'bd2a135a-082e-4382-aceb-95b22d2315c9',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:36 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443605804753/dir167746443633205359.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:36 GMT',
  'ETag',
  '"0x8DB1869366FD776"',
  'x-ms-request-id',
  '4d1aea3a-201a-0006-5652-4a03a9000000',
  'x-ms-client-request-id',
  'dda7cdd9-e5eb-4661-b060-3ab70fffd5a6',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:36.6989174Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:36.6989174Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:36.6989174Z',
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
  'Mon, 27 Feb 2023 02:20:36 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746443605804753/dir167746443633205359.')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults><Entries /><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1aea3b-201a-0006-5752-4a03a9000000',
  'x-ms-client-request-id',
  'c9381436-b447-445d-9e50-a7cbe63b9da9',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:36 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746443605804753')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea3c-201a-0006-5852-4a03a9000000',
  'x-ms-client-request-id',
  '953641cb-6c22-4f6f-8d7f-6c88d4c72f5b',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:36 GMT'
]);
