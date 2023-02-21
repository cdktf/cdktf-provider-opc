# `lbaasPolicy` Submodule <a name="`lbaasPolicy` Submodule" id="@cdktf/provider-opc.lbaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasPolicy <a name="LbaasPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy opc_lbaas_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicy;

LbaasPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .loadBalancer(java.lang.String)
    .name(java.lang.String)
//  .applicationCookieStickinessPolicy(LbaasPolicyApplicationCookieStickinessPolicy)
//  .cloudgatePolicy(LbaasPolicyCloudgatePolicy)
//  .id(java.lang.String)
//  .loadBalancerCookieStickinessPolicy(LbaasPolicyLoadBalancerCookieStickinessPolicy)
//  .loadBalancingMechanismPolicy(LbaasPolicyLoadBalancingMechanismPolicy)
//  .rateLimitingRequestPolicy(LbaasPolicyRateLimitingRequestPolicy)
//  .redirectPolicy(LbaasPolicyRedirectPolicy)
//  .resourceAccessControlPolicy(LbaasPolicyResourceAccessControlPolicy)
//  .setRequestHeaderPolicy(LbaasPolicySetRequestHeaderPolicy)
//  .sslNegotiationPolicy(LbaasPolicySslNegotiationPolicy)
//  .trustedCertificatePolicy(LbaasPolicyTrustedCertificatePolicy)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.applicationCookieStickinessPolicy">applicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | application_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.cloudgatePolicy">cloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | cloudgate_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancerCookieStickinessPolicy">loadBalancerCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | load_balancer_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancingMechanismPolicy">loadBalancingMechanismPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | load_balancing_mechanism_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.rateLimitingRequestPolicy">rateLimitingRequestPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | rate_limiting_request_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.redirectPolicy">redirectPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | redirect_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.resourceAccessControlPolicy">resourceAccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | resource_access_control_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.setRequestHeaderPolicy">setRequestHeaderPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | set_request_header_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.sslNegotiationPolicy">sslNegotiationPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | ssl_negotiation_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.trustedCertificatePolicy">trustedCertificatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | trusted_certificate_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}.

---

##### `applicationCookieStickinessPolicy`<sup>Optional</sup> <a name="applicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.applicationCookieStickinessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

application_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#application_cookie_stickiness_policy LbaasPolicy#application_cookie_stickiness_policy}

---

##### `cloudgatePolicy`<sup>Optional</sup> <a name="cloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.cloudgatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

cloudgate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy LbaasPolicy#cloudgate_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerCookieStickinessPolicy`<sup>Optional</sup> <a name="loadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancerCookieStickinessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

load_balancer_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer_cookie_stickiness_policy LbaasPolicy#load_balancer_cookie_stickiness_policy}

---

##### `loadBalancingMechanismPolicy`<sup>Optional</sup> <a name="loadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancingMechanismPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

load_balancing_mechanism_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism_policy LbaasPolicy#load_balancing_mechanism_policy}

---

##### `rateLimitingRequestPolicy`<sup>Optional</sup> <a name="rateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.rateLimitingRequestPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

rate_limiting_request_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_request_policy LbaasPolicy#rate_limiting_request_policy}

---

##### `redirectPolicy`<sup>Optional</sup> <a name="redirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.redirectPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

redirect_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_policy LbaasPolicy#redirect_policy}

---

##### `resourceAccessControlPolicy`<sup>Optional</sup> <a name="resourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.resourceAccessControlPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

resource_access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#resource_access_control_policy LbaasPolicy#resource_access_control_policy}

---

##### `setRequestHeaderPolicy`<sup>Optional</sup> <a name="setRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.setRequestHeaderPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

set_request_header_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#set_request_header_policy LbaasPolicy#set_request_header_policy}

---

##### `sslNegotiationPolicy`<sup>Optional</sup> <a name="sslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.sslNegotiationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

ssl_negotiation_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_negotiation_policy LbaasPolicy#ssl_negotiation_policy}

---

##### `trustedCertificatePolicy`<sup>Optional</sup> <a name="trustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.trustedCertificatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

