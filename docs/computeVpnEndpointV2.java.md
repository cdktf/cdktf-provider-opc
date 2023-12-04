# `computeVpnEndpointV2` Submodule <a name="`computeVpnEndpointV2` Submodule" id="@cdktf/provider-opc.computeVpnEndpointV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnEndpointV2 <a name="ComputeVpnEndpointV2" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2 opc_compute_vpn_endpoint_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2;

ComputeVpnEndpointV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .customerVpnGateway(java.lang.String)
    .ipNetwork(java.lang.String)
    .name(java.lang.String)
    .preSharedKey(java.lang.String)
    .reachableRoutes(java.util.List<java.lang.String>)
    .vnicSets(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .ikeIdentifier(java.lang.String)
//  .phaseOneSettings(ComputeVpnEndpointV2PhaseOneSettings)
//  .phaseTwoSettings(ComputeVpnEndpointV2PhaseTwoSettings)
//  .requirePerfectForwardSecrecy(java.lang.Boolean)
//  .requirePerfectForwardSecrecy(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeVpnEndpointV2Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.customerVpnGateway">customerVpnGateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.preSharedKey">preSharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.reachableRoutes">reachableRoutes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.vnicSets">vnicSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.ikeIdentifier">ikeIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.phaseOneSettings">phaseOneSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | phase_one_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.phaseTwoSettings">phaseTwoSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | phase_two_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.requirePerfectForwardSecrecy">requirePerfectForwardSecrecy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerVpnGateway`<sup>Required</sup> <a name="customerVpnGateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.customerVpnGateway"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}.

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.ipNetwork"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}.

---

##### `preSharedKey`<sup>Required</sup> <a name="preSharedKey" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.preSharedKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}.

---

##### `reachableRoutes`<sup>Required</sup> <a name="reachableRoutes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.reachableRoutes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}.

---

##### `vnicSets`<sup>Required</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.vnicSets"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeIdentifier`<sup>Optional</sup> <a name="ikeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.ikeIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}.

---

##### `phaseOneSettings`<sup>Optional</sup> <a name="phaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.phaseOneSettings"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

phase_one_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_one_settings ComputeVpnEndpointV2#phase_one_settings}

---

##### `phaseTwoSettings`<sup>Optional</sup> <a name="phaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.phaseTwoSettings"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

phase_two_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_two_settings ComputeVpnEndpointV2#phase_two_settings}

---

##### `requirePerfectForwardSecrecy`<sup>Optional</sup> <a name="requirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.requirePerfectForwardSecrecy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

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
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings">putPhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings">putPhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetIkeIdentifier">resetIkeIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseOneSettings">resetPhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseTwoSettings">resetPhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetRequirePerfectForwardSecrecy">resetRequirePerfectForwardSecrecy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPhaseOneSettings` <a name="putPhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings"></a>

```java
public void putPhaseOneSettings(ComputeVpnEndpointV2PhaseOneSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---

##### `putPhaseTwoSettings` <a name="putPhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings"></a>

```java
public void putPhaseTwoSettings(ComputeVpnEndpointV2PhaseTwoSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts"></a>

```java
public void putTimeouts(ComputeVpnEndpointV2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetId"></a>

```java
public void resetId()
```

##### `resetIkeIdentifier` <a name="resetIkeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetIkeIdentifier"></a>

```java
public void resetIkeIdentifier()
```

##### `resetPhaseOneSettings` <a name="resetPhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseOneSettings"></a>

```java
public void resetPhaseOneSettings()
```

##### `resetPhaseTwoSettings` <a name="resetPhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseTwoSettings"></a>

```java
public void resetPhaseTwoSettings()
```

##### `resetRequirePerfectForwardSecrecy` <a name="resetRequirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetRequirePerfectForwardSecrecy"></a>

```java
public void resetRequirePerfectForwardSecrecy()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeVpnEndpointV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2;

ComputeVpnEndpointV2.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2;

ComputeVpnEndpointV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2;

ComputeVpnEndpointV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2;

ComputeVpnEndpointV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeVpnEndpointV2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeVpnEndpointV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeVpnEndpointV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeVpnEndpointV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeVpnEndpointV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayIpAddress">localGatewayIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayPrivateIpAddress">localGatewayPrivateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettings">phaseOneSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference">ComputeVpnEndpointV2PhaseOneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettings">phaseTwoSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference">ComputeVpnEndpointV2PhaseTwoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference">ComputeVpnEndpointV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tunnelStatus">tunnelStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGatewayInput">customerVpnGatewayInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifierInput">ikeIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetworkInput">ipNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettingsInput">phaseOneSettingsInput</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettingsInput">phaseTwoSettingsInput</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKeyInput">preSharedKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutesInput">reachableRoutesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecyInput">requirePerfectForwardSecrecyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSetsInput">vnicSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGateway">customerVpnGateway</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifier">ikeIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKey">preSharedKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutes">reachableRoutes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecy">requirePerfectForwardSecrecy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSets">vnicSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `localGatewayIpAddress`<sup>Required</sup> <a name="localGatewayIpAddress" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayIpAddress"></a>

```java
public java.lang.String getLocalGatewayIpAddress();
```

- *Type:* java.lang.String

---

##### `localGatewayPrivateIpAddress`<sup>Required</sup> <a name="localGatewayPrivateIpAddress" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayPrivateIpAddress"></a>

```java
public java.lang.String getLocalGatewayPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `phaseOneSettings`<sup>Required</sup> <a name="phaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettings"></a>

```java
public ComputeVpnEndpointV2PhaseOneSettingsOutputReference getPhaseOneSettings();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference">ComputeVpnEndpointV2PhaseOneSettingsOutputReference</a>

---

##### `phaseTwoSettings`<sup>Required</sup> <a name="phaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettings"></a>

```java
public ComputeVpnEndpointV2PhaseTwoSettingsOutputReference getPhaseTwoSettings();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference">ComputeVpnEndpointV2PhaseTwoSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeouts"></a>

```java
public ComputeVpnEndpointV2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference">ComputeVpnEndpointV2TimeoutsOutputReference</a>

---

##### `tunnelStatus`<sup>Required</sup> <a name="tunnelStatus" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tunnelStatus"></a>

```java
public java.lang.String getTunnelStatus();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `customerVpnGatewayInput`<sup>Optional</sup> <a name="customerVpnGatewayInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGatewayInput"></a>

```java
public java.lang.String getCustomerVpnGatewayInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ikeIdentifierInput`<sup>Optional</sup> <a name="ikeIdentifierInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifierInput"></a>

```java
public java.lang.String getIkeIdentifierInput();
```

- *Type:* java.lang.String

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetworkInput"></a>

```java
public java.lang.String getIpNetworkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `phaseOneSettingsInput`<sup>Optional</sup> <a name="phaseOneSettingsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettingsInput"></a>

```java
public ComputeVpnEndpointV2PhaseOneSettings getPhaseOneSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---

##### `phaseTwoSettingsInput`<sup>Optional</sup> <a name="phaseTwoSettingsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettingsInput"></a>

```java
public ComputeVpnEndpointV2PhaseTwoSettings getPhaseTwoSettingsInput();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---

##### `preSharedKeyInput`<sup>Optional</sup> <a name="preSharedKeyInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKeyInput"></a>

```java
public java.lang.String getPreSharedKeyInput();
```

- *Type:* java.lang.String

---

##### `reachableRoutesInput`<sup>Optional</sup> <a name="reachableRoutesInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutesInput"></a>

```java
public java.util.List<java.lang.String> getReachableRoutesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requirePerfectForwardSecrecyInput`<sup>Optional</sup> <a name="requirePerfectForwardSecrecyInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecyInput"></a>

```java
public java.lang.Object getRequirePerfectForwardSecrecyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

---

##### `vnicSetsInput`<sup>Optional</sup> <a name="vnicSetsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSetsInput"></a>

```java
public java.util.List<java.lang.String> getVnicSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `customerVpnGateway`<sup>Required</sup> <a name="customerVpnGateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGateway"></a>

```java
public java.lang.String getCustomerVpnGateway();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ikeIdentifier`<sup>Required</sup> <a name="ikeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifier"></a>

```java
public java.lang.String getIkeIdentifier();
```

- *Type:* java.lang.String

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `preSharedKey`<sup>Required</sup> <a name="preSharedKey" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKey"></a>

```java
public java.lang.String getPreSharedKey();
```

- *Type:* java.lang.String

---

##### `reachableRoutes`<sup>Required</sup> <a name="reachableRoutes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutes"></a>

```java
public java.util.List<java.lang.String> getReachableRoutes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `requirePerfectForwardSecrecy`<sup>Required</sup> <a name="requirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecy"></a>

```java
public java.lang.Object getRequirePerfectForwardSecrecy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vnicSets`<sup>Required</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSets"></a>

```java
public java.util.List<java.lang.String> getVnicSets();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnEndpointV2Config <a name="ComputeVpnEndpointV2Config" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2Config;

ComputeVpnEndpointV2Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .customerVpnGateway(java.lang.String)
    .ipNetwork(java.lang.String)
    .name(java.lang.String)
    .preSharedKey(java.lang.String)
    .reachableRoutes(java.util.List<java.lang.String>)
    .vnicSets(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .ikeIdentifier(java.lang.String)
//  .phaseOneSettings(ComputeVpnEndpointV2PhaseOneSettings)
//  .phaseTwoSettings(ComputeVpnEndpointV2PhaseTwoSettings)
//  .requirePerfectForwardSecrecy(java.lang.Boolean)
//  .requirePerfectForwardSecrecy(IResolvable)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeVpnEndpointV2Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.customerVpnGateway">customerVpnGateway</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.preSharedKey">preSharedKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.reachableRoutes">reachableRoutes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.vnicSets">vnicSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ikeIdentifier">ikeIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseOneSettings">phaseOneSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | phase_one_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseTwoSettings">phaseTwoSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | phase_two_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.requirePerfectForwardSecrecy">requirePerfectForwardSecrecy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `customerVpnGateway`<sup>Required</sup> <a name="customerVpnGateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.customerVpnGateway"></a>

```java
public java.lang.String getCustomerVpnGateway();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}.

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}.

---

##### `preSharedKey`<sup>Required</sup> <a name="preSharedKey" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.preSharedKey"></a>

```java
public java.lang.String getPreSharedKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}.

---

##### `reachableRoutes`<sup>Required</sup> <a name="reachableRoutes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.reachableRoutes"></a>

```java
public java.util.List<java.lang.String> getReachableRoutes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}.

