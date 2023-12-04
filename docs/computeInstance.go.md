# `computeInstance` Submodule <a name="`computeInstance` Submodule" id="@cdktf/provider-opc.computeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstance <a name="ComputeInstance" id="@cdktf/provider-opc.computeInstance.ComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance opc_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.NewComputeInstance(scope Construct, id *string, config ComputeInstanceConfig) ComputeInstance
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig">ComputeInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig">ComputeInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo">PutNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage">PutStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetBootOrder">ResetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetDesiredState">ResetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetHostname">ResetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetImageList">ResetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetInstanceAttributes">ResetInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetLabel">ResetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetNetworkingInfo">ResetNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetReverseDns">ResetReverseDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetSshKeys">ResetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetStorage">ResetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-opc.computeInstance.ComputeInstance.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkingInfo` <a name="PutNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo"></a>

```go
func PutNetworkingInfo(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo.parameter.value"></a>

- *Type:* interface{}

---

##### `PutStorage` <a name="PutStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage"></a>

```go
func PutStorage(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts"></a>

```go
func PutTimeouts(value ComputeInstanceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

---

##### `ResetBootOrder` <a name="ResetBootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetBootOrder"></a>

```go
func ResetBootOrder()
```

##### `ResetDesiredState` <a name="ResetDesiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetDesiredState"></a>

```go
func ResetDesiredState()
```

##### `ResetHostname` <a name="ResetHostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetHostname"></a>

```go
func ResetHostname()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetId"></a>

```go
func ResetId()
```

##### `ResetImageList` <a name="ResetImageList" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetImageList"></a>

```go
func ResetImageList()
```

##### `ResetInstanceAttributes` <a name="ResetInstanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetInstanceAttributes"></a>

```go
func ResetInstanceAttributes()
```

##### `ResetLabel` <a name="ResetLabel" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetLabel"></a>

```go
func ResetLabel()
```

##### `ResetNetworkingInfo` <a name="ResetNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetNetworkingInfo"></a>

```go
func ResetNetworkingInfo()
```

##### `ResetReverseDns` <a name="ResetReverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetReverseDns"></a>

```go
func ResetReverseDns()
```

##### `ResetSshKeys` <a name="ResetSshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetSshKeys"></a>

```go
func ResetSshKeys()
```

##### `ResetStorage` <a name="ResetStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetStorage"></a>

```go
func ResetStorage()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.ComputeInstance_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.ComputeInstance_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.ComputeInstance_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.ComputeInstance_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.attributes">Attributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.entry">Entry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fingerprint">Fingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqdn">Fqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageFormat">ImageFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfo">NetworkingInfo</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList">ComputeInstanceNetworkingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.placementRequirements">PlacementRequirements</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.priority">Priority</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.quotaReservation">QuotaReservation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.relationships">Relationships</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.resolvers">Resolvers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.site">Site</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.storage">Storage</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList">ComputeInstanceStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference">ComputeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.vcable">Vcable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.virtio">Virtio</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.vncAddress">VncAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrderInput">BootOrderInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredStateInput">DesiredStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostnameInput">HostnameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageListInput">ImageListInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributesInput">InstanceAttributesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.labelInput">LabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfoInput">NetworkingInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDnsInput">ReverseDnsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeysInput">SshKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.storageInput">StorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrder">BootOrder</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredState">DesiredState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageList">ImageList</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributes">InstanceAttributes</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.label">Label</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDns">ReverseDns</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Attributes`<sup>Required</sup> <a name="Attributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.attributes"></a>

```go
func Attributes() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Entry`<sup>Required</sup> <a name="Entry" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.entry"></a>

```go
func Entry() *f64
```

- *Type:* *f64

---

##### `Fingerprint`<sup>Required</sup> <a name="Fingerprint" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fingerprint"></a>

```go
func Fingerprint() *string
```

- *Type:* *string

---

##### `Fqdn`<sup>Required</sup> <a name="Fqdn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqdn"></a>

```go
func Fqdn() *string
```

- *Type:* *string

---

##### `ImageFormat`<sup>Required</sup> <a name="ImageFormat" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageFormat"></a>

```go
func ImageFormat() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `NetworkingInfo`<sup>Required</sup> <a name="NetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfo"></a>

```go
func NetworkingInfo() ComputeInstanceNetworkingInfoList
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList">ComputeInstanceNetworkingInfoList</a>

---

##### `PlacementRequirements`<sup>Required</sup> <a name="PlacementRequirements" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.placementRequirements"></a>

```go
func PlacementRequirements() *[]*string
```

- *Type:* *[]*string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.priority"></a>

```go
func Priority() *string
```

- *Type:* *string

---

##### `QuotaReservation`<sup>Required</sup> <a name="QuotaReservation" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.quotaReservation"></a>

```go
func QuotaReservation() *string
```

- *Type:* *string

---

##### `Relationships`<sup>Required</sup> <a name="Relationships" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.relationships"></a>

```go
func Relationships() *[]*string
```

- *Type:* *[]*string

---

##### `Resolvers`<sup>Required</sup> <a name="Resolvers" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.resolvers"></a>

```go
func Resolvers() *[]*string
```

- *Type:* *[]*string

---

##### `Site`<sup>Required</sup> <a name="Site" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.site"></a>

```go
func Site() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Storage`<sup>Required</sup> <a name="Storage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.storage"></a>

```go
func Storage() ComputeInstanceStorageList
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList">ComputeInstanceStorageList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeouts"></a>

```go
func Timeouts() ComputeInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference">ComputeInstanceTimeoutsOutputReference</a>

---

##### `Vcable`<sup>Required</sup> <a name="Vcable" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.vcable"></a>

```go
func Vcable() *string
```

- *Type:* *string

---

##### `Virtio`<sup>Required</sup> <a name="Virtio" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.virtio"></a>

```go
func Virtio() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `VncAddress`<sup>Required</sup> <a name="VncAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.vncAddress"></a>

```go
func VncAddress() *string
```

- *Type:* *string

---

##### `BootOrderInput`<sup>Optional</sup> <a name="BootOrderInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrderInput"></a>

```go
func BootOrderInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `DesiredStateInput`<sup>Optional</sup> <a name="DesiredStateInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredStateInput"></a>

```go
func DesiredStateInput() *string
```

- *Type:* *string

---

##### `HostnameInput`<sup>Optional</sup> <a name="HostnameInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostnameInput"></a>

```go
func HostnameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageListInput`<sup>Optional</sup> <a name="ImageListInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageListInput"></a>

```go
func ImageListInput() *string
```

- *Type:* *string

---

##### `InstanceAttributesInput`<sup>Optional</sup> <a name="InstanceAttributesInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributesInput"></a>

```go
func InstanceAttributesInput() *string
```

- *Type:* *string

---

##### `LabelInput`<sup>Optional</sup> <a name="LabelInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.labelInput"></a>

```go
func LabelInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkingInfoInput`<sup>Optional</sup> <a name="NetworkingInfoInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfoInput"></a>

```go
func NetworkingInfoInput() interface{}
```

- *Type:* interface{}

---

##### `ReverseDnsInput`<sup>Optional</sup> <a name="ReverseDnsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDnsInput"></a>

```go
func ReverseDnsInput() interface{}
```

- *Type:* interface{}

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SshKeysInput`<sup>Optional</sup> <a name="SshKeysInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeysInput"></a>

```go
func SshKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `StorageInput`<sup>Optional</sup> <a name="StorageInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.storageInput"></a>

```go
func StorageInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BootOrder`<sup>Required</sup> <a name="BootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrder"></a>

```go
func BootOrder() *[]*f64
```

- *Type:* *[]*f64

---

##### `DesiredState`<sup>Required</sup> <a name="DesiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredState"></a>

```go
func DesiredState() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageList`<sup>Required</sup> <a name="ImageList" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageList"></a>

```go
func ImageList() *string
```

- *Type:* *string

---

##### `InstanceAttributes`<sup>Required</sup> <a name="InstanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributes"></a>

```go
func InstanceAttributes() *string
```

- *Type:* *string

---

##### `Label`<sup>Required</sup> <a name="Label" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.label"></a>

```go
func Label() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ReverseDns`<sup>Required</sup> <a name="ReverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDns"></a>

```go
func ReverseDns() interface{}
```

- *Type:* interface{}

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SshKeys`<sup>Required</sup> <a name="SshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeys"></a>

```go
func SshKeys() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceConfig <a name="ComputeInstanceConfig" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

&computeinstance.ComputeInstanceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Shape: *string,
	BootOrder: *[]*f64,
	DesiredState: *string,
	Hostname: *string,
	Id: *string,
	ImageList: *string,
	InstanceAttributes: *string,
	Label: *string,
	NetworkingInfo: interface{},
	ReverseDns: interface{},
	SshKeys: *[]*string,
	Storage: interface{},
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opc-go/opc/v7.computeInstance.ComputeInstanceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.bootOrder">BootOrder</a></code> | <code>*[]*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.desiredState">DesiredState</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.hostname">Hostname</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.imageList">ImageList</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.instanceAttributes">InstanceAttributes</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.label">Label</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.networkingInfo">NetworkingInfo</a></code> | <code>interface{}</code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.reverseDns">ReverseDns</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.sshKeys">SshKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.storage">Storage</a></code> | <code>interface{}</code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}.

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}.

