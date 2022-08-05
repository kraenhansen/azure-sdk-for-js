/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  NetworkManagerDeploymentStatusParameter,
  NetworkManagementClient
} from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Post to List of Network Manager Deployment Status.
 *
 * @summary Post to List of Network Manager Deployment Status.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/NetworkManagerDeploymentStatusList.json
 */
async function networkManagerDeploymentStatusList() {
  const subscriptionId = "subscriptionC";
  const resourceGroupName = "resoureGroupSample";
  const networkManagerName = "testNetworkManager";
  const parameters: NetworkManagerDeploymentStatusParameter = {
    deploymentTypes: ["Connectivity", "AdminPolicy"],
    regions: ["eastus", "westus"],
    skipToken: "FakeSkipTokenCode"
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.networkManagerDeploymentStatusOperations.list(
    resourceGroupName,
    networkManagerName,
    parameters
  );
  console.log(result);
}

networkManagerDeploymentStatusList().catch(console.error);
