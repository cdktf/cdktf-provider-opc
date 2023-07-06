# `opc_lbaas_load_balancer`

Refer to the Terraform Registory for docs: [`opc_lbaas_load_balancer`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer).

# `lbaasLoadBalancer` Submodule <a name="`lbaasLoadBalancer` Submodule" id="@cdktf/provider-opc.lbaasLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasLoadBalancer <a name="LbaasLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer opc_lbaas_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/lbaasloadbalancer"

lbaasloadbalancer.NewLbaasLoadBalancer(scope Construct, id *string, config LbaasLoadBalancerConfig) LbaasLoadBalancer
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig">LbaasLoadBalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetId"></a>

```go
func ResetId()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetIpNetwork"></a>

```go
func ResetIpNetwork()
```

##### `ResetParentLoadBalancer` <a name="ResetParentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetParentLoadBalancer"></a>

```go
func ResetParentLoadBalancer()
```

##### `ResetPermittedClients` <a name="ResetPermittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedClients"></a>

```go
func ResetPermittedClients()
```

##### `ResetPermittedMethods` <a name="ResetPermittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedMethods"></a>

```go
func ResetPermittedMethods()
```

##### `ResetPolicies` <a name="ResetPolicies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPolicies"></a>

```go
func ResetPolicies()
```

##### `ResetServerPool` <a name="ResetServerPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetServerPool"></a>

```go
func ResetServerPool()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/lbaasloadbalancer"

lbaasloadbalancer.LbaasLoadBalancer_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/lbaasloadbalancer"

lbaasloadbalancer.LbaasLoadBalancer_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/lbaasloadbalancer"

lbaasloadbalancer.LbaasLoadBalancer_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips">BalancerVips</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName">CanonicalHostName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable">CloudgateCapable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput">IpNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput">ParentLoadBalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput">PermittedClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput">PermittedMethodsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput">PoliciesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput">SchemeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput">ServerPoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer">ParentLoadBalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients">PermittedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods">PermittedMethods</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme">Scheme</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool">ServerPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BalancerVips`<sup>Required</sup> <a name="BalancerVips" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips"></a>

```go
func BalancerVips() *[]*string
```

- *Type:* *[]*string

---

##### `CanonicalHostName`<sup>Required</sup> <a name="CanonicalHostName" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName"></a>

```go
func CanonicalHostName() *string
```

- *Type:* *string

---

##### `CloudgateCapable`<sup>Required</sup> <a name="CloudgateCapable" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable"></a>

```go
func CloudgateCapable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput"></a>

```go
func IpNetworkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentLoadBalancerInput`<sup>Optional</sup> <a name="ParentLoadBalancerInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput"></a>

```go
func ParentLoadBalancerInput() *string
```

- *Type:* *string

---

##### `PermittedClientsInput`<sup>Optional</sup> <a name="PermittedClientsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput"></a>

```go
func PermittedClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedMethodsInput`<sup>Optional</sup> <a name="PermittedMethodsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput"></a>

```go
func PermittedMethodsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput"></a>

```go
func PoliciesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput"></a>

```go
func SchemeInput() *string
```

- *Type:* *string

---

##### `ServerPoolInput`<sup>Optional</sup> <a name="ServerPoolInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput"></a>

```go
func ServerPoolInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork"></a>

```go
func IpNetwork() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentLoadBalancer`<sup>Required</sup> <a name="ParentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer"></a>

```go
func ParentLoadBalancer() *string
```

- *Type:* *string

---

##### `PermittedClients`<sup>Required</sup> <a name="PermittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients"></a>

```go
func PermittedClients() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedMethods`<sup>Required</sup> <a name="PermittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods"></a>

```go
func PermittedMethods() *[]*string
```

- *Type:* *[]*string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme"></a>

```go
func Scheme() *string
```

- *Type:* *string

---

##### `ServerPool`<sup>Required</sup> <a name="ServerPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool"></a>

```go
func ServerPool() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasLoadBalancerConfig <a name="LbaasLoadBalancerConfig" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/lbaasloadbalancer"

&lbaasloadbalancer.LbaasLoadBalancerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Region: *string,
	Scheme: *string,
	Description: *string,
	Enabled: interface{},
	Id: *string,
	IpNetwork: *string,
	ParentLoadBalancer: *string,
	PermittedClients: *[]*string,
	PermittedMethods: *[]*string,
	Policies: *[]*string,
	ServerPool: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme">Scheme</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer">ParentLoadBalancer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients">PermittedClients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods">PermittedMethods</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies">Policies</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool">ServerPool</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}.

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}.

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme"></a>

```go
Scheme *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork"></a>

```go
IpNetwork *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}.

---

##### `ParentLoadBalancer`<sup>Optional</sup> <a name="ParentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer"></a>

```go
ParentLoadBalancer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}.

---

##### `PermittedClients`<sup>Optional</sup> <a name="PermittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients"></a>

```go
PermittedClients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}.

---

##### `PermittedMethods`<sup>Optional</sup> <a name="PermittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods"></a>

```go
PermittedMethods *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}.

---

##### `Policies`<sup>Optional</sup> <a name="Policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies"></a>

```go
Policies *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}.

---

##### `ServerPool`<sup>Optional</sup> <a name="ServerPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool"></a>

```go
ServerPool *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}.

---



