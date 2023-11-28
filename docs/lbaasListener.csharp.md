# `lbaasListener` Submodule <a name="`lbaasListener` Submodule" id="@cdktf/provider-opc.lbaasListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasListener <a name="LbaasListener" id="@cdktf/provider-opc.lbaasListener.LbaasListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener opc_lbaas_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasListener(Construct Scope, string Id, LbaasListenerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig">LbaasListenerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig">LbaasListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetCertificates">ResetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetPathPrefixes">ResetPathPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetServerPool">ResetServerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetVirtualHosts">ResetVirtualHosts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.lbaasListener.LbaasListener.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.lbaasListener.LbaasListener.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.lbaasListener.LbaasListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opc.lbaasListener.LbaasListener.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetCertificates` <a name="ResetCertificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetCertificates"></a>

```csharp
private void ResetCertificates()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPathPrefixes` <a name="ResetPathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetPathPrefixes"></a>

```csharp
private void ResetPathPrefixes()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetServerPool` <a name="ResetServerPool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetServerPool"></a>

```csharp
private void ResetServerPool()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVirtualHosts` <a name="ResetVirtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetVirtualHosts"></a>

```csharp
private void ResetVirtualHosts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a LbaasListener resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasListener.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasListener.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasListener.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasListener.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a LbaasListener resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbaasListener to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbaasListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the LbaasListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.operationDetails">OperationDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.parentListener">ParentListener</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.state">State</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocolInput">BalancerProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificatesInput">CertificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixesInput">PathPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPoolInput">ServerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocolInput">ServerProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHostsInput">VirtualHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocol">BalancerProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificates">Certificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancer">LoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixes">PathPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPool">ServerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocol">ServerProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHosts">VirtualHosts</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `OperationDetails`<sup>Required</sup> <a name="OperationDetails" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.operationDetails"></a>

```csharp
public string OperationDetails { get; }
```

- *Type:* string

---

##### `ParentListener`<sup>Required</sup> <a name="ParentListener" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.parentListener"></a>

```csharp
public string ParentListener { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.state"></a>

```csharp
public IResolvable State { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `BalancerProtocolInput`<sup>Optional</sup> <a name="BalancerProtocolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocolInput"></a>

```csharp
public string BalancerProtocolInput { get; }
```

- *Type:* string

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificatesInput"></a>

```csharp
public string[] CertificatesInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancerInput"></a>

```csharp
public string LoadBalancerInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PathPrefixesInput`<sup>Optional</sup> <a name="PathPrefixesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixesInput"></a>

```csharp
public string[] PathPrefixesInput { get; }
```

- *Type:* string[]

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServerPoolInput`<sup>Optional</sup> <a name="ServerPoolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPoolInput"></a>

```csharp
public string ServerPoolInput { get; }
```

- *Type:* string

---

##### `ServerProtocolInput`<sup>Optional</sup> <a name="ServerProtocolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocolInput"></a>

```csharp
public string ServerProtocolInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `VirtualHostsInput`<sup>Optional</sup> <a name="VirtualHostsInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHostsInput"></a>

```csharp
public string[] VirtualHostsInput { get; }
```

- *Type:* string[]

---

##### `BalancerProtocol`<sup>Required</sup> <a name="BalancerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocol"></a>

```csharp
public string BalancerProtocol { get; }
```

- *Type:* string

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificates"></a>

```csharp
public string[] Certificates { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancer"></a>

```csharp
public string LoadBalancer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PathPrefixes`<sup>Required</sup> <a name="PathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixes"></a>

```csharp
public string[] PathPrefixes { get; }
```

- *Type:* string[]

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerPool`<sup>Required</sup> <a name="ServerPool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPool"></a>

```csharp
public string ServerPool { get; }
```

- *Type:* string

---

##### `ServerProtocol`<sup>Required</sup> <a name="ServerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocol"></a>

```csharp
public string ServerProtocol { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `VirtualHosts`<sup>Required</sup> <a name="VirtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHosts"></a>

```csharp
public string[] VirtualHosts { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasListenerConfig <a name="LbaasListenerConfig" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasListenerConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string BalancerProtocol,
    string LoadBalancer,
    string Name,
    double Port,
    string ServerProtocol,
    string[] Certificates = null,
    object Enabled = null,
    string Id = null,
    string[] PathPrefixes = null,
    string[] Policies = null,
    string ServerPool = null,
    string[] Tags = null,
    string[] VirtualHosts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.balancerProtocol">BalancerProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.loadBalancer">LoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#load_balancer LbaasListener#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#name LbaasListener#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#port LbaasListener#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverProtocol">ServerProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_protocol LbaasListener#server_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.certificates">Certificates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#certificates LbaasListener#certificates}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#enabled LbaasListener#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#id LbaasListener#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.pathPrefixes">PathPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#path_prefixes LbaasListener#path_prefixes}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.policies">Policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#policies LbaasListener#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverPool">ServerPool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_pool LbaasListener#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#tags LbaasListener#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.virtualHosts">VirtualHosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `BalancerProtocol`<sup>Required</sup> <a name="BalancerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.balancerProtocol"></a>

```csharp
public string BalancerProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}.

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.loadBalancer"></a>

```csharp
public string LoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#load_balancer LbaasListener#load_balancer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#name LbaasListener#name}.

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#port LbaasListener#port}.

---

##### `ServerProtocol`<sup>Required</sup> <a name="ServerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverProtocol"></a>

```csharp
public string ServerProtocol { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_protocol LbaasListener#server_protocol}.

---

##### `Certificates`<sup>Optional</sup> <a name="Certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.certificates"></a>

```csharp
public string[] Certificates { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#certificates LbaasListener#certificates}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#enabled LbaasListener#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#id LbaasListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PathPrefixes`<sup>Optional</sup> <a name="PathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.pathPrefixes"></a>

```csharp
public string[] PathPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#path_prefixes LbaasListener#path_prefixes}.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#policies LbaasListener#policies}.

---

##### `ServerPool`<sup>Optional</sup> <a name="ServerPool" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverPool"></a>

```csharp
public string ServerPool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_pool LbaasListener#server_pool}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#tags LbaasListener#tags}.

---

##### `VirtualHosts`<sup>Optional</sup> <a name="VirtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.virtualHosts"></a>

```csharp
public string[] VirtualHosts { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}.

---



