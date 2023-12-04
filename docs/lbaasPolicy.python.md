# `lbaasPolicy` Submodule <a name="`lbaasPolicy` Submodule" id="@cdktf/provider-opc.lbaasPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasPolicy <a name="LbaasPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy opc_lbaas_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicy(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer: str,
  name: str,
  application_cookie_stickiness_policy: LbaasPolicyApplicationCookieStickinessPolicy = None,
  cloudgate_policy: LbaasPolicyCloudgatePolicy = None,
  id: str = None,
  load_balancer_cookie_stickiness_policy: LbaasPolicyLoadBalancerCookieStickinessPolicy = None,
  load_balancing_mechanism_policy: LbaasPolicyLoadBalancingMechanismPolicy = None,
  rate_limiting_request_policy: LbaasPolicyRateLimitingRequestPolicy = None,
  redirect_policy: LbaasPolicyRedirectPolicy = None,
  resource_access_control_policy: LbaasPolicyResourceAccessControlPolicy = None,
  set_request_header_policy: LbaasPolicySetRequestHeaderPolicy = None,
  ssl_negotiation_policy: LbaasPolicySslNegotiationPolicy = None,
  trusted_certificate_policy: LbaasPolicyTrustedCertificatePolicy = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancer LbaasPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#name LbaasPolicy#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.applicationCookieStickinessPolicy">application_cookie_stickiness_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | application_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.cloudgatePolicy">cloudgate_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | cloudgate_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#id LbaasPolicy#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancerCookieStickinessPolicy">load_balancer_cookie_stickiness_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | load_balancer_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancingMechanismPolicy">load_balancing_mechanism_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | load_balancing_mechanism_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.rateLimitingRequestPolicy">rate_limiting_request_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | rate_limiting_request_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.redirectPolicy">redirect_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | redirect_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.resourceAccessControlPolicy">resource_access_control_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | resource_access_control_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.setRequestHeaderPolicy">set_request_header_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | set_request_header_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.sslNegotiationPolicy">ssl_negotiation_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | ssl_negotiation_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.trustedCertificatePolicy">trusted_certificate_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | trusted_certificate_policy block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancer LbaasPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#name LbaasPolicy#name}.

---

##### `application_cookie_stickiness_policy`<sup>Optional</sup> <a name="application_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.applicationCookieStickinessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

application_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#application_cookie_stickiness_policy LbaasPolicy#application_cookie_stickiness_policy}

---

##### `cloudgate_policy`<sup>Optional</sup> <a name="cloudgate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.cloudgatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

cloudgate_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_policy LbaasPolicy#cloudgate_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#id LbaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_cookie_stickiness_policy`<sup>Optional</sup> <a name="load_balancer_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancerCookieStickinessPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

load_balancer_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancer_cookie_stickiness_policy LbaasPolicy#load_balancer_cookie_stickiness_policy}

---

##### `load_balancing_mechanism_policy`<sup>Optional</sup> <a name="load_balancing_mechanism_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.loadBalancingMechanismPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

load_balancing_mechanism_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancing_mechanism_policy LbaasPolicy#load_balancing_mechanism_policy}

---

##### `rate_limiting_request_policy`<sup>Optional</sup> <a name="rate_limiting_request_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.rateLimitingRequestPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

rate_limiting_request_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#rate_limiting_request_policy LbaasPolicy#rate_limiting_request_policy}

---

##### `redirect_policy`<sup>Optional</sup> <a name="redirect_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.redirectPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

redirect_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#redirect_policy LbaasPolicy#redirect_policy}

---

##### `resource_access_control_policy`<sup>Optional</sup> <a name="resource_access_control_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.resourceAccessControlPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

resource_access_control_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#resource_access_control_policy LbaasPolicy#resource_access_control_policy}

---

##### `set_request_header_policy`<sup>Optional</sup> <a name="set_request_header_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.setRequestHeaderPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

set_request_header_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#set_request_header_policy LbaasPolicy#set_request_header_policy}

---

##### `ssl_negotiation_policy`<sup>Optional</sup> <a name="ssl_negotiation_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.sslNegotiationPolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

ssl_negotiation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_negotiation_policy LbaasPolicy#ssl_negotiation_policy}

---

##### `trusted_certificate_policy`<sup>Optional</sup> <a name="trusted_certificate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.Initializer.parameter.trustedCertificatePolicy"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

trusted_certificate_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#trusted_certificate_policy LbaasPolicy#trusted_certificate_policy}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy">put_application_cookie_stickiness_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy">put_cloudgate_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy">put_load_balancer_cookie_stickiness_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy">put_load_balancing_mechanism_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy">put_rate_limiting_request_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy">put_redirect_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy">put_resource_access_control_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy">put_set_request_header_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy">put_ssl_negotiation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy">put_trusted_certificate_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetApplicationCookieStickinessPolicy">reset_application_cookie_stickiness_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetCloudgatePolicy">reset_cloudgate_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancerCookieStickinessPolicy">reset_load_balancer_cookie_stickiness_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancingMechanismPolicy">reset_load_balancing_mechanism_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRateLimitingRequestPolicy">reset_rate_limiting_request_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRedirectPolicy">reset_redirect_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetResourceAccessControlPolicy">reset_resource_access_control_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSetRequestHeaderPolicy">reset_set_request_header_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSslNegotiationPolicy">reset_ssl_negotiation_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetTrustedCertificatePolicy">reset_trusted_certificate_policy</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_application_cookie_stickiness_policy` <a name="put_application_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy"></a>

```python
def put_application_cookie_stickiness_policy(
  cookie_name: str
) -> None
```

###### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putApplicationCookieStickinessPolicy.parameter.cookieName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cookie_name LbaasPolicy#cookie_name}.

---

##### `put_cloudgate_policy` <a name="put_cloudgate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy"></a>

```python
def put_cloudgate_policy(
  virtual_hostname_for_policy_attribution: str,
  cloudgate_application: str = None,
  cloudgate_policy_name: str = None,
  identity_service_instance_guid: str = None
) -> None
```