---

##### `vnicSets`<sup>Required</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.vnicSets"></a>

```java
public java.util.List<java.lang.String> getVnicSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ikeIdentifier`<sup>Optional</sup> <a name="ikeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ikeIdentifier"></a>

```java
public java.lang.String getIkeIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}.

---

##### `phaseOneSettings`<sup>Optional</sup> <a name="phaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseOneSettings"></a>

```java
public ComputeVpnEndpointV2PhaseOneSettings getPhaseOneSettings();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

phase_one_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_one_settings ComputeVpnEndpointV2#phase_one_settings}

---

##### `phaseTwoSettings`<sup>Optional</sup> <a name="phaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseTwoSettings"></a>

```java
public ComputeVpnEndpointV2PhaseTwoSettings getPhaseTwoSettings();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

phase_two_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_two_settings ComputeVpnEndpointV2#phase_two_settings}

---

##### `requirePerfectForwardSecrecy`<sup>Optional</sup> <a name="requirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.requirePerfectForwardSecrecy"></a>

```java
public java.lang.Object getRequirePerfectForwardSecrecy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.timeouts"></a>

```java
public ComputeVpnEndpointV2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#timeouts ComputeVpnEndpointV2#timeouts}

---

### ComputeVpnEndpointV2PhaseOneSettings <a name="ComputeVpnEndpointV2PhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2PhaseOneSettings;

ComputeVpnEndpointV2PhaseOneSettings.builder()
    .dhGroup(java.lang.String)
    .encryption(java.lang.String)
    .hash(java.lang.String)
//  .lifetime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.dhGroup">dhGroup</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.encryption">encryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.hash">hash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}. |

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.dhGroup"></a>

```java
public java.lang.String getDhGroup();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}.

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

