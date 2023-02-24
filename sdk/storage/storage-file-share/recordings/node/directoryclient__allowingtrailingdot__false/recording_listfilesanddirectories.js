let nock = require('nock');

module.exports.hash = "ce56b8491f77b7d9b7a8a34df2a998fd";

module.exports.testInfo = {"uniqueName":{"share":"share167746443477408611","dir":"dir167746443502806168","file":"file167746443528700524"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443477408611')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:35 GMT',
  'ETag',
  '"0x8DB1869358051E0"',
  'x-ms-request-id',
  '4d1aea32-201a-0006-5052-4a03a9000000',
  'x-ms-client-request-id',
  'f1d723af-7fee-4368-8d81-23b6fe3a1437',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:34 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443477408611/dir167746443502806168.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:35 GMT',
  'ETag',
  '"0x8DB186935A8B496"',
  'x-ms-request-id',
  '4d1aea34-201a-0006-5152-4a03a9000000',
  'x-ms-client-request-id',
  '5ec38556-a378-4fc3-9abf-84ed50cba744',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:35.3938582Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:35.3938582Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:35.3938582Z',
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
  'Mon, 27 Feb 2023 02:20:35 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443477408611/dir167746443502806168./file167746443528700524...')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:35 GMT',
  'ETag',
  '"0x8DB186935D0126C"',
  'x-ms-request-id',
  '4d1aea35-201a-0006-5252-4a03a9000000',
  'x-ms-client-request-id',
  'b373cf28-ae60-41d6-921f-55e510d6eab9',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:35.6518508Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:35.6518508Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:35.6518508Z',
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
  'Mon, 27 Feb 2023 02:20:35 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746443477408611/dir167746443502806168.')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167746443477408611\" DirectoryPath=\"dir167746443502806168\"><DirectoryId>13835128424026341376</DirectoryId><Entries><File><Name>file167746443528700524</Name><FileId>11529285414812647424</FileId><Properties><Content-Length>1024</Content-Length></Properties></File></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1aea36-201a-0006-5352-4a03a9000000',
  'x-ms-client-request-id',
  'd6829f3a-3ff7-4601-a2b9-7470fbf6c1bb',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:35 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746443477408611')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea37-201a-0006-5452-4a03a9000000',
  'x-ms-client-request-id',
  'e427730b-8fd6-42dd-986f-f78333fe5f96',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:35 GMT'
]);