trusted_certificate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate_policy LbaasPolicy#trusted_certificate_policy}

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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putApplicationCookieStickinessPolicy` <a name="putApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy"></a>

```java
public void putApplicationCookieStickinessPolicy(LbaasPolicyApplicationCookieStickinessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `putCloudgatePolicy` <a name="putCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy"></a>

```java
public void putCloudgatePolicy(LbaasPolicyCloudgatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `putLoadBalancerCookieStickinessPolicy` <a name="putLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy"></a>

```java
public void putLoadBalancerCookieStickinessPolicy(LbaasPolicyLoadBalancerCookieStickinessPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `putLoadBalancingMechanismPolicy` <a name="putLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy"></a>

```java
public void putLoadBalancingMechanismPolicy(LbaasPolicyLoadBalancingMechanismPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `putRateLimitingRequestPolicy` <a name="putRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy"></a>

```java
public void putRateLimitingRequestPolicy(LbaasPolicyRateLimitingRequestPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `putRedirectPolicy` <a name="putRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy"></a>

```java
public void putRedirectPolicy(LbaasPolicyRedirectPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `putResourceAccessControlPolicy` <a name="putResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy"></a>

```java
public void putResourceAccessControlPolicy(LbaasPolicyResourceAccessControlPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `putSetRequestHeaderPolicy` <a name="putSetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy"></a>

```java
public void putSetRequestHeaderPolicy(LbaasPolicySetRequestHeaderPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `putSslNegotiationPolicy` <a name="putSslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy"></a>

```java
public void putSslNegotiationPolicy(LbaasPolicySslNegotiationPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `putTrustedCertificatePolicy` <a name="putTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy"></a>

```java
public void putTrustedCertificatePolicy(LbaasPolicyTrustedCertificatePolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `resetApplicationCookieStickinessPolicy` <a name="resetApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetApplicationCookieStickinessPolicy"></a>

```java
public void resetApplicationCookieStickinessPolicy()
```

##### `resetCloudgatePolicy` <a name="resetCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetCloudgatePolicy"></a>

```java
public void resetCloudgatePolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLoadBalancerCookieStickinessPolicy` <a name="resetLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancerCookieStickinessPolicy"></a>

```java
public void resetLoadBalancerCookieStickinessPolicy()
```

##### `resetLoadBalancingMechanismPolicy` <a name="resetLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancingMechanismPolicy"></a>

```java
public void resetLoadBalancingMechanismPolicy()
```

##### `resetRateLimitingRequestPolicy` <a name="resetRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRateLimitingRequestPolicy"></a>

```java
public void resetRateLimitingRequestPolicy()
```

##### `resetRedirectPolicy` <a name="resetRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRedirectPolicy"></a>

```java
public void resetRedirectPolicy()
```

##### `resetResourceAccessControlPolicy` <a name="resetResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetResourceAccessControlPolicy"></a>

```java
public void resetResourceAccessControlPolicy()
```

##### `resetSetRequestHeaderPolicy` <a name="resetSetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSetRequestHeaderPolicy"></a>

```java
public void resetSetRequestHeaderPolicy()
```

##### `resetSslNegotiationPolicy` <a name="resetSslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSslNegotiationPolicy"></a>

```java
public void resetSslNegotiationPolicy()
```

##### `resetTrustedCertificatePolicy` <a name="resetTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetTrustedCertificatePolicy"></a>

```java
public void resetTrustedCertificatePolicy()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicy;

LbaasPolicy.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicy;

LbaasPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicy;

LbaasPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy">applicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy">cloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy">loadBalancerCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy">loadBalancingMechanismPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy">rateLimitingRequestPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy">redirectPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy">resourceAccessControlPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy">setRequestHeaderPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy">sslNegotiationPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state">state</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy">trustedCertificatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput">applicationCookieStickinessPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput">cloudgatePolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput">loadBalancerCookieStickinessPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput">loadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput">loadBalancingMechanismPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput">rateLimitingRequestPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput">redirectPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput">resourceAccessControlPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput">setRequestHeaderPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput">sslNegotiationPolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput">trustedCertificatePolicyInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `applicationCookieStickinessPolicy`<sup>Required</sup> <a name="applicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy"></a>

```java
public LbaasPolicyApplicationCookieStickinessPolicyOutputReference getApplicationCookieStickinessPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a>

---

##### `cloudgatePolicy`<sup>Required</sup> <a name="cloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy"></a>

```java
public LbaasPolicyCloudgatePolicyOutputReference getCloudgatePolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a>

---

##### `loadBalancerCookieStickinessPolicy`<sup>Required</sup> <a name="loadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy"></a>

```java
public LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference getLoadBalancerCookieStickinessPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a>

---

##### `loadBalancingMechanismPolicy`<sup>Required</sup> <a name="loadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy"></a>

```java
public LbaasPolicyLoadBalancingMechanismPolicyOutputReference getLoadBalancingMechanismPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a>

---

##### `rateLimitingRequestPolicy`<sup>Required</sup> <a name="rateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy"></a>

```java
public LbaasPolicyRateLimitingRequestPolicyOutputReference getRateLimitingRequestPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a>

---

##### `redirectPolicy`<sup>Required</sup> <a name="redirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy"></a>

```java
public LbaasPolicyRedirectPolicyOutputReference getRedirectPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a>

---

##### `resourceAccessControlPolicy`<sup>Required</sup> <a name="resourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy"></a>

```java
public LbaasPolicyResourceAccessControlPolicyOutputReference getResourceAccessControlPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a>

---

##### `setRequestHeaderPolicy`<sup>Required</sup> <a name="setRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy"></a>

```java
public LbaasPolicySetRequestHeaderPolicyOutputReference getSetRequestHeaderPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a>

---

##### `sslNegotiationPolicy`<sup>Required</sup> <a name="sslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy"></a>

```java
public LbaasPolicySslNegotiationPolicyOutputReference getSslNegotiationPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state"></a>

```java
public IResolvable getState();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `trustedCertificatePolicy`<sup>Required</sup> <a name="trustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy"></a>

```java
public LbaasPolicyTrustedCertificatePolicyOutputReference getTrustedCertificatePolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `applicationCookieStickinessPolicyInput`<sup>Optional</sup> <a name="applicationCookieStickinessPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput"></a>

```java
public LbaasPolicyApplicationCookieStickinessPolicy getApplicationCookieStickinessPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `cloudgatePolicyInput`<sup>Optional</sup> <a name="cloudgatePolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput"></a>

```java
public LbaasPolicyCloudgatePolicy getCloudgatePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerCookieStickinessPolicyInput`<sup>Optional</sup> <a name="loadBalancerCookieStickinessPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput"></a>

```java
public LbaasPolicyLoadBalancerCookieStickinessPolicy getLoadBalancerCookieStickinessPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput"></a>

```java
public java.lang.String getLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingMechanismPolicyInput`<sup>Optional</sup> <a name="loadBalancingMechanismPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput"></a>

```java
public LbaasPolicyLoadBalancingMechanismPolicy getLoadBalancingMechanismPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `rateLimitingRequestPolicyInput`<sup>Optional</sup> <a name="rateLimitingRequestPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput"></a>

```java
public LbaasPolicyRateLimitingRequestPolicy getRateLimitingRequestPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `redirectPolicyInput`<sup>Optional</sup> <a name="redirectPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput"></a>

```java
public LbaasPolicyRedirectPolicy getRedirectPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `resourceAccessControlPolicyInput`<sup>Optional</sup> <a name="resourceAccessControlPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput"></a>

```java
public LbaasPolicyResourceAccessControlPolicy getResourceAccessControlPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `setRequestHeaderPolicyInput`<sup>Optional</sup> <a name="setRequestHeaderPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput"></a>

```java
public LbaasPolicySetRequestHeaderPolicy getSetRequestHeaderPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `sslNegotiationPolicyInput`<sup>Optional</sup> <a name="sslNegotiationPolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput"></a>

```java
public LbaasPolicySslNegotiationPolicy getSslNegotiationPolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `trustedCertificatePolicyInput`<sup>Optional</sup> <a name="trustedCertificatePolicyInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput"></a>

```java
public LbaasPolicyTrustedCertificatePolicy getTrustedCertificatePolicyInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer"></a>

```java
public java.lang.String getLoadBalancer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasPolicyApplicationCookieStickinessPolicy <a name="LbaasPolicyApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyApplicationCookieStickinessPolicy;

LbaasPolicyApplicationCookieStickinessPolicy.builder()
    .cookieName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_name LbaasPolicy#cookie_name}. |

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_name LbaasPolicy#cookie_name}.

---

### LbaasPolicyCloudgatePolicy <a name="LbaasPolicyCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyCloudgatePolicy;

LbaasPolicyCloudgatePolicy.builder()
    .virtualHostnameForPolicyAttribution(java.lang.String)
//  .cloudgateApplication(java.lang.String)
//  .cloudgatePolicyName(java.lang.String)
//  .identityServiceInstanceGuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution">virtualHostnameForPolicyAttribution</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication">cloudgateApplication</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName">cloudgatePolicyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid">identityServiceInstanceGuid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}. |

---

##### `virtualHostnameForPolicyAttribution`<sup>Required</sup> <a name="virtualHostnameForPolicyAttribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution"></a>

```java
public java.lang.String getVirtualHostnameForPolicyAttribution();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}.

---

##### `cloudgateApplication`<sup>Optional</sup> <a name="cloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication"></a>

```java
public java.lang.String getCloudgateApplication();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}.

---

##### `cloudgatePolicyName`<sup>Optional</sup> <a name="cloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName"></a>

```java
public java.lang.String getCloudgatePolicyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}.

---

##### `identityServiceInstanceGuid`<sup>Optional</sup> <a name="identityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid"></a>

```java
public java.lang.String getIdentityServiceInstanceGuid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}.

---

### LbaasPolicyConfig <a name="LbaasPolicyConfig" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyConfig;

LbaasPolicyConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .loadBalancer(java.lang.String)
    .name(java.lang.String)
//  .applicationCookieStickinessPolicy(LbaasPolicyApplicationCookieStickinessPolicy)
//  .cloudgatePolicy(LbaasPolicyCloudgatePolicy)
//  .id(java.lang.String)
//  .loadBalancerCookieStickinessPolicy(LbaasPolicyLoadBalancerCookieStickinessPolicy)
//  .loadBalancingMechanismPolicy(LbaasPolicyLoadBalancingMechanismPolicy)
//  .rateLimitingRequestPolicy(LbaasPolicyRateLimitingRequestPolicy)
//  .redirectPolicy(LbaasPolicyRedirectPolicy)
//  .resourceAccessControlPolicy(LbaasPolicyResourceAccessControlPolicy)
//  .setRequestHeaderPolicy(LbaasPolicySetRequestHeaderPolicy)
//  .sslNegotiationPolicy(LbaasPolicySslNegotiationPolicy)
//  .trustedCertificatePolicy(LbaasPolicyTrustedCertificatePolicy)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy">applicationCookieStickinessPolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | application_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy">cloudgatePolicy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | cloudgate_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}. |
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

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer"></a>

```java
public java.lang.String getLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer LbaasPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#name LbaasPolicy#name}.

---

##### `applicationCookieStickinessPolicy`<sup>Optional</sup> <a name="applicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy"></a>

```java
public LbaasPolicyApplicationCookieStickinessPolicy getApplicationCookieStickinessPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

application_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#application_cookie_stickiness_policy LbaasPolicy#application_cookie_stickiness_policy}

---

##### `cloudgatePolicy`<sup>Optional</sup> <a name="cloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy"></a>

```java
public LbaasPolicyCloudgatePolicy getCloudgatePolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

cloudgate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cloudgate_policy LbaasPolicy#cloudgate_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#id LbaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `loadBalancerCookieStickinessPolicy`<sup>Optional</sup> <a name="loadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancerCookieStickinessPolicy"></a>

```java
public LbaasPolicyLoadBalancerCookieStickinessPolicy getLoadBalancerCookieStickinessPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

load_balancer_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancer_cookie_stickiness_policy LbaasPolicy#load_balancer_cookie_stickiness_policy}

---

##### `loadBalancingMechanismPolicy`<sup>Optional</sup> <a name="loadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancingMechanismPolicy"></a>

```java
public LbaasPolicyLoadBalancingMechanismPolicy getLoadBalancingMechanismPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

load_balancing_mechanism_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism_policy LbaasPolicy#load_balancing_mechanism_policy}

---

##### `rateLimitingRequestPolicy`<sup>Optional</sup> <a name="rateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.rateLimitingRequestPolicy"></a>

```java
public LbaasPolicyRateLimitingRequestPolicy getRateLimitingRequestPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

rate_limiting_request_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_request_policy LbaasPolicy#rate_limiting_request_policy}

---

##### `redirectPolicy`<sup>Optional</sup> <a name="redirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.redirectPolicy"></a>

```java
public LbaasPolicyRedirectPolicy getRedirectPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

redirect_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_policy LbaasPolicy#redirect_policy}

---

##### `resourceAccessControlPolicy`<sup>Optional</sup> <a name="resourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.resourceAccessControlPolicy"></a>

```java
public LbaasPolicyResourceAccessControlPolicy getResourceAccessControlPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

resource_access_control_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#resource_access_control_policy LbaasPolicy#resource_access_control_policy}

---

##### `setRequestHeaderPolicy`<sup>Optional</sup> <a name="setRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.setRequestHeaderPolicy"></a>

```java
public LbaasPolicySetRequestHeaderPolicy getSetRequestHeaderPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

set_request_header_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#set_request_header_policy LbaasPolicy#set_request_header_policy}

---

##### `sslNegotiationPolicy`<sup>Optional</sup> <a name="sslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.sslNegotiationPolicy"></a>

```java
public LbaasPolicySslNegotiationPolicy getSslNegotiationPolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

ssl_negotiation_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_negotiation_policy LbaasPolicy#ssl_negotiation_policy}

---

##### `trustedCertificatePolicy`<sup>Optional</sup> <a name="trustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.trustedCertificatePolicy"></a>

```java
public LbaasPolicyTrustedCertificatePolicy getTrustedCertificatePolicy();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

trusted_certificate_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate_policy LbaasPolicy#trusted_certificate_policy}

---

### LbaasPolicyLoadBalancerCookieStickinessPolicy <a name="LbaasPolicyLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyLoadBalancerCookieStickinessPolicy;

LbaasPolicyLoadBalancerCookieStickinessPolicy.builder()
    .cookieExpirationPeriod(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod">cookieExpirationPeriod</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}. |

---

##### `cookieExpirationPeriod`<sup>Required</sup> <a name="cookieExpirationPeriod" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```java
public java.lang.Number getCookieExpirationPeriod();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}.

---

### LbaasPolicyLoadBalancingMechanismPolicy <a name="LbaasPolicyLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyLoadBalancingMechanismPolicy;

LbaasPolicyLoadBalancingMechanismPolicy.builder()
    .loadBalancingMechanism(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism">loadBalancingMechanism</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}. |

---

##### `loadBalancingMechanism`<sup>Required</sup> <a name="loadBalancingMechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism"></a>

```java
public java.lang.String getLoadBalancingMechanism();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}.

---

### LbaasPolicyRateLimitingRequestPolicy <a name="LbaasPolicyRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyRateLimitingRequestPolicy;

LbaasPolicyRateLimitingRequestPolicy.builder()
    .burstSize(java.lang.Number)
    .delayExcessiveRequests(java.lang.Boolean)
    .delayExcessiveRequests(IResolvable)
    .requestsPerSecond(java.lang.Number)
    .zone(java.lang.String)
//  .httpErrorCode(java.lang.Number)
//  .loggingLevel(java.lang.String)
//  .rateLimitingCriteria(java.lang.String)
//  .zoneMemorySize(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize">burstSize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#burst_size LbaasPolicy#burst_size}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests">delayExcessiveRequests</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond">requestsPerSecond</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone">zone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone LbaasPolicy#zone}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode">httpErrorCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#http_error_code LbaasPolicy#http_error_code}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#logging_level LbaasPolicy#logging_level}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria">rateLimitingCriteria</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize">zoneMemorySize</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}. |

---

##### `burstSize`<sup>Required</sup> <a name="burstSize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize"></a>

```java
public java.lang.Number getBurstSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#burst_size LbaasPolicy#burst_size}.

---

##### `delayExcessiveRequests`<sup>Required</sup> <a name="delayExcessiveRequests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests"></a>

```java
public java.lang.Object getDelayExcessiveRequests();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}.

---

##### `requestsPerSecond`<sup>Required</sup> <a name="requestsPerSecond" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond"></a>

```java
public java.lang.Number getRequestsPerSecond();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}.

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone LbaasPolicy#zone}.

---

##### `httpErrorCode`<sup>Optional</sup> <a name="httpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode"></a>

```java
public java.lang.Number getHttpErrorCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#http_error_code LbaasPolicy#http_error_code}.

---

##### `loggingLevel`<sup>Optional</sup> <a name="loggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#logging_level LbaasPolicy#logging_level}.

---

##### `rateLimitingCriteria`<sup>Optional</sup> <a name="rateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria"></a>

```java
public java.lang.String getRateLimitingCriteria();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}.

---

##### `zoneMemorySize`<sup>Optional</sup> <a name="zoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize"></a>

```java
public java.lang.Number getZoneMemorySize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}.

---

### LbaasPolicyRedirectPolicy <a name="LbaasPolicyRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyRedirectPolicy;

LbaasPolicyRedirectPolicy.builder()
    .redirectUri(java.lang.String)
    .responseCode(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode">responseCode</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#response_code LbaasPolicy#response_code}. |

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}.

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode"></a>

```java
public java.lang.Number getResponseCode();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#response_code LbaasPolicy#response_code}.

---

### LbaasPolicyResourceAccessControlPolicy <a name="LbaasPolicyResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyResourceAccessControlPolicy;

LbaasPolicyResourceAccessControlPolicy.builder()
    .disposition(java.lang.String)
//  .deniedClients(java.util.List<java.lang.String>)
//  .permittedClients(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition">disposition</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#disposition LbaasPolicy#disposition}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients">deniedClients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#denied_clients LbaasPolicy#denied_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients">permittedClients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}. |

---

##### `disposition`<sup>Required</sup> <a name="disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition"></a>

```java
public java.lang.String getDisposition();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#disposition LbaasPolicy#disposition}.

---

##### `deniedClients`<sup>Optional</sup> <a name="deniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients"></a>

```java
public java.util.List<java.lang.String> getDeniedClients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#denied_clients LbaasPolicy#denied_clients}.

---

##### `permittedClients`<sup>Optional</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients"></a>

```java
public java.util.List<java.lang.String> getPermittedClients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}.

---

### LbaasPolicySetRequestHeaderPolicy <a name="LbaasPolicySetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicySetRequestHeaderPolicy;

LbaasPolicySetRequestHeaderPolicy.builder()
    .headerName(java.lang.String)
//  .actionWhenHeaderExists(java.lang.String)
//  .actionWhenHeaderValueIs(java.util.List<java.lang.String>)
//  .actionWhenHeaderValueIsNot(java.util.List<java.lang.String>)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName">headerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#header_name LbaasPolicy#header_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists">actionWhenHeaderExists</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs">actionWhenHeaderValueIs</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot">actionWhenHeaderValueIsNot</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#value LbaasPolicy#value}. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#header_name LbaasPolicy#header_name}.

---

##### `actionWhenHeaderExists`<sup>Optional</sup> <a name="actionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists"></a>

```java
public java.lang.String getActionWhenHeaderExists();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}.

---

##### `actionWhenHeaderValueIs`<sup>Optional</sup> <a name="actionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs"></a>

```java
public java.util.List<java.lang.String> getActionWhenHeaderValueIs();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}.

---

##### `actionWhenHeaderValueIsNot`<sup>Optional</sup> <a name="actionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot"></a>

```java
public java.util.List<java.lang.String> getActionWhenHeaderValueIsNot();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#value LbaasPolicy#value}.

---

### LbaasPolicySslNegotiationPolicy <a name="LbaasPolicySslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicySslNegotiationPolicy;

LbaasPolicySslNegotiationPolicy.builder()
    .port(java.lang.Number)
    .sslProtocol(java.util.List<java.lang.String>)
//  .serverOrderPreference(java.lang.String)
//  .sslCiphers(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#port LbaasPolicy#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol">sslProtocol</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference">serverOrderPreference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers">sslCiphers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#port LbaasPolicy#port}.

---

##### `sslProtocol`<sup>Required</sup> <a name="sslProtocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol"></a>

```java
public java.util.List<java.lang.String> getSslProtocol();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}.

---

##### `serverOrderPreference`<sup>Optional</sup> <a name="serverOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference"></a>

```java
public java.lang.String getServerOrderPreference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}.

