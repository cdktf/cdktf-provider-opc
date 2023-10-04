# `opc_compute_storage_volume_snapshot`

Refer to the Terraform Registory for docs: [`opc_compute_storage_volume_snapshot`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot).

# `computeStorageVolumeSnapshot` Submodule <a name="`computeStorageVolumeSnapshot` Submodule" id="@cdktf/provider-opc.computeStorageVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStorageVolumeSnapshot <a name="ComputeStorageVolumeSnapshot" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot opc_compute_storage_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computestoragevolumesnapshot"

computestoragevolumesnapshot.NewComputeStorageVolumeSnapshot(scope Construct, id *string, config ComputeStorageVolumeSnapshotConfig) ComputeStorageVolumeSnapshot
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig">ComputeStorageVolumeSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig">ComputeStorageVolumeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetCollocated">ResetCollocated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetParentVolumeBootable">ResetParentVolumeBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts"></a>

```go
func PutTimeouts(value ComputeStorageVolumeSnapshotTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>

---

##### `ResetCollocated` <a name="ResetCollocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetCollocated"></a>

```go
func ResetCollocated()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetName"></a>

```go
func ResetName()
```

##### `ResetParentVolumeBootable` <a name="ResetParentVolumeBootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetParentVolumeBootable"></a>

```go
func ResetParentVolumeBootable()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computestoragevolumesnapshot"

computestoragevolumesnapshot.ComputeStorageVolumeSnapshot_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computestoragevolumesnapshot"

computestoragevolumesnapshot.ComputeStorageVolumeSnapshot_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computestoragevolumesnapshot"

computestoragevolumesnapshot.ComputeStorageVolumeSnapshot_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.machineImageName">MachineImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.property">Property</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.size">Size</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotId">SnapshotId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotTimestamp">SnapshotTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.startTimestamp">StartTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusDetail">StatusDetail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusTimestamp">StatusTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference">ComputeStorageVolumeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocatedInput">CollocatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootableInput">ParentVolumeBootableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeNameInput">VolumeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocated">Collocated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootable">ParentVolumeBootable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeName">VolumeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `MachineImageName`<sup>Required</sup> <a name="MachineImageName" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.machineImageName"></a>

```go
func MachineImageName() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.property"></a>

```go
func Property() *string
```

- *Type:* *string

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.size"></a>

```go
func Size() *string
```

- *Type:* *string

---

##### `SnapshotId`<sup>Required</sup> <a name="SnapshotId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotId"></a>

```go
func SnapshotId() *string
```

- *Type:* *string

---

##### `SnapshotTimestamp`<sup>Required</sup> <a name="SnapshotTimestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotTimestamp"></a>

```go
func SnapshotTimestamp() *string
```

- *Type:* *string

---

##### `StartTimestamp`<sup>Required</sup> <a name="StartTimestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.startTimestamp"></a>

```go
func StartTimestamp() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetail`<sup>Required</sup> <a name="StatusDetail" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusDetail"></a>

```go
func StatusDetail() *string
```

- *Type:* *string

---

##### `StatusTimestamp`<sup>Required</sup> <a name="StatusTimestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusTimestamp"></a>

```go
func StatusTimestamp() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeouts"></a>

```go
func Timeouts() ComputeStorageVolumeSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference">ComputeStorageVolumeSnapshotTimeoutsOutputReference</a>

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `CollocatedInput`<sup>Optional</sup> <a name="CollocatedInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocatedInput"></a>

```go
func CollocatedInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentVolumeBootableInput`<sup>Optional</sup> <a name="ParentVolumeBootableInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootableInput"></a>

```go
func ParentVolumeBootableInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VolumeNameInput`<sup>Optional</sup> <a name="VolumeNameInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeNameInput"></a>

```go
func VolumeNameInput() *string
```

- *Type:* *string

---

##### `Collocated`<sup>Required</sup> <a name="Collocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocated"></a>

```go
func Collocated() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ParentVolumeBootable`<sup>Required</sup> <a name="ParentVolumeBootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootable"></a>

```go
func ParentVolumeBootable() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeName"></a>

```go
func VolumeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStorageVolumeSnapshotConfig <a name="ComputeStorageVolumeSnapshotConfig" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computestoragevolumesnapshot"

&computestoragevolumesnapshot.ComputeStorageVolumeSnapshotConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VolumeName: *string,
	Collocated: interface{},
	Description: *string,
	Id: *string,
	Name: *string,
	ParentVolumeBootable: interface{},
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opc-go/opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.volumeName">VolumeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.collocated">Collocated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.parentVolumeBootable">ParentVolumeBootable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VolumeName`<sup>Required</sup> <a name="VolumeName" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.volumeName"></a>

```go
VolumeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}.

---

##### `Collocated`<sup>Optional</sup> <a name="Collocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.collocated"></a>

```go
Collocated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}.

---

##### `ParentVolumeBootable`<sup>Optional</sup> <a name="ParentVolumeBootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.parentVolumeBootable"></a>

```go
ParentVolumeBootable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.timeouts"></a>

```go
Timeouts ComputeStorageVolumeSnapshotTimeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#timeouts ComputeStorageVolumeSnapshot#timeouts}

---

### ComputeStorageVolumeSnapshotTimeouts <a name="ComputeStorageVolumeSnapshotTimeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computestoragevolumesnapshot"

&computestoragevolumesnapshot.ComputeStorageVolumeSnapshotTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#create ComputeStorageVolumeSnapshot#create}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#delete ComputeStorageVolumeSnapshot#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#create ComputeStorageVolumeSnapshot#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#delete ComputeStorageVolumeSnapshot#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStorageVolumeSnapshotTimeoutsOutputReference <a name="ComputeStorageVolumeSnapshotTimeoutsOutputReference" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computestoragevolumesnapshot"

computestoragevolumesnapshot.NewComputeStorageVolumeSnapshotTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeStorageVolumeSnapshotTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



