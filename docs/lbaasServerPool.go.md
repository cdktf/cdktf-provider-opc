# `opc_lbaas_server_pool`

Refer to the Terraform Registory for docs: [`opc_lbaas_server_pool`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool).

# `lbaasServerPool` Submodule <a name="`lbaasServerPool` Submodule" id="@cdktf/provider-opc.lbaasServerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasServerPool <a name="LbaasServerPool" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool opc_lbaas_server_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaasserverpool"

lbaasserverpool.NewLbaasServerPool(scope Construct, id *string, config LbaasServerPoolConfig) LbaasServerPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig">LbaasServerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig">LbaasServerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck">PutHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetHealthCheck">ResetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetVnicSet">ResetVnicSet</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutHealthCheck` <a name="PutHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck"></a>

```go
func PutHealthCheck(value LbaasServerPoolHealthCheck)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHealthCheck` <a name="ResetHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetHealthCheck"></a>

```go
func ResetHealthCheck()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetTags"></a>

```go
func ResetTags()
```

##### `ResetVnicSet` <a name="ResetVnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetVnicSet"></a>

```go
func ResetVnicSet()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaasserverpool"

lbaasserverpool.LbaasServerPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaasserverpool"

lbaasserverpool.LbaasServerPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaasserverpool"

lbaasserverpool.LbaasServerPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.consumers">Consumers</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference">LbaasServerPoolHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.operationDetails">OperationDetails</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.status">Status</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheckInput">HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.serversInput">ServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSetInput">VnicSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancer">LoadBalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.servers">Servers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSet">VnicSet</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Consumers`<sup>Required</sup> <a name="Consumers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.consumers"></a>

```go
func Consumers() *string
```

- *Type:* *string

---

##### `HealthCheck`<sup>Required</sup> <a name="HealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheck"></a>

```go
func HealthCheck() LbaasServerPoolHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference">LbaasServerPoolHealthCheckOutputReference</a>

---

##### `OperationDetails`<sup>Required</sup> <a name="OperationDetails" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.operationDetails"></a>

```go
func OperationDetails() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.status"></a>

```go
func Status() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HealthCheckInput`<sup>Optional</sup> <a name="HealthCheckInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheckInput"></a>

```go
func HealthCheckInput() LbaasServerPoolHealthCheck
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ServersInput`<sup>Optional</sup> <a name="ServersInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.serversInput"></a>

```go
func ServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `VnicSetInput`<sup>Optional</sup> <a name="VnicSetInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSetInput"></a>

```go
func VnicSetInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancer"></a>

```go
func LoadBalancer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.servers"></a>

```go
func Servers() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `VnicSet`<sup>Required</sup> <a name="VnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSet"></a>

```go
func VnicSet() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasServerPoolConfig <a name="LbaasServerPoolConfig" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaasserverpool"

&lbaasserverpool.LbaasServerPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LoadBalancer: *string,
	Name: *string,
	Servers: *[]*string,
	Enabled: interface{},
	HealthCheck: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasServerPool.LbaasServerPoolHealthCheck,
	Id: *string,
	Tags: *[]*string,
	VnicSet: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.loadBalancer">LoadBalancer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#name LbaasServerPool#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.servers">Servers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#servers LbaasServerPool#servers}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.healthCheck">HealthCheck</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#id LbaasServerPool#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#tags LbaasServerPool#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.vnicSet">VnicSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.loadBalancer"></a>

```go
LoadBalancer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#name LbaasServerPool#name}.

---

##### `Servers`<sup>Required</sup> <a name="Servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.servers"></a>

```go
Servers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#servers LbaasServerPool#servers}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `HealthCheck`<sup>Optional</sup> <a name="HealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.healthCheck"></a>

```go
HealthCheck LbaasServerPoolHealthCheck
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#health_check LbaasServerPool#health_check}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#id LbaasServerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#tags LbaasServerPool#tags}.

---

##### `VnicSet`<sup>Optional</sup> <a name="VnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.vnicSet"></a>

```go
VnicSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}.

