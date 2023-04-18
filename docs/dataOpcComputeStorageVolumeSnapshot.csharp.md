# `data_opc_compute_storage_volume_snapshot`

Refer to the Terraform Registory for docs: [`data_opc_compute_storage_volume_snapshot`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot).

# `dataOpcComputeStorageVolumeSnapshot` Submodule <a name="`dataOpcComputeStorageVolumeSnapshot` Submodule" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeStorageVolumeSnapshot <a name="DataOpcComputeStorageVolumeSnapshot" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot opc_compute_storage_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new DataOpcComputeStorageVolumeSnapshot(Construct Scope, string Id, DataOpcComputeStorageVolumeSnapshotConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig">DataOpcComputeStorageVolumeSnapshotConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig">DataOpcComputeStorageVolumeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeStorageVolumeSnapshot.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeStorageVolumeSnapshot.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeStorageVolumeSnapshot.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.collocated">Collocated</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.machineImageName">MachineImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.parentVolumeBootable">ParentVolumeBootable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.property">Property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.size">Size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotTimestamp">SnapshotTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.startTimestamp">StartTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusDetail">StatusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusTimestamp">StatusTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.volumeName">VolumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `Collocated`<sup>Required</sup> <a name="Collocated" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.collocated"></a>

```csharp
public IResolvable Collocated { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MachineImageName`<sup>Required</sup> <a name="MachineImageName" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.machineImageName"></a>

```csharp
public string MachineImageName { get; }
```

- *Type:* string

---

##### `ParentVolumeBootable`<sup>Required</sup> <a name="ParentVolumeBootable" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.parentVolumeBootable"></a>

```csharp
public IResolvable ParentVolumeBootable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.property"></a>

```csharp
public string Property { get; }
```

- *Type:* string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.size"></a>

```csharp
public string Size { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `SnapshotTimestamp`<sup>Required</sup> <a name="SnapshotTimestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotTimestamp"></a>

```csharp
public string SnapshotTimestamp { get; }
```

- *Type:* string

---

##### `StartTimestamp`<sup>Required</sup> <a name="StartTimestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.startTimestamp"></a>

```csharp
public string StartTimestamp { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StatusDetail`<sup>Required</sup> <a name="StatusDetail" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusDetail"></a>

```csharp
public string StatusDetail { get; }
```

- *Type:* string

---

##### `StatusTimestamp`<sup>Required</sup> <a name="StatusTimestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusTimestamp"></a>

```csharp
public string StatusTimestamp { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.volumeName"></a>

```csharp
public string VolumeName { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeStorageVolumeSnapshotConfig <a name="DataOpcComputeStorageVolumeSnapshotConfig" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new DataOpcComputeStorageVolumeSnapshotConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#name DataOpcComputeStorageVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#id DataOpcComputeStorageVolumeSnapshot#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#name DataOpcComputeStorageVolumeSnapshot#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#id DataOpcComputeStorageVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



