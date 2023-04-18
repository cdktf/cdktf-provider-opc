# `data_opc_compute_network_interface`

Refer to the Terraform Registory for docs: [`data_opc_compute_network_interface`](https://www.terraform.io/docs/providers/opc/d/compute_network_interface).

# `dataOpcComputeNetworkInterface` Submodule <a name="`dataOpcComputeNetworkInterface` Submodule" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeNetworkInterface <a name="DataOpcComputeNetworkInterface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface opc_compute_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.data_opc_compute_network_interface.DataOpcComputeNetworkInterface;

DataOpcComputeNetworkInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .instanceName(java.lang.String)
    .interface(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.interface">interface</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.instanceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}.

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.interface"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.data_opc_compute_network_interface.DataOpcComputeNetworkInterface;

DataOpcComputeNetworkInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.data_opc_compute_network_interface.DataOpcComputeNetworkInterface;

DataOpcComputeNetworkInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.opc.data_opc_compute_network_interface.DataOpcComputeNetworkInterface;

DataOpcComputeNetworkInterface.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dns">dns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.isDefaultGateway">isDefaultGateway</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nameServers">nameServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nat">nat</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.searchDomains">searchDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.secLists">secLists</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.sharedNetwork">sharedNetwork</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnic">vnic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnicSets">vnicSets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceNameInput">instanceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interfaceInput">interfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interface">interface</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dns"></a>

```java
public java.util.List<java.lang.String> getDns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

---

##### `isDefaultGateway`<sup>Required</sup> <a name="isDefaultGateway" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.isDefaultGateway"></a>

```java
public IResolvable getIsDefaultGateway();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nameServers"></a>

```java
public java.util.List<java.lang.String> getNameServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nat"></a>

```java
public java.util.List<java.lang.String> getNat();
```

- *Type:* java.util.List<java.lang.String>

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.searchDomains"></a>

```java
public java.util.List<java.lang.String> getSearchDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secLists`<sup>Required</sup> <a name="secLists" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.secLists"></a>

```java
public java.util.List<java.lang.String> getSecLists();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sharedNetwork`<sup>Required</sup> <a name="sharedNetwork" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.sharedNetwork"></a>

```java
public IResolvable getSharedNetwork();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnic"></a>

```java
public java.lang.String getVnic();
```

- *Type:* java.lang.String

---

##### `vnicSets`<sup>Required</sup> <a name="vnicSets" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnicSets"></a>

```java
public java.util.List<java.lang.String> getVnicSets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `instanceNameInput`<sup>Optional</sup> <a name="instanceNameInput" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceNameInput"></a>

```java
public java.lang.String getInstanceNameInput();
```

- *Type:* java.lang.String

---

##### `interfaceInput`<sup>Optional</sup> <a name="interfaceInput" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interfaceInput"></a>

```java
public java.lang.String getInterfaceInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeNetworkInterfaceConfig <a name="DataOpcComputeNetworkInterfaceConfig" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.data_opc_compute_network_interface.DataOpcComputeNetworkInterfaceConfig;

DataOpcComputeNetworkInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .instanceName(java.lang.String)
    .interface(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceName">instanceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.interface">interface</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}.

---

##### `instanceName`<sup>Required</sup> <a name="instanceName" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceName"></a>

```java
public java.lang.String getInstanceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}.

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.interface"></a>

```java
public java.lang.String getInterface();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



