/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";
import {
  DirectoryCreateOptionalParams,
  DirectoryCreateResponse,
  DirectoryGetPropertiesOptionalParams,
  DirectoryGetPropertiesResponse,
  DirectoryDeleteOptionalParams,
  DirectoryDeleteResponse,
  DirectorySetPropertiesOptionalParams,
  DirectorySetPropertiesResponse,
  DirectorySetMetadataOptionalParams,
  DirectorySetMetadataResponse,
  DirectoryListFilesAndDirectoriesSegmentOptionalParams,
  DirectoryListFilesAndDirectoriesSegmentResponse,
  DirectoryListHandlesOptionalParams,
  DirectoryListHandlesResponse,
  DirectoryForceCloseHandlesOptionalParams,
  DirectoryForceCloseHandlesResponse,
  DirectoryRenameOptionalParams,
  DirectoryRenameResponse
} from "../models";

/** Class representing a Directory. */
export class Directory {
  private readonly client: StorageClientContext;

  /**
   * Initialize a new instance of the class Directory class.
   * @param client Reference to the service client
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * Creates a new directory under the specified share or parent directory.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   *                       ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param options The options parameters.
   */
  create(
    fileAttributes: string,
    options?: DirectoryCreateOptionalParams
  ): Promise<DirectoryCreateResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      fileAttributes,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      createOperationSpec
    ) as Promise<DirectoryCreateResponse>;
  }

  /**
   * Returns all system properties for the specified directory, and can also be used to check the
   * existence of a directory. The data returned does not include the files in the directory or any
   * subdirectories.
   * @param options The options parameters.
   */
  getProperties(
    options?: DirectoryGetPropertiesOptionalParams
  ): Promise<DirectoryGetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      getPropertiesOperationSpec
    ) as Promise<DirectoryGetPropertiesResponse>;
  }

  /**
   * Removes the specified empty directory. Note that the directory must be empty before it can be
   * deleted.
   * @param options The options parameters.
   */
  delete(
    options?: DirectoryDeleteOptionalParams
  ): Promise<DirectoryDeleteResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      deleteOperationSpec
    ) as Promise<DirectoryDeleteResponse>;
  }

  /**
   * Sets properties on the directory.
   * @param fileAttributes If specified, the provided file attributes shall be set. Default value:
   *                       ‘Archive’ for file and ‘Directory’ for directory. ‘None’ can also be specified as default.
   * @param options The options parameters.
   */
  setProperties(
    fileAttributes: string,
    options?: DirectorySetPropertiesOptionalParams
  ): Promise<DirectorySetPropertiesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      fileAttributes,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setPropertiesOperationSpec
    ) as Promise<DirectorySetPropertiesResponse>;
  }

  /**
   * Updates user defined metadata for the specified directory.
   * @param options The options parameters.
   */
  setMetadata(
    options?: DirectorySetMetadataOptionalParams
  ): Promise<DirectorySetMetadataResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      setMetadataOperationSpec
    ) as Promise<DirectorySetMetadataResponse>;
  }

  /**
   * Returns a list of files or directories under the specified share or directory. It lists the contents
   * only for a single level of the directory hierarchy.
   * @param options The options parameters.
   */
  listFilesAndDirectoriesSegment(
    options?: DirectoryListFilesAndDirectoriesSegmentOptionalParams
  ): Promise<DirectoryListFilesAndDirectoriesSegmentResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listFilesAndDirectoriesSegmentOperationSpec
    ) as Promise<DirectoryListFilesAndDirectoriesSegmentResponse>;
  }

  /**
   * Lists handles for directory.
   * @param options The options parameters.
   */
  listHandles(
    options?: DirectoryListHandlesOptionalParams
  ): Promise<DirectoryListHandlesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      listHandlesOperationSpec
    ) as Promise<DirectoryListHandlesResponse>;
  }

  /**
   * Closes all handles open for given directory.
   * @param handleId Specifies handle ID opened on the file or directory to be closed. Asterisk (‘*’) is
   *                 a wildcard that specifies all handles.
   * @param options The options parameters.
   */
  forceCloseHandles(
    handleId: string,
    options?: DirectoryForceCloseHandlesOptionalParams
  ): Promise<DirectoryForceCloseHandlesResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      handleId,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      forceCloseHandlesOperationSpec
    ) as Promise<DirectoryForceCloseHandlesResponse>;
  }

  /**
   * Renames a directory
   * @param renameSource Required. Specifies the URI-style path of the source file, up to 2 KB in length.
   * @param options The options parameters.
   */
  rename(
    renameSource: string,
    options?: DirectoryRenameOptionalParams
  ): Promise<DirectoryRenameResponse> {
    const operationArguments: coreHttp.OperationArguments = {
      renameSource,
      options: coreHttp.operationOptionsToRequestOptionsBase(options || {})
    };
    return this.client.sendOperationRequest(
      operationArguments,
      renameOperationSpec
    ) as Promise<DirectoryRenameResponse>;
  }
}
// Operation Specifications
const xmlSerializer = new coreHttp.Serializer(Mappers, /* isXml */ true);

const createOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "PUT",
  responses: {
    201: {
      headersMapper: Mappers.DirectoryCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.DirectoryCreateExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes,
    Parameters.fileCreatedOn,
    Parameters.fileLastWriteOn,
    Parameters.fileChangeOn
  ],
  isXML: true,
  serializer: xmlSerializer
};
const getPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "GET",
  responses: {
    200: {
      headersMapper: Mappers.DirectoryGetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.DirectoryGetPropertiesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.shareSnapshot,
    Parameters.restype2
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const deleteOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.DirectoryDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.DirectoryDeleteExceptionHeaders
    }
  },
  queryParameters: [Parameters.timeoutInSeconds, Parameters.restype2],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setPropertiesOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.DirectorySetPropertiesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.DirectorySetPropertiesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.comp,
    Parameters.timeoutInSeconds,
    Parameters.restype2
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.fileAttributes,
    Parameters.fileCreatedOn,
    Parameters.fileLastWriteOn,
    Parameters.fileChangeOn
  ],
  isXML: true,
  serializer: xmlSerializer
};
const setMetadataOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.DirectorySetMetadataHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.DirectorySetMetadataExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp5,
    Parameters.restype2
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
const listFilesAndDirectoriesSegmentOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListFilesAndDirectoriesSegmentResponse,
      headersMapper: Mappers.DirectoryListFilesAndDirectoriesSegmentHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper:
        Mappers.DirectoryListFilesAndDirectoriesSegmentExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp1,
    Parameters.prefix,
    Parameters.marker,
    Parameters.maxResults,
    Parameters.shareSnapshot,
    Parameters.restype2,
    Parameters.include1
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.includeExtendedInfo
  ],
  isXML: true,
  serializer: xmlSerializer
};
const listHandlesOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListHandlesResponse,
      headersMapper: Mappers.DirectoryListHandlesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.DirectoryListHandlesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.maxResults,
    Parameters.shareSnapshot,
    Parameters.comp9
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.recursive
  ],
  isXML: true,
  serializer: xmlSerializer
};
const forceCloseHandlesOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.DirectoryForceCloseHandlesHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.DirectoryForceCloseHandlesExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.marker,
    Parameters.shareSnapshot,
    Parameters.comp10
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.recursive,
    Parameters.handleId
  ],
  isXML: true,
  serializer: xmlSerializer
};
const renameOperationSpec: coreHttp.OperationSpec = {
  path: "/{shareName}/{directory}",
  httpMethod: "PUT",
  responses: {
    200: {
      headersMapper: Mappers.DirectoryRenameHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.DirectoryRenameExceptionHeaders
    }
  },
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.restype2,
    Parameters.comp11
  ],
  urlParameters: [Parameters.url],
  headerParameters: [
    Parameters.version,
    Parameters.accept1,
    Parameters.metadata,
    Parameters.fileRequestIntent,
    Parameters.allowTrailingDot,
    Parameters.filePermission,
    Parameters.filePermissionKey1,
    Parameters.renameSource,
    Parameters.replaceIfExists,
    Parameters.ignoreReadOnly,
    Parameters.sourceLeaseId,
    Parameters.destinationLeaseId,
    Parameters.fileAttributes1,
    Parameters.fileCreationTime,
    Parameters.fileLastWriteTime,
    Parameters.fileChangeTime,
    Parameters.allowSourceTrailingDot
  ],
  isXML: true,
  serializer: xmlSerializer
};