---

##### `sslCiphers`<sup>Optional</sup> <a name="sslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers"></a>

```java
public java.util.List<java.lang.String> getSslCiphers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}.

---

### LbaasPolicyTrustedCertificatePolicy <a name="LbaasPolicyTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyTrustedCertificatePolicy;

LbaasPolicyTrustedCertificatePolicy.builder()
    .trustedCertificate(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate">trustedCertificate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}. |

---

##### `trustedCertificate`<sup>Required</sup> <a name="trustedCertificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate"></a>

```java
public java.lang.String getTrustedCertificate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasPolicyApplicationCookieStickinessPolicyOutputReference <a name="LbaasPolicyApplicationCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference;

new LbaasPolicyApplicationCookieStickinessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput">cookieNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName">cookieName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieNameInput`<sup>Optional</sup> <a name="cookieNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput"></a>

```java
public java.lang.String getCookieNameInput();
```

- *Type:* java.lang.String

---

##### `cookieName`<sup>Required</sup> <a name="cookieName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName"></a>

```java
public java.lang.String getCookieName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicyApplicationCookieStickinessPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---


### LbaasPolicyCloudgatePolicyOutputReference <a name="LbaasPolicyCloudgatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyCloudgatePolicyOutputReference;

new LbaasPolicyCloudgatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudgateApplication` <a name="resetCloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgateApplication"></a>

```java
public void resetCloudgateApplication()
```

##### `resetCloudgatePolicyName` <a name="resetCloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgatePolicyName"></a>

```java
public void resetCloudgatePolicyName()
```

##### `resetIdentityServiceInstanceGuid` <a name="resetIdentityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetIdentityServiceInstanceGuid"></a>

```java
public void resetIdentityServiceInstanceGuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput">cloudgateApplicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput">cloudgatePolicyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput">identityServiceInstanceGuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput">virtualHostnameForPolicyAttributionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication">cloudgateApplication</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName">cloudgatePolicyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid">identityServiceInstanceGuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution">virtualHostnameForPolicyAttribution</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cloudgateApplicationInput`<sup>Optional</sup> <a name="cloudgateApplicationInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput"></a>

```java
public java.lang.String getCloudgateApplicationInput();
```

- *Type:* java.lang.String

---

##### `cloudgatePolicyNameInput`<sup>Optional</sup> <a name="cloudgatePolicyNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput"></a>

```java
public java.lang.String getCloudgatePolicyNameInput();
```

- *Type:* java.lang.String

---

##### `identityServiceInstanceGuidInput`<sup>Optional</sup> <a name="identityServiceInstanceGuidInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput"></a>

```java
public java.lang.String getIdentityServiceInstanceGuidInput();
```

- *Type:* java.lang.String

---

##### `virtualHostnameForPolicyAttributionInput`<sup>Optional</sup> <a name="virtualHostnameForPolicyAttributionInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput"></a>

```java
public java.lang.String getVirtualHostnameForPolicyAttributionInput();
```

- *Type:* java.lang.String

---

##### `cloudgateApplication`<sup>Required</sup> <a name="cloudgateApplication" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication"></a>

```java
public java.lang.String getCloudgateApplication();
```

- *Type:* java.lang.String

---

##### `cloudgatePolicyName`<sup>Required</sup> <a name="cloudgatePolicyName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName"></a>

```java
public java.lang.String getCloudgatePolicyName();
```

- *Type:* java.lang.String

---

##### `identityServiceInstanceGuid`<sup>Required</sup> <a name="identityServiceInstanceGuid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid"></a>

```java
public java.lang.String getIdentityServiceInstanceGuid();
```

- *Type:* java.lang.String

---

##### `virtualHostnameForPolicyAttribution`<sup>Required</sup> <a name="virtualHostnameForPolicyAttribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution"></a>

```java
public java.lang.String getVirtualHostnameForPolicyAttribution();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicyCloudgatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---


### LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference <a name="LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference;

new LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput">cookieExpirationPeriodInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">cookieExpirationPeriod</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cookieExpirationPeriodInput`<sup>Optional</sup> <a name="cookieExpirationPeriodInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput"></a>

```java
public java.lang.Number getCookieExpirationPeriodInput();
```

- *Type:* java.lang.Number

---

##### `cookieExpirationPeriod`<sup>Required</sup> <a name="cookieExpirationPeriod" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```java
public java.lang.Number getCookieExpirationPeriod();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicyLoadBalancerCookieStickinessPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---


### LbaasPolicyLoadBalancingMechanismPolicyOutputReference <a name="LbaasPolicyLoadBalancingMechanismPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference;

new LbaasPolicyLoadBalancingMechanismPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput">loadBalancingMechanismInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism">loadBalancingMechanism</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loadBalancingMechanismInput`<sup>Optional</sup> <a name="loadBalancingMechanismInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput"></a>

```java
public java.lang.String getLoadBalancingMechanismInput();
```

- *Type:* java.lang.String

---

##### `loadBalancingMechanism`<sup>Required</sup> <a name="loadBalancingMechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism"></a>

```java
public java.lang.String getLoadBalancingMechanism();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicyLoadBalancingMechanismPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---


