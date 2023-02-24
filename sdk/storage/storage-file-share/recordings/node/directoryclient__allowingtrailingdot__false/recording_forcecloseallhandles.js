let nock = require('nock');

module.exports.hash = "9898d73f1792f47eaa7bbe2aca4c97b3";

module.exports.testInfo = {"uniqueName":{"share":"share167746443715302169","dir":"dir167746443740704058"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443715302169')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:37 GMT',
  'ETag',
  '"0x8DB186936EB5A76"',
  'x-ms-request-id',
  '4d1aea3d-201a-0006-5952-4a03a9000000',
  'x-ms-client-request-id',
  '900a7711-e8ba-4d3c-bb09-4bf182eecbf0',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:37 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443715302169/dir167746443740704058.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:37 GMT',
  'ETag',
  '"0x8DB186937189C7F"',
  'x-ms-request-id',
  '4d1aea40-201a-0006-5a52-4a03a9000000',
  'x-ms-client-request-id',
  'bdd8d277-6824-45fe-8180-8e2f29acebf1',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:37.8049663Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:37.8049663Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:37.8049663Z',
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
  'Mon, 27 Feb 2023 02:20:37 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746443715302169/dir167746443740704058.')
  .query(true)
  .reply(200, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea41-201a-0006-5b52-4a03a9000000',
  'x-ms-client-request-id',
  'bffd83d2-5427-4434-8baf-1f6d35fa1ea4',
  'x-ms-version',
  '2022-11-02',
  'x-ms-number-of-handles-closed',
  '0',
  'x-ms-number-of-handles-failed',
  '0',
  'Date',
  'Mon, 27 Feb 2023 02:20:37 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746443715302169')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea42-201a-0006-5c52-4a03a9000000',
  'x-ms-client-request-id',
  '0a589539-a4b0-4d88-8373-980ffd795ef8',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:37 GMT'
]);
