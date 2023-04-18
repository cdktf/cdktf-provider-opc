# `opc_lbaas_policy`

Refer to the Terraform Registory for docs: [`opc_lbaas_policy`](https://www.terraform.io/docs/providers/opc/r/lbaas_policy).

# `lbaasPolicy` Submodule <a name="`lbaasPolicy` Submodule" id="@cdktf/provider-opc.lbaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasPolicy <a name="LbaasPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy opc_lbaas_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicy(scope Construct, id *string, config LbaasPolicyConfig) LbaasPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig">LbaasPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig">LbaasPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy">PutApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy">PutCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy">PutLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy">PutLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy">PutRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy">PutRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy">PutResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy">PutSetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy">PutSslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy">PutTrustedCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetApplicationCookieStickinessPolicy">ResetApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetCloudgatePolicy">ResetCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancerCookieStickinessPolicy">ResetLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancingMechanismPolicy">ResetLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRateLimitingRequestPolicy">ResetRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRedirectPolicy">ResetRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetResourceAccessControlPolicy">ResetResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSetRequestHeaderPolicy">ResetSetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSslNegotiationPolicy">ResetSslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetTrustedCertificatePolicy">ResetTrustedCertificatePolicy</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutApplicationCookieStickinessPolicy` <a name="PutApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy"></a>

```go
func PutApplicationCookieStickinessPolicy(value LbaasPolicyApplicationCookieStickinessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `PutCloudgatePolicy` <a name="PutCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy"></a>

```go
func PutCloudgatePolicy(value LbaasPolicyCloudgatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `PutLoadBalancerCookieStickinessPolicy` <a name="PutLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy"></a>

```go
func PutLoadBalancerCookieStickinessPolicy(value LbaasPolicyLoadBalancerCookieStickinessPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `PutLoadBalancingMechanismPolicy` <a name="PutLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy"></a>

```go
func PutLoadBalancingMechanismPolicy(value LbaasPolicyLoadBalancingMechanismPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `PutRateLimitingRequestPolicy` <a name="PutRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy"></a>

```go
func PutRateLimitingRequestPolicy(value LbaasPolicyRateLimitingRequestPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `PutRedirectPolicy` <a name="PutRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy"></a>

```go
func PutRedirectPolicy(value LbaasPolicyRedirectPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `PutResourceAccessControlPolicy` <a name="PutResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy"></a>

```go
func PutResourceAccessControlPolicy(value LbaasPolicyResourceAccessControlPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `PutSetRequestHeaderPolicy` <a name="PutSetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy"></a>

```go
func PutSetRequestHeaderPolicy(value LbaasPolicySetRequestHeaderPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `PutSslNegotiationPolicy` <a name="PutSslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy"></a>

```go
func PutSslNegotiationPolicy(value LbaasPolicySslNegotiationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `PutTrustedCertificatePolicy` <a name="PutTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy"></a>

```go
func PutTrustedCertificatePolicy(value LbaasPolicyTrustedCertificatePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `ResetApplicationCookieStickinessPolicy` <a name="ResetApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetApplicationCookieStickinessPolicy"></a>

```go
func ResetApplicationCookieStickinessPolicy()
```

##### `ResetCloudgatePolicy` <a name="ResetCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetCloudgatePolicy"></a>

```go
func ResetCloudgatePolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLoadBalancerCookieStickinessPolicy` <a name="ResetLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancerCookieStickinessPolicy"></a>

```go
func ResetLoadBalancerCookieStickinessPolicy()
```

##### `ResetLoadBalancingMechanismPolicy` <a name="ResetLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancingMechanismPolicy"></a>

```go
func ResetLoadBalancingMechanismPolicy()
```

##### `ResetRateLimitingRequestPolicy` <a name="ResetRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRateLimitingRequestPolicy"></a>

```go
func ResetRateLimitingRequestPolicy()
```

##### `ResetRedirectPolicy` <a name="ResetRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRedirectPolicy"></a>

```go
func ResetRedirectPolicy()
```

##### `ResetResourceAccessControlPolicy` <a name="ResetResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetResourceAccessControlPolicy"></a>

```go
func ResetResourceAccessControlPolicy()
```

##### `ResetSetRequestHeaderPolicy` <a name="ResetSetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSetRequestHeaderPolicy"></a>

```go
func ResetSetRequestHeaderPolicy()
```

##### `ResetSslNegotiationPolicy` <a name="ResetSslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSslNegotiationPolicy"></a>

```go
func ResetSslNegotiationPolicy()
```

##### `ResetTrustedCertificatePolicy` <a name="ResetTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetTrustedCertificatePolicy"></a>

```go
func ResetTrustedCertificatePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.LbaasPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.LbaasPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.LbaasPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy">ApplicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy">CloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy">LoadBalancerCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy">LoadBalancingMechanismPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy">RateLimitingRequestPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy">RedirectPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy">ResourceAccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy">SetRequestHeaderPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy">SslNegotiationPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state">State</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy">TrustedCertificatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput">ApplicationCookieStickinessPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput">CloudgatePolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput">LoadBalancerCookieStickinessPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput">LoadBalancingMechanismPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput">RateLimitingRequestPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput">RedirectPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput">ResourceAccessControlPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput">SetRequestHeaderPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput">SslNegotiationPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput">TrustedCertificatePolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer">LoadBalancer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApplicationCookieStickinessPolicy`<sup>Required</sup> <a name="ApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy"></a>

```go
func ApplicationCookieStickinessPolicy() LbaasPolicyApplicationCookieStickinessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a>

---

##### `CloudgatePolicy`<sup>Required</sup> <a name="CloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy"></a>

```go
func CloudgatePolicy() LbaasPolicyCloudgatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a>

---

##### `LoadBalancerCookieStickinessPolicy`<sup>Required</sup> <a name="LoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy"></a>

```go
func LoadBalancerCookieStickinessPolicy() LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a>

---

##### `LoadBalancingMechanismPolicy`<sup>Required</sup> <a name="LoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy"></a>

```go
func LoadBalancingMechanismPolicy() LbaasPolicyLoadBalancingMechanismPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a>

---

##### `RateLimitingRequestPolicy`<sup>Required</sup> <a name="RateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy"></a>

```go
func RateLimitingRequestPolicy() LbaasPolicyRateLimitingRequestPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a>

---

##### `RedirectPolicy`<sup>Required</sup> <a name="RedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy"></a>

```go
func RedirectPolicy() LbaasPolicyRedirectPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a>

---

##### `ResourceAccessControlPolicy`<sup>Required</sup> <a name="ResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy"></a>

```go
func ResourceAccessControlPolicy() LbaasPolicyResourceAccessControlPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a>

---

##### `SetRequestHeaderPolicy`<sup>Required</sup> <a name="SetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy"></a>

```go
func SetRequestHeaderPolicy() LbaasPolicySetRequestHeaderPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a>

---

##### `SslNegotiationPolicy`<sup>Required</sup> <a name="SslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy"></a>

```go
func SslNegotiationPolicy() LbaasPolicySslNegotiationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state"></a>

```go
func State() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `TrustedCertificatePolicy`<sup>Required</sup> <a name="TrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy"></a>

```go
func TrustedCertificatePolicy() LbaasPolicyTrustedCertificatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `ApplicationCookieStickinessPolicyInput`<sup>Optional</sup> <a name="ApplicationCookieStickinessPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput"></a>

```go
func ApplicationCookieStickinessPolicyInput() LbaasPolicyApplicationCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `CloudgatePolicyInput`<sup>Optional</sup> <a name="CloudgatePolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput"></a>

```go
func CloudgatePolicyInput() LbaasPolicyCloudgatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LoadBalancerCookieStickinessPolicyInput`<sup>Optional</sup> <a name="LoadBalancerCookieStickinessPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput"></a>

```go
func LoadBalancerCookieStickinessPolicyInput() LbaasPolicyLoadBalancerCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput"></a>

```go
func LoadBalancerInput() *string
```

- *Type:* *string

---

##### `LoadBalancingMechanismPolicyInput`<sup>Optional</sup> <a name="LoadBalancingMechanismPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput"></a>

```go
func LoadBalancingMechanismPolicyInput() LbaasPolicyLoadBalancingMechanismPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RateLimitingRequestPolicyInput`<sup>Optional</sup> <a name="RateLimitingRequestPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput"></a>

```go
func RateLimitingRequestPolicyInput() LbaasPolicyRateLimitingRequestPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `RedirectPolicyInput`<sup>Optional</sup> <a name="RedirectPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput"></a>

```go
func RedirectPolicyInput() LbaasPolicyRedirectPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `ResourceAccessControlPolicyInput`<sup>Optional</sup> <a name="ResourceAccessControlPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput"></a>

```go
func ResourceAccessControlPolicyInput() LbaasPolicyResourceAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `SetRequestHeaderPolicyInput`<sup>Optional</sup> <a name="SetRequestHeaderPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput"></a>

```go
func SetRequestHeaderPolicyInput() LbaasPolicySetRequestHeaderPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `SslNegotiationPolicyInput`<sup>Optional</sup> <a name="SslNegotiationPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput"></a>

```go
func SslNegotiationPolicyInput() LbaasPolicySslNegotiationPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `TrustedCertificatePolicyInput`<sup>Optional</sup> <a name="TrustedCertificatePolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput"></a>

```go
func TrustedCertificatePolicyInput() LbaasPolicyTrustedCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer"></a>

```go
func LoadBalancer() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasPolicyApplicationCookieStickinessPolicy <a name="LbaasPolicyApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyApplicationCookieStickinessPolicy {
	CookieName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName">CookieName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_name LbaasPolicy#cookie_name}. |

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName"></a>

```go
CookieName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_name LbaasPolicy#cookie_name}.

---

### LbaasPolicyCloudgatePolicy <a name="LbaasPolicyCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyCloudgatePolicy {
	VirtualHostnameForPolicyAttribution: *string,
	CloudgateApplication: *string,
	CloudgatePolicyName: *string,
	IdentityServiceInstanceGuid: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution">VirtualHostnameForPolicyAttribution</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication">CloudgateApplication</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName">CloudgatePolicyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid">IdentityServiceInstanceGuid</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}. |

---

##### `VirtualHostnameForPolicyAttribution`<sup>Required</sup> <a name="VirtualHostnameForPolicyAttribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution"></a>

```go
VirtualHostnameForPolicyAttribution *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}.

---

##### `CloudgateApplication`<sup>Optional</sup> <a name="CloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication"></a>

```go
CloudgateApplication *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}.

---

##### `CloudgatePolicyName`<sup>Optional</sup> <a name="CloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName"></a>

```go
CloudgatePolicyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}.

---

##### `IdentityServiceInstanceGuid`<sup>Optional</sup> <a name="IdentityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid"></a>

```go
IdentityServiceInstanceGuid *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}.

---

### LbaasPolicyConfig <a name="LbaasPolicyConfig" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	LoadBalancer: *string,
	Name: *string,
	ApplicationCookieStickinessPolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy,
	CloudgatePolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicyCloudgatePolicy,
	Id: *string,
	LoadBalancerCookieStickinessPolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy,
	LoadBalancingMechanismPolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy,
	RateLimitingRequestPolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy,
	RedirectPolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicyRedirectPolicy,
	ResourceAccessControlPolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy,
	SetRequestHeaderPolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy,
	SslNegotiationPolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicySslNegotiationPolicy,
	TrustedCertificatePolicy: github.com/cdktf/cdktf-provider-opc-go/opc/v4.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer">LoadBalancer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy">ApplicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | application_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy">CloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | cloudgate_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancerCookieStickinessPolicy">LoadBalancerCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | load_balancer_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancingMechanismPolicy">LoadBalancingMechanismPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | load_balancing_mechanism_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.rateLimitingRequestPolicy">RateLimitingRequestPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | rate_limiting_request_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.redirectPolicy">RedirectPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | redirect_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.resourceAccessControlPolicy">ResourceAccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | resource_access_control_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.setRequestHeaderPolicy">SetRequestHeaderPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | set_request_header_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.sslNegotiationPolicy">SslNegotiationPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | ssl_negotiation_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.trustedCertificatePolicy">TrustedCertificatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | trusted_certificate_policy block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer"></a>

```go
LoadBalancer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}.

---

##### `ApplicationCookieStickinessPolicy`<sup>Optional</sup> <a name="ApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy"></a>

```go
ApplicationCookieStickinessPolicy LbaasPolicyApplicationCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

application_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#application_cookie_stickiness_policy LbaasPolicy#application_cookie_stickiness_policy}

---

##### `CloudgatePolicy`<sup>Optional</sup> <a name="CloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy"></a>

```go
CloudgatePolicy LbaasPolicyCloudgatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

cloudgate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy LbaasPolicy#cloudgate_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerCookieStickinessPolicy`<sup>Optional</sup> <a name="LoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancerCookieStickinessPolicy"></a>

```go
LoadBalancerCookieStickinessPolicy LbaasPolicyLoadBalancerCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

load_balancer_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer_cookie_stickiness_policy LbaasPolicy#load_balancer_cookie_stickiness_policy}

---

##### `LoadBalancingMechanismPolicy`<sup>Optional</sup> <a name="LoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancingMechanismPolicy"></a>

```go
LoadBalancingMechanismPolicy LbaasPolicyLoadBalancingMechanismPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

load_balancing_mechanism_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism_policy LbaasPolicy#load_balancing_mechanism_policy}

---

##### `RateLimitingRequestPolicy`<sup>Optional</sup> <a name="RateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.rateLimitingRequestPolicy"></a>

```go
RateLimitingRequestPolicy LbaasPolicyRateLimitingRequestPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

rate_limiting_request_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_request_policy LbaasPolicy#rate_limiting_request_policy}

---

##### `RedirectPolicy`<sup>Optional</sup> <a name="RedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.redirectPolicy"></a>

```go
RedirectPolicy LbaasPolicyRedirectPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

redirect_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_policy LbaasPolicy#redirect_policy}

---

##### `ResourceAccessControlPolicy`<sup>Optional</sup> <a name="ResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.resourceAccessControlPolicy"></a>

```go
ResourceAccessControlPolicy LbaasPolicyResourceAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

resource_access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#resource_access_control_policy LbaasPolicy#resource_access_control_policy}

---

##### `SetRequestHeaderPolicy`<sup>Optional</sup> <a name="SetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.setRequestHeaderPolicy"></a>

```go
SetRequestHeaderPolicy LbaasPolicySetRequestHeaderPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

set_request_header_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#set_request_header_policy LbaasPolicy#set_request_header_policy}

---

##### `SslNegotiationPolicy`<sup>Optional</sup> <a name="SslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.sslNegotiationPolicy"></a>

```go
SslNegotiationPolicy LbaasPolicySslNegotiationPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

ssl_negotiation_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_negotiation_policy LbaasPolicy#ssl_negotiation_policy}

---

##### `TrustedCertificatePolicy`<sup>Optional</sup> <a name="TrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.trustedCertificatePolicy"></a>

```go
TrustedCertificatePolicy LbaasPolicyTrustedCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

trusted_certificate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate_policy LbaasPolicy#trusted_certificate_policy}

---

### LbaasPolicyLoadBalancerCookieStickinessPolicy <a name="LbaasPolicyLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy {
	CookieExpirationPeriod: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod">CookieExpirationPeriod</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}. |

---

##### `CookieExpirationPeriod`<sup>Required</sup> <a name="CookieExpirationPeriod" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```go
CookieExpirationPeriod *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}.

---

### LbaasPolicyLoadBalancingMechanismPolicy <a name="LbaasPolicyLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyLoadBalancingMechanismPolicy {
	LoadBalancingMechanism: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism">LoadBalancingMechanism</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}. |

---

##### `LoadBalancingMechanism`<sup>Required</sup> <a name="LoadBalancingMechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism"></a>

```go
LoadBalancingMechanism *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}.

---

### LbaasPolicyRateLimitingRequestPolicy <a name="LbaasPolicyRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyRateLimitingRequestPolicy {
	BurstSize: *f64,
	DelayExcessiveRequests: interface{},
	RequestsPerSecond: *f64,
	Zone: *string,
	HttpErrorCode: *f64,
	LoggingLevel: *string,
	RateLimitingCriteria: *string,
	ZoneMemorySize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize">BurstSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#burst_size LbaasPolicy#burst_size}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests">DelayExcessiveRequests</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone LbaasPolicy#zone}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode">HttpErrorCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#http_error_code LbaasPolicy#http_error_code}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#logging_level LbaasPolicy#logging_level}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria">RateLimitingCriteria</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize">ZoneMemorySize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}. |

---

##### `BurstSize`<sup>Required</sup> <a name="BurstSize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize"></a>

```go
BurstSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#burst_size LbaasPolicy#burst_size}.

---

##### `DelayExcessiveRequests`<sup>Required</sup> <a name="DelayExcessiveRequests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests"></a>

```go
DelayExcessiveRequests interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}.

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond"></a>

```go
RequestsPerSecond *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}.

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone LbaasPolicy#zone}.

---

##### `HttpErrorCode`<sup>Optional</sup> <a name="HttpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode"></a>

```go
HttpErrorCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#http_error_code LbaasPolicy#http_error_code}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel"></a>

```go
LoggingLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#logging_level LbaasPolicy#logging_level}.

---

##### `RateLimitingCriteria`<sup>Optional</sup> <a name="RateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria"></a>

```go
RateLimitingCriteria *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}.

---

##### `ZoneMemorySize`<sup>Optional</sup> <a name="ZoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize"></a>

```go
ZoneMemorySize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}.

