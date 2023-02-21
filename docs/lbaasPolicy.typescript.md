# `lbaasPolicy` Submodule <a name="`lbaasPolicy` Submodule" id="@cdktf/provider-opc.lbaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasPolicy <a name="LbaasPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy opc_lbaas_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicy(scope: Construct, id: string, config: LbaasPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig">LbaasPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig">LbaasPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy">putApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy">putCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy">putLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy">putLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy">putRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy">putRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy">putResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy">putSetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy">putSslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy">putTrustedCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetApplicationCookieStickinessPolicy">resetApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetCloudgatePolicy">resetCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancerCookieStickinessPolicy">resetLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancingMechanismPolicy">resetLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRateLimitingRequestPolicy">resetRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRedirectPolicy">resetRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetResourceAccessControlPolicy">resetResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSetRequestHeaderPolicy">resetSetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSslNegotiationPolicy">resetSslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetTrustedCertificatePolicy">resetTrustedCertificatePolicy</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putApplicationCookieStickinessPolicy` <a name="putApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy"></a>

```typescript
public putApplicationCookieStickinessPolicy(value: LbaasPolicyApplicationCookieStickinessPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `putCloudgatePolicy` <a name="putCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy"></a>

```typescript
public putCloudgatePolicy(value: LbaasPolicyCloudgatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `putLoadBalancerCookieStickinessPolicy` <a name="putLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy"></a>

```typescript
public putLoadBalancerCookieStickinessPolicy(value: LbaasPolicyLoadBalancerCookieStickinessPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `putLoadBalancingMechanismPolicy` <a name="putLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy"></a>

```typescript
public putLoadBalancingMechanismPolicy(value: LbaasPolicyLoadBalancingMechanismPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `putRateLimitingRequestPolicy` <a name="putRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy"></a>

```typescript
public putRateLimitingRequestPolicy(value: LbaasPolicyRateLimitingRequestPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `putRedirectPolicy` <a name="putRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy"></a>

```typescript
public putRedirectPolicy(value: LbaasPolicyRedirectPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `putResourceAccessControlPolicy` <a name="putResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy"></a>

```typescript
public putResourceAccessControlPolicy(value: LbaasPolicyResourceAccessControlPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `putSetRequestHeaderPolicy` <a name="putSetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy"></a>

```typescript
public putSetRequestHeaderPolicy(value: LbaasPolicySetRequestHeaderPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `putSslNegotiationPolicy` <a name="putSslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy"></a>

```typescript
public putSslNegotiationPolicy(value: LbaasPolicySslNegotiationPolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `putTrustedCertificatePolicy` <a name="putTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy"></a>

```typescript
public putTrustedCertificatePolicy(value: LbaasPolicyTrustedCertificatePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `resetApplicationCookieStickinessPolicy` <a name="resetApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetApplicationCookieStickinessPolicy"></a>

```typescript
public resetApplicationCookieStickinessPolicy(): void
```

##### `resetCloudgatePolicy` <a name="resetCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetCloudgatePolicy"></a>

```typescript
public resetCloudgatePolicy(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLoadBalancerCookieStickinessPolicy` <a name="resetLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancerCookieStickinessPolicy"></a>

```typescript
public resetLoadBalancerCookieStickinessPolicy(): void
```

##### `resetLoadBalancingMechanismPolicy` <a name="resetLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancingMechanismPolicy"></a>

```typescript
public resetLoadBalancingMechanismPolicy(): void
```

##### `resetRateLimitingRequestPolicy` <a name="resetRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRateLimitingRequestPolicy"></a>

```typescript
public resetRateLimitingRequestPolicy(): void
```

##### `resetRedirectPolicy` <a name="resetRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRedirectPolicy"></a>

```typescript
public resetRedirectPolicy(): void
```

##### `resetResourceAccessControlPolicy` <a name="resetResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetResourceAccessControlPolicy"></a>

```typescript
public resetResourceAccessControlPolicy(): void
```

##### `resetSetRequestHeaderPolicy` <a name="resetSetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSetRequestHeaderPolicy"></a>

```typescript
public resetSetRequestHeaderPolicy(): void
```

##### `resetSslNegotiationPolicy` <a name="resetSslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSslNegotiationPolicy"></a>

```typescript
public resetSslNegotiationPolicy(): void
```

##### `resetTrustedCertificatePolicy` <a name="resetTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetTrustedCertificatePolicy"></a>

```typescript
public resetTrustedCertificatePolicy(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

lbaasPolicy.LbaasPolicy.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

lbaasPolicy.LbaasPolicy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

lbaasPolicy.LbaasPolicy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy">applicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy">cloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy">loadBalancerCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy">loadBalancingMechanismPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy">rateLimitingRequestPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy">redirectPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy">resourceAccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy">setRequestHeaderPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy">sslNegotiationPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state">state</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy">trustedCertificatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput">applicationCookieStickinessPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput">cloudgatePolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput">loadBalancerCookieStickinessPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput">loadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput">loadBalancingMechanismPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput">rateLimitingRequestPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput">redirectPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput">resourceAccessControlPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput">setRequestHeaderPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput">sslNegotiationPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput">trustedCertificatePolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationCookieStickinessPolicy`<sup>Required</sup> <a name="applicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy"></a>

```typescript
public readonly applicationCookieStickinessPolicy: LbaasPolicyApplicationCookieStickinessPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a>

---

##### `cloudgatePolicy`<sup>Required</sup> <a name="cloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy"></a>

```typescript
public readonly cloudgatePolicy: LbaasPolicyCloudgatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a>

---

##### `loadBalancerCookieStickinessPolicy`<sup>Required</sup> <a name="loadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy"></a>

```typescript
public readonly loadBalancerCookieStickinessPolicy: LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a>

---

##### `loadBalancingMechanismPolicy`<sup>Required</sup> <a name="loadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy"></a>

```typescript
public readonly loadBalancingMechanismPolicy: LbaasPolicyLoadBalancingMechanismPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a>

---

##### `rateLimitingRequestPolicy`<sup>Required</sup> <a name="rateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy"></a>

```typescript
public readonly rateLimitingRequestPolicy: LbaasPolicyRateLimitingRequestPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a>

---

##### `redirectPolicy`<sup>Required</sup> <a name="redirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy"></a>

```typescript
public readonly redirectPolicy: LbaasPolicyRedirectPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a>

---

##### `resourceAccessControlPolicy`<sup>Required</sup> <a name="resourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy"></a>

```typescript
public readonly resourceAccessControlPolicy: LbaasPolicyResourceAccessControlPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a>

---

##### `setRequestHeaderPolicy`<sup>Required</sup> <a name="setRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy"></a>

```typescript
public readonly setRequestHeaderPolicy: LbaasPolicySetRequestHeaderPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a>

---

##### `sslNegotiationPolicy`<sup>Required</sup> <a name="sslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy"></a>

```typescript
public readonly sslNegotiationPolicy: LbaasPolicySslNegotiationPolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state"></a>

```typescript
public readonly state: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `trustedCertificatePolicy`<sup>Required</sup> <a name="trustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy"></a>

```typescript
public readonly trustedCertificatePolicy: LbaasPolicyTrustedCertificatePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `applicationCookieStickinessPolicyInput`<sup>Optional</sup> <a name="applicationCookieStickinessPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput"></a>

```typescript
public readonly applicationCookieStickinessPolicyInput: LbaasPolicyApplicationCookieStickinessPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `cloudgatePolicyInput`<sup>Optional</sup> <a name="cloudgatePolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput"></a>

```typescript
public readonly cloudgatePolicyInput: LbaasPolicyCloudgatePolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerCookieStickinessPolicyInput`<sup>Optional</sup> <a name="loadBalancerCookieStickinessPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput"></a>

```typescript
public readonly loadBalancerCookieStickinessPolicyInput: LbaasPolicyLoadBalancerCookieStickinessPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: string;
```

- *Type:* string

---

##### `loadBalancingMechanismPolicyInput`<sup>Optional</sup> <a name="loadBalancingMechanismPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput"></a>

```typescript
public readonly loadBalancingMechanismPolicyInput: LbaasPolicyLoadBalancingMechanismPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rateLimitingRequestPolicyInput`<sup>Optional</sup> <a name="rateLimitingRequestPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput"></a>

```typescript
public readonly rateLimitingRequestPolicyInput: LbaasPolicyRateLimitingRequestPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `redirectPolicyInput`<sup>Optional</sup> <a name="redirectPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput"></a>

```typescript
public readonly redirectPolicyInput: LbaasPolicyRedirectPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `resourceAccessControlPolicyInput`<sup>Optional</sup> <a name="resourceAccessControlPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput"></a>

```typescript
public readonly resourceAccessControlPolicyInput: LbaasPolicyResourceAccessControlPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `setRequestHeaderPolicyInput`<sup>Optional</sup> <a name="setRequestHeaderPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput"></a>

```typescript
public readonly setRequestHeaderPolicyInput: LbaasPolicySetRequestHeaderPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `sslNegotiationPolicyInput`<sup>Optional</sup> <a name="sslNegotiationPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput"></a>

```typescript
public readonly sslNegotiationPolicyInput: LbaasPolicySslNegotiationPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `trustedCertificatePolicyInput`<sup>Optional</sup> <a name="trustedCertificatePolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput"></a>

```typescript
public readonly trustedCertificatePolicyInput: LbaasPolicyTrustedCertificatePolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasPolicyApplicationCookieStickinessPolicy <a name="LbaasPolicyApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyApplicationCookieStickinessPolicy: lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName">cookieName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_name LbaasPolicy#cookie_name}. |

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_name LbaasPolicy#cookie_name}.

---

### LbaasPolicyCloudgatePolicy <a name="LbaasPolicyCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyCloudgatePolicy: lbaasPolicy.LbaasPolicyCloudgatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution">virtualHostnameForPolicyAttribution</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication">cloudgateApplication</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName">cloudgatePolicyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid">identityServiceInstanceGuid</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}. |

---

##### `virtualHostnameForPolicyAttribution`<sup>Required</sup> <a name="virtualHostnameForPolicyAttribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution"></a>

```typescript
public readonly virtualHostnameForPolicyAttribution: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}.

---

##### `cloudgateApplication`<sup>Optional</sup> <a name="cloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication"></a>

```typescript
public readonly cloudgateApplication: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}.

---

##### `cloudgatePolicyName`<sup>Optional</sup> <a name="cloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName"></a>

```typescript
public readonly cloudgatePolicyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}.

---

##### `identityServiceInstanceGuid`<sup>Optional</sup> <a name="identityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid"></a>

```typescript
public readonly identityServiceInstanceGuid: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}.

---

### LbaasPolicyConfig <a name="LbaasPolicyConfig" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyConfig: lbaasPolicy.LbaasPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy">applicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | application_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy">cloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | cloudgate_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancerCookieStickinessPolicy">loadBalancerCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | load_balancer_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancingMechanismPolicy">loadBalancingMechanismPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | load_balancing_mechanism_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.rateLimitingRequestPolicy">rateLimitingRequestPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | rate_limiting_request_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.redirectPolicy">redirectPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | redirect_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.resourceAccessControlPolicy">resourceAccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | resource_access_control_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.setRequestHeaderPolicy">setRequestHeaderPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | set_request_header_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.sslNegotiationPolicy">sslNegotiationPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | ssl_negotiation_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.trustedCertificatePolicy">trustedCertificatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | trusted_certificate_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}.

---

##### `applicationCookieStickinessPolicy`<sup>Optional</sup> <a name="applicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy"></a>

```typescript
public readonly applicationCookieStickinessPolicy: LbaasPolicyApplicationCookieStickinessPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

application_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#application_cookie_stickiness_policy LbaasPolicy#application_cookie_stickiness_policy}

---

##### `cloudgatePolicy`<sup>Optional</sup> <a name="cloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy"></a>

```typescript
public readonly cloudgatePolicy: LbaasPolicyCloudgatePolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

cloudgate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy LbaasPolicy#cloudgate_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerCookieStickinessPolicy`<sup>Optional</sup> <a name="loadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancerCookieStickinessPolicy"></a>

```typescript
public readonly loadBalancerCookieStickinessPolicy: LbaasPolicyLoadBalancerCookieStickinessPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

load_balancer_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer_cookie_stickiness_policy LbaasPolicy#load_balancer_cookie_stickiness_policy}

---

##### `loadBalancingMechanismPolicy`<sup>Optional</sup> <a name="loadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancingMechanismPolicy"></a>

```typescript
public readonly loadBalancingMechanismPolicy: LbaasPolicyLoadBalancingMechanismPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

load_balancing_mechanism_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism_policy LbaasPolicy#load_balancing_mechanism_policy}

---

##### `rateLimitingRequestPolicy`<sup>Optional</sup> <a name="rateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.rateLimitingRequestPolicy"></a>

```typescript
public readonly rateLimitingRequestPolicy: LbaasPolicyRateLimitingRequestPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

rate_limiting_request_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_request_policy LbaasPolicy#rate_limiting_request_policy}

---

##### `redirectPolicy`<sup>Optional</sup> <a name="redirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.redirectPolicy"></a>

```typescript
public readonly redirectPolicy: LbaasPolicyRedirectPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

redirect_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_policy LbaasPolicy#redirect_policy}

---

##### `resourceAccessControlPolicy`<sup>Optional</sup> <a name="resourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.resourceAccessControlPolicy"></a>

```typescript
public readonly resourceAccessControlPolicy: LbaasPolicyResourceAccessControlPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

resource_access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#resource_access_control_policy LbaasPolicy#resource_access_control_policy}

---

##### `setRequestHeaderPolicy`<sup>Optional</sup> <a name="setRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.setRequestHeaderPolicy"></a>

```typescript
public readonly setRequestHeaderPolicy: LbaasPolicySetRequestHeaderPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

set_request_header_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#set_request_header_policy LbaasPolicy#set_request_header_policy}

---

##### `sslNegotiationPolicy`<sup>Optional</sup> <a name="sslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.sslNegotiationPolicy"></a>

```typescript
public readonly sslNegotiationPolicy: LbaasPolicySslNegotiationPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

ssl_negotiation_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_negotiation_policy LbaasPolicy#ssl_negotiation_policy}

---

##### `trustedCertificatePolicy`<sup>Optional</sup> <a name="trustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.trustedCertificatePolicy"></a>

```typescript
public readonly trustedCertificatePolicy: LbaasPolicyTrustedCertificatePolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

trusted_certificate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate_policy LbaasPolicy#trusted_certificate_policy}

---

### LbaasPolicyLoadBalancerCookieStickinessPolicy <a name="LbaasPolicyLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyLoadBalancerCookieStickinessPolicy: lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod">cookieExpirationPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}. |

---

##### `cookieExpirationPeriod`<sup>Required</sup> <a name="cookieExpirationPeriod" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```typescript
public readonly cookieExpirationPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}.

---

### LbaasPolicyLoadBalancingMechanismPolicy <a name="LbaasPolicyLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyLoadBalancingMechanismPolicy: lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism">loadBalancingMechanism</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}. |

---

##### `loadBalancingMechanism`<sup>Required</sup> <a name="loadBalancingMechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism"></a>

```typescript
public readonly loadBalancingMechanism: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}.

---

### LbaasPolicyRateLimitingRequestPolicy <a name="LbaasPolicyRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyRateLimitingRequestPolicy: lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize">burstSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#burst_size LbaasPolicy#burst_size}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests">delayExcessiveRequests</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond">requestsPerSecond</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone LbaasPolicy#zone}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode">httpErrorCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#http_error_code LbaasPolicy#http_error_code}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#logging_level LbaasPolicy#logging_level}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria">rateLimitingCriteria</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize">zoneMemorySize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}. |

---

##### `burstSize`<sup>Required</sup> <a name="burstSize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize"></a>

```typescript
public readonly burstSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#burst_size LbaasPolicy#burst_size}.

---

##### `delayExcessiveRequests`<sup>Required</sup> <a name="delayExcessiveRequests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests"></a>

```typescript
public readonly delayExcessiveRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}.

---

##### `requestsPerSecond`<sup>Required</sup> <a name="requestsPerSecond" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond"></a>

```typescript
public readonly requestsPerSecond: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}.

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone LbaasPolicy#zone}.

---

##### `httpErrorCode`<sup>Optional</sup> <a name="httpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode"></a>

```typescript
public readonly httpErrorCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#http_error_code LbaasPolicy#http_error_code}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#logging_level LbaasPolicy#logging_level}.

---

##### `rateLimitingCriteria`<sup>Optional</sup> <a name="rateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria"></a>

```typescript
public readonly rateLimitingCriteria: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}.

