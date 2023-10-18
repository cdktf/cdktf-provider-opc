# `opc_compute_storage_volume`

Refer to the Terraform Registory for docs: [`opc_compute_storage_volume`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume).

# `computeStorageVolume` Submodule <a name="`computeStorageVolume` Submodule" id="@cdktf/provider-opc.computeStorageVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStorageVolume <a name="ComputeStorageVolume" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume opc_compute_storage_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computestoragevolume"

computestoragevolume.NewComputeStorageVolume(scope Construct, id *string, config ComputeStorageVolumeConfig) ComputeStorageVolume
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig">ComputeStorageVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig">ComputeStorageVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable">ResetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor">ResetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList">ResetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry">ResetImageListEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage">ResetMachineImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform">ResetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly">ResetReadonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot">ResetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount">ResetSnapshotAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId">ResetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool">ResetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType">ResetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts"></a>

```go
func PutTimeouts(value ComputeStorageVolumeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

---

##### `ResetBootable` <a name="ResetBootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable"></a>

```go
func ResetBootable()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHypervisor` <a name="ResetHypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor"></a>

```go
func ResetHypervisor()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId"></a>

```go
func ResetId()
```

##### `ResetImageList` <a name="ResetImageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList"></a>

```go
func ResetImageList()
```

##### `ResetImageListEntry` <a name="ResetImageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry"></a>

```go
func ResetImageListEntry()
```

##### `ResetMachineImage` <a name="ResetMachineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage"></a>

```go
func ResetMachineImage()
```

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged"></a>

```go
func ResetManaged()
```

##### `ResetPlatform` <a name="ResetPlatform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform"></a>

```go
func ResetPlatform()
```

##### `ResetReadonly` <a name="ResetReadonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly"></a>

```go
func ResetReadonly()
```

##### `ResetSnapshot` <a name="ResetSnapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot"></a>

```go
func ResetSnapshot()
```

##### `ResetSnapshotAccount` <a name="ResetSnapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount"></a>

```go
func ResetSnapshotAccount()
```

##### `ResetSnapshotId` <a name="ResetSnapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId"></a>

```go
func ResetSnapshotId()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetStoragePool` <a name="ResetStoragePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool"></a>

```go
func ResetStoragePool()
```

##### `ResetStorageType` <a name="ResetStorageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType"></a>

```go
func ResetStorageType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetUri` <a name="ResetUri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri"></a>

```go
func ResetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeStorageVolume resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computestoragevolume"

computestoragevolume.ComputeStorageVolume_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computestoragevolume"

computestoragevolume.ComputeStorageVolume_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computestoragevolume"

computestoragevolume.ComputeStorageVolume_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computestoragevolume"

computestoragevolume.ComputeStorageVolume_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeStorageVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeStorageVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeStorageVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeStorageVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput">BootableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput">HypervisorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput">ImageListEntryInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput">ImageListInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput">MachineImageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput">ManagedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput">ReadonlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput">SnapshotAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput">SnapshotIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput">SnapshotInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput">StoragePoolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput">StorageTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable">Bootable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor">Hypervisor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList">ImageList</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry">ImageListEntry</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage">MachineImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed">Managed</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly">Readonly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot">Snapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount">SnapshotAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool">StoragePool</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType">StorageType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts"></a>

```go
func Timeouts() ComputeStorageVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a>

---

##### `BootableInput`<sup>Optional</sup> <a name="BootableInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput"></a>

```go
func BootableInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HypervisorInput`<sup>Optional</sup> <a name="HypervisorInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput"></a>

```go
func HypervisorInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ImageListEntryInput`<sup>Optional</sup> <a name="ImageListEntryInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput"></a>

```go
func ImageListEntryInput() *f64
```

- *Type:* *f64

---

##### `ImageListInput`<sup>Optional</sup> <a name="ImageListInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput"></a>

```go
func ImageListInput() *string
```

- *Type:* *string

---

##### `MachineImageInput`<sup>Optional</sup> <a name="MachineImageInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput"></a>

```go
func MachineImageInput() *string
```

- *Type:* *string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput"></a>

```go
func ManagedInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `ReadonlyInput`<sup>Optional</sup> <a name="ReadonlyInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput"></a>

```go
func ReadonlyInput() interface{}
```

- *Type:* interface{}

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `SnapshotAccountInput`<sup>Optional</sup> <a name="SnapshotAccountInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput"></a>

```go
func SnapshotAccountInput() *string
```

- *Type:* *string

---

##### `SnapshotIdInput`<sup>Optional</sup> <a name="SnapshotIdInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput"></a>

```go
func SnapshotIdInput() *string
```

- *Type:* *string

---

##### `SnapshotInput`<sup>Optional</sup> <a name="SnapshotInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput"></a>

```go
func SnapshotInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `StoragePoolInput`<sup>Optional</sup> <a name="StoragePoolInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput"></a>