###### `virtual_hostname_for_policy_attribution`<sup>Required</sup> <a name="virtual_hostname_for_policy_attribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy.parameter.virtualHostnameForPolicyAttribution"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}.

---

###### `cloudgate_application`<sup>Optional</sup> <a name="cloudgate_application" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy.parameter.cloudgateApplication"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}.

---

###### `cloudgate_policy_name`<sup>Optional</sup> <a name="cloudgate_policy_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy.parameter.cloudgatePolicyName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}.

---

###### `identity_service_instance_guid`<sup>Optional</sup> <a name="identity_service_instance_guid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putCloudgatePolicy.parameter.identityServiceInstanceGuid"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}.

---

##### `put_load_balancer_cookie_stickiness_policy` <a name="put_load_balancer_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy"></a>

```python
def put_load_balancer_cookie_stickiness_policy(
  cookie_expiration_period: typing.Union[int, float]
) -> None
```

###### `cookie_expiration_period`<sup>Required</sup> <a name="cookie_expiration_period" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancerCookieStickinessPolicy.parameter.cookieExpirationPeriod"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}.

---

##### `put_load_balancing_mechanism_policy` <a name="put_load_balancing_mechanism_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy"></a>

```python
def put_load_balancing_mechanism_policy(
  load_balancing_mechanism: str
) -> None
```

###### `load_balancing_mechanism`<sup>Required</sup> <a name="load_balancing_mechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putLoadBalancingMechanismPolicy.parameter.loadBalancingMechanism"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}.

---

##### `put_rate_limiting_request_policy` <a name="put_rate_limiting_request_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy"></a>

```python
def put_rate_limiting_request_policy(
  burst_size: typing.Union[int, float],
  delay_excessive_requests: typing.Union[bool, IResolvable],
  requests_per_second: typing.Union[int, float],
  zone: str,
  http_error_code: typing.Union[int, float] = None,
  logging_level: str = None,
  rate_limiting_criteria: str = None,
  zone_memory_size: typing.Union[int, float] = None
) -> None
```

###### `burst_size`<sup>Required</sup> <a name="burst_size" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.burstSize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#burst_size LbaasPolicy#burst_size}.

---

###### `delay_excessive_requests`<sup>Required</sup> <a name="delay_excessive_requests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.delayExcessiveRequests"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}.

---

###### `requests_per_second`<sup>Required</sup> <a name="requests_per_second" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.requestsPerSecond"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}.

---

###### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.zone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#zone LbaasPolicy#zone}.

---

###### `http_error_code`<sup>Optional</sup> <a name="http_error_code" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.httpErrorCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#http_error_code LbaasPolicy#http_error_code}.

---

###### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.loggingLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#logging_level LbaasPolicy#logging_level}.

---

###### `rate_limiting_criteria`<sup>Optional</sup> <a name="rate_limiting_criteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.rateLimitingCriteria"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}.

---

###### `zone_memory_size`<sup>Optional</sup> <a name="zone_memory_size" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRateLimitingRequestPolicy.parameter.zoneMemorySize"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}.

---

##### `put_redirect_policy` <a name="put_redirect_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy"></a>

```python
def put_redirect_policy(
  redirect_uri: str,
  response_code: typing.Union[int, float]
) -> None
```

###### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy.parameter.redirectUri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}.

---

###### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putRedirectPolicy.parameter.responseCode"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#response_code LbaasPolicy#response_code}.

---

##### `put_resource_access_control_policy` <a name="put_resource_access_control_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy"></a>

```python
def put_resource_access_control_policy(
  disposition: str,
  denied_clients: typing.List[str] = None,
  permitted_clients: typing.List[str] = None
) -> None
```

###### `disposition`<sup>Required</sup> <a name="disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy.parameter.disposition"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#disposition LbaasPolicy#disposition}.

---

###### `denied_clients`<sup>Optional</sup> <a name="denied_clients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy.parameter.deniedClients"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#denied_clients LbaasPolicy#denied_clients}.

---

###### `permitted_clients`<sup>Optional</sup> <a name="permitted_clients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putResourceAccessControlPolicy.parameter.permittedClients"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}.

---

##### `put_set_request_header_policy` <a name="put_set_request_header_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy"></a>

```python
def put_set_request_header_policy(
  header_name: str,
  action_when_header_exists: str = None,
  action_when_header_value_is: typing.List[str] = None,
  action_when_header_value_is_not: typing.List[str] = None,
  value: str = None
) -> None
```

###### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.headerName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#header_name LbaasPolicy#header_name}.

---

###### `action_when_header_exists`<sup>Optional</sup> <a name="action_when_header_exists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.actionWhenHeaderExists"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}.

---

###### `action_when_header_value_is`<sup>Optional</sup> <a name="action_when_header_value_is" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.actionWhenHeaderValueIs"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}.

---

###### `action_when_header_value_is_not`<sup>Optional</sup> <a name="action_when_header_value_is_not" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.actionWhenHeaderValueIsNot"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}.

---

###### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSetRequestHeaderPolicy.parameter.value"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#value LbaasPolicy#value}.

---

##### `put_ssl_negotiation_policy` <a name="put_ssl_negotiation_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy"></a>

```python
def put_ssl_negotiation_policy(
  port: typing.Union[int, float],
  ssl_protocol: typing.List[str],
  server_order_preference: str = None,
  ssl_ciphers: typing.List[str] = None
) -> None
```

###### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#port LbaasPolicy#port}.

---

###### `ssl_protocol`<sup>Required</sup> <a name="ssl_protocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy.parameter.sslProtocol"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}.

---

###### `server_order_preference`<sup>Optional</sup> <a name="server_order_preference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy.parameter.serverOrderPreference"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}.

---

###### `ssl_ciphers`<sup>Optional</sup> <a name="ssl_ciphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putSslNegotiationPolicy.parameter.sslCiphers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}.

---

##### `put_trusted_certificate_policy` <a name="put_trusted_certificate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy"></a>

```python
def put_trusted_certificate_policy(
  trusted_certificate: str
) -> None
```

