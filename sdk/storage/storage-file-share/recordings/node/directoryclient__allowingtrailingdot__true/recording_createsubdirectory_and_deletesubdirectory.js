let nock = require('nock');

module.exports.hash = "4376c674901449eb86781027966ba170";

module.exports.testInfo = {"uniqueName":{"share":"share167746440666404550","dir":"dir167746440692007527","subdir":"subdir167746440719807003"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440666404550')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:07 GMT',
  'ETag',
  '"0x8DB186924BF5B7C"',
  'x-ms-request-id',
  '4d1ae9fd-201a-0006-2c52-4a03a9000000',
  'x-ms-client-request-id',
  '8859c9b0-e30c-497e-a355-ee029537696e',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:06 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440666404550/dir167746440692007527.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:07 GMT',
  'ETag',
  '"0x8DB186924E9D1FF"',
  'x-ms-request-id',
  '4d1ae9ff-201a-0006-2d52-4a03a9000000',
  'x-ms-client-request-id',
  '9b81c126-2a38-46f5-acc2-086c0fa29102',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:07.2993279Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:07.2993279Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:07.2993279Z',
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
  'Mon, 27 Feb 2023 02:20:07 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440666404550/dir167746440692007527./subdir167746440719807003.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:07 GMT',
  'ETag',
  '"0x8DB18692510E28B"',
  'x-ms-request-id',
  '4d1aea02-201a-0006-2e52-4a03a9000000',
  'x-ms-client-request-id',
  '913dd438-2fc0-4537-b9ba-92ccb757d54b',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:07.5553419Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:07.5553419Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:07.5553419Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 02:20:07 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746440666404550/dir167746440692007527./subdir167746440719807003.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:07 GMT',
  'ETag',
  '"0x8DB18692510E28B"',
  'x-ms-request-id',
  '4d1aea03-201a-0006-2f52-4a03a9000000',
  'x-ms-client-request-id',
  '1244cfaf-f770-437a-bac3-75f0a3828576',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2023-02-27T02:20:07.5553419Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:07.5553419Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:07.5553419Z',
  'x-ms-file-permission-key',
  '13895902193744473398*5510371786133343095',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Last-Modified,ETag,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:07 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746440666404550/dir167746440692007527./subdir167746440719807003.')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea04-201a-0006-3052-4a03a9000000',
  'x-ms-client-request-id',
  'b9826ce1-ebfe-4582-a2a9-4ced9e7c6294',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:07 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746440666404550/dir167746440692007527./subdir167746440719807003.')
  .query(true)
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceNotFound</Code><Message>The specified resource does not exist.\nRequestId:4d1aea05-201a-0006-3152-4a03a9000000\nTime:2023-02-27T02:20:08.3051411Z</Message></Error>", [
  'Content-Length',
  '223',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1aea05-201a-0006-3152-4a03a9000000',
  'x-ms-client-request-id',
  'd18dca49-65d9-4ac0-ac06-dda05a99d272',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:07 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746440666404550')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea06-201a-0006-3252-4a03a9000000',
  'x-ms-client-request-id',
  '6a79b657-3cfd-4c71-89d3-e25a8fae2115',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:08 GMT'
]);
