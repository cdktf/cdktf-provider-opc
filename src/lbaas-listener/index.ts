/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbaasListenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}
  */
  readonly balancerProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#certificates LbaasListener#certificates}
  */
  readonly certificates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#enabled LbaasListener#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#id LbaasListener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#load_balancer LbaasListener#load_balancer}
  */
  readonly loadBalancer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#name LbaasListener#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#path_prefixes LbaasListener#path_prefixes}
  */
  readonly pathPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#policies LbaasListener#policies}
  */
  readonly policies?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#port LbaasListener#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_pool LbaasListener#server_pool}
  */
  readonly serverPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_protocol LbaasListener#server_protocol}
  */
  readonly serverProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#tags LbaasListener#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}
  */
  readonly virtualHosts?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener opc_lbaas_listener}
*/
export class LbaasListener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_lbaas_listener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbaasListener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbaasListener to import
  * @param importFromId The id of the existing LbaasListener that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbaasListener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_lbaas_listener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener opc_lbaas_listener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbaasListenerConfig
  */
  public constructor(scope: Construct, id: string, config: LbaasListenerConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_lbaas_listener',
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
    this._balancerProtocol = config.balancerProtocol;
    this._certificates = config.certificates;
    this._enabled = config.enabled;
    this._id = config.id;
    this._loadBalancer = config.loadBalancer;
    this._name = config.name;
    this._pathPrefixes = config.pathPrefixes;
    this._policies = config.policies;
    this._port = config.port;
    this._serverPool = config.serverPool;
    this._serverProtocol = config.serverProtocol;
    this._tags = config.tags;
    this._virtualHosts = config.virtualHosts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // balancer_protocol - computed: false, optional: false, required: true
  private _balancerProtocol?: string; 
  public get balancerProtocol() {
    return this.getStringAttribute('balancer_protocol');
  }
  public set balancerProtocol(value: string) {
    this._balancerProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get balancerProtocolInput() {
    return this._balancerProtocol;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates?: string[]; 
  public get certificates() {
    return cdktf.Fn.tolist(this.getListAttribute('certificates'));
  }
  public set certificates(value: string[]) {
    this._certificates = value;
  }
  public resetCertificates() {
    this._certificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates;
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

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer?: string; 
  public get loadBalancer() {
    return this.getStringAttribute('load_balancer');
  }
  public set loadBalancer(value: string) {
    this._loadBalancer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
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

  // operation_details - computed: true, optional: false, required: false
  public get operationDetails() {
    return this.getStringAttribute('operation_details');
  }

  // parent_listener - computed: true, optional: false, required: false
  public get parentListener() {
    return this.getStringAttribute('parent_listener');
  }

  // path_prefixes - computed: false, optional: true, required: false
  private _pathPrefixes?: string[]; 
  public get pathPrefixes() {
    return cdktf.Fn.tolist(this.getListAttribute('path_prefixes'));
  }
  public set pathPrefixes(value: string[]) {
    this._pathPrefixes = value;
  }
  public resetPathPrefixes() {
    this._pathPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathPrefixesInput() {
    return this._pathPrefixes;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // server_protocol - computed: false, optional: false, required: true
  private _serverProtocol?: string; 
  public get serverProtocol() {
    return this.getStringAttribute('server_protocol');
  }
  public set serverProtocol(value: string) {
    this._serverProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverProtocolInput() {
    return this._serverProtocol;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getBooleanAttribute('state');
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

  // virtual_hosts - computed: false, optional: true, required: false
  private _virtualHosts?: string[]; 
  public get virtualHosts() {
    return cdktf.Fn.tolist(this.getListAttribute('virtual_hosts'));
  }
  public set virtualHosts(value: string[]) {
    this._virtualHosts = value;
  }
  public resetVirtualHosts() {
    this._virtualHosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostsInput() {
    return this._virtualHosts;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      balancer_protocol: cdktf.stringToTerraform(this._balancerProtocol),
      certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificates),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      load_balancer: cdktf.stringToTerraform(this._loadBalancer),
      name: cdktf.stringToTerraform(this._name),
      path_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._pathPrefixes),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      port: cdktf.numberToTerraform(this._port),
      server_pool: cdktf.stringToTerraform(this._serverPool),
      server_protocol: cdktf.stringToTerraform(this._serverProtocol),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      virtual_hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._virtualHosts),
    };
  }
}
