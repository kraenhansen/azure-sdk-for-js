/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  StepsCreateOrUpdateOptionalParams,
  StepsCreateOrUpdateResponse,
  StepsGetOptionalParams,
  StepsGetResponse,
  StepsDeleteOptionalParams,
  StepsListOptionalParams,
  StepsListResponse
} from "../models";

/** Interface representing a Steps. */
export interface Steps {
  /**
   * Synchronously creates a new step or updates an existing step.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param stepName The name of the deployment step.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    stepName: string,
    options?: StepsCreateOrUpdateOptionalParams
  ): Promise<StepsCreateOrUpdateResponse>;
  /**
   * Gets the step.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param stepName The name of the deployment step.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    stepName: string,
    options?: StepsGetOptionalParams
  ): Promise<StepsGetResponse>;
  /**
   * Deletes the step.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param stepName The name of the deployment step.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    stepName: string,
    options?: StepsDeleteOptionalParams
  ): Promise<void>;
  /**
   * Lists the steps in a resource group.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: StepsListOptionalParams
  ): Promise<StepsListResponse>;
}