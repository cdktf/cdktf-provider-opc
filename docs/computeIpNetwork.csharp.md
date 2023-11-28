# `computeIpNetwork` Submodule <a name="`computeIpNetwork` Submodule" id="@cdktf/provider-opc.computeIpNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeIpNetwork <a name="ComputeIpNetwork" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network opc_compute_ip_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeIpNetwork(Construct Scope, string Id, ComputeIpNetworkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig">ComputeIpNetworkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig">ComputeIpNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetIpNetworkExchange">ResetIpNetworkExchange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetPublicNaptEnabled">ResetPublicNaptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpNetworkExchange` <a name="ResetIpNetworkExchange" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetIpNetworkExchange"></a>

```csharp
private void ResetIpNetworkExchange()
```

##### `ResetPublicNaptEnabled` <a name="ResetPublicNaptEnabled" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetPublicNaptEnabled"></a>

```csharp
private void ResetPublicNaptEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeIpNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeIpNetwork.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeIpNetwork.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeIpNetwork.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeIpNetwork.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeIpNetwork resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeIpNetwork to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeIpNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeIpNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipAddressPrefixInput">IpAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipNetworkExchangeInput">IpNetworkExchangeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.publicNaptEnabledInput">PublicNaptEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipAddressPrefix">IpAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipNetworkExchange">IpNetworkExchange</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.publicNaptEnabled">PublicNaptEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressPrefixInput`<sup>Optional</sup> <a name="IpAddressPrefixInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipAddressPrefixInput"></a>

```csharp
public string IpAddressPrefixInput { get; }
```

- *Type:* string

---

##### `IpNetworkExchangeInput`<sup>Optional</sup> <a name="IpNetworkExchangeInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipNetworkExchangeInput"></a>

```csharp
public string IpNetworkExchangeInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PublicNaptEnabledInput`<sup>Optional</sup> <a name="PublicNaptEnabledInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.publicNaptEnabledInput"></a>

```csharp
public object PublicNaptEnabledInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressPrefix`<sup>Required</sup> <a name="IpAddressPrefix" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipAddressPrefix"></a>

```csharp
public string IpAddressPrefix { get; }
```

- *Type:* string

---

##### `IpNetworkExchange`<sup>Required</sup> <a name="IpNetworkExchange" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipNetworkExchange"></a>

```csharp
public string IpNetworkExchange { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PublicNaptEnabled`<sup>Required</sup> <a name="PublicNaptEnabled" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.publicNaptEnabled"></a>

```csharp
public object PublicNaptEnabled { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeIpNetworkConfig <a name="ComputeIpNetworkConfig" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeIpNetworkConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpAddressPrefix,
    string Name,
    string Description = null,
    string Id = null,
    string IpNetworkExchange = null,
    object PublicNaptEnabled = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.ipAddressPrefix">IpAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#ip_address_prefix ComputeIpNetwork#ip_address_prefix}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#name ComputeIpNetwork#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#description ComputeIpNetwork#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#id ComputeIpNetwork#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.ipNetworkExchange">IpNetworkExchange</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#ip_network_exchange ComputeIpNetwork#ip_network_exchange}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.publicNaptEnabled">PublicNaptEnabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#public_napt_enabled ComputeIpNetwork#public_napt_enabled}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#tags ComputeIpNetwork#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpAddressPrefix`<sup>Required</sup> <a name="IpAddressPrefix" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.ipAddressPrefix"></a>

```csharp
public string IpAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#ip_address_prefix ComputeIpNetwork#ip_address_prefix}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#name ComputeIpNetwork#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#description ComputeIpNetwork#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#id ComputeIpNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpNetworkExchange`<sup>Optional</sup> <a name="IpNetworkExchange" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.ipNetworkExchange"></a>

```csharp
public string IpNetworkExchange { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#ip_network_exchange ComputeIpNetwork#ip_network_exchange}.

---

##### `PublicNaptEnabled`<sup>Optional</sup> <a name="PublicNaptEnabled" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.publicNaptEnabled"></a>

```csharp
public object PublicNaptEnabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#public_napt_enabled ComputeIpNetwork#public_napt_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#tags ComputeIpNetwork#tags}.

---



