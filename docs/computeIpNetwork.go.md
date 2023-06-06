# `opc_compute_ip_network`

Refer to the Terraform Registory for docs: [`opc_compute_ip_network`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network).

# `computeIpNetwork` Submodule <a name="`computeIpNetwork` Submodule" id="@cdktf/provider-opc.computeIpNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeIpNetwork <a name="ComputeIpNetwork" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network opc_compute_ip_network}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computeipnetwork"

computeipnetwork.NewComputeIpNetwork(scope Construct, id *string, config ComputeIpNetworkConfig) ComputeIpNetwork
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig">ComputeIpNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig">ComputeIpNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetIpNetworkExchange">ResetIpNetworkExchange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetPublicNaptEnabled">ResetPublicNaptEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetId"></a>

```go
func ResetId()
```

##### `ResetIpNetworkExchange` <a name="ResetIpNetworkExchange" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetIpNetworkExchange"></a>

```go
func ResetIpNetworkExchange()
```

##### `ResetPublicNaptEnabled` <a name="ResetPublicNaptEnabled" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetPublicNaptEnabled"></a>

```go
func ResetPublicNaptEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computeipnetwork"

computeipnetwork.ComputeIpNetwork_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computeipnetwork"

computeipnetwork.ComputeIpNetwork_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computeipnetwork"

computeipnetwork.ComputeIpNetwork_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipAddressPrefixInput">IpAddressPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipNetworkExchangeInput">IpNetworkExchangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.publicNaptEnabledInput">PublicNaptEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipAddressPrefix">IpAddressPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipNetworkExchange">IpNetworkExchange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.publicNaptEnabled">PublicNaptEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpAddressPrefixInput`<sup>Optional</sup> <a name="IpAddressPrefixInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipAddressPrefixInput"></a>

```go
func IpAddressPrefixInput() *string
```

- *Type:* *string

---

##### `IpNetworkExchangeInput`<sup>Optional</sup> <a name="IpNetworkExchangeInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipNetworkExchangeInput"></a>

```go
func IpNetworkExchangeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PublicNaptEnabledInput`<sup>Optional</sup> <a name="PublicNaptEnabledInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.publicNaptEnabledInput"></a>

```go
func PublicNaptEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddressPrefix`<sup>Required</sup> <a name="IpAddressPrefix" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipAddressPrefix"></a>

```go
func IpAddressPrefix() *string
```

- *Type:* *string

---

##### `IpNetworkExchange`<sup>Required</sup> <a name="IpNetworkExchange" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.ipNetworkExchange"></a>

```go
func IpNetworkExchange() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PublicNaptEnabled`<sup>Required</sup> <a name="PublicNaptEnabled" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.publicNaptEnabled"></a>

```go
func PublicNaptEnabled() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetwork.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeIpNetworkConfig <a name="ComputeIpNetworkConfig" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computeipnetwork"

&computeipnetwork.ComputeIpNetworkConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IpAddressPrefix: *string,
	Name: *string,
	Description: *string,
	Id: *string,
	IpNetworkExchange: *string,
	PublicNaptEnabled: interface{},
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.ipAddressPrefix">IpAddressPrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#ip_address_prefix ComputeIpNetwork#ip_address_prefix}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#name ComputeIpNetwork#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#description ComputeIpNetwork#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#id ComputeIpNetwork#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.ipNetworkExchange">IpNetworkExchange</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#ip_network_exchange ComputeIpNetwork#ip_network_exchange}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.publicNaptEnabled">PublicNaptEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#public_napt_enabled ComputeIpNetwork#public_napt_enabled}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#tags ComputeIpNetwork#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IpAddressPrefix`<sup>Required</sup> <a name="IpAddressPrefix" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.ipAddressPrefix"></a>

```go
IpAddressPrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#ip_address_prefix ComputeIpNetwork#ip_address_prefix}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#name ComputeIpNetwork#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#description ComputeIpNetwork#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#id ComputeIpNetwork#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpNetworkExchange`<sup>Optional</sup> <a name="IpNetworkExchange" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.ipNetworkExchange"></a>

```go
IpNetworkExchange *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#ip_network_exchange ComputeIpNetwork#ip_network_exchange}.

---

##### `PublicNaptEnabled`<sup>Optional</sup> <a name="PublicNaptEnabled" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.publicNaptEnabled"></a>

```go
PublicNaptEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#public_napt_enabled ComputeIpNetwork#public_napt_enabled}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeIpNetwork.ComputeIpNetworkConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network#tags ComputeIpNetwork#tags}.

---