### LbaasPolicyRateLimitingRequestPolicyOutputReference <a name="LbaasPolicyRateLimitingRequestPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyRateLimitingRequestPolicyOutputReference;

new LbaasPolicyRateLimitingRequestPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHttpErrorCode` <a name="resetHttpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetHttpErrorCode"></a>

```java
public void resetHttpErrorCode()
```

##### `resetLoggingLevel` <a name="resetLoggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetLoggingLevel"></a>

```java
public void resetLoggingLevel()
```

##### `resetRateLimitingCriteria` <a name="resetRateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetRateLimitingCriteria"></a>

```java
public void resetRateLimitingCriteria()
```

##### `resetZoneMemorySize` <a name="resetZoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetZoneMemorySize"></a>

```java
public void resetZoneMemorySize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput">burstSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput">delayExcessiveRequestsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput">httpErrorCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput">loggingLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput">rateLimitingCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput">requestsPerSecondInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput">zoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput">zoneMemorySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize">burstSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests">delayExcessiveRequests</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode">httpErrorCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel">loggingLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria">rateLimitingCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond">requestsPerSecond</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone">zone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize">zoneMemorySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `burstSizeInput`<sup>Optional</sup> <a name="burstSizeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput"></a>

```java
public java.lang.Number getBurstSizeInput();
```