---

### LbaasServerPoolHealthCheck <a name="LbaasServerPoolHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaasserverpool"

&lbaasserverpool.LbaasServerPoolHealthCheck {
	AcceptedReturnCodes: *[]*string,
	Enabled: interface{},
	HealthyThreshold: *f64,
	Interval: *f64,
	Path: *string,
	Timeout: *f64,
	Type: *string,
	UnhealthyThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.acceptedReturnCodes">AcceptedReturnCodes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.interval">Interval</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#interval LbaasServerPool#interval}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#path LbaasServerPool#path}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.timeout">Timeout</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#timeout LbaasServerPool#timeout}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#type LbaasServerPool#type}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}. |

---

##### `AcceptedReturnCodes`<sup>Optional</sup> <a name="AcceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.acceptedReturnCodes"></a>

```go
AcceptedReturnCodes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `HealthyThreshold`<sup>Optional</sup> <a name="HealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.healthyThreshold"></a>

```go
HealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}.

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.interval"></a>

```go
Interval *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#interval LbaasServerPool#interval}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#path LbaasServerPool#path}.

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.timeout"></a>

```go
Timeout *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#timeout LbaasServerPool#timeout}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#type LbaasServerPool#type}.

---

##### `UnhealthyThreshold`<sup>Optional</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.unhealthyThreshold"></a>

```go
UnhealthyThreshold *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasServerPoolHealthCheckOutputReference <a name="LbaasServerPoolHealthCheckOutputReference" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaasserverpool"

lbaasserverpool.NewLbaasServerPoolHealthCheckOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasServerPoolHealthCheckOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetAcceptedReturnCodes">ResetAcceptedReturnCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetHealthyThreshold">ResetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetUnhealthyThreshold">ResetUnhealthyThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAcceptedReturnCodes` <a name="ResetAcceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetAcceptedReturnCodes"></a>

```go
func ResetAcceptedReturnCodes()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetHealthyThreshold` <a name="ResetHealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetHealthyThreshold"></a>

```go
func ResetHealthyThreshold()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetInterval"></a>

```go
func ResetInterval()
```

##### `ResetPath` <a name="ResetPath" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetTimeout"></a>

```go
func ResetTimeout()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetType"></a>

```go
func ResetType()
```

##### `ResetUnhealthyThreshold` <a name="ResetUnhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```go
func ResetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodesInput">AcceptedReturnCodesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThresholdInput">HealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.intervalInput">IntervalInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThresholdInput">UnhealthyThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodes">AcceptedReturnCodes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThreshold">HealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.interval">Interval</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeout">Timeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThreshold">UnhealthyThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AcceptedReturnCodesInput`<sup>Optional</sup> <a name="AcceptedReturnCodesInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodesInput"></a>

```go
func AcceptedReturnCodesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `HealthyThresholdInput`<sup>Optional</sup> <a name="HealthyThresholdInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThresholdInput"></a>

```go
func HealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.intervalInput"></a>

```go
func IntervalInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeoutInput"></a>

```go
func TimeoutInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `UnhealthyThresholdInput`<sup>Optional</sup> <a name="UnhealthyThresholdInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```go
func UnhealthyThresholdInput() *f64
```

- *Type:* *f64

---

##### `AcceptedReturnCodes`<sup>Required</sup> <a name="AcceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodes"></a>

```go
func AcceptedReturnCodes() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `HealthyThreshold`<sup>Required</sup> <a name="HealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThreshold"></a>

```go
func HealthyThreshold() *f64
```

- *Type:* *f64

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.interval"></a>

```go
func Interval() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeout"></a>

```go
func Timeout() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UnhealthyThreshold`<sup>Required</sup> <a name="UnhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThreshold"></a>

```go
func UnhealthyThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasServerPoolHealthCheck
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---



