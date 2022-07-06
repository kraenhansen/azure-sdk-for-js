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
  PrivateLinkConnectionApprovalRequestResource,
  WebSiteManagementClient
} from "@azure/arm-appservice";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Description for Approves or rejects a private endpoint connection
 *
 * @summary Description for Approves or rejects a private endpoint connection
 * x-ms-original-file: specification/web/resource-manager/Microsoft.Web/stable/2022-03-01/examples/ApproveRejectSitePrivateEndpointConnection.json
 */
async function approvesOrRejectsAPrivateEndpointConnectionForASite() {
  const subscriptionId = "34adfa4f-cedf-4dc0-ba29-b6d1a69ab345";
  const resourceGroupName = "rg";
  const name = "testSite";
  const privateEndpointConnectionName = "connection";
  const privateEndpointWrapper: PrivateLinkConnectionApprovalRequestResource = {
    privateLinkServiceConnectionState: {
      description: "Approved by admin.",
      actionsRequired: "",
      status: "Approved"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new WebSiteManagementClient(credential, subscriptionId);
  const result = await client.webApps.beginApproveOrRejectPrivateEndpointConnectionAndWait(
    resourceGroupName,
    name,
    privateEndpointConnectionName,
    privateEndpointWrapper
  );
  console.log(result);
}

approvesOrRejectsAPrivateEndpointConnectionForASite().catch(console.error);
