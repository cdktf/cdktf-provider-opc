// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbaasPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#id LbaasPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancer LbaasPolicy#load_balancer}
  */
  readonly loadBalancer: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#name LbaasPolicy#name}
  */
  readonly name: string;
  /**
  * application_cookie_stickiness_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#application_cookie_stickiness_policy LbaasPolicy#application_cookie_stickiness_policy}
  */
  readonly applicationCookieStickinessPolicy?: LbaasPolicyApplicationCookieStickinessPolicy;
  /**
  * cloudgate_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_policy LbaasPolicy#cloudgate_policy}
  */
  readonly cloudgatePolicy?: LbaasPolicyCloudgatePolicy;
  /**
  * load_balancer_cookie_stickiness_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancer_cookie_stickiness_policy LbaasPolicy#load_balancer_cookie_stickiness_policy}
  */
  readonly loadBalancerCookieStickinessPolicy?: LbaasPolicyLoadBalancerCookieStickinessPolicy;
  /**
  * load_balancing_mechanism_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancing_mechanism_policy LbaasPolicy#load_balancing_mechanism_policy}
  */
  readonly loadBalancingMechanismPolicy?: LbaasPolicyLoadBalancingMechanismPolicy;
  /**
  * rate_limiting_request_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#rate_limiting_request_policy LbaasPolicy#rate_limiting_request_policy}
  */
  readonly rateLimitingRequestPolicy?: LbaasPolicyRateLimitingRequestPolicy;
  /**
  * redirect_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#redirect_policy LbaasPolicy#redirect_policy}
  */
  readonly redirectPolicy?: LbaasPolicyRedirectPolicy;
  /**
  * resource_access_control_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#resource_access_control_policy LbaasPolicy#resource_access_control_policy}
  */
  readonly resourceAccessControlPolicy?: LbaasPolicyResourceAccessControlPolicy;
  /**
  * set_request_header_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#set_request_header_policy LbaasPolicy#set_request_header_policy}
  */
  readonly setRequestHeaderPolicy?: LbaasPolicySetRequestHeaderPolicy;
  /**
  * ssl_negotiation_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_negotiation_policy LbaasPolicy#ssl_negotiation_policy}
  */
  readonly sslNegotiationPolicy?: LbaasPolicySslNegotiationPolicy;
  /**
  * trusted_certificate_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#trusted_certificate_policy LbaasPolicy#trusted_certificate_policy}
  */
  readonly trustedCertificatePolicy?: LbaasPolicyTrustedCertificatePolicy;
}
export interface LbaasPolicyApplicationCookieStickinessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cookie_name LbaasPolicy#cookie_name}
  */
  readonly cookieName: string;
}

export function lbaasPolicyApplicationCookieStickinessPolicyToTerraform(struct?: LbaasPolicyApplicationCookieStickinessPolicyOutputReference | LbaasPolicyApplicationCookieStickinessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
  }
}


export function lbaasPolicyApplicationCookieStickinessPolicyToHclTerraform(struct?: LbaasPolicyApplicationCookieStickinessPolicyOutputReference | LbaasPolicyApplicationCookieStickinessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicyApplicationCookieStickinessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicyApplicationCookieStickinessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicyApplicationCookieStickinessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieName = value.cookieName;
    }
  }

  // cookie_name - computed: false, optional: false, required: true
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }
}
export interface LbaasPolicyCloudgatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_application LbaasPolicy#cloudgate_application}
  */
  readonly cloudgateApplication?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cloudgate_policy_name LbaasPolicy#cloudgate_policy_name}
  */
  readonly cloudgatePolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#identity_service_instance_guid LbaasPolicy#identity_service_instance_guid}
  */
  readonly identityServiceInstanceGuid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#virtual_hostname_for_policy_attribution LbaasPolicy#virtual_hostname_for_policy_attribution}
  */
  readonly virtualHostnameForPolicyAttribution: string;
}

export function lbaasPolicyCloudgatePolicyToTerraform(struct?: LbaasPolicyCloudgatePolicyOutputReference | LbaasPolicyCloudgatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloudgate_application: cdktf.stringToTerraform(struct!.cloudgateApplication),
    cloudgate_policy_name: cdktf.stringToTerraform(struct!.cloudgatePolicyName),
    identity_service_instance_guid: cdktf.stringToTerraform(struct!.identityServiceInstanceGuid),
    virtual_hostname_for_policy_attribution: cdktf.stringToTerraform(struct!.virtualHostnameForPolicyAttribution),
  }
}


