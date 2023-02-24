let nock = require('nock');

module.exports.hash = "bb6222e42cb91438c19fe1ce8a00a0e9";

module.exports.testInfo = {"uniqueName":{"share":"share167746440848003911","dir":"dir167746440873408063","file":"file167746440899905394"},"newDate":{}}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440848003911')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:08 GMT',
  'ETag',
  '"0x8DB186925D2CD0B"',
  'x-ms-request-id',
  '4d1aea07-201a-0006-3352-4a03a9000000',
  'x-ms-client-request-id',
  '97fcae9a-b1c7-4c9d-bdf2-2c4fa963a896',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:08 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440848003911/dir167746440873408063.')
  .query(true)
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:09 GMT',
  'ETag',
  '"0x8DB186925FC573D"',
  'x-ms-request-id',
  '4d1aea09-201a-0006-3452-4a03a9000000',
  'x-ms-client-request-id',
  '8e83a205-ff5e-40a0-aeaa-70ae78b3e49a',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:09.0984253Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:09.0984253Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:09.0984253Z',
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
  'Mon, 27 Feb 2023 02:20:08 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share167746440848003911/dir167746440873408063./file167746440899905394.')
  .reply(201, "", [
  'Transfer-Encoding',
  'chunked',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:09 GMT',
  'ETag',
  '"0x8DB18692624EE74"',
  'x-ms-request-id',
  '4d1aea0a-201a-0006-3552-4a03a9000000',
  'x-ms-client-request-id',
  'a9d8f32e-3fe2-4c3e-bd20-d42ddbfef3ae',
  'x-ms-version',
  '2022-11-02',
  'x-ms-file-change-time',
  '2023-02-27T02:20:09.3644404Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:09.3644404Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:09.3644404Z',
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
  'Mon, 27 Feb 2023 02:20:08 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share167746440848003911/dir167746440873408063./file167746440899905394.')
  .reply(200, "", [
  'Content-Length',
  '1024',
  'Content-Type',
  'application/octet-stream',
  'Last-Modified',
  'Mon, 27 Feb 2023 02:20:09 GMT',
  'ETag',
  '"0x8DB18692624EE74"',
  'x-ms-request-id',
  '4d1aea0b-201a-0006-3652-4a03a9000000',
  'x-ms-client-request-id',
  'f4682210-3543-4740-b449-571eb434fe36',
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
  '2023-02-27T02:20:09.3644404Z',
  'x-ms-file-last-write-time',
  '2023-02-27T02:20:09.3644404Z',
  'x-ms-file-creation-time',
  '2023-02-27T02:20:09.3644404Z',
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
  'Mon, 27 Feb 2023 02:20:09 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746440848003911/dir167746440873408063./file167746440899905394.')
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea0c-201a-0006-3752-4a03a9000000',
  'x-ms-client-request-id',
  '688657c7-ff41-40ba-94a2-b03752542235',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:09 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share167746440848003911/dir167746440873408063./file167746440899905394.')
  .reply(404, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea0d-201a-0006-3852-4a03a9000000',
  'x-ms-client-request-id',
  '3a060eae-859f-4332-b7e0-114f059a253d',
  'x-ms-version',
  '2022-11-02',
  'x-ms-error-code',
  'ResourceNotFound',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-error-code',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Mon, 27 Feb 2023 02:20:09 GMT'
]);

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share167746440848003911')
  .query(true)
  .reply(202, "", [
  'Transfer-Encoding',
  'chunked',
  'x-ms-request-id',
  '4d1aea0e-201a-0006-3952-4a03a9000000',
  'x-ms-client-request-id',
  '043c0f90-7ba5-42d0-9f03-6668b07d6f0c',
  'x-ms-version',
  '2022-11-02',
  'Date',
  'Mon, 27 Feb 2023 02:20:09 GMT'
]);