---

##### `zoneMemorySize`<sup>Optional</sup> <a name="zoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize"></a>

```typescript
public readonly zoneMemorySize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}.

---

### LbaasPolicyRedirectPolicy <a name="LbaasPolicyRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyRedirectPolicy: lbaasPolicy.LbaasPolicyRedirectPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri">redirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode">responseCode</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#response_code LbaasPolicy#response_code}. |

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}.

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#response_code LbaasPolicy#response_code}.

---

### LbaasPolicyResourceAccessControlPolicy <a name="LbaasPolicyResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyResourceAccessControlPolicy: lbaasPolicy.LbaasPolicyResourceAccessControlPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition">disposition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#disposition LbaasPolicy#disposition}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients">deniedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#denied_clients LbaasPolicy#denied_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients">permittedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}. |

---

##### `disposition`<sup>Required</sup> <a name="disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition"></a>

```typescript
public readonly disposition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#disposition LbaasPolicy#disposition}.

---

##### `deniedClients`<sup>Optional</sup> <a name="deniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients"></a>

```typescript
public readonly deniedClients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#denied_clients LbaasPolicy#denied_clients}.

---

##### `permittedClients`<sup>Optional</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients"></a>

```typescript
public readonly permittedClients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}.

---

### LbaasPolicySetRequestHeaderPolicy <a name="LbaasPolicySetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicySetRequestHeaderPolicy: lbaasPolicy.LbaasPolicySetRequestHeaderPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#header_name LbaasPolicy#header_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists">actionWhenHeaderExists</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs">actionWhenHeaderValueIs</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot">actionWhenHeaderValueIsNot</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#value LbaasPolicy#value}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#header_name LbaasPolicy#header_name}.

