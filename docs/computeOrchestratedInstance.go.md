# `computeOrchestratedInstance` Submodule <a name="`computeOrchestratedInstance` Submodule" id="@cdktf/provider-opc.computeOrchestratedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrchestratedInstance <a name="ComputeOrchestratedInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance opc_compute_orchestrated_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.NewComputeOrchestratedInstance(scope Construct, id *string, config ComputeOrchestratedInstanceConfig) ComputeOrchestratedInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig">ComputeOrchestratedInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig">ComputeOrchestratedInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance">PutInstance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutInstance` <a name="PutInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance"></a>

```go
func PutInstance(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts"></a>

```go
func PutTimeouts(value ComputeOrchestratedInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeOrchestratedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.ComputeOrchestratedInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.ComputeOrchestratedInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.ComputeOrchestratedInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.ComputeOrchestratedInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeOrchestratedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeOrchestratedInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeOrchestratedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeOrchestratedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instance">Instance</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList">ComputeOrchestratedInstanceInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference">ComputeOrchestratedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instanceInput">InstanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instance"></a>

```go
func Instance() ComputeOrchestratedInstanceInstanceList
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList">ComputeOrchestratedInstanceInstanceList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeouts"></a>

```go
func Timeouts() ComputeOrchestratedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference">ComputeOrchestratedInstanceTimeoutsOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instanceInput"></a>

```go
func InstanceInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrchestratedInstanceConfig <a name="ComputeOrchestratedInstanceConfig" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

&computeorchestratedinstance.ComputeOrchestratedInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DesiredState: *string,
	Instance: interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opc-go/opc/v7.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.desiredState">DesiredState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.instance">Instance</a></code> | <code>interface{}</code> | instance block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}.

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.instance"></a>

```go
Instance interface{}
```

- *Type:* interface{}

instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance ComputeOrchestratedInstance#instance}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.timeouts"></a>

```go
Timeouts ComputeOrchestratedInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#timeouts ComputeOrchestratedInstance#timeouts}

---

### ComputeOrchestratedInstanceInstance <a name="ComputeOrchestratedInstanceInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

&computeorchestratedinstance.ComputeOrchestratedInstanceInstance {
	Name: *string,
	Shape: *string,
	BootOrder: *[]*f64,
	Hostname: *string,
	ImageList: *string,
	InstanceAttributes: *string,
	Label: *string,
	NetworkingInfo: interface{},
	Persistent: interface{},
	ReverseDns: interface{},
	SshKeys: *[]*string,
	Storage: interface{},
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shape ComputeOrchestratedInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.bootOrder">BootOrder</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#boot_order ComputeOrchestratedInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#hostname ComputeOrchestratedInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.imageList">ImageList</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#image_list ComputeOrchestratedInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.instanceAttributes">InstanceAttributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance_attributes ComputeOrchestratedInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#label ComputeOrchestratedInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.networkingInfo">NetworkingInfo</a></code> | <code>interface{}</code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.persistent">Persistent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#persistent ComputeOrchestratedInstance#persistent}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.reverseDns">ReverseDns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#reverse_dns ComputeOrchestratedInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ssh_keys ComputeOrchestratedInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.storage">Storage</a></code> | <code>interface{}</code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shape ComputeOrchestratedInstance#shape}.

---

##### `BootOrder`<sup>Optional</sup> <a name="BootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.bootOrder"></a>

```go
BootOrder *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#boot_order ComputeOrchestratedInstance#boot_order}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#hostname ComputeOrchestratedInstance#hostname}.

---

##### `ImageList`<sup>Optional</sup> <a name="ImageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.imageList"></a>

```go
ImageList *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#image_list ComputeOrchestratedInstance#image_list}.

---

##### `InstanceAttributes`<sup>Optional</sup> <a name="InstanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.instanceAttributes"></a>

```go
InstanceAttributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance_attributes ComputeOrchestratedInstance#instance_attributes}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#label ComputeOrchestratedInstance#label}.

---

##### `NetworkingInfo`<sup>Optional</sup> <a name="NetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.networkingInfo"></a>

```go
NetworkingInfo interface{}
```

- *Type:* interface{}

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#networking_info ComputeOrchestratedInstance#networking_info}

---

##### `Persistent`<sup>Optional</sup> <a name="Persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.persistent"></a>

```go
Persistent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#persistent ComputeOrchestratedInstance#persistent}.

---

##### `ReverseDns`<sup>Optional</sup> <a name="ReverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.reverseDns"></a>

```go
ReverseDns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#reverse_dns ComputeOrchestratedInstance#reverse_dns}.

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ssh_keys ComputeOrchestratedInstance#ssh_keys}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.storage"></a>

```go
Storage interface{}
```

- *Type:* interface{}

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#storage ComputeOrchestratedInstance#storage}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

### ComputeOrchestratedInstanceInstanceNetworkingInfo <a name="ComputeOrchestratedInstanceInstanceNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

&computeorchestratedinstance.ComputeOrchestratedInstanceInstanceNetworkingInfo {
	Index: *f64,
	Dns: *[]*string,
	IpAddress: *string,
	IpNetwork: *string,
	IsDefaultGateway: interface{},
	MacAddress: *string,
	NameServers: *[]*string,
	Nat: *[]*string,
	SearchDomains: *[]*string,
	SecLists: *[]*string,
	SharedNetwork: interface{},
	Vnic: *string,
	VnicSets: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.index">Index</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.dns">Dns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#dns ComputeOrchestratedInstance#dns}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_address ComputeOrchestratedInstance#ip_address}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_network ComputeOrchestratedInstance#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.isDefaultGateway">IsDefaultGateway</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#is_default_gateway ComputeOrchestratedInstance#is_default_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.macAddress">MacAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#mac_address ComputeOrchestratedInstance#mac_address}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name_servers ComputeOrchestratedInstance#name_servers}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nat">Nat</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#nat ComputeOrchestratedInstance#nat}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.searchDomains">SearchDomains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#search_domains ComputeOrchestratedInstance#search_domains}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.secLists">SecLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#sec_lists ComputeOrchestratedInstance#sec_lists}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.sharedNetwork">SharedNetwork</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shared_network ComputeOrchestratedInstance#shared_network}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnic">Vnic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic ComputeOrchestratedInstance#vnic}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnicSets">VnicSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic_sets ComputeOrchestratedInstance#vnic_sets}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.index"></a>

```go
Index *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.dns"></a>

```go
Dns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#dns ComputeOrchestratedInstance#dns}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_address ComputeOrchestratedInstance#ip_address}.

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipNetwork"></a>

```go
IpNetwork *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_network ComputeOrchestratedInstance#ip_network}.

---

##### `IsDefaultGateway`<sup>Optional</sup> <a name="IsDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.isDefaultGateway"></a>

```go
IsDefaultGateway interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#is_default_gateway ComputeOrchestratedInstance#is_default_gateway}.

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.macAddress"></a>

```go
MacAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#mac_address ComputeOrchestratedInstance#mac_address}.

---

##### `NameServers`<sup>Optional</sup> <a name="NameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nameServers"></a>

```go
NameServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name_servers ComputeOrchestratedInstance#name_servers}.

---

##### `Nat`<sup>Optional</sup> <a name="Nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nat"></a>

```go
Nat *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#nat ComputeOrchestratedInstance#nat}.

---

##### `SearchDomains`<sup>Optional</sup> <a name="SearchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.searchDomains"></a>

```go
SearchDomains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#search_domains ComputeOrchestratedInstance#search_domains}.

---

##### `SecLists`<sup>Optional</sup> <a name="SecLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.secLists"></a>

```go
SecLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#sec_lists ComputeOrchestratedInstance#sec_lists}.

---

##### `SharedNetwork`<sup>Optional</sup> <a name="SharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.sharedNetwork"></a>

```go
SharedNetwork interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shared_network ComputeOrchestratedInstance#shared_network}.

---

##### `Vnic`<sup>Optional</sup> <a name="Vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnic"></a>

```go
Vnic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic ComputeOrchestratedInstance#vnic}.

---

##### `VnicSets`<sup>Optional</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnicSets"></a>

```go
VnicSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic_sets ComputeOrchestratedInstance#vnic_sets}.

---

### ComputeOrchestratedInstanceInstanceStorage <a name="ComputeOrchestratedInstanceInstanceStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

&computeorchestratedinstance.ComputeOrchestratedInstanceInstanceStorage {
	Index: *f64,
	Volume: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.index">Index</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.volume">Volume</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#volume ComputeOrchestratedInstance#volume}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.index"></a>

```go
Index *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.volume"></a>

```go
Volume *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#volume ComputeOrchestratedInstance#volume}.

---

### ComputeOrchestratedInstanceTimeouts <a name="ComputeOrchestratedInstanceTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

&computeorchestratedinstance.ComputeOrchestratedInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrchestratedInstanceInstanceList <a name="ComputeOrchestratedInstanceInstanceList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.NewComputeOrchestratedInstanceInstanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrchestratedInstanceInstanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get"></a>

```go
func Get(index *f64) ComputeOrchestratedInstanceInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrchestratedInstanceInstanceNetworkingInfoList <a name="ComputeOrchestratedInstanceInstanceNetworkingInfoList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.NewComputeOrchestratedInstanceInstanceNetworkingInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrchestratedInstanceInstanceNetworkingInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get"></a>

```go
func Get(index *f64) ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference <a name="ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.NewComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpNetwork">ResetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIsDefaultGateway">ResetIsDefaultGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNameServers">ResetNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNat">ResetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSearchDomains">ResetSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSecLists">ResetSecLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSharedNetwork">ResetSharedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnic">ResetVnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnicSets">ResetVnicSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDns` <a name="ResetDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetDns"></a>

```go
func ResetDns()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpNetwork"></a>

```go
func ResetIpNetwork()
```

##### `ResetIsDefaultGateway` <a name="ResetIsDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIsDefaultGateway"></a>

```go
func ResetIsDefaultGateway()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetMacAddress"></a>

```go
func ResetMacAddress()
```

##### `ResetNameServers` <a name="ResetNameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNameServers"></a>

```go
func ResetNameServers()
```

##### `ResetNat` <a name="ResetNat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNat"></a>

```go
func ResetNat()
```

##### `ResetSearchDomains` <a name="ResetSearchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSearchDomains"></a>

```go
func ResetSearchDomains()
```

##### `ResetSecLists` <a name="ResetSecLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSecLists"></a>

```go
func ResetSecLists()
```

##### `ResetSharedNetwork` <a name="ResetSharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSharedNetwork"></a>

```go
func ResetSharedNetwork()
```

##### `ResetVnic` <a name="ResetVnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnic"></a>

```go
func ResetVnic()
```

##### `ResetVnicSets` <a name="ResetVnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnicSets"></a>

```go
func ResetVnicSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dnsInput">DnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.indexInput">IndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetworkInput">IpNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput">IsDefaultGatewayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddressInput">MacAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServersInput">NameServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.natInput">NatInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomainsInput">SearchDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secListsInput">SecListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetworkInput">SharedNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicInput">VnicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSetsInput">VnicSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dns">Dns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.index">Index</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGateway">IsDefaultGateway</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nat">Nat</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomains">SearchDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secLists">SecLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetwork">SharedNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnic">Vnic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSets">VnicSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dnsInput"></a>

```go
func DnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.indexInput"></a>

```go
func IndexInput() *f64
```

- *Type:* *f64

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetworkInput"></a>

```go
func IpNetworkInput() *string
```

- *Type:* *string

---

##### `IsDefaultGatewayInput`<sup>Optional</sup> <a name="IsDefaultGatewayInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput"></a>

```go
func IsDefaultGatewayInput() interface{}
```

- *Type:* interface{}

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddressInput"></a>

```go
func MacAddressInput() *string
```

- *Type:* *string

---

##### `NameServersInput`<sup>Optional</sup> <a name="NameServersInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServersInput"></a>

```go
func NameServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NatInput`<sup>Optional</sup> <a name="NatInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.natInput"></a>

```go
func NatInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchDomainsInput`<sup>Optional</sup> <a name="SearchDomainsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomainsInput"></a>

```go
func SearchDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecListsInput`<sup>Optional</sup> <a name="SecListsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secListsInput"></a>

```go
func SecListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SharedNetworkInput`<sup>Optional</sup> <a name="SharedNetworkInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetworkInput"></a>

```go
func SharedNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `VnicInput`<sup>Optional</sup> <a name="VnicInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicInput"></a>

```go
func VnicInput() *string
```

- *Type:* *string

---

##### `VnicSetsInput`<sup>Optional</sup> <a name="VnicSetsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSetsInput"></a>

```go
func VnicSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dns"></a>

```go
func Dns() *[]*string
```

- *Type:* *[]*string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.index"></a>

```go
func Index() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetwork"></a>

```go
func IpNetwork() *string
```

- *Type:* *string

---

##### `IsDefaultGateway`<sup>Required</sup> <a name="IsDefaultGateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGateway"></a>

```go
func IsDefaultGateway() interface{}
```

- *Type:* interface{}

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServers"></a>

```go
func NameServers() *[]*string
```

- *Type:* *[]*string

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nat"></a>

```go
func Nat() *[]*string
```

- *Type:* *[]*string

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomains"></a>

```go
func SearchDomains() *[]*string
```

- *Type:* *[]*string

---

##### `SecLists`<sup>Required</sup> <a name="SecLists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secLists"></a>

```go
func SecLists() *[]*string
```

- *Type:* *[]*string

---

##### `SharedNetwork`<sup>Required</sup> <a name="SharedNetwork" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetwork"></a>

```go
func SharedNetwork() interface{}
```

- *Type:* interface{}

---

##### `Vnic`<sup>Required</sup> <a name="Vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnic"></a>

```go
func Vnic() *string
```

- *Type:* *string

---

##### `VnicSets`<sup>Required</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSets"></a>

```go
func VnicSets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrchestratedInstanceInstanceOutputReference <a name="ComputeOrchestratedInstanceInstanceOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.NewComputeOrchestratedInstanceInstanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrchestratedInstanceInstanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo">PutNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetBootOrder">ResetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetImageList">ResetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetInstanceAttributes">ResetInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetNetworkingInfo">ResetNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetPersistent">ResetPersistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetReverseDns">ResetReverseDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNetworkingInfo` <a name="PutNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo"></a>

```go
func PutNetworkingInfo(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage"></a>

```go
func PutStorage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBootOrder` <a name="ResetBootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetBootOrder"></a>

```go
func ResetBootOrder()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetImageList` <a name="ResetImageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetImageList"></a>

```go
func ResetImageList()
```

##### `ResetInstanceAttributes` <a name="ResetInstanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetInstanceAttributes"></a>

```go
func ResetInstanceAttributes()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetNetworkingInfo` <a name="ResetNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetNetworkingInfo"></a>

```go
func ResetNetworkingInfo()
```

##### `ResetPersistent` <a name="ResetPersistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetPersistent"></a>

```go
func ResetPersistent()
```

##### `ResetReverseDns` <a name="ResetReverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetReverseDns"></a>

```go
func ResetReverseDns()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.entry">Entry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageFormat">ImageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfo">NetworkingInfo</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList">ComputeOrchestratedInstanceInstanceNetworkingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.placementRequirements">PlacementRequirements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.quotaReservation">QuotaReservation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.relationships">Relationships</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.resolvers">Resolvers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.site">Site</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList">ComputeOrchestratedInstanceInstanceStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vcable">Vcable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.virtio">Virtio</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vncAddress">VncAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrderInput">BootOrderInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageListInput">ImageListInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributesInput">InstanceAttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfoInput">NetworkingInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistentInput">PersistentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDnsInput">ReverseDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storageInput">StorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrder">BootOrder</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageList">ImageList</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributes">InstanceAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistent">Persistent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDns">ReverseDns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.entry"></a>

```go
func Entry() *f64
```

- *Type:* *f64

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageFormat`<sup>Required</sup> <a name="ImageFormat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageFormat"></a>

```go
func ImageFormat() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `NetworkingInfo`<sup>Required</sup> <a name="NetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfo"></a>

```go
func NetworkingInfo() ComputeOrchestratedInstanceInstanceNetworkingInfoList
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList">ComputeOrchestratedInstanceInstanceNetworkingInfoList</a>

---

##### `PlacementRequirements`<sup>Required</sup> <a name="PlacementRequirements" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.placementRequirements"></a>

```go
func PlacementRequirements() *[]*string
```

- *Type:* *[]*string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `QuotaReservation`<sup>Required</sup> <a name="QuotaReservation" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.quotaReservation"></a>

```go
func QuotaReservation() *string
```

- *Type:* *string

---

##### `Relationships`<sup>Required</sup> <a name="Relationships" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.relationships"></a>

```go
func Relationships() *[]*string
```

- *Type:* *[]*string

---

##### `Resolvers`<sup>Required</sup> <a name="Resolvers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.resolvers"></a>

```go
func Resolvers() *[]*string
```

- *Type:* *[]*string

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.site"></a>

```go
func Site() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storage"></a>

```go
func Storage() ComputeOrchestratedInstanceInstanceStorageList
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList">ComputeOrchestratedInstanceInstanceStorageList</a>

---

##### `Vcable`<sup>Required</sup> <a name="Vcable" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vcable"></a>

```go
func Vcable() *string
```

- *Type:* *string

---

##### `Virtio`<sup>Required</sup> <a name="Virtio" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.virtio"></a>

```go
func Virtio() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VncAddress`<sup>Required</sup> <a name="VncAddress" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vncAddress"></a>

```go
func VncAddress() *string
```

- *Type:* *string

---

##### `BootOrderInput`<sup>Optional</sup> <a name="BootOrderInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrderInput"></a>

```go
func BootOrderInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `ImageListInput`<sup>Optional</sup> <a name="ImageListInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageListInput"></a>

```go
func ImageListInput() *string
```

- *Type:* *string

---

##### `InstanceAttributesInput`<sup>Optional</sup> <a name="InstanceAttributesInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributesInput"></a>

```go
func InstanceAttributesInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkingInfoInput`<sup>Optional</sup> <a name="NetworkingInfoInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfoInput"></a>

```go
func NetworkingInfoInput() interface{}
```

- *Type:* interface{}

---

##### `PersistentInput`<sup>Optional</sup> <a name="PersistentInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistentInput"></a>

```go
func PersistentInput() interface{}
```

- *Type:* interface{}

---

##### `ReverseDnsInput`<sup>Optional</sup> <a name="ReverseDnsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDnsInput"></a>

```go
func ReverseDnsInput() interface{}
```

- *Type:* interface{}

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storageInput"></a>

```go
func StorageInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrder"></a>

```go
func BootOrder() *[]*f64
```

- *Type:* *[]*f64

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `ImageList`<sup>Required</sup> <a name="ImageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageList"></a>

```go
func ImageList() *string
```

- *Type:* *string

---

##### `InstanceAttributes`<sup>Required</sup> <a name="InstanceAttributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributes"></a>

```go
func InstanceAttributes() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Persistent`<sup>Required</sup> <a name="Persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistent"></a>

```go
func Persistent() interface{}
```

- *Type:* interface{}

---

##### `ReverseDns`<sup>Required</sup> <a name="ReverseDns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDns"></a>

```go
func ReverseDns() interface{}
```

- *Type:* interface{}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrchestratedInstanceInstanceStorageList <a name="ComputeOrchestratedInstanceInstanceStorageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.NewComputeOrchestratedInstanceInstanceStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeOrchestratedInstanceInstanceStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get"></a>

```go
func Get(index *f64) ComputeOrchestratedInstanceInstanceStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrchestratedInstanceInstanceStorageOutputReference <a name="ComputeOrchestratedInstanceInstanceStorageOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.NewComputeOrchestratedInstanceInstanceStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeOrchestratedInstanceInstanceStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.indexInput">IndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volumeInput">VolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.index">Index</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volume">Volume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.indexInput"></a>

```go
func IndexInput() *f64
```

- *Type:* *f64

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volumeInput"></a>

```go
func VolumeInput() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.index"></a>

```go
func Index() *f64
```

- *Type:* *f64

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volume"></a>

```go
func Volume() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeOrchestratedInstanceTimeoutsOutputReference <a name="ComputeOrchestratedInstanceTimeoutsOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeorchestratedinstance"

computeorchestratedinstance.NewComputeOrchestratedInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeOrchestratedInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



