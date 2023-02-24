let nock = require('nock');

module.exports.hash = "d261027b6ed95bd54d5b57513902df32";

module.exports.testInfo = {"uniqueName":{"share":"share167747749210306745","dir":"dir167747749235407220","file":"file167747749261107447","destfile":"destfile167747749286607451"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167747749210306745')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 05:58:12 GMT',
  'ETag',
  '"0x8DB18879C5B60FF"',
  'x-ms-request-id',
  'e51cf778-601a-0004-5170-4a0ec4000000',
  'x-ms-client-request-id',
  '15473bac-32ab-4690-b274-ba86c669f54c',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 05:58:12 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167747749210306745/dir167747749235407220....')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 05:58:12 GMT',
  'ETag',
  '"0x8DB18879C83B575"',
  'x-ms-request-id',
  'e51cf77a-601a-0004-5270-4a0ec4000000',
  'x-ms-client-request-id',
  '79c68e51-f312-4860-b008-da90555375a1',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T05:58:12.8586101Z',
  'x-ms-file-last-write-time',
  '2023-02-27T05:58:12.8586101Z',
  'x-ms-file-creation-time',
  '2023-02-27T05:58:12.8586101Z',
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
  'Mon, 27 Feb 2023 05:58:12 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167747749210306745/dir167747749235407220..../file167747749261107447....')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 05:58:13 GMT',
  'ETag',
  '"0x8DB18879CAA2994"',
  'x-ms-request-id',
  'e51cf77b-601a-0004-5370-4a0ec4000000',
  'x-ms-client-request-id',
  '49162b8b-5228-4ddf-9d91-937a7b33db46',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T05:58:13.1106196Z',
  'x-ms-file-last-write-time',
  '2023-02-27T05:58:13.1106196Z',
  'x-ms-file-creation-time',
  '2023-02-27T05:58:13.1106196Z',
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
  'Mon, 27 Feb 2023 05:58:12 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167747749210306745/destfile167747749286607451....')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 05:58:13 GMT',
  'ETag',
  '"0x8DB18879CD8DAC2"',
  'x-ms-request-id',
  'e51cf77c-601a-0004-5470-4a0ec4000000',
  'x-ms-client-request-id',
  'aa31f715-6fe7-4005-8692-62d1c7d0798e',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T05:58:13.4166210Z',
  'x-ms-file-last-write-time',
  '2023-02-27T05:58:13.1106196Z',
  'x-ms-file-creation-time',
  '2023-02-27T05:58:13.1106196Z',
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
  'Mon, 27 Feb 2023 05:58:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167747749210306745/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167747749210306745\" DirectoryPath=\"\"><DirectoryId>0</DirectoryId><Entries><File><Name>destfile167747749286607451....</Name><FileId>11529285414812647424</FileId><Properties><Content-Length>1024</Content-Length></Properties></File><Directory><Name>dir167747749235407220....</Name><FileId>13835128424026341376</FileId><Properties /></Directory></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  'e51cf77d-601a-0004-5570-4a0ec4000000',
  'x-ms-client-request-id',
  '67f13394-dbbf-4e08-a42c-1987e231efd9',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 05:58:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share167747749210306745/destfile167747749286607451....')
  .reply(200, "", [
  'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Mon, 27 Feb 2023 05:58:13 GMT',
  'ETag',
  '"0x8DB18879CD8DAC2"',
  'x-ms-request-id',
  'e51cf77e-601a-0004-5670-4a0ec4000000',
  'x-ms-client-request-id',
  '3d437199-7d0d-4d3c-8aef-3f59953b5630',
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
  '2023-02-27T05:58:13.4166210Z',
  'x-ms-file-last-write-time',
  '2023-02-27T05:58:13.1106196Z',
  'x-ms-file-creation-time',
  '2023-02-27T05:58:13.1106196Z',
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
  'Mon, 27 Feb 2023 05:58:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share167747749210306745/dir167747749235407220..../file167747749261107447....')
  .reply(404, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  'e51cf77f-601a-0004-5770-4a0ec4000000',
  'x-ms-client-request-id',
  '9a122e4d-5b1f-44f6-848e-97f2793edef9',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 05:58:13 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167747749210306745')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  'e51cf780-601a-0004-5870-4a0ec4000000',
  'x-ms-client-request-id',
  '784b6281-f237-48aa-b9c5-b1d376c5fe80',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 05:58:13 GMT'
]);
