/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the storage container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#container StorageObject#container}
  */
  readonly container: string;
  /**
  * Raw content in string-form of the data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content StorageObject#content}
  */
  readonly content?: string;
  /**
  * Overrides the behavior of the browser
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_disposition StorageObject#content_disposition}
  */
  readonly contentDisposition?: string;
  /**
  * Set the content-encoding metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_encoding StorageObject#content_encoding}
  */
  readonly contentEncoding?: string;
  /**
  * Set the MIME type for the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_type StorageObject#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}
  */
  readonly copyFrom?: string;
  /**
  * The date and time in UNIX Epoch time stamp format when the system removes the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#delete_at StorageObject#delete_at}
  */
  readonly deleteAt?: number;
  /**
  * MD5 checksum value of the request body. Unquoted. Strongly Recommended
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#etag StorageObject#etag}
  */
  readonly etag?: string;
  /**
  * File path for the content to use for data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#file StorageObject#file}
  */
  readonly file?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The object metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#metadata StorageObject#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Name of the storage object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#name StorageObject#name}
  */
  readonly name: string;
  /**
  * Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#transfer_encoding StorageObject#transfer_encoding}
  */
  readonly transferEncoding?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object opc_storage_object}
*/
export class StorageObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_storage_object";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object opc_storage_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageObjectConfig
  */
  public constructor(scope: Construct, id: string, config: StorageObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_storage_object',
      terraformGeneratorMetadata: {
        providerName: 'opc',
        providerVersion: '1.4.1',
        providerVersionConstraint: '~> 1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._container = config.container;
    this._content = config.content;
    this._contentDisposition = config.contentDisposition;
    this._contentEncoding = config.contentEncoding;
    this._contentType = config.contentType;
    this._copyFrom = config.copyFrom;
    this._deleteAt = config.deleteAt;
    this._etag = config.etag;
    this._file = config.file;
    this._id = config.id;
    this._metadata = config.metadata;
    this._name = config.name;
    this._transferEncoding = config.transferEncoding;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_ranges - computed: true, optional: false, required: false
  public get acceptRanges() {
    return this.getStringAttribute('accept_ranges');
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_disposition - computed: false, optional: true, required: false
  private _contentDisposition?: string; 
  public get contentDisposition() {
    return this.getStringAttribute('content_disposition');
  }
  public set contentDisposition(value: string) {
    this._contentDisposition = value;
  }
  public resetContentDisposition() {
    this._contentDisposition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentDispositionInput() {
    return this._contentDisposition;
  }

  // content_encoding - computed: false, optional: true, required: false
  private _contentEncoding?: string; 
  public get contentEncoding() {
    return this.getStringAttribute('content_encoding');
  }
  public set contentEncoding(value: string) {
    this._contentEncoding = value;
  }
  public resetContentEncoding() {
    this._contentEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentEncodingInput() {
    return this._contentEncoding;
  }

  // content_length - computed: true, optional: false, required: false
  public get contentLength() {
    return this.getNumberAttribute('content_length');
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // copy_from - computed: false, optional: true, required: false
  private _copyFrom?: string; 
  public get copyFrom() {
    return this.getStringAttribute('copy_from');
  }
  public set copyFrom(value: string) {
    this._copyFrom = value;
  }
  public resetCopyFrom() {
    this._copyFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copyFromInput() {
    return this._copyFrom;
  }

  // delete_at - computed: true, optional: true, required: false
  private _deleteAt?: number; 
  public get deleteAt() {
    return this.getNumberAttribute('delete_at');
  }
  public set deleteAt(value: number) {
    this._deleteAt = value;
  }
  public resetDeleteAt() {
    this._deleteAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteAtInput() {
    return this._deleteAt;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
  }

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // object_manifest - computed: true, optional: false, required: false
  public get objectManifest() {
    return this.getStringAttribute('object_manifest');
  }

  // timestamp - computed: true, optional: false, required: false
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }

  // transaction_id - computed: true, optional: false, required: false
  public get transactionId() {
    return this.getStringAttribute('transaction_id');
  }

  // transfer_encoding - computed: false, optional: true, required: false
  private _transferEncoding?: string; 
  public get transferEncoding() {
    return this.getStringAttribute('transfer_encoding');
  }
  public set transferEncoding(value: string) {
    this._transferEncoding = value;
  }
  public resetTransferEncoding() {
    this._transferEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferEncodingInput() {
    return this._transferEncoding;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container: cdktf.stringToTerraform(this._container),
      content: cdktf.stringToTerraform(this._content),
      content_disposition: cdktf.stringToTerraform(this._contentDisposition),
      content_encoding: cdktf.stringToTerraform(this._contentEncoding),
      content_type: cdktf.stringToTerraform(this._contentType),
      copy_from: cdktf.stringToTerraform(this._copyFrom),
      delete_at: cdktf.numberToTerraform(this._deleteAt),
      etag: cdktf.stringToTerraform(this._etag),
      file: cdktf.stringToTerraform(this._file),
      id: cdktf.stringToTerraform(this._id),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      transfer_encoding: cdktf.stringToTerraform(this._transferEncoding),
    };
  }
}
