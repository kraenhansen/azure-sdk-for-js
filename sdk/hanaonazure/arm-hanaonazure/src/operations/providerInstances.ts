/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ProviderInstances } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { HanaManagementClient } from "../hanaManagementClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  ProviderInstance,
  ProviderInstancesListNextOptionalParams,
  ProviderInstancesListOptionalParams,
  ProviderInstancesListResponse,
  ProviderInstancesGetOptionalParams,
  ProviderInstancesGetResponse,
  ProviderInstancesCreateOptionalParams,
  ProviderInstancesCreateResponse,
  ProviderInstancesDeleteOptionalParams,
  ProviderInstancesListNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ProviderInstances operations. */
export class ProviderInstancesImpl implements ProviderInstances {
  private readonly client: HanaManagementClient;

  /**
   * Initialize a new instance of the class ProviderInstances class.
   * @param client Reference to the service client
   */
  constructor(client: HanaManagementClient) {
    this.client = client;
  }

  /**
   * Gets a list of provider instances in the specified SAP monitor. The operations returns various
   * properties of each provider instances.
   * @param resourceGroupName Name of the resource group.
   * @param sapMonitorName Name of the SAP monitor resource.
   * @param options The options parameters.
   */
  public list(
    resourceGroupName: string,
    sapMonitorName: string,
    options?: ProviderInstancesListOptionalParams
  ): PagedAsyncIterableIterator<ProviderInstance> {
    const iter = this.listPagingAll(resourceGroupName, sapMonitorName, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(resourceGroupName, sapMonitorName, options);
      }
    };
  }

  private async *listPagingPage(
    resourceGroupName: string,
    sapMonitorName: string,
    options?: ProviderInstancesListOptionalParams
  ): AsyncIterableIterator<ProviderInstance[]> {
    let result = await this._list(resourceGroupName, sapMonitorName, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(
        resourceGroupName,
        sapMonitorName,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    resourceGroupName: string,
    sapMonitorName: string,
    options?: ProviderInstancesListOptionalParams
  ): AsyncIterableIterator<ProviderInstance> {
    for await (const page of this.listPagingPage(
      resourceGroupName,
      sapMonitorName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of provider instances in the specified SAP monitor. The operations returns various
   * properties of each provider instances.
   * @param resourceGroupName Name of the resource group.
   * @param sapMonitorName Name of the SAP monitor resource.
   * @param options The options parameters.
   */
  private _list(
    resourceGroupName: string,
    sapMonitorName: string,
    options?: ProviderInstancesListOptionalParams
  ): Promise<ProviderInstancesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sapMonitorName, options },
      listOperationSpec
    );
  }

  /**
   * Gets properties of a provider instance for the specified subscription, resource group, SapMonitor
   * name, and resource name.
   * @param resourceGroupName Name of the resource group.
   * @param sapMonitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    sapMonitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesGetOptionalParams
  ): Promise<ProviderInstancesGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sapMonitorName, providerInstanceName, options },
      getOperationSpec
    );
  }

  /**
   * Creates a provider instance for the specified subscription, resource group, SapMonitor name, and
   * resource name.
   * @param resourceGroupName Name of the resource group.
   * @param sapMonitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param providerInstanceParameter Request body representing a provider instance
   * @param options The options parameters.
   */
  async beginCreate(
    resourceGroupName: string,
    sapMonitorName: string,
    providerInstanceName: string,
    providerInstanceParameter: ProviderInstance,
    options?: ProviderInstancesCreateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<ProviderInstancesCreateResponse>,
      ProviderInstancesCreateResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<ProviderInstancesCreateResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      {
        resourceGroupName,
        sapMonitorName,
        providerInstanceName,
        providerInstanceParameter,
        options
      },
      createOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Creates a provider instance for the specified subscription, resource group, SapMonitor name, and
   * resource name.
   * @param resourceGroupName Name of the resource group.
   * @param sapMonitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param providerInstanceParameter Request body representing a provider instance
   * @param options The options parameters.
   */
  async beginCreateAndWait(
    resourceGroupName: string,
    sapMonitorName: string,
    providerInstanceName: string,
    providerInstanceParameter: ProviderInstance,
    options?: ProviderInstancesCreateOptionalParams
  ): Promise<ProviderInstancesCreateResponse> {
    const poller = await this.beginCreate(
      resourceGroupName,
      sapMonitorName,
      providerInstanceName,
      providerInstanceParameter,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * Deletes a provider instance for the specified subscription, resource group, SapMonitor name, and
   * resource name.
   * @param resourceGroupName Name of the resource group.
   * @param sapMonitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param options The options parameters.
   */
  async beginDelete(
    resourceGroupName: string,
    sapMonitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesDeleteOptionalParams
  ): Promise<PollerLike<PollOperationState<void>, void>> {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<void> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { resourceGroupName, sapMonitorName, providerInstanceName, options },
      deleteOperationSpec
    );
    return new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
  }

  /**
   * Deletes a provider instance for the specified subscription, resource group, SapMonitor name, and
   * resource name.
   * @param resourceGroupName Name of the resource group.
   * @param sapMonitorName Name of the SAP monitor resource.
   * @param providerInstanceName Name of the provider instance.
   * @param options The options parameters.
   */
  async beginDeleteAndWait(
    resourceGroupName: string,
    sapMonitorName: string,
    providerInstanceName: string,
    options?: ProviderInstancesDeleteOptionalParams
  ): Promise<void> {
    const poller = await this.beginDelete(
      resourceGroupName,
      sapMonitorName,
      providerInstanceName,
      options
    );
    return poller.pollUntilDone();
  }

  /**
   * ListNext
   * @param resourceGroupName Name of the resource group.
   * @param sapMonitorName Name of the SAP monitor resource.
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    resourceGroupName: string,
    sapMonitorName: string,
    nextLink: string,
    options?: ProviderInstancesListNextOptionalParams
  ): Promise<ProviderInstancesListNextResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, sapMonitorName, nextLink, options },
      listNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/sapMonitors/{sapMonitorName}/providerInstances",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapMonitorName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/sapMonitors/{sapMonitorName}/providerInstances/{providerInstanceName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapMonitorName,
    Parameters.providerInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/sapMonitors/{sapMonitorName}/providerInstances/{providerInstanceName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderInstance
    },
    201: {
      bodyMapper: Mappers.ProviderInstance
    },
    202: {
      bodyMapper: Mappers.ProviderInstance
    },
    204: {
      bodyMapper: Mappers.ProviderInstance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.providerInstanceParameter,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapMonitorName,
    Parameters.providerInstanceName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/sapMonitors/{sapMonitorName}/providerInstances/{providerInstanceName}",
  httpMethod: "DELETE",
  responses: {
    200: {},
    201: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapMonitorName,
    Parameters.providerInstanceName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ProviderInstanceListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.sapMonitorName,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};