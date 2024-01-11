// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StorageContainerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#allowed_origins StorageContainer#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#exposed_headers StorageContainer#exposed_headers}
  */
  readonly exposedHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#id StorageContainer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#max_age StorageContainer#max_age}
  */
  readonly maxAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#metadata StorageContainer#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#name StorageContainer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#primary_key StorageContainer#primary_key}
  */
  readonly primaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_bytes StorageContainer#quota_bytes}
  */
  readonly quotaBytes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_count StorageContainer#quota_count}
  */
  readonly quotaCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#read_acls StorageContainer#read_acls}
  */
  readonly readAcls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#secondary_key StorageContainer#secondary_key}
  */
  readonly secondaryKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#write_acls StorageContainer#write_acls}
  */
  readonly writeAcls?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container opc_storage_container}
*/
export class StorageContainer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_storage_container";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StorageContainer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StorageContainer to import
  * @param importFromId The id of the existing StorageContainer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StorageContainer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_storage_container", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container opc_storage_container} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StorageContainerConfig
  */
  public constructor(scope: Construct, id: string, config: StorageContainerConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_storage_container',
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
    this._allowedOrigins = config.allowedOrigins;
    this._exposedHeaders = config.exposedHeaders;
    this._id = config.id;
    this._maxAge = config.maxAge;
    this._metadata = config.metadata;
    this._name = config.name;
    this._primaryKey = config.primaryKey;
    this._quotaBytes = config.quotaBytes;
    this._quotaCount = config.quotaCount;
    this._readAcls = config.readAcls;
    this._secondaryKey = config.secondaryKey;
    this._writeAcls = config.writeAcls;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_origins - computed: true, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // exposed_headers - computed: true, optional: true, required: false
  private _exposedHeaders?: string[]; 
  public get exposedHeaders() {
    return this.getListAttribute('exposed_headers');
  }
  public set exposedHeaders(value: string[]) {
    this._exposedHeaders = value;
  }
  public resetExposedHeaders() {
    this._exposedHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exposedHeadersInput() {
    return this._exposedHeaders;
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

  // max_age - computed: false, optional: true, required: false
  private _maxAge?: number; 
  public get maxAge() {
    return this.getNumberAttribute('max_age');
  }
  public set maxAge(value: number) {
    this._maxAge = value;
  }
  public resetMaxAge() {
    this._maxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAgeInput() {
    return this._maxAge;
  }

  // metadata - computed: false, optional: true, required: false
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

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: string; 
  public get primaryKey() {
    return this.getStringAttribute('primary_key');
  }
  public set primaryKey(value: string) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }

  // quota_bytes - computed: false, optional: true, required: false
  private _quotaBytes?: number; 
  public get quotaBytes() {
    return this.getNumberAttribute('quota_bytes');
  }
  public set quotaBytes(value: number) {
    this._quotaBytes = value;
  }
  public resetQuotaBytes() {
    this._quotaBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaBytesInput() {
    return this._quotaBytes;
  }

  // quota_count - computed: false, optional: true, required: false
  private _quotaCount?: number; 
  public get quotaCount() {
    return this.getNumberAttribute('quota_count');
  }
  public set quotaCount(value: number) {
    this._quotaCount = value;
  }
  public resetQuotaCount() {
    this._quotaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaCountInput() {
    return this._quotaCount;
  }

  // read_acls - computed: true, optional: true, required: false
  private _readAcls?: string[]; 
  public get readAcls() {
    return this.getListAttribute('read_acls');
  }
  public set readAcls(value: string[]) {
    this._readAcls = value;
  }
  public resetReadAcls() {
    this._readAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readAclsInput() {
    return this._readAcls;
  }

  // secondary_key - computed: false, optional: true, required: false
  private _secondaryKey?: string; 
  public get secondaryKey() {
    return this.getStringAttribute('secondary_key');
  }
  public set secondaryKey(value: string) {
    this._secondaryKey = value;
  }
  public resetSecondaryKey() {
    this._secondaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryKeyInput() {
    return this._secondaryKey;
  }

  // write_acls - computed: true, optional: true, required: false
  private _writeAcls?: string[]; 
  public get writeAcls() {
    return this.getListAttribute('write_acls');
  }
  public set writeAcls(value: string[]) {
    this._writeAcls = value;
  }
  public resetWriteAcls() {
    this._writeAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeAclsInput() {
    return this._writeAcls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrigins),
      exposed_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exposedHeaders),
      id: cdktf.stringToTerraform(this._id),
      max_age: cdktf.numberToTerraform(this._maxAge),
      metadata: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadata),
      name: cdktf.stringToTerraform(this._name),
      primary_key: cdktf.stringToTerraform(this._primaryKey),
      quota_bytes: cdktf.numberToTerraform(this._quotaBytes),
      quota_count: cdktf.numberToTerraform(this._quotaCount),
      read_acls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._readAcls),
      secondary_key: cdktf.stringToTerraform(this._secondaryKey),
      write_acls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._writeAcls),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOrigins),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exposed_headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exposedHeaders),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_age: {
        value: cdktf.numberToHclTerraform(this._maxAge),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_key: {
        value: cdktf.stringToHclTerraform(this._primaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quota_bytes: {
        value: cdktf.numberToHclTerraform(this._quotaBytes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      quota_count: {
        value: cdktf.numberToHclTerraform(this._quotaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_acls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._readAcls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secondary_key: {
        value: cdktf.stringToHclTerraform(this._secondaryKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      write_acls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._writeAcls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
