# `lbaasPolicy` Submodule <a name="`lbaasPolicy` Submodule" id="@cdktf/provider-opc.lbaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasPolicy <a name="LbaasPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy opc_lbaas_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicy(Construct Scope, string Id, LbaasPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig">LbaasPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutApplicationCookieStickinessPolicy` <a name="PutApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy"></a>

```csharp
private void PutApplicationCookieStickinessPolicy(LbaasPolicyApplicationCookieStickinessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `PutCloudgatePolicy` <a name="PutCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy"></a>

```csharp
private void PutCloudgatePolicy(LbaasPolicyCloudgatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `PutLoadBalancerCookieStickinessPolicy` <a name="PutLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy"></a>

```csharp
private void PutLoadBalancerCookieStickinessPolicy(LbaasPolicyLoadBalancerCookieStickinessPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `PutLoadBalancingMechanismPolicy` <a name="PutLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy"></a>

```csharp
private void PutLoadBalancingMechanismPolicy(LbaasPolicyLoadBalancingMechanismPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `PutRateLimitingRequestPolicy` <a name="PutRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy"></a>

```csharp
private void PutRateLimitingRequestPolicy(LbaasPolicyRateLimitingRequestPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `PutRedirectPolicy` <a name="PutRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy"></a>

```csharp
private void PutRedirectPolicy(LbaasPolicyRedirectPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `PutResourceAccessControlPolicy` <a name="PutResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy"></a>

```csharp
private void PutResourceAccessControlPolicy(LbaasPolicyResourceAccessControlPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `PutSetRequestHeaderPolicy` <a name="PutSetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy"></a>

```csharp
private void PutSetRequestHeaderPolicy(LbaasPolicySetRequestHeaderPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `PutSslNegotiationPolicy` <a name="PutSslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy"></a>

```csharp
private void PutSslNegotiationPolicy(LbaasPolicySslNegotiationPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `PutTrustedCertificatePolicy` <a name="PutTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy"></a>

```csharp
private void PutTrustedCertificatePolicy(LbaasPolicyTrustedCertificatePolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `ResetApplicationCookieStickinessPolicy` <a name="ResetApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetApplicationCookieStickinessPolicy"></a>

```csharp
private void ResetApplicationCookieStickinessPolicy()
```

##### `ResetCloudgatePolicy` <a name="ResetCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetCloudgatePolicy"></a>

```csharp
private void ResetCloudgatePolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLoadBalancerCookieStickinessPolicy` <a name="ResetLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancerCookieStickinessPolicy"></a>

```csharp
private void ResetLoadBalancerCookieStickinessPolicy()
```

##### `ResetLoadBalancingMechanismPolicy` <a name="ResetLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancingMechanismPolicy"></a>

```csharp
private void ResetLoadBalancingMechanismPolicy()
```

##### `ResetRateLimitingRequestPolicy` <a name="ResetRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRateLimitingRequestPolicy"></a>

```csharp
private void ResetRateLimitingRequestPolicy()
```

##### `ResetRedirectPolicy` <a name="ResetRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRedirectPolicy"></a>

```csharp
private void ResetRedirectPolicy()
```

##### `ResetResourceAccessControlPolicy` <a name="ResetResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetResourceAccessControlPolicy"></a>

```csharp
private void ResetResourceAccessControlPolicy()
```

##### `ResetSetRequestHeaderPolicy` <a name="ResetSetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSetRequestHeaderPolicy"></a>

```csharp
private void ResetSetRequestHeaderPolicy()
```

##### `ResetSslNegotiationPolicy` <a name="ResetSslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSslNegotiationPolicy"></a>

```csharp
private void ResetSslNegotiationPolicy()
```

##### `ResetTrustedCertificatePolicy` <a name="ResetTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetTrustedCertificatePolicy"></a>

```csharp
private void ResetTrustedCertificatePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

LbaasPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy">ApplicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy">CloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy">LoadBalancerCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy">LoadBalancingMechanismPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy">RateLimitingRequestPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy">RedirectPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy">ResourceAccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy">SetRequestHeaderPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy">SslNegotiationPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state">State</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy">TrustedCertificatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri">Uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput">ApplicationCookieStickinessPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput">CloudgatePolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput">LoadBalancerCookieStickinessPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput">LoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput">LoadBalancingMechanismPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput">RateLimitingRequestPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput">RedirectPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput">ResourceAccessControlPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput">SetRequestHeaderPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput">SslNegotiationPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput">TrustedCertificatePolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer">LoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApplicationCookieStickinessPolicy`<sup>Required</sup> <a name="ApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy"></a>

```csharp
public LbaasPolicyApplicationCookieStickinessPolicyOutputReference ApplicationCookieStickinessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a>

---

##### `CloudgatePolicy`<sup>Required</sup> <a name="CloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy"></a>

```csharp
public LbaasPolicyCloudgatePolicyOutputReference CloudgatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a>

---

##### `LoadBalancerCookieStickinessPolicy`<sup>Required</sup> <a name="LoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy"></a>

```csharp
public LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference LoadBalancerCookieStickinessPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a>

---

##### `LoadBalancingMechanismPolicy`<sup>Required</sup> <a name="LoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy"></a>

```csharp
public LbaasPolicyLoadBalancingMechanismPolicyOutputReference LoadBalancingMechanismPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a>

---

##### `RateLimitingRequestPolicy`<sup>Required</sup> <a name="RateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy"></a>

```csharp
public LbaasPolicyRateLimitingRequestPolicyOutputReference RateLimitingRequestPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a>

---

##### `RedirectPolicy`<sup>Required</sup> <a name="RedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy"></a>

```csharp
public LbaasPolicyRedirectPolicyOutputReference RedirectPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a>

---

##### `ResourceAccessControlPolicy`<sup>Required</sup> <a name="ResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy"></a>

```csharp
public LbaasPolicyResourceAccessControlPolicyOutputReference ResourceAccessControlPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a>

---

##### `SetRequestHeaderPolicy`<sup>Required</sup> <a name="SetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy"></a>

```csharp
public LbaasPolicySetRequestHeaderPolicyOutputReference SetRequestHeaderPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a>

---

##### `SslNegotiationPolicy`<sup>Required</sup> <a name="SslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy"></a>

```csharp
public LbaasPolicySslNegotiationPolicyOutputReference SslNegotiationPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state"></a>

```csharp
public IResolvable State { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `TrustedCertificatePolicy`<sup>Required</sup> <a name="TrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy"></a>

```csharp
public LbaasPolicyTrustedCertificatePolicyOutputReference TrustedCertificatePolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri"></a>

```csharp
public string Uri { get; }
```

- *Type:* string

---

##### `ApplicationCookieStickinessPolicyInput`<sup>Optional</sup> <a name="ApplicationCookieStickinessPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput"></a>

```csharp
public LbaasPolicyApplicationCookieStickinessPolicy ApplicationCookieStickinessPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `CloudgatePolicyInput`<sup>Optional</sup> <a name="CloudgatePolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput"></a>

```csharp
public LbaasPolicyCloudgatePolicy CloudgatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LoadBalancerCookieStickinessPolicyInput`<sup>Optional</sup> <a name="LoadBalancerCookieStickinessPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput"></a>

```csharp
public LbaasPolicyLoadBalancerCookieStickinessPolicy LoadBalancerCookieStickinessPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `LoadBalancerInput`<sup>Optional</sup> <a name="LoadBalancerInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput"></a>

```csharp
public string LoadBalancerInput { get; }
```

- *Type:* string

---

##### `LoadBalancingMechanismPolicyInput`<sup>Optional</sup> <a name="LoadBalancingMechanismPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput"></a>

```csharp
public LbaasPolicyLoadBalancingMechanismPolicy LoadBalancingMechanismPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RateLimitingRequestPolicyInput`<sup>Optional</sup> <a name="RateLimitingRequestPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput"></a>

```csharp
public LbaasPolicyRateLimitingRequestPolicy RateLimitingRequestPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `RedirectPolicyInput`<sup>Optional</sup> <a name="RedirectPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput"></a>

```csharp
public LbaasPolicyRedirectPolicy RedirectPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `ResourceAccessControlPolicyInput`<sup>Optional</sup> <a name="ResourceAccessControlPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput"></a>

```csharp
public LbaasPolicyResourceAccessControlPolicy ResourceAccessControlPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `SetRequestHeaderPolicyInput`<sup>Optional</sup> <a name="SetRequestHeaderPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput"></a>

```csharp
public LbaasPolicySetRequestHeaderPolicy SetRequestHeaderPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `SslNegotiationPolicyInput`<sup>Optional</sup> <a name="SslNegotiationPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput"></a>

```csharp
public LbaasPolicySslNegotiationPolicy SslNegotiationPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `TrustedCertificatePolicyInput`<sup>Optional</sup> <a name="TrustedCertificatePolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput"></a>

```csharp
public LbaasPolicyTrustedCertificatePolicy TrustedCertificatePolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer"></a>

```csharp
public string LoadBalancer { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasPolicyApplicationCookieStickinessPolicy <a name="LbaasPolicyApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyApplicationCookieStickinessPolicy {
    string CookieName
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName">CookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_name LbaasPolicy#cookie_name}. |

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName"></a>

```csharp
public string CookieName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_name LbaasPolicy#cookie_name}.

---

### LbaasPolicyCloudgatePolicy <a name="LbaasPolicyCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyCloudgatePolicy {
    string VirtualHostnameForPolicyAttribution,
    string CloudgateApplication = null,
    string CloudgatePolicyName = null,
    string IdentityServiceInstanceGuid = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution">VirtualHostnameForPolicyAttribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication">CloudgateApplication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName">CloudgatePolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid">IdentityServiceInstanceGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}. |

---

##### `VirtualHostnameForPolicyAttribution`<sup>Required</sup> <a name="VirtualHostnameForPolicyAttribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution"></a>

```csharp
public string VirtualHostnameForPolicyAttribution { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}.

---

##### `CloudgateApplication`<sup>Optional</sup> <a name="CloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication"></a>

```csharp
public string CloudgateApplication { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}.

---

##### `CloudgatePolicyName`<sup>Optional</sup> <a name="CloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName"></a>

```csharp
public string CloudgatePolicyName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}.

---

##### `IdentityServiceInstanceGuid`<sup>Optional</sup> <a name="IdentityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid"></a>

```csharp
public string IdentityServiceInstanceGuid { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}.

---

### LbaasPolicyConfig <a name="LbaasPolicyConfig" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string LoadBalancer,
    string Name,
    LbaasPolicyApplicationCookieStickinessPolicy ApplicationCookieStickinessPolicy = null,
    LbaasPolicyCloudgatePolicy CloudgatePolicy = null,
    string Id = null,
    LbaasPolicyLoadBalancerCookieStickinessPolicy LoadBalancerCookieStickinessPolicy = null,
    LbaasPolicyLoadBalancingMechanismPolicy LoadBalancingMechanismPolicy = null,
    LbaasPolicyRateLimitingRequestPolicy RateLimitingRequestPolicy = null,
    LbaasPolicyRedirectPolicy RedirectPolicy = null,
    LbaasPolicyResourceAccessControlPolicy ResourceAccessControlPolicy = null,
    LbaasPolicySetRequestHeaderPolicy SetRequestHeaderPolicy = null,
    LbaasPolicySslNegotiationPolicy SslNegotiationPolicy = null,
    LbaasPolicyTrustedCertificatePolicy TrustedCertificatePolicy = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer">LoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy">ApplicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | application_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy">CloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | cloudgate_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}. |
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

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `LoadBalancer`<sup>Required</sup> <a name="LoadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer"></a>

```csharp
public string LoadBalancer { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}.

---

##### `ApplicationCookieStickinessPolicy`<sup>Optional</sup> <a name="ApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy"></a>

```csharp
public LbaasPolicyApplicationCookieStickinessPolicy ApplicationCookieStickinessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

application_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#application_cookie_stickiness_policy LbaasPolicy#application_cookie_stickiness_policy}

---

##### `CloudgatePolicy`<sup>Optional</sup> <a name="CloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy"></a>

```csharp
public LbaasPolicyCloudgatePolicy CloudgatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

cloudgate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy LbaasPolicy#cloudgate_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LoadBalancerCookieStickinessPolicy`<sup>Optional</sup> <a name="LoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancerCookieStickinessPolicy"></a>

```csharp
public LbaasPolicyLoadBalancerCookieStickinessPolicy LoadBalancerCookieStickinessPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

load_balancer_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer_cookie_stickiness_policy LbaasPolicy#load_balancer_cookie_stickiness_policy}

---

##### `LoadBalancingMechanismPolicy`<sup>Optional</sup> <a name="LoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancingMechanismPolicy"></a>

```csharp
public LbaasPolicyLoadBalancingMechanismPolicy LoadBalancingMechanismPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

load_balancing_mechanism_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism_policy LbaasPolicy#load_balancing_mechanism_policy}

---

##### `RateLimitingRequestPolicy`<sup>Optional</sup> <a name="RateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.rateLimitingRequestPolicy"></a>

```csharp
public LbaasPolicyRateLimitingRequestPolicy RateLimitingRequestPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

rate_limiting_request_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_request_policy LbaasPolicy#rate_limiting_request_policy}

---

##### `RedirectPolicy`<sup>Optional</sup> <a name="RedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.redirectPolicy"></a>

```csharp
public LbaasPolicyRedirectPolicy RedirectPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

redirect_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_policy LbaasPolicy#redirect_policy}

---

##### `ResourceAccessControlPolicy`<sup>Optional</sup> <a name="ResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.resourceAccessControlPolicy"></a>

```csharp
public LbaasPolicyResourceAccessControlPolicy ResourceAccessControlPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

resource_access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#resource_access_control_policy LbaasPolicy#resource_access_control_policy}

---

##### `SetRequestHeaderPolicy`<sup>Optional</sup> <a name="SetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.setRequestHeaderPolicy"></a>

```csharp
public LbaasPolicySetRequestHeaderPolicy SetRequestHeaderPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

set_request_header_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#set_request_header_policy LbaasPolicy#set_request_header_policy}

---

##### `SslNegotiationPolicy`<sup>Optional</sup> <a name="SslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.sslNegotiationPolicy"></a>

```csharp
public LbaasPolicySslNegotiationPolicy SslNegotiationPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

ssl_negotiation_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_negotiation_policy LbaasPolicy#ssl_negotiation_policy}

---

##### `TrustedCertificatePolicy`<sup>Optional</sup> <a name="TrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.trustedCertificatePolicy"></a>

```csharp
public LbaasPolicyTrustedCertificatePolicy TrustedCertificatePolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

trusted_certificate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate_policy LbaasPolicy#trusted_certificate_policy}

---

### LbaasPolicyLoadBalancerCookieStickinessPolicy <a name="LbaasPolicyLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyLoadBalancerCookieStickinessPolicy {
    double CookieExpirationPeriod
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod">CookieExpirationPeriod</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}. |

---

##### `CookieExpirationPeriod`<sup>Required</sup> <a name="CookieExpirationPeriod" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```csharp
public double CookieExpirationPeriod { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}.

---

### LbaasPolicyLoadBalancingMechanismPolicy <a name="LbaasPolicyLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyLoadBalancingMechanismPolicy {
    string LoadBalancingMechanism
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism">LoadBalancingMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}. |

---

##### `LoadBalancingMechanism`<sup>Required</sup> <a name="LoadBalancingMechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism"></a>

```csharp
public string LoadBalancingMechanism { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}.

---

### LbaasPolicyRateLimitingRequestPolicy <a name="LbaasPolicyRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyRateLimitingRequestPolicy {
    double BurstSize,
    object DelayExcessiveRequests,
    double RequestsPerSecond,
    string Zone,
    double HttpErrorCode = null,
    string LoggingLevel = null,
    string RateLimitingCriteria = null,
    double ZoneMemorySize = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize">BurstSize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#burst_size LbaasPolicy#burst_size}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests">DelayExcessiveRequests</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone">Zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone LbaasPolicy#zone}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode">HttpErrorCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#http_error_code LbaasPolicy#http_error_code}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#logging_level LbaasPolicy#logging_level}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria">RateLimitingCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize">ZoneMemorySize</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}. |

---

##### `BurstSize`<sup>Required</sup> <a name="BurstSize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize"></a>

```csharp
public double BurstSize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#burst_size LbaasPolicy#burst_size}.

---

##### `DelayExcessiveRequests`<sup>Required</sup> <a name="DelayExcessiveRequests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests"></a>

```csharp
public object DelayExcessiveRequests { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}.

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond"></a>

```csharp
public double RequestsPerSecond { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}.

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone LbaasPolicy#zone}.

---

##### `HttpErrorCode`<sup>Optional</sup> <a name="HttpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode"></a>

```csharp
public double HttpErrorCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#http_error_code LbaasPolicy#http_error_code}.

---

##### `LoggingLevel`<sup>Optional</sup> <a name="LoggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#logging_level LbaasPolicy#logging_level}.

---

##### `RateLimitingCriteria`<sup>Optional</sup> <a name="RateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria"></a>

```csharp
public string RateLimitingCriteria { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}.

---

##### `ZoneMemorySize`<sup>Optional</sup> <a name="ZoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize"></a>

```csharp
public double ZoneMemorySize { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}.

---

### LbaasPolicyRedirectPolicy <a name="LbaasPolicyRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyRedirectPolicy {
    string RedirectUri,
    double ResponseCode
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri">RedirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode">ResponseCode</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#response_code LbaasPolicy#response_code}. |

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri"></a>

```csharp
public string RedirectUri { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}.

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode"></a>

```csharp
public double ResponseCode { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#response_code LbaasPolicy#response_code}.

---

### LbaasPolicyResourceAccessControlPolicy <a name="LbaasPolicyResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyResourceAccessControlPolicy {
    string Disposition,
    string[] DeniedClients = null,
    string[] PermittedClients = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition">Disposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#disposition LbaasPolicy#disposition}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients">DeniedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#denied_clients LbaasPolicy#denied_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients">PermittedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}. |

---

##### `Disposition`<sup>Required</sup> <a name="Disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition"></a>

```csharp
public string Disposition { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#disposition LbaasPolicy#disposition}.

---

##### `DeniedClients`<sup>Optional</sup> <a name="DeniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients"></a>

```csharp
public string[] DeniedClients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#denied_clients LbaasPolicy#denied_clients}.

---

##### `PermittedClients`<sup>Optional</sup> <a name="PermittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients"></a>

```csharp
public string[] PermittedClients { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}.

---

### LbaasPolicySetRequestHeaderPolicy <a name="LbaasPolicySetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicySetRequestHeaderPolicy {
    string HeaderName,
    string ActionWhenHeaderExists = null,
    string[] ActionWhenHeaderValueIs = null,
    string[] ActionWhenHeaderValueIsNot = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName">HeaderName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#header_name LbaasPolicy#header_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists">ActionWhenHeaderExists</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs">ActionWhenHeaderValueIs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot">ActionWhenHeaderValueIsNot</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#value LbaasPolicy#value}. |

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName"></a>

```csharp
public string HeaderName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#header_name LbaasPolicy#header_name}.

---

##### `ActionWhenHeaderExists`<sup>Optional</sup> <a name="ActionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists"></a>

```csharp
public string ActionWhenHeaderExists { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}.

---

##### `ActionWhenHeaderValueIs`<sup>Optional</sup> <a name="ActionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs"></a>

```csharp
public string[] ActionWhenHeaderValueIs { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}.

---

##### `ActionWhenHeaderValueIsNot`<sup>Optional</sup> <a name="ActionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot"></a>

```csharp
public string[] ActionWhenHeaderValueIsNot { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#value LbaasPolicy#value}.

---

### LbaasPolicySslNegotiationPolicy <a name="LbaasPolicySslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicySslNegotiationPolicy {
    double Port,
    string[] SslProtocol,
    string ServerOrderPreference = null,
    string[] SslCiphers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port">Port</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#port LbaasPolicy#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol">SslProtocol</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers">SslCiphers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}. |

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#port LbaasPolicy#port}.

---

##### `SslProtocol`<sup>Required</sup> <a name="SslProtocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol"></a>

```csharp
public string[] SslProtocol { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}.

---

##### `ServerOrderPreference`<sup>Optional</sup> <a name="ServerOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference"></a>

```csharp
public string ServerOrderPreference { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}.

---

##### `SslCiphers`<sup>Optional</sup> <a name="SslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers"></a>

```csharp
public string[] SslCiphers { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}.

---

### LbaasPolicyTrustedCertificatePolicy <a name="LbaasPolicyTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyTrustedCertificatePolicy {
    string TrustedCertificate
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate">TrustedCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}. |

---

##### `TrustedCertificate`<sup>Required</sup> <a name="TrustedCertificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate"></a>

```csharp
public string TrustedCertificate { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasPolicyApplicationCookieStickinessPolicyOutputReference <a name="LbaasPolicyApplicationCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyApplicationCookieStickinessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput">CookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName">CookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieNameInput`<sup>Optional</sup> <a name="CookieNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput"></a>

```csharp
public string CookieNameInput { get; }
```

- *Type:* string

---

##### `CookieName`<sup>Required</sup> <a name="CookieName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName"></a>

```csharp
public string CookieName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicyApplicationCookieStickinessPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---


### LbaasPolicyCloudgatePolicyOutputReference <a name="LbaasPolicyCloudgatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyCloudgatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCloudgateApplication` <a name="ResetCloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgateApplication"></a>

```csharp
private void ResetCloudgateApplication()
```

##### `ResetCloudgatePolicyName` <a name="ResetCloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgatePolicyName"></a>

```csharp
private void ResetCloudgatePolicyName()
```

##### `ResetIdentityServiceInstanceGuid` <a name="ResetIdentityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetIdentityServiceInstanceGuid"></a>

```csharp
private void ResetIdentityServiceInstanceGuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput">CloudgateApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput">CloudgatePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput">IdentityServiceInstanceGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput">VirtualHostnameForPolicyAttributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication">CloudgateApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName">CloudgatePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid">IdentityServiceInstanceGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution">VirtualHostnameForPolicyAttribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CloudgateApplicationInput`<sup>Optional</sup> <a name="CloudgateApplicationInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput"></a>

```csharp
public string CloudgateApplicationInput { get; }
```

- *Type:* string

---

##### `CloudgatePolicyNameInput`<sup>Optional</sup> <a name="CloudgatePolicyNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput"></a>

```csharp
public string CloudgatePolicyNameInput { get; }
```

- *Type:* string

---

##### `IdentityServiceInstanceGuidInput`<sup>Optional</sup> <a name="IdentityServiceInstanceGuidInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput"></a>

```csharp
public string IdentityServiceInstanceGuidInput { get; }
```

- *Type:* string

---

##### `VirtualHostnameForPolicyAttributionInput`<sup>Optional</sup> <a name="VirtualHostnameForPolicyAttributionInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput"></a>

```csharp
public string VirtualHostnameForPolicyAttributionInput { get; }
```

- *Type:* string

---

##### `CloudgateApplication`<sup>Required</sup> <a name="CloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication"></a>

```csharp
public string CloudgateApplication { get; }
```

- *Type:* string

---

##### `CloudgatePolicyName`<sup>Required</sup> <a name="CloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName"></a>

```csharp
public string CloudgatePolicyName { get; }
```

- *Type:* string

---

##### `IdentityServiceInstanceGuid`<sup>Required</sup> <a name="IdentityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid"></a>

```csharp
public string IdentityServiceInstanceGuid { get; }
```

- *Type:* string

---

##### `VirtualHostnameForPolicyAttribution`<sup>Required</sup> <a name="VirtualHostnameForPolicyAttribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution"></a>

```csharp
public string VirtualHostnameForPolicyAttribution { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicyCloudgatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---


### LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference <a name="LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput">CookieExpirationPeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">CookieExpirationPeriod</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CookieExpirationPeriodInput`<sup>Optional</sup> <a name="CookieExpirationPeriodInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput"></a>

```csharp
public double CookieExpirationPeriodInput { get; }
```

- *Type:* double

---

##### `CookieExpirationPeriod`<sup>Required</sup> <a name="CookieExpirationPeriod" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```csharp
public double CookieExpirationPeriod { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicyLoadBalancerCookieStickinessPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---


### LbaasPolicyLoadBalancingMechanismPolicyOutputReference <a name="LbaasPolicyLoadBalancingMechanismPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyLoadBalancingMechanismPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput">LoadBalancingMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism">LoadBalancingMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LoadBalancingMechanismInput`<sup>Optional</sup> <a name="LoadBalancingMechanismInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput"></a>

```csharp
public string LoadBalancingMechanismInput { get; }
```

- *Type:* string

---

##### `LoadBalancingMechanism`<sup>Required</sup> <a name="LoadBalancingMechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism"></a>

```csharp
public string LoadBalancingMechanism { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicyLoadBalancingMechanismPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---


### LbaasPolicyRateLimitingRequestPolicyOutputReference <a name="LbaasPolicyRateLimitingRequestPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyRateLimitingRequestPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHttpErrorCode` <a name="ResetHttpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetHttpErrorCode"></a>

```csharp
private void ResetHttpErrorCode()
```

##### `ResetLoggingLevel` <a name="ResetLoggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetLoggingLevel"></a>

```csharp
private void ResetLoggingLevel()
```

##### `ResetRateLimitingCriteria` <a name="ResetRateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetRateLimitingCriteria"></a>

```csharp
private void ResetRateLimitingCriteria()
```

##### `ResetZoneMemorySize` <a name="ResetZoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetZoneMemorySize"></a>

```csharp
private void ResetZoneMemorySize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput">BurstSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput">DelayExcessiveRequestsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput">HttpErrorCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput">LoggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput">RateLimitingCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput">RequestsPerSecondInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput">ZoneMemorySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize">BurstSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests">DelayExcessiveRequests</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode">HttpErrorCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel">LoggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria">RateLimitingCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond">RequestsPerSecond</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone">Zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize">ZoneMemorySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BurstSizeInput`<sup>Optional</sup> <a name="BurstSizeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput"></a>

```csharp
public double BurstSizeInput { get; }
```

- *Type:* double

---

##### `DelayExcessiveRequestsInput`<sup>Optional</sup> <a name="DelayExcessiveRequestsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput"></a>

```csharp
public object DelayExcessiveRequestsInput { get; }
```

- *Type:* object

---

##### `HttpErrorCodeInput`<sup>Optional</sup> <a name="HttpErrorCodeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput"></a>

```csharp
public double HttpErrorCodeInput { get; }
```

- *Type:* double

---

##### `LoggingLevelInput`<sup>Optional</sup> <a name="LoggingLevelInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput"></a>

```csharp
public string LoggingLevelInput { get; }
```

- *Type:* string

---

##### `RateLimitingCriteriaInput`<sup>Optional</sup> <a name="RateLimitingCriteriaInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput"></a>

```csharp
public string RateLimitingCriteriaInput { get; }
```

- *Type:* string

---

##### `RequestsPerSecondInput`<sup>Optional</sup> <a name="RequestsPerSecondInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput"></a>

```csharp
public double RequestsPerSecondInput { get; }
```

- *Type:* double

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `ZoneMemorySizeInput`<sup>Optional</sup> <a name="ZoneMemorySizeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput"></a>

```csharp
public double ZoneMemorySizeInput { get; }
```

- *Type:* double

---

##### `BurstSize`<sup>Required</sup> <a name="BurstSize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize"></a>

```csharp
public double BurstSize { get; }
```

- *Type:* double

---

##### `DelayExcessiveRequests`<sup>Required</sup> <a name="DelayExcessiveRequests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests"></a>

```csharp
public object DelayExcessiveRequests { get; }
```

- *Type:* object

---

##### `HttpErrorCode`<sup>Required</sup> <a name="HttpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode"></a>

```csharp
public double HttpErrorCode { get; }
```

- *Type:* double

---

##### `LoggingLevel`<sup>Required</sup> <a name="LoggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel"></a>

```csharp
public string LoggingLevel { get; }
```

- *Type:* string

---

##### `RateLimitingCriteria`<sup>Required</sup> <a name="RateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria"></a>

```csharp
public string RateLimitingCriteria { get; }
```

- *Type:* string

---

##### `RequestsPerSecond`<sup>Required</sup> <a name="RequestsPerSecond" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond"></a>

```csharp
public double RequestsPerSecond { get; }
```

- *Type:* double

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

##### `ZoneMemorySize`<sup>Required</sup> <a name="ZoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize"></a>

```csharp
public double ZoneMemorySize { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicyRateLimitingRequestPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---


### LbaasPolicyRedirectPolicyOutputReference <a name="LbaasPolicyRedirectPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyRedirectPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput">RedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput">ResponseCodeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri">RedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode">ResponseCode</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RedirectUriInput`<sup>Optional</sup> <a name="RedirectUriInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput"></a>

```csharp
public string RedirectUriInput { get; }
```

- *Type:* string

---

##### `ResponseCodeInput`<sup>Optional</sup> <a name="ResponseCodeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput"></a>

```csharp
public double ResponseCodeInput { get; }
```

- *Type:* double

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri"></a>

```csharp
public string RedirectUri { get; }
```

- *Type:* string

---

##### `ResponseCode`<sup>Required</sup> <a name="ResponseCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode"></a>

```csharp
public double ResponseCode { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicyRedirectPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---


### LbaasPolicyResourceAccessControlPolicyOutputReference <a name="LbaasPolicyResourceAccessControlPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyResourceAccessControlPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDeniedClients` <a name="ResetDeniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetDeniedClients"></a>

```csharp
private void ResetDeniedClients()
```

##### `ResetPermittedClients` <a name="ResetPermittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetPermittedClients"></a>

```csharp
private void ResetPermittedClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput">DeniedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput">DispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput">PermittedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients">DeniedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition">Disposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients">PermittedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DeniedClientsInput`<sup>Optional</sup> <a name="DeniedClientsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput"></a>

```csharp
public string[] DeniedClientsInput { get; }
```

- *Type:* string[]

---

##### `DispositionInput`<sup>Optional</sup> <a name="DispositionInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput"></a>

```csharp
public string DispositionInput { get; }
```

- *Type:* string

---

##### `PermittedClientsInput`<sup>Optional</sup> <a name="PermittedClientsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput"></a>

```csharp
public string[] PermittedClientsInput { get; }
```

- *Type:* string[]

---

##### `DeniedClients`<sup>Required</sup> <a name="DeniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients"></a>

```csharp
public string[] DeniedClients { get; }
```

- *Type:* string[]

---

##### `Disposition`<sup>Required</sup> <a name="Disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition"></a>

```csharp
public string Disposition { get; }
```

- *Type:* string

---

##### `PermittedClients`<sup>Required</sup> <a name="PermittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients"></a>

```csharp
public string[] PermittedClients { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicyResourceAccessControlPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---


### LbaasPolicySetRequestHeaderPolicyOutputReference <a name="LbaasPolicySetRequestHeaderPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicySetRequestHeaderPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetActionWhenHeaderExists` <a name="ResetActionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderExists"></a>

```csharp
private void ResetActionWhenHeaderExists()
```

##### `ResetActionWhenHeaderValueIs` <a name="ResetActionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIs"></a>

```csharp
private void ResetActionWhenHeaderValueIs()
```

##### `ResetActionWhenHeaderValueIsNot` <a name="ResetActionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIsNot"></a>

```csharp
private void ResetActionWhenHeaderValueIsNot()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput">ActionWhenHeaderExistsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput">ActionWhenHeaderValueIsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput">ActionWhenHeaderValueIsNotInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput">HeaderNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists">ActionWhenHeaderExists</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs">ActionWhenHeaderValueIs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot">ActionWhenHeaderValueIsNot</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName">HeaderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionWhenHeaderExistsInput`<sup>Optional</sup> <a name="ActionWhenHeaderExistsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput"></a>

```csharp
public string ActionWhenHeaderExistsInput { get; }
```

- *Type:* string

---

##### `ActionWhenHeaderValueIsInput`<sup>Optional</sup> <a name="ActionWhenHeaderValueIsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput"></a>

```csharp
public string[] ActionWhenHeaderValueIsInput { get; }
```

- *Type:* string[]

---

##### `ActionWhenHeaderValueIsNotInput`<sup>Optional</sup> <a name="ActionWhenHeaderValueIsNotInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput"></a>

```csharp
public string[] ActionWhenHeaderValueIsNotInput { get; }
```

- *Type:* string[]

---

##### `HeaderNameInput`<sup>Optional</sup> <a name="HeaderNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput"></a>

```csharp
public string HeaderNameInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `ActionWhenHeaderExists`<sup>Required</sup> <a name="ActionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists"></a>

```csharp
public string ActionWhenHeaderExists { get; }
```

- *Type:* string

---

##### `ActionWhenHeaderValueIs`<sup>Required</sup> <a name="ActionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs"></a>

```csharp
public string[] ActionWhenHeaderValueIs { get; }
```

- *Type:* string[]

---

##### `ActionWhenHeaderValueIsNot`<sup>Required</sup> <a name="ActionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot"></a>

```csharp
public string[] ActionWhenHeaderValueIsNot { get; }
```

- *Type:* string[]

---

##### `HeaderName`<sup>Required</sup> <a name="HeaderName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName"></a>

```csharp
public string HeaderName { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicySetRequestHeaderPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---


### LbaasPolicySslNegotiationPolicyOutputReference <a name="LbaasPolicySslNegotiationPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicySslNegotiationPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetServerOrderPreference` <a name="ResetServerOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetServerOrderPreference"></a>

```csharp
private void ResetServerOrderPreference()
```

##### `ResetSslCiphers` <a name="ResetSslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetSslCiphers"></a>

```csharp
private void ResetSslCiphers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput">ServerOrderPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput">SslCiphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput">SslProtocolInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference">ServerOrderPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers">SslCiphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol">SslProtocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServerOrderPreferenceInput`<sup>Optional</sup> <a name="ServerOrderPreferenceInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput"></a>

```csharp
public string ServerOrderPreferenceInput { get; }
```

- *Type:* string

---

##### `SslCiphersInput`<sup>Optional</sup> <a name="SslCiphersInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput"></a>

```csharp
public string[] SslCiphersInput { get; }
```

- *Type:* string[]

---

##### `SslProtocolInput`<sup>Optional</sup> <a name="SslProtocolInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput"></a>

```csharp
public string[] SslProtocolInput { get; }
```

- *Type:* string[]

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `ServerOrderPreference`<sup>Required</sup> <a name="ServerOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference"></a>

```csharp
public string ServerOrderPreference { get; }
```

- *Type:* string

---

##### `SslCiphers`<sup>Required</sup> <a name="SslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers"></a>

```csharp
public string[] SslCiphers { get; }
```

- *Type:* string[]

---

##### `SslProtocol`<sup>Required</sup> <a name="SslProtocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol"></a>

```csharp
public string[] SslProtocol { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicySslNegotiationPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---


### LbaasPolicyTrustedCertificatePolicyOutputReference <a name="LbaasPolicyTrustedCertificatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new LbaasPolicyTrustedCertificatePolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput">TrustedCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate">TrustedCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TrustedCertificateInput`<sup>Optional</sup> <a name="TrustedCertificateInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput"></a>

```csharp
public string TrustedCertificateInput { get; }
```

- *Type:* string

---

##### `TrustedCertificate`<sup>Required</sup> <a name="TrustedCertificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate"></a>

```csharp
public string TrustedCertificate { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue"></a>

```csharp
public LbaasPolicyTrustedCertificatePolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---



