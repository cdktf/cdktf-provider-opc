# `opc_compute_security_rule`

Refer to the Terraform Registory for docs: [`opc_compute_security_rule`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule).

# `computeSecurityRule` Submodule <a name="`computeSecurityRule` Submodule" id="@cdktf/provider-opc.computeSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityRule <a name="ComputeSecurityRule" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule opc_compute_security_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeSecurityRule(Construct Scope, string Id, ComputeSecurityRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig">ComputeSecurityRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig">ComputeSecurityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes">ResetDstIpAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet">ResetDstVnicSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols">ResetSecurityProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes">ResetSrcIpAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet">ResetSrcVnicSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl"></a>

```csharp
private void ResetAcl()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDstIpAddressPrefixes` <a name="ResetDstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes"></a>

```csharp
private void ResetDstIpAddressPrefixes()
```

##### `ResetDstVnicSet` <a name="ResetDstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet"></a>

```csharp
private void ResetDstVnicSet()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetSecurityProtocols` <a name="ResetSecurityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols"></a>

```csharp
private void ResetSecurityProtocols()
```

##### `ResetSrcIpAddressPrefixes` <a name="ResetSrcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes"></a>

```csharp
private void ResetSrcIpAddressPrefixes()
```

##### `ResetSrcVnicSet` <a name="ResetSrcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet"></a>

```csharp
private void ResetSrcVnicSet()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSecurityRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeSecurityRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeSecurityRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeSecurityRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeSecurityRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeSecurityRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeSecurityRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeSecurityRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecurityRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput">AclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput">DstIpAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput">DstVnicSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput">FlowDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput">SecurityProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput">SrcIpAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput">SrcVnicSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl">Acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes">DstIpAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet">DstVnicSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection">FlowDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols">SecurityProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes">SrcIpAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet">SrcVnicSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput"></a>

```csharp
public string AclInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DstIpAddressPrefixesInput`<sup>Optional</sup> <a name="DstIpAddressPrefixesInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput"></a>

```csharp
public string[] DstIpAddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `DstVnicSetInput`<sup>Optional</sup> <a name="DstVnicSetInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput"></a>

```csharp
public string DstVnicSetInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `FlowDirectionInput`<sup>Optional</sup> <a name="FlowDirectionInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput"></a>

```csharp
public string FlowDirectionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SecurityProtocolsInput`<sup>Optional</sup> <a name="SecurityProtocolsInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput"></a>

```csharp
public string[] SecurityProtocolsInput { get; }
```

- *Type:* string[]

---

##### `SrcIpAddressPrefixesInput`<sup>Optional</sup> <a name="SrcIpAddressPrefixesInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput"></a>

```csharp
public string[] SrcIpAddressPrefixesInput { get; }
```

- *Type:* string[]

---

##### `SrcVnicSetInput`<sup>Optional</sup> <a name="SrcVnicSetInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput"></a>

```csharp
public string SrcVnicSetInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl"></a>

```csharp
public string Acl { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DstIpAddressPrefixes`<sup>Required</sup> <a name="DstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes"></a>

```csharp
public string[] DstIpAddressPrefixes { get; }
```

- *Type:* string[]

---

##### `DstVnicSet`<sup>Required</sup> <a name="DstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet"></a>

```csharp
public string DstVnicSet { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `FlowDirection`<sup>Required</sup> <a name="FlowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection"></a>

```csharp
public string FlowDirection { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `SecurityProtocols`<sup>Required</sup> <a name="SecurityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols"></a>

```csharp
public string[] SecurityProtocols { get; }
```

- *Type:* string[]

---

##### `SrcIpAddressPrefixes`<sup>Required</sup> <a name="SrcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes"></a>

```csharp
public string[] SrcIpAddressPrefixes { get; }
```

- *Type:* string[]

---

##### `SrcVnicSet`<sup>Required</sup> <a name="SrcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet"></a>

```csharp
public string SrcVnicSet { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityRuleConfig <a name="ComputeSecurityRuleConfig" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeSecurityRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string FlowDirection,
    string Name,
    string Acl = null,
    string Description = null,
    string[] DstIpAddressPrefixes = null,
    string DstVnicSet = null,
    object Enabled = null,
    string Id = null,
    string[] SecurityProtocols = null,
    string[] SrcIpAddressPrefixes = null,
    string SrcVnicSet = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection">FlowDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#name ComputeSecurityRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl">Acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#acl ComputeSecurityRule#acl}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#description ComputeSecurityRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes">DstIpAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet">DstVnicSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#enabled ComputeSecurityRule#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#id ComputeSecurityRule#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols">SecurityProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes">SrcIpAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet">SrcVnicSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#tags ComputeSecurityRule#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `FlowDirection`<sup>Required</sup> <a name="FlowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection"></a>

```csharp
public string FlowDirection { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#name ComputeSecurityRule#name}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl"></a>

```csharp
public string Acl { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#acl ComputeSecurityRule#acl}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#description ComputeSecurityRule#description}.

---

##### `DstIpAddressPrefixes`<sup>Optional</sup> <a name="DstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes"></a>

```csharp
public string[] DstIpAddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}.

---

##### `DstVnicSet`<sup>Optional</sup> <a name="DstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet"></a>

```csharp
public string DstVnicSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#enabled ComputeSecurityRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#id ComputeSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityProtocols`<sup>Optional</sup> <a name="SecurityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols"></a>

```csharp
public string[] SecurityProtocols { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}.

---

##### `SrcIpAddressPrefixes`<sup>Optional</sup> <a name="SrcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes"></a>

```csharp
public string[] SrcIpAddressPrefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}.

---

##### `SrcVnicSet`<sup>Optional</sup> <a name="SrcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet"></a>

```csharp
public string SrcVnicSet { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_rule#tags ComputeSecurityRule#tags}.

---



