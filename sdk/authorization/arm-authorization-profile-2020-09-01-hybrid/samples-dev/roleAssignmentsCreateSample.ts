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
  RoleAssignmentCreateParameters,
  AuthorizationManagementClient
} from "@azure/arm-authorization-profile-2020-09-01-hybrid";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to Creates a role assignment.
 *
 * @summary Creates a role assignment.
 * x-ms-original-file: specification/authorization/resource-manager/Microsoft.Authorization/stable/2015-07-01/examples/PutRoleAssignment.json
 */
async function createRoleAssignment() {
  const subscriptionId =
    process.env["AUTHORIZATION_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const scope = "scope";
  const roleAssignmentName = "roleAssignmentName";
  const parameters: RoleAssignmentCreateParameters = {
    properties: {
      principalId: "d93a38bc-d029-4160-bfb0-fbda779ac214",
      roleDefinitionId:
        "/subscriptions/4004a9fd-d58e-48dc-aeb2-4a4aec58606f/providers/Microsoft.Authorization/roleDefinitions/de139f84-1756-47ae-9be6-808fbbe84772"
    }
  };
  const credential = new DefaultAzureCredential();
  const client = new AuthorizationManagementClient(credential, subscriptionId);
  const result = await client.roleAssignments.create(
    scope,
    roleAssignmentName,
    parameters
  );
  console.log(result);
}

async function main() {
  createRoleAssignment();
}

main().catch(console.error);