---

##### `BootOrder`<sup>Optional</sup> <a name="BootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.bootOrder"></a>

```go
BootOrder *[]*f64
```

- *Type:* *[]*f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}.

---

##### `DesiredState`<sup>Optional</sup> <a name="DesiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.desiredState"></a>

```go
DesiredState *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}.

---

##### `Hostname`<sup>Optional</sup> <a name="Hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.hostname"></a>

```go
Hostname *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageList`<sup>Optional</sup> <a name="ImageList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.imageList"></a>

```go
ImageList *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}.

---

##### `InstanceAttributes`<sup>Optional</sup> <a name="InstanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.instanceAttributes"></a>

```go
InstanceAttributes *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}.

---

##### `Label`<sup>Optional</sup> <a name="Label" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.label"></a>

```go
Label *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}.

---

##### `NetworkingInfo`<sup>Optional</sup> <a name="NetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.networkingInfo"></a>

```go
NetworkingInfo interface{}
```

- *Type:* interface{}

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#networking_info ComputeInstance#networking_info}

---

##### `ReverseDns`<sup>Optional</sup> <a name="ReverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.reverseDns"></a>

```go
ReverseDns interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}.

---

##### `SshKeys`<sup>Optional</sup> <a name="SshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.sshKeys"></a>

```go
SshKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}.

