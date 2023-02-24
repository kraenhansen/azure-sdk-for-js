let nock = require('nock');

module.exports.hash = "fa0f6c509fa1edcaae47cef93f435933";

module.exports.testInfo = {"uniqueName":{"share":"share167746442157400471","dir":"dir167746442185508055"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442157400471')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:21 GMT',
  'ETag',
  '"0x8DB18692DA20C53"',
  'x-ms-request-id',
  '8eb00bbb-b01a-0009-0552-4a3c4a000000',
  'x-ms-client-request-id',
  '5ecab903-a359-4c9d-96bf-a90ea6cb43b4',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:21 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442157400471/dir167746442185508055.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:22 GMT',
  'ETag',
  '"0x8DB18692DCE8E46"',
  'x-ms-request-id',
  '8eb00bbd-b01a-0009-0652-4a3c4a000000',
  'x-ms-client-request-id',
  '37fd6cc3-c405-4e6b-8edc-771331c25a49',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:22.2201414Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:22.2201414Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:22.2201414Z',
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
  'Mon, 27 Feb 2023 02:20:22 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746442157400471/dir167746442185508055.')
  .query(true)
  .reply(409, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><Error><Code>ResourceAlreadyExists</Code><Message>The specified resource already exists.\nRequestId:8eb00bbf-b01a-0009-0852-4a3c4a000000\nTime:2023-02-27T02:20:22.4755012Z</Message></Error>", [
  'Content-Length',
  '228',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '8eb00bbf-b01a-0009-0852-4a3c4a000000',
  'x-ms-client-request-id',
  'c05cdc48-acf8-4a4d-aefa-4b48fce198f5',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceAlreadyExists',
  'Date',
  'Mon, 27 Feb 2023 02:20:22 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746442157400471')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '8eb00bc0-b01a-0009-0952-4a3c4a000000',
  'x-ms-client-request-id',
  '2fb9b8aa-93b4-4152-8bfe-7c746e94dfc3',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:22 GMT'
]);
