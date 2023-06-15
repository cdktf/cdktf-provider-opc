# `opc_compute_instance`

Refer to the Terraform Registory for docs: [`opc_compute_instance`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance).

# `computeInstance` Submodule <a name="`computeInstance` Submodule" id="@cdktf/provider-opc.computeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstance <a name="ComputeInstance" id="@cdktf/provider-opc.computeInstance.ComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance opc_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstance;

ComputeInstance.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .shape(java.lang.String)
//  .bootOrder(java.util.List<java.lang.Number>)
//  .desiredState(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .imageList(java.lang.String)
//  .instanceAttributes(java.lang.String)
//  .label(java.lang.String)
//  .networkingInfo(IResolvable)
//  .networkingInfo(java.util.List<ComputeInstanceNetworkingInfo>)
//  .reverseDns(java.lang.Boolean)
//  .reverseDns(IResolvable)
//  .sshKeys(java.util.List<java.lang.String>)
//  .storage(IResolvable)
//  .storage(java.util.List<ComputeInstanceStorage>)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.bootOrder">bootOrder</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.imageList">imageList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.instanceAttributes">instanceAttributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.networkingInfo">networkingInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>></code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.reverseDns">reverseDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.storage">storage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>></code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}.

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.bootOrder"></a>

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.hostname"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageList`<sup>Optional</sup> <a name="imageList" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.imageList"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}.

---

##### `instanceAttributes`<sup>Optional</sup> <a name="instanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.instanceAttributes"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.label"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}.

---

##### `networkingInfo`<sup>Optional</sup> <a name="networkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.networkingInfo"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>>

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#networking_info ComputeInstance#networking_info}

---

##### `reverseDns`<sup>Optional</sup> <a name="reverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.reverseDns"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}.

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.sshKeys"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.storage"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#storage ComputeInstance#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo">putNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetBootOrder">resetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetImageList">resetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetInstanceAttributes">resetInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetNetworkingInfo">resetNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetReverseDns">resetReverseDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putNetworkingInfo` <a name="putNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo"></a>