---

##### `actionWhenHeaderExists`<sup>Optional</sup> <a name="actionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists"></a>

```typescript
public readonly actionWhenHeaderExists: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}.

---

##### `actionWhenHeaderValueIs`<sup>Optional</sup> <a name="actionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs"></a>

```typescript
public readonly actionWhenHeaderValueIs: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}.

---

##### `actionWhenHeaderValueIsNot`<sup>Optional</sup> <a name="actionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot"></a>

```typescript
public readonly actionWhenHeaderValueIsNot: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#value LbaasPolicy#value}.

---

### LbaasPolicySslNegotiationPolicy <a name="LbaasPolicySslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicySslNegotiationPolicy: lbaasPolicy.LbaasPolicySslNegotiationPolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#port LbaasPolicy#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol">sslProtocol</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference">serverOrderPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers">sslCiphers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#port LbaasPolicy#port}.

---

##### `sslProtocol`<sup>Required</sup> <a name="sslProtocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol"></a>

```typescript
public readonly sslProtocol: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}.

---

##### `serverOrderPreference`<sup>Optional</sup> <a name="serverOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference"></a>

```typescript
public readonly serverOrderPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}.

---

##### `sslCiphers`<sup>Optional</sup> <a name="sslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers"></a>

```typescript
public readonly sslCiphers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}.

