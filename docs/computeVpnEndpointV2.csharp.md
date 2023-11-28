# `computeVpnEndpointV2` Submodule <a name="`computeVpnEndpointV2` Submodule" id="@cdktf/provider-opc.computeVpnEndpointV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnEndpointV2 <a name="ComputeVpnEndpointV2" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2 opc_compute_vpn_endpoint_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeVpnEndpointV2(Construct Scope, string Id, ComputeVpnEndpointV2Config Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config">ComputeVpnEndpointV2Config</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config">ComputeVpnEndpointV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings">PutPhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings">PutPhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetIkeIdentifier">ResetIkeIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseOneSettings">ResetPhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseTwoSettings">ResetPhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetRequirePerfectForwardSecrecy">ResetRequirePerfectForwardSecrecy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutPhaseOneSettings` <a name="PutPhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings"></a>

```csharp
private void PutPhaseOneSettings(ComputeVpnEndpointV2PhaseOneSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---

##### `PutPhaseTwoSettings` <a name="PutPhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings"></a>

```csharp
private void PutPhaseTwoSettings(ComputeVpnEndpointV2PhaseTwoSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeVpnEndpointV2Timeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIkeIdentifier` <a name="ResetIkeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetIkeIdentifier"></a>

```csharp
private void ResetIkeIdentifier()
```

##### `ResetPhaseOneSettings` <a name="ResetPhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseOneSettings"></a>

```csharp
private void ResetPhaseOneSettings()
```

##### `ResetPhaseTwoSettings` <a name="ResetPhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseTwoSettings"></a>

```csharp
private void ResetPhaseTwoSettings()
```

##### `ResetRequirePerfectForwardSecrecy` <a name="ResetRequirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetRequirePerfectForwardSecrecy"></a>

```csharp
private void ResetRequirePerfectForwardSecrecy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeVpnEndpointV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeVpnEndpointV2.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeVpnEndpointV2.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeVpnEndpointV2.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeVpnEndpointV2.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ComputeVpnEndpointV2 resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeVpnEndpointV2 to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeVpnEndpointV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ComputeVpnEndpointV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayIpAddress">LocalGatewayIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayPrivateIpAddress">LocalGatewayPrivateIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettings">PhaseOneSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference">ComputeVpnEndpointV2PhaseOneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettings">PhaseTwoSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference">ComputeVpnEndpointV2PhaseTwoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference">ComputeVpnEndpointV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tunnelStatus">TunnelStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGatewayInput">CustomerVpnGatewayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifierInput">IkeIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetworkInput">IpNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettingsInput">PhaseOneSettingsInput</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettingsInput">PhaseTwoSettingsInput</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKeyInput">PreSharedKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutesInput">ReachableRoutesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecyInput">RequirePerfectForwardSecrecyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSetsInput">VnicSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGateway">CustomerVpnGateway</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifier">IkeIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKey">PreSharedKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutes">ReachableRoutes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecy">RequirePerfectForwardSecrecy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSets">VnicSets</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `LocalGatewayIpAddress`<sup>Required</sup> <a name="LocalGatewayIpAddress" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayIpAddress"></a>

```csharp
public string LocalGatewayIpAddress { get; }
```

- *Type:* string

---

##### `LocalGatewayPrivateIpAddress`<sup>Required</sup> <a name="LocalGatewayPrivateIpAddress" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayPrivateIpAddress"></a>

```csharp
public string LocalGatewayPrivateIpAddress { get; }
```

- *Type:* string

---

##### `PhaseOneSettings`<sup>Required</sup> <a name="PhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettings"></a>

```csharp
public ComputeVpnEndpointV2PhaseOneSettingsOutputReference PhaseOneSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference">ComputeVpnEndpointV2PhaseOneSettingsOutputReference</a>

---

##### `PhaseTwoSettings`<sup>Required</sup> <a name="PhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettings"></a>

```csharp
public ComputeVpnEndpointV2PhaseTwoSettingsOutputReference PhaseTwoSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference">ComputeVpnEndpointV2PhaseTwoSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeouts"></a>

```csharp
public ComputeVpnEndpointV2TimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference">ComputeVpnEndpointV2TimeoutsOutputReference</a>

---

##### `TunnelStatus`<sup>Required</sup> <a name="TunnelStatus" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tunnelStatus"></a>

```csharp
public string TunnelStatus { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `CustomerVpnGatewayInput`<sup>Optional</sup> <a name="CustomerVpnGatewayInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGatewayInput"></a>

```csharp
public string CustomerVpnGatewayInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IkeIdentifierInput`<sup>Optional</sup> <a name="IkeIdentifierInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifierInput"></a>

```csharp
public string IkeIdentifierInput { get; }
```

- *Type:* string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetworkInput"></a>

```csharp
public string IpNetworkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PhaseOneSettingsInput`<sup>Optional</sup> <a name="PhaseOneSettingsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettingsInput"></a>

```csharp
public ComputeVpnEndpointV2PhaseOneSettings PhaseOneSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---

##### `PhaseTwoSettingsInput`<sup>Optional</sup> <a name="PhaseTwoSettingsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettingsInput"></a>

```csharp
public ComputeVpnEndpointV2PhaseTwoSettings PhaseTwoSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---

##### `PreSharedKeyInput`<sup>Optional</sup> <a name="PreSharedKeyInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKeyInput"></a>

```csharp
public string PreSharedKeyInput { get; }
```

- *Type:* string

---

##### `ReachableRoutesInput`<sup>Optional</sup> <a name="ReachableRoutesInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutesInput"></a>

```csharp
public string[] ReachableRoutesInput { get; }
```

- *Type:* string[]

---

##### `RequirePerfectForwardSecrecyInput`<sup>Optional</sup> <a name="RequirePerfectForwardSecrecyInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecyInput"></a>

```csharp
public object RequirePerfectForwardSecrecyInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `VnicSetsInput`<sup>Optional</sup> <a name="VnicSetsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSetsInput"></a>

```csharp
public string[] VnicSetsInput { get; }
```

- *Type:* string[]

---

##### `CustomerVpnGateway`<sup>Required</sup> <a name="CustomerVpnGateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGateway"></a>

```csharp
public string CustomerVpnGateway { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IkeIdentifier`<sup>Required</sup> <a name="IkeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifier"></a>

```csharp
public string IkeIdentifier { get; }
```

- *Type:* string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PreSharedKey`<sup>Required</sup> <a name="PreSharedKey" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKey"></a>

```csharp
public string PreSharedKey { get; }
```

- *Type:* string

---

##### `ReachableRoutes`<sup>Required</sup> <a name="ReachableRoutes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutes"></a>

```csharp
public string[] ReachableRoutes { get; }
```

- *Type:* string[]

---

##### `RequirePerfectForwardSecrecy`<sup>Required</sup> <a name="RequirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecy"></a>

```csharp
public object RequirePerfectForwardSecrecy { get; }
```

- *Type:* object

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `VnicSets`<sup>Required</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSets"></a>

```csharp
public string[] VnicSets { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnEndpointV2Config <a name="ComputeVpnEndpointV2Config" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeVpnEndpointV2Config {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string CustomerVpnGateway,
    string IpNetwork,
    string Name,
    string PreSharedKey,
    string[] ReachableRoutes,
    string[] VnicSets,
    string Description = null,
    object Enabled = null,
    string Id = null,
    string IkeIdentifier = null,
    ComputeVpnEndpointV2PhaseOneSettings PhaseOneSettings = null,
    ComputeVpnEndpointV2PhaseTwoSettings PhaseTwoSettings = null,
    object RequirePerfectForwardSecrecy = null,
    string[] Tags = null,
    ComputeVpnEndpointV2Timeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.customerVpnGateway">CustomerVpnGateway</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.preSharedKey">PreSharedKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.reachableRoutes">ReachableRoutes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.vnicSets">VnicSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ikeIdentifier">IkeIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseOneSettings">PhaseOneSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | phase_one_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseTwoSettings">PhaseTwoSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | phase_two_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.requirePerfectForwardSecrecy">RequirePerfectForwardSecrecy</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `CustomerVpnGateway`<sup>Required</sup> <a name="CustomerVpnGateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.customerVpnGateway"></a>

```csharp
public string CustomerVpnGateway { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}.

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}.

---

##### `PreSharedKey`<sup>Required</sup> <a name="PreSharedKey" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.preSharedKey"></a>

```csharp
public string PreSharedKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}.

---

##### `ReachableRoutes`<sup>Required</sup> <a name="ReachableRoutes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.reachableRoutes"></a>

```csharp
public string[] ReachableRoutes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}.

---

##### `VnicSets`<sup>Required</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.vnicSets"></a>

```csharp
public string[] VnicSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IkeIdentifier`<sup>Optional</sup> <a name="IkeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ikeIdentifier"></a>

```csharp
public string IkeIdentifier { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}.

---

##### `PhaseOneSettings`<sup>Optional</sup> <a name="PhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseOneSettings"></a>

```csharp
public ComputeVpnEndpointV2PhaseOneSettings PhaseOneSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

phase_one_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_one_settings ComputeVpnEndpointV2#phase_one_settings}

---

##### `PhaseTwoSettings`<sup>Optional</sup> <a name="PhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseTwoSettings"></a>

```csharp
public ComputeVpnEndpointV2PhaseTwoSettings PhaseTwoSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

phase_two_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#phase_two_settings ComputeVpnEndpointV2#phase_two_settings}

---

##### `RequirePerfectForwardSecrecy`<sup>Optional</sup> <a name="RequirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.requirePerfectForwardSecrecy"></a>

```csharp
public object RequirePerfectForwardSecrecy { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.timeouts"></a>

```csharp
public ComputeVpnEndpointV2Timeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#timeouts ComputeVpnEndpointV2#timeouts}

---

### ComputeVpnEndpointV2PhaseOneSettings <a name="ComputeVpnEndpointV2PhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeVpnEndpointV2PhaseOneSettings {
    string DhGroup,
    string Encryption,
    string Hash,
    double Lifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.dhGroup">DhGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.encryption">Encryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.hash">Hash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.lifetime">Lifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}. |

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.dhGroup"></a>

```csharp
public string DhGroup { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}.

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.encryption"></a>

```csharp
public string Encryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.hash"></a>

```csharp
public string Hash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.lifetime"></a>

```csharp
public double Lifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

### ComputeVpnEndpointV2PhaseTwoSettings <a name="ComputeVpnEndpointV2PhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeVpnEndpointV2PhaseTwoSettings {
    string Encryption,
    string Hash,
    double Lifetime = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.encryption">Encryption</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.hash">Hash</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.lifetime">Lifetime</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}. |

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.encryption"></a>

```csharp
public string Encryption { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.hash"></a>

```csharp
public string Hash { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.lifetime"></a>

```csharp
public double Lifetime { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

### ComputeVpnEndpointV2Timeouts <a name="ComputeVpnEndpointV2Timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeVpnEndpointV2Timeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnEndpointV2PhaseOneSettingsOutputReference <a name="ComputeVpnEndpointV2PhaseOneSettingsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeVpnEndpointV2PhaseOneSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hashInput">HashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroup">DhGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryption">Encryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hash">Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroupInput"></a>

```csharp
public string DhGroupInput { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryptionInput"></a>

```csharp
public string EncryptionInput { get; }
```

- *Type:* string

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hashInput"></a>

```csharp
public string HashInput { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetimeInput"></a>

```csharp
public double LifetimeInput { get; }
```

- *Type:* double

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroup"></a>

```csharp
public string DhGroup { get; }
```

- *Type:* string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryption"></a>

```csharp
public string Encryption { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hash"></a>

```csharp
public string Hash { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.internalValue"></a>

```csharp
public ComputeVpnEndpointV2PhaseOneSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---


### ComputeVpnEndpointV2PhaseTwoSettingsOutputReference <a name="ComputeVpnEndpointV2PhaseTwoSettingsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeVpnEndpointV2PhaseTwoSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resetLifetime"></a>

```csharp
private void ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hashInput">HashInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryption">Encryption</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hash">Hash</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetime">Lifetime</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryptionInput"></a>

```csharp
public string EncryptionInput { get; }
```

- *Type:* string

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hashInput"></a>

```csharp
public string HashInput { get; }
```

- *Type:* string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetimeInput"></a>

```csharp
public double LifetimeInput { get; }
```

- *Type:* double

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryption"></a>

```csharp
public string Encryption { get; }
```

- *Type:* string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hash"></a>

```csharp
public string Hash { get; }
```

- *Type:* string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetime"></a>

```csharp
public double Lifetime { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.internalValue"></a>

```csharp
public ComputeVpnEndpointV2PhaseTwoSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---


### ComputeVpnEndpointV2TimeoutsOutputReference <a name="ComputeVpnEndpointV2TimeoutsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeVpnEndpointV2TimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



