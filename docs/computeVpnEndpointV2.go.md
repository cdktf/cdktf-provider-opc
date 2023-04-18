# `opc_compute_vpn_endpoint_v2`

Refer to the Terraform Registory for docs: [`opc_compute_vpn_endpoint_v2`](https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2).

# `computeVpnEndpointV2` Submodule <a name="`computeVpnEndpointV2` Submodule" id="@cdktf/provider-opc.computeVpnEndpointV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeVpnEndpointV2 <a name="ComputeVpnEndpointV2" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2 opc_compute_vpn_endpoint_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

computevpnendpointv2.NewComputeVpnEndpointV2(scope Construct, id *string, config ComputeVpnEndpointV2Config) ComputeVpnEndpointV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config">ComputeVpnEndpointV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config">ComputeVpnEndpointV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings">PutPhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings">PutPhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetIkeIdentifier">ResetIkeIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseOneSettings">ResetPhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseTwoSettings">ResetPhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetRequirePerfectForwardSecrecy">ResetRequirePerfectForwardSecrecy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutPhaseOneSettings` <a name="PutPhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings"></a>

```go
func PutPhaseOneSettings(value ComputeVpnEndpointV2PhaseOneSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseOneSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---

##### `PutPhaseTwoSettings` <a name="PutPhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings"></a>

```go
func PutPhaseTwoSettings(value ComputeVpnEndpointV2PhaseTwoSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putPhaseTwoSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts"></a>

```go
func PutTimeouts(value ComputeVpnEndpointV2Timeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetId"></a>

```go
func ResetId()
```

##### `ResetIkeIdentifier` <a name="ResetIkeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetIkeIdentifier"></a>

```go
func ResetIkeIdentifier()
```

##### `ResetPhaseOneSettings` <a name="ResetPhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseOneSettings"></a>

```go
func ResetPhaseOneSettings()
```

##### `ResetPhaseTwoSettings` <a name="ResetPhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetPhaseTwoSettings"></a>

```go
func ResetPhaseTwoSettings()
```

##### `ResetRequirePerfectForwardSecrecy` <a name="ResetRequirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetRequirePerfectForwardSecrecy"></a>

```go
func ResetRequirePerfectForwardSecrecy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

computevpnendpointv2.ComputeVpnEndpointV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

computevpnendpointv2.ComputeVpnEndpointV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

computevpnendpointv2.ComputeVpnEndpointV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayIpAddress">LocalGatewayIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayPrivateIpAddress">LocalGatewayPrivateIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettings">PhaseOneSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference">ComputeVpnEndpointV2PhaseOneSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettings">PhaseTwoSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference">ComputeVpnEndpointV2PhaseTwoSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference">ComputeVpnEndpointV2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tunnelStatus">TunnelStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGatewayInput">CustomerVpnGatewayInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifierInput">IkeIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetworkInput">IpNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettingsInput">PhaseOneSettingsInput</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettingsInput">PhaseTwoSettingsInput</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKeyInput">PreSharedKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutesInput">ReachableRoutesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecyInput">RequirePerfectForwardSecrecyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSetsInput">VnicSetsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGateway">CustomerVpnGateway</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifier">IkeIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKey">PreSharedKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutes">ReachableRoutes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecy">RequirePerfectForwardSecrecy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSets">VnicSets</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LocalGatewayIpAddress`<sup>Required</sup> <a name="LocalGatewayIpAddress" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayIpAddress"></a>

```go
func LocalGatewayIpAddress() *string
```

- *Type:* *string

---

##### `LocalGatewayPrivateIpAddress`<sup>Required</sup> <a name="LocalGatewayPrivateIpAddress" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.localGatewayPrivateIpAddress"></a>

```go
func LocalGatewayPrivateIpAddress() *string
```

- *Type:* *string

---

##### `PhaseOneSettings`<sup>Required</sup> <a name="PhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettings"></a>

```go
func PhaseOneSettings() ComputeVpnEndpointV2PhaseOneSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference">ComputeVpnEndpointV2PhaseOneSettingsOutputReference</a>

---

##### `PhaseTwoSettings`<sup>Required</sup> <a name="PhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettings"></a>

```go
func PhaseTwoSettings() ComputeVpnEndpointV2PhaseTwoSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference">ComputeVpnEndpointV2PhaseTwoSettingsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeouts"></a>

```go
func Timeouts() ComputeVpnEndpointV2TimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference">ComputeVpnEndpointV2TimeoutsOutputReference</a>

---

##### `TunnelStatus`<sup>Required</sup> <a name="TunnelStatus" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tunnelStatus"></a>

```go
func TunnelStatus() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `CustomerVpnGatewayInput`<sup>Optional</sup> <a name="CustomerVpnGatewayInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGatewayInput"></a>

```go
func CustomerVpnGatewayInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IkeIdentifierInput`<sup>Optional</sup> <a name="IkeIdentifierInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifierInput"></a>

```go
func IkeIdentifierInput() *string
```

- *Type:* *string

---

##### `IpNetworkInput`<sup>Optional</sup> <a name="IpNetworkInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetworkInput"></a>

```go
func IpNetworkInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PhaseOneSettingsInput`<sup>Optional</sup> <a name="PhaseOneSettingsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseOneSettingsInput"></a>

```go
func PhaseOneSettingsInput() ComputeVpnEndpointV2PhaseOneSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---

##### `PhaseTwoSettingsInput`<sup>Optional</sup> <a name="PhaseTwoSettingsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.phaseTwoSettingsInput"></a>

```go
func PhaseTwoSettingsInput() ComputeVpnEndpointV2PhaseTwoSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---

##### `PreSharedKeyInput`<sup>Optional</sup> <a name="PreSharedKeyInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKeyInput"></a>

```go
func PreSharedKeyInput() *string
```

- *Type:* *string

---

##### `ReachableRoutesInput`<sup>Optional</sup> <a name="ReachableRoutesInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutesInput"></a>

```go
func ReachableRoutesInput() *[]*string
```

- *Type:* *[]*string

---

##### `RequirePerfectForwardSecrecyInput`<sup>Optional</sup> <a name="RequirePerfectForwardSecrecyInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecyInput"></a>

```go
func RequirePerfectForwardSecrecyInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VnicSetsInput`<sup>Optional</sup> <a name="VnicSetsInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSetsInput"></a>

```go
func VnicSetsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomerVpnGateway`<sup>Required</sup> <a name="CustomerVpnGateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.customerVpnGateway"></a>

```go
func CustomerVpnGateway() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IkeIdentifier`<sup>Required</sup> <a name="IkeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ikeIdentifier"></a>

```go
func IkeIdentifier() *string
```

- *Type:* *string

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.ipNetwork"></a>

```go
func IpNetwork() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PreSharedKey`<sup>Required</sup> <a name="PreSharedKey" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.preSharedKey"></a>

```go
func PreSharedKey() *string
```

- *Type:* *string

---

##### `ReachableRoutes`<sup>Required</sup> <a name="ReachableRoutes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.reachableRoutes"></a>

```go
func ReachableRoutes() *[]*string
```

- *Type:* *[]*string

---

##### `RequirePerfectForwardSecrecy`<sup>Required</sup> <a name="RequirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.requirePerfectForwardSecrecy"></a>

```go
func RequirePerfectForwardSecrecy() interface{}
```

- *Type:* interface{}

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `VnicSets`<sup>Required</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.vnicSets"></a>

```go
func VnicSets() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeVpnEndpointV2Config <a name="ComputeVpnEndpointV2Config" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

&computevpnendpointv2.ComputeVpnEndpointV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CustomerVpnGateway: *string,
	IpNetwork: *string,
	Name: *string,
	PreSharedKey: *string,
	ReachableRoutes: *[]*string,
	VnicSets: *[]*string,
	Description: *string,
	Enabled: interface{},
	Id: *string,
	IkeIdentifier: *string,
	PhaseOneSettings: github.com/cdktf/cdktf-provider-opc-go/opc/v4.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings,
	PhaseTwoSettings: github.com/cdktf/cdktf-provider-opc-go/opc/v4.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings,
	RequirePerfectForwardSecrecy: interface{},
	Tags: *[]*string,
	Timeouts: github.com/cdktf/cdktf-provider-opc-go/opc/v4.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.customerVpnGateway">CustomerVpnGateway</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ipNetwork">IpNetwork</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.preSharedKey">PreSharedKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.reachableRoutes">ReachableRoutes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.vnicSets">VnicSets</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ikeIdentifier">IkeIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseOneSettings">PhaseOneSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | phase_one_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseTwoSettings">PhaseTwoSettings</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | phase_two_settings block. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.requirePerfectForwardSecrecy">RequirePerfectForwardSecrecy</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomerVpnGateway`<sup>Required</sup> <a name="CustomerVpnGateway" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.customerVpnGateway"></a>

```go
CustomerVpnGateway *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#customer_vpn_gateway ComputeVpnEndpointV2#customer_vpn_gateway}.

---

##### `IpNetwork`<sup>Required</sup> <a name="IpNetwork" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ipNetwork"></a>

```go
IpNetwork *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#ip_network ComputeVpnEndpointV2#ip_network}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#name ComputeVpnEndpointV2#name}.

---

##### `PreSharedKey`<sup>Required</sup> <a name="PreSharedKey" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.preSharedKey"></a>

```go
PreSharedKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#pre_shared_key ComputeVpnEndpointV2#pre_shared_key}.

---

##### `ReachableRoutes`<sup>Required</sup> <a name="ReachableRoutes" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.reachableRoutes"></a>

```go
ReachableRoutes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#reachable_routes ComputeVpnEndpointV2#reachable_routes}.

---

##### `VnicSets`<sup>Required</sup> <a name="VnicSets" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.vnicSets"></a>

```go
VnicSets *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#vnic_sets ComputeVpnEndpointV2#vnic_sets}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#description ComputeVpnEndpointV2#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#enabled ComputeVpnEndpointV2#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#id ComputeVpnEndpointV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IkeIdentifier`<sup>Optional</sup> <a name="IkeIdentifier" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.ikeIdentifier"></a>

```go
IkeIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#ike_identifier ComputeVpnEndpointV2#ike_identifier}.

---

##### `PhaseOneSettings`<sup>Optional</sup> <a name="PhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseOneSettings"></a>

```go
PhaseOneSettings ComputeVpnEndpointV2PhaseOneSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

phase_one_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#phase_one_settings ComputeVpnEndpointV2#phase_one_settings}

---

##### `PhaseTwoSettings`<sup>Optional</sup> <a name="PhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.phaseTwoSettings"></a>

```go
PhaseTwoSettings ComputeVpnEndpointV2PhaseTwoSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

phase_two_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#phase_two_settings ComputeVpnEndpointV2#phase_two_settings}

---

##### `RequirePerfectForwardSecrecy`<sup>Optional</sup> <a name="RequirePerfectForwardSecrecy" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.requirePerfectForwardSecrecy"></a>

```go
RequirePerfectForwardSecrecy interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#require_perfect_forward_secrecy ComputeVpnEndpointV2#require_perfect_forward_secrecy}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#tags ComputeVpnEndpointV2#tags}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Config.property.timeouts"></a>

```go
Timeouts ComputeVpnEndpointV2Timeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts">ComputeVpnEndpointV2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#timeouts ComputeVpnEndpointV2#timeouts}

---

### ComputeVpnEndpointV2PhaseOneSettings <a name="ComputeVpnEndpointV2PhaseOneSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

&computevpnendpointv2.ComputeVpnEndpointV2PhaseOneSettings {
	DhGroup: *string,
	Encryption: *string,
	Hash: *string,
	Lifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.dhGroup">DhGroup</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.encryption">Encryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.hash">Hash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.lifetime">Lifetime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}. |

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.dhGroup"></a>

```go
DhGroup *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#dh_group ComputeVpnEndpointV2#dh_group}.

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.encryption"></a>

```go
Encryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.hash"></a>

```go
Hash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings.property.lifetime"></a>

```go
Lifetime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

### ComputeVpnEndpointV2PhaseTwoSettings <a name="ComputeVpnEndpointV2PhaseTwoSettings" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

&computevpnendpointv2.ComputeVpnEndpointV2PhaseTwoSettings {
	Encryption: *string,
	Hash: *string,
	Lifetime: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.encryption">Encryption</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.hash">Hash</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.lifetime">Lifetime</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}. |

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.encryption"></a>

```go
Encryption *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#encryption ComputeVpnEndpointV2#encryption}.

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.hash"></a>

```go
Hash *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#hash ComputeVpnEndpointV2#hash}.

---

##### `Lifetime`<sup>Optional</sup> <a name="Lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings.property.lifetime"></a>

```go
Lifetime *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#lifetime ComputeVpnEndpointV2#lifetime}.

---

### ComputeVpnEndpointV2Timeouts <a name="ComputeVpnEndpointV2Timeouts" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

&computevpnendpointv2.ComputeVpnEndpointV2Timeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#create ComputeVpnEndpointV2#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#delete ComputeVpnEndpointV2#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2Timeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_vpn_endpoint_v2#update ComputeVpnEndpointV2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeVpnEndpointV2PhaseOneSettingsOutputReference <a name="ComputeVpnEndpointV2PhaseOneSettingsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

computevpnendpointv2.NewComputeVpnEndpointV2PhaseOneSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnEndpointV2PhaseOneSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroupInput">DhGroupInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hashInput">HashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroup">DhGroup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryption">Encryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hash">Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DhGroupInput`<sup>Optional</sup> <a name="DhGroupInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroupInput"></a>

```go
func DhGroupInput() *string
```

- *Type:* *string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() *string
```

- *Type:* *string

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hashInput"></a>

```go
func HashInput() *string
```

- *Type:* *string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *f64
```

- *Type:* *f64

---

##### `DhGroup`<sup>Required</sup> <a name="DhGroup" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.dhGroup"></a>

```go
func DhGroup() *string
```

- *Type:* *string

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.encryption"></a>

```go
func Encryption() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.hash"></a>

```go
func Hash() *string
```

- *Type:* *string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeVpnEndpointV2PhaseOneSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseOneSettings">ComputeVpnEndpointV2PhaseOneSettings</a>

---


### ComputeVpnEndpointV2PhaseTwoSettingsOutputReference <a name="ComputeVpnEndpointV2PhaseTwoSettingsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

computevpnendpointv2.NewComputeVpnEndpointV2PhaseTwoSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnEndpointV2PhaseTwoSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resetLifetime">ResetLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLifetime` <a name="ResetLifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.resetLifetime"></a>

```go
func ResetLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryptionInput">EncryptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hashInput">HashInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetimeInput">LifetimeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryption">Encryption</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hash">Hash</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetime">Lifetime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncryptionInput`<sup>Optional</sup> <a name="EncryptionInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryptionInput"></a>

```go
func EncryptionInput() *string
```

- *Type:* *string

---

##### `HashInput`<sup>Optional</sup> <a name="HashInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hashInput"></a>

```go
func HashInput() *string
```

- *Type:* *string

---

##### `LifetimeInput`<sup>Optional</sup> <a name="LifetimeInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetimeInput"></a>

```go
func LifetimeInput() *f64
```

- *Type:* *f64

---

##### `Encryption`<sup>Required</sup> <a name="Encryption" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.encryption"></a>

```go
func Encryption() *string
```

- *Type:* *string

---

##### `Hash`<sup>Required</sup> <a name="Hash" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.hash"></a>

```go
func Hash() *string
```

- *Type:* *string

---

##### `Lifetime`<sup>Required</sup> <a name="Lifetime" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.lifetime"></a>

```go
func Lifetime() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ComputeVpnEndpointV2PhaseTwoSettings
```

- *Type:* <a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2PhaseTwoSettings">ComputeVpnEndpointV2PhaseTwoSettings</a>

---


### ComputeVpnEndpointV2TimeoutsOutputReference <a name="ComputeVpnEndpointV2TimeoutsOutputReference" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computevpnendpointv2"

computevpnendpointv2.NewComputeVpnEndpointV2TimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ComputeVpnEndpointV2TimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.computeVpnEndpointV2.ComputeVpnEndpointV2TimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



