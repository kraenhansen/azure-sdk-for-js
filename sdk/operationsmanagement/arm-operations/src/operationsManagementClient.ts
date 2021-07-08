/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { OperationsManagementClientContext } from "./operationsManagementClientContext";


class OperationsManagementClient extends OperationsManagementClientContext {
  // Operation groups
  solutions: operations.Solutions;
  managementAssociations: operations.ManagementAssociations;
  managementConfigurations: operations.ManagementConfigurations;
  operations: operations.Operations;

  /**
   * Initializes a new instance of the OperationsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Gets subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param providerName Provider name for the parent resource.
   * @param resourceType Resource type for the parent resource
   * @param resourceName Parent resource name.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, providerName: string, resourceType: string, resourceName: string, options?: Models.OperationsManagementClientOptions) {
    super(credentials, subscriptionId, providerName, resourceType, resourceName, options);
    this.solutions = new operations.Solutions(this);
    this.managementAssociations = new operations.ManagementAssociations(this);
    this.managementConfigurations = new operations.ManagementConfigurations(this);
    this.operations = new operations.Operations(this);
  }
}

// Operation Specifications

export {
  OperationsManagementClient,
  OperationsManagementClientContext,
  Models as OperationsManagementModels,
  Mappers as OperationsManagementMappers
};
export * from "./operations";