### ComputeVpnEndpointV2PhaseTwoSettings <a name="ComputeVpnEndpointV2PhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2PhaseTwoSettings;

ComputeVpnEndpointV2PhaseTwoSettings.builder()
    .encryption(java.lang.String)
    .hash(java.lang.String)
//  .lifetime(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.encryption">encryption</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.hash">hash</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}. |

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

##### `lifetime`<sup>Optional</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

### ComputeVpnEndpointV2Timeouts <a name="ComputeVpnEndpointV2Timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2Timeouts;

ComputeVpnEndpointV2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnEndpointV2PhaseOneSettingsOutputReference <a name="ComputeVpnEndpointV2PhaseOneSettingsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference;

new ComputeVpnEndpointV2PhaseOneSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resetLifetime"></a>

```java
public void resetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroupInput">dhGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryptionInput">encryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hashInput">hashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroup">dhGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryption">encryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hash">hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dhGroupInput`<sup>Optional</sup> <a name="dhGroupInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroupInput"></a>

```java
public java.lang.String getDhGroupInput();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryptionInput"></a>

```java
public java.lang.String getEncryptionInput();
```

- *Type:* java.lang.String

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hashInput"></a>

```java
public java.lang.String getHashInput();
```

- *Type:* java.lang.String

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetimeInput"></a>

```java
public java.lang.Number getLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `dhGroup`<sup>Required</sup> <a name="dhGroup" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroup"></a>

