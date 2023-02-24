let nock = require('nock');

module.exports.hash = "80d53a2fd852964638c16bc7ced5aa56";

module.exports.testInfo = {"uniqueName":{"share":"share167747856531701376","dir":"dir167747856557301250","file":"file167747856583601163","destfile":"destfile167747856610008567"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167747856531701376')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 06:16:05 GMT',
  'ETag',
  '"0x8DB188A1C0D5215"',
  'x-ms-request-id',
  '1775ea1b-e01a-0001-6a72-4a1b65000000',
  'x-ms-client-request-id',
  'a917d69b-4577-46c6-ada5-0692401e7c99',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 06:16:05 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167747856531701376/dir167747856557301250....')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 06:16:06 GMT',
  'ETag',
  '"0x8DB188A1C36149D"',
  'x-ms-request-id',
  '1775ea1d-e01a-0001-6b72-4a1b65000000',
  'x-ms-client-request-id',
  '32a12dc3-4e4a-4ec5-b863-855c85c7b331',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T06:16:06.0916893Z',
  'x-ms-file-last-write-time',
  '2023-02-27T06:16:06.0916893Z',
  'x-ms-file-creation-time',
  '2023-02-27T06:16:06.0916893Z',
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
  'Mon, 27 Feb 2023 06:16:05 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167747856531701376/dir167747856557301250..../file167747856583601163....')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 06:16:06 GMT',
  'ETag',
  '"0x8DB188A1C5DC0F5"',
  'x-ms-request-id',
  '1775ea2a-e01a-0001-6c72-4a1b65000000',
  'x-ms-client-request-id',
  'ac3cd6a8-218e-46e4-a4a8-19b71d33500c',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T06:16:06.3516917Z',
  'x-ms-file-last-write-time',
  '2023-02-27T06:16:06.3516917Z',
  'x-ms-file-creation-time',
  '2023-02-27T06:16:06.3516917Z',
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
  'Mon, 27 Feb 2023 06:16:06 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167747856531701376/destfile167747856610008567....')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 06:16:06 GMT',
  'ETag',
  '"0x8DB188A1C8D841C"',
  'x-ms-request-id',
  '1775ea2b-e01a-0001-6d72-4a1b65000000',
  'x-ms-client-request-id',
  'd47171e0-60cd-45e3-bb6a-19ca31f76550',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T06:16:06.6647068Z',
  'x-ms-file-last-write-time',
  '2023-02-27T06:16:06.3516917Z',
  'x-ms-file-creation-time',
  '2023-02-27T06:16:06.3516917Z',
  'x-ms-file-permission-key',
  '12560293872808033297*5510371786133343095',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 06:16:06 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167747856531701376/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167747856531701376\" DirectoryPath=\"\"><DirectoryId>0</DirectoryId><Entries><File><Name>destfile167747856610008567</Name><FileId>11529285414812647424</FileId><Properties><Content-Length>1024</Content-Length></Properties></File><Directory><Name>dir167747856557301250</Name><FileId>13835128424026341376</FileId><Properties /></Directory></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '1775ea2c-e01a-0001-6e72-4a1b65000000',
  'x-ms-client-request-id',
  '371d3912-11d2-4c07-b2e9-ddf1f244b7c0',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 06:16:06 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share167747856531701376/destfile167747856610008567....')
  .reply(200, "", [
  'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Mon, 27 Feb 2023 06:16:06 GMT',
  'ETag',
  '"0x8DB188A1C8D841C"',
  'x-ms-request-id',
  '1775ea2d-e01a-0001-6f72-4a1b65000000',
  'x-ms-client-request-id',
  '1e1a192b-5393-48bf-9d4d-cfdb7e572b05',
  'x-ms-version',
  '2022-11-02',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-lease-status',
  'unlocked',
  'x-ms-lease-state',
  'available',
  'x-ms-file-change-time',
  '2023-02-27T06:16:06.6647068Z',
  'x-ms-file-last-write-time',
  '2023-02-27T06:16:06.3516917Z',
  'x-ms-file-creation-time',
  '2023-02-27T06:16:06.3516917Z',
  'x-ms-file-permission-key',
  '12560293872808033297*5510371786133343095',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '0',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-lease-status,x-ms-lease-state,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 06:16:06 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share167747856531701376/dir167747856557301250..../file167747856583601163....')
  .reply(404, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '1775ea2e-e01a-0001-7072-4a1b65000000',
  'x-ms-client-request-id',
  'e5c1b2a1-1d2a-4d5b-b52b-99bfe6d1a556',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 06:16:07 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167747856531701376')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '1775ea2f-e01a-0001-7172-4a1b65000000',
  'x-ms-client-request-id',
  'e390f41f-5357-47e3-8e46-32b771ab9950',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 06:16:07 GMT'
]);
