/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Deletes the specified DDoS protection plan.
 *
 * @summary Deletes the specified DDoS protection plan.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-07-01/examples/DdosProtectionPlanDelete.json
 */
async function deleteDDoSProtectionPlan() {
  const subscriptionId = "subid";
  const resourceGroupName = "rg1";
  const ddosProtectionPlanName = "test-plan";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const result = await client.ddosProtectionPlans.beginDeleteAndWait(
    resourceGroupName,
    ddosProtectionPlanName
  );
  console.log(result);
}

deleteDDoSProtectionPlan().catch(console.error);
