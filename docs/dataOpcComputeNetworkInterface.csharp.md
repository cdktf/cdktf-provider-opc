# `dataOpcComputeNetworkInterface` Submodule <a name="`dataOpcComputeNetworkInterface` Submodule" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeNetworkInterface <a name="DataOpcComputeNetworkInterface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface opc_compute_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new DataOpcComputeNetworkInterface(Construct Scope, string Id, DataOpcComputeNetworkInterfaceConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig">DataOpcComputeNetworkInterfaceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig">DataOpcComputeNetworkInterfaceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeNetworkInterface.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeNetworkInterface.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

DataOpcComputeNetworkInterface.IsTerraformDataSource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dns">Dns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.isDefaultGateway">IsDefaultGateway</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.macAddress">MacAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.model">Model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nameServers">NameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nat">Nat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.searchDomains">SearchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.secLists">SecLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.sharedNetwork">SharedNetwork</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnic">Vnic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnicSets">VnicSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceIdInput">InstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interfaceInput">InterfaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceId">InstanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interface">Interface</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dns"></a>

```csharp
public string[] Dns { get; }
```

- *Type:* string[]

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; }
```

- *Type:* string

---

##### `IsDefaultGateway`<sup>Required</sup> <a name="IsDefaultGateway" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.isDefaultGateway"></a>

```csharp
public IResolvable IsDefaultGateway { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.macAddress"></a>

```csharp
public string MacAddress { get; }
```

- *Type:* string

---

##### `Model`<sup>Required</sup> <a name="Model" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.model"></a>

```csharp
public string Model { get; }
```

- *Type:* string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nameServers"></a>

```csharp
public string[] NameServers { get; }
```

- *Type:* string[]

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nat"></a>

```csharp
public string[] Nat { get; }
```

- *Type:* string[]

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.searchDomains"></a>

```csharp
public string[] SearchDomains { get; }
```

- *Type:* string[]

---

##### `SecLists`<sup>Required</sup> <a name="SecLists" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.secLists"></a>

```csharp
public string[] SecLists { get; }
```

- *Type:* string[]

---

##### `SharedNetwork`<sup>Required</sup> <a name="SharedNetwork" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.sharedNetwork"></a>

```csharp
public IResolvable SharedNetwork { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Vnic`<sup>Required</sup> <a name="Vnic" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnic"></a>

```csharp
public string Vnic { get; }
```

- *Type:* string

---

##### `VnicSets`<sup>Required</sup> <a name="VnicSets" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnicSets"></a>

```csharp
public string[] VnicSets { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceIdInput"></a>

```csharp
public string InstanceIdInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `InterfaceInput`<sup>Optional</sup> <a name="InterfaceInput" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interfaceInput"></a>

```csharp
public string InterfaceInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceId"></a>

```csharp
public string InstanceId { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interface"></a>

```csharp
public string Interface { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeNetworkInterfaceConfig <a name="DataOpcComputeNetworkInterfaceConfig" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new DataOpcComputeNetworkInterfaceConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string InstanceId,
    string InstanceName,
    string Interface,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceId">InstanceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceName">InstanceName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.interface">Interface</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceId"></a>

```csharp
public string InstanceId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}.

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}.

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.interface"></a>

```csharp
public string Interface { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