```java
public void putNetworkingInfo(IResolvable OR java.util.List<ComputeInstanceNetworkingInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage"></a>

```java
public void putStorage(IResolvable OR java.util.List<ComputeInstanceStorage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts"></a>

```java
public void putTimeouts(ComputeInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

---

##### `resetBootOrder` <a name="resetBootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetBootOrder"></a>

```java
public void resetBootOrder()
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetDesiredState"></a>

```java
public void resetDesiredState()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetId"></a>

```java
public void resetId()
```

##### `resetImageList` <a name="resetImageList" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetImageList"></a>

```java
public void resetImageList()
```

##### `resetInstanceAttributes` <a name="resetInstanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetInstanceAttributes"></a>

```java
public void resetInstanceAttributes()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetNetworkingInfo` <a name="resetNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetNetworkingInfo"></a>

```java
public void resetNetworkingInfo()
```

##### `resetReverseDns` <a name="resetReverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetReverseDns"></a>

```java
public void resetReverseDns()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstance;

ComputeInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstance;

ComputeInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstance;

ComputeInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.entry">entry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageFormat">imageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfo">networkingInfo</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList">ComputeInstanceNetworkingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.placementRequirements">placementRequirements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.quotaReservation">quotaReservation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.relationships">relationships</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.resolvers">resolvers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.site">site</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList">ComputeInstanceStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference">ComputeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.vcable">vcable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.virtio">virtio</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.vncAddress">vncAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrderInput">bootOrderInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageListInput">imageListInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributesInput">instanceAttributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfoInput">networkingInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDnsInput">reverseDnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.storageInput">storageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrder">bootOrder</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageList">imageList</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributes">instanceAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDns">reverseDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.entry"></a>

```java
public java.lang.Number getEntry();
```

- *Type:* java.lang.Number

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `imageFormat`<sup>Required</sup> <a name="imageFormat" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageFormat"></a>

```java
public java.lang.String getImageFormat();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `networkingInfo`<sup>Required</sup> <a name="networkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfo"></a>

```java
public ComputeInstanceNetworkingInfoList getNetworkingInfo();
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList">ComputeInstanceNetworkingInfoList</a>

---

##### `placementRequirements`<sup>Required</sup> <a name="placementRequirements" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.placementRequirements"></a>

```java
public java.util.List<java.lang.String> getPlacementRequirements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `quotaReservation`<sup>Required</sup> <a name="quotaReservation" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.quotaReservation"></a>

```java
public java.lang.String getQuotaReservation();
```

- *Type:* java.lang.String

---

##### `relationships`<sup>Required</sup> <a name="relationships" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.relationships"></a>

```java
public java.util.List<java.lang.String> getRelationships();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.resolvers"></a>

```java
public java.util.List<java.lang.String> getResolvers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.site"></a>

```java
public java.lang.String getSite();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.storage"></a>

```java
public ComputeInstanceStorageList getStorage();
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList">ComputeInstanceStorageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeouts"></a>

```java
public ComputeInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference">ComputeInstanceTimeoutsOutputReference</a>

---

##### `vcable`<sup>Required</sup> <a name="vcable" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.vcable"></a>

```java
public java.lang.String getVcable();
```

- *Type:* java.lang.String

---

##### `virtio`<sup>Required</sup> <a name="virtio" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.virtio"></a>

```java
public IResolvable getVirtio();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `vncAddress`<sup>Required</sup> <a name="vncAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.vncAddress"></a>

```java
public java.lang.String getVncAddress();
```

- *Type:* java.lang.String

---

##### `bootOrderInput`<sup>Optional</sup> <a name="bootOrderInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrderInput"></a>

```java
public java.util.List<java.lang.Number> getBootOrderInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageListInput`<sup>Optional</sup> <a name="imageListInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageListInput"></a>

```java
public java.lang.String getImageListInput();
```

- *Type:* java.lang.String

---

##### `instanceAttributesInput`<sup>Optional</sup> <a name="instanceAttributesInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributesInput"></a>

```java
public java.lang.String getInstanceAttributesInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkingInfoInput`<sup>Optional</sup> <a name="networkingInfoInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfoInput"></a>

```java
public java.lang.Object getNetworkingInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>>

---

##### `reverseDnsInput`<sup>Optional</sup> <a name="reverseDnsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDnsInput"></a>

```java
public java.lang.Object getReverseDnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.storageInput"></a>

```java
public java.lang.Object getStorageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrder"></a>

```java
public java.util.List<java.lang.Number> getBootOrder();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageList`<sup>Required</sup> <a name="imageList" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageList"></a>

```java
public java.lang.String getImageList();
```

- *Type:* java.lang.String

---

##### `instanceAttributes`<sup>Required</sup> <a name="instanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributes"></a>

```java
public java.lang.String getInstanceAttributes();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `reverseDns`<sup>Required</sup> <a name="reverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDns"></a>

```java
public java.lang.Object getReverseDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceConfig <a name="ComputeInstanceConfig" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceConfig;

ComputeInstanceConfig.builder()
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
    .name(java.lang.String)
    .shape(java.lang.String)
//  .bootOrder(java.util.List<java.lang.Number>)
//  .desiredState(java.lang.String)
//  .hostname(java.lang.String)
//  .id(java.lang.String)
//  .imageList(java.lang.String)
//  .instanceAttributes(java.lang.String)
//  .label(java.lang.String)
//  .networkingInfo(IResolvable)
//  .networkingInfo(java.util.List<ComputeInstanceNetworkingInfo>)
//  .reverseDns(java.lang.Boolean)
//  .reverseDns(IResolvable)
//  .sshKeys(java.util.List<java.lang.String>)
//  .storage(IResolvable)
//  .storage(java.util.List<ComputeInstanceStorage>)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.bootOrder">bootOrder</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.imageList">imageList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.instanceAttributes">instanceAttributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.networkingInfo">networkingInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>></code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.reverseDns">reverseDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.storage">storage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>></code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}.

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.bootOrder"></a>

```java
public java.util.List<java.lang.Number> getBootOrder();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageList`<sup>Optional</sup> <a name="imageList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.imageList"></a>

```java
public java.lang.String getImageList();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}.

---

##### `instanceAttributes`<sup>Optional</sup> <a name="instanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.instanceAttributes"></a>

```java
public java.lang.String getInstanceAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}.

