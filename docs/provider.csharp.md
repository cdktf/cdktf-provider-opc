# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpcProvider <a name="OpcProvider" id="@cdktf/provider-opc.provider.OpcProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs opc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.provider.OpcProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new OpcProvider(Construct Scope, string Id, OpcProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig">OpcProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.provider.OpcProviderConfig">OpcProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetInsecure">ResetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint">ResetLbaasEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint">ResetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId">ResetStorageServiceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.provider.OpcProvider.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.provider.OpcProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.provider.OpcProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.provider.OpcProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-opc.provider.OpcProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetEndpoint"></a>

```csharp
private void ResetEndpoint()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-opc.provider.OpcProvider.resetInsecure"></a>

```csharp
private void ResetInsecure()
```

##### `ResetLbaasEndpoint` <a name="ResetLbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint"></a>

```csharp
private void ResetLbaasEndpoint()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint"></a>

```csharp
private void ResetStorageEndpoint()
```

##### `ResetStorageServiceId` <a name="ResetStorageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId"></a>

```csharp
private void ResetStorageServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OpcProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.provider.OpcProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

OpcProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.provider.OpcProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

OpcProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

OpcProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

OpcProvider.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a OpcProvider resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpcProvider to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpcProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the OpcProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpointInput">EndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput">IdentityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecureInput">InsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput">LbaasEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput">StorageServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomain">IdentityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecure">Insecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint">LbaasEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId">StorageServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.user">User</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.provider.OpcProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.provider.OpcProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-opc.provider.OpcProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-opc.provider.OpcProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.endpointInput"></a>

```csharp
public string EndpointInput { get; }
```

- *Type:* string

---

##### `IdentityDomainInput`<sup>Optional</sup> <a name="IdentityDomainInput" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput"></a>

```csharp
public string IdentityDomainInput { get; }
```

- *Type:* string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-opc.provider.OpcProvider.property.insecureInput"></a>

```csharp
public object InsecureInput { get; }
```

- *Type:* object

---

##### `LbaasEndpointInput`<sup>Optional</sup> <a name="LbaasEndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput"></a>

```csharp
public string LbaasEndpointInput { get; }
```

- *Type:* string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opc.provider.OpcProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput"></a>

```csharp
public string StorageEndpointInput { get; }
```

- *Type:* string

---

##### `StorageServiceIdInput`<sup>Optional</sup> <a name="StorageServiceIdInput" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput"></a>

```csharp
public string StorageServiceIdInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-opc.provider.OpcProvider.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `IdentityDomain`<sup>Optional</sup> <a name="IdentityDomain" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomain"></a>

```csharp
public string IdentityDomain { get; }
```

- *Type:* string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-opc.provider.OpcProvider.property.insecure"></a>

```csharp
public object Insecure { get; }
```

- *Type:* object

---

##### `LbaasEndpoint`<sup>Optional</sup> <a name="LbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint"></a>

```csharp
public string LbaasEndpoint { get; }
```

- *Type:* string

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opc.provider.OpcProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; }
```

- *Type:* string

---

##### `StorageServiceId`<sup>Optional</sup> <a name="StorageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId"></a>

```csharp
public string StorageServiceId { get; }
```

- *Type:* string

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-opc.provider.OpcProvider.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpcProviderConfig <a name="OpcProviderConfig" id="@cdktf/provider-opc.provider.OpcProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.provider.OpcProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new OpcProviderConfig {
    string IdentityDomain,
    string Password,
    string User,
    string Alias = null,
    string Endpoint = null,
    object Insecure = null,
    string LbaasEndpoint = null,
    double MaxRetries = null,
    string StorageEndpoint = null,
    string StorageServiceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain">IdentityDomain</a></code> | <code>string</code> | The OPC identity domain for API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.password">Password</a></code> | <code>string</code> | The user password for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.user">User</a></code> | <code>string</code> | The user name for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint">Endpoint</a></code> | <code>string</code> | The HTTP endpoint for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure">Insecure</a></code> | <code>object</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint">LbaasEndpoint</a></code> | <code>string</code> | The HTTP endpoint for the Load Balancer Classic service. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>double</code> | Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1). |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint">StorageEndpoint</a></code> | <code>string</code> | The HTTP endpoint for Oracle Storage operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId">StorageServiceId</a></code> | <code>string</code> | The Storage Service ID. |

---

##### `IdentityDomain`<sup>Required</sup> <a name="IdentityDomain" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain"></a>

```csharp
public string IdentityDomain { get; set; }
```

- *Type:* string

The OPC identity domain for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#identity_domain OpcProvider#identity_domain}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

The user password for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#password OpcProvider#password}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

The user name for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#user OpcProvider#user}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#alias OpcProvider#alias}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint"></a>

```csharp
public string Endpoint { get; set; }
```

- *Type:* string

The HTTP endpoint for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#endpoint OpcProvider#endpoint}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure"></a>

```csharp
public object Insecure { get; set; }
```

- *Type:* object

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#insecure OpcProvider#insecure}

---

##### `LbaasEndpoint`<sup>Optional</sup> <a name="LbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint"></a>

```csharp
public string LbaasEndpoint { get; set; }
```

- *Type:* string

The HTTP endpoint for the Load Balancer Classic service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#lbaas_endpoint OpcProvider#lbaas_endpoint}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#max_retries OpcProvider#max_retries}

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint"></a>

```csharp
public string StorageEndpoint { get; set; }
```

- *Type:* string

The HTTP endpoint for Oracle Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_endpoint OpcProvider#storage_endpoint}

---

##### `StorageServiceId`<sup>Optional</sup> <a name="StorageServiceId" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId"></a>

```csharp
public string StorageServiceId { get; set; }
```

- *Type:* string

The Storage Service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_service_id OpcProvider#storage_service_id}

---



