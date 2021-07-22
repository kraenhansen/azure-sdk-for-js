/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { FileServices } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageManagementClientContext } from "../storageManagementClientContext";
import {
  FileServicesListOptionalParams,
  FileServicesListResponse,
  FileServiceProperties,
  FileServicesSetServicePropertiesOptionalParams,
  FileServicesSetServicePropertiesResponse,
  FileServicesGetServicePropertiesOptionalParams,
  FileServicesGetServicePropertiesResponse
} from "../models";

/** Class representing a FileServices. */
export class FileServicesImpl implements FileServices {
  private readonly client: StorageManagementClientContext;

  /**
   * Initialize a new instance of the class FileServices class.
   * @param client Reference to the service client
   */
  constructor(client: StorageManagementClientContext) {
    this.client = client;
  }

  /**
   * List all file services in storage accounts
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    accountName: string,
    options?: FileServicesListOptionalParams
  ): Promise<FileServicesListResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      listOperationSpec
    );
  }

  /**
   * Sets the properties of file services in storage accounts, including CORS (Cross-Origin Resource
   * Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param parameters The properties of file services in storage accounts, including CORS (Cross-Origin
   *                   Resource Sharing) rules.
   * @param options The options parameters.
   */
  setServiceProperties(
    resourceGroupName: string,
    accountName: string,
    parameters: FileServiceProperties,
    options?: FileServicesSetServicePropertiesOptionalParams
  ): Promise<FileServicesSetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, parameters, options },
      setServicePropertiesOperationSpec
    );
  }

  /**
   * Gets the properties of file services in storage accounts, including CORS (Cross-Origin Resource
   * Sharing) rules.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param accountName The name of the storage account within the specified resource group. Storage
   *                    account names must be between 3 and 24 characters in length and use numbers and lower-case letters
   *                    only.
   * @param options The options parameters.
   */
  getServiceProperties(
    resourceGroupName: string,
    accountName: string,
    options?: FileServicesGetServicePropertiesOptionalParams
  ): Promise<FileServicesGetServicePropertiesResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, accountName, options },
      getServicePropertiesOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileServiceItems
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const setServicePropertiesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/{FileServicesName}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.FileServiceProperties
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  requestBody: Parameters.parameters8,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.fileServicesName
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getServicePropertiesOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Storage/storageAccounts/{accountName}/fileServices/{FileServicesName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FileServiceProperties
    },
    default: {
      bodyMapper: Mappers.CloudErrorAutoGenerated
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.fileServicesName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
