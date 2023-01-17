/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { AzureMediaServices } = require("@azure/arm-mediaservices");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Get the details of a Streaming Locator in the Media Services account
 *
 * @summary Get the details of a Streaming Locator in the Media Services account
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Metadata/stable/2022-08-01/examples/streaming-locators-get-by-name.json
 */
async function getAStreamingLocatorByName() {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contoso";
  const accountName = "contosomedia";
  const streamingLocatorName = "clearStreamingLocator";
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.streamingLocators.get(
    resourceGroupName,
    accountName,
    streamingLocatorName
  );
  console.log(result);
}

async function main() {
  getAStreamingLocatorByName();
}

main().catch(console.error);
