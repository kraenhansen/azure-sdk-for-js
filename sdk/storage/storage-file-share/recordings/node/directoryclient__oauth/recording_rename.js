let nock = require('nock');

module.exports.hash = "01a18a3393dd67dea0f6b8d573c3bac9";

module.exports.testInfo = {"uniqueName":{"share":"share167749054485805299","dir":"dir167749054515402747","destdir":"destdir167749054545505011"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167749054485805299')
  .query(true)
  .reply(201, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 27 Feb 2023 09:35:45 GMT',
  'ETag',
  '"0x8DB18A600582191"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a17cb318-101a-0070-698e-4a9c5e000000',
  'x-ms-client-request-id',
  '69e647ed-1ebb-4a10-b7e4-3a70db9933c2',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 09:35:45 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167749054485805299/dir167749054515402747')
  .query(true)
  .reply(201, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 27 Feb 2023 09:35:45 GMT',
  'ETag',
  '"0x8DB18A600865858"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a17cb31c-101a-0070-6a8e-4a9c5e000000',
  'x-ms-client-request-id',
  '06d2c62c-ec63-4880-82cb-4590734459ce',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T09:35:45.5499352Z',
  'x-ms-file-last-write-time',
  '2023-02-27T09:35:45.5499352Z',
  'x-ms-file-creation-time',
  '2023-02-27T09:35:45.5499352Z',
  'x-ms-file-permission-key',
  '8792472798472242479*1359530181238362790',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 09:35:45 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167749054485805299/destdir167749054545505011')
  .query(true)
  .reply(200, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 27 Feb 2023 09:35:45 GMT',
  'ETag',
  '"0x8DB18A600BCA298"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a17cb31d-101a-0070-6b8e-4a9c5e000000',
  'x-ms-client-request-id',
  '7c1d3231-be9b-4bdb-8904-2dc6200dca9c',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T09:35:45.9057304Z',
  'x-ms-file-last-write-time',
  '2023-02-27T09:35:45.5499352Z',
  'x-ms-file-creation-time',
  '2023-02-27T09:35:45.5499352Z',
  'x-ms-file-permission-key',
  '8792472798472242479*1359530181238362790',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Mon, 27 Feb 2023 09:35:45 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167749054485805299/destdir167749054545505011')
  .query(true)
  .reply(200, "", [
  'Content-Length',
  '0',
  'Last-Modified',
  'Mon, 27 Feb 2023 09:35:45 GMT',
  'ETag',
  '"0x8DB18A600BCA298"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a17cb31e-101a-0070-6c8e-4a9c5e000000',
  'x-ms-client-request-id',
  '306e52e0-3d1d-43df-9684-a74fb377c7a4',
  'x-ms-version',
  '2022-11-02',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2023-02-27T09:35:45.9057304Z',
  'x-ms-file-last-write-time',
  '2023-02-27T09:35:45.5499352Z',
  'x-ms-file-creation-time',
  '2023-02-27T09:35:45.5499352Z',
  'x-ms-file-permission-key',
  '8792472798472242479*1359530181238362790',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Last-Modified,ETag,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 09:35:46 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167749054485805299/dir167749054515402747')
  .query(true)
  .reply(404, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceNotFound</Code><Message>The specified resource does not exist.\nRequestId:a17cb31f-101a-0070-6d8e-4a9c5e000000\nTime:2023-02-27T09:35:46.4993967Z</Message></Error>", [
  'Content-Length',
  '223',
  'Content-Type',
  'application/xml',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a17cb31f-101a-0070-6d8e-4a9c5e000000',
  'x-ms-client-request-id',
  'e3427bc8-8b9d-411b-b0d1-34da239300d1',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 09:35:46 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167749054485805299')
  .query(true)
  .reply(202, "", [
  'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'a17cb320-101a-0070-6e8e-4a9c5e000000',
  'x-ms-client-request-id',
  'fb020603-f19e-4a45-9283-857fdf6c7565',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 09:35:46 GMT'
]);
