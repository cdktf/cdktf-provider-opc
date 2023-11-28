# `storageContainer` Submodule <a name="`storageContainer` Submodule" id="@cdktf/provider-opc.storageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageContainer <a name="StorageContainer" id="@cdktf/provider-opc.storageContainer.StorageContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container opc_storage_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new StorageContainer(Construct Scope, string Id, StorageContainerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig">StorageContainerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig">StorageContainerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetAllowedOrigins">ResetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetExposedHeaders">ResetExposedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetPrimaryKey">ResetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaBytes">ResetQuotaBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaCount">ResetQuotaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetReadAcls">ResetReadAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetSecondaryKey">ResetSecondaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetWriteAcls">ResetWriteAcls</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.storageContainer.StorageContainer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.storageContainer.StorageContainer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.storageContainer.StorageContainer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.storageContainer.StorageContainer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.storageContainer.StorageContainer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.storageContainer.StorageContainer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.storageContainer.StorageContainer.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.storageContainer.StorageContainer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.storageContainer.StorageContainer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opc.storageContainer.StorageContainer.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAllowedOrigins` <a name="ResetAllowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetAllowedOrigins"></a>

```csharp
private void ResetAllowedOrigins()
```

##### `ResetExposedHeaders` <a name="ResetExposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetExposedHeaders"></a>

```csharp
private void ResetExposedHeaders()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetPrimaryKey` <a name="ResetPrimaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetPrimaryKey"></a>

```csharp
private void ResetPrimaryKey()
```

##### `ResetQuotaBytes` <a name="ResetQuotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaBytes"></a>

```csharp
private void ResetQuotaBytes()
```

##### `ResetQuotaCount` <a name="ResetQuotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaCount"></a>

```csharp
private void ResetQuotaCount()
```

##### `ResetReadAcls` <a name="ResetReadAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetReadAcls"></a>

```csharp
private void ResetReadAcls()
```

##### `ResetSecondaryKey` <a name="ResetSecondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetSecondaryKey"></a>

```csharp
private void ResetSecondaryKey()
```

##### `ResetWriteAcls` <a name="ResetWriteAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetWriteAcls"></a>

```csharp
private void ResetWriteAcls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a StorageContainer resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

StorageContainer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

StorageContainer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

StorageContainer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.storageContainer.StorageContainer.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

StorageContainer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a StorageContainer resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.storageContainer.StorageContainer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.storageContainer.StorageContainer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageContainer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.storageContainer.StorageContainer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageContainer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.storageContainer.StorageContainer.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the StorageContainer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOriginsInput">AllowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeadersInput">ExposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKeyInput">PrimaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytesInput">QuotaBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCountInput">QuotaCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.readAclsInput">ReadAclsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKeyInput">SecondaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAclsInput">WriteAclsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytes">QuotaBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCount">QuotaCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.readAcls">ReadAcls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAcls">WriteAcls</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AllowedOriginsInput`<sup>Optional</sup> <a name="AllowedOriginsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOriginsInput"></a>

```csharp
public string[] AllowedOriginsInput { get; }
```

- *Type:* string[]

---

##### `ExposedHeadersInput`<sup>Optional</sup> <a name="ExposedHeadersInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeadersInput"></a>

```csharp
public string[] ExposedHeadersInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PrimaryKeyInput`<sup>Optional</sup> <a name="PrimaryKeyInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKeyInput"></a>

```csharp
public string PrimaryKeyInput { get; }
```

- *Type:* string

---

##### `QuotaBytesInput`<sup>Optional</sup> <a name="QuotaBytesInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytesInput"></a>

```csharp
public double QuotaBytesInput { get; }
```

- *Type:* double

---

##### `QuotaCountInput`<sup>Optional</sup> <a name="QuotaCountInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCountInput"></a>

```csharp
public double QuotaCountInput { get; }
```

- *Type:* double

---

##### `ReadAclsInput`<sup>Optional</sup> <a name="ReadAclsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.readAclsInput"></a>

```csharp
public string[] ReadAclsInput { get; }
```

- *Type:* string[]

---

##### `SecondaryKeyInput`<sup>Optional</sup> <a name="SecondaryKeyInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKeyInput"></a>

