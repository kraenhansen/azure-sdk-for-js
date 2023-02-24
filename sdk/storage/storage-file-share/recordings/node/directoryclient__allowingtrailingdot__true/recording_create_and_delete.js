let nock = require('nock');

module.exports.hash = "21dba52bfb676f03082889c2f33c4098";

module.exports.testInfo = {"uniqueName":{"share":"share167746439984506387","dir":"dir167746440128204134","dir1":"dir1167746440166402349"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746439984506387')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:01 GMT',
  'ETag',
  '"0x8DB18692159FF58"',
  'x-ms-request-id',
  '4d1ae9e1-201a-0006-1751-4a03a9000000',
  'x-ms-client-request-id',
  '682d5e8f-5cc9-43b4-81f2-1a99e2a1b5b4',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:00 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746439984506387/dir167746440128204134.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:01 GMT',
  'ETag',
  '"0x8DB18692196CB02"',
  'x-ms-request-id',
  '4d1ae9e4-201a-0006-1851-4a03a9000000',
  'x-ms-client-request-id',
  'f0d02f7a-de34-42b8-9502-d8fb7a621aa2',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:01.7220354Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:01.7220354Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:01.7220354Z',
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
  'Mon, 27 Feb 2023 02:20:00 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746439984506387/dir1167746440166402349...')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:02 GMT',
  'ETag',
  '"0x8DB186921C46B03"',
  'x-ms-request-id',
  '4d1ae9e6-201a-0006-1951-4a03a9000000',
  'x-ms-client-request-id',
  'a3b3d938-6197-4223-9db8-6e9f0d0805b3',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:02.0210435Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:02.0210435Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:02.0210435Z',
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
  'Mon, 27 Feb 2023 02:20:02 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746439984506387/')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults ServiceEndpoint=\"https://fakestorageaccount.file.core.windows.net/\" ShareName=\"share167746439984506387\" DirectoryPath=\"\"><DirectoryId>0</DirectoryId><Entries><Directory><Name>dir1167746440166402349...</Name><FileId>11529285414812647424</FileId><Properties /></Directory><Directory><Name>dir167746440128204134.</Name><FileId>13835128424026341376</FileId><Properties /></Directory></Entries><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1ae9e7-201a-0006-1a51-4a03a9000000',
  'x-ms-client-request-id',
  '3b896465-461d-4c0d-af06-896b442165cf',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:02 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746439984506387/dir1167746440166402349...')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1ae9e8-201a-0006-1b51-4a03a9000000',
  'x-ms-client-request-id',
  '129c9463-547d-445c-8109-8d2774a38c31',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:02 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746439984506387/dir1167746440166402349...')
  .query(true)
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceNotFound</Code><Message>The specified resource does not exist.\nRequestId:4d1ae9e9-201a-0006-1c51-4a03a9000000\nTime:2023-02-27T02:20:02.8047182Z</Message></Error>", [
  'Content-Length',
  '223',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1ae9e9-201a-0006-1c51-4a03a9000000',
  'x-ms-client-request-id',
  '0ddb58c1-e9c2-4e0d-abc5-92f87c5a60c5',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:02 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746439984506387')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1ae9ea-201a-0006-1d51-4a03a9000000',
  'x-ms-client-request-id',
  '47cf7fb7-2411-43b0-8746-5bd35100ac3a',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:03 GMT'
]);
