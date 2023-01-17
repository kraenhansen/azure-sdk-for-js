/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ManagementLockClient } from "@azure/arm-locks-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Lists all of the available Microsoft.Authorization REST API operations.
 *
 * @summary Lists all of the available Microsoft.Authorization REST API operations.
 * x-ms-original-file: specification/resources/resource-manager/Microsoft.Authorization/stable/2016-09-01/examples/ListProviderOperations.json
 */
async function listProviderOperations() {
  const subscriptionId =
    process.env["LOCKS_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new ManagementLockClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.authorizationOperations.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  listProviderOperations();
}

main().catch(console.error);
