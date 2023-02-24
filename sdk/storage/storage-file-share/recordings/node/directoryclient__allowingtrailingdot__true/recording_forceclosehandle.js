let nock = require('nock');

module.exports.hash = "a18176223400c2cc573fcb6318812029";

module.exports.testInfo = {"uniqueName":{"share":"share167746441761009961","dir":"dir167746441786904024"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441761009961')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:17 GMT',
  'ETag',
  '"0x8DB18692B44FD17"',
  'x-ms-request-id',
  '8eb00ba7-b01a-0009-7652-4a3c4a000000',
  'x-ms-client-request-id',
  'f28086f7-c9fd-40f3-94bb-46ca5c79dc9b',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:17 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441761009961/dir167746441786904024.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:18 GMT',
  'ETag',
  '"0x8DB18692B6FFC24"',
  'x-ms-request-id',
  '8eb00ba9-b01a-0009-7752-4a3c4a000000',
  'x-ms-client-request-id',
  'a4ff7592-da4f-4a9e-a69c-580ce68fb4c7',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:18.2449188Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:18.2449188Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:18.2449188Z',
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
  'Mon, 27 Feb 2023 02:20:17 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746441761009961/dir167746441786904024.')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults><Entries /><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00bab-b01a-0009-7852-4a3c4a000000',
  'x-ms-client-request-id',
  'b133129e-5864-4639-9e5e-ea94c07cc3ba',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:17 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441761009961')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bac-b01a-0009-7952-4a3c4a000000',
  'x-ms-client-request-id',
  'a2865845-93d8-4c84-a250-baf23738dfe3',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:17 GMT'
]);
