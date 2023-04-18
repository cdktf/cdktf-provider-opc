# `opc_compute_security_rule`

Refer to the Terraform Registory for docs: [`opc_compute_security_rule`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule).

# `computeSecurityRule` Submodule <a name="`computeSecurityRule` Submodule" id="@cdktf/provider-opc.computeSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityRule <a name="ComputeSecurityRule" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule opc_compute_security_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_security_rule.ComputeSecurityRule;

ComputeSecurityRule.Builder.create(Construct scope, java.lang.String id)
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
    .flowDirection(java.lang.String)
    .name(java.lang.String)
//  .acl(java.lang.String)
//  .description(java.lang.String)
//  .dstIpAddressPrefixes(java.util.List<java.lang.String>)
//  .dstVnicSet(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .securityProtocols(java.util.List<java.lang.String>)
//  .srcIpAddressPrefixes(java.util.List<java.lang.String>)
//  .srcVnicSet(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.flowDirection">flowDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#name ComputeSecurityRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#acl ComputeSecurityRule#acl}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#description ComputeSecurityRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dstIpAddressPrefixes">dstIpAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dstVnicSet">dstVnicSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#enabled ComputeSecurityRule#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#id ComputeSecurityRule#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.securityProtocols">securityProtocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.srcIpAddressPrefixes">srcIpAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.srcVnicSet">srcVnicSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#tags ComputeSecurityRule#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flowDirection`<sup>Required</sup> <a name="flowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.flowDirection"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#name ComputeSecurityRule#name}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.acl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#acl ComputeSecurityRule#acl}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#description ComputeSecurityRule#description}.

---

##### `dstIpAddressPrefixes`<sup>Optional</sup> <a name="dstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dstIpAddressPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}.

---

##### `dstVnicSet`<sup>Optional</sup> <a name="dstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dstVnicSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#enabled ComputeSecurityRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#id ComputeSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityProtocols`<sup>Optional</sup> <a name="securityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.securityProtocols"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}.

---

##### `srcIpAddressPrefixes`<sup>Optional</sup> <a name="srcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.srcIpAddressPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}.

---

##### `srcVnicSet`<sup>Optional</sup> <a name="srcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.srcVnicSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#tags ComputeSecurityRule#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes">resetDstIpAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet">resetDstVnicSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols">resetSecurityProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes">resetSrcIpAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet">resetSrcVnicSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl"></a>

```java
public void resetAcl()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDstIpAddressPrefixes` <a name="resetDstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes"></a>

```java
public void resetDstIpAddressPrefixes()
```

##### `resetDstVnicSet` <a name="resetDstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet"></a>

```java
public void resetDstVnicSet()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId"></a>

```java
public void resetId()
```

##### `resetSecurityProtocols` <a name="resetSecurityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols"></a>

```java
public void resetSecurityProtocols()
```

##### `resetSrcIpAddressPrefixes` <a name="resetSrcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes"></a>

```java
public void resetSrcIpAddressPrefixes()
```

##### `resetSrcVnicSet` <a name="resetSrcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet"></a>

```java
public void resetSrcVnicSet()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_security_rule.ComputeSecurityRule;

ComputeSecurityRule.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_security_rule.ComputeSecurityRule;

ComputeSecurityRule.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_security_rule.ComputeSecurityRule;

ComputeSecurityRule.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput">aclInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput">dstIpAddressPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput">dstVnicSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput">flowDirectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput">securityProtocolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput">srcIpAddressPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput">srcVnicSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl">acl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes">dstIpAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet">dstVnicSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection">flowDirection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols">securityProtocols</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes">srcIpAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet">srcVnicSet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput"></a>

```java
public java.lang.String getAclInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `dstIpAddressPrefixesInput`<sup>Optional</sup> <a name="dstIpAddressPrefixesInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getDstIpAddressPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dstVnicSetInput`<sup>Optional</sup> <a name="dstVnicSetInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput"></a>

```java
public java.lang.String getDstVnicSetInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `flowDirectionInput`<sup>Optional</sup> <a name="flowDirectionInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput"></a>

```java
public java.lang.String getFlowDirectionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `securityProtocolsInput`<sup>Optional</sup> <a name="securityProtocolsInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityProtocolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpAddressPrefixesInput`<sup>Optional</sup> <a name="srcIpAddressPrefixesInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getSrcIpAddressPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcVnicSetInput`<sup>Optional</sup> <a name="srcVnicSetInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput"></a>

```java
public java.lang.String getSrcVnicSetInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dstIpAddressPrefixes`<sup>Required</sup> <a name="dstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getDstIpAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dstVnicSet`<sup>Required</sup> <a name="dstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet"></a>

```java
public java.lang.String getDstVnicSet();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `flowDirection`<sup>Required</sup> <a name="flowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection"></a>

```java
public java.lang.String getFlowDirection();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `securityProtocols`<sup>Required</sup> <a name="securityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols"></a>

```java
public java.util.List<java.lang.String> getSecurityProtocols();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcIpAddressPrefixes`<sup>Required</sup> <a name="srcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getSrcIpAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `srcVnicSet`<sup>Required</sup> <a name="srcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet"></a>

```java
public java.lang.String getSrcVnicSet();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityRuleConfig <a name="ComputeSecurityRuleConfig" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_security_rule.ComputeSecurityRuleConfig;

ComputeSecurityRuleConfig.builder()
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
    .flowDirection(java.lang.String)
    .name(java.lang.String)
//  .acl(java.lang.String)
//  .description(java.lang.String)
//  .dstIpAddressPrefixes(java.util.List<java.lang.String>)
//  .dstVnicSet(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .securityProtocols(java.util.List<java.lang.String>)
//  .srcIpAddressPrefixes(java.util.List<java.lang.String>)
//  .srcVnicSet(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection">flowDirection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#name ComputeSecurityRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl">acl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#acl ComputeSecurityRule#acl}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#description ComputeSecurityRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes">dstIpAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet">dstVnicSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#enabled ComputeSecurityRule#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#id ComputeSecurityRule#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols">securityProtocols</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes">srcIpAddressPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet">srcVnicSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#tags ComputeSecurityRule#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `flowDirection`<sup>Required</sup> <a name="flowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection"></a>

```java
public java.lang.String getFlowDirection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#name ComputeSecurityRule#name}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl"></a>

```java
public java.lang.String getAcl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#acl ComputeSecurityRule#acl}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#description ComputeSecurityRule#description}.

---

##### `dstIpAddressPrefixes`<sup>Optional</sup> <a name="dstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getDstIpAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}.

---

##### `dstVnicSet`<sup>Optional</sup> <a name="dstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet"></a>

```java
public java.lang.String getDstVnicSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#enabled ComputeSecurityRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#id ComputeSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityProtocols`<sup>Optional</sup> <a name="securityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols"></a>

```java
public java.util.List<java.lang.String> getSecurityProtocols();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}.

---

##### `srcIpAddressPrefixes`<sup>Optional</sup> <a name="srcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes"></a>

```java
public java.util.List<java.lang.String> getSrcIpAddressPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}.

---

##### `srcVnicSet`<sup>Optional</sup> <a name="srcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet"></a>

```java
public java.lang.String getSrcVnicSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#tags ComputeSecurityRule#tags}.

---