###### `trusted_certificate`<sup>Required</sup> <a name="trusted_certificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.putTrustedCertificatePolicy.parameter.trustedCertificate"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}.

---

##### `reset_application_cookie_stickiness_policy` <a name="reset_application_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetApplicationCookieStickinessPolicy"></a>

```python
def reset_application_cookie_stickiness_policy() -> None
```

##### `reset_cloudgate_policy` <a name="reset_cloudgate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetCloudgatePolicy"></a>

```python
def reset_cloudgate_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_load_balancer_cookie_stickiness_policy` <a name="reset_load_balancer_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancerCookieStickinessPolicy"></a>

```python
def reset_load_balancer_cookie_stickiness_policy() -> None
```

##### `reset_load_balancing_mechanism_policy` <a name="reset_load_balancing_mechanism_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetLoadBalancingMechanismPolicy"></a>

```python
def reset_load_balancing_mechanism_policy() -> None
```

##### `reset_rate_limiting_request_policy` <a name="reset_rate_limiting_request_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRateLimitingRequestPolicy"></a>

```python
def reset_rate_limiting_request_policy() -> None
```

##### `reset_redirect_policy` <a name="reset_redirect_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetRedirectPolicy"></a>

```python
def reset_redirect_policy() -> None
```

##### `reset_resource_access_control_policy` <a name="reset_resource_access_control_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetResourceAccessControlPolicy"></a>

```python
def reset_resource_access_control_policy() -> None
```

##### `reset_set_request_header_policy` <a name="reset_set_request_header_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSetRequestHeaderPolicy"></a>

```python
def reset_set_request_header_policy() -> None
```

##### `reset_ssl_negotiation_policy` <a name="reset_ssl_negotiation_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetSslNegotiationPolicy"></a>

```python
def reset_ssl_negotiation_policy() -> None
```

##### `reset_trusted_certificate_policy` <a name="reset_trusted_certificate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.resetTrustedCertificatePolicy"></a>

```python
def reset_trusted_certificate_policy() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a LbaasPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicy.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a LbaasPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the LbaasPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing LbaasPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbaasPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy">application_cookie_stickiness_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy">cloudgate_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy">load_balancer_cookie_stickiness_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy">load_balancing_mechanism_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy">rate_limiting_request_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy">redirect_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy">resource_access_control_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy">set_request_header_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy">ssl_negotiation_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state">state</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy">trusted_certificate_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput">application_cookie_stickiness_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput">cloudgate_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput">load_balancer_cookie_stickiness_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput">load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput">load_balancing_mechanism_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput">rate_limiting_request_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput">redirect_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput">resource_access_control_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput">set_request_header_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput">ssl_negotiation_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput">trusted_certificate_policy_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer">load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_cookie_stickiness_policy`<sup>Required</sup> <a name="application_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicy"></a>

```python
application_cookie_stickiness_policy: LbaasPolicyApplicationCookieStickinessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference">LbaasPolicyApplicationCookieStickinessPolicyOutputReference</a>

---

##### `cloudgate_policy`<sup>Required</sup> <a name="cloudgate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicy"></a>

```python
cloudgate_policy: LbaasPolicyCloudgatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference">LbaasPolicyCloudgatePolicyOutputReference</a>

---

##### `load_balancer_cookie_stickiness_policy`<sup>Required</sup> <a name="load_balancer_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicy"></a>

```python
load_balancer_cookie_stickiness_policy: LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference">LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference</a>

---

##### `load_balancing_mechanism_policy`<sup>Required</sup> <a name="load_balancing_mechanism_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicy"></a>

```python
load_balancing_mechanism_policy: LbaasPolicyLoadBalancingMechanismPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference">LbaasPolicyLoadBalancingMechanismPolicyOutputReference</a>

---

##### `rate_limiting_request_policy`<sup>Required</sup> <a name="rate_limiting_request_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicy"></a>

```python
rate_limiting_request_policy: LbaasPolicyRateLimitingRequestPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference">LbaasPolicyRateLimitingRequestPolicyOutputReference</a>

---

##### `redirect_policy`<sup>Required</sup> <a name="redirect_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicy"></a>

```python
redirect_policy: LbaasPolicyRedirectPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference">LbaasPolicyRedirectPolicyOutputReference</a>

---

##### `resource_access_control_policy`<sup>Required</sup> <a name="resource_access_control_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicy"></a>

```python
resource_access_control_policy: LbaasPolicyResourceAccessControlPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference">LbaasPolicyResourceAccessControlPolicyOutputReference</a>

---

##### `set_request_header_policy`<sup>Required</sup> <a name="set_request_header_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicy"></a>

```python
set_request_header_policy: LbaasPolicySetRequestHeaderPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference">LbaasPolicySetRequestHeaderPolicyOutputReference</a>

---

##### `ssl_negotiation_policy`<sup>Required</sup> <a name="ssl_negotiation_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicy"></a>

```python
ssl_negotiation_policy: LbaasPolicySslNegotiationPolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference">LbaasPolicySslNegotiationPolicyOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.state"></a>

```python
state: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `trusted_certificate_policy`<sup>Required</sup> <a name="trusted_certificate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicy"></a>

```python
trusted_certificate_policy: LbaasPolicyTrustedCertificatePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference">LbaasPolicyTrustedCertificatePolicyOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `application_cookie_stickiness_policy_input`<sup>Optional</sup> <a name="application_cookie_stickiness_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.applicationCookieStickinessPolicyInput"></a>

```python
application_cookie_stickiness_policy_input: LbaasPolicyApplicationCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---

##### `cloudgate_policy_input`<sup>Optional</sup> <a name="cloudgate_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.cloudgatePolicyInput"></a>

```python
cloudgate_policy_input: LbaasPolicyCloudgatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_cookie_stickiness_policy_input`<sup>Optional</sup> <a name="load_balancer_cookie_stickiness_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerCookieStickinessPolicyInput"></a>

```python
load_balancer_cookie_stickiness_policy_input: LbaasPolicyLoadBalancerCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancerInput"></a>

```python
load_balancer_input: str
```

- *Type:* str

---

##### `load_balancing_mechanism_policy_input`<sup>Optional</sup> <a name="load_balancing_mechanism_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancingMechanismPolicyInput"></a>

```python
load_balancing_mechanism_policy_input: LbaasPolicyLoadBalancingMechanismPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `rate_limiting_request_policy_input`<sup>Optional</sup> <a name="rate_limiting_request_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.rateLimitingRequestPolicyInput"></a>

```python
rate_limiting_request_policy_input: LbaasPolicyRateLimitingRequestPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---

##### `redirect_policy_input`<sup>Optional</sup> <a name="redirect_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.redirectPolicyInput"></a>

```python
redirect_policy_input: LbaasPolicyRedirectPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---

##### `resource_access_control_policy_input`<sup>Optional</sup> <a name="resource_access_control_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.resourceAccessControlPolicyInput"></a>

```python
resource_access_control_policy_input: LbaasPolicyResourceAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---

##### `set_request_header_policy_input`<sup>Optional</sup> <a name="set_request_header_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.setRequestHeaderPolicyInput"></a>

```python
set_request_header_policy_input: LbaasPolicySetRequestHeaderPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---

##### `ssl_negotiation_policy_input`<sup>Optional</sup> <a name="ssl_negotiation_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.sslNegotiationPolicyInput"></a>

```python
ssl_negotiation_policy_input: LbaasPolicySslNegotiationPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---

##### `trusted_certificate_policy_input`<sup>Optional</sup> <a name="trusted_certificate_policy_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.trustedCertificatePolicyInput"></a>

```python
trusted_certificate_policy_input: LbaasPolicyTrustedCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasPolicyApplicationCookieStickinessPolicy <a name="LbaasPolicyApplicationCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy(
  cookie_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName">cookie_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cookie_name LbaasPolicy#cookie_name}. |

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cookie_name LbaasPolicy#cookie_name}.

---

### LbaasPolicyCloudgatePolicy <a name="LbaasPolicyCloudgatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyCloudgatePolicy(
  virtual_hostname_for_policy_attribution: str,
  cloudgate_application: str = None,
  cloudgate_policy_name: str = None,
  identity_service_instance_guid: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution">virtual_hostname_for_policy_attribution</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication">cloudgate_application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName">cloudgate_policy_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid">identity_service_instance_guid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}. |

---

##### `virtual_hostname_for_policy_attribution`<sup>Required</sup> <a name="virtual_hostname_for_policy_attribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.virtualHostnameForPolicyAttribution"></a>

```python
virtual_hostname_for_policy_attribution: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}.

---

##### `cloudgate_application`<sup>Optional</sup> <a name="cloudgate_application" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgateApplication"></a>

```python
cloudgate_application: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}.

---

##### `cloudgate_policy_name`<sup>Optional</sup> <a name="cloudgate_policy_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.cloudgatePolicyName"></a>

```python
cloudgate_policy_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}.

---

##### `identity_service_instance_guid`<sup>Optional</sup> <a name="identity_service_instance_guid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy.property.identityServiceInstanceGuid"></a>

```python
identity_service_instance_guid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}.

---

### LbaasPolicyConfig <a name="LbaasPolicyConfig" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer: str,
  name: str,
  application_cookie_stickiness_policy: LbaasPolicyApplicationCookieStickinessPolicy = None,
  cloudgate_policy: LbaasPolicyCloudgatePolicy = None,
  id: str = None,
  load_balancer_cookie_stickiness_policy: LbaasPolicyLoadBalancerCookieStickinessPolicy = None,
  load_balancing_mechanism_policy: LbaasPolicyLoadBalancingMechanismPolicy = None,
  rate_limiting_request_policy: LbaasPolicyRateLimitingRequestPolicy = None,
  redirect_policy: LbaasPolicyRedirectPolicy = None,
  resource_access_control_policy: LbaasPolicyResourceAccessControlPolicy = None,
  set_request_header_policy: LbaasPolicySetRequestHeaderPolicy = None,
  ssl_negotiation_policy: LbaasPolicySslNegotiationPolicy = None,
  trusted_certificate_policy: LbaasPolicyTrustedCertificatePolicy = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancer LbaasPolicy#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#name LbaasPolicy#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy">application_cookie_stickiness_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | application_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy">cloudgate_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | cloudgate_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#id LbaasPolicy#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancerCookieStickinessPolicy">load_balancer_cookie_stickiness_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | load_balancer_cookie_stickiness_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancingMechanismPolicy">load_balancing_mechanism_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | load_balancing_mechanism_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.rateLimitingRequestPolicy">rate_limiting_request_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | rate_limiting_request_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.redirectPolicy">redirect_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | redirect_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.resourceAccessControlPolicy">resource_access_control_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | resource_access_control_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.setRequestHeaderPolicy">set_request_header_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | set_request_header_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.sslNegotiationPolicy">ssl_negotiation_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | ssl_negotiation_policy block. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.trustedCertificatePolicy">trusted_certificate_policy</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | trusted_certificate_policy block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancer LbaasPolicy#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#name LbaasPolicy#name}.

---

##### `application_cookie_stickiness_policy`<sup>Optional</sup> <a name="application_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.applicationCookieStickinessPolicy"></a>

```python
application_cookie_stickiness_policy: LbaasPolicyApplicationCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

application_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#application_cookie_stickiness_policy LbaasPolicy#application_cookie_stickiness_policy}

---

##### `cloudgate_policy`<sup>Optional</sup> <a name="cloudgate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.cloudgatePolicy"></a>

```python
cloudgate_policy: LbaasPolicyCloudgatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

cloudgate_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_policy LbaasPolicy#cloudgate_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#id LbaasPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `load_balancer_cookie_stickiness_policy`<sup>Optional</sup> <a name="load_balancer_cookie_stickiness_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancerCookieStickinessPolicy"></a>

```python
load_balancer_cookie_stickiness_policy: LbaasPolicyLoadBalancerCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

load_balancer_cookie_stickiness_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancer_cookie_stickiness_policy LbaasPolicy#load_balancer_cookie_stickiness_policy}

---

##### `load_balancing_mechanism_policy`<sup>Optional</sup> <a name="load_balancing_mechanism_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.loadBalancingMechanismPolicy"></a>

```python
load_balancing_mechanism_policy: LbaasPolicyLoadBalancingMechanismPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