---

### LbaasPolicyRedirectPolicy <a name="LbaasPolicyRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyRedirectPolicy {
	RedirectUri: *string,
	ResponseCode: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#response_code LbaasPolicy#response_code}. |

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri"></a>

```go
RedirectUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}.

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode"></a>

```go
ResponseCode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#response_code LbaasPolicy#response_code}.

---

### LbaasPolicyResourceAccessControlPolicy <a name="LbaasPolicyResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyResourceAccessControlPolicy {
	Disposition: *string,
	DeniedClients: *[]*string,
	PermittedClients: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition">Disposition</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#disposition LbaasPolicy#disposition}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients">DeniedClients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#denied_clients LbaasPolicy#denied_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients">PermittedClients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}. |

---

##### `Disposition`<sup>Required</sup> <a name="Disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition"></a>

```go
Disposition *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#disposition LbaasPolicy#disposition}.

---

##### `DeniedClients`<sup>Optional</sup> <a name="DeniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients"></a>

```go
DeniedClients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#denied_clients LbaasPolicy#denied_clients}.

---

##### `PermittedClients`<sup>Optional</sup> <a name="PermittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients"></a>

```go
PermittedClients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}.

---

### LbaasPolicySetRequestHeaderPolicy <a name="LbaasPolicySetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicySetRequestHeaderPolicy {
	HeaderName: *string,
	ActionWhenHeaderExists: *string,
	ActionWhenHeaderValueIs: *[]*string,
	ActionWhenHeaderValueIsNot: *[]*string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName">HeaderName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#header_name LbaasPolicy#header_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists">ActionWhenHeaderExists</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs">ActionWhenHeaderValueIs</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot">ActionWhenHeaderValueIsNot</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#value LbaasPolicy#value}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName"></a>

```go
HeaderName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#header_name LbaasPolicy#header_name}.

