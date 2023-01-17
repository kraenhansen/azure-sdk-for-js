/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { MobileNetworkManagementClient } from "@azure/arm-mobilenetwork";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Roll back the specified packet core control plane to the previous version, "rollbackVersion". Multiple consecutive rollbacks are not possible. This action may cause a service outage.
 *
 * @summary Roll back the specified packet core control plane to the previous version, "rollbackVersion". Multiple consecutive rollbacks are not possible. This action may cause a service outage.
 * x-ms-original-file: specification/mobilenetwork/resource-manager/Microsoft.MobileNetwork/stable/2022-11-01/examples/PacketCoreControlPlaneRollback.json
 */
async function rollbackPacketCoreControlPlane() {
  const subscriptionId =
    process.env["MOBILENETWORK_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName =
    process.env["MOBILENETWORK_RESOURCE_GROUP"] || "rg1";
  const packetCoreControlPlaneName = "TestPacketCoreCP";
  const credential = new DefaultAzureCredential();
  const client = new MobileNetworkManagementClient(credential, subscriptionId);
  const result = await client.packetCoreControlPlanes.beginRollbackAndWait(
    resourceGroupName,
    packetCoreControlPlaneName
  );
  console.log(result);
}

async function main() {
  rollbackPacketCoreControlPlane();
}

main().catch(console.error);
