/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { NetworkManagementClient } from "@azure/arm-network";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets associated load balancer network interfaces.
 *
 * @summary Gets associated load balancer network interfaces.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/LoadBalancerNetworkInterfaceListSimple.json
 */
async function loadBalancerNetworkInterfaceListSimple() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.loadBalancerNetworkInterfaces.list(
    resourceGroupName,
    loadBalancerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

loadBalancerNetworkInterfaceListSimple().catch(console.error);

/**
 * This sample demonstrates how to Gets associated load balancer network interfaces.
 *
 * @summary Gets associated load balancer network interfaces.
 * x-ms-original-file: specification/network/resource-manager/Microsoft.Network/stable/2022-01-01/examples/LoadBalancerNetworkInterfaceListVmss.json
 */
async function loadBalancerNetworkInterfaceListVmss() {
  const subscriptionId = "subid";
  const resourceGroupName = "testrg";
  const loadBalancerName = "lb";
  const credential = new DefaultAzureCredential();
  const client = new NetworkManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.loadBalancerNetworkInterfaces.list(
    resourceGroupName,
    loadBalancerName
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

loadBalancerNetworkInterfaceListVmss().catch(console.error);
