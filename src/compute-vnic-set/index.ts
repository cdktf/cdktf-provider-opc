// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeVnicSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set#applied_acls ComputeVnicSet#applied_acls}
  */
  readonly appliedAcls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set#description ComputeVnicSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set#id ComputeVnicSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set#name ComputeVnicSet#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set#tags ComputeVnicSet#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set#virtual_nics ComputeVnicSet#virtual_nics}
  */
  readonly virtualNics?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set opc_compute_vnic_set}
*/
export class ComputeVnicSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_vnic_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeVnicSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeVnicSet to import
  * @param importFromId The id of the existing ComputeVnicSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeVnicSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_compute_vnic_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vnic_set opc_compute_vnic_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeVnicSetConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeVnicSetConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_vnic_set',
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
    this._appliedAcls = config.appliedAcls;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._tags = config.tags;
    this._virtualNics = config.virtualNics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applied_acls - computed: false, optional: true, required: false
  private _appliedAcls?: string[]; 
  public get appliedAcls() {
    return this.getListAttribute('applied_acls');
  }
  public set appliedAcls(value: string[]) {
    this._appliedAcls = value;
  }
  public resetAppliedAcls() {
    this._appliedAcls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliedAclsInput() {
    return this._appliedAcls;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // virtual_nics - computed: true, optional: true, required: false
  private _virtualNics?: string[]; 
  public get virtualNics() {
    return this.getListAttribute('virtual_nics');
  }
  public set virtualNics(value: string[]) {
    this._virtualNics = value;
  }
  public resetVirtualNics() {
    this._virtualNics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNicsInput() {
    return this._virtualNics;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      applied_acls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appliedAcls),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      virtual_nics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualNics),
    };
  }
}
