# `computeRoute` Submodule <a name="`computeRoute` Submodule" id="@cdktf/provider-opc.computeRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRoute <a name="ComputeRoute" id="@cdktf/provider-opc.computeRoute.ComputeRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route opc_compute_route}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeRoute.ComputeRoute.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeRoute(Construct Scope, string Id, ComputeRouteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig">ComputeRouteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeRoute.ComputeRoute.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeRoute.ComputeRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.computeRoute.ComputeRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig">ComputeRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.resetAdminDistance">ResetAdminDistance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeRoute.ComputeRoute.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeRoute.ComputeRoute.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.computeRoute.ComputeRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeRoute.ComputeRoute.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opc.computeRoute.ComputeRoute.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeRoute.ComputeRoute.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeRoute.ComputeRoute.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeRoute.ComputeRoute.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeRoute.ComputeRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opc.computeRoute.ComputeRoute.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeRoute.ComputeRoute.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeRoute.ComputeRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeRoute.ComputeRoute.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeRoute.ComputeRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeRoute.ComputeRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeRoute.ComputeRoute.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeRoute.ComputeRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opc.computeRoute.ComputeRoute.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeRoute.ComputeRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAdminDistance` <a name="ResetAdminDistance" id="@cdktf/provider-opc.computeRoute.ComputeRoute.resetAdminDistance"></a>

```csharp
private void ResetAdminDistance()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeRoute.ComputeRoute.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeRoute.ComputeRoute.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeRoute resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeRoute.ComputeRoute.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeRoute.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeRoute.ComputeRoute.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeRoute.ComputeRoute.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeRoute.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeRoute.ComputeRoute.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeRoute.ComputeRoute.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeRoute.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeRoute.ComputeRoute.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeRoute.ComputeRoute.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeRoute.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeRoute resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeRoute.ComputeRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeRoute to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeRoute.ComputeRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.adminDistanceInput">AdminDistanceInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.ipAddressPrefixInput">IpAddressPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.nextHopVnicSetInput">NextHopVnicSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.adminDistance">AdminDistance</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.ipAddressPrefix">IpAddressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.nextHopVnicSet">NextHopVnicSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AdminDistanceInput`<sup>Optional</sup> <a name="AdminDistanceInput" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.adminDistanceInput"></a>

```csharp
public double AdminDistanceInput { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressPrefixInput`<sup>Optional</sup> <a name="IpAddressPrefixInput" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.ipAddressPrefixInput"></a>

```csharp
public string IpAddressPrefixInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NextHopVnicSetInput`<sup>Optional</sup> <a name="NextHopVnicSetInput" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.nextHopVnicSetInput"></a>

```csharp
public string NextHopVnicSetInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `AdminDistance`<sup>Required</sup> <a name="AdminDistance" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.adminDistance"></a>

```csharp
public double AdminDistance { get; }
```

- *Type:* double

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressPrefix`<sup>Required</sup> <a name="IpAddressPrefix" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.ipAddressPrefix"></a>

```csharp
public string IpAddressPrefix { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `NextHopVnicSet`<sup>Required</sup> <a name="NextHopVnicSet" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.nextHopVnicSet"></a>

```csharp
public string NextHopVnicSet { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRoute.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeRoute.ComputeRoute.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRouteConfig <a name="ComputeRouteConfig" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeRouteConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string IpAddressPrefix,
    string Name,
    string NextHopVnicSet,
    double AdminDistance = null,
    string Description = null,
    string Id = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.ipAddressPrefix">IpAddressPrefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#ip_address_prefix ComputeRoute#ip_address_prefix}. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#name ComputeRoute#name}. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.nextHopVnicSet">NextHopVnicSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#next_hop_vnic_set ComputeRoute#next_hop_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.adminDistance">AdminDistance</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#admin_distance ComputeRoute#admin_distance}. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#description ComputeRoute#description}. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#id ComputeRoute#id}. |
| <code><a href="#@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#tags ComputeRoute#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `IpAddressPrefix`<sup>Required</sup> <a name="IpAddressPrefix" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.ipAddressPrefix"></a>

```csharp
public string IpAddressPrefix { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#ip_address_prefix ComputeRoute#ip_address_prefix}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#name ComputeRoute#name}.

---

##### `NextHopVnicSet`<sup>Required</sup> <a name="NextHopVnicSet" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.nextHopVnicSet"></a>

```csharp
public string NextHopVnicSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#next_hop_vnic_set ComputeRoute#next_hop_vnic_set}.

---

##### `AdminDistance`<sup>Optional</sup> <a name="AdminDistance" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.adminDistance"></a>

```csharp
public double AdminDistance { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#admin_distance ComputeRoute#admin_distance}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#description ComputeRoute#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#id ComputeRoute#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeRoute.ComputeRouteConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_route#tags ComputeRoute#tags}.

---