---

### LbaasPolicyTrustedCertificatePolicy <a name="LbaasPolicyTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

const lbaasPolicyTrustedCertificatePolicy: lbaasPolicy.LbaasPolicyTrustedCertificatePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate">trustedCertificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}. |

---

##### `trustedCertificate`<sup>Required</sup> <a name="trustedCertificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate"></a>

```typescript
public readonly trustedCertificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasPolicyApplicationCookieStickinessPolicyOutputReference <a name="LbaasPolicyApplicationCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName">cookieName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput"></a>

```typescript
public readonly cookieNameInput: string;
```

- *Type:* string

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName"></a>

```typescript
public readonly cookieName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicyApplicationCookieStickinessPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---


### LbaasPolicyCloudgatePolicyOutputReference <a name="LbaasPolicyCloudgatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgateApplication">resetCloudgateApplication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgatePolicyName">resetCloudgatePolicyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetIdentityServiceInstanceGuid">resetIdentityServiceInstanceGuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudgateApplication` <a name="resetCloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgateApplication"></a>

```typescript
public resetCloudgateApplication(): void
```

##### `resetCloudgatePolicyName` <a name="resetCloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgatePolicyName"></a>

```typescript
public resetCloudgatePolicyName(): void
```

##### `resetIdentityServiceInstanceGuid` <a name="resetIdentityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetIdentityServiceInstanceGuid"></a>

