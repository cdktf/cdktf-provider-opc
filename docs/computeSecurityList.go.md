# `computeSecurityList` Submodule <a name="`computeSecurityList` Submodule" id="@cdktf/provider-opc.computeSecurityList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityList <a name="ComputeSecurityList" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list opc_compute_security_list}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecuritylist"

computesecuritylist.NewComputeSecurityList(scope Construct, id *string, config ComputeSecurityListConfig) ComputeSecurityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig">ComputeSecurityListConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig">ComputeSecurityListConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetOutboundCidrPolicy">ResetOutboundCidrPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetPolicy">ResetPolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetId"></a>

```go
func ResetId()
```

##### `ResetOutboundCidrPolicy` <a name="ResetOutboundCidrPolicy" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetOutboundCidrPolicy"></a>

```go
func ResetOutboundCidrPolicy()
```

##### `ResetPolicy` <a name="ResetPolicy" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.resetPolicy"></a>

```go
func ResetPolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSecurityList resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecuritylist"

computesecuritylist.ComputeSecurityList_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecuritylist"

computesecuritylist.ComputeSecurityList_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecuritylist"

computesecuritylist.ComputeSecurityList_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecuritylist"

computesecuritylist.ComputeSecurityList_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeSecurityList resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeSecurityList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeSecurityList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecurityList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.outboundCidrPolicyInput">OutboundCidrPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.policyInput">PolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.outboundCidrPolicy">OutboundCidrPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutboundCidrPolicyInput`<sup>Optional</sup> <a name="OutboundCidrPolicyInput" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.outboundCidrPolicyInput"></a>

```go
func OutboundCidrPolicyInput() *string
```

- *Type:* *string

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.policyInput"></a>

```go
func PolicyInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutboundCidrPolicy`<sup>Required</sup> <a name="OutboundCidrPolicy" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.outboundCidrPolicy"></a>

```go
func OutboundCidrPolicy() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityList.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityListConfig <a name="ComputeSecurityListConfig" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecuritylist"

&computesecuritylist.ComputeSecurityListConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	OutboundCidrPolicy: *string,
	Policy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#name ComputeSecurityList#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#description ComputeSecurityList#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#id ComputeSecurityList#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.outboundCidrPolicy">OutboundCidrPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#outbound_cidr_policy ComputeSecurityList#outbound_cidr_policy}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.policy">Policy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#policy ComputeSecurityList#policy}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#name ComputeSecurityList#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#description ComputeSecurityList#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#id ComputeSecurityList#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OutboundCidrPolicy`<sup>Optional</sup> <a name="OutboundCidrPolicy" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.outboundCidrPolicy"></a>

```go
OutboundCidrPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#outbound_cidr_policy ComputeSecurityList#outbound_cidr_policy}.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="@cdktf/provider-opc.computeSecurityList.ComputeSecurityListConfig.property.policy"></a>

```go
Policy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_list#policy ComputeSecurityList#policy}.

---