---

##### `networkingInfo`<sup>Optional</sup> <a name="networkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.networkingInfo"></a>

```java
public java.lang.Object getNetworkingInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>>

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#networking_info ComputeInstance#networking_info}

---

##### `reverseDns`<sup>Optional</sup> <a name="reverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.reverseDns"></a>

```java
public java.lang.Object getReverseDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}.

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.storage"></a>

```java
public java.lang.Object getStorage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#storage ComputeInstance#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.timeouts"></a>

```java
public ComputeInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}

---

### ComputeInstanceNetworkingInfo <a name="ComputeInstanceNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceNetworkingInfo;

ComputeInstanceNetworkingInfo.builder()
    .index(java.lang.Number)
//  .dns(java.util.List<java.lang.String>)
//  .ipAddress(java.lang.String)
//  .ipNetwork(java.lang.String)
//  .isDefaultGateway(java.lang.Boolean)
//  .isDefaultGateway(IResolvable)
//  .macAddress(java.lang.String)
//  .nameServers(java.util.List<java.lang.String>)
//  .nat(java.util.List<java.lang.String>)
//  .searchDomains(java.util.List<java.lang.String>)
//  .secLists(java.util.List<java.lang.String>)
//  .sharedNetwork(java.lang.Boolean)
//  .sharedNetwork(IResolvable)
//  .vnic(java.lang.String)
//  .vnicSets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.index">index</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.isDefaultGateway">isDefaultGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nat">nat</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.secLists">secLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.sharedNetwork">sharedNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnic">vnic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnicSets">vnicSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}.

---

##### `isDefaultGateway`<sup>Optional</sup> <a name="isDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.isDefaultGateway"></a>

```java
public java.lang.Object getIsDefaultGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}.

---

##### `nameServers`<sup>Optional</sup> <a name="nameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nat"></a>

```java
public java.util.List<java.lang.String> getNat();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}.

---

##### `searchDomains`<sup>Optional</sup> <a name="searchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}.

---

##### `secLists`<sup>Optional</sup> <a name="secLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.secLists"></a>

```java
public java.util.List<java.lang.String> getSecLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}.

---

##### `sharedNetwork`<sup>Optional</sup> <a name="sharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.sharedNetwork"></a>

```java
public java.lang.Object getSharedNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}.

---

##### `vnic`<sup>Optional</sup> <a name="vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnic"></a>

```java
public java.lang.String getVnic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}.

---

##### `vnicSets`<sup>Optional</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnicSets"></a>

```java
public java.util.List<java.lang.String> getVnicSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}.

---

### ComputeInstanceStorage <a name="ComputeInstanceStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceStorage;

ComputeInstanceStorage.builder()
    .index(java.lang.Number)
    .volume(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.index">index</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.volume">volume</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}.

---

### ComputeInstanceTimeouts <a name="ComputeInstanceTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceTimeouts;

ComputeInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceNetworkingInfoList <a name="ComputeInstanceNetworkingInfoList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceNetworkingInfoList;

new ComputeInstanceNetworkingInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get"></a>

```java
public ComputeInstanceNetworkingInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>>

---


### ComputeInstanceNetworkingInfoOutputReference <a name="ComputeInstanceNetworkingInfoOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceNetworkingInfoOutputReference;

new ComputeInstanceNetworkingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpNetwork">resetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIsDefaultGateway">resetIsDefaultGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNameServers">resetNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNat">resetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSearchDomains">resetSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSecLists">resetSecLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSharedNetwork">resetSharedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnic">resetVnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnicSets">resetVnicSets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDns` <a name="resetDns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetDns"></a>

