let nock = require('nock');

module.exports.hash = "23b025b71787a30364a6ae60a747fd6e";

module.exports.testInfo = {"uniqueName":{"share":"share167746441026803496","dir":"dir167746441052103010"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441026803496')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:10 GMT',
  'ETag',
  '"0x8DB186926E4B743"',
  'x-ms-request-id',
  '4d1aea0f-201a-0006-3a52-4a03a9000000',
  'x-ms-client-request-id',
  '7d5d3280-bc87-41df-acfd-4cec7d9f1189',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:10 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746441026803496/dir167746441052103010.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:10 GMT',
  'ETag',
  '"0x8DB1869270D2E90"',
  'x-ms-request-id',
  '4d1aea11-201a-0006-3b52-4a03a9000000',
  'x-ms-client-request-id',
  'ff4eb6b4-6eb2-480d-b9f7-7ae85f4bf7c7',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:10.8865168Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:10.8865168Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:10.8865168Z',
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
  'Mon, 27 Feb 2023 02:20:10 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share167746441026803496/dir167746441052103010.')
  .query(true)
  .reply(200, "﻿<?xml version=\"1.0\" encoding=\"utf-8\"?><EnumerationResults><Entries /><NextMarker /></EnumerationResults>", [
  'Transfer-Encoding',
  'chunked',
  'Content-Type',
  'application/xml',
  'x-ms-request-id',
  '4d1aea12-201a-0006-3c52-4a03a9000000',
  'x-ms-client-request-id',
  '8324e2c1-9f16-47a2-9888-1f4f0723f14d',
  'x-ms-version',
  '2022-11-02',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,Content-Type',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:10 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746441026803496')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea13-201a-0006-3d52-4a03a9000000',
  'x-ms-client-request-id',
  '9ea75aab-a0ac-4627-a619-9520eb7f635c',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:10 GMT'
]);