---

##### `Storage`<sup>Optional</sup> <a name="Storage" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.storage"></a>

```go
Storage interface{}
```

- *Type:* interface{}

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#storage ComputeInstance#storage}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.timeouts"></a>

```go
Timeouts ComputeInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}

---

### ComputeInstanceNetworkingInfo <a name="ComputeInstanceNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

&computeinstance.ComputeInstanceNetworkingInfo {
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
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.index">Index</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.dns">Dns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipAddress">IpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.isDefaultGateway">IsDefaultGateway</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.macAddress">MacAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nat">Nat</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.searchDomains">SearchDomains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.secLists">SecLists</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.sharedNetwork">SharedNetwork</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnic">Vnic</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnicSets">VnicSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.index"></a>

```go
Index *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}.

---

##### `Dns`<sup>Optional</sup> <a name="Dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.dns"></a>

```go
Dns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}.

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}.

---

##### `IpNetwork`<sup>Optional</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipNetwork"></a>

```go
IpNetwork *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}.

---

##### `IsDefaultGateway`<sup>Optional</sup> <a name="IsDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.isDefaultGateway"></a>

```go
IsDefaultGateway interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}.

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.macAddress"></a>

```go
MacAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}.

---

##### `NameServers`<sup>Optional</sup> <a name="NameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nameServers"></a>

