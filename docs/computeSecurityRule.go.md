# `opc_compute_security_rule`

Refer to the Terraform Registory for docs: [`opc_compute_security_rule`](https://www.terraform.io/docs/providers/opc/r/compute_security_rule).

# `computeSecurityRule` Submodule <a name="`computeSecurityRule` Submodule" id="@cdktf/provider-opc.computeSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityRule <a name="ComputeSecurityRule" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule opc_compute_security_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computesecurityrule"

computesecurityrule.NewComputeSecurityRule(scope Construct, id *string, config ComputeSecurityRuleConfig) ComputeSecurityRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig">ComputeSecurityRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig">ComputeSecurityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl">ResetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes">ResetDstIpAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet">ResetDstVnicSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols">ResetSecurityProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes">ResetSrcIpAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet">ResetSrcVnicSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAcl` <a name="ResetAcl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl"></a>

```go
func ResetAcl()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDstIpAddressPrefixes` <a name="ResetDstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes"></a>

```go
func ResetDstIpAddressPrefixes()
```

##### `ResetDstVnicSet` <a name="ResetDstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet"></a>

```go
func ResetDstVnicSet()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId"></a>

```go
func ResetId()
```

##### `ResetSecurityProtocols` <a name="ResetSecurityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols"></a>

```go
func ResetSecurityProtocols()
```

##### `ResetSrcIpAddressPrefixes` <a name="ResetSrcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes"></a>

```go
func ResetSrcIpAddressPrefixes()
```

##### `ResetSrcVnicSet` <a name="ResetSrcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet"></a>

```go
func ResetSrcVnicSet()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computesecurityrule"

computesecurityrule.ComputeSecurityRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computesecurityrule"

computesecurityrule.ComputeSecurityRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computesecurityrule"

computesecurityrule.ComputeSecurityRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput">AclInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput">DstIpAddressPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput">DstVnicSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput">FlowDirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput">SecurityProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput">SrcIpAddressPrefixesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput">SrcVnicSetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput">TagsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl">Acl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes">DstIpAddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet">DstVnicSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection">FlowDirection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols">SecurityProtocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes">SrcIpAddressPrefixes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet">SrcVnicSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `AclInput`<sup>Optional</sup> <a name="AclInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput"></a>

```go
func AclInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DstIpAddressPrefixesInput`<sup>Optional</sup> <a name="DstIpAddressPrefixesInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput"></a>

```go
func DstIpAddressPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DstVnicSetInput`<sup>Optional</sup> <a name="DstVnicSetInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput"></a>

```go
func DstVnicSetInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `FlowDirectionInput`<sup>Optional</sup> <a name="FlowDirectionInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput"></a>

```go
func FlowDirectionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SecurityProtocolsInput`<sup>Optional</sup> <a name="SecurityProtocolsInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput"></a>

```go
func SecurityProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpAddressPrefixesInput`<sup>Optional</sup> <a name="SrcIpAddressPrefixesInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput"></a>

```go
func SrcIpAddressPrefixesInput() *[]*string
```

- *Type:* *[]*string

---

##### `SrcVnicSetInput`<sup>Optional</sup> <a name="SrcVnicSetInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput"></a>

```go
func SrcVnicSetInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput"></a>

```go
func TagsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Acl`<sup>Required</sup> <a name="Acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl"></a>

```go
func Acl() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DstIpAddressPrefixes`<sup>Required</sup> <a name="DstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes"></a>

```go
func DstIpAddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `DstVnicSet`<sup>Required</sup> <a name="DstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet"></a>

```go
func DstVnicSet() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `FlowDirection`<sup>Required</sup> <a name="FlowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection"></a>

```go
func FlowDirection() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SecurityProtocols`<sup>Required</sup> <a name="SecurityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols"></a>

```go
func SecurityProtocols() *[]*string
```

- *Type:* *[]*string

---

##### `SrcIpAddressPrefixes`<sup>Required</sup> <a name="SrcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes"></a>

```go
func SrcIpAddressPrefixes() *[]*string
```

- *Type:* *[]*string

---

##### `SrcVnicSet`<sup>Required</sup> <a name="SrcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet"></a>

```go
func SrcVnicSet() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityRuleConfig <a name="ComputeSecurityRuleConfig" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/computesecurityrule"

&computesecurityrule.ComputeSecurityRuleConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	FlowDirection: *string,
	Name: *string,
	Acl: *string,
	Description: *string,
	DstIpAddressPrefixes: *[]*string,
	DstVnicSet: *string,
	Enabled: interface{},
	Id: *string,
	SecurityProtocols: *[]*string,
	SrcIpAddressPrefixes: *[]*string,
	SrcVnicSet: *string,
	Tags: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection">FlowDirection</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#name ComputeSecurityRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl">Acl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#acl ComputeSecurityRule#acl}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#description ComputeSecurityRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes">DstIpAddressPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet">DstVnicSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#enabled ComputeSecurityRule#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#id ComputeSecurityRule#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols">SecurityProtocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes">SrcIpAddressPrefixes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet">SrcVnicSet</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags">Tags</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#tags ComputeSecurityRule#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FlowDirection`<sup>Required</sup> <a name="FlowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection"></a>

```go
FlowDirection *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#name ComputeSecurityRule#name}.

---

##### `Acl`<sup>Optional</sup> <a name="Acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl"></a>

```go
Acl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#acl ComputeSecurityRule#acl}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#description ComputeSecurityRule#description}.

---

##### `DstIpAddressPrefixes`<sup>Optional</sup> <a name="DstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes"></a>

```go
DstIpAddressPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}.

---

##### `DstVnicSet`<sup>Optional</sup> <a name="DstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet"></a>

```go
DstVnicSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#enabled ComputeSecurityRule#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#id ComputeSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `SecurityProtocols`<sup>Optional</sup> <a name="SecurityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols"></a>

```go
SecurityProtocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}.

---

##### `SrcIpAddressPrefixes`<sup>Optional</sup> <a name="SrcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes"></a>

```go
SrcIpAddressPrefixes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}.

---

##### `SrcVnicSet`<sup>Optional</sup> <a name="SrcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet"></a>

```go
SrcVnicSet *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags"></a>

```go
Tags *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#tags ComputeSecurityRule#tags}.

---



