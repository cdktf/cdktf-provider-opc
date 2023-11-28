# `computeOrchestratedInstance` Submodule <a name="`computeOrchestratedInstance` Submodule" id="@cdktf/provider-opc.computeOrchestratedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrchestratedInstance <a name="ComputeOrchestratedInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance opc_compute_orchestrated_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstance;

ComputeOrchestratedInstance.Builder.create(Construct scope, java.lang.String id)
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
    .desiredState(java.lang.String)
    .instance(IResolvable)
    .instance(java.util.List<ComputeOrchestratedInstanceInstance>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeOrchestratedInstanceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.instance">instance</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>></code> | instance block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.desiredState"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.instance"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>>

instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance ComputeOrchestratedInstance#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#timeouts ComputeOrchestratedInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance">putInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putInstance` <a name="putInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance"></a>

```java
public void putInstance(IResolvable OR java.util.List<ComputeOrchestratedInstanceInstance> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts"></a>

```java
public void putTimeouts(ComputeOrchestratedInstanceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeOrchestratedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstance;

ComputeOrchestratedInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstance;

ComputeOrchestratedInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstance;

ComputeOrchestratedInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstance;

ComputeOrchestratedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeOrchestratedInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeOrchestratedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeOrchestratedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeOrchestratedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeOrchestratedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instance">instance</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList">ComputeOrchestratedInstanceInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference">ComputeOrchestratedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instanceInput">instanceInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instance"></a>

```java
public ComputeOrchestratedInstanceInstanceList getInstance();
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList">ComputeOrchestratedInstanceInstanceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeouts"></a>

```java
public ComputeOrchestratedInstanceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference">ComputeOrchestratedInstanceTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredStateInput"></a>

```java
public java.lang.String getDesiredStateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instanceInput"></a>

```java
public java.lang.Object getInstanceInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrchestratedInstanceConfig <a name="ComputeOrchestratedInstanceConfig" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceConfig;

ComputeOrchestratedInstanceConfig.builder()
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
    .desiredState(java.lang.String)
    .instance(IResolvable)
    .instance(java.util.List<ComputeOrchestratedInstanceInstance>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeOrchestratedInstanceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.desiredState">desiredState</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.instance">instance</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>></code> | instance block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.desiredState"></a>

```java
public java.lang.String getDesiredState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.instance"></a>

```java
public java.lang.Object getInstance();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>>

instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance ComputeOrchestratedInstance#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.timeouts"></a>

```java
public ComputeOrchestratedInstanceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#timeouts ComputeOrchestratedInstance#timeouts}

---

### ComputeOrchestratedInstanceInstance <a name="ComputeOrchestratedInstanceInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstance;

ComputeOrchestratedInstanceInstance.builder()
    .name(java.lang.String)
    .shape(java.lang.String)
//  .bootOrder(java.util.List<java.lang.Number>)
//  .hostname(java.lang.String)
//  .imageList(java.lang.String)
//  .instanceAttributes(java.lang.String)
//  .label(java.lang.String)
//  .networkingInfo(IResolvable)
//  .networkingInfo(java.util.List<ComputeOrchestratedInstanceInstanceNetworkingInfo>)
//  .persistent(java.lang.Boolean)
//  .persistent(IResolvable)
//  .reverseDns(java.lang.Boolean)
//  .reverseDns(IResolvable)
//  .sshKeys(java.util.List<java.lang.String>)
//  .storage(IResolvable)
//  .storage(java.util.List<ComputeOrchestratedInstanceInstanceStorage>)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.shape">shape</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shape ComputeOrchestratedInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.bootOrder">bootOrder</a></code> | <code>java.util.List<java.lang.Number></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#boot_order ComputeOrchestratedInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#hostname ComputeOrchestratedInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.imageList">imageList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#image_list ComputeOrchestratedInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.instanceAttributes">instanceAttributes</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance_attributes ComputeOrchestratedInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.label">label</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#label ComputeOrchestratedInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.networkingInfo">networkingInfo</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>></code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.persistent">persistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#persistent ComputeOrchestratedInstance#persistent}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.reverseDns">reverseDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#reverse_dns ComputeOrchestratedInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ssh_keys ComputeOrchestratedInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.storage">storage</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>></code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shape ComputeOrchestratedInstance#shape}.

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.bootOrder"></a>

```java
public java.util.List<java.lang.Number> getBootOrder();
```

- *Type:* java.util.List<java.lang.Number>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#boot_order ComputeOrchestratedInstance#boot_order}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#hostname ComputeOrchestratedInstance#hostname}.

---

##### `imageList`<sup>Optional</sup> <a name="imageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.imageList"></a>

```java
public java.lang.String getImageList();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#image_list ComputeOrchestratedInstance#image_list}.

---

##### `instanceAttributes`<sup>Optional</sup> <a name="instanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.instanceAttributes"></a>

```java
public java.lang.String getInstanceAttributes();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance_attributes ComputeOrchestratedInstance#instance_attributes}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#label ComputeOrchestratedInstance#label}.

---

##### `networkingInfo`<sup>Optional</sup> <a name="networkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.networkingInfo"></a>

```java
public java.lang.Object getNetworkingInfo();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>>

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#networking_info ComputeOrchestratedInstance#networking_info}

---

##### `persistent`<sup>Optional</sup> <a name="persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.persistent"></a>

```java
public java.lang.Object getPersistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#persistent ComputeOrchestratedInstance#persistent}.

---

##### `reverseDns`<sup>Optional</sup> <a name="reverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.reverseDns"></a>

```java
public java.lang.Object getReverseDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#reverse_dns ComputeOrchestratedInstance#reverse_dns}.

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ssh_keys ComputeOrchestratedInstance#ssh_keys}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.storage"></a>

```java
public java.lang.Object getStorage();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>>

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#storage ComputeOrchestratedInstance#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

### ComputeOrchestratedInstanceInstanceNetworkingInfo <a name="ComputeOrchestratedInstanceInstanceNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstanceNetworkingInfo;

ComputeOrchestratedInstanceInstanceNetworkingInfo.builder()
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
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.index">index</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#dns ComputeOrchestratedInstance#dns}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_address ComputeOrchestratedInstance#ip_address}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_network ComputeOrchestratedInstance#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.isDefaultGateway">isDefaultGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#is_default_gateway ComputeOrchestratedInstance#is_default_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#mac_address ComputeOrchestratedInstance#mac_address}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name_servers ComputeOrchestratedInstance#name_servers}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nat">nat</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#nat ComputeOrchestratedInstance#nat}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#search_domains ComputeOrchestratedInstance#search_domains}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.secLists">secLists</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#sec_lists ComputeOrchestratedInstance#sec_lists}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.sharedNetwork">sharedNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shared_network ComputeOrchestratedInstance#shared_network}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnic">vnic</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic ComputeOrchestratedInstance#vnic}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnicSets">vnicSets</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic_sets ComputeOrchestratedInstance#vnic_sets}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#dns ComputeOrchestratedInstance#dns}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_address ComputeOrchestratedInstance#ip_address}.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_network ComputeOrchestratedInstance#ip_network}.

---

##### `isDefaultGateway`<sup>Optional</sup> <a name="isDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.isDefaultGateway"></a>

```java
public java.lang.Object getIsDefaultGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#is_default_gateway ComputeOrchestratedInstance#is_default_gateway}.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#mac_address ComputeOrchestratedInstance#mac_address}.

---

##### `nameServers`<sup>Optional</sup> <a name="nameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name_servers ComputeOrchestratedInstance#name_servers}.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nat"></a>

```java
public java.util.List<java.lang.String> getNat();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#nat ComputeOrchestratedInstance#nat}.

---

##### `searchDomains`<sup>Optional</sup> <a name="searchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#search_domains ComputeOrchestratedInstance#search_domains}.

---

##### `secLists`<sup>Optional</sup> <a name="secLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.secLists"></a>

```java
public java.util.List<java.lang.String> getSecLists();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#sec_lists ComputeOrchestratedInstance#sec_lists}.

---

##### `sharedNetwork`<sup>Optional</sup> <a name="sharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.sharedNetwork"></a>

```java
public java.lang.Object getSharedNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shared_network ComputeOrchestratedInstance#shared_network}.

---

##### `vnic`<sup>Optional</sup> <a name="vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnic"></a>

```java
public java.lang.String getVnic();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic ComputeOrchestratedInstance#vnic}.

---

##### `vnicSets`<sup>Optional</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnicSets"></a>

```java
public java.util.List<java.lang.String> getVnicSets();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic_sets ComputeOrchestratedInstance#vnic_sets}.

---

### ComputeOrchestratedInstanceInstanceStorage <a name="ComputeOrchestratedInstanceInstanceStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstanceStorage;

ComputeOrchestratedInstanceInstanceStorage.builder()
    .index(java.lang.Number)
    .volume(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.index">index</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.volume">volume</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#volume ComputeOrchestratedInstance#volume}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#volume ComputeOrchestratedInstance#volume}.

---

### ComputeOrchestratedInstanceTimeouts <a name="ComputeOrchestratedInstanceTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceTimeouts;

ComputeOrchestratedInstanceTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrchestratedInstanceInstanceList <a name="ComputeOrchestratedInstanceInstanceList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstanceList;

new ComputeOrchestratedInstanceInstanceList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get"></a>

```java
public ComputeOrchestratedInstanceInstanceOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>>

---


### ComputeOrchestratedInstanceInstanceNetworkingInfoList <a name="ComputeOrchestratedInstanceInstanceNetworkingInfoList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstanceNetworkingInfoList;

new ComputeOrchestratedInstanceInstanceNetworkingInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get"></a>

```java
public ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>>

---


### ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference <a name="ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference;

new ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpNetwork">resetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIsDefaultGateway">resetIsDefaultGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNameServers">resetNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNat">resetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSearchDomains">resetSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSecLists">resetSecLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSharedNetwork">resetSharedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnic">resetVnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnicSets">resetVnicSets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDns` <a name="resetDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetDns"></a>

```java
public void resetDns()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpNetwork"></a>

```java
public void resetIpNetwork()
```

##### `resetIsDefaultGateway` <a name="resetIsDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIsDefaultGateway"></a>

```java
public void resetIsDefaultGateway()
```

##### `resetMacAddress` <a name="resetMacAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetMacAddress"></a>

```java
public void resetMacAddress()
```

##### `resetNameServers` <a name="resetNameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNameServers"></a>

```java
public void resetNameServers()
```

##### `resetNat` <a name="resetNat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNat"></a>

```java
public void resetNat()
```

##### `resetSearchDomains` <a name="resetSearchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSearchDomains"></a>

```java
public void resetSearchDomains()
```

##### `resetSecLists` <a name="resetSecLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSecLists"></a>

```java
public void resetSecLists()
```

##### `resetSharedNetwork` <a name="resetSharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSharedNetwork"></a>

```java
public void resetSharedNetwork()
```

##### `resetVnic` <a name="resetVnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnic"></a>

```java
public void resetVnic()
```

##### `resetVnicSets` <a name="resetVnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnicSets"></a>

```java
public void resetVnicSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dnsInput">dnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetworkInput">ipNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput">isDefaultGatewayInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddressInput">macAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServersInput">nameServersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.natInput">natInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomainsInput">searchDomainsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secListsInput">secListsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetworkInput">sharedNetworkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicInput">vnicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSetsInput">vnicSetsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.index">index</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGateway">isDefaultGateway</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nat">nat</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secLists">secLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetwork">sharedNetwork</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnic">vnic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSets">vnicSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dnsInput"></a>

```java
public java.util.List<java.lang.String> getDnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.indexInput"></a>

```java
public java.lang.Number getIndexInput();
```

- *Type:* java.lang.Number

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetworkInput"></a>

```java
public java.lang.String getIpNetworkInput();
```

- *Type:* java.lang.String

---

##### `isDefaultGatewayInput`<sup>Optional</sup> <a name="isDefaultGatewayInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput"></a>

```java
public java.lang.Object getIsDefaultGatewayInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddressInput"></a>

```java
public java.lang.String getMacAddressInput();
```

- *Type:* java.lang.String

---

##### `nameServersInput`<sup>Optional</sup> <a name="nameServersInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServersInput"></a>

```java
public java.util.List<java.lang.String> getNameServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `natInput`<sup>Optional</sup> <a name="natInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.natInput"></a>

```java
public java.util.List<java.lang.String> getNatInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomainsInput`<sup>Optional</sup> <a name="searchDomainsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomainsInput"></a>

```java
public java.util.List<java.lang.String> getSearchDomainsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secListsInput`<sup>Optional</sup> <a name="secListsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secListsInput"></a>

```java
public java.util.List<java.lang.String> getSecListsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedNetworkInput`<sup>Optional</sup> <a name="sharedNetworkInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetworkInput"></a>

```java
public java.lang.Object getSharedNetworkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnicInput`<sup>Optional</sup> <a name="vnicInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicInput"></a>

```java
public java.lang.String getVnicInput();
```

- *Type:* java.lang.String

---

##### `vnicSetsInput`<sup>Optional</sup> <a name="vnicSetsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSetsInput"></a>

```java
public java.util.List<java.lang.String> getVnicSetsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

---

##### `isDefaultGateway`<sup>Required</sup> <a name="isDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGateway"></a>

```java
public java.lang.Object getIsDefaultGateway();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nat"></a>

```java
public java.util.List<java.lang.String> getNat();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secLists`<sup>Required</sup> <a name="secLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secLists"></a>

```java
public java.util.List<java.lang.String> getSecLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedNetwork`<sup>Required</sup> <a name="sharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetwork"></a>

```java
public java.lang.Object getSharedNetwork();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnic"></a>

```java
public java.lang.String getVnic();
```

- *Type:* java.lang.String

---

##### `vnicSets`<sup>Required</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSets"></a>

```java
public java.util.List<java.lang.String> getVnicSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>

---


### ComputeOrchestratedInstanceInstanceOutputReference <a name="ComputeOrchestratedInstanceInstanceOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstanceOutputReference;

new ComputeOrchestratedInstanceInstanceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo">putNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetBootOrder">resetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetImageList">resetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetInstanceAttributes">resetInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetNetworkingInfo">resetNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetPersistent">resetPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetReverseDns">resetReverseDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNetworkingInfo` <a name="putNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo"></a>

```java
public void putNetworkingInfo(IResolvable OR java.util.List<ComputeOrchestratedInstanceInstanceNetworkingInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>>

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage"></a>

```java
public void putStorage(IResolvable OR java.util.List<ComputeOrchestratedInstanceInstanceStorage> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>>

---

##### `resetBootOrder` <a name="resetBootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetBootOrder"></a>

```java
public void resetBootOrder()
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetHostname"></a>

```java
public void resetHostname()
```

##### `resetImageList` <a name="resetImageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetImageList"></a>

```java
public void resetImageList()
```

##### `resetInstanceAttributes` <a name="resetInstanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetInstanceAttributes"></a>

```java
public void resetInstanceAttributes()
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetLabel"></a>

```java
public void resetLabel()
```

##### `resetNetworkingInfo` <a name="resetNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetNetworkingInfo"></a>

```java
public void resetNetworkingInfo()
```

##### `resetPersistent` <a name="resetPersistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetPersistent"></a>

```java
public void resetPersistent()
```

##### `resetReverseDns` <a name="resetReverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetReverseDns"></a>

```java
public void resetReverseDns()
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetSshKeys"></a>

```java
public void resetSshKeys()
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetStorage"></a>

```java
public void resetStorage()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetTags"></a>

```java
public void resetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.attributes">attributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.entry">entry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageFormat">imageFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfo">networkingInfo</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList">ComputeOrchestratedInstanceInstanceNetworkingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.placementRequirements">placementRequirements</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.priority">priority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.quotaReservation">quotaReservation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.relationships">relationships</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.resolvers">resolvers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.site">site</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.startTime">startTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList">ComputeOrchestratedInstanceInstanceStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vcable">vcable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.virtio">virtio</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vncAddress">vncAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrderInput">bootOrderInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageListInput">imageListInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributesInput">instanceAttributesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfoInput">networkingInfoInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistentInput">persistentInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDnsInput">reverseDnsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeysInput">sshKeysInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storageInput">storageInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrder">bootOrder</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageList">imageList</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributes">instanceAttributes</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistent">persistent</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDns">reverseDns</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeys">sshKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.attributes"></a>

```java
public java.lang.String getAttributes();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.entry"></a>

```java
public java.lang.Number getEntry();
```

- *Type:* java.lang.Number

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageFormat`<sup>Required</sup> <a name="imageFormat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageFormat"></a>

```java
public java.lang.String getImageFormat();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `networkingInfo`<sup>Required</sup> <a name="networkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfo"></a>

```java
public ComputeOrchestratedInstanceInstanceNetworkingInfoList getNetworkingInfo();
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList">ComputeOrchestratedInstanceInstanceNetworkingInfoList</a>

---

##### `placementRequirements`<sup>Required</sup> <a name="placementRequirements" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.placementRequirements"></a>

```java
public java.util.List<java.lang.String> getPlacementRequirements();
```

- *Type:* java.util.List<java.lang.String>

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.priority"></a>

```java
public java.lang.String getPriority();
```

- *Type:* java.lang.String

---

##### `quotaReservation`<sup>Required</sup> <a name="quotaReservation" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.quotaReservation"></a>

```java
public java.lang.String getQuotaReservation();
```

- *Type:* java.lang.String

---

##### `relationships`<sup>Required</sup> <a name="relationships" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.relationships"></a>

```java
public java.util.List<java.lang.String> getRelationships();
```

- *Type:* java.util.List<java.lang.String>

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.resolvers"></a>

```java
public java.util.List<java.lang.String> getResolvers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.site"></a>

```java
public java.lang.String getSite();
```

- *Type:* java.lang.String

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.startTime"></a>

```java
public java.lang.String getStartTime();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storage"></a>

```java
public ComputeOrchestratedInstanceInstanceStorageList getStorage();
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList">ComputeOrchestratedInstanceInstanceStorageList</a>

---

##### `vcable`<sup>Required</sup> <a name="vcable" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vcable"></a>

```java
public java.lang.String getVcable();
```

- *Type:* java.lang.String

---

##### `virtio`<sup>Required</sup> <a name="virtio" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.virtio"></a>

```java
public IResolvable getVirtio();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `vncAddress`<sup>Required</sup> <a name="vncAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vncAddress"></a>

```java
public java.lang.String getVncAddress();
```

- *Type:* java.lang.String

---

##### `bootOrderInput`<sup>Optional</sup> <a name="bootOrderInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrderInput"></a>

```java
public java.util.List<java.lang.Number> getBootOrderInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `imageListInput`<sup>Optional</sup> <a name="imageListInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageListInput"></a>

```java
public java.lang.String getImageListInput();
```

- *Type:* java.lang.String

---

##### `instanceAttributesInput`<sup>Optional</sup> <a name="instanceAttributesInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributesInput"></a>

```java
public java.lang.String getInstanceAttributesInput();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkingInfoInput`<sup>Optional</sup> <a name="networkingInfoInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfoInput"></a>

```java
public java.lang.Object getNetworkingInfoInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>>

---

##### `persistentInput`<sup>Optional</sup> <a name="persistentInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistentInput"></a>

```java
public java.lang.Object getPersistentInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reverseDnsInput`<sup>Optional</sup> <a name="reverseDnsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDnsInput"></a>

```java
public java.lang.Object getReverseDnsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeysInput"></a>

```java
public java.util.List<java.lang.String> getSshKeysInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storageInput"></a>

```java
public java.lang.Object getStorageInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrder"></a>

```java
public java.util.List<java.lang.Number> getBootOrder();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `imageList`<sup>Required</sup> <a name="imageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageList"></a>

```java
public java.lang.String getImageList();
```

- *Type:* java.lang.String

---

##### `instanceAttributes`<sup>Required</sup> <a name="instanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributes"></a>

```java
public java.lang.String getInstanceAttributes();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `persistent`<sup>Required</sup> <a name="persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistent"></a>

```java
public java.lang.Object getPersistent();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `reverseDns`<sup>Required</sup> <a name="reverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDns"></a>

```java
public java.lang.Object getReverseDns();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeys"></a>

```java
public java.util.List<java.lang.String> getSshKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>

---


### ComputeOrchestratedInstanceInstanceStorageList <a name="ComputeOrchestratedInstanceInstanceStorageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstanceStorageList;

new ComputeOrchestratedInstanceInstanceStorageList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get"></a>

```java
public ComputeOrchestratedInstanceInstanceStorageOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>>

---


### ComputeOrchestratedInstanceInstanceStorageOutputReference <a name="ComputeOrchestratedInstanceInstanceStorageOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceInstanceStorageOutputReference;

new ComputeOrchestratedInstanceInstanceStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.indexInput">indexInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volumeInput">volumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.index">index</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volume">volume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.indexInput"></a>

```java
public java.lang.Number getIndexInput();
```

- *Type:* java.lang.Number

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volumeInput"></a>

```java
public java.lang.String getVolumeInput();
```

- *Type:* java.lang.String

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.index"></a>

```java
public java.lang.Number getIndex();
```

- *Type:* java.lang.Number

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>

---


### ComputeOrchestratedInstanceTimeoutsOutputReference <a name="ComputeOrchestratedInstanceTimeoutsOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_orchestrated_instance.ComputeOrchestratedInstanceTimeoutsOutputReference;

new ComputeOrchestratedInstanceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

---



