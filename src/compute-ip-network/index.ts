// https://www.terraform.io/docs/providers/opc/r/compute_ip_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeIpNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network#description ComputeIpNetwork#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network#id ComputeIpNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network#ip_address_prefix ComputeIpNetwork#ip_address_prefix}
  */
  readonly ipAddressPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network#ip_network_exchange ComputeIpNetwork#ip_network_exchange}
  */
  readonly ipNetworkExchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network#name ComputeIpNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network#public_napt_enabled ComputeIpNetwork#public_napt_enabled}
  */
  readonly publicNaptEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network#tags ComputeIpNetwork#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network opc_compute_ip_network}
*/
export class ComputeIpNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_ip_network";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_network opc_compute_ip_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeIpNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeIpNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_ip_network',
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
    this._description = config.description;
    this._id = config.id;
    this._ipAddressPrefix = config.ipAddressPrefix;
    this._ipNetworkExchange = config.ipNetworkExchange;
    this._name = config.name;
    this._publicNaptEnabled = config.publicNaptEnabled;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_network_exchange - computed: false, optional: true, required: false
  private _ipNetworkExchange?: string; 
  public get ipNetworkExchange() {
    return this.getStringAttribute('ip_network_exchange');
  }
  public set ipNetworkExchange(value: string) {
    this._ipNetworkExchange = value;
  }
  public resetIpNetworkExchange() {
    this._ipNetworkExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkExchangeInput() {
    return this._ipNetworkExchange;
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

  // public_napt_enabled - computed: false, optional: true, required: false
  private _publicNaptEnabled?: boolean | cdktf.IResolvable; 
  public get publicNaptEnabled() {
    return this.getBooleanAttribute('public_napt_enabled');
  }
  public set publicNaptEnabled(value: boolean | cdktf.IResolvable) {
    this._publicNaptEnabled = value;
  }
  public resetPublicNaptEnabled() {
    this._publicNaptEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNaptEnabledInput() {
    return this._publicNaptEnabled;
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

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_address_prefix: cdktf.stringToTerraform(this._ipAddressPrefix),
      ip_network_exchange: cdktf.stringToTerraform(this._ipNetworkExchange),
      name: cdktf.stringToTerraform(this._name),
      public_napt_enabled: cdktf.booleanToTerraform(this._publicNaptEnabled),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