```typescript
public resetIdentityServiceInstanceGuid(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput">cloudgateApplicationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput">cloudgatePolicyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput">identityServiceInstanceGuidInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput">virtualHostnameForPolicyAttributionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication">cloudgateApplication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName">cloudgatePolicyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid">identityServiceInstanceGuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution">virtualHostnameForPolicyAttribution</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudgateApplicationInput`<sup>Optional</sup> <a name="cloudgateApplicationInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput"></a>

```typescript
public readonly cloudgateApplicationInput: string;
```

- *Type:* string

---

##### `cloudgatePolicyNameInput`<sup>Optional</sup> <a name="cloudgatePolicyNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput"></a>

```typescript
public readonly cloudgatePolicyNameInput: string;
```

- *Type:* string

---

##### `identityServiceInstanceGuidInput`<sup>Optional</sup> <a name="identityServiceInstanceGuidInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput"></a>

```typescript
public readonly identityServiceInstanceGuidInput: string;
```

- *Type:* string

---

##### `virtualHostnameForPolicyAttributionInput`<sup>Optional</sup> <a name="virtualHostnameForPolicyAttributionInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput"></a>

```typescript
public readonly virtualHostnameForPolicyAttributionInput: string;
```

- *Type:* string

---

##### `cloudgateApplication`<sup>Required</sup> <a name="cloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication"></a>

