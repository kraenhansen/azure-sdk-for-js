let nock = require('nock');

module.exports.hash = "fa0f6c509fa1edcaae47cef93f435933";

module.exports.testInfo = {"uniqueName":{"share":"share167746440297202969","dir":"dir167746440322809786"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440297202969')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:03 GMT',
  'ETag',
  '"0x8DB1869228BCE88"',
  'x-ms-request-id',
  '4d1ae9eb-201a-0006-1e52-4a03a9000000',
  'x-ms-client-request-id',
  '47991ae7-9de7-4630-99d1-37eb5f9480d9',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:03 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440297202969/dir167746440322809786.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:03 GMT',
  'ETag',
  '"0x8DB186922B64883"',
  'x-ms-request-id',
  '4d1ae9ed-201a-0006-1f52-4a03a9000000',
  'x-ms-client-request-id',
  '011aee82-0236-4c17-bb6a-87c2ca2871f8',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:03.6061315Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:03.6061315Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:03.6061315Z',
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
  'Mon, 27 Feb 2023 02:20:03 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440297202969/dir167746440322809786.')
  .query(true)
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceAlreadyExists</Code><Message>The specified resource already exists.\nRequestId:4d1ae9ee-201a-0006-2052-4a03a9000000\nTime:2023-02-27T02:20:03.8647978Z</Message></Error>", [
  'Content-Length',
  '228',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1ae9ee-201a-0006-2052-4a03a9000000',
  'x-ms-client-request-id',
  '61bb6c78-88f5-41f5-bfea-f7c9b4a09ca0',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceAlreadyExists',
  'Date',
  'Mon, 27 Feb 2023 02:20:03 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746440297202969')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1ae9ef-201a-0006-2152-4a03a9000000',
  'x-ms-client-request-id',
  '13191d43-8ece-47ec-9d5a-5c3e76a589f1',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:04 GMT'
]);
