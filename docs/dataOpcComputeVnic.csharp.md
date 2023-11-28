# `dataOpcComputeVnic` Submodule <a name="`dataOpcComputeVnic` Submodule" id="@cdktf/provider-opc.dataOpcComputeVnic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeVnic <a name="DataOpcComputeVnic" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_vnic opc_compute_vnic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new DataOpcComputeVnic(Construct Scope, string Id, DataOpcComputeVnicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig">DataOpcComputeVnicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig">DataOpcComputeVnicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpcComputeVnic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeVnic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeVnic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeVnic.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeVnic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a DataOpcComputeVnic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpcComputeVnic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpcComputeVnic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_vnic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the DataOpcComputeVnic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.transitFlag">TransitFlag</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `TransitFlag`<sup>Required</sup> <a name="TransitFlag" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.transitFlag"></a>

```csharp
public IResolvable TransitFlag { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeVnicConfig <a name="DataOpcComputeVnicConfig" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new DataOpcComputeVnicConfig {
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
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_vnic#name DataOpcComputeVnic#name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_vnic#id DataOpcComputeVnic#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_vnic#name DataOpcComputeVnic#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeVnic.DataOpcComputeVnicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_vnic#id DataOpcComputeVnic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



