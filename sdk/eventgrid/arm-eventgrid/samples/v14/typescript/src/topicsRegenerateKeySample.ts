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
  TopicRegenerateKeyRequest,
  EventGridManagementClient
} from "@azure/arm-eventgrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Regenerate a shared access key for a topic.
 *
 * @summary Regenerate a shared access key for a topic.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2022-06-15/examples/Topics_RegenerateKey.json
 */
async function topicsRegenerateKey() {
  const subscriptionId =
    process.env["EVENTGRID_SUBSCRIPTION_ID"] ||
    "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const resourceGroupName =
    process.env["EVENTGRID_RESOURCE_GROUP"] || "examplerg";
  const topicName = "exampletopic2";
  const regenerateKeyRequest: TopicRegenerateKeyRequest = { keyName: "key1" };
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential, subscriptionId);
  const result = await client.topics.beginRegenerateKeyAndWait(
    resourceGroupName,
    topicName,
    regenerateKeyRequest
  );
  console.log(result);
}

async function main() {
  topicsRegenerateKey();
}

main().catch(console.error);