```typescript
public readonly cloudgateApplication: string;
```

- *Type:* string

---

##### `cloudgatePolicyName`<sup>Required</sup> <a name="cloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName"></a>

```typescript
public readonly cloudgatePolicyName: string;
```

- *Type:* string

---

##### `identityServiceInstanceGuid`<sup>Required</sup> <a name="identityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid"></a>

```typescript
public readonly identityServiceInstanceGuid: string;
```

- *Type:* string

---

##### `virtualHostnameForPolicyAttribution`<sup>Required</sup> <a name="virtualHostnameForPolicyAttribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution"></a>

```typescript
public readonly virtualHostnameForPolicyAttribution: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicyCloudgatePolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---


### LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference <a name="LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput">cookieExpirationPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">cookieExpirationPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cookieExpirationPeriodInput`<sup>Optional</sup> <a name="cookieExpirationPeriodInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput"></a>

```typescript
public readonly cookieExpirationPeriodInput: number;
```

- *Type:* number

---

##### `cookieExpirationPeriod`<sup>Required</sup> <a name="cookieExpirationPeriod" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```typescript
public readonly cookieExpirationPeriod: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicyLoadBalancerCookieStickinessPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---


### LbaasPolicyLoadBalancingMechanismPolicyOutputReference <a name="LbaasPolicyLoadBalancingMechanismPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput">loadBalancingMechanismInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism">loadBalancingMechanism</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `loadBalancingMechanismInput`<sup>Optional</sup> <a name="loadBalancingMechanismInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput"></a>

```typescript
public readonly loadBalancingMechanismInput: string;
```

- *Type:* string

---

##### `loadBalancingMechanism`<sup>Required</sup> <a name="loadBalancingMechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism"></a>

```typescript
public readonly loadBalancingMechanism: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicyLoadBalancingMechanismPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---


### LbaasPolicyRateLimitingRequestPolicyOutputReference <a name="LbaasPolicyRateLimitingRequestPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetHttpErrorCode">resetHttpErrorCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetLoggingLevel">resetLoggingLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetRateLimitingCriteria">resetRateLimitingCriteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetZoneMemorySize">resetZoneMemorySize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpErrorCode` <a name="resetHttpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetHttpErrorCode"></a>

```typescript
public resetHttpErrorCode(): void
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetLoggingLevel"></a>

```typescript
public resetLoggingLevel(): void
```

##### `resetRateLimitingCriteria` <a name="resetRateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetRateLimitingCriteria"></a>

```typescript
public resetRateLimitingCriteria(): void
```

##### `resetZoneMemorySize` <a name="resetZoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetZoneMemorySize"></a>

```typescript
public resetZoneMemorySize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput">burstSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput">delayExcessiveRequestsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput">httpErrorCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput">rateLimitingCriteriaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput">requestsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput">zoneMemorySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize">burstSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests">delayExcessiveRequests</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode">httpErrorCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria">rateLimitingCriteria</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond">requestsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize">zoneMemorySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `burstSizeInput`<sup>Optional</sup> <a name="burstSizeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput"></a>

```typescript
public readonly burstSizeInput: number;
```

- *Type:* number

---

##### `delayExcessiveRequestsInput`<sup>Optional</sup> <a name="delayExcessiveRequestsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput"></a>

