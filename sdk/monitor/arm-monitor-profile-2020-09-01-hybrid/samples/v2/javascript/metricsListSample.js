/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor-profile-2020-09-01-hybrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to **Lists the metric values for a resource**.
 *
 * @summary **Lists the metric values for a resource**.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-01-01/examples/GetMetric.json
 */
async function getMetricForData() {
  const resourceUri =
    "subscriptions/b324c52b-4073-4807-93af-e07d289c093e/resourceGroups/test/providers/Microsoft.Storage/storageAccounts/larryshoebox/blobServices/default";
  const timespan = "2017-04-14T02:20:00Z/2017-04-14T04:20:00Z";
  const interval = "PT1M";
  const aggregation = "Average,count";
  const top = 3;
  const orderby = "Average asc";
  const filter = "BlobType eq '*'";
  const metricnamespace = "Microsoft.Storage/storageAccounts/blobServices";
  const options = {
    timespan,
    interval,
    aggregation,
    top,
    orderby,
    filter,
    metricnamespace,
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const result = await client.metrics.list(resourceUri, options);
  console.log(result);
}

/**
 * This sample demonstrates how to **Lists the metric values for a resource**.
 *
 * @summary **Lists the metric values for a resource**.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-01-01/examples/GetMetricMetadata.json
 */
async function getMetricForMetadata() {
  const resourceUri =
    "subscriptions/b324c52b-4073-4807-93af-e07d289c093e/resourceGroups/test/providers/Microsoft.Storage/storageAccounts/larryshoebox/blobServices/default";
  const timespan = "2017-04-14T02:20:00Z/2017-04-14T04:20:00Z";
  const interval = "PT1M";
  const aggregation = "Average,count";
  const top = 3;
  const orderby = "Average asc";
  const filter = "BlobType eq '*'";
  const metricnamespace = "Microsoft.Storage/storageAccounts/blobServices";
  const options = {
    timespan,
    interval,
    aggregation,
    top,
    orderby,
    filter,
    metricnamespace,
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const result = await client.metrics.list(resourceUri, options);
  console.log(result);
}

/**
 * This sample demonstrates how to **Lists the metric values for a resource**.
 *
 * @summary **Lists the metric values for a resource**.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2018-01-01/examples/GetMetricError.json
 */
async function getMetricWithError() {
  const resourceUri =
    "subscriptions/ac41e21f-afd6-4a79-8070-f01eba278f97/resourceGroups/todking/providers/Microsoft.DocumentDb/databaseAccounts/tk-cosmos-mongo";
  const timespan = "2021-06-07T21:51:00Z/2021-06-08T01:51:00Z";
  const interval = "FULL";
  const metricnames = "MongoRequestsCount,MongoRequests";
  const aggregation = "average";
  const metricnamespace = "microsoft.documentdb/databaseaccounts";
  const options = {
    timespan,
    interval,
    metricnames,
    aggregation,
    metricnamespace,
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential);
  const result = await client.metrics.list(resourceUri, options);
  console.log(result);
}

async function main() {
  getMetricForData();
  getMetricForMetadata();
  getMetricWithError();
}

main().catch(console.error);