load_balancing_mechanism_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancing_mechanism_policy LbaasPolicy#load_balancing_mechanism_policy}

---

##### `rate_limiting_request_policy`<sup>Optional</sup> <a name="rate_limiting_request_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.rateLimitingRequestPolicy"></a>

```python
rate_limiting_request_policy: LbaasPolicyRateLimitingRequestPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

rate_limiting_request_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#rate_limiting_request_policy LbaasPolicy#rate_limiting_request_policy}

---

##### `redirect_policy`<sup>Optional</sup> <a name="redirect_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.redirectPolicy"></a>

```python
redirect_policy: LbaasPolicyRedirectPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

redirect_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#redirect_policy LbaasPolicy#redirect_policy}

---

##### `resource_access_control_policy`<sup>Optional</sup> <a name="resource_access_control_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.resourceAccessControlPolicy"></a>

```python
resource_access_control_policy: LbaasPolicyResourceAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

resource_access_control_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#resource_access_control_policy LbaasPolicy#resource_access_control_policy}

---

##### `set_request_header_policy`<sup>Optional</sup> <a name="set_request_header_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.setRequestHeaderPolicy"></a>

```python
set_request_header_policy: LbaasPolicySetRequestHeaderPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

set_request_header_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#set_request_header_policy LbaasPolicy#set_request_header_policy}

---

##### `ssl_negotiation_policy`<sup>Optional</sup> <a name="ssl_negotiation_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.sslNegotiationPolicy"></a>

```python
ssl_negotiation_policy: LbaasPolicySslNegotiationPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

ssl_negotiation_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_negotiation_policy LbaasPolicy#ssl_negotiation_policy}

---

##### `trusted_certificate_policy`<sup>Optional</sup> <a name="trusted_certificate_policy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyConfig.property.trustedCertificatePolicy"></a>

```python
trusted_certificate_policy: LbaasPolicyTrustedCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

trusted_certificate_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#trusted_certificate_policy LbaasPolicy#trusted_certificate_policy}

---

### LbaasPolicyLoadBalancerCookieStickinessPolicy <a name="LbaasPolicyLoadBalancerCookieStickinessPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy(
  cookie_expiration_period: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod">cookie_expiration_period</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}. |

---

##### `cookie_expiration_period`<sup>Required</sup> <a name="cookie_expiration_period" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy.property.cookieExpirationPeriod"></a>

```python
cookie_expiration_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}.

---

### LbaasPolicyLoadBalancingMechanismPolicy <a name="LbaasPolicyLoadBalancingMechanismPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy(
  load_balancing_mechanism: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism">load_balancing_mechanism</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}. |

---

##### `load_balancing_mechanism`<sup>Required</sup> <a name="load_balancing_mechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy.property.loadBalancingMechanism"></a>

```python
load_balancing_mechanism: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}.

---

### LbaasPolicyRateLimitingRequestPolicy <a name="LbaasPolicyRateLimitingRequestPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy(
  burst_size: typing.Union[int, float],
  delay_excessive_requests: typing.Union[bool, IResolvable],
  requests_per_second: typing.Union[int, float],
  zone: str,
  http_error_code: typing.Union[int, float] = None,
  logging_level: str = None,
  rate_limiting_criteria: str = None,
  zone_memory_size: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize">burst_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#burst_size LbaasPolicy#burst_size}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests">delay_excessive_requests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond">requests_per_second</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone">zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#zone LbaasPolicy#zone}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode">http_error_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#http_error_code LbaasPolicy#http_error_code}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel">logging_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#logging_level LbaasPolicy#logging_level}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria">rate_limiting_criteria</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize">zone_memory_size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}. |

---

##### `burst_size`<sup>Required</sup> <a name="burst_size" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.burstSize"></a>

```python
burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#burst_size LbaasPolicy#burst_size}.

---

##### `delay_excessive_requests`<sup>Required</sup> <a name="delay_excessive_requests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.delayExcessiveRequests"></a>

```python
delay_excessive_requests: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}.

---

##### `requests_per_second`<sup>Required</sup> <a name="requests_per_second" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.requestsPerSecond"></a>

```python
requests_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}.

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zone"></a>

```python
zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#zone LbaasPolicy#zone}.

---

##### `http_error_code`<sup>Optional</sup> <a name="http_error_code" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.httpErrorCode"></a>

```python
http_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#http_error_code LbaasPolicy#http_error_code}.

---

##### `logging_level`<sup>Optional</sup> <a name="logging_level" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#logging_level LbaasPolicy#logging_level}.

---

##### `rate_limiting_criteria`<sup>Optional</sup> <a name="rate_limiting_criteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.rateLimitingCriteria"></a>

```python
rate_limiting_criteria: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}.

---

##### `zone_memory_size`<sup>Optional</sup> <a name="zone_memory_size" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy.property.zoneMemorySize"></a>

```python
zone_memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}.

---

### LbaasPolicyRedirectPolicy <a name="LbaasPolicyRedirectPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyRedirectPolicy(
  redirect_uri: str,
  response_code: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri">redirect_uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#response_code LbaasPolicy#response_code}. |

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}.

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#response_code LbaasPolicy#response_code}.

---

### LbaasPolicyResourceAccessControlPolicy <a name="LbaasPolicyResourceAccessControlPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyResourceAccessControlPolicy(
  disposition: str,
  denied_clients: typing.List[str] = None,
  permitted_clients: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition">disposition</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#disposition LbaasPolicy#disposition}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients">denied_clients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#denied_clients LbaasPolicy#denied_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients">permitted_clients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}. |

---

##### `disposition`<sup>Required</sup> <a name="disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.disposition"></a>

```python
disposition: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#disposition LbaasPolicy#disposition}.

---

##### `denied_clients`<sup>Optional</sup> <a name="denied_clients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.deniedClients"></a>