```go
func StoragePoolInput() *string
```

- *Type:* *string

---

##### `StorageTypeInput`<sup>Optional</sup> <a name="StorageTypeInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput"></a>

```go
func StorageTypeInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `Bootable`<sup>Required</sup> <a name="Bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable"></a>

```go
func Bootable() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hypervisor`<sup>Required</sup> <a name="Hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor"></a>

```go
func Hypervisor() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ImageList`<sup>Required</sup> <a name="ImageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList"></a>

```go
func ImageList() *string
```

- *Type:* *string

---

##### `ImageListEntry`<sup>Required</sup> <a name="ImageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry"></a>

```go
func ImageListEntry() *f64
```

- *Type:* *f64

---

##### `MachineImage`<sup>Required</sup> <a name="MachineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage"></a>

```go
func MachineImage() *string
```

- *Type:* *string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed"></a>

```go
func Managed() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Readonly`<sup>Required</sup> <a name="Readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly"></a>

```go
func Readonly() interface{}
```

- *Type:* interface{}

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `Snapshot`<sup>Required</sup> <a name="Snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot"></a>

```go
func Snapshot() *string
```

- *Type:* *string

---

##### `SnapshotAccount`<sup>Required</sup> <a name="SnapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount"></a>

```go
func SnapshotAccount() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StoragePool`<sup>Required</sup> <a name="StoragePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool"></a>

```go
func StoragePool() *string
```

- *Type:* *string

---

##### `StorageType`<sup>Required</sup> <a name="StorageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType"></a>

```go
func StorageType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStorageVolumeConfig <a name="ComputeStorageVolumeConfig" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computestoragevolume"

&computestoragevolume.ComputeStorageVolumeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Size: *f64,
	Bootable: interface{},
	Description: *string,
	Hypervisor: *string,
	Id: *string,
	ImageList: *string,
	ImageListEntry: *f64,
	MachineImage: *string,
	Managed: interface{},
	Platform: *string,
	Readonly: interface{},
	Snapshot: *string,
	SnapshotAccount: *string,
	SnapshotId: *string,
	Status: *string,
	StoragePool: *string,
	StorageType: *string,
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opc-go/opc/v7.computeStorageVolume.ComputeStorageVolumeTimeouts,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable">Bootable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor">Hypervisor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList">ImageList</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry">ImageListEntry</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage">MachineImage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed">Managed</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform">Platform</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly">Readonly</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot">Snapshot</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount">SnapshotAccount</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool">StoragePool</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType">StorageType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri">Uri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}.

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}.

---

##### `Bootable`<sup>Optional</sup> <a name="Bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable"></a>

```go
Bootable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}.

---

##### `Hypervisor`<sup>Optional</sup> <a name="Hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor"></a>

```go
Hypervisor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ImageList`<sup>Optional</sup> <a name="ImageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList"></a>

```go
ImageList *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}.

---

##### `ImageListEntry`<sup>Optional</sup> <a name="ImageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry"></a>

```go
ImageListEntry *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}.

---

##### `MachineImage`<sup>Optional</sup> <a name="MachineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage"></a>

```go
MachineImage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}.

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed"></a>

```go
Managed interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}.

---

##### `Platform`<sup>Optional</sup> <a name="Platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}.

---

##### `Readonly`<sup>Optional</sup> <a name="Readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly"></a>

```go
Readonly interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}.

---

##### `Snapshot`<sup>Optional</sup> <a name="Snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot"></a>

```go
Snapshot *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}.

---

##### `SnapshotAccount`<sup>Optional</sup> <a name="SnapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount"></a>

```go
SnapshotAccount *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}.

---

##### `SnapshotId`<sup>Optional</sup> <a name="SnapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId"></a>

```go
SnapshotId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}.

---

##### `StoragePool`<sup>Optional</sup> <a name="StoragePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool"></a>

```go
StoragePool *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}.

---

##### `StorageType`<sup>Optional</sup> <a name="StorageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType"></a>

```go
StorageType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts"></a>

```go
Timeouts ComputeStorageVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#timeouts ComputeStorageVolume#timeouts}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}.

---

### ComputeStorageVolumeTimeouts <a name="ComputeStorageVolumeTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computestoragevolume"

&computestoragevolume.ComputeStorageVolumeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStorageVolumeTimeoutsOutputReference <a name="ComputeStorageVolumeTimeoutsOutputReference" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v7/computestoragevolume"

computestoragevolume.NewComputeStorageVolumeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeStorageVolumeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



