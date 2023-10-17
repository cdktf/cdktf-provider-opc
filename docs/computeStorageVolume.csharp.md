# `opc_compute_storage_volume`

Refer to the Terraform Registory for docs: [`opc_compute_storage_volume`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume).

# `computeStorageVolume` Submodule <a name="`computeStorageVolume` Submodule" id="@cdktf/provider-opc.computeStorageVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStorageVolume <a name="ComputeStorageVolume" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume opc_compute_storage_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeStorageVolume(Construct Scope, string Id, ComputeStorageVolumeConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig">ComputeStorageVolumeConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig">ComputeStorageVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable">ResetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor">ResetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList">ResetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry">ResetImageListEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage">ResetMachineImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly">ResetReadonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount">ResetSnapshotAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool">ResetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeStorageVolumeTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

---

##### `ResetBootable` <a name="ResetBootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable"></a>

```csharp
private void ResetBootable()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetHypervisor` <a name="ResetHypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor"></a>

```csharp
private void ResetHypervisor()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetImageList` <a name="ResetImageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList"></a>

```csharp
private void ResetImageList()
```

##### `ResetImageListEntry` <a name="ResetImageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry"></a>

```csharp
private void ResetImageListEntry()
```

##### `ResetMachineImage` <a name="ResetMachineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage"></a>

```csharp
private void ResetMachineImage()
```

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged"></a>

```csharp
private void ResetManaged()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform"></a>

```csharp
private void ResetPlatform()
```

##### `ResetReadonly` <a name="ResetReadonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly"></a>

```csharp
private void ResetReadonly()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot"></a>

```csharp
private void ResetSnapshot()
```

##### `ResetSnapshotAccount` <a name="ResetSnapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount"></a>

```csharp
private void ResetSnapshotAccount()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId"></a>

```csharp
private void ResetSnapshotId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus"></a>

```csharp
private void ResetStatus()
```

##### `ResetStoragePool` <a name="ResetStoragePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool"></a>

```csharp
private void ResetStoragePool()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType"></a>

```csharp
private void ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri"></a>

```csharp
private void ResetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeStorageVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeStorageVolume.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeStorageVolume.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeStorageVolume.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeStorageVolume.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeStorageVolume resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeStorageVolume to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeStorageVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeStorageVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput">BootableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput">HypervisorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput">ImageListEntryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput">ImageListInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput">MachineImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput">ManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput">PlatformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput">ReadonlyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput">SizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput">SnapshotAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput">SnapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput">StoragePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput">StorageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput">UriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable">Bootable</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor">Hypervisor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList">ImageList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry">ImageListEntry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage">MachineImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed">Managed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly">Readonly</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot">Snapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount">SnapshotAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId">SnapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool">StoragePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType">StorageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri">Uri</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts"></a>

```csharp
public ComputeStorageVolumeTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a>

---

##### `BootableInput`<sup>Optional</sup> <a name="BootableInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput"></a>

```csharp
public object BootableInput { get; }
```

- *Type:* object

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `HypervisorInput`<sup>Optional</sup> <a name="HypervisorInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput"></a>

```csharp
public string HypervisorInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ImageListEntryInput`<sup>Optional</sup> <a name="ImageListEntryInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput"></a>

```csharp
public double ImageListEntryInput { get; }
```

- *Type:* double

---

##### `ImageListInput`<sup>Optional</sup> <a name="ImageListInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput"></a>

```csharp
public string ImageListInput { get; }
```

- *Type:* string

---

##### `MachineImageInput`<sup>Optional</sup> <a name="MachineImageInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput"></a>

```csharp
public string MachineImageInput { get; }
```

- *Type:* string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput"></a>

```csharp
public object ManagedInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput"></a>

```csharp
public string PlatformInput { get; }
```

- *Type:* string

---

##### `ReadonlyInput`<sup>Optional</sup> <a name="ReadonlyInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput"></a>

```csharp
public object ReadonlyInput { get; }
```

- *Type:* object

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput"></a>

```csharp
public double SizeInput { get; }
```

- *Type:* double

---

##### `SnapshotAccountInput`<sup>Optional</sup> <a name="SnapshotAccountInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput"></a>

```csharp
public string SnapshotAccountInput { get; }
```

- *Type:* string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput"></a>

```csharp
public string SnapshotIdInput { get; }
```

- *Type:* string

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput"></a>

```csharp
public string SnapshotInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput"></a>

