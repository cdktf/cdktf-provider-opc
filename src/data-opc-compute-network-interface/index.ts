/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_network_interface
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpcComputeNetworkInterfaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_network_interface#id DataOpcComputeNetworkInterface#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}
  */
  readonly instanceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}
  */
  readonly interface: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_network_interface opc_compute_network_interface}
*/
export class DataOpcComputeNetworkInterface extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_network_interface";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpcComputeNetworkInterface resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpcComputeNetworkInterface to import
  * @param importFromId The id of the existing DataOpcComputeNetworkInterface that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_network_interface#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpcComputeNetworkInterface to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_compute_network_interface", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_network_interface opc_compute_network_interface} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpcComputeNetworkInterfaceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpcComputeNetworkInterfaceConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_network_interface',
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
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._instanceName = config.instanceName;
    this._interface = config.interface;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns - computed: true, optional: false, required: false
  public get dns() {
    return this.getListAttribute('dns');
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // instance_name - computed: false, optional: false, required: true
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // ip_network - computed: true, optional: false, required: false
  public get ipNetwork() {
    return this.getStringAttribute('ip_network');
  }

  // is_default_gateway - computed: true, optional: false, required: false
  public get isDefaultGateway() {
    return this.getBooleanAttribute('is_default_gateway');
  }

  // mac_address - computed: true, optional: false, required: false
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }

  // model - computed: true, optional: false, required: false
  public get model() {
    return this.getStringAttribute('model');
  }

  // name_servers - computed: true, optional: false, required: false
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getListAttribute('nat');
  }

  // search_domains - computed: true, optional: false, required: false
  public get searchDomains() {
    return this.getListAttribute('search_domains');
  }

  // sec_lists - computed: true, optional: false, required: false
  public get secLists() {
    return this.getListAttribute('sec_lists');
  }

  // shared_network - computed: true, optional: false, required: false
  public get sharedNetwork() {
    return this.getBooleanAttribute('shared_network');
  }

  // vnic - computed: true, optional: false, required: false
  public get vnic() {
    return this.getStringAttribute('vnic');
  }

  // vnic_sets - computed: true, optional: false, required: false
  public get vnicSets() {
    return this.getListAttribute('vnic_sets');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      interface: cdktf.stringToTerraform(this._interface),
    };
  }
}