```python
denied_clients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#denied_clients LbaasPolicy#denied_clients}.

---

##### `permitted_clients`<sup>Optional</sup> <a name="permitted_clients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy.property.permittedClients"></a>

```python
permitted_clients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}.

---

### LbaasPolicySetRequestHeaderPolicy <a name="LbaasPolicySetRequestHeaderPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicySetRequestHeaderPolicy(
  header_name: str,
  action_when_header_exists: str = None,
  action_when_header_value_is: typing.List[str] = None,
  action_when_header_value_is_not: typing.List[str] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName">header_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#header_name LbaasPolicy#header_name}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists">action_when_header_exists</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs">action_when_header_value_is</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot">action_when_header_value_is_not</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#value LbaasPolicy#value}. |

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#header_name LbaasPolicy#header_name}.

---

##### `action_when_header_exists`<sup>Optional</sup> <a name="action_when_header_exists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderExists"></a>

```python
action_when_header_exists: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}.

---

##### `action_when_header_value_is`<sup>Optional</sup> <a name="action_when_header_value_is" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIs"></a>

```python
action_when_header_value_is: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}.

---

##### `action_when_header_value_is_not`<sup>Optional</sup> <a name="action_when_header_value_is_not" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.actionWhenHeaderValueIsNot"></a>

```python
action_when_header_value_is_not: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#value LbaasPolicy#value}.

---

### LbaasPolicySslNegotiationPolicy <a name="LbaasPolicySslNegotiationPolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicySslNegotiationPolicy(
  port: typing.Union[int, float],
  ssl_protocol: typing.List[str],
  server_order_preference: str = None,
  ssl_ciphers: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#port LbaasPolicy#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol">ssl_protocol</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference">server_order_preference</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers">ssl_ciphers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#port LbaasPolicy#port}.

---

##### `ssl_protocol`<sup>Required</sup> <a name="ssl_protocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslProtocol"></a>

```python
ssl_protocol: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}.

---

##### `server_order_preference`<sup>Optional</sup> <a name="server_order_preference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.serverOrderPreference"></a>

```python
server_order_preference: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}.

---

##### `ssl_ciphers`<sup>Optional</sup> <a name="ssl_ciphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy.property.sslCiphers"></a>

```python
ssl_ciphers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}.

---

### LbaasPolicyTrustedCertificatePolicy <a name="LbaasPolicyTrustedCertificatePolicy" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyTrustedCertificatePolicy(
  trusted_certificate: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate">trusted_certificate</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}. |

---

##### `trusted_certificate`<sup>Required</sup> <a name="trusted_certificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy.property.trustedCertificate"></a>

```python
trusted_certificate: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasPolicyApplicationCookieStickinessPolicyOutputReference <a name="LbaasPolicyApplicationCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput">cookie_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName">cookie_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_name_input`<sup>Optional</sup> <a name="cookie_name_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieNameInput"></a>

```python
cookie_name_input: str
```

- *Type:* str

---

##### `cookie_name`<sup>Required</sup> <a name="cookie_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.cookieName"></a>

```python
cookie_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicyApplicationCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyApplicationCookieStickinessPolicy">LbaasPolicyApplicationCookieStickinessPolicy</a>

---


### LbaasPolicyCloudgatePolicyOutputReference <a name="LbaasPolicyCloudgatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgateApplication">reset_cloudgate_application</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgatePolicyName">reset_cloudgate_policy_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetIdentityServiceInstanceGuid">reset_identity_service_instance_guid</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cloudgate_application` <a name="reset_cloudgate_application" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgateApplication"></a>

```python
def reset_cloudgate_application() -> None
```

##### `reset_cloudgate_policy_name` <a name="reset_cloudgate_policy_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetCloudgatePolicyName"></a>

```python
def reset_cloudgate_policy_name() -> None
```

##### `reset_identity_service_instance_guid` <a name="reset_identity_service_instance_guid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.resetIdentityServiceInstanceGuid"></a>

```python
def reset_identity_service_instance_guid() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput">cloudgate_application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput">cloudgate_policy_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput">identity_service_instance_guid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput">virtual_hostname_for_policy_attribution_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication">cloudgate_application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName">cloudgate_policy_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid">identity_service_instance_guid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution">virtual_hostname_for_policy_attribution</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloudgate_application_input`<sup>Optional</sup> <a name="cloudgate_application_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplicationInput"></a>

```python
cloudgate_application_input: str
```

- *Type:* str

---

##### `cloudgate_policy_name_input`<sup>Optional</sup> <a name="cloudgate_policy_name_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyNameInput"></a>

```python
cloudgate_policy_name_input: str
```

- *Type:* str

---

##### `identity_service_instance_guid_input`<sup>Optional</sup> <a name="identity_service_instance_guid_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuidInput"></a>

```python
identity_service_instance_guid_input: str
```

- *Type:* str

---

##### `virtual_hostname_for_policy_attribution_input`<sup>Optional</sup> <a name="virtual_hostname_for_policy_attribution_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttributionInput"></a>

```python
virtual_hostname_for_policy_attribution_input: str
```

- *Type:* str

---

##### `cloudgate_application`<sup>Required</sup> <a name="cloudgate_application" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgateApplication"></a>

```python
cloudgate_application: str
```

- *Type:* str

---

##### `cloudgate_policy_name`<sup>Required</sup> <a name="cloudgate_policy_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.cloudgatePolicyName"></a>

```python
cloudgate_policy_name: str
```

- *Type:* str

---

##### `identity_service_instance_guid`<sup>Required</sup> <a name="identity_service_instance_guid" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.identityServiceInstanceGuid"></a>

```python
identity_service_instance_guid: str
```

- *Type:* str

---

##### `virtual_hostname_for_policy_attribution`<sup>Required</sup> <a name="virtual_hostname_for_policy_attribution" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.virtualHostnameForPolicyAttribution"></a>

