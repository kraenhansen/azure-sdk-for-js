let nock = require('nock');

module.exports.hash = "607a58b0e161151afbb4eaa4b16abc74";

module.exports.testInfo = {"uniqueName":{"share":"share167746441289805118","dir":"dir167746441316609141","dir1":"dir1167746441344008164"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441289805118')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:13 GMT',
  'ETag',
  '"0x8DB186928763E5E"',
  'x-ms-request-id',
  '8eb00b91-b01a-0009-6452-4a3c4a000000',
  'x-ms-client-request-id',
  'e133ad5f-f7bb-43dd-9b46-2b571608c14c',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:12 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441289805118/dir167746441316609141.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:13 GMT',
  'ETag',
  '"0x8DB186928A2535C"',
  'x-ms-request-id',
  '8eb00b93-b01a-0009-6552-4a3c4a000000',
  'x-ms-client-request-id',
  'f13c0421-13a1-4025-b383-43439a2b4a54',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:13.5416668Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:13.5416668Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:13.5416668Z',
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
  'Mon, 27 Feb 2023 02:20:12 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441289805118/dir1167746441344008164...')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:13 GMT',
  'ETag',
  '"0x8DB186928C93CBE"',
  'x-ms-request-id',
  '8eb00b95-b01a-0009-6652-4a3c4a000000',
  'x-ms-client-request-id',
  '0a4573bb-9964-4485-a6b4-35a26b462137',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:13.7966782Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:13.7966782Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:13.7966782Z',
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
  'Mon, 27 Feb 2023 02:20:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441289805118/dir1167746441344008164...')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00b96-b01a-0009-6752-4a3c4a000000',
  'x-ms-client-request-id',
  '3a5337cc-9dca-4579-a521-bc47b7021ab9',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441289805118/dir1167746441344008164...')
  .query(true)
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceNotFound</Code><Message>The specified resource does not exist.\nRequestId:8eb00b97-b01a-0009-6852-4a3c4a000000\nTime:2023-02-27T02:20:14.3328480Z</Message></Error>", [
  'Content-Length',
  '223',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00b97-b01a-0009-6852-4a3c4a000000',
  'x-ms-client-request-id',
  '26ab243a-1a17-42f1-a29a-320297ac8e46',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Date',
  'Mon, 27 Feb 2023 02:20:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441289805118')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00b98-b01a-0009-6952-4a3c4a000000',
  'x-ms-client-request-id',
  '45afd77d-e483-40b2-810f-abac35a18180',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:13 GMT'
]);
