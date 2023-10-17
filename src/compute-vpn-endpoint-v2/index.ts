// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeVpnEndpointV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}
  */
  readonly customerVpnGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}
  */
  readonly ikeIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}
  */
  readonly ipNetwork: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}
  */
  readonly preSharedKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}
  */
  readonly reachableRoutes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}
  */
  readonly requirePerfectForwardSecrecy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}
  */
  readonly vnicSets: string[];
  /**
  * phase_one_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_one_settings ComputeVpnEndpointV2#phase_one_settings}
  */
  readonly phaseOneSettings?: ComputeVpnEndpointV2PhaseOneSettings;
  /**
  * phase_two_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_two_settings ComputeVpnEndpointV2#phase_two_settings}
  */
  readonly phaseTwoSettings?: ComputeVpnEndpointV2PhaseTwoSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#timeouts ComputeVpnEndpointV2#timeouts}
  */
  readonly timeouts?: ComputeVpnEndpointV2Timeouts;
}
export interface ComputeVpnEndpointV2PhaseOneSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}
  */
  readonly dhGroup: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}
  */
  readonly encryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}
  */
  readonly hash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}
  */
  readonly lifetime?: number;
}

export function computeVpnEndpointV2PhaseOneSettingsToTerraform(struct?: ComputeVpnEndpointV2PhaseOneSettingsOutputReference | ComputeVpnEndpointV2PhaseOneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dh_group: cdktf.stringToTerraform(struct!.dhGroup),
    encryption: cdktf.stringToTerraform(struct!.encryption),
    hash: cdktf.stringToTerraform(struct!.hash),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}

export class ComputeVpnEndpointV2PhaseOneSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeVpnEndpointV2PhaseOneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhGroup = this._dhGroup;
    }
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeVpnEndpointV2PhaseOneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dhGroup = undefined;
      this._encryption = undefined;
      this._hash = undefined;
      this._lifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dhGroup = value.dhGroup;
      this._encryption = value.encryption;
      this._hash = value.hash;
      this._lifetime = value.lifetime;
    }
  }

  // dh_group - computed: false, optional: false, required: true
  private _dhGroup?: string; 
  public get dhGroup() {
    return this.getStringAttribute('dh_group');
  }
  public set dhGroup(value: string) {
    this._dhGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhGroupInput() {
    return this._dhGroup;
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }
}
export interface ComputeVpnEndpointV2PhaseTwoSettings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}
  */
  readonly encryption: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}
  */
  readonly hash: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}
  */
  readonly lifetime?: number;
}

export function computeVpnEndpointV2PhaseTwoSettingsToTerraform(struct?: ComputeVpnEndpointV2PhaseTwoSettingsOutputReference | ComputeVpnEndpointV2PhaseTwoSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption: cdktf.stringToTerraform(struct!.encryption),
    hash: cdktf.stringToTerraform(struct!.hash),
    lifetime: cdktf.numberToTerraform(struct!.lifetime),
  }
}

export class ComputeVpnEndpointV2PhaseTwoSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeVpnEndpointV2PhaseTwoSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryption = this._encryption;
    }
    if (this._hash !== undefined) {
      hasAnyValues = true;
      internalValueResult.hash = this._hash;
    }
    if (this._lifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifetime = this._lifetime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeVpnEndpointV2PhaseTwoSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryption = undefined;
      this._hash = undefined;
      this._lifetime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryption = value.encryption;
      this._hash = value.hash;
      this._lifetime = value.lifetime;
    }
  }

  // encryption - computed: false, optional: false, required: true
  private _encryption?: string; 
  public get encryption() {
    return this.getStringAttribute('encryption');
  }
  public set encryption(value: string) {
    this._encryption = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
  }

  // hash - computed: false, optional: false, required: true
  private _hash?: string; 
  public get hash() {
    return this.getStringAttribute('hash');
  }
  public set hash(value: string) {
    this._hash = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hashInput() {
    return this._hash;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: number; 
  public get lifetime() {
    return this.getNumberAttribute('lifetime');
  }
  public set lifetime(value: number) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
  }
}
export interface ComputeVpnEndpointV2Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}
  */
  readonly update?: string;
}

