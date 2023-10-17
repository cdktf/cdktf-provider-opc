/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbaasLoadBalancerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}
  */
  readonly ipNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}
  */
  readonly parentLoadBalancer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}
  */
  readonly permittedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}
  */
  readonly permittedMethods?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}
  */
  readonly policies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}
  */
  readonly scheme: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}
  */
  readonly serverPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer opc_lbaas_load_balancer}
*/
export class LbaasLoadBalancer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_lbaas_load_balancer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbaasLoadBalancer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbaasLoadBalancer to import
  * @param importFromId The id of the existing LbaasLoadBalancer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbaasLoadBalancer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_lbaas_load_balancer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer opc_lbaas_load_balancer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbaasLoadBalancerConfig
  */
  public constructor(scope: Construct, id: string, config: LbaasLoadBalancerConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_lbaas_load_balancer',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipNetwork = config.ipNetwork;
    this._name = config.name;
    this._parentLoadBalancer = config.parentLoadBalancer;
    this._permittedClients = config.permittedClients;
    this._permittedMethods = config.permittedMethods;
    this._policies = config.policies;
    this._region = config.region;
    this._scheme = config.scheme;
    this._serverPool = config.serverPool;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balancer_vips - computed: true, optional: false, required: false
  public get balancerVips() {
    return this.getListAttribute('balancer_vips');
  }

  // canonical_host_name - computed: true, optional: false, required: false
  public get canonicalHostName() {
    return this.getStringAttribute('canonical_host_name');
  }

  // cloudgate_capable - computed: true, optional: false, required: false
  public get cloudgateCapable() {
    return this.getBooleanAttribute('cloudgate_capable');
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

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // ip_network - computed: true, optional: true, required: false
  private _ipNetwork?: string; 
  public get ipNetwork() {
    return this.getStringAttribute('ip_network');
  }
  public set ipNetwork(value: string) {
    this._ipNetwork = value;
  }
  public resetIpNetwork() {
    this._ipNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkInput() {
    return this._ipNetwork;
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

  // parent_load_balancer - computed: false, optional: true, required: false
  private _parentLoadBalancer?: string; 
  public get parentLoadBalancer() {
    return this.getStringAttribute('parent_load_balancer');
  }
  public set parentLoadBalancer(value: string) {
    this._parentLoadBalancer = value;
  }
  public resetParentLoadBalancer() {
    this._parentLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentLoadBalancerInput() {
    return this._parentLoadBalancer;
  }

  // permitted_clients - computed: false, optional: true, required: false
  private _permittedClients?: string[]; 
  public get permittedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('permitted_clients'));
  }
  public set permittedClients(value: string[]) {
    this._permittedClients = value;
  }
  public resetPermittedClients() {
    this._permittedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedClientsInput() {
    return this._permittedClients;
  }

  // permitted_methods - computed: false, optional: true, required: false
  private _permittedMethods?: string[]; 
  public get permittedMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('permitted_methods'));
  }
  public set permittedMethods(value: string[]) {
    this._permittedMethods = value;
  }
  public resetPermittedMethods() {
    this._permittedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedMethodsInput() {
    return this._permittedMethods;
  }

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scheme - computed: false, optional: false, required: true
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }

  // server_pool - computed: false, optional: true, required: false
  private _serverPool?: string; 
  public get serverPool() {
    return this.getStringAttribute('server_pool');
  }
  public set serverPool(value: string) {
    this._serverPool = value;
  }
  public resetServerPool() {
    this._serverPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPoolInput() {
    return this._serverPool;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_network: cdktf.stringToTerraform(this._ipNetwork),
      name: cdktf.stringToTerraform(this._name),
      parent_load_balancer: cdktf.stringToTerraform(this._parentLoadBalancer),
      permitted_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permittedClients),
      permitted_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permittedMethods),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      region: cdktf.stringToTerraform(this._region),
      scheme: cdktf.stringToTerraform(this._scheme),
      server_pool: cdktf.stringToTerraform(this._serverPool),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
