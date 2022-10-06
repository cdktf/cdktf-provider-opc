// https://www.terraform.io/docs/providers/opc/r/compute_route
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRouteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_route#admin_distance ComputeRoute#admin_distance}
  */
  readonly adminDistance?: number;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_route#description ComputeRoute#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_route#id ComputeRoute#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_route#ip_address_prefix ComputeRoute#ip_address_prefix}
  */
  readonly ipAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_route#name ComputeRoute#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_route#next_hop_vnic_set ComputeRoute#next_hop_vnic_set}
  */
  readonly nextHopVnicSet: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_route#tags ComputeRoute#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_route opc_compute_route}
*/
export class ComputeRoute extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_route";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opc/r/compute_route opc_compute_route} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRouteConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRouteConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_route',
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
    this._adminDistance = config.adminDistance;
    this._description = config.description;
    this._id = config.id;
    this._ipAddressPrefix = config.ipAddressPrefix;
    this._name = config.name;
    this._nextHopVnicSet = config.nextHopVnicSet;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_distance - computed: false, optional: true, required: false
  private _adminDistance?: number; 
  public get adminDistance() {
    return this.getNumberAttribute('admin_distance');
  }
  public set adminDistance(value: number) {
    this._adminDistance = value;
  }
  public resetAdminDistance() {
    this._adminDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminDistanceInput() {
    return this._adminDistance;
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

  // ip_address_prefix - computed: false, optional: false, required: true
  private _ipAddressPrefix?: string; 
  public get ipAddressPrefix() {
    return this.getStringAttribute('ip_address_prefix');
  }
  public set ipAddressPrefix(value: string) {
    this._ipAddressPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressPrefixInput() {
    return this._ipAddressPrefix;
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

  // next_hop_vnic_set - computed: false, optional: false, required: true
  private _nextHopVnicSet?: string; 
  public get nextHopVnicSet() {
    return this.getStringAttribute('next_hop_vnic_set');
  }
  public set nextHopVnicSet(value: string) {
    this._nextHopVnicSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopVnicSetInput() {
    return this._nextHopVnicSet;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin_distance: cdktf.numberToTerraform(this._adminDistance),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_address_prefix: cdktf.stringToTerraform(this._ipAddressPrefix),
      name: cdktf.stringToTerraform(this._name),
      next_hop_vnic_set: cdktf.stringToTerraform(this._nextHopVnicSet),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
