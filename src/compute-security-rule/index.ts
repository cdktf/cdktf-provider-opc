// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#acl ComputeSecurityRule#acl}
  */
  readonly acl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#description ComputeSecurityRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}
  */
  readonly dstIpAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}
  */
  readonly dstVnicSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#enabled ComputeSecurityRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}
  */
  readonly flowDirection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#id ComputeSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#name ComputeSecurityRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}
  */
  readonly securityProtocols?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}
  */
  readonly srcIpAddressPrefixes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}
  */
  readonly srcVnicSet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#tags ComputeSecurityRule#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule opc_compute_security_rule}
*/
export class ComputeSecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeSecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeSecurityRule to import
  * @param importFromId The id of the existing ComputeSecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeSecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_compute_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule opc_compute_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_security_rule',
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
    this._acl = config.acl;
    this._description = config.description;
    this._dstIpAddressPrefixes = config.dstIpAddressPrefixes;
    this._dstVnicSet = config.dstVnicSet;
    this._enabled = config.enabled;
    this._flowDirection = config.flowDirection;
    this._id = config.id;
    this._name = config.name;
    this._securityProtocols = config.securityProtocols;
    this._srcIpAddressPrefixes = config.srcIpAddressPrefixes;
    this._srcVnicSet = config.srcVnicSet;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl - computed: false, optional: true, required: false
  private _acl?: string; 
  public get acl() {
    return this.getStringAttribute('acl');
  }
  public set acl(value: string) {
    this._acl = value;
  }
  public resetAcl() {
    this._acl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclInput() {
    return this._acl;
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

  // dst_ip_address_prefixes - computed: false, optional: true, required: false
  private _dstIpAddressPrefixes?: string[]; 
  public get dstIpAddressPrefixes() {
    return this.getListAttribute('dst_ip_address_prefixes');
  }
  public set dstIpAddressPrefixes(value: string[]) {
    this._dstIpAddressPrefixes = value;
  }
  public resetDstIpAddressPrefixes() {
    this._dstIpAddressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpAddressPrefixesInput() {
    return this._dstIpAddressPrefixes;
  }

  // dst_vnic_set - computed: false, optional: true, required: false
  private _dstVnicSet?: string; 
  public get dstVnicSet() {
    return this.getStringAttribute('dst_vnic_set');
  }
  public set dstVnicSet(value: string) {
    this._dstVnicSet = value;
  }
  public resetDstVnicSet() {
    this._dstVnicSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstVnicSetInput() {
    return this._dstVnicSet;
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

  // flow_direction - computed: false, optional: false, required: true
  private _flowDirection?: string; 
  public get flowDirection() {
    return this.getStringAttribute('flow_direction');
  }
  public set flowDirection(value: string) {
    this._flowDirection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get flowDirectionInput() {
    return this._flowDirection;
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

  // security_protocols - computed: false, optional: true, required: false
  private _securityProtocols?: string[]; 
  public get securityProtocols() {
    return this.getListAttribute('security_protocols');
  }
  public set securityProtocols(value: string[]) {
    this._securityProtocols = value;
  }
  public resetSecurityProtocols() {
    this._securityProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProtocolsInput() {
    return this._securityProtocols;
  }

  // src_ip_address_prefixes - computed: false, optional: true, required: false
  private _srcIpAddressPrefixes?: string[]; 
  public get srcIpAddressPrefixes() {
    return this.getListAttribute('src_ip_address_prefixes');
  }
  public set srcIpAddressPrefixes(value: string[]) {
    this._srcIpAddressPrefixes = value;
  }
  public resetSrcIpAddressPrefixes() {
    this._srcIpAddressPrefixes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpAddressPrefixesInput() {
    return this._srcIpAddressPrefixes;
  }

  // src_vnic_set - computed: false, optional: true, required: false
  private _srcVnicSet?: string; 
  public get srcVnicSet() {
    return this.getStringAttribute('src_vnic_set');
  }
  public set srcVnicSet(value: string) {
    this._srcVnicSet = value;
  }
  public resetSrcVnicSet() {
    this._srcVnicSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcVnicSetInput() {
    return this._srcVnicSet;
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
      acl: cdktf.stringToTerraform(this._acl),
      description: cdktf.stringToTerraform(this._description),
      dst_ip_address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dstIpAddressPrefixes),
      dst_vnic_set: cdktf.stringToTerraform(this._dstVnicSet),
      enabled: cdktf.booleanToTerraform(this._enabled),
      flow_direction: cdktf.stringToTerraform(this._flowDirection),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      security_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._securityProtocols),
      src_ip_address_prefixes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._srcIpAddressPrefixes),
      src_vnic_set: cdktf.stringToTerraform(this._srcVnicSet),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }
}
