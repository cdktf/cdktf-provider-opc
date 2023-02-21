# `computeIpAddressAssociation` Submodule <a name="`computeIpAddressAssociation` Submodule" id="@cdktf/provider-opc.computeIpAddressAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeIpAddressAssociation <a name="ComputeIpAddressAssociation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association opc_compute_ip_address_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeIpAddressAssociation(Construct Scope, string Id, ComputeIpAddressAssociationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig">ComputeIpAddressAssociationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig">ComputeIpAddressAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetIpAddressReservation">ResetIpAddressReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetVnic">ResetVnic</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpAddressReservation` <a name="ResetIpAddressReservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetIpAddressReservation"></a>

```csharp
private void ResetIpAddressReservation()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetTags"></a>

```csharp
private void ResetTags()
```

##### `ResetVnic` <a name="ResetVnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetVnic"></a>

```csharp
private void ResetVnic()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeIpAddressAssociation.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeIpAddressAssociation.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

ComputeIpAddressAssociation.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservationInput">IpAddressReservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnicInput">VnicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservation">IpAddressReservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnic">Vnic</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpAddressReservationInput`<sup>Optional</sup> <a name="IpAddressReservationInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservationInput"></a>

```csharp
public string IpAddressReservationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `VnicInput`<sup>Optional</sup> <a name="VnicInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnicInput"></a>

```csharp
public string VnicInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpAddressReservation`<sup>Required</sup> <a name="IpAddressReservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservation"></a>

```csharp
public string IpAddressReservation { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Vnic`<sup>Required</sup> <a name="Vnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnic"></a>

```csharp
public string Vnic { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeIpAddressAssociationConfig <a name="ComputeIpAddressAssociationConfig" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new ComputeIpAddressAssociationConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    string IpAddressReservation = null,
    string[] Tags = null,
    string Vnic = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#name ComputeIpAddressAssociation#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#description ComputeIpAddressAssociation#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#id ComputeIpAddressAssociation#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.ipAddressReservation">IpAddressReservation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#ip_address_reservation ComputeIpAddressAssociation#ip_address_reservation}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#tags ComputeIpAddressAssociation#tags}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.vnic">Vnic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#vnic ComputeIpAddressAssociation#vnic}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#name ComputeIpAddressAssociation#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#description ComputeIpAddressAssociation#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#id ComputeIpAddressAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpAddressReservation`<sup>Optional</sup> <a name="IpAddressReservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.ipAddressReservation"></a>

```csharp
public string IpAddressReservation { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#ip_address_reservation ComputeIpAddressAssociation#ip_address_reservation}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#tags ComputeIpAddressAssociation#tags}.

---

##### `Vnic`<sup>Optional</sup> <a name="Vnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.vnic"></a>

```csharp
public string Vnic { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#vnic ComputeIpAddressAssociation#vnic}.

---