---

##### `ActionWhenHeaderExists`<sup>Optional</sup> <a name="ActionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists"></a>

```go
ActionWhenHeaderExists *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}.

---

##### `ActionWhenHeaderValueIs`<sup>Optional</sup> <a name="ActionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs"></a>

```go
ActionWhenHeaderValueIs *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}.

---

##### `ActionWhenHeaderValueIsNot`<sup>Optional</sup> <a name="ActionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot"></a>

```go
ActionWhenHeaderValueIsNot *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#value LbaasPolicy#value}.

---

### LbaasPolicySslNegotiationPolicy <a name="LbaasPolicySslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicySslNegotiationPolicy {
	Port: *f64,
	SslProtocol: *[]*string,
	ServerOrderPreference: *string,
	SslCiphers: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#port LbaasPolicy#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol">SslProtocol</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers">SslCiphers</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#port LbaasPolicy#port}.

---

##### `SslProtocol`<sup>Required</sup> <a name="SslProtocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol"></a>

```go
SslProtocol *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}.

---

##### `ServerOrderPreference`<sup>Optional</sup> <a name="ServerOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference"></a>

```go
ServerOrderPreference *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}.

---

##### `SslCiphers`<sup>Optional</sup> <a name="SslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers"></a>

```go
SslCiphers *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}.

