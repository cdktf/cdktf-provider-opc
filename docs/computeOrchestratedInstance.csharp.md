# `computeOrchestratedInstance` Submodule <a name="`computeOrchestratedInstance` Submodule" id="@cdktf/provider-opc.computeOrchestratedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrchestratedInstance <a name="ComputeOrchestratedInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance opc_compute_orchestrated_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstance(Construct Scope, string Id, ComputeOrchestratedInstanceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig">ComputeOrchestratedInstanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig">ComputeOrchestratedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance">PutInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutInstance` <a name="PutInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance"></a>

```csharp
private void PutInstance(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts"></a>

```csharp
private void PutTimeouts(ComputeOrchestratedInstanceTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeOrchestratedInstance.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeOrchestratedInstance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeOrchestratedInstance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instance">Instance</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList">ComputeOrchestratedInstanceInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference">ComputeOrchestratedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredStateInput">DesiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instanceInput">InstanceInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredState">DesiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instance"></a>

```csharp
public ComputeOrchestratedInstanceInstanceList Instance { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList">ComputeOrchestratedInstanceInstanceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeouts"></a>

```csharp
public ComputeOrchestratedInstanceTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference">ComputeOrchestratedInstanceTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredStateInput"></a>

```csharp
public string DesiredStateInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instanceInput"></a>

```csharp
public object InstanceInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredState"></a>

```csharp
public string DesiredState { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrchestratedInstanceConfig <a name="ComputeOrchestratedInstanceConfig" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DesiredState,
    object Instance,
    string Name,
    string Description = null,
    string Id = null,
    string[] Tags = null,
    ComputeOrchestratedInstanceTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.desiredState">DesiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.instance">Instance</a></code> | <code>object</code> | instance block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.desiredState"></a>

```csharp
public string DesiredState { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}.

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.instance"></a>

```csharp
public object Instance { get; set; }
```

- *Type:* object

instance block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#instance ComputeOrchestratedInstance#instance}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.timeouts"></a>

```csharp
public ComputeOrchestratedInstanceTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#timeouts ComputeOrchestratedInstance#timeouts}

---

### ComputeOrchestratedInstanceInstance <a name="ComputeOrchestratedInstanceInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstance {
    string Name,
    string Shape,
    double[] BootOrder = null,
    string Hostname = null,
    string ImageList = null,
    string InstanceAttributes = null,
    string Label = null,
    object NetworkingInfo = null,
    object Persistent = null,
    object ReverseDns = null,
    string[] SshKeys = null,
    object Storage = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.shape">Shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#shape ComputeOrchestratedInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.bootOrder">BootOrder</a></code> | <code>double[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#boot_order ComputeOrchestratedInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.hostname">Hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#hostname ComputeOrchestratedInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.imageList">ImageList</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#image_list ComputeOrchestratedInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.instanceAttributes">InstanceAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#instance_attributes ComputeOrchestratedInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.label">Label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#label ComputeOrchestratedInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.networkingInfo">NetworkingInfo</a></code> | <code>object</code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.persistent">Persistent</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#persistent ComputeOrchestratedInstance#persistent}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.reverseDns">ReverseDns</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#reverse_dns ComputeOrchestratedInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#ssh_keys ComputeOrchestratedInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.storage">Storage</a></code> | <code>object</code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.shape"></a>

```csharp
public string Shape { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#shape ComputeOrchestratedInstance#shape}.

---

##### `BootOrder`<sup>Optional</sup> <a name="BootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.bootOrder"></a>

```csharp
public double[] BootOrder { get; set; }
```

- *Type:* double[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#boot_order ComputeOrchestratedInstance#boot_order}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.hostname"></a>

```csharp
public string Hostname { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#hostname ComputeOrchestratedInstance#hostname}.

---

##### `ImageList`<sup>Optional</sup> <a name="ImageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.imageList"></a>

```csharp
public string ImageList { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#image_list ComputeOrchestratedInstance#image_list}.

---

##### `InstanceAttributes`<sup>Optional</sup> <a name="InstanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.instanceAttributes"></a>

```csharp
public string InstanceAttributes { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#instance_attributes ComputeOrchestratedInstance#instance_attributes}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.label"></a>

```csharp
public string Label { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#label ComputeOrchestratedInstance#label}.

---

##### `NetworkingInfo`<sup>Optional</sup> <a name="NetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.networkingInfo"></a>

```csharp
public object NetworkingInfo { get; set; }
```

- *Type:* object

networking_info block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#networking_info ComputeOrchestratedInstance#networking_info}

---

##### `Persistent`<sup>Optional</sup> <a name="Persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.persistent"></a>

```csharp
public object Persistent { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#persistent ComputeOrchestratedInstance#persistent}.

---

##### `ReverseDns`<sup>Optional</sup> <a name="ReverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.reverseDns"></a>

```csharp
public object ReverseDns { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#reverse_dns ComputeOrchestratedInstance#reverse_dns}.

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#ssh_keys ComputeOrchestratedInstance#ssh_keys}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.storage"></a>

```csharp
public object Storage { get; set; }
```

- *Type:* object

storage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#storage ComputeOrchestratedInstance#storage}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

### ComputeOrchestratedInstanceInstanceNetworkingInfo <a name="ComputeOrchestratedInstanceInstanceNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstanceNetworkingInfo {
    double Index,
    string[] Dns = null,
    string IpAddress = null,
    string IpNetwork = null,
    object IsDefaultGateway = null,
    string MacAddress = null,
    string[] NameServers = null,
    string[] Nat = null,
    string[] SearchDomains = null,
    string[] SecLists = null,
    object SharedNetwork = null,
    string Vnic = null,
    string[] VnicSets = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.index">Index</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.dns">Dns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#dns ComputeOrchestratedInstance#dns}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipAddress">IpAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#ip_address ComputeOrchestratedInstance#ip_address}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#ip_network ComputeOrchestratedInstance#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.isDefaultGateway">IsDefaultGateway</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#is_default_gateway ComputeOrchestratedInstance#is_default_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.macAddress">MacAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#mac_address ComputeOrchestratedInstance#mac_address}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nameServers">NameServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#name_servers ComputeOrchestratedInstance#name_servers}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nat">Nat</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#nat ComputeOrchestratedInstance#nat}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.searchDomains">SearchDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#search_domains ComputeOrchestratedInstance#search_domains}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.secLists">SecLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#sec_lists ComputeOrchestratedInstance#sec_lists}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.sharedNetwork">SharedNetwork</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#shared_network ComputeOrchestratedInstance#shared_network}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnic">Vnic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#vnic ComputeOrchestratedInstance#vnic}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnicSets">VnicSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#vnic_sets ComputeOrchestratedInstance#vnic_sets}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.index"></a>

```csharp
public double Index { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.dns"></a>

```csharp
public string[] Dns { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#dns ComputeOrchestratedInstance#dns}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipAddress"></a>

```csharp
public string IpAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#ip_address ComputeOrchestratedInstance#ip_address}.

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#ip_network ComputeOrchestratedInstance#ip_network}.

---

##### `IsDefaultGateway`<sup>Optional</sup> <a name="IsDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.isDefaultGateway"></a>

```csharp
public object IsDefaultGateway { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#is_default_gateway ComputeOrchestratedInstance#is_default_gateway}.

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.macAddress"></a>

```csharp
public string MacAddress { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#mac_address ComputeOrchestratedInstance#mac_address}.

---

##### `NameServers`<sup>Optional</sup> <a name="NameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nameServers"></a>

```csharp
public string[] NameServers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#name_servers ComputeOrchestratedInstance#name_servers}.

---

##### `Nat`<sup>Optional</sup> <a name="Nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nat"></a>

```csharp
public string[] Nat { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#nat ComputeOrchestratedInstance#nat}.

---

##### `SearchDomains`<sup>Optional</sup> <a name="SearchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.searchDomains"></a>

```csharp
public string[] SearchDomains { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#search_domains ComputeOrchestratedInstance#search_domains}.

---

##### `SecLists`<sup>Optional</sup> <a name="SecLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.secLists"></a>

```csharp
public string[] SecLists { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#sec_lists ComputeOrchestratedInstance#sec_lists}.

---

##### `SharedNetwork`<sup>Optional</sup> <a name="SharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.sharedNetwork"></a>

```csharp
public object SharedNetwork { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#shared_network ComputeOrchestratedInstance#shared_network}.

---

##### `Vnic`<sup>Optional</sup> <a name="Vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnic"></a>

```csharp
public string Vnic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#vnic ComputeOrchestratedInstance#vnic}.

---

##### `VnicSets`<sup>Optional</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnicSets"></a>

```csharp
public string[] VnicSets { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#vnic_sets ComputeOrchestratedInstance#vnic_sets}.

---

### ComputeOrchestratedInstanceInstanceStorage <a name="ComputeOrchestratedInstanceInstanceStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstanceStorage {
    double Index,
    string Volume
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.index">Index</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.volume">Volume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#volume ComputeOrchestratedInstance#volume}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.index"></a>

```csharp
public double Index { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.volume"></a>

```csharp
public string Volume { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#volume ComputeOrchestratedInstance#volume}.

---

### ComputeOrchestratedInstanceTimeouts <a name="ComputeOrchestratedInstanceTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrchestratedInstanceInstanceList <a name="ComputeOrchestratedInstanceInstanceList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstanceList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get"></a>

```csharp
private ComputeOrchestratedInstanceInstanceOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeOrchestratedInstanceInstanceNetworkingInfoList <a name="ComputeOrchestratedInstanceInstanceNetworkingInfoList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstanceNetworkingInfoList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get"></a>

```csharp
private ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference <a name="ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpNetwork">ResetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIsDefaultGateway">ResetIsDefaultGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNameServers">ResetNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNat">ResetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSearchDomains">ResetSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSecLists">ResetSecLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSharedNetwork">ResetSharedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnic">ResetVnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnicSets">ResetVnicSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDns` <a name="ResetDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetDns"></a>

```csharp
private void ResetDns()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpAddress"></a>

```csharp
private void ResetIpAddress()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpNetwork"></a>

```csharp
private void ResetIpNetwork()
```

##### `ResetIsDefaultGateway` <a name="ResetIsDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIsDefaultGateway"></a>

```csharp
private void ResetIsDefaultGateway()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetMacAddress"></a>

```csharp
private void ResetMacAddress()
```

##### `ResetNameServers` <a name="ResetNameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNameServers"></a>

```csharp
private void ResetNameServers()
```

##### `ResetNat` <a name="ResetNat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNat"></a>

```csharp
private void ResetNat()
```

##### `ResetSearchDomains` <a name="ResetSearchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSearchDomains"></a>

```csharp
private void ResetSearchDomains()
```

##### `ResetSecLists` <a name="ResetSecLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSecLists"></a>

```csharp
private void ResetSecLists()
```

##### `ResetSharedNetwork` <a name="ResetSharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSharedNetwork"></a>

```csharp
private void ResetSharedNetwork()
```

##### `ResetVnic` <a name="ResetVnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnic"></a>

```csharp
private void ResetVnic()
```

##### `ResetVnicSets` <a name="ResetVnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnicSets"></a>

```csharp
private void ResetVnicSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dnsInput">DnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.indexInput">IndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetworkInput">IpNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput">IsDefaultGatewayInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddressInput">MacAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServersInput">NameServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.natInput">NatInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomainsInput">SearchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secListsInput">SecListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetworkInput">SharedNetworkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicInput">VnicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSetsInput">VnicSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dns">Dns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.index">Index</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGateway">IsDefaultGateway</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServers">NameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nat">Nat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomains">SearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secLists">SecLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetwork">SharedNetwork</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnic">Vnic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSets">VnicSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dnsInput"></a>

```csharp
public string[] DnsInput { get; }
```

- *Type:* string[]

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.indexInput"></a>

```csharp
public double IndexInput { get; }
```

- *Type:* double

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddressInput"></a>

```csharp
public string IpAddressInput { get; }
```

- *Type:* string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetworkInput"></a>

```csharp
public string IpNetworkInput { get; }
```

- *Type:* string

---

##### `IsDefaultGatewayInput`<sup>Optional</sup> <a name="IsDefaultGatewayInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput"></a>

```csharp
public object IsDefaultGatewayInput { get; }
```

- *Type:* object

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddressInput"></a>

```csharp
public string MacAddressInput { get; }
```

- *Type:* string

---

##### `NameServersInput`<sup>Optional</sup> <a name="NameServersInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServersInput"></a>

```csharp
public string[] NameServersInput { get; }
```

- *Type:* string[]

---

##### `NatInput`<sup>Optional</sup> <a name="NatInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.natInput"></a>

```csharp
public string[] NatInput { get; }
```

- *Type:* string[]

---

##### `SearchDomainsInput`<sup>Optional</sup> <a name="SearchDomainsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomainsInput"></a>

```csharp
public string[] SearchDomainsInput { get; }
```

- *Type:* string[]

---

##### `SecListsInput`<sup>Optional</sup> <a name="SecListsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secListsInput"></a>

```csharp
public string[] SecListsInput { get; }
```

- *Type:* string[]

---

##### `SharedNetworkInput`<sup>Optional</sup> <a name="SharedNetworkInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetworkInput"></a>

```csharp
public object SharedNetworkInput { get; }
```

- *Type:* object

---

##### `VnicInput`<sup>Optional</sup> <a name="VnicInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicInput"></a>

```csharp
public string VnicInput { get; }
```

- *Type:* string

---

##### `VnicSetsInput`<sup>Optional</sup> <a name="VnicSetsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSetsInput"></a>

```csharp
public string[] VnicSetsInput { get; }
```

- *Type:* string[]

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dns"></a>

```csharp
public string[] Dns { get; }
```

- *Type:* string[]

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.index"></a>

```csharp
public double Index { get; }
```

- *Type:* double

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; }
```

- *Type:* string

---

##### `IsDefaultGateway`<sup>Required</sup> <a name="IsDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGateway"></a>

```csharp
public object IsDefaultGateway { get; }
```

- *Type:* object

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServers"></a>

```csharp
public string[] NameServers { get; }
```

- *Type:* string[]

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nat"></a>

```csharp
public string[] Nat { get; }
```

- *Type:* string[]

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomains"></a>

```csharp
public string[] SearchDomains { get; }
```

- *Type:* string[]

---

##### `SecLists`<sup>Required</sup> <a name="SecLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secLists"></a>

```csharp
public string[] SecLists { get; }
```

- *Type:* string[]

---

##### `SharedNetwork`<sup>Required</sup> <a name="SharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetwork"></a>

```csharp
public object SharedNetwork { get; }
```

- *Type:* object

---

##### `Vnic`<sup>Required</sup> <a name="Vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnic"></a>

```csharp
public string Vnic { get; }
```

- *Type:* string

---

##### `VnicSets`<sup>Required</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSets"></a>

```csharp
public string[] VnicSets { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeOrchestratedInstanceInstanceOutputReference <a name="ComputeOrchestratedInstanceInstanceOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstanceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo">PutNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetBootOrder">ResetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetImageList">ResetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetInstanceAttributes">ResetInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetNetworkingInfo">ResetNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetPersistent">ResetPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetReverseDns">ResetReverseDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkingInfo` <a name="PutNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo"></a>

```csharp
private void PutNetworkingInfo(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo.parameter.value"></a>

- *Type:* object

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage"></a>

```csharp
private void PutStorage(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage.parameter.value"></a>

- *Type:* object

---

##### `ResetBootOrder` <a name="ResetBootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetBootOrder"></a>

```csharp
private void ResetBootOrder()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetHostname"></a>

```csharp
private void ResetHostname()
```

##### `ResetImageList` <a name="ResetImageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetImageList"></a>

```csharp
private void ResetImageList()
```

##### `ResetInstanceAttributes` <a name="ResetInstanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetInstanceAttributes"></a>

```csharp
private void ResetInstanceAttributes()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetLabel"></a>

```csharp
private void ResetLabel()
```

##### `ResetNetworkingInfo` <a name="ResetNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetNetworkingInfo"></a>

```csharp
private void ResetNetworkingInfo()
```

##### `ResetPersistent` <a name="ResetPersistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetPersistent"></a>

```csharp
private void ResetPersistent()
```

##### `ResetReverseDns` <a name="ResetReverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetReverseDns"></a>

```csharp
private void ResetReverseDns()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetSshKeys"></a>

```csharp
private void ResetSshKeys()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetStorage"></a>

```csharp
private void ResetStorage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetTags"></a>

```csharp
private void ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.attributes">Attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.entry">Entry</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fingerprint">Fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqdn">Fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageFormat">ImageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfo">NetworkingInfo</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList">ComputeOrchestratedInstanceInstanceNetworkingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.placementRequirements">PlacementRequirements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.platform">Platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.priority">Priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.quotaReservation">QuotaReservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.relationships">Relationships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.resolvers">Resolvers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.site">Site</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.startTime">StartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.state">State</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList">ComputeOrchestratedInstanceInstanceStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vcable">Vcable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.virtio">Virtio</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vncAddress">VncAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrderInput">BootOrderInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageListInput">ImageListInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributesInput">InstanceAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.labelInput">LabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfoInput">NetworkingInfoInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistentInput">PersistentInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDnsInput">ReverseDnsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shapeInput">ShapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storageInput">StorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrder">BootOrder</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageList">ImageList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributes">InstanceAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.label">Label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistent">Persistent</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDns">ReverseDns</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shape">Shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeys">SshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.attributes"></a>

```csharp
public string Attributes { get; }
```

- *Type:* string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.availabilityDomain"></a>

```csharp
public string AvailabilityDomain { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.entry"></a>

```csharp
public double Entry { get; }
```

- *Type:* double

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fingerprint"></a>

```csharp
public string Fingerprint { get; }
```

- *Type:* string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqdn"></a>

```csharp
public string Fqdn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ImageFormat`<sup>Required</sup> <a name="ImageFormat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageFormat"></a>

```csharp
public string ImageFormat { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `NetworkingInfo`<sup>Required</sup> <a name="NetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfo"></a>

```csharp
public ComputeOrchestratedInstanceInstanceNetworkingInfoList NetworkingInfo { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList">ComputeOrchestratedInstanceInstanceNetworkingInfoList</a>

---

##### `PlacementRequirements`<sup>Required</sup> <a name="PlacementRequirements" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.placementRequirements"></a>

```csharp
public string[] PlacementRequirements { get; }
```

- *Type:* string[]

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.platform"></a>

```csharp
public string Platform { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.priority"></a>

```csharp
public string Priority { get; }
```

- *Type:* string

---

##### `QuotaReservation`<sup>Required</sup> <a name="QuotaReservation" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.quotaReservation"></a>

```csharp
public string QuotaReservation { get; }
```

- *Type:* string

---

##### `Relationships`<sup>Required</sup> <a name="Relationships" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.relationships"></a>

```csharp
public string[] Relationships { get; }
```

- *Type:* string[]

---

##### `Resolvers`<sup>Required</sup> <a name="Resolvers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.resolvers"></a>

```csharp
public string[] Resolvers { get; }
```

- *Type:* string[]

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.site"></a>

```csharp
public string Site { get; }
```

- *Type:* string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.startTime"></a>

```csharp
public string StartTime { get; }
```

- *Type:* string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.state"></a>

```csharp
public string State { get; }
```

- *Type:* string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storage"></a>

```csharp
public ComputeOrchestratedInstanceInstanceStorageList Storage { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList">ComputeOrchestratedInstanceInstanceStorageList</a>

---

##### `Vcable`<sup>Required</sup> <a name="Vcable" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vcable"></a>

```csharp
public string Vcable { get; }
```

- *Type:* string

---

##### `Virtio`<sup>Required</sup> <a name="Virtio" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.virtio"></a>

```csharp
public IResolvable Virtio { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `VncAddress`<sup>Required</sup> <a name="VncAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vncAddress"></a>

```csharp
public string VncAddress { get; }
```

- *Type:* string

---

##### `BootOrderInput`<sup>Optional</sup> <a name="BootOrderInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrderInput"></a>

```csharp
public double[] BootOrderInput { get; }
```

- *Type:* double[]

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostnameInput"></a>

```csharp
public string HostnameInput { get; }
```

- *Type:* string

---

##### `ImageListInput`<sup>Optional</sup> <a name="ImageListInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageListInput"></a>

```csharp
public string ImageListInput { get; }
```

- *Type:* string

---

##### `InstanceAttributesInput`<sup>Optional</sup> <a name="InstanceAttributesInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributesInput"></a>

```csharp
public string InstanceAttributesInput { get; }
```

- *Type:* string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.labelInput"></a>

```csharp
public string LabelInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NetworkingInfoInput`<sup>Optional</sup> <a name="NetworkingInfoInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfoInput"></a>

```csharp
public object NetworkingInfoInput { get; }
```

- *Type:* object

---

##### `PersistentInput`<sup>Optional</sup> <a name="PersistentInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistentInput"></a>

```csharp
public object PersistentInput { get; }
```

- *Type:* object

---

##### `ReverseDnsInput`<sup>Optional</sup> <a name="ReverseDnsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDnsInput"></a>

```csharp
public object ReverseDnsInput { get; }
```

- *Type:* object

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shapeInput"></a>

```csharp
public string ShapeInput { get; }
```

- *Type:* string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeysInput"></a>

```csharp
public string[] SshKeysInput { get; }
```

- *Type:* string[]

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storageInput"></a>

```csharp
public object StorageInput { get; }
```

- *Type:* object

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrder"></a>

```csharp
public double[] BootOrder { get; }
```

- *Type:* double[]

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `ImageList`<sup>Required</sup> <a name="ImageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageList"></a>

```csharp
public string ImageList { get; }
```

- *Type:* string

---

##### `InstanceAttributes`<sup>Required</sup> <a name="InstanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributes"></a>

```csharp
public string InstanceAttributes { get; }
```

- *Type:* string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.label"></a>

```csharp
public string Label { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Persistent`<sup>Required</sup> <a name="Persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistent"></a>

```csharp
public object Persistent { get; }
```

- *Type:* object

---

##### `ReverseDns`<sup>Required</sup> <a name="ReverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDns"></a>

```csharp
public object ReverseDns { get; }
```

- *Type:* object

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shape"></a>

```csharp
public string Shape { get; }
```

- *Type:* string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeys"></a>

```csharp
public string[] SshKeys { get; }
```

- *Type:* string[]

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeOrchestratedInstanceInstanceStorageList <a name="ComputeOrchestratedInstanceInstanceStorageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstanceStorageList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get"></a>

```csharp
private ComputeOrchestratedInstanceInstanceStorageOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeOrchestratedInstanceInstanceStorageOutputReference <a name="ComputeOrchestratedInstanceInstanceStorageOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceInstanceStorageOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.indexInput">IndexInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volumeInput">VolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.index">Index</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volume">Volume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.indexInput"></a>

```csharp
public double IndexInput { get; }
```

- *Type:* double

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volumeInput"></a>

```csharp
public string VolumeInput { get; }
```

- *Type:* string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.index"></a>

```csharp
public double Index { get; }
```

- *Type:* double

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volume"></a>

```csharp
public string Volume { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### ComputeOrchestratedInstanceTimeoutsOutputReference <a name="ComputeOrchestratedInstanceTimeoutsOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeOrchestratedInstanceTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