```go
NameServers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}.

---

##### `Nat`<sup>Optional</sup> <a name="Nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nat"></a>

```go
Nat *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}.

---

##### `SearchDomains`<sup>Optional</sup> <a name="SearchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.searchDomains"></a>

```go
SearchDomains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}.

---

##### `SecLists`<sup>Optional</sup> <a name="SecLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.secLists"></a>

```go
SecLists *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}.

---

##### `SharedNetwork`<sup>Optional</sup> <a name="SharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.sharedNetwork"></a>

```go
SharedNetwork interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}.

---

##### `Vnic`<sup>Optional</sup> <a name="Vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnic"></a>

```go
Vnic *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}.

---

##### `VnicSets`<sup>Optional</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnicSets"></a>

```go
VnicSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}.

---

### ComputeInstanceStorage <a name="ComputeInstanceStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

&computeinstance.ComputeInstanceStorage {
	Index: *f64,
	Volume: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.index">Index</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.volume">Volume</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}. |

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.index"></a>

```go
Index *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}.

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.volume"></a>

```go
Volume *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}.

---

### ComputeInstanceTimeouts <a name="ComputeInstanceTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

&computeinstance.ComputeInstanceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceNetworkingInfoList <a name="ComputeInstanceNetworkingInfoList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.NewComputeInstanceNetworkingInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInstanceNetworkingInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get"></a>

```go
func Get(index *f64) ComputeInstanceNetworkingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceNetworkingInfoOutputReference <a name="ComputeInstanceNetworkingInfoOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.NewComputeInstanceNetworkingInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInstanceNetworkingInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetDns">ResetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpNetwork">ResetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIsDefaultGateway">ResetIsDefaultGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNameServers">ResetNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNat">ResetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSearchDomains">ResetSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSecLists">ResetSecLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSharedNetwork">ResetSharedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnic">ResetVnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnicSets">ResetVnicSets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDns` <a name="ResetDns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetDns"></a>

```go
func ResetDns()
```

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIpNetwork` <a name="ResetIpNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpNetwork"></a>

```go
func ResetIpNetwork()
```

##### `ResetIsDefaultGateway` <a name="ResetIsDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIsDefaultGateway"></a>

```go
func ResetIsDefaultGateway()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetMacAddress"></a>

```go
func ResetMacAddress()
```

##### `ResetNameServers` <a name="ResetNameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNameServers"></a>

```go
func ResetNameServers()
```

##### `ResetNat` <a name="ResetNat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNat"></a>

```go
func ResetNat()
```

##### `ResetSearchDomains` <a name="ResetSearchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSearchDomains"></a>

```go
func ResetSearchDomains()
```

##### `ResetSecLists` <a name="ResetSecLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSecLists"></a>

```go
func ResetSecLists()
```

##### `ResetSharedNetwork` <a name="ResetSharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSharedNetwork"></a>

```go
func ResetSharedNetwork()
```

##### `ResetVnic` <a name="ResetVnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnic"></a>

```go
func ResetVnic()
```

##### `ResetVnicSets` <a name="ResetVnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnicSets"></a>

```go
func ResetVnicSets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dnsInput">DnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.indexInput">IndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetworkInput">IpNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput">IsDefaultGatewayInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddressInput">MacAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServersInput">NameServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.natInput">NatInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomainsInput">SearchDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secListsInput">SecListsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetworkInput">SharedNetworkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicInput">VnicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSetsInput">VnicSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dns">Dns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.index">Index</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGateway">IsDefaultGateway</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServers">NameServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nat">Nat</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomains">SearchDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secLists">SecLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetwork">SharedNetwork</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnic">Vnic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSets">VnicSets</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsInput`<sup>Optional</sup> <a name="DnsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dnsInput"></a>

