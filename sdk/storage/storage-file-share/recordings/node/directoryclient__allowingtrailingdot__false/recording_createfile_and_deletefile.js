let nock = require('nock');

module.exports.hash = "788e5b432c24f9553e5aa87e19e7c234";

module.exports.testInfo = {"uniqueName":{"share":"share167746442733409261","dir":"dir167746442758900492","file":"file167746442790608060"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442733409261')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:27 GMT',
  'ETag',
  '"0x8DB186931110685"',
  'x-ms-request-id',
  '8eb00bd6-b01a-0009-1c52-4a3c4a000000',
  'x-ms-client-request-id',
  '5a825a4b-bf3d-46ec-9378-0123e5e2a593',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:27 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442733409261/dir167746442758900492.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:27 GMT',
  'ETag',
  '"0x8DB18693139FF95"',
  'x-ms-request-id',
  '8eb00bd8-b01a-0009-1d52-4a3c4a000000',
  'x-ms-client-request-id',
  '2dafaa41-aec4-4a44-9b21-58f466efd33f',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:27.9574421Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:27.9574421Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:27.9574421Z',
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
  'Mon, 27 Feb 2023 02:20:27 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442733409261/dir167746442758900492./file167746442790608060.')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:28 GMT',
  'ETag',
  '"0x8DB186931699B6F"',
  'x-ms-request-id',
  '8eb00bd9-b01a-0009-1e52-4a3c4a000000',
  'x-ms-client-request-id',
  'a07f988c-f21e-47fe-acc8-e642d4307231',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:28.2694511Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:28.2694511Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:28.2694511Z',
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
  'Mon, 27 Feb 2023 02:20:27 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746442733409261/dir167746442758900492.')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167746442733409261\" DirectoryPath=\"dir167746442758900492\"><DirectoryId>13835128424026341376</DirectoryId><Entries><File><Name>file167746442790608060</Name><FileId>11529285414812647424</FileId><Properties><Content-Length>1024</Content-Length></Properties></File></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00bda-b01a-0009-1f52-4a3c4a000000',
  'x-ms-client-request-id',
  '99917dc3-666f-42b3-a6b6-76f26d59175a',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:27 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share167746442733409261/dir167746442758900492./file167746442790608060.')
  .reply(200, "", [
  'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:28 GMT',
  'ETag',
  '"0x8DB186931699B6F"',
  'x-ms-request-id',
  '8eb00bdb-b01a-0009-2052-4a3c4a000000',
  'x-ms-client-request-id',
  '5415f7db-7249-48ce-a3dd-4ac22823ee9b',
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
  '2023-02-27T02:20:28.2694511Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:28.2694511Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:28.2694511Z',
  'x-ms-file-permission-key',
  '12560293872808033297*5510371786133343095',
  'x-ms-file-attributes',
  'Archive',
  'x-ms-file-id',
  '11529285414812647424',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type,Last-Modified,ETag,x-ms-type,x-ms-server-encrypted,x-ms-lease-status,x-ms-lease-state,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:28 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746442733409261/dir167746442758900492./file167746442790608060.')
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bdc-b01a-0009-2152-4a3c4a000000',
  'x-ms-client-request-id',
  '9fce4b6b-0f4f-4c2d-97b9-ea19eae6db89',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:28 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share167746442733409261/dir167746442758900492./file167746442790608060.')
  .reply(404, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bdd-b01a-0009-2252-4a3c4a000000',
  'x-ms-client-request-id',
  '0ca5f6d9-6030-424b-97c5-d9e05dc7479e',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:28 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746442733409261')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bdf-b01a-0009-2352-4a3c4a000000',
  'x-ms-client-request-id',
  '0ca87ee4-681c-467f-8778-b86a03e0b1b1',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:28 GMT'
]);