```csharp
public string SecondaryKeyInput { get; }
```

- *Type:* string

---

##### `WriteAclsInput`<sup>Optional</sup> <a name="WriteAclsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAclsInput"></a>

```csharp
public string[] WriteAclsInput { get; }
```

- *Type:* string[]

---

##### `AllowedOrigins`<sup>Required</sup> <a name="AllowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; }
```

- *Type:* string[]

---

##### `ExposedHeaders`<sup>Required</sup> <a name="ExposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PrimaryKey`<sup>Required</sup> <a name="PrimaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; }
```

- *Type:* string

---

##### `QuotaBytes`<sup>Required</sup> <a name="QuotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytes"></a>

```csharp
public double QuotaBytes { get; }
```

- *Type:* double

---

##### `QuotaCount`<sup>Required</sup> <a name="QuotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCount"></a>

```csharp
public double QuotaCount { get; }
```

- *Type:* double

---

##### `ReadAcls`<sup>Required</sup> <a name="ReadAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.readAcls"></a>

```csharp
public string[] ReadAcls { get; }
```

- *Type:* string[]

---

##### `SecondaryKey`<sup>Required</sup> <a name="SecondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; }
```

- *Type:* string

---

##### `WriteAcls`<sup>Required</sup> <a name="WriteAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAcls"></a>

```csharp
public string[] WriteAcls { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageContainerConfig <a name="StorageContainerConfig" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new StorageContainerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string[] AllowedOrigins = null,
    string[] ExposedHeaders = null,
    string Id = null,
    double MaxAge = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string PrimaryKey = null,
    double QuotaBytes = null,
    double QuotaCount = null,
    string[] ReadAcls = null,
    string SecondaryKey = null,
    string[] WriteAcls = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#name StorageContainer#name}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.allowedOrigins">AllowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#allowed_origins StorageContainer#allowed_origins}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.exposedHeaders">ExposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#exposed_headers StorageContainer#exposed_headers}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#id StorageContainer#id}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.maxAge">MaxAge</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#max_age StorageContainer#max_age}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#metadata StorageContainer#metadata}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.primaryKey">PrimaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#primary_key StorageContainer#primary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaBytes">QuotaBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_bytes StorageContainer#quota_bytes}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaCount">QuotaCount</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_count StorageContainer#quota_count}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.readAcls">ReadAcls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#read_acls StorageContainer#read_acls}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.secondaryKey">SecondaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#secondary_key StorageContainer#secondary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.writeAcls">WriteAcls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#write_acls StorageContainer#write_acls}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#name StorageContainer#name}.

---

##### `AllowedOrigins`<sup>Optional</sup> <a name="AllowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.allowedOrigins"></a>

```csharp
public string[] AllowedOrigins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#allowed_origins StorageContainer#allowed_origins}.

---

##### `ExposedHeaders`<sup>Optional</sup> <a name="ExposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.exposedHeaders"></a>

```csharp
public string[] ExposedHeaders { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#exposed_headers StorageContainer#exposed_headers}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#id StorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#max_age StorageContainer#max_age}.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#metadata StorageContainer#metadata}.

---

##### `PrimaryKey`<sup>Optional</sup> <a name="PrimaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.primaryKey"></a>

```csharp
public string PrimaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#primary_key StorageContainer#primary_key}.

---

##### `QuotaBytes`<sup>Optional</sup> <a name="QuotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaBytes"></a>

```csharp
public double QuotaBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_bytes StorageContainer#quota_bytes}.

---

##### `QuotaCount`<sup>Optional</sup> <a name="QuotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaCount"></a>

```csharp
public double QuotaCount { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_count StorageContainer#quota_count}.

---

##### `ReadAcls`<sup>Optional</sup> <a name="ReadAcls" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.readAcls"></a>

```csharp
public string[] ReadAcls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#read_acls StorageContainer#read_acls}.

---

##### `SecondaryKey`<sup>Optional</sup> <a name="SecondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.secondaryKey"></a>

```csharp
public string SecondaryKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#secondary_key StorageContainer#secondary_key}.

---

##### `WriteAcls`<sup>Optional</sup> <a name="WriteAcls" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.writeAcls"></a>

```csharp
public string[] WriteAcls { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#write_acls StorageContainer#write_acls}.

---