- *Type:* java.lang.Number

---

##### `delayExcessiveRequestsInput`<sup>Optional</sup> <a name="delayExcessiveRequestsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput"></a>

```java
public java.lang.Object getDelayExcessiveRequestsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpErrorCodeInput`<sup>Optional</sup> <a name="httpErrorCodeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput"></a>

```java
public java.lang.Number getHttpErrorCodeInput();
```

- *Type:* java.lang.Number

---

##### `loggingLevelInput`<sup>Optional</sup> <a name="loggingLevelInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput"></a>

```java
public java.lang.String getLoggingLevelInput();
```

- *Type:* java.lang.String

---

##### `rateLimitingCriteriaInput`<sup>Optional</sup> <a name="rateLimitingCriteriaInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput"></a>

```java
public java.lang.String getRateLimitingCriteriaInput();
```

- *Type:* java.lang.String

---

##### `requestsPerSecondInput`<sup>Optional</sup> <a name="requestsPerSecondInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput"></a>

```java
public java.lang.Number getRequestsPerSecondInput();
```

- *Type:* java.lang.Number

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput"></a>

```java
public java.lang.String getZoneInput();
```

- *Type:* java.lang.String

---

##### `zoneMemorySizeInput`<sup>Optional</sup> <a name="zoneMemorySizeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput"></a>