```go
func DnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.indexInput"></a>

```go
func IndexInput() *f64
```

- *Type:* *f64

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetworkInput"></a>

```go
func IpNetworkInput() *string
```

- *Type:* *string

---

##### `IsDefaultGatewayInput`<sup>Optional</sup> <a name="IsDefaultGatewayInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput"></a>

```go
func IsDefaultGatewayInput() interface{}
```

- *Type:* interface{}

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddressInput"></a>

```go
func MacAddressInput() *string
```

- *Type:* *string

---

##### `NameServersInput`<sup>Optional</sup> <a name="NameServersInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServersInput"></a>

```go
func NameServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `NatInput`<sup>Optional</sup> <a name="NatInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.natInput"></a>

```go
func NatInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchDomainsInput`<sup>Optional</sup> <a name="SearchDomainsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomainsInput"></a>

```go
func SearchDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SecListsInput`<sup>Optional</sup> <a name="SecListsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secListsInput"></a>

```go
func SecListsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SharedNetworkInput`<sup>Optional</sup> <a name="SharedNetworkInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetworkInput"></a>

```go
func SharedNetworkInput() interface{}
```

- *Type:* interface{}

---

##### `VnicInput`<sup>Optional</sup> <a name="VnicInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicInput"></a>

```go
func VnicInput() *string
```

- *Type:* *string

---

##### `VnicSetsInput`<sup>Optional</sup> <a name="VnicSetsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSetsInput"></a>

```go
func VnicSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Dns`<sup>Required</sup> <a name="Dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dns"></a>

```go
func Dns() *[]*string
```

- *Type:* *[]*string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.index"></a>

```go
func Index() *f64
```

- *Type:* *f64

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetwork"></a>

```go
func IpNetwork() *string
```

- *Type:* *string

---

##### `IsDefaultGateway`<sup>Required</sup> <a name="IsDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGateway"></a>

```go
func IsDefaultGateway() interface{}
```

- *Type:* interface{}

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `NameServers`<sup>Required</sup> <a name="NameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServers"></a>

```go
func NameServers() *[]*string
```

- *Type:* *[]*string

---

##### `Nat`<sup>Required</sup> <a name="Nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nat"></a>

```go
func Nat() *[]*string
```

- *Type:* *[]*string

---

##### `SearchDomains`<sup>Required</sup> <a name="SearchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomains"></a>

```go
func SearchDomains() *[]*string
```

- *Type:* *[]*string

---

##### `SecLists`<sup>Required</sup> <a name="SecLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secLists"></a>

```go
func SecLists() *[]*string
```

- *Type:* *[]*string

---

##### `SharedNetwork`<sup>Required</sup> <a name="SharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetwork"></a>

```go
func SharedNetwork() interface{}
```

- *Type:* interface{}

---

##### `Vnic`<sup>Required</sup> <a name="Vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnic"></a>

```go
func Vnic() *string
```

- *Type:* *string

---

##### `VnicSets`<sup>Required</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSets"></a>

```go
func VnicSets() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceStorageList <a name="ComputeInstanceStorageList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.NewComputeInstanceStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ComputeInstanceStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get"></a>

```go
func Get(index *f64) ComputeInstanceStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceStorageOutputReference <a name="ComputeInstanceStorageOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.NewComputeInstanceStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ComputeInstanceStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.indexInput">IndexInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volumeInput">VolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.index">Index</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volume">Volume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `IndexInput`<sup>Optional</sup> <a name="IndexInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.indexInput"></a>

```go
func IndexInput() *f64
```

- *Type:* *f64

---

##### `VolumeInput`<sup>Optional</sup> <a name="VolumeInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volumeInput"></a>

```go
func VolumeInput() *string
```

- *Type:* *string

---

##### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.index"></a>

```go
func Index() *f64
```

- *Type:* *f64

---

##### `Volume`<sup>Required</sup> <a name="Volume" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volume"></a>

```go
func Volume() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ComputeInstanceTimeoutsOutputReference <a name="ComputeInstanceTimeoutsOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computeinstance"

computeinstance.NewComputeInstanceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeInstanceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