```python
virtual_hostname_for_policy_attribution: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicyCloudgatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyCloudgatePolicy">LbaasPolicyCloudgatePolicy</a>

---


### LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference <a name="LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput">cookie_expiration_period_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod">cookie_expiration_period</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cookie_expiration_period_input`<sup>Optional</sup> <a name="cookie_expiration_period_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriodInput"></a>

```python
cookie_expiration_period_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `cookie_expiration_period`<sup>Required</sup> <a name="cookie_expiration_period" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.cookieExpirationPeriod"></a>

```python
cookie_expiration_period: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicyLoadBalancerCookieStickinessPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancerCookieStickinessPolicy">LbaasPolicyLoadBalancerCookieStickinessPolicy</a>

---


### LbaasPolicyLoadBalancingMechanismPolicyOutputReference <a name="LbaasPolicyLoadBalancingMechanismPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput">load_balancing_mechanism_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism">load_balancing_mechanism</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `load_balancing_mechanism_input`<sup>Optional</sup> <a name="load_balancing_mechanism_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanismInput"></a>

```python
load_balancing_mechanism_input: str
```

- *Type:* str

---

##### `load_balancing_mechanism`<sup>Required</sup> <a name="load_balancing_mechanism" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.loadBalancingMechanism"></a>

```python
load_balancing_mechanism: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicyLoadBalancingMechanismPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyLoadBalancingMechanismPolicy">LbaasPolicyLoadBalancingMechanismPolicy</a>

---


### LbaasPolicyRateLimitingRequestPolicyOutputReference <a name="LbaasPolicyRateLimitingRequestPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetHttpErrorCode">reset_http_error_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetLoggingLevel">reset_logging_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetRateLimitingCriteria">reset_rate_limiting_criteria</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetZoneMemorySize">reset_zone_memory_size</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_http_error_code` <a name="reset_http_error_code" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetHttpErrorCode"></a>

```python
def reset_http_error_code() -> None
```

##### `reset_logging_level` <a name="reset_logging_level" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetLoggingLevel"></a>

```python
def reset_logging_level() -> None
```

##### `reset_rate_limiting_criteria` <a name="reset_rate_limiting_criteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetRateLimitingCriteria"></a>

```python
def reset_rate_limiting_criteria() -> None
```

##### `reset_zone_memory_size` <a name="reset_zone_memory_size" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.resetZoneMemorySize"></a>

```python
def reset_zone_memory_size() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput">burst_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput">delay_excessive_requests_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput">http_error_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput">logging_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput">rate_limiting_criteria_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput">requests_per_second_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput">zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput">zone_memory_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize">burst_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests">delay_excessive_requests</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode">http_error_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel">logging_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria">rate_limiting_criteria</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond">requests_per_second</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone">zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize">zone_memory_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `burst_size_input`<sup>Optional</sup> <a name="burst_size_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSizeInput"></a>

```python
burst_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delay_excessive_requests_input`<sup>Optional</sup> <a name="delay_excessive_requests_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequestsInput"></a>

```python
delay_excessive_requests_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_error_code_input`<sup>Optional</sup> <a name="http_error_code_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCodeInput"></a>

```python
http_error_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logging_level_input`<sup>Optional</sup> <a name="logging_level_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevelInput"></a>

```python
logging_level_input: str
```

- *Type:* str

---

##### `rate_limiting_criteria_input`<sup>Optional</sup> <a name="rate_limiting_criteria_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteriaInput"></a>

```python
rate_limiting_criteria_input: str
```

- *Type:* str

---

##### `requests_per_second_input`<sup>Optional</sup> <a name="requests_per_second_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecondInput"></a>

```python
requests_per_second_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone_input`<sup>Optional</sup> <a name="zone_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneInput"></a>

```python
zone_input: str
```

- *Type:* str

---

##### `zone_memory_size_input`<sup>Optional</sup> <a name="zone_memory_size_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySizeInput"></a>

```python
zone_memory_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `burst_size`<sup>Required</sup> <a name="burst_size" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.burstSize"></a>

```python
burst_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `delay_excessive_requests`<sup>Required</sup> <a name="delay_excessive_requests" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.delayExcessiveRequests"></a>

```python
delay_excessive_requests: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `http_error_code`<sup>Required</sup> <a name="http_error_code" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.httpErrorCode"></a>

```python
http_error_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `logging_level`<sup>Required</sup> <a name="logging_level" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.loggingLevel"></a>

```python
logging_level: str
```

- *Type:* str

---

##### `rate_limiting_criteria`<sup>Required</sup> <a name="rate_limiting_criteria" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.rateLimitingCriteria"></a>

```python
rate_limiting_criteria: str
```

- *Type:* str

---

##### `requests_per_second`<sup>Required</sup> <a name="requests_per_second" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.requestsPerSecond"></a>

```python
requests_per_second: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zone"></a>

```python
zone: str
```

- *Type:* str

---

##### `zone_memory_size`<sup>Required</sup> <a name="zone_memory_size" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.zoneMemorySize"></a>

```python
zone_memory_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicyRateLimitingRequestPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRateLimitingRequestPolicy">LbaasPolicyRateLimitingRequestPolicy</a>

---


### LbaasPolicyRedirectPolicyOutputReference <a name="LbaasPolicyRedirectPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput">redirect_uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput">response_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri">redirect_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode">response_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `redirect_uri_input`<sup>Optional</sup> <a name="redirect_uri_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUriInput"></a>

```python
redirect_uri_input: str
```

- *Type:* str

---

##### `response_code_input`<sup>Optional</sup> <a name="response_code_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCodeInput"></a>

```python
response_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redirect_uri`<sup>Required</sup> <a name="redirect_uri" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.redirectUri"></a>

```python
redirect_uri: str
```

- *Type:* str

---

##### `response_code`<sup>Required</sup> <a name="response_code" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.responseCode"></a>

```python
response_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicyRedirectPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyRedirectPolicy">LbaasPolicyRedirectPolicy</a>

---


### LbaasPolicyResourceAccessControlPolicyOutputReference <a name="LbaasPolicyResourceAccessControlPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetDeniedClients">reset_denied_clients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetPermittedClients">reset_permitted_clients</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_denied_clients` <a name="reset_denied_clients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetDeniedClients"></a>

