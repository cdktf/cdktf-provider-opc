# `opc_lbaas_load_balancer`

Refer to the Terraform Registory for docs: [`opc_lbaas_load_balancer`](https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer).

# `lbaasLoadBalancer` Submodule <a name="`lbaasLoadBalancer` Submodule" id="@cdktf/provider-opc.lbaasLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasLoadBalancer <a name="LbaasLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer opc_lbaas_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasLoadBalancer(Construct Scope, string Id, LbaasLoadBalancerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig">LbaasLoadBalancerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig">LbaasLoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetIpNetwork">ResetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetParentLoadBalancer">ResetParentLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedClients">ResetPermittedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedMethods">ResetPermittedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPolicies">ResetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetServerPool">ResetServerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetIpNetwork"></a>

```csharp
private void ResetIpNetwork()
```

##### `ResetParentLoadBalancer` <a name="ResetParentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetParentLoadBalancer"></a>

```csharp
private void ResetParentLoadBalancer()
```

##### `ResetPermittedClients` <a name="ResetPermittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedClients"></a>

```csharp
private void ResetPermittedClients()
```

##### `ResetPermittedMethods` <a name="ResetPermittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedMethods"></a>

```csharp
private void ResetPermittedMethods()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPolicies"></a>

```csharp
private void ResetPolicies()
```

##### `ResetServerPool` <a name="ResetServerPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetServerPool"></a>

```csharp
private void ResetServerPool()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasLoadBalancer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasLoadBalancer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasLoadBalancer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips">BalancerVips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName">CanonicalHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable">CloudgateCapable</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput">IpNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput">ParentLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput">PermittedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput">PermittedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput">PoliciesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput">ServerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer">ParentLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients">PermittedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods">PermittedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies">Policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool">ServerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `BalancerVips`<sup>Required</sup> <a name="BalancerVips" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips"></a>

```csharp
public string[] BalancerVips { get; }
```

- *Type:* string[]

---

##### `CanonicalHostName`<sup>Required</sup> <a name="CanonicalHostName" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName"></a>

```csharp
public string CanonicalHostName { get; }
```

- *Type:* string

---

##### `CloudgateCapable`<sup>Required</sup> <a name="CloudgateCapable" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable"></a>

```csharp
public IResolvable CloudgateCapable { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput"></a>

```csharp
public string IpNetworkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParentLoadBalancerInput`<sup>Optional</sup> <a name="ParentLoadBalancerInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput"></a>

```csharp
public string ParentLoadBalancerInput { get; }
```

- *Type:* string

---

##### `PermittedClientsInput`<sup>Optional</sup> <a name="PermittedClientsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput"></a>

```csharp
public string[] PermittedClientsInput { get; }
```

- *Type:* string[]

---

##### `PermittedMethodsInput`<sup>Optional</sup> <a name="PermittedMethodsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput"></a>

```csharp
public string[] PermittedMethodsInput { get; }
```

- *Type:* string[]

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput"></a>

```csharp
public string[] PoliciesInput { get; }
```

- *Type:* string[]

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `ServerPoolInput`<sup>Optional</sup> <a name="ServerPoolInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput"></a>

```csharp
public string ServerPoolInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `ParentLoadBalancer`<sup>Required</sup> <a name="ParentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer"></a>

```csharp
public string ParentLoadBalancer { get; }
```

- *Type:* string

---

##### `PermittedClients`<sup>Required</sup> <a name="PermittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients"></a>

```csharp
public string[] PermittedClients { get; }
```

- *Type:* string[]

---

##### `PermittedMethods`<sup>Required</sup> <a name="PermittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods"></a>

```csharp
public string[] PermittedMethods { get; }
```

- *Type:* string[]

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies"></a>

```csharp
public string[] Policies { get; }
```

- *Type:* string[]

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `ServerPool`<sup>Required</sup> <a name="ServerPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool"></a>

```csharp
public string ServerPool { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasLoadBalancerConfig <a name="LbaasLoadBalancerConfig" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasLoadBalancerConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Region,
    string Scheme,
    string Description = null,
    object Enabled = null,
    string Id = null,
    string IpNetwork = null,
    string ParentLoadBalancer = null,
    string[] PermittedClients = null,
    string[] PermittedMethods = null,
    string[] Policies = null,
    string ServerPool = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#name LbaasLoadBalancer#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region">Region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#region LbaasLoadBalancer#region}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme">Scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#description LbaasLoadBalancer#description}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled">Enabled</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#id LbaasLoadBalancer#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork">IpNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer">ParentLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients">PermittedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods">PermittedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies">Policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#policies LbaasLoadBalancer#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool">ServerPool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags">Tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#tags LbaasLoadBalancer#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#name LbaasLoadBalancer#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#region LbaasLoadBalancer#region}.

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#description LbaasLoadBalancer#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#id LbaasLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork"></a>

```csharp
public string IpNetwork { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}.

---

##### `ParentLoadBalancer`<sup>Optional</sup> <a name="ParentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer"></a>

```csharp
public string ParentLoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}.

---

##### `PermittedClients`<sup>Optional</sup> <a name="PermittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients"></a>

```csharp
public string[] PermittedClients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}.

---

##### `PermittedMethods`<sup>Optional</sup> <a name="PermittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods"></a>

```csharp
public string[] PermittedMethods { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies"></a>

```csharp
public string[] Policies { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#policies LbaasLoadBalancer#policies}.

---

##### `ServerPool`<sup>Optional</sup> <a name="ServerPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool"></a>

```csharp
public string ServerPool { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_load_balancer#tags LbaasLoadBalancer#tags}.

---



