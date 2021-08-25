/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
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
import { TemplateSpecsClientContext } from "./templateSpecsClientContext";


class TemplateSpecsClient extends TemplateSpecsClientContext {
  // Operation groups
  templateSpecs: operations.TemplateSpecs;
  templateSpecVersions: operations.TemplateSpecVersions;

  /**
   * Initializes a new instance of the TemplateSpecsClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId Subscription Id which forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.TemplateSpecsClientOptions) {
    super(credentials, subscriptionId, options);
    this.templateSpecs = new operations.TemplateSpecs(this);
    this.templateSpecVersions = new operations.TemplateSpecVersions(this);
  }
}

// Operation Specifications

export {
  TemplateSpecsClient,
  TemplateSpecsClientContext,
  Models as TemplateSpecsModels,
  Mappers as TemplateSpecsMappers
};
export * from "./operations";
