# `computeSecRule` Submodule <a name="`computeSecRule` Submodule" id="@cdktf/provider-opc.computeSecRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecRule <a name="ComputeSecRule" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule opc_compute_sec_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecrule"

computesecrule.NewComputeSecRule(scope Construct, id *string, config ComputeSecRuleConfig) ComputeSecRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig">ComputeSecRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig">ComputeSecRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetDisabled"></a>

```go
func ResetDisabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSecRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecrule"

computesecrule.ComputeSecRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecrule"

computesecrule.ComputeSecRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecrule"

computesecrule.ComputeSecRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecrule"

computesecrule.ComputeSecRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ComputeSecRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ComputeSecRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ComputeSecRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.applicationInput">ApplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.destinationListInput">DestinationListInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.disabledInput">DisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.sourceListInput">SourceListInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.application">Application</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.destinationList">DestinationList</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.disabled">Disabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.sourceList">SourceList</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `ApplicationInput`<sup>Optional</sup> <a name="ApplicationInput" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.applicationInput"></a>

```go
func ApplicationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationListInput`<sup>Optional</sup> <a name="DestinationListInput" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.destinationListInput"></a>

```go
func DestinationListInput() *string
```

- *Type:* *string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.disabledInput"></a>

```go
func DisabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SourceListInput`<sup>Optional</sup> <a name="SourceListInput" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.sourceListInput"></a>

```go
func SourceListInput() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.application"></a>

```go
func Application() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationList`<sup>Required</sup> <a name="DestinationList" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.destinationList"></a>

```go
func DestinationList() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.disabled"></a>

```go
func Disabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SourceList`<sup>Required</sup> <a name="SourceList" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.sourceList"></a>

```go
func SourceList() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecRuleConfig <a name="ComputeSecRuleConfig" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/computesecrule"

&computesecrule.ComputeSecRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	Application: *string,
	DestinationList: *string,
	Name: *string,
	SourceList: *string,
	Description: *string,
	Disabled: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#action ComputeSecRule#action}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.application">Application</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#application ComputeSecRule#application}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.destinationList">DestinationList</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#destination_list ComputeSecRule#destination_list}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#name ComputeSecRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.sourceList">SourceList</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#source_list ComputeSecRule#source_list}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#description ComputeSecRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.disabled">Disabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#disabled ComputeSecRule#disabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#id ComputeSecRule#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#action ComputeSecRule#action}.

---

##### `Application`<sup>Required</sup> <a name="Application" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.application"></a>

```go
Application *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#application ComputeSecRule#application}.

---

##### `DestinationList`<sup>Required</sup> <a name="DestinationList" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.destinationList"></a>

```go
DestinationList *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#destination_list ComputeSecRule#destination_list}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#name ComputeSecRule#name}.

---

##### `SourceList`<sup>Required</sup> <a name="SourceList" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.sourceList"></a>

```go
SourceList *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#source_list ComputeSecRule#source_list}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#description ComputeSecRule#description}.

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.disabled"></a>

```go
Disabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#disabled ComputeSecRule#disabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_sec_rule#id ComputeSecRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



