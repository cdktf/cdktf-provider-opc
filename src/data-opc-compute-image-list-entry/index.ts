// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpcComputeImageListEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#entry DataOpcComputeImageListEntry#entry}
  */
  readonly entry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#id DataOpcComputeImageListEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#image_list DataOpcComputeImageListEntry#image_list}
  */
  readonly imageList: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#version DataOpcComputeImageListEntry#version}
  */
  readonly version: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry opc_compute_image_list_entry}
*/
export class DataOpcComputeImageListEntry extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_image_list_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpcComputeImageListEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpcComputeImageListEntry to import
  * @param importFromId The id of the existing DataOpcComputeImageListEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpcComputeImageListEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_compute_image_list_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry opc_compute_image_list_entry} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpcComputeImageListEntryConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpcComputeImageListEntryConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_image_list_entry',
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
    this._entry = config.entry;
    this._id = config.id;
    this._imageList = config.imageList;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // entry - computed: false, optional: true, required: false
  private _entry?: number; 
  public get entry() {
    return this.getNumberAttribute('entry');
  }
  public set entry(value: number) {
    this._entry = value;
  }
  public resetEntry() {
    this._entry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInput() {
    return this._entry;
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

  // image_list - computed: false, optional: false, required: true
  private _imageList?: string; 
  public get imageList() {
    return this.getStringAttribute('image_list');
  }
  public set imageList(value: string) {
    this._imageList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageListInput() {
    return this._imageList;
  }

  // machine_images - computed: true, optional: false, required: false
  public get machineImages() {
    return this.getListAttribute('machine_images');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // version - computed: false, optional: false, required: true
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entry: cdktf.numberToTerraform(this._entry),
      id: cdktf.stringToTerraform(this._id),
      image_list: cdktf.stringToTerraform(this._imageList),
      version: cdktf.numberToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entry: {
        value: cdktf.numberToHclTerraform(this._entry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_list: {
        value: cdktf.stringToHclTerraform(this._imageList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.numberToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