```java
public java.lang.String getDhGroup();
```

- *Type:* java.lang.String

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.internalValue"></a>

```java
public ComputeVpnEndpointV2PhaseOneSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---


### ComputeVpnEndpointV2PhaseTwoSettingsOutputReference <a name="ComputeVpnEndpointV2PhaseTwoSettingsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference;

new ComputeVpnEndpointV2PhaseTwoSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resetLifetime">resetLifetime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLifetime` <a name="resetLifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resetLifetime"></a>

```java
public void resetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryptionInput">encryptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hashInput">hashInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetimeInput">lifetimeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryption">encryption</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hash">hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetime">lifetime</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionInput`<sup>Optional</sup> <a name="encryptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryptionInput"></a>

```java
public java.lang.String getEncryptionInput();
```

- *Type:* java.lang.String

---

##### `hashInput`<sup>Optional</sup> <a name="hashInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hashInput"></a>

```java
public java.lang.String getHashInput();
```

- *Type:* java.lang.String

---

##### `lifetimeInput`<sup>Optional</sup> <a name="lifetimeInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetimeInput"></a>

```java
public java.lang.Number getLifetimeInput();
```

- *Type:* java.lang.Number

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryption"></a>

```java
public java.lang.String getEncryption();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

---

##### `lifetime`<sup>Required</sup> <a name="lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetime"></a>

```java
public java.lang.Number getLifetime();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.internalValue"></a>

```java
public ComputeVpnEndpointV2PhaseTwoSettings getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---


### ComputeVpnEndpointV2TimeoutsOutputReference <a name="ComputeVpnEndpointV2TimeoutsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_vpn_endpoint_v2.ComputeVpnEndpointV2TimeoutsOutputReference;

new ComputeVpnEndpointV2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

---



