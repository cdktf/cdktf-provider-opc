# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpcProvider <a name="OpcProvider" id="@cdktf/provider-opc.provider.OpcProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs opc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.provider.OpcProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/provider"

provider.NewOpcProvider(scope Construct, id *string, config OpcProviderConfig) OpcProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig">OpcProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.provider.OpcProviderConfig">OpcProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.provider.OpcProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opc.provider.OpcProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.provider.OpcProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.provider.OpcProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-opc.provider.OpcProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetInsecure` <a name="ResetInsecure" id="@cdktf/provider-opc.provider.OpcProvider.resetInsecure"></a>

```go
func ResetInsecure()
```

##### `ResetLbaasEndpoint` <a name="ResetLbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint"></a>

```go
func ResetLbaasEndpoint()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries"></a>

```go
func ResetMaxRetries()
```

##### `ResetStorageEndpoint` <a name="ResetStorageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint"></a>

```go
func ResetStorageEndpoint()
```

##### `ResetStorageServiceId` <a name="ResetStorageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId"></a>

```go
func ResetStorageServiceId()
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

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/provider"

provider.OpcProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/provider"

provider.OpcProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/provider"

provider.OpcProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/provider"

provider.OpcProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OpcProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OpcProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OpcProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OpcProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput">IdentityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecureInput">InsecureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput">LbaasEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput">StorageEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput">StorageServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomain">IdentityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecure">Insecure</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint">LbaasEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId">StorageServiceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.user">User</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.provider.OpcProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.provider.OpcProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-opc.provider.OpcProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-opc.provider.OpcProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `IdentityDomainInput`<sup>Optional</sup> <a name="IdentityDomainInput" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput"></a>

```go
func IdentityDomainInput() *string
```

- *Type:* *string

---

##### `InsecureInput`<sup>Optional</sup> <a name="InsecureInput" id="@cdktf/provider-opc.provider.OpcProvider.property.insecureInput"></a>

```go
func InsecureInput() interface{}
```

- *Type:* interface{}

---

##### `LbaasEndpointInput`<sup>Optional</sup> <a name="LbaasEndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput"></a>

```go
func LbaasEndpointInput() *string
```

- *Type:* *string

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput"></a>

```go
func MaxRetriesInput() *f64
```

- *Type:* *f64

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-opc.provider.OpcProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `StorageEndpointInput`<sup>Optional</sup> <a name="StorageEndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput"></a>

```go
func StorageEndpointInput() *string
```

- *Type:* *string

---

##### `StorageServiceIdInput`<sup>Optional</sup> <a name="StorageServiceIdInput" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput"></a>

```go
func StorageServiceIdInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-opc.provider.OpcProvider.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `IdentityDomain`<sup>Optional</sup> <a name="IdentityDomain" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomain"></a>

```go
func IdentityDomain() *string
```

- *Type:* *string

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-opc.provider.OpcProvider.property.insecure"></a>

```go
func Insecure() interface{}
```

- *Type:* interface{}

---

##### `LbaasEndpoint`<sup>Optional</sup> <a name="LbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint"></a>

```go
func LbaasEndpoint() *string
```

- *Type:* *string

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetries"></a>

```go
func MaxRetries() *f64
```

- *Type:* *f64

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-opc.provider.OpcProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint"></a>

```go
func StorageEndpoint() *string
```

- *Type:* *string

---

##### `StorageServiceId`<sup>Optional</sup> <a name="StorageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId"></a>

```go
func StorageServiceId() *string
```

- *Type:* *string

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-opc.provider.OpcProvider.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OpcProviderConfig <a name="OpcProviderConfig" id="@cdktf/provider-opc.provider.OpcProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.provider.OpcProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/provider"

&provider.OpcProviderConfig {
	IdentityDomain: *string,
	Password: *string,
	User: *string,
	Alias: *string,
	Endpoint: *string,
	Insecure: interface{},
	LbaasEndpoint: *string,
	MaxRetries: *f64,
	StorageEndpoint: *string,
	StorageServiceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain">IdentityDomain</a></code> | <code>*string</code> | The OPC identity domain for API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.password">Password</a></code> | <code>*string</code> | The user password for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.user">User</a></code> | <code>*string</code> | The user name for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint">Endpoint</a></code> | <code>*string</code> | The HTTP endpoint for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure">Insecure</a></code> | <code>interface{}</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint">LbaasEndpoint</a></code> | <code>*string</code> | The HTTP endpoint for the Load Balancer Classic service. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries">MaxRetries</a></code> | <code>*f64</code> | Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1). |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint">StorageEndpoint</a></code> | <code>*string</code> | The HTTP endpoint for Oracle Storage operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId">StorageServiceId</a></code> | <code>*string</code> | The Storage Service ID. |

---

##### `IdentityDomain`<sup>Required</sup> <a name="IdentityDomain" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain"></a>

```go
IdentityDomain *string
```

- *Type:* *string

The OPC identity domain for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#identity_domain OpcProvider#identity_domain}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

The user password for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#password OpcProvider#password}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

The user name for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#user OpcProvider#user}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#alias OpcProvider#alias}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The HTTP endpoint for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#endpoint OpcProvider#endpoint}

---

##### `Insecure`<sup>Optional</sup> <a name="Insecure" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure"></a>

```go
Insecure interface{}
```

- *Type:* interface{}

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#insecure OpcProvider#insecure}

---

##### `LbaasEndpoint`<sup>Optional</sup> <a name="LbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint"></a>

```go
LbaasEndpoint *string
```

- *Type:* *string

The HTTP endpoint for the Load Balancer Classic service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#lbaas_endpoint OpcProvider#lbaas_endpoint}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries"></a>

```go
MaxRetries *f64
```

- *Type:* *f64

Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#max_retries OpcProvider#max_retries}

---

##### `StorageEndpoint`<sup>Optional</sup> <a name="StorageEndpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint"></a>

```go
StorageEndpoint *string
```

- *Type:* *string

The HTTP endpoint for Oracle Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_endpoint OpcProvider#storage_endpoint}

---

##### `StorageServiceId`<sup>Optional</sup> <a name="StorageServiceId" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId"></a>

```go
StorageServiceId *string
```

- *Type:* *string

The Storage Service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_service_id OpcProvider#storage_service_id}

---



