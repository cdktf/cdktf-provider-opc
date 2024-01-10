/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbaasServerPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#id LbaasServerPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}
  */
  readonly loadBalancer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#name LbaasServerPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#servers LbaasServerPool#servers}
  */
  readonly servers: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#tags LbaasServerPool#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}
  */
  readonly vnicSet?: string;
  /**
  * health_check block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#health_check LbaasServerPool#health_check}
  */
  readonly healthCheck?: LbaasServerPoolHealthCheck;
}
export interface LbaasServerPoolHealthCheck {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}
  */
  readonly acceptedReturnCodes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}
  */
  readonly healthyThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#interval LbaasServerPool#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#path LbaasServerPool#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#timeout LbaasServerPool#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#type LbaasServerPool#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}
  */
  readonly unhealthyThreshold?: number;
}

export function lbaasServerPoolHealthCheckToTerraform(struct?: LbaasServerPoolHealthCheckOutputReference | LbaasServerPoolHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accepted_return_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceptedReturnCodes),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    healthy_threshold: cdktf.numberToTerraform(struct!.healthyThreshold),
    interval: cdktf.numberToTerraform(struct!.interval),
    path: cdktf.stringToTerraform(struct!.path),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    unhealthy_threshold: cdktf.numberToTerraform(struct!.unhealthyThreshold),
  }
}


export function lbaasServerPoolHealthCheckToHclTerraform(struct?: LbaasServerPoolHealthCheckOutputReference | LbaasServerPoolHealthCheck): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accepted_return_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceptedReturnCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    healthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.healthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unhealthy_threshold: {
      value: cdktf.numberToHclTerraform(struct!.unhealthyThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasServerPoolHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasServerPoolHealthCheck | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptedReturnCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptedReturnCodes = this._acceptedReturnCodes;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._healthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthyThreshold = this._healthyThreshold;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unhealthyThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyThreshold = this._unhealthyThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasServerPoolHealthCheck | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptedReturnCodes = undefined;
      this._enabled = undefined;
      this._healthyThreshold = undefined;
      this._interval = undefined;
      this._path = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._unhealthyThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptedReturnCodes = value.acceptedReturnCodes;
      this._enabled = value.enabled;
      this._healthyThreshold = value.healthyThreshold;
      this._interval = value.interval;
      this._path = value.path;
      this._timeout = value.timeout;
      this._type = value.type;
      this._unhealthyThreshold = value.unhealthyThreshold;
    }
  }

  // accepted_return_codes - computed: true, optional: true, required: false
  private _acceptedReturnCodes?: string[]; 
  public get acceptedReturnCodes() {
    return this.getListAttribute('accepted_return_codes');
  }
  public set acceptedReturnCodes(value: string[]) {
    this._acceptedReturnCodes = value;
  }
  public resetAcceptedReturnCodes() {
    this._acceptedReturnCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedReturnCodesInput() {
    return this._acceptedReturnCodes;
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

  // healthy_threshold - computed: false, optional: true, required: false
  private _healthyThreshold?: number; 
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }
  public set healthyThreshold(value: number) {
    this._healthyThreshold = value;
  }
  public resetHealthyThreshold() {
    this._healthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthyThresholdInput() {
    return this._healthyThreshold;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unhealthy_threshold - computed: false, optional: true, required: false
  private _unhealthyThreshold?: number; 
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
  public set unhealthyThreshold(value: number) {
    this._unhealthyThreshold = value;
  }
  public resetUnhealthyThreshold() {
    this._unhealthyThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyThresholdInput() {
    return this._unhealthyThreshold;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool opc_lbaas_server_pool}
*/
export class LbaasServerPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_lbaas_server_pool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbaasServerPool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbaasServerPool to import
  * @param importFromId The id of the existing LbaasServerPool that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbaasServerPool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_lbaas_server_pool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool opc_lbaas_server_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbaasServerPoolConfig
  */
  public constructor(scope: Construct, id: string, config: LbaasServerPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_lbaas_server_pool',
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
    this._enabled = config.enabled;
    this._id = config.id;
    this._loadBalancer = config.loadBalancer;
    this._name = config.name;
    this._servers = config.servers;
    this._tags = config.tags;
    this._vnicSet = config.vnicSet;
    this._healthCheck.internalValue = config.healthCheck;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumers - computed: true, optional: false, required: false
  public get consumers() {
    return this.getStringAttribute('consumers');
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
    return this.getBooleanAttribute('operation_details');
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
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

  // vnic_set - computed: false, optional: true, required: false
  private _vnicSet?: string; 
  public get vnicSet() {
    return this.getStringAttribute('vnic_set');
  }
  public set vnicSet(value: string) {
    this._vnicSet = value;
  }
  public resetVnicSet() {
    this._vnicSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicSetInput() {
    return this._vnicSet;
  }

  // health_check - computed: false, optional: true, required: false
  private _healthCheck = new LbaasServerPoolHealthCheckOutputReference(this, "health_check");
  public get healthCheck() {
    return this._healthCheck;
  }
  public putHealthCheck(value: LbaasServerPoolHealthCheck) {
    this._healthCheck.internalValue = value;
  }
  public resetHealthCheck() {
    this._healthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthCheckInput() {
    return this._healthCheck.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      load_balancer: cdktf.stringToTerraform(this._loadBalancer),
      name: cdktf.stringToTerraform(this._name),
      servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servers),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vnic_set: cdktf.stringToTerraform(this._vnicSet),
      health_check: lbaasServerPoolHealthCheckToTerraform(this._healthCheck.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer: {
        value: cdktf.stringToHclTerraform(this._loadBalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vnic_set: {
        value: cdktf.stringToHclTerraform(this._vnicSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      health_check: {
        value: lbaasServerPoolHealthCheckToHclTerraform(this._healthCheck.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasServerPoolHealthCheckList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