```java
public java.lang.Number getZoneMemorySizeInput();
```

- *Type:* java.lang.Number

---

##### `burstSize`<sup>Required</sup> <a name="burstSize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize"></a>

```java
public java.lang.Number getBurstSize();
```

- *Type:* java.lang.Number

---

##### `delayExcessiveRequests`<sup>Required</sup> <a name="delayExcessiveRequests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests"></a>

```java
public java.lang.Object getDelayExcessiveRequests();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `httpErrorCode`<sup>Required</sup> <a name="httpErrorCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode"></a>

```java
public java.lang.Number getHttpErrorCode();
```

- *Type:* java.lang.Number

---

##### `loggingLevel`<sup>Required</sup> <a name="loggingLevel" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel"></a>

```java
public java.lang.String getLoggingLevel();
```

- *Type:* java.lang.String

---

##### `rateLimitingCriteria`<sup>Required</sup> <a name="rateLimitingCriteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria"></a>

```java
public java.lang.String getRateLimitingCriteria();
```

- *Type:* java.lang.String

---

##### `requestsPerSecond`<sup>Required</sup> <a name="requestsPerSecond" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond"></a>

```java
public java.lang.Number getRequestsPerSecond();
```

- *Type:* java.lang.Number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone"></a>

```java
public java.lang.String getZone();
```

- *Type:* java.lang.String

---

##### `zoneMemorySize`<sup>Required</sup> <a name="zoneMemorySize" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize"></a>

```java
public java.lang.Number getZoneMemorySize();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicyRateLimitingRequestPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---


### LbaasPolicyRedirectPolicyOutputReference <a name="LbaasPolicyRedirectPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyRedirectPolicyOutputReference;

new LbaasPolicyRedirectPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput">responseCodeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode">responseCode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput"></a>

```java
public java.lang.String getRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `responseCodeInput`<sup>Optional</sup> <a name="responseCodeInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput"></a>

```java
public java.lang.Number getResponseCodeInput();
```

- *Type:* java.lang.Number

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `responseCode`<sup>Required</sup> <a name="responseCode" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode"></a>

```java
public java.lang.Number getResponseCode();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicyRedirectPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---


### LbaasPolicyResourceAccessControlPolicyOutputReference <a name="LbaasPolicyResourceAccessControlPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyResourceAccessControlPolicyOutputReference;

new LbaasPolicyResourceAccessControlPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDeniedClients` <a name="resetDeniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetDeniedClients"></a>

```java
public void resetDeniedClients()
```

##### `resetPermittedClients` <a name="resetPermittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetPermittedClients"></a>

```java
public void resetPermittedClients()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput">deniedClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput">dispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput">permittedClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients">deniedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition">disposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients">permittedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deniedClientsInput`<sup>Optional</sup> <a name="deniedClientsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput"></a>

```java
public java.util.List<java.lang.String> getDeniedClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dispositionInput`<sup>Optional</sup> <a name="dispositionInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput"></a>

```java
public java.lang.String getDispositionInput();
```

- *Type:* java.lang.String

---

##### `permittedClientsInput`<sup>Optional</sup> <a name="permittedClientsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput"></a>

```java
public java.util.List<java.lang.String> getPermittedClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deniedClients`<sup>Required</sup> <a name="deniedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients"></a>

```java
public java.util.List<java.lang.String> getDeniedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disposition`<sup>Required</sup> <a name="disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition"></a>

```java
public java.lang.String getDisposition();
```

- *Type:* java.lang.String

---

##### `permittedClients`<sup>Required</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients"></a>

```java
public java.util.List<java.lang.String> getPermittedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicyResourceAccessControlPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---


