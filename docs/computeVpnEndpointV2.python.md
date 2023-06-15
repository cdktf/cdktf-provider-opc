# `opc_compute_vpn_endpoint_v2`

Refer to the Terraform Registory for docs: [`opc_compute_vpn_endpoint_v2`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2).

# `computeVpnEndpointV2` Submodule <a name="`computeVpnEndpointV2` Submodule" id="@cdktf/provider-opc.computeVpnEndpointV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnEndpointV2 <a name="ComputeVpnEndpointV2" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2 opc_compute_vpn_endpoint_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_vpn_gateway: str,
  ip_network: str,
  name: str,
  pre_shared_key: str,
  reachable_routes: typing.List[str],
  vnic_sets: typing.List[str],
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ike_identifier: str = None,
  phase_one_settings: ComputeVpnEndpointV2PhaseOneSettings = None,
  phase_two_settings: ComputeVpnEndpointV2PhaseTwoSettings = None,
  require_perfect_forward_secrecy: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: ComputeVpnEndpointV2Timeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.customerVpnGateway">customer_vpn_gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.ipNetwork">ip_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.preSharedKey">pre_shared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.reachableRoutes">reachable_routes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.vnicSets">vnic_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.ikeIdentifier">ike_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.phaseOneSettings">phase_one_settings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | phase_one_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.phaseTwoSettings">phase_two_settings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | phase_two_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.requirePerfectForwardSecrecy">require_perfect_forward_secrecy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_vpn_gateway`<sup>Required</sup> <a name="customer_vpn_gateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.customerVpnGateway"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}.

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.ipNetwork"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}.

---

##### `pre_shared_key`<sup>Required</sup> <a name="pre_shared_key" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.preSharedKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}.

---

##### `reachable_routes`<sup>Required</sup> <a name="reachable_routes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.reachableRoutes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}.

---

##### `vnic_sets`<sup>Required</sup> <a name="vnic_sets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.vnicSets"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ike_identifier`<sup>Optional</sup> <a name="ike_identifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.ikeIdentifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}.

---

##### `phase_one_settings`<sup>Optional</sup> <a name="phase_one_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.phaseOneSettings"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

phase_one_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_one_settings ComputeVpnEndpointV2#phase_one_settings}

---

##### `phase_two_settings`<sup>Optional</sup> <a name="phase_two_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.phaseTwoSettings"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

phase_two_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_two_settings ComputeVpnEndpointV2#phase_two_settings}

---

##### `require_perfect_forward_secrecy`<sup>Optional</sup> <a name="require_perfect_forward_secrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.requirePerfectForwardSecrecy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#timeouts ComputeVpnEndpointV2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings">put_phase_one_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings">put_phase_two_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetIkeIdentifier">reset_ike_identifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseOneSettings">reset_phase_one_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseTwoSettings">reset_phase_two_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetRequirePerfectForwardSecrecy">reset_require_perfect_forward_secrecy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_phase_one_settings` <a name="put_phase_one_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings"></a>

```python
def put_phase_one_settings(
  dh_group: str,
  encryption: str,
  hash: str,
  lifetime: typing.Union[int, float] = None
) -> None
```

###### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings.parameter.dhGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}.

---

###### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings.parameter.encryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

###### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings.parameter.hash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

###### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings.parameter.lifetime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

##### `put_phase_two_settings` <a name="put_phase_two_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings"></a>

```python
def put_phase_two_settings(
  encryption: str,
  hash: str,
  lifetime: typing.Union[int, float] = None
) -> None
```

###### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings.parameter.encryption"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

###### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings.parameter.hash"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

###### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings.parameter.lifetime"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ike_identifier` <a name="reset_ike_identifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetIkeIdentifier"></a>

```python
def reset_ike_identifier() -> None
```

##### `reset_phase_one_settings` <a name="reset_phase_one_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseOneSettings"></a>

```python
def reset_phase_one_settings() -> None
```

##### `reset_phase_two_settings` <a name="reset_phase_two_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseTwoSettings"></a>

```python
def reset_phase_two_settings() -> None
```

##### `reset_require_perfect_forward_secrecy` <a name="reset_require_perfect_forward_secrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetRequirePerfectForwardSecrecy"></a>