```typescript
public readonly delayExcessiveRequestsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpErrorCodeInput`<sup>Optional</sup> <a name="httpErrorCodeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput"></a>

```typescript
public readonly httpErrorCodeInput: number;
```

- *Type:* number

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput"></a>

```typescript
public readonly loggingLevelInput: string;
```

- *Type:* string

---

##### `rateLimitingCriteriaInput`<sup>Optional</sup> <a name="rateLimitingCriteriaInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput"></a>

```typescript
public readonly rateLimitingCriteriaInput: string;
```

- *Type:* string

---

##### `requestsPerSecondInput`<sup>Optional</sup> <a name="requestsPerSecondInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput"></a>

```typescript
public readonly requestsPerSecondInput: number;
```

- *Type:* number

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `zoneMemorySizeInput`<sup>Optional</sup> <a name="zoneMemorySizeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput"></a>

```typescript
public readonly zoneMemorySizeInput: number;
```

- *Type:* number

---

##### `burstSize`<sup>Required</sup> <a name="burstSize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize"></a>

```typescript
public readonly burstSize: number;
```

- *Type:* number

---

##### `delayExcessiveRequests`<sup>Required</sup> <a name="delayExcessiveRequests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests"></a>

```typescript
public readonly delayExcessiveRequests: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `httpErrorCode`<sup>Required</sup> <a name="httpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode"></a>

```typescript
public readonly httpErrorCode: number;
```

- *Type:* number

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel"></a>

```typescript
public readonly loggingLevel: string;
```

- *Type:* string

---

##### `rateLimitingCriteria`<sup>Required</sup> <a name="rateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria"></a>

```typescript
public readonly rateLimitingCriteria: string;
```

- *Type:* string

---

##### `requestsPerSecond`<sup>Required</sup> <a name="requestsPerSecond" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond"></a>

```typescript
public readonly requestsPerSecond: number;
```

- *Type:* number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `zoneMemorySize`<sup>Required</sup> <a name="zoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize"></a>

```typescript
public readonly zoneMemorySize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicyRateLimitingRequestPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---


### LbaasPolicyRedirectPolicyOutputReference <a name="LbaasPolicyRedirectPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode">responseCode</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput"></a>

```typescript
public readonly redirectUriInput: string;
```

- *Type:* string

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput"></a>

```typescript
public readonly responseCodeInput: number;
```

- *Type:* number

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode"></a>

```typescript
public readonly responseCode: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicyRedirectPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---


### LbaasPolicyResourceAccessControlPolicyOutputReference <a name="LbaasPolicyResourceAccessControlPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetDeniedClients">resetDeniedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetPermittedClients">resetPermittedClients</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeniedClients` <a name="resetDeniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetDeniedClients"></a>

```typescript
public resetDeniedClients(): void
```

##### `resetPermittedClients` <a name="resetPermittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetPermittedClients"></a>

```typescript
public resetPermittedClients(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput">deniedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput">dispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput">permittedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients">deniedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition">disposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients">permittedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deniedClientsInput`<sup>Optional</sup> <a name="deniedClientsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput"></a>

```typescript
public readonly deniedClientsInput: string[];
```

- *Type:* string[]

---

##### `dispositionInput`<sup>Optional</sup> <a name="dispositionInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput"></a>

```typescript
public readonly dispositionInput: string;
```

- *Type:* string

---

##### `permittedClientsInput`<sup>Optional</sup> <a name="permittedClientsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput"></a>

```typescript
public readonly permittedClientsInput: string[];
```

- *Type:* string[]

---

##### `deniedClients`<sup>Required</sup> <a name="deniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients"></a>

```typescript
public readonly deniedClients: string[];
```

- *Type:* string[]

---

##### `disposition`<sup>Required</sup> <a name="disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition"></a>

```typescript
public readonly disposition: string;
```

- *Type:* string

---

##### `permittedClients`<sup>Required</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients"></a>

```typescript
public readonly permittedClients: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicyResourceAccessControlPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---


### LbaasPolicySetRequestHeaderPolicyOutputReference <a name="LbaasPolicySetRequestHeaderPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderExists">resetActionWhenHeaderExists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIs">resetActionWhenHeaderValueIs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIsNot">resetActionWhenHeaderValueIsNot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionWhenHeaderExists` <a name="resetActionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderExists"></a>