```csharp
public string StoragePoolInput { get; }
```

- *Type:* string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput"></a>

```csharp
public string StorageTypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput"></a>

```csharp
public string UriInput { get; }
```

- *Type:* string

---

##### `Bootable`<sup>Required</sup> <a name="Bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable"></a>

```csharp
public object Bootable { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Hypervisor`<sup>Required</sup> <a name="Hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor"></a>

```csharp
public string Hypervisor { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageList`<sup>Required</sup> <a name="ImageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList"></a>

```csharp
public string ImageList { get; }
```

- *Type:* string

---

##### `ImageListEntry`<sup>Required</sup> <a name="ImageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry"></a>

```csharp
public double ImageListEntry { get; }
```

- *Type:* double

---

##### `MachineImage`<sup>Required</sup> <a name="MachineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage"></a>

```csharp
public string MachineImage { get; }
```

- *Type:* string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed"></a>

```csharp
public object Managed { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Readonly`<sup>Required</sup> <a name="Readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly"></a>

```csharp
public object Readonly { get; }
```

- *Type:* object

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot"></a>

```csharp
public string Snapshot { get; }
```

- *Type:* string

---

##### `SnapshotAccount`<sup>Required</sup> <a name="SnapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount"></a>

```csharp
public string SnapshotAccount { get; }
```

- *Type:* string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId"></a>

```csharp
public string SnapshotId { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool"></a>

```csharp
public string StoragePool { get; }
```

- *Type:* string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType"></a>

```csharp
public string StorageType { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStorageVolumeConfig <a name="ComputeStorageVolumeConfig" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeStorageVolumeConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    double Size,
    object Bootable = null,
    string Description = null,
    string Hypervisor = null,
    string Id = null,
    string ImageList = null,
    double ImageListEntry = null,
    string MachineImage = null,
    object Managed = null,
    string Platform = null,
    object Readonly = null,
    string Snapshot = null,
    string SnapshotAccount = null,
    string SnapshotId = null,
    string Status = null,
    string StoragePool = null,
    string StorageType = null,
    string[] Tags = null,
    ComputeStorageVolumeTimeouts Timeouts = null,
    string Uri = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size">Size</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable">Bootable</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor">Hypervisor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList">ImageList</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry">ImageListEntry</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage">MachineImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed">Managed</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform">Platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly">Readonly</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot">Snapshot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount">SnapshotAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status">Status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool">StoragePool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType">StorageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri">Uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size"></a>

```csharp
public double Size { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}.

---

##### `Bootable`<sup>Optional</sup> <a name="Bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable"></a>

```csharp
public object Bootable { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}.

---

##### `Hypervisor`<sup>Optional</sup> <a name="Hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor"></a>

```csharp
public string Hypervisor { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageList`<sup>Optional</sup> <a name="ImageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList"></a>

```csharp
public string ImageList { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}.

---

##### `ImageListEntry`<sup>Optional</sup> <a name="ImageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry"></a>

```csharp
public double ImageListEntry { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}.

---

##### `MachineImage`<sup>Optional</sup> <a name="MachineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage"></a>

```csharp
public string MachineImage { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}.

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed"></a>

```csharp
public object Managed { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform"></a>

```csharp
public string Platform { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}.

---

##### `Readonly`<sup>Optional</sup> <a name="Readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly"></a>

```csharp
public object Readonly { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot"></a>

```csharp
public string Snapshot { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}.

---

##### `SnapshotAccount`<sup>Optional</sup> <a name="SnapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount"></a>

```csharp
public string SnapshotAccount { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId"></a>

```csharp
public string SnapshotId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}.

---

##### `StoragePool`<sup>Optional</sup> <a name="StoragePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool"></a>

```csharp
public string StoragePool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType"></a>

```csharp
public string StorageType { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts"></a>

```csharp
public ComputeStorageVolumeTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#timeouts ComputeStorageVolume#timeouts}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri"></a>

```csharp
public string Uri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}.

---

### ComputeStorageVolumeTimeouts <a name="ComputeStorageVolumeTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeStorageVolumeTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStorageVolumeTimeoutsOutputReference <a name="ComputeStorageVolumeTimeoutsOutputReference" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeStorageVolumeTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