```python
def reset_require_perfect_forward_secrecy() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayIpAddress">local_gateway_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayPrivateIpAddress">local_gateway_private_ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettings">phase_one_settings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference">ComputeVpnEndpointV2PhaseOneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettings">phase_two_settings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference">ComputeVpnEndpointV2PhaseTwoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference">ComputeVpnEndpointV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tunnelStatus">tunnel_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGatewayInput">customer_vpn_gateway_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifierInput">ike_identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetworkInput">ip_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettingsInput">phase_one_settings_input</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettingsInput">phase_two_settings_input</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKeyInput">pre_shared_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutesInput">reachable_routes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecyInput">require_perfect_forward_secrecy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSetsInput">vnic_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGateway">customer_vpn_gateway</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifier">ike_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetwork">ip_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKey">pre_shared_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutes">reachable_routes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecy">require_perfect_forward_secrecy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSets">vnic_sets</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `local_gateway_ip_address`<sup>Required</sup> <a name="local_gateway_ip_address" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayIpAddress"></a>

```python
local_gateway_ip_address: str
```

- *Type:* str

---

##### `local_gateway_private_ip_address`<sup>Required</sup> <a name="local_gateway_private_ip_address" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayPrivateIpAddress"></a>

```python
local_gateway_private_ip_address: str
```

- *Type:* str

---

##### `phase_one_settings`<sup>Required</sup> <a name="phase_one_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettings"></a>

```python
phase_one_settings: ComputeVpnEndpointV2PhaseOneSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference">ComputeVpnEndpointV2PhaseOneSettingsOutputReference</a>

---

##### `phase_two_settings`<sup>Required</sup> <a name="phase_two_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettings"></a>

```python
phase_two_settings: ComputeVpnEndpointV2PhaseTwoSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference">ComputeVpnEndpointV2PhaseTwoSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeouts"></a>

```python
timeouts: ComputeVpnEndpointV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference">ComputeVpnEndpointV2TimeoutsOutputReference</a>

---

##### `tunnel_status`<sup>Required</sup> <a name="tunnel_status" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tunnelStatus"></a>

```python
tunnel_status: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `customer_vpn_gateway_input`<sup>Optional</sup> <a name="customer_vpn_gateway_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGatewayInput"></a>

```python
customer_vpn_gateway_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ike_identifier_input`<sup>Optional</sup> <a name="ike_identifier_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifierInput"></a>

```python
ike_identifier_input: str
```

- *Type:* str

---

##### `ip_network_input`<sup>Optional</sup> <a name="ip_network_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetworkInput"></a>

```python
ip_network_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `phase_one_settings_input`<sup>Optional</sup> <a name="phase_one_settings_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettingsInput"></a>

```python
phase_one_settings_input: ComputeVpnEndpointV2PhaseOneSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---

##### `phase_two_settings_input`<sup>Optional</sup> <a name="phase_two_settings_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettingsInput"></a>

```python
phase_two_settings_input: ComputeVpnEndpointV2PhaseTwoSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---

##### `pre_shared_key_input`<sup>Optional</sup> <a name="pre_shared_key_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKeyInput"></a>

```python
pre_shared_key_input: str
```

- *Type:* str

---

##### `reachable_routes_input`<sup>Optional</sup> <a name="reachable_routes_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutesInput"></a>

```python
reachable_routes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_perfect_forward_secrecy_input`<sup>Optional</sup> <a name="require_perfect_forward_secrecy_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecyInput"></a>

```python
require_perfect_forward_secrecy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeVpnEndpointV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>]

---

##### `vnic_sets_input`<sup>Optional</sup> <a name="vnic_sets_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSetsInput"></a>

```python
vnic_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `customer_vpn_gateway`<sup>Required</sup> <a name="customer_vpn_gateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGateway"></a>

```python
customer_vpn_gateway: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ike_identifier`<sup>Required</sup> <a name="ike_identifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifier"></a>

```python
ike_identifier: str
```

- *Type:* str

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `pre_shared_key`<sup>Required</sup> <a name="pre_shared_key" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKey"></a>

```python
pre_shared_key: str
```

- *Type:* str

---

##### `reachable_routes`<sup>Required</sup> <a name="reachable_routes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutes"></a>

```python
reachable_routes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `require_perfect_forward_secrecy`<sup>Required</sup> <a name="require_perfect_forward_secrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecy"></a>

```python
require_perfect_forward_secrecy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vnic_sets`<sup>Required</sup> <a name="vnic_sets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSets"></a>

```python
vnic_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnEndpointV2Config <a name="ComputeVpnEndpointV2Config" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  customer_vpn_gateway: str,
  ip_network: str,
  name: str,
  pre_shared_key: str,
  reachable_routes: typing.List[str],
  vnic_sets: typing.List[str],
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ike_identifier: str = None,
  phase_one_settings: ComputeVpnEndpointV2PhaseOneSettings = None,
  phase_two_settings: ComputeVpnEndpointV2PhaseTwoSettings = None,
  require_perfect_forward_secrecy: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: ComputeVpnEndpointV2Timeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.customerVpnGateway">customer_vpn_gateway</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ipNetwork">ip_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.preSharedKey">pre_shared_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.reachableRoutes">reachable_routes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.vnicSets">vnic_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ikeIdentifier">ike_identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseOneSettings">phase_one_settings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | phase_one_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseTwoSettings">phase_two_settings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | phase_two_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.requirePerfectForwardSecrecy">require_perfect_forward_secrecy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `customer_vpn_gateway`<sup>Required</sup> <a name="customer_vpn_gateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.customerVpnGateway"></a>