---

### LbaasPolicyTrustedCertificatePolicy <a name="LbaasPolicyTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

&lbaaspolicy.LbaasPolicyTrustedCertificatePolicy {
	TrustedCertificate: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate">TrustedCertificate</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}. |

---

##### `TrustedCertificate`<sup>Required</sup> <a name="TrustedCertificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate"></a>

```go
TrustedCertificate *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasPolicyApplicationCookieStickinessPolicyOutputReference <a name="LbaasPolicyApplicationCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicyApplicationCookieStickinessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicyApplicationCookieStickinessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName">CookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput"></a>

```go
func CookieNameInput() *string
```

- *Type:* *string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName"></a>

```go
func CookieName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicyApplicationCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---


### LbaasPolicyCloudgatePolicyOutputReference <a name="LbaasPolicyCloudgatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicyCloudgatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicyCloudgatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgateApplication">ResetCloudgateApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgatePolicyName">ResetCloudgatePolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetIdentityServiceInstanceGuid">ResetIdentityServiceInstanceGuid</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudgateApplication` <a name="ResetCloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgateApplication"></a>

```go
func ResetCloudgateApplication()
```

##### `ResetCloudgatePolicyName` <a name="ResetCloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgatePolicyName"></a>

```go
func ResetCloudgatePolicyName()
```

##### `ResetIdentityServiceInstanceGuid` <a name="ResetIdentityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetIdentityServiceInstanceGuid"></a>

```go
func ResetIdentityServiceInstanceGuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput">CloudgateApplicationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput">CloudgatePolicyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput">IdentityServiceInstanceGuidInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput">VirtualHostnameForPolicyAttributionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication">CloudgateApplication</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName">CloudgatePolicyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid">IdentityServiceInstanceGuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution">VirtualHostnameForPolicyAttribution</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudgateApplicationInput`<sup>Optional</sup> <a name="CloudgateApplicationInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput"></a>

```go
func CloudgateApplicationInput() *string
```

- *Type:* *string

---

##### `CloudgatePolicyNameInput`<sup>Optional</sup> <a name="CloudgatePolicyNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput"></a>

```go
func CloudgatePolicyNameInput() *string
```

- *Type:* *string

---

##### `IdentityServiceInstanceGuidInput`<sup>Optional</sup> <a name="IdentityServiceInstanceGuidInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput"></a>

```go
func IdentityServiceInstanceGuidInput() *string
```

- *Type:* *string

---

##### `VirtualHostnameForPolicyAttributionInput`<sup>Optional</sup> <a name="VirtualHostnameForPolicyAttributionInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput"></a>

```go
func VirtualHostnameForPolicyAttributionInput() *string
```

- *Type:* *string

---

##### `CloudgateApplication`<sup>Required</sup> <a name="CloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication"></a>

```go
func CloudgateApplication() *string
```

- *Type:* *string

---

##### `CloudgatePolicyName`<sup>Required</sup> <a name="CloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName"></a>

```go
func CloudgatePolicyName() *string
```

- *Type:* *string

---

##### `IdentityServiceInstanceGuid`<sup>Required</sup> <a name="IdentityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid"></a>

```go
func IdentityServiceInstanceGuid() *string
```

- *Type:* *string

---

##### `VirtualHostnameForPolicyAttribution`<sup>Required</sup> <a name="VirtualHostnameForPolicyAttribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution"></a>

```go
func VirtualHostnameForPolicyAttribution() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicyCloudgatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---


### LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference <a name="LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput">CookieExpirationPeriodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">CookieExpirationPeriod</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CookieExpirationPeriodInput`<sup>Optional</sup> <a name="CookieExpirationPeriodInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput"></a>

```go
func CookieExpirationPeriodInput() *f64
```

- *Type:* *f64

---

##### `CookieExpirationPeriod`<sup>Required</sup> <a name="CookieExpirationPeriod" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```go
func CookieExpirationPeriod() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicyLoadBalancerCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---


### LbaasPolicyLoadBalancingMechanismPolicyOutputReference <a name="LbaasPolicyLoadBalancingMechanismPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicyLoadBalancingMechanismPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicyLoadBalancingMechanismPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput">LoadBalancingMechanismInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism">LoadBalancingMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LoadBalancingMechanismInput`<sup>Optional</sup> <a name="LoadBalancingMechanismInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput"></a>

```go
func LoadBalancingMechanismInput() *string
```

- *Type:* *string

---

##### `LoadBalancingMechanism`<sup>Required</sup> <a name="LoadBalancingMechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism"></a>

```go
func LoadBalancingMechanism() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicyLoadBalancingMechanismPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---


### LbaasPolicyRateLimitingRequestPolicyOutputReference <a name="LbaasPolicyRateLimitingRequestPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicyRateLimitingRequestPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicyRateLimitingRequestPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetHttpErrorCode">ResetHttpErrorCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetLoggingLevel">ResetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetRateLimitingCriteria">ResetRateLimitingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetZoneMemorySize">ResetZoneMemorySize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpErrorCode` <a name="ResetHttpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetHttpErrorCode"></a>

```go
func ResetHttpErrorCode()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetLoggingLevel"></a>

```go
func ResetLoggingLevel()
```

##### `ResetRateLimitingCriteria` <a name="ResetRateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetRateLimitingCriteria"></a>

```go
func ResetRateLimitingCriteria()
```

##### `ResetZoneMemorySize` <a name="ResetZoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetZoneMemorySize"></a>

```go
func ResetZoneMemorySize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput">BurstSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput">DelayExcessiveRequestsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput">HttpErrorCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput">RateLimitingCriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput">RequestsPerSecondInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput">ZoneMemorySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize">BurstSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests">DelayExcessiveRequests</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode">HttpErrorCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria">RateLimitingCriteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize">ZoneMemorySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BurstSizeInput`<sup>Optional</sup> <a name="BurstSizeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput"></a>

```go
func BurstSizeInput() *f64
```

- *Type:* *f64

---

##### `DelayExcessiveRequestsInput`<sup>Optional</sup> <a name="DelayExcessiveRequestsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput"></a>

```go
func DelayExcessiveRequestsInput() interface{}
```

- *Type:* interface{}

---

##### `HttpErrorCodeInput`<sup>Optional</sup> <a name="HttpErrorCodeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput"></a>

```go
func HttpErrorCodeInput() *f64
```

- *Type:* *f64

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput"></a>

```go
func LoggingLevelInput() *string
```

- *Type:* *string

---

##### `RateLimitingCriteriaInput`<sup>Optional</sup> <a name="RateLimitingCriteriaInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput"></a>

```go
func RateLimitingCriteriaInput() *string
```

- *Type:* *string

---

##### `RequestsPerSecondInput`<sup>Optional</sup> <a name="RequestsPerSecondInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput"></a>

```go
func RequestsPerSecondInput() *f64
```

- *Type:* *f64

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `ZoneMemorySizeInput`<sup>Optional</sup> <a name="ZoneMemorySizeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput"></a>

```go
func ZoneMemorySizeInput() *f64
```

- *Type:* *f64

---

##### `BurstSize`<sup>Required</sup> <a name="BurstSize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize"></a>

```go
func BurstSize() *f64
```

- *Type:* *f64

---

##### `DelayExcessiveRequests`<sup>Required</sup> <a name="DelayExcessiveRequests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests"></a>

```go
func DelayExcessiveRequests() interface{}
```

- *Type:* interface{}

---

##### `HttpErrorCode`<sup>Required</sup> <a name="HttpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode"></a>

```go
func HttpErrorCode() *f64
```

- *Type:* *f64

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel"></a>

```go
func LoggingLevel() *string
```

- *Type:* *string

---

##### `RateLimitingCriteria`<sup>Required</sup> <a name="RateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria"></a>

```go
func RateLimitingCriteria() *string
```

- *Type:* *string

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond"></a>

```go
func RequestsPerSecond() *f64
```

- *Type:* *f64

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

##### `ZoneMemorySize`<sup>Required</sup> <a name="ZoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize"></a>

```go
func ZoneMemorySize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicyRateLimitingRequestPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---


### LbaasPolicyRedirectPolicyOutputReference <a name="LbaasPolicyRedirectPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicyRedirectPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicyRedirectPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode">ResponseCode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput"></a>

```go
func RedirectUriInput() *string
```

- *Type:* *string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput"></a>

```go
func ResponseCodeInput() *f64
```

- *Type:* *f64

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri"></a>

```go
func RedirectUri() *string
```

- *Type:* *string

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode"></a>

```go
func ResponseCode() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicyRedirectPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---


### LbaasPolicyResourceAccessControlPolicyOutputReference <a name="LbaasPolicyResourceAccessControlPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicyResourceAccessControlPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicyResourceAccessControlPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetDeniedClients">ResetDeniedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetPermittedClients">ResetPermittedClients</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeniedClients` <a name="ResetDeniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetDeniedClients"></a>

```go
func ResetDeniedClients()
```

##### `ResetPermittedClients` <a name="ResetPermittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetPermittedClients"></a>

```go
func ResetPermittedClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput">DeniedClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput">DispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput">PermittedClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients">DeniedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition">Disposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients">PermittedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DeniedClientsInput`<sup>Optional</sup> <a name="DeniedClientsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput"></a>

```go
func DeniedClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DispositionInput`<sup>Optional</sup> <a name="DispositionInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput"></a>

```go
func DispositionInput() *string
```

- *Type:* *string

---

##### `PermittedClientsInput`<sup>Optional</sup> <a name="PermittedClientsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput"></a>

```go
func PermittedClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DeniedClients`<sup>Required</sup> <a name="DeniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients"></a>

```go
func DeniedClients() *[]*string
```

- *Type:* *[]*string

---

##### `Disposition`<sup>Required</sup> <a name="Disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition"></a>

```go
func Disposition() *string
```

- *Type:* *string

---

##### `PermittedClients`<sup>Required</sup> <a name="PermittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients"></a>

```go
func PermittedClients() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicyResourceAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---


### LbaasPolicySetRequestHeaderPolicyOutputReference <a name="LbaasPolicySetRequestHeaderPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicySetRequestHeaderPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicySetRequestHeaderPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderExists">ResetActionWhenHeaderExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIs">ResetActionWhenHeaderValueIs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIsNot">ResetActionWhenHeaderValueIsNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionWhenHeaderExists` <a name="ResetActionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderExists"></a>

```go
func ResetActionWhenHeaderExists()
```

##### `ResetActionWhenHeaderValueIs` <a name="ResetActionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIs"></a>

```go
func ResetActionWhenHeaderValueIs()
```

##### `ResetActionWhenHeaderValueIsNot` <a name="ResetActionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIsNot"></a>

```go
func ResetActionWhenHeaderValueIsNot()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput">ActionWhenHeaderExistsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput">ActionWhenHeaderValueIsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput">ActionWhenHeaderValueIsNotInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists">ActionWhenHeaderExists</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs">ActionWhenHeaderValueIs</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot">ActionWhenHeaderValueIsNot</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName">HeaderName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionWhenHeaderExistsInput`<sup>Optional</sup> <a name="ActionWhenHeaderExistsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput"></a>

```go
func ActionWhenHeaderExistsInput() *string
```

- *Type:* *string

---

##### `ActionWhenHeaderValueIsInput`<sup>Optional</sup> <a name="ActionWhenHeaderValueIsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput"></a>

```go
func ActionWhenHeaderValueIsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ActionWhenHeaderValueIsNotInput`<sup>Optional</sup> <a name="ActionWhenHeaderValueIsNotInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput"></a>

```go
func ActionWhenHeaderValueIsNotInput() *[]*string
```

- *Type:* *[]*string

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput"></a>

```go
func HeaderNameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `ActionWhenHeaderExists`<sup>Required</sup> <a name="ActionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists"></a>

```go
func ActionWhenHeaderExists() *string
```

- *Type:* *string

---

##### `ActionWhenHeaderValueIs`<sup>Required</sup> <a name="ActionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs"></a>

```go
func ActionWhenHeaderValueIs() *[]*string
```

- *Type:* *[]*string

---

##### `ActionWhenHeaderValueIsNot`<sup>Required</sup> <a name="ActionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot"></a>

```go
func ActionWhenHeaderValueIsNot() *[]*string
```

- *Type:* *[]*string

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName"></a>

```go
func HeaderName() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicySetRequestHeaderPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---


### LbaasPolicySslNegotiationPolicyOutputReference <a name="LbaasPolicySslNegotiationPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicySslNegotiationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicySslNegotiationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetServerOrderPreference">ResetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetSslCiphers">ResetSslCiphers</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerOrderPreference` <a name="ResetServerOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetServerOrderPreference"></a>

```go
func ResetServerOrderPreference()
```

##### `ResetSslCiphers` <a name="ResetSslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetSslCiphers"></a>

```go
func ResetSslCiphers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput">ServerOrderPreferenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput">SslCiphersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput">SslProtocolInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers">SslCiphers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol">SslProtocol</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ServerOrderPreferenceInput`<sup>Optional</sup> <a name="ServerOrderPreferenceInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput"></a>

```go
func ServerOrderPreferenceInput() *string
```

- *Type:* *string

---

##### `SslCiphersInput`<sup>Optional</sup> <a name="SslCiphersInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput"></a>

```go
func SslCiphersInput() *[]*string
```

- *Type:* *[]*string

---

##### `SslProtocolInput`<sup>Optional</sup> <a name="SslProtocolInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput"></a>

```go
func SslProtocolInput() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `ServerOrderPreference`<sup>Required</sup> <a name="ServerOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference"></a>

```go
func ServerOrderPreference() *string
```

- *Type:* *string

---

##### `SslCiphers`<sup>Required</sup> <a name="SslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers"></a>

```go
func SslCiphers() *[]*string
```

- *Type:* *[]*string

---

##### `SslProtocol`<sup>Required</sup> <a name="SslProtocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol"></a>

```go
func SslProtocol() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicySslNegotiationPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---


### LbaasPolicyTrustedCertificatePolicyOutputReference <a name="LbaasPolicyTrustedCertificatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/lbaaspolicy"

lbaaspolicy.NewLbaasPolicyTrustedCertificatePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) LbaasPolicyTrustedCertificatePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput">TrustedCertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate">TrustedCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TrustedCertificateInput`<sup>Optional</sup> <a name="TrustedCertificateInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput"></a>

```go
func TrustedCertificateInput() *string
```

- *Type:* *string

---

##### `TrustedCertificate`<sup>Required</sup> <a name="TrustedCertificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate"></a>

```go
func TrustedCertificate() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() LbaasPolicyTrustedCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---