```java
public void resetDns()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpNetwork"></a>

```java
public void resetIpNetwork()
```

##### `resetIsDefaultGateway` <a name="resetIsDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIsDefaultGateway"></a>

```java
public void resetIsDefaultGateway()
```

##### `resetMacAddress` <a name="resetMacAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetMacAddress"></a>

```java
public void resetMacAddress()
```

##### `resetNameServers` <a name="resetNameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNameServers"></a>

```java
public void resetNameServers()
```

##### `resetNat` <a name="resetNat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNat"></a>

```java
public void resetNat()
```

##### `resetSearchDomains` <a name="resetSearchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSearchDomains"></a>

```java
public void resetSearchDomains()
```

##### `resetSecLists` <a name="resetSecLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSecLists"></a>

```java
public void resetSecLists()
```

##### `resetSharedNetwork` <a name="resetSharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSharedNetwork"></a>

```java
public void resetSharedNetwork()
```

##### `resetVnic` <a name="resetVnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnic"></a>

```java
public void resetVnic()
```

##### `resetVnicSets` <a name="resetVnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnicSets"></a>

```java
public void resetVnicSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dnsInput">dnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetworkInput">ipNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput">isDefaultGatewayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddressInput">macAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServersInput">nameServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.natInput">natInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomainsInput">searchDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secListsInput">secListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetworkInput">sharedNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicInput">vnicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSetsInput">vnicSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.index">index</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGateway">isDefaultGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nat">nat</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secLists">secLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetwork">sharedNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnic">vnic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSets">vnicSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dnsInput"></a>

```java
public java.util.List<java.lang.String> getDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.indexInput"></a>

```java
public java.lang.Number getIndexInput();
```

- *Type:* java.lang.Number

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetworkInput"></a>

```java
public java.lang.String getIpNetworkInput();
```

- *Type:* java.lang.String

---

##### `isDefaultGatewayInput`<sup>Optional</sup> <a name="isDefaultGatewayInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput"></a>

```java
public java.lang.Object getIsDefaultGatewayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddressInput"></a>

```java
public java.lang.String getMacAddressInput();
```

- *Type:* java.lang.String

---

##### `nameServersInput`<sup>Optional</sup> <a name="nameServersInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServersInput"></a>

```java
public java.util.List<java.lang.String> getNameServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `natInput`<sup>Optional</sup> <a name="natInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.natInput"></a>

```java
public java.util.List<java.lang.String> getNatInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomainsInput`<sup>Optional</sup> <a name="searchDomainsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomainsInput"></a>

```java
public java.util.List<java.lang.String> getSearchDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secListsInput`<sup>Optional</sup> <a name="secListsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secListsInput"></a>

```java
public java.util.List<java.lang.String> getSecListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedNetworkInput`<sup>Optional</sup> <a name="sharedNetworkInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetworkInput"></a>

```java
public java.lang.Object getSharedNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnicInput`<sup>Optional</sup> <a name="vnicInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicInput"></a>

```java
public java.lang.String getVnicInput();
```

- *Type:* java.lang.String

---

##### `vnicSetsInput`<sup>Optional</sup> <a name="vnicSetsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSetsInput"></a>

```java
public java.util.List<java.lang.String> getVnicSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

---

##### `isDefaultGateway`<sup>Required</sup> <a name="isDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGateway"></a>

```java
public java.lang.Object getIsDefaultGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nat"></a>

```java
public java.util.List<java.lang.String> getNat();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secLists`<sup>Required</sup> <a name="secLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secLists"></a>

```java
public java.util.List<java.lang.String> getSecLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedNetwork`<sup>Required</sup> <a name="sharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetwork"></a>

```java
public java.lang.Object getSharedNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnic"></a>

```java
public java.lang.String getVnic();
```

- *Type:* java.lang.String

---

##### `vnicSets`<sup>Required</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSets"></a>

```java
public java.util.List<java.lang.String> getVnicSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>

---


### ComputeInstanceStorageList <a name="ComputeInstanceStorageList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceStorageList;

new ComputeInstanceStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get"></a>

```java
public ComputeInstanceStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>>

---


### ComputeInstanceStorageOutputReference <a name="ComputeInstanceStorageOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceStorageOutputReference;

new ComputeInstanceStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volumeInput">volumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.index">index</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volume">volume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.indexInput"></a>

```java
public java.lang.Number getIndexInput();
```

- *Type:* java.lang.Number

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volumeInput"></a>

```java
public java.lang.String getVolumeInput();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>

---


### ComputeInstanceTimeoutsOutputReference <a name="ComputeInstanceTimeoutsOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_instance.ComputeInstanceTimeoutsOutputReference;

new ComputeInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

---



