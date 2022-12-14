/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { NetworkManagementClient } = require("@azure/arm-network");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Gets the specified service Endpoint Policies in a specified resource group.
 *
 * @summary Gets the specified service Endpoint Policies in a specified resource group.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/ServiceEndpointPolicyGet.json
 */
async function getServiceEndPointPolicy() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const serviceEndpointPolicyName = "testServiceEndpointPolicy";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.serviceEndpointPolicies.get(
    resourceGroupName,
    serviceEndpointPolicyName
  );
  console.log(result);
}

getServiceEndPointPolicy().catch(console.error);
