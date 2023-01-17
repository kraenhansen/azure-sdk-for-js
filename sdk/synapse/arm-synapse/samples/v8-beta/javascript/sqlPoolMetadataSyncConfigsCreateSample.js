/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { SynapseManagementClient } = require("@azure/arm-synapse");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to Set the metadata sync configuration for a SQL pool
 *
 * @summary Set the metadata sync configuration for a SQL pool
 * x-ms-original-file: specification/synapse/resource-manager/Microsoft.Synapse/stable/2021-06-01/examples/CreateSqlPoolMetadataSyncConfig.json
 */
async function setMetadataSyncConfigForASqlAnalyticsPool() {
  const subscriptionId =
    process.env["SYNAPSE_SUBSCRIPTION_ID"] || "01234567-89ab-4def-0123-456789abcdef";
  const resourceGroupName = process.env["SYNAPSE_RESOURCE_GROUP"] || "ExampleResourceGroup";
  const workspaceName = "ExampleWorkspace";
  const sqlPoolName = "ExampleSqlPool";
  const metadataSyncConfiguration = { enabled: true };
  const credential = new DefaultAzureCredential();
  const client = new SynapseManagementClient(credential, subscriptionId);
  const result = await client.sqlPoolMetadataSyncConfigs.create(
    resourceGroupName,
    workspaceName,
    sqlPoolName,
    metadataSyncConfiguration
  );
  console.log(result);
}

async function main() {
  setMetadataSyncConfigForASqlAnalyticsPool();
}

main().catch(console.error);