### LbaasPolicySetRequestHeaderPolicyOutputReference <a name="LbaasPolicySetRequestHeaderPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicySetRequestHeaderPolicyOutputReference;

new LbaasPolicySetRequestHeaderPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetActionWhenHeaderExists` <a name="resetActionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderExists"></a>

```java
public void resetActionWhenHeaderExists()
```

##### `resetActionWhenHeaderValueIs` <a name="resetActionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIs"></a>

```java
public void resetActionWhenHeaderValueIs()
```

##### `resetActionWhenHeaderValueIsNot` <a name="resetActionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIsNot"></a>

```java
public void resetActionWhenHeaderValueIsNot()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput">actionWhenHeaderExistsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput">actionWhenHeaderValueIsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput">actionWhenHeaderValueIsNotInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists">actionWhenHeaderExists</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs">actionWhenHeaderValueIs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot">actionWhenHeaderValueIsNot</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName">headerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionWhenHeaderExistsInput`<sup>Optional</sup> <a name="actionWhenHeaderExistsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput"></a>

```java
public java.lang.String getActionWhenHeaderExistsInput();
```

- *Type:* java.lang.String

---

##### `actionWhenHeaderValueIsInput`<sup>Optional</sup> <a name="actionWhenHeaderValueIsInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput"></a>

```java
public java.util.List<java.lang.String> getActionWhenHeaderValueIsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `actionWhenHeaderValueIsNotInput`<sup>Optional</sup> <a name="actionWhenHeaderValueIsNotInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput"></a>

```java
public java.util.List<java.lang.String> getActionWhenHeaderValueIsNotInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput"></a>

```java
public java.lang.String getHeaderNameInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `actionWhenHeaderExists`<sup>Required</sup> <a name="actionWhenHeaderExists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists"></a>

```java
public java.lang.String getActionWhenHeaderExists();
```

- *Type:* java.lang.String

---

##### `actionWhenHeaderValueIs`<sup>Required</sup> <a name="actionWhenHeaderValueIs" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs"></a>

```java
public java.util.List<java.lang.String> getActionWhenHeaderValueIs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `actionWhenHeaderValueIsNot`<sup>Required</sup> <a name="actionWhenHeaderValueIsNot" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot"></a>

```java
public java.util.List<java.lang.String> getActionWhenHeaderValueIsNot();
```

- *Type:* java.util.List<java.lang.String>

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName"></a>

```java
public java.lang.String getHeaderName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicySetRequestHeaderPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---


### LbaasPolicySslNegotiationPolicyOutputReference <a name="LbaasPolicySslNegotiationPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicySslNegotiationPolicyOutputReference;

new LbaasPolicySslNegotiationPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServerOrderPreference` <a name="resetServerOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetServerOrderPreference"></a>

```java
public void resetServerOrderPreference()
```

##### `resetSslCiphers` <a name="resetSslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetSslCiphers"></a>

```java
public void resetSslCiphers()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput">serverOrderPreferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput">sslCiphersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput">sslProtocolInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference">serverOrderPreference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers">sslCiphers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol">sslProtocol</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverOrderPreferenceInput`<sup>Optional</sup> <a name="serverOrderPreferenceInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput"></a>

```java
public java.lang.String getServerOrderPreferenceInput();
```

- *Type:* java.lang.String

---

##### `sslCiphersInput`<sup>Optional</sup> <a name="sslCiphersInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput"></a>

```java
public java.util.List<java.lang.String> getSslCiphersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslProtocolInput`<sup>Optional</sup> <a name="sslProtocolInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput"></a>

```java
public java.util.List<java.lang.String> getSslProtocolInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverOrderPreference`<sup>Required</sup> <a name="serverOrderPreference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference"></a>

```java
public java.lang.String getServerOrderPreference();
```

- *Type:* java.lang.String

---

##### `sslCiphers`<sup>Required</sup> <a name="sslCiphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers"></a>

```java
public java.util.List<java.lang.String> getSslCiphers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sslProtocol`<sup>Required</sup> <a name="sslProtocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol"></a>

```java
public java.util.List<java.lang.String> getSslProtocol();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicySslNegotiationPolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---


### LbaasPolicyTrustedCertificatePolicyOutputReference <a name="LbaasPolicyTrustedCertificatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_policy.LbaasPolicyTrustedCertificatePolicyOutputReference;

new LbaasPolicyTrustedCertificatePolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput">trustedCertificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate">trustedCertificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trustedCertificateInput`<sup>Optional</sup> <a name="trustedCertificateInput" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput"></a>

```java
public java.lang.String getTrustedCertificateInput();
```

- *Type:* java.lang.String

---

##### `trustedCertificate`<sup>Required</sup> <a name="trustedCertificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate"></a>

```java
public java.lang.String getTrustedCertificate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue"></a>

```java
public LbaasPolicyTrustedCertificatePolicy getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---