```python
def reset_denied_clients() -> None
```

##### `reset_permitted_clients` <a name="reset_permitted_clients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.resetPermittedClients"></a>

```python
def reset_permitted_clients() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput">denied_clients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput">disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput">permitted_clients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients">denied_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition">disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients">permitted_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `denied_clients_input`<sup>Optional</sup> <a name="denied_clients_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClientsInput"></a>

```python
denied_clients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disposition_input`<sup>Optional</sup> <a name="disposition_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.dispositionInput"></a>

```python
disposition_input: str
```

- *Type:* str

---

##### `permitted_clients_input`<sup>Optional</sup> <a name="permitted_clients_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClientsInput"></a>

```python
permitted_clients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `denied_clients`<sup>Required</sup> <a name="denied_clients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.deniedClients"></a>

```python
denied_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disposition`<sup>Required</sup> <a name="disposition" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.disposition"></a>

```python
disposition: str
```

- *Type:* str

---

##### `permitted_clients`<sup>Required</sup> <a name="permitted_clients" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.permittedClients"></a>

```python
permitted_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicyResourceAccessControlPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyResourceAccessControlPolicy">LbaasPolicyResourceAccessControlPolicy</a>

---


### LbaasPolicySetRequestHeaderPolicyOutputReference <a name="LbaasPolicySetRequestHeaderPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderExists">reset_action_when_header_exists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIs">reset_action_when_header_value_is</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIsNot">reset_action_when_header_value_is_not</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_action_when_header_exists` <a name="reset_action_when_header_exists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderExists"></a>

```python
def reset_action_when_header_exists() -> None
```

##### `reset_action_when_header_value_is` <a name="reset_action_when_header_value_is" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIs"></a>

```python
def reset_action_when_header_value_is() -> None
```

##### `reset_action_when_header_value_is_not` <a name="reset_action_when_header_value_is_not" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetActionWhenHeaderValueIsNot"></a>

```python
def reset_action_when_header_value_is_not() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput">action_when_header_exists_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput">action_when_header_value_is_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput">action_when_header_value_is_not_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput">header_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists">action_when_header_exists</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs">action_when_header_value_is</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot">action_when_header_value_is_not</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName">header_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_when_header_exists_input`<sup>Optional</sup> <a name="action_when_header_exists_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExistsInput"></a>

```python
action_when_header_exists_input: str
```

- *Type:* str

---

##### `action_when_header_value_is_input`<sup>Optional</sup> <a name="action_when_header_value_is_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsInput"></a>

```python
action_when_header_value_is_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `action_when_header_value_is_not_input`<sup>Optional</sup> <a name="action_when_header_value_is_not_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNotInput"></a>

```python
action_when_header_value_is_not_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `header_name_input`<sup>Optional</sup> <a name="header_name_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerNameInput"></a>

```python
header_name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `action_when_header_exists`<sup>Required</sup> <a name="action_when_header_exists" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderExists"></a>

```python
action_when_header_exists: str
```

- *Type:* str

---

##### `action_when_header_value_is`<sup>Required</sup> <a name="action_when_header_value_is" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIs"></a>

```python
action_when_header_value_is: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `action_when_header_value_is_not`<sup>Required</sup> <a name="action_when_header_value_is_not" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.actionWhenHeaderValueIsNot"></a>

```python
action_when_header_value_is_not: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `header_name`<sup>Required</sup> <a name="header_name" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.headerName"></a>

```python
header_name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicySetRequestHeaderPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySetRequestHeaderPolicy">LbaasPolicySetRequestHeaderPolicy</a>

---


### LbaasPolicySslNegotiationPolicyOutputReference <a name="LbaasPolicySslNegotiationPolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetServerOrderPreference">reset_server_order_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetSslCiphers">reset_ssl_ciphers</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_server_order_preference` <a name="reset_server_order_preference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetServerOrderPreference"></a>

```python
def reset_server_order_preference() -> None
```

##### `reset_ssl_ciphers` <a name="reset_ssl_ciphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.resetSslCiphers"></a>

```python
def reset_ssl_ciphers() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput">server_order_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput">ssl_ciphers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput">ssl_protocol_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference">server_order_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers">ssl_ciphers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol">ssl_protocol</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_order_preference_input`<sup>Optional</sup> <a name="server_order_preference_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreferenceInput"></a>

```python
server_order_preference_input: str
```

- *Type:* str

---

##### `ssl_ciphers_input`<sup>Optional</sup> <a name="ssl_ciphers_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphersInput"></a>

```python
ssl_ciphers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_protocol_input`<sup>Optional</sup> <a name="ssl_protocol_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocolInput"></a>

```python
ssl_protocol_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_order_preference`<sup>Required</sup> <a name="server_order_preference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.serverOrderPreference"></a>

```python
server_order_preference: str
```

- *Type:* str

---

##### `ssl_ciphers`<sup>Required</sup> <a name="ssl_ciphers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslCiphers"></a>

```python
ssl_ciphers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ssl_protocol`<sup>Required</sup> <a name="ssl_protocol" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.sslProtocol"></a>

```python
ssl_protocol: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicySslNegotiationPolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicySslNegotiationPolicy">LbaasPolicySslNegotiationPolicy</a>

---


### LbaasPolicyTrustedCertificatePolicyOutputReference <a name="LbaasPolicyTrustedCertificatePolicyOutputReference" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_policy

lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput">trusted_certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate">trusted_certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `trusted_certificate_input`<sup>Optional</sup> <a name="trusted_certificate_input" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificateInput"></a>

```python
trusted_certificate_input: str
```

- *Type:* str

---

##### `trusted_certificate`<sup>Required</sup> <a name="trusted_certificate" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.trustedCertificate"></a>

```python
trusted_certificate: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicyOutputReference.property.internalValue"></a>

```python
internal_value: LbaasPolicyTrustedCertificatePolicy
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasPolicy.LbaasPolicyTrustedCertificatePolicy">LbaasPolicyTrustedCertificatePolicy</a>

---