```python
customer_vpn_gateway: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}.

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}.

---

##### `pre_shared_key`<sup>Required</sup> <a name="pre_shared_key" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.preSharedKey"></a>

```python
pre_shared_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}.

---

##### `reachable_routes`<sup>Required</sup> <a name="reachable_routes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.reachableRoutes"></a>

```python
reachable_routes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}.

---

##### `vnic_sets`<sup>Required</sup> <a name="vnic_sets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.vnicSets"></a>

```python
vnic_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ike_identifier`<sup>Optional</sup> <a name="ike_identifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ikeIdentifier"></a>

```python
ike_identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}.

---

##### `phase_one_settings`<sup>Optional</sup> <a name="phase_one_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseOneSettings"></a>

```python
phase_one_settings: ComputeVpnEndpointV2PhaseOneSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

phase_one_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_one_settings ComputeVpnEndpointV2#phase_one_settings}

---

##### `phase_two_settings`<sup>Optional</sup> <a name="phase_two_settings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseTwoSettings"></a>

```python
phase_two_settings: ComputeVpnEndpointV2PhaseTwoSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

phase_two_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_two_settings ComputeVpnEndpointV2#phase_two_settings}

---

##### `require_perfect_forward_secrecy`<sup>Optional</sup> <a name="require_perfect_forward_secrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.requirePerfectForwardSecrecy"></a>

```python
require_perfect_forward_secrecy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.timeouts"></a>

```python
timeouts: ComputeVpnEndpointV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#timeouts ComputeVpnEndpointV2#timeouts}

---

### ComputeVpnEndpointV2PhaseOneSettings <a name="ComputeVpnEndpointV2PhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings(
  dh_group: str,
  encryption: str,
  hash: str,
  lifetime: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.dhGroup">dh_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.encryption">encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.hash">hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}. |

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}.

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.encryption"></a>

```python
encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.hash"></a>

```python
hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

### ComputeVpnEndpointV2PhaseTwoSettings <a name="ComputeVpnEndpointV2PhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings(
  encryption: str,
  hash: str,
  lifetime: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.encryption">encryption</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.hash">hash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}. |

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.encryption"></a>

```python
encryption: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.hash"></a>

```python
hash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

### ComputeVpnEndpointV2Timeouts <a name="ComputeVpnEndpointV2Timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnEndpointV2PhaseOneSettingsOutputReference <a name="ComputeVpnEndpointV2PhaseOneSettingsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resetLifetime">reset_lifetime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lifetime` <a name="reset_lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resetLifetime"></a>

```python
def reset_lifetime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroupInput">dh_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryptionInput">encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hashInput">hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetimeInput">lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroup">dh_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryption">encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hash">hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dh_group_input`<sup>Optional</sup> <a name="dh_group_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroupInput"></a>

```python
dh_group_input: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryptionInput"></a>

```python
encryption_input: str
```

- *Type:* str

---

##### `hash_input`<sup>Optional</sup> <a name="hash_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hashInput"></a>

```python
hash_input: str
```

- *Type:* str

---

##### `lifetime_input`<sup>Optional</sup> <a name="lifetime_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetimeInput"></a>

```python
lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `dh_group`<sup>Required</sup> <a name="dh_group" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroup"></a>

```python
dh_group: str
```

- *Type:* str

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryption"></a>

```python
encryption: str
```

- *Type:* str

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hash"></a>

```python
hash: str
```

- *Type:* str

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeVpnEndpointV2PhaseOneSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---


### ComputeVpnEndpointV2PhaseTwoSettingsOutputReference <a name="ComputeVpnEndpointV2PhaseTwoSettingsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resetLifetime">reset_lifetime</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_lifetime` <a name="reset_lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resetLifetime"></a>

```python
def reset_lifetime() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryptionInput">encryption_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hashInput">hash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetimeInput">lifetime_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryption">encryption</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hash">hash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetime">lifetime</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `encryption_input`<sup>Optional</sup> <a name="encryption_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryptionInput"></a>

```python
encryption_input: str
```

- *Type:* str

---

##### `hash_input`<sup>Optional</sup> <a name="hash_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hashInput"></a>

```python
hash_input: str
```

- *Type:* str

---

##### `lifetime_input`<sup>Optional</sup> <a name="lifetime_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetimeInput"></a>

```python
lifetime_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryption"></a>

```python
encryption: str
```

- *Type:* str

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hash"></a>

```python
hash: str
```

- *Type:* str

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetime"></a>

```python
lifetime: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.internalValue"></a>

```python
internal_value: ComputeVpnEndpointV2PhaseTwoSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---


### ComputeVpnEndpointV2TimeoutsOutputReference <a name="ComputeVpnEndpointV2TimeoutsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_vpn_endpoint_v2

computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeVpnEndpointV2Timeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>]

---