```typescript
public resetActionWhenHeaderExists(): void
```

##### `resetActionWhenHeaderValueIs` <a name="resetActionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIs"></a>

```typescript
public resetActionWhenHeaderValueIs(): void
```

##### `resetActionWhenHeaderValueIsNot` <a name="resetActionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIsNot"></a>

```typescript
public resetActionWhenHeaderValueIsNot(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput">actionWhenHeaderExistsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput">actionWhenHeaderValueIsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput">actionWhenHeaderValueIsNotInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists">actionWhenHeaderExists</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs">actionWhenHeaderValueIs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot">actionWhenHeaderValueIsNot</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionWhenHeaderExistsInput`<sup>Optional</sup> <a name="actionWhenHeaderExistsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput"></a>

```typescript
public readonly actionWhenHeaderExistsInput: string;
```

- *Type:* string

---

##### `actionWhenHeaderValueIsInput`<sup>Optional</sup> <a name="actionWhenHeaderValueIsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput"></a>

```typescript
public readonly actionWhenHeaderValueIsInput: string[];
```

- *Type:* string[]

---

##### `actionWhenHeaderValueIsNotInput`<sup>Optional</sup> <a name="actionWhenHeaderValueIsNotInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput"></a>

```typescript
public readonly actionWhenHeaderValueIsNotInput: string[];
```

- *Type:* string[]

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `actionWhenHeaderExists`<sup>Required</sup> <a name="actionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists"></a>

```typescript
public readonly actionWhenHeaderExists: string;
```

- *Type:* string

---

##### `actionWhenHeaderValueIs`<sup>Required</sup> <a name="actionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs"></a>

```typescript
public readonly actionWhenHeaderValueIs: string[];
```

- *Type:* string[]

---

##### `actionWhenHeaderValueIsNot`<sup>Required</sup> <a name="actionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot"></a>

```typescript
public readonly actionWhenHeaderValueIsNot: string[];
```

- *Type:* string[]

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicySetRequestHeaderPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---


### LbaasPolicySslNegotiationPolicyOutputReference <a name="LbaasPolicySslNegotiationPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetServerOrderPreference">resetServerOrderPreference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetSslCiphers">resetSslCiphers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerOrderPreference` <a name="resetServerOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetServerOrderPreference"></a>

```typescript
public resetServerOrderPreference(): void
```

##### `resetSslCiphers` <a name="resetSslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetSslCiphers"></a>

```typescript
public resetSslCiphers(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput">serverOrderPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput">sslCiphersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput">sslProtocolInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference">serverOrderPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers">sslCiphers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol">sslProtocol</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serverOrderPreferenceInput`<sup>Optional</sup> <a name="serverOrderPreferenceInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput"></a>

```typescript
public readonly serverOrderPreferenceInput: string;
```

- *Type:* string

---

##### `sslCiphersInput`<sup>Optional</sup> <a name="sslCiphersInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput"></a>

```typescript
public readonly sslCiphersInput: string[];
```

- *Type:* string[]

---

##### `sslProtocolInput`<sup>Optional</sup> <a name="sslProtocolInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput"></a>

```typescript
public readonly sslProtocolInput: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverOrderPreference`<sup>Required</sup> <a name="serverOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference"></a>

```typescript
public readonly serverOrderPreference: string;
```

- *Type:* string

---

##### `sslCiphers`<sup>Required</sup> <a name="sslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers"></a>

```typescript
public readonly sslCiphers: string[];
```

- *Type:* string[]

---

##### `sslProtocol`<sup>Required</sup> <a name="sslProtocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol"></a>

```typescript
public readonly sslProtocol: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicySslNegotiationPolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---


### LbaasPolicyTrustedCertificatePolicyOutputReference <a name="LbaasPolicyTrustedCertificatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer"></a>

```typescript
import { lbaasPolicy } from '@cdktf/provider-opc'

new lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput">trustedCertificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate">trustedCertificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `trustedCertificateInput`<sup>Optional</sup> <a name="trustedCertificateInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput"></a>

```typescript
public readonly trustedCertificateInput: string;
```

- *Type:* string

---

##### `trustedCertificate`<sup>Required</sup> <a name="trustedCertificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate"></a>

```typescript
public readonly trustedCertificate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasPolicyTrustedCertificatePolicy;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---



