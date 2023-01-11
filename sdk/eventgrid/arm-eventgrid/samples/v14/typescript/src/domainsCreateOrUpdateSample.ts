/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Domain, EventGridManagementClient } from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Asynchronously creates or updates a new domain with the specified parameters.
 *
 * @summary Asynchronously creates or updates a new domain with the specified parameters.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/Domains_CreateOrUpdate.json
 */
async function domainsCreateOrUpdate() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const domainName = "exampledomain1";
  const domainInfo: Domain = {
    inboundIpRules: [
      { action: "Allow", ipMask: "12.18.30.15" },
      { action: "Allow", ipMask: "12.18.176.1" }
    ],
    location: "westus2",
    publicNetworkAccess: "Enabled",
    tags: { tag1: "value1", tag2: "value2" }
  };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.domains.beginCreateOrUpdateAndWait(
    resourceGroupName,
    domainName,
    domainInfo
  );
  console.log(result);
}

async function main() {
  domainsCreateOrUpdate();
}

main().catch(console.error);