export function computeVpnEndpointV2TimeoutsToTerraform(struct?: ComputeVpnEndpointV2Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeVpnEndpointV2TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeVpnEndpointV2Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeVpnEndpointV2Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2 opc_compute_vpn_endpoint_v2}
*/
export class ComputeVpnEndpointV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_vpn_endpoint_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeVpnEndpointV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeVpnEndpointV2 to import
  * @param importFromId The id of the existing ComputeVpnEndpointV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeVpnEndpointV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_compute_vpn_endpoint_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2 opc_compute_vpn_endpoint_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeVpnEndpointV2Config
  */
  public constructor(scope: Construct, id: string, config: ComputeVpnEndpointV2Config) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_vpn_endpoint_v2',
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
    this._customerVpnGateway = config.customerVpnGateway;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ikeIdentifier = config.ikeIdentifier;
    this._ipNetwork = config.ipNetwork;
    this._name = config.name;
    this._preSharedKey = config.preSharedKey;
    this._reachableRoutes = config.reachableRoutes;
    this._requirePerfectForwardSecrecy = config.requirePerfectForwardSecrecy;
    this._tags = config.tags;
    this._vnicSets = config.vnicSets;
    this._phaseOneSettings.internalValue = config.phaseOneSettings;
    this._phaseTwoSettings.internalValue = config.phaseTwoSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_vpn_gateway - computed: false, optional: false, required: true
  private _customerVpnGateway?: string; 
  public get customerVpnGateway() {
    return this.getStringAttribute('customer_vpn_gateway');
  }
  public set customerVpnGateway(value: string) {
    this._customerVpnGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customerVpnGatewayInput() {
    return this._customerVpnGateway;
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

  // ike_identifier - computed: true, optional: true, required: false
  private _ikeIdentifier?: string; 
  public get ikeIdentifier() {
    return this.getStringAttribute('ike_identifier');
  }
  public set ikeIdentifier(value: string) {
    this._ikeIdentifier = value;
  }
  public resetIkeIdentifier() {
    this._ikeIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeIdentifierInput() {
    return this._ikeIdentifier;
  }

  // ip_network - computed: false, optional: false, required: true
  private _ipNetwork?: string; 
  public get ipNetwork() {
    return this.getStringAttribute('ip_network');
  }
  public set ipNetwork(value: string) {
    this._ipNetwork = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkInput() {
    return this._ipNetwork;
  }

  // local_gateway_ip_address - computed: true, optional: false, required: false
  public get localGatewayIpAddress() {
    return this.getStringAttribute('local_gateway_ip_address');
  }

  // local_gateway_private_ip_address - computed: true, optional: false, required: false
  public get localGatewayPrivateIpAddress() {
    return this.getStringAttribute('local_gateway_private_ip_address');
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

  // pre_shared_key - computed: false, optional: false, required: true
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // reachable_routes - computed: false, optional: false, required: true
  private _reachableRoutes?: string[]; 
  public get reachableRoutes() {
    return this.getListAttribute('reachable_routes');
  }
  public set reachableRoutes(value: string[]) {
    this._reachableRoutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reachableRoutesInput() {
    return this._reachableRoutes;
  }

  // require_perfect_forward_secrecy - computed: false, optional: true, required: false
  private _requirePerfectForwardSecrecy?: boolean | cdktf.IResolvable; 
  public get requirePerfectForwardSecrecy() {
    return this.getBooleanAttribute('require_perfect_forward_secrecy');
  }
  public set requirePerfectForwardSecrecy(value: boolean | cdktf.IResolvable) {
    this._requirePerfectForwardSecrecy = value;
  }
  public resetRequirePerfectForwardSecrecy() {
    this._requirePerfectForwardSecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePerfectForwardSecrecyInput() {
    return this._requirePerfectForwardSecrecy;
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

  // tunnel_status - computed: true, optional: false, required: false
  public get tunnelStatus() {
    return this.getStringAttribute('tunnel_status');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // vnic_sets - computed: false, optional: false, required: true
  private _vnicSets?: string[]; 
  public get vnicSets() {
    return this.getListAttribute('vnic_sets');
  }
  public set vnicSets(value: string[]) {
    this._vnicSets = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicSetsInput() {
    return this._vnicSets;
  }

  // phase_one_settings - computed: false, optional: true, required: false
  private _phaseOneSettings = new ComputeVpnEndpointV2PhaseOneSettingsOutputReference(this, "phase_one_settings");
  public get phaseOneSettings() {
    return this._phaseOneSettings;
  }
  public putPhaseOneSettings(value: ComputeVpnEndpointV2PhaseOneSettings) {
    this._phaseOneSettings.internalValue = value;
  }
  public resetPhaseOneSettings() {
    this._phaseOneSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseOneSettingsInput() {
    return this._phaseOneSettings.internalValue;
  }

  // phase_two_settings - computed: false, optional: true, required: false
  private _phaseTwoSettings = new ComputeVpnEndpointV2PhaseTwoSettingsOutputReference(this, "phase_two_settings");
  public get phaseTwoSettings() {
    return this._phaseTwoSettings;
  }
  public putPhaseTwoSettings(value: ComputeVpnEndpointV2PhaseTwoSettings) {
    this._phaseTwoSettings.internalValue = value;
  }
  public resetPhaseTwoSettings() {
    this._phaseTwoSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseTwoSettingsInput() {
    return this._phaseTwoSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeVpnEndpointV2TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeVpnEndpointV2Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      customer_vpn_gateway: cdktf.stringToTerraform(this._customerVpnGateway),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ike_identifier: cdktf.stringToTerraform(this._ikeIdentifier),
      ip_network: cdktf.stringToTerraform(this._ipNetwork),
      name: cdktf.stringToTerraform(this._name),
      pre_shared_key: cdktf.stringToTerraform(this._preSharedKey),
      reachable_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._reachableRoutes),
      require_perfect_forward_secrecy: cdktf.booleanToTerraform(this._requirePerfectForwardSecrecy),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      vnic_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vnicSets),
      phase_one_settings: computeVpnEndpointV2PhaseOneSettingsToTerraform(this._phaseOneSettings.internalValue),
      phase_two_settings: computeVpnEndpointV2PhaseTwoSettingsToTerraform(this._phaseTwoSettings.internalValue),
      timeouts: computeVpnEndpointV2TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