export function lbaasPolicyCloudgatePolicyToHclTerraform(struct?: LbaasPolicyCloudgatePolicyOutputReference | LbaasPolicyCloudgatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloudgate_application: {
      value: cdktf.stringToHclTerraform(struct!.cloudgateApplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudgate_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.cloudgatePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity_service_instance_guid: {
      value: cdktf.stringToHclTerraform(struct!.identityServiceInstanceGuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_hostname_for_policy_attribution: {
      value: cdktf.stringToHclTerraform(struct!.virtualHostnameForPolicyAttribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicyCloudgatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicyCloudgatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudgateApplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudgateApplication = this._cloudgateApplication;
    }
    if (this._cloudgatePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudgatePolicyName = this._cloudgatePolicyName;
    }
    if (this._identityServiceInstanceGuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityServiceInstanceGuid = this._identityServiceInstanceGuid;
    }
    if (this._virtualHostnameForPolicyAttribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualHostnameForPolicyAttribution = this._virtualHostnameForPolicyAttribution;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicyCloudgatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudgateApplication = undefined;
      this._cloudgatePolicyName = undefined;
      this._identityServiceInstanceGuid = undefined;
      this._virtualHostnameForPolicyAttribution = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudgateApplication = value.cloudgateApplication;
      this._cloudgatePolicyName = value.cloudgatePolicyName;
      this._identityServiceInstanceGuid = value.identityServiceInstanceGuid;
      this._virtualHostnameForPolicyAttribution = value.virtualHostnameForPolicyAttribution;
    }
  }

  // cloudgate_application - computed: false, optional: true, required: false
  private _cloudgateApplication?: string; 
  public get cloudgateApplication() {
    return this.getStringAttribute('cloudgate_application');
  }
  public set cloudgateApplication(value: string) {
    this._cloudgateApplication = value;
  }
  public resetCloudgateApplication() {
    this._cloudgateApplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudgateApplicationInput() {
    return this._cloudgateApplication;
  }

  // cloudgate_policy_name - computed: false, optional: true, required: false
  private _cloudgatePolicyName?: string; 
  public get cloudgatePolicyName() {
    return this.getStringAttribute('cloudgate_policy_name');
  }
  public set cloudgatePolicyName(value: string) {
    this._cloudgatePolicyName = value;
  }
  public resetCloudgatePolicyName() {
    this._cloudgatePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudgatePolicyNameInput() {
    return this._cloudgatePolicyName;
  }

  // identity_service_instance_guid - computed: false, optional: true, required: false
  private _identityServiceInstanceGuid?: string; 
  public get identityServiceInstanceGuid() {
    return this.getStringAttribute('identity_service_instance_guid');
  }
  public set identityServiceInstanceGuid(value: string) {
    this._identityServiceInstanceGuid = value;
  }
  public resetIdentityServiceInstanceGuid() {
    this._identityServiceInstanceGuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityServiceInstanceGuidInput() {
    return this._identityServiceInstanceGuid;
  }

  // virtual_hostname_for_policy_attribution - computed: false, optional: false, required: true
  private _virtualHostnameForPolicyAttribution?: string; 
  public get virtualHostnameForPolicyAttribution() {
    return this.getStringAttribute('virtual_hostname_for_policy_attribution');
  }
  public set virtualHostnameForPolicyAttribution(value: string) {
    this._virtualHostnameForPolicyAttribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualHostnameForPolicyAttributionInput() {
    return this._virtualHostnameForPolicyAttribution;
  }
}
export interface LbaasPolicyLoadBalancerCookieStickinessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#cookie_expiration_period LbaasPolicy#cookie_expiration_period}
  */
  readonly cookieExpirationPeriod: number;
}

export function lbaasPolicyLoadBalancerCookieStickinessPolicyToTerraform(struct?: LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference | LbaasPolicyLoadBalancerCookieStickinessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_expiration_period: cdktf.numberToTerraform(struct!.cookieExpirationPeriod),
  }
}


export function lbaasPolicyLoadBalancerCookieStickinessPolicyToHclTerraform(struct?: LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference | LbaasPolicyLoadBalancerCookieStickinessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_expiration_period: {
      value: cdktf.numberToHclTerraform(struct!.cookieExpirationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicyLoadBalancerCookieStickinessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieExpirationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieExpirationPeriod = this._cookieExpirationPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicyLoadBalancerCookieStickinessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cookieExpirationPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cookieExpirationPeriod = value.cookieExpirationPeriod;
    }
  }

  // cookie_expiration_period - computed: false, optional: false, required: true
  private _cookieExpirationPeriod?: number; 
  public get cookieExpirationPeriod() {
    return this.getNumberAttribute('cookie_expiration_period');
  }
  public set cookieExpirationPeriod(value: number) {
    this._cookieExpirationPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieExpirationPeriodInput() {
    return this._cookieExpirationPeriod;
  }
}
export interface LbaasPolicyLoadBalancingMechanismPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#load_balancing_mechanism LbaasPolicy#load_balancing_mechanism}
  */
  readonly loadBalancingMechanism: string;
}

export function lbaasPolicyLoadBalancingMechanismPolicyToTerraform(struct?: LbaasPolicyLoadBalancingMechanismPolicyOutputReference | LbaasPolicyLoadBalancingMechanismPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancing_mechanism: cdktf.stringToTerraform(struct!.loadBalancingMechanism),
  }
}


export function lbaasPolicyLoadBalancingMechanismPolicyToHclTerraform(struct?: LbaasPolicyLoadBalancingMechanismPolicyOutputReference | LbaasPolicyLoadBalancingMechanismPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancing_mechanism: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancingMechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicyLoadBalancingMechanismPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicyLoadBalancingMechanismPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancingMechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancingMechanism = this._loadBalancingMechanism;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicyLoadBalancingMechanismPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._loadBalancingMechanism = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._loadBalancingMechanism = value.loadBalancingMechanism;
    }
  }

  // load_balancing_mechanism - computed: false, optional: false, required: true
  private _loadBalancingMechanism?: string; 
  public get loadBalancingMechanism() {
    return this.getStringAttribute('load_balancing_mechanism');
  }
  public set loadBalancingMechanism(value: string) {
    this._loadBalancingMechanism = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingMechanismInput() {
    return this._loadBalancingMechanism;
  }
}
export interface LbaasPolicyRateLimitingRequestPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#burst_size LbaasPolicy#burst_size}
  */
  readonly burstSize: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#delay_excessive_requests LbaasPolicy#delay_excessive_requests}
  */
  readonly delayExcessiveRequests: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#http_error_code LbaasPolicy#http_error_code}
  */
  readonly httpErrorCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#logging_level LbaasPolicy#logging_level}
  */
  readonly loggingLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#rate_limiting_criteria LbaasPolicy#rate_limiting_criteria}
  */
  readonly rateLimitingCriteria?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#requests_per_second LbaasPolicy#requests_per_second}
  */
  readonly requestsPerSecond: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#zone LbaasPolicy#zone}
  */
  readonly zone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#zone_memory_size LbaasPolicy#zone_memory_size}
  */
  readonly zoneMemorySize?: number;
}

export function lbaasPolicyRateLimitingRequestPolicyToTerraform(struct?: LbaasPolicyRateLimitingRequestPolicyOutputReference | LbaasPolicyRateLimitingRequestPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    burst_size: cdktf.numberToTerraform(struct!.burstSize),
    delay_excessive_requests: cdktf.booleanToTerraform(struct!.delayExcessiveRequests),
    http_error_code: cdktf.numberToTerraform(struct!.httpErrorCode),
    logging_level: cdktf.stringToTerraform(struct!.loggingLevel),
    rate_limiting_criteria: cdktf.stringToTerraform(struct!.rateLimitingCriteria),
    requests_per_second: cdktf.numberToTerraform(struct!.requestsPerSecond),
    zone: cdktf.stringToTerraform(struct!.zone),
    zone_memory_size: cdktf.numberToTerraform(struct!.zoneMemorySize),
  }
}


export function lbaasPolicyRateLimitingRequestPolicyToHclTerraform(struct?: LbaasPolicyRateLimitingRequestPolicyOutputReference | LbaasPolicyRateLimitingRequestPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    burst_size: {
      value: cdktf.numberToHclTerraform(struct!.burstSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delay_excessive_requests: {
      value: cdktf.booleanToHclTerraform(struct!.delayExcessiveRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_error_code: {
      value: cdktf.numberToHclTerraform(struct!.httpErrorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging_level: {
      value: cdktf.stringToHclTerraform(struct!.loggingLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rate_limiting_criteria: {
      value: cdktf.stringToHclTerraform(struct!.rateLimitingCriteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests_per_second: {
      value: cdktf.numberToHclTerraform(struct!.requestsPerSecond),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone_memory_size: {
      value: cdktf.numberToHclTerraform(struct!.zoneMemorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicyRateLimitingRequestPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicyRateLimitingRequestPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._burstSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstSize = this._burstSize;
    }
    if (this._delayExcessiveRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.delayExcessiveRequests = this._delayExcessiveRequests;
    }
    if (this._httpErrorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrorCode = this._httpErrorCode;
    }
    if (this._loggingLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingLevel = this._loggingLevel;
    }
    if (this._rateLimitingCriteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitingCriteria = this._rateLimitingCriteria;
    }
    if (this._requestsPerSecond !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsPerSecond = this._requestsPerSecond;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    if (this._zoneMemorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneMemorySize = this._zoneMemorySize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicyRateLimitingRequestPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._burstSize = undefined;
      this._delayExcessiveRequests = undefined;
      this._httpErrorCode = undefined;
      this._loggingLevel = undefined;
      this._rateLimitingCriteria = undefined;
      this._requestsPerSecond = undefined;
      this._zone = undefined;
      this._zoneMemorySize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._burstSize = value.burstSize;
      this._delayExcessiveRequests = value.delayExcessiveRequests;
      this._httpErrorCode = value.httpErrorCode;
      this._loggingLevel = value.loggingLevel;
      this._rateLimitingCriteria = value.rateLimitingCriteria;
      this._requestsPerSecond = value.requestsPerSecond;
      this._zone = value.zone;
      this._zoneMemorySize = value.zoneMemorySize;
    }
  }

  // burst_size - computed: false, optional: false, required: true
  private _burstSize?: number; 
  public get burstSize() {
    return this.getNumberAttribute('burst_size');
  }
  public set burstSize(value: number) {
    this._burstSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get burstSizeInput() {
    return this._burstSize;
  }

  // delay_excessive_requests - computed: false, optional: false, required: true
  private _delayExcessiveRequests?: boolean | cdktf.IResolvable; 
  public get delayExcessiveRequests() {
    return this.getBooleanAttribute('delay_excessive_requests');
  }
  public set delayExcessiveRequests(value: boolean | cdktf.IResolvable) {
    this._delayExcessiveRequests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayExcessiveRequestsInput() {
    return this._delayExcessiveRequests;
  }

  // http_error_code - computed: false, optional: true, required: false
  private _httpErrorCode?: number; 
  public get httpErrorCode() {
    return this.getNumberAttribute('http_error_code');
  }
  public set httpErrorCode(value: number) {
    this._httpErrorCode = value;
  }
  public resetHttpErrorCode() {
    this._httpErrorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrorCodeInput() {
    return this._httpErrorCode;
  }

  // logging_level - computed: false, optional: true, required: false
  private _loggingLevel?: string; 
  public get loggingLevel() {
    return this.getStringAttribute('logging_level');
  }
  public set loggingLevel(value: string) {
    this._loggingLevel = value;
  }
  public resetLoggingLevel() {
    this._loggingLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingLevelInput() {
    return this._loggingLevel;
  }

  // rate_limiting_criteria - computed: false, optional: true, required: false
  private _rateLimitingCriteria?: string; 
  public get rateLimitingCriteria() {
    return this.getStringAttribute('rate_limiting_criteria');
  }
  public set rateLimitingCriteria(value: string) {
    this._rateLimitingCriteria = value;
  }
  public resetRateLimitingCriteria() {
    this._rateLimitingCriteria = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingCriteriaInput() {
    return this._rateLimitingCriteria;
  }

  // requests_per_second - computed: false, optional: false, required: true
  private _requestsPerSecond?: number; 
  public get requestsPerSecond() {
    return this.getNumberAttribute('requests_per_second');
  }
  public set requestsPerSecond(value: number) {
    this._requestsPerSecond = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerSecondInput() {
    return this._requestsPerSecond;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // zone_memory_size - computed: false, optional: true, required: false
  private _zoneMemorySize?: number; 
  public get zoneMemorySize() {
    return this.getNumberAttribute('zone_memory_size');
  }
  public set zoneMemorySize(value: number) {
    this._zoneMemorySize = value;
  }
  public resetZoneMemorySize() {
    this._zoneMemorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneMemorySizeInput() {
    return this._zoneMemorySize;
  }
}
export interface LbaasPolicyRedirectPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#redirect_uri LbaasPolicy#redirect_uri}
  */
  readonly redirectUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#response_code LbaasPolicy#response_code}
  */
  readonly responseCode: number;
}

export function lbaasPolicyRedirectPolicyToTerraform(struct?: LbaasPolicyRedirectPolicyOutputReference | LbaasPolicyRedirectPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
    response_code: cdktf.numberToTerraform(struct!.responseCode),
  }
}


export function lbaasPolicyRedirectPolicyToHclTerraform(struct?: LbaasPolicyRedirectPolicyOutputReference | LbaasPolicyRedirectPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.numberToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicyRedirectPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicyRedirectPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicyRedirectPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._redirectUri = undefined;
      this._responseCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._redirectUri = value.redirectUri;
      this._responseCode = value.responseCode;
    }
  }

  // redirect_uri - computed: false, optional: false, required: true
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: number; 
  public get responseCode() {
    return this.getNumberAttribute('response_code');
  }
  public set responseCode(value: number) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface LbaasPolicyResourceAccessControlPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#denied_clients LbaasPolicy#denied_clients}
  */
  readonly deniedClients?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#disposition LbaasPolicy#disposition}
  */
  readonly disposition: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#permitted_clients LbaasPolicy#permitted_clients}
  */
  readonly permittedClients?: string[];
}

export function lbaasPolicyResourceAccessControlPolicyToTerraform(struct?: LbaasPolicyResourceAccessControlPolicyOutputReference | LbaasPolicyResourceAccessControlPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedClients),
    disposition: cdktf.stringToTerraform(struct!.disposition),
    permitted_clients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.permittedClients),
  }
}


export function lbaasPolicyResourceAccessControlPolicyToHclTerraform(struct?: LbaasPolicyResourceAccessControlPolicyOutputReference | LbaasPolicyResourceAccessControlPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied_clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    disposition: {
      value: cdktf.stringToHclTerraform(struct!.disposition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permitted_clients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.permittedClients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicyResourceAccessControlPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicyResourceAccessControlPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deniedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedClients = this._deniedClients;
    }
    if (this._disposition !== undefined) {
      hasAnyValues = true;
      internalValueResult.disposition = this._disposition;
    }
    if (this._permittedClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.permittedClients = this._permittedClients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicyResourceAccessControlPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deniedClients = undefined;
      this._disposition = undefined;
      this._permittedClients = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deniedClients = value.deniedClients;
      this._disposition = value.disposition;
      this._permittedClients = value.permittedClients;
    }
  }

  // denied_clients - computed: false, optional: true, required: false
  private _deniedClients?: string[]; 
  public get deniedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('denied_clients'));
  }
  public set deniedClients(value: string[]) {
    this._deniedClients = value;
  }
  public resetDeniedClients() {
    this._deniedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedClientsInput() {
    return this._deniedClients;
  }

  // disposition - computed: false, optional: false, required: true
  private _disposition?: string; 
  public get disposition() {
    return this.getStringAttribute('disposition');
  }
  public set disposition(value: string) {
    this._disposition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dispositionInput() {
    return this._disposition;
  }

  // permitted_clients - computed: false, optional: true, required: false
  private _permittedClients?: string[]; 
  public get permittedClients() {
    return cdktf.Fn.tolist(this.getListAttribute('permitted_clients'));
  }
  public set permittedClients(value: string[]) {
    this._permittedClients = value;
  }
  public resetPermittedClients() {
    this._permittedClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permittedClientsInput() {
    return this._permittedClients;
  }
}
export interface LbaasPolicySetRequestHeaderPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_exists LbaasPolicy#action_when_header_exists}
  */
  readonly actionWhenHeaderExists?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_value_is LbaasPolicy#action_when_header_value_is}
  */
  readonly actionWhenHeaderValueIs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#action_when_header_value_is_not LbaasPolicy#action_when_header_value_is_not}
  */
  readonly actionWhenHeaderValueIsNot?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#header_name LbaasPolicy#header_name}
  */
  readonly headerName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#value LbaasPolicy#value}
  */
  readonly value?: string;
}

export function lbaasPolicySetRequestHeaderPolicyToTerraform(struct?: LbaasPolicySetRequestHeaderPolicyOutputReference | LbaasPolicySetRequestHeaderPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_when_header_exists: cdktf.stringToTerraform(struct!.actionWhenHeaderExists),
    action_when_header_value_is: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionWhenHeaderValueIs),
    action_when_header_value_is_not: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionWhenHeaderValueIsNot),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function lbaasPolicySetRequestHeaderPolicyToHclTerraform(struct?: LbaasPolicySetRequestHeaderPolicyOutputReference | LbaasPolicySetRequestHeaderPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_when_header_exists: {
      value: cdktf.stringToHclTerraform(struct!.actionWhenHeaderExists),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_when_header_value_is: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionWhenHeaderValueIs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    action_when_header_value_is_not: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionWhenHeaderValueIsNot),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicySetRequestHeaderPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicySetRequestHeaderPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionWhenHeaderExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionWhenHeaderExists = this._actionWhenHeaderExists;
    }
    if (this._actionWhenHeaderValueIs !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionWhenHeaderValueIs = this._actionWhenHeaderValueIs;
    }
    if (this._actionWhenHeaderValueIsNot !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionWhenHeaderValueIsNot = this._actionWhenHeaderValueIsNot;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicySetRequestHeaderPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionWhenHeaderExists = undefined;
      this._actionWhenHeaderValueIs = undefined;
      this._actionWhenHeaderValueIsNot = undefined;
      this._headerName = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionWhenHeaderExists = value.actionWhenHeaderExists;
      this._actionWhenHeaderValueIs = value.actionWhenHeaderValueIs;
      this._actionWhenHeaderValueIsNot = value.actionWhenHeaderValueIsNot;
      this._headerName = value.headerName;
      this._value = value.value;
    }
  }

  // action_when_header_exists - computed: false, optional: true, required: false
  private _actionWhenHeaderExists?: string; 
  public get actionWhenHeaderExists() {
    return this.getStringAttribute('action_when_header_exists');
  }
  public set actionWhenHeaderExists(value: string) {
    this._actionWhenHeaderExists = value;
  }
  public resetActionWhenHeaderExists() {
    this._actionWhenHeaderExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionWhenHeaderExistsInput() {
    return this._actionWhenHeaderExists;
  }

  // action_when_header_value_is - computed: false, optional: true, required: false
  private _actionWhenHeaderValueIs?: string[]; 
  public get actionWhenHeaderValueIs() {
    return cdktf.Fn.tolist(this.getListAttribute('action_when_header_value_is'));
  }
  public set actionWhenHeaderValueIs(value: string[]) {
    this._actionWhenHeaderValueIs = value;
  }
  public resetActionWhenHeaderValueIs() {
    this._actionWhenHeaderValueIs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionWhenHeaderValueIsInput() {
    return this._actionWhenHeaderValueIs;
  }

  // action_when_header_value_is_not - computed: false, optional: true, required: false
  private _actionWhenHeaderValueIsNot?: string[]; 
  public get actionWhenHeaderValueIsNot() {
    return cdktf.Fn.tolist(this.getListAttribute('action_when_header_value_is_not'));
  }
  public set actionWhenHeaderValueIsNot(value: string[]) {
    this._actionWhenHeaderValueIsNot = value;
  }
  public resetActionWhenHeaderValueIsNot() {
    this._actionWhenHeaderValueIsNot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionWhenHeaderValueIsNotInput() {
    return this._actionWhenHeaderValueIsNot;
  }

  // header_name - computed: false, optional: false, required: true
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface LbaasPolicySslNegotiationPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#port LbaasPolicy#port}
  */
  readonly port: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#server_order_preference LbaasPolicy#server_order_preference}
  */
  readonly serverOrderPreference?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_ciphers LbaasPolicy#ssl_ciphers}
  */
  readonly sslCiphers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#ssl_protocol LbaasPolicy#ssl_protocol}
  */
  readonly sslProtocol: string[];
}

export function lbaasPolicySslNegotiationPolicyToTerraform(struct?: LbaasPolicySslNegotiationPolicyOutputReference | LbaasPolicySslNegotiationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    server_order_preference: cdktf.stringToTerraform(struct!.serverOrderPreference),
    ssl_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslCiphers),
    ssl_protocol: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sslProtocol),
  }
}


export function lbaasPolicySslNegotiationPolicyToHclTerraform(struct?: LbaasPolicySslNegotiationPolicyOutputReference | LbaasPolicySslNegotiationPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_order_preference: {
      value: cdktf.stringToHclTerraform(struct!.serverOrderPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslCiphers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ssl_protocol: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sslProtocol),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicySslNegotiationPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicySslNegotiationPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serverOrderPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverOrderPreference = this._serverOrderPreference;
    }
    if (this._sslCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCiphers = this._sslCiphers;
    }
    if (this._sslProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslProtocol = this._sslProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicySslNegotiationPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._serverOrderPreference = undefined;
      this._sslCiphers = undefined;
      this._sslProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._serverOrderPreference = value.serverOrderPreference;
      this._sslCiphers = value.sslCiphers;
      this._sslProtocol = value.sslProtocol;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server_order_preference - computed: false, optional: true, required: false
  private _serverOrderPreference?: string; 
  public get serverOrderPreference() {
    return this.getStringAttribute('server_order_preference');
  }
  public set serverOrderPreference(value: string) {
    this._serverOrderPreference = value;
  }
  public resetServerOrderPreference() {
    this._serverOrderPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOrderPreferenceInput() {
    return this._serverOrderPreference;
  }

  // ssl_ciphers - computed: false, optional: true, required: false
  private _sslCiphers?: string[]; 
  public get sslCiphers() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_ciphers'));
  }
  public set sslCiphers(value: string[]) {
    this._sslCiphers = value;
  }
  public resetSslCiphers() {
    this._sslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersInput() {
    return this._sslCiphers;
  }

  // ssl_protocol - computed: false, optional: false, required: true
  private _sslProtocol?: string[]; 
  public get sslProtocol() {
    return cdktf.Fn.tolist(this.getListAttribute('ssl_protocol'));
  }
  public set sslProtocol(value: string[]) {
    this._sslProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslProtocolInput() {
    return this._sslProtocol;
  }
}
export interface LbaasPolicyTrustedCertificatePolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#trusted_certificate LbaasPolicy#trusted_certificate}
  */
  readonly trustedCertificate: string;
}

export function lbaasPolicyTrustedCertificatePolicyToTerraform(struct?: LbaasPolicyTrustedCertificatePolicyOutputReference | LbaasPolicyTrustedCertificatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    trusted_certificate: cdktf.stringToTerraform(struct!.trustedCertificate),
  }
}


export function lbaasPolicyTrustedCertificatePolicyToHclTerraform(struct?: LbaasPolicyTrustedCertificatePolicyOutputReference | LbaasPolicyTrustedCertificatePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    trusted_certificate: {
      value: cdktf.stringToHclTerraform(struct!.trustedCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbaasPolicyTrustedCertificatePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): LbaasPolicyTrustedCertificatePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trustedCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedCertificate = this._trustedCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbaasPolicyTrustedCertificatePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._trustedCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._trustedCertificate = value.trustedCertificate;
    }
  }

  // trusted_certificate - computed: false, optional: false, required: true
  private _trustedCertificate?: string; 
  public get trustedCertificate() {
    return this.getStringAttribute('trusted_certificate');
  }
  public set trustedCertificate(value: string) {
    this._trustedCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificateInput() {
    return this._trustedCertificate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy opc_lbaas_policy}
*/
export class LbaasPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_lbaas_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbaasPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbaasPolicy to import
  * @param importFromId The id of the existing LbaasPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbaasPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_lbaas_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_policy opc_lbaas_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbaasPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LbaasPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_lbaas_policy',
      terraformGeneratorMetadata: {
        providerName: 'opc',
        providerVersion: '1.4.1',
        providerVersionConstraint: '~> 1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._loadBalancer = config.loadBalancer;
    this._name = config.name;
    this._applicationCookieStickinessPolicy.internalValue = config.applicationCookieStickinessPolicy;
    this._cloudgatePolicy.internalValue = config.cloudgatePolicy;
    this._loadBalancerCookieStickinessPolicy.internalValue = config.loadBalancerCookieStickinessPolicy;
    this._loadBalancingMechanismPolicy.internalValue = config.loadBalancingMechanismPolicy;
    this._rateLimitingRequestPolicy.internalValue = config.rateLimitingRequestPolicy;
    this._redirectPolicy.internalValue = config.redirectPolicy;
    this._resourceAccessControlPolicy.internalValue = config.resourceAccessControlPolicy;
    this._setRequestHeaderPolicy.internalValue = config.setRequestHeaderPolicy;
    this._sslNegotiationPolicy.internalValue = config.sslNegotiationPolicy;
    this._trustedCertificatePolicy.internalValue = config.trustedCertificatePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer?: string; 
  public get loadBalancer() {
    return this.getStringAttribute('load_balancer');
  }
  public set loadBalancer(value: string) {
    this._loadBalancer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getBooleanAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // application_cookie_stickiness_policy - computed: false, optional: true, required: false
  private _applicationCookieStickinessPolicy = new LbaasPolicyApplicationCookieStickinessPolicyOutputReference(this, "application_cookie_stickiness_policy");
  public get applicationCookieStickinessPolicy() {
    return this._applicationCookieStickinessPolicy;
  }
  public putApplicationCookieStickinessPolicy(value: LbaasPolicyApplicationCookieStickinessPolicy) {
    this._applicationCookieStickinessPolicy.internalValue = value;
  }
  public resetApplicationCookieStickinessPolicy() {
    this._applicationCookieStickinessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCookieStickinessPolicyInput() {
    return this._applicationCookieStickinessPolicy.internalValue;
  }

  // cloudgate_policy - computed: false, optional: true, required: false
  private _cloudgatePolicy = new LbaasPolicyCloudgatePolicyOutputReference(this, "cloudgate_policy");
  public get cloudgatePolicy() {
    return this._cloudgatePolicy;
  }
  public putCloudgatePolicy(value: LbaasPolicyCloudgatePolicy) {
    this._cloudgatePolicy.internalValue = value;
  }
  public resetCloudgatePolicy() {
    this._cloudgatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudgatePolicyInput() {
    return this._cloudgatePolicy.internalValue;
  }

  // load_balancer_cookie_stickiness_policy - computed: false, optional: true, required: false
  private _loadBalancerCookieStickinessPolicy = new LbaasPolicyLoadBalancerCookieStickinessPolicyOutputReference(this, "load_balancer_cookie_stickiness_policy");
  public get loadBalancerCookieStickinessPolicy() {
    return this._loadBalancerCookieStickinessPolicy;
  }
  public putLoadBalancerCookieStickinessPolicy(value: LbaasPolicyLoadBalancerCookieStickinessPolicy) {
    this._loadBalancerCookieStickinessPolicy.internalValue = value;
  }
  public resetLoadBalancerCookieStickinessPolicy() {
    this._loadBalancerCookieStickinessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerCookieStickinessPolicyInput() {
    return this._loadBalancerCookieStickinessPolicy.internalValue;
  }

  // load_balancing_mechanism_policy - computed: false, optional: true, required: false
  private _loadBalancingMechanismPolicy = new LbaasPolicyLoadBalancingMechanismPolicyOutputReference(this, "load_balancing_mechanism_policy");
  public get loadBalancingMechanismPolicy() {
    return this._loadBalancingMechanismPolicy;
  }
  public putLoadBalancingMechanismPolicy(value: LbaasPolicyLoadBalancingMechanismPolicy) {
    this._loadBalancingMechanismPolicy.internalValue = value;
  }
  public resetLoadBalancingMechanismPolicy() {
    this._loadBalancingMechanismPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingMechanismPolicyInput() {
    return this._loadBalancingMechanismPolicy.internalValue;
  }

  // rate_limiting_request_policy - computed: false, optional: true, required: false
  private _rateLimitingRequestPolicy = new LbaasPolicyRateLimitingRequestPolicyOutputReference(this, "rate_limiting_request_policy");
  public get rateLimitingRequestPolicy() {
    return this._rateLimitingRequestPolicy;
  }
  public putRateLimitingRequestPolicy(value: LbaasPolicyRateLimitingRequestPolicy) {
    this._rateLimitingRequestPolicy.internalValue = value;
  }
  public resetRateLimitingRequestPolicy() {
    this._rateLimitingRequestPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitingRequestPolicyInput() {
    return this._rateLimitingRequestPolicy.internalValue;
  }

  // redirect_policy - computed: false, optional: true, required: false
  private _redirectPolicy = new LbaasPolicyRedirectPolicyOutputReference(this, "redirect_policy");
  public get redirectPolicy() {
    return this._redirectPolicy;
  }
  public putRedirectPolicy(value: LbaasPolicyRedirectPolicy) {
    this._redirectPolicy.internalValue = value;
  }
  public resetRedirectPolicy() {
    this._redirectPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectPolicyInput() {
    return this._redirectPolicy.internalValue;
  }

  // resource_access_control_policy - computed: false, optional: true, required: false
  private _resourceAccessControlPolicy = new LbaasPolicyResourceAccessControlPolicyOutputReference(this, "resource_access_control_policy");
  public get resourceAccessControlPolicy() {
    return this._resourceAccessControlPolicy;
  }
  public putResourceAccessControlPolicy(value: LbaasPolicyResourceAccessControlPolicy) {
    this._resourceAccessControlPolicy.internalValue = value;
  }
  public resetResourceAccessControlPolicy() {
    this._resourceAccessControlPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceAccessControlPolicyInput() {
    return this._resourceAccessControlPolicy.internalValue;
  }

  // set_request_header_policy - computed: false, optional: true, required: false
  private _setRequestHeaderPolicy = new LbaasPolicySetRequestHeaderPolicyOutputReference(this, "set_request_header_policy");
  public get setRequestHeaderPolicy() {
    return this._setRequestHeaderPolicy;
  }
  public putSetRequestHeaderPolicy(value: LbaasPolicySetRequestHeaderPolicy) {
    this._setRequestHeaderPolicy.internalValue = value;
  }
  public resetSetRequestHeaderPolicy() {
    this._setRequestHeaderPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRequestHeaderPolicyInput() {
    return this._setRequestHeaderPolicy.internalValue;
  }

  // ssl_negotiation_policy - computed: false, optional: true, required: false
  private _sslNegotiationPolicy = new LbaasPolicySslNegotiationPolicyOutputReference(this, "ssl_negotiation_policy");
  public get sslNegotiationPolicy() {
    return this._sslNegotiationPolicy;
  }
  public putSslNegotiationPolicy(value: LbaasPolicySslNegotiationPolicy) {
    this._sslNegotiationPolicy.internalValue = value;
  }
  public resetSslNegotiationPolicy() {
    this._sslNegotiationPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslNegotiationPolicyInput() {
    return this._sslNegotiationPolicy.internalValue;
  }

  // trusted_certificate_policy - computed: false, optional: true, required: false
  private _trustedCertificatePolicy = new LbaasPolicyTrustedCertificatePolicyOutputReference(this, "trusted_certificate_policy");
  public get trustedCertificatePolicy() {
    return this._trustedCertificatePolicy;
  }
  public putTrustedCertificatePolicy(value: LbaasPolicyTrustedCertificatePolicy) {
    this._trustedCertificatePolicy.internalValue = value;
  }
  public resetTrustedCertificatePolicy() {
    this._trustedCertificatePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedCertificatePolicyInput() {
    return this._trustedCertificatePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      load_balancer: cdktf.stringToTerraform(this._loadBalancer),
      name: cdktf.stringToTerraform(this._name),
      application_cookie_stickiness_policy: lbaasPolicyApplicationCookieStickinessPolicyToTerraform(this._applicationCookieStickinessPolicy.internalValue),
      cloudgate_policy: lbaasPolicyCloudgatePolicyToTerraform(this._cloudgatePolicy.internalValue),
      load_balancer_cookie_stickiness_policy: lbaasPolicyLoadBalancerCookieStickinessPolicyToTerraform(this._loadBalancerCookieStickinessPolicy.internalValue),
      load_balancing_mechanism_policy: lbaasPolicyLoadBalancingMechanismPolicyToTerraform(this._loadBalancingMechanismPolicy.internalValue),
      rate_limiting_request_policy: lbaasPolicyRateLimitingRequestPolicyToTerraform(this._rateLimitingRequestPolicy.internalValue),
      redirect_policy: lbaasPolicyRedirectPolicyToTerraform(this._redirectPolicy.internalValue),
      resource_access_control_policy: lbaasPolicyResourceAccessControlPolicyToTerraform(this._resourceAccessControlPolicy.internalValue),
      set_request_header_policy: lbaasPolicySetRequestHeaderPolicyToTerraform(this._setRequestHeaderPolicy.internalValue),
      ssl_negotiation_policy: lbaasPolicySslNegotiationPolicyToTerraform(this._sslNegotiationPolicy.internalValue),
      trusted_certificate_policy: lbaasPolicyTrustedCertificatePolicyToTerraform(this._trustedCertificatePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer: {
        value: cdktf.stringToHclTerraform(this._loadBalancer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_cookie_stickiness_policy: {
        value: lbaasPolicyApplicationCookieStickinessPolicyToHclTerraform(this._applicationCookieStickinessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicyApplicationCookieStickinessPolicyList",
      },
      cloudgate_policy: {
        value: lbaasPolicyCloudgatePolicyToHclTerraform(this._cloudgatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicyCloudgatePolicyList",
      },
      load_balancer_cookie_stickiness_policy: {
        value: lbaasPolicyLoadBalancerCookieStickinessPolicyToHclTerraform(this._loadBalancerCookieStickinessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicyLoadBalancerCookieStickinessPolicyList",
      },
      load_balancing_mechanism_policy: {
        value: lbaasPolicyLoadBalancingMechanismPolicyToHclTerraform(this._loadBalancingMechanismPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicyLoadBalancingMechanismPolicyList",
      },
      rate_limiting_request_policy: {
        value: lbaasPolicyRateLimitingRequestPolicyToHclTerraform(this._rateLimitingRequestPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicyRateLimitingRequestPolicyList",
      },
      redirect_policy: {
        value: lbaasPolicyRedirectPolicyToHclTerraform(this._redirectPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicyRedirectPolicyList",
      },
      resource_access_control_policy: {
        value: lbaasPolicyResourceAccessControlPolicyToHclTerraform(this._resourceAccessControlPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicyResourceAccessControlPolicyList",
      },
      set_request_header_policy: {
        value: lbaasPolicySetRequestHeaderPolicyToHclTerraform(this._setRequestHeaderPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicySetRequestHeaderPolicyList",
      },
      ssl_negotiation_policy: {
        value: lbaasPolicySslNegotiationPolicyToHclTerraform(this._sslNegotiationPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicySslNegotiationPolicyList",
      },
      trusted_certificate_policy: {
        value: lbaasPolicyTrustedCertificatePolicyToHclTerraform(this._trustedCertificatePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LbaasPolicyTrustedCertificatePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
