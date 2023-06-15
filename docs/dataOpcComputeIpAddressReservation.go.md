# `data_opc_compute_ip_address_reservation`

Refer to the Terraform Registory for docs: [`data_opc_compute_ip_address_reservation`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_ip_address_reservation).

# `dataOpcComputeIpAddressReservation` Submodule <a name="`dataOpcComputeIpAddressReservation` Submodule" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeIpAddressReservation <a name="DataOpcComputeIpAddressReservation" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_ip_address_reservation opc_compute_ip_address_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v5/dataopccomputeipaddressreservation"

dataopccomputeipaddressreservation.NewDataOpcComputeIpAddressReservation(scope Construct, id *string, config DataOpcComputeIpAddressReservationConfig) DataOpcComputeIpAddressReservation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig">DataOpcComputeIpAddressReservationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig">DataOpcComputeIpAddressReservationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v5/dataopccomputeipaddressreservation"

dataopccomputeipaddressreservation.DataOpcComputeIpAddressReservation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v5/dataopccomputeipaddressreservation"

dataopccomputeipaddressreservation.DataOpcComputeIpAddressReservation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v5/dataopccomputeipaddressreservation"

dataopccomputeipaddressreservation.DataOpcComputeIpAddressReservation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.ipAddressPool">IpAddressPool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpAddressPool`<sup>Required</sup> <a name="IpAddressPool" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.ipAddressPool"></a>

```go
func IpAddressPool() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeIpAddressReservationConfig <a name="DataOpcComputeIpAddressReservationConfig" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v5/dataopccomputeipaddressreservation"

&dataopccomputeipaddressreservation.DataOpcComputeIpAddressReservationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_ip_address_reservation#name DataOpcComputeIpAddressReservation#name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_ip_address_reservation#id DataOpcComputeIpAddressReservation#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_ip_address_reservation#name DataOpcComputeIpAddressReservation#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.dataOpcComputeIpAddressReservation.DataOpcComputeIpAddressReservationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_ip_address_reservation#id DataOpcComputeIpAddressReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



