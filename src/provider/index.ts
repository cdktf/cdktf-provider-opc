// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpcProviderConfig {
  /**
  * The HTTP endpoint for OPC API operations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#endpoint OpcProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The OPC identity domain for API operations
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#identity_domain OpcProvider#identity_domain}
  */
  readonly identityDomain: string;
  /**
  * Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#insecure OpcProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * The HTTP endpoint for the Load Balancer Classic service.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#lbaas_endpoint OpcProvider#lbaas_endpoint}
  */
  readonly lbaasEndpoint?: string;
  /**
  * Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1)
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#max_retries OpcProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * The user password for OPC API operations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#password OpcProvider#password}
  */
  readonly password: string;
  /**
  * The HTTP endpoint for Oracle Storage operations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_endpoint OpcProvider#storage_endpoint}
  */
  readonly storageEndpoint?: string;
  /**
  * The Storage Service ID. 
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_service_id OpcProvider#storage_service_id}
  */
  readonly storageServiceId?: string;
  /**
  * The user name for OPC API operations.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#user OpcProvider#user}
  */
  readonly user: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#alias OpcProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs opc}
*/
export class OpcProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs opc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpcProviderConfig
  */
  public constructor(scope: Construct, id: string, config: OpcProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'opc',
      terraformGeneratorMetadata: {
        providerName: 'opc',
        providerVersion: '1.4.1',
        providerVersionConstraint: '~> 1.4'
      },
      terraformProviderSource: 'opc'
    });
    this._endpoint = config.endpoint;
    this._identityDomain = config.identityDomain;
    this._insecure = config.insecure;
    this._lbaasEndpoint = config.lbaasEndpoint;
    this._maxRetries = config.maxRetries;
    this._password = config.password;
    this._storageEndpoint = config.storageEndpoint;
    this._storageServiceId = config.storageServiceId;
    this._user = config.user;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // identity_domain - computed: false, optional: false, required: true
  private _identityDomain?: string; 
  public get identityDomain() {
    return this._identityDomain;
  }
  public set identityDomain(value: string | undefined) {
    this._identityDomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityDomainInput() {
    return this._identityDomain;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // lbaas_endpoint - computed: false, optional: true, required: false
  private _lbaasEndpoint?: string; 
  public get lbaasEndpoint() {
    return this._lbaasEndpoint;
  }
  public set lbaasEndpoint(value: string | undefined) {
    this._lbaasEndpoint = value;
  }
  public resetLbaasEndpoint() {
    this._lbaasEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbaasEndpointInput() {
    return this._lbaasEndpoint;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // storage_endpoint - computed: false, optional: true, required: false
  private _storageEndpoint?: string; 
  public get storageEndpoint() {
    return this._storageEndpoint;
  }
  public set storageEndpoint(value: string | undefined) {
    this._storageEndpoint = value;
  }
  public resetStorageEndpoint() {
    this._storageEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageEndpointInput() {
    return this._storageEndpoint;
  }

  // storage_service_id - computed: false, optional: true, required: false
  private _storageServiceId?: string; 
  public get storageServiceId() {
    return this._storageServiceId;
  }
  public set storageServiceId(value: string | undefined) {
    this._storageServiceId = value;
  }
  public resetStorageServiceId() {
    this._storageServiceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageServiceIdInput() {
    return this._storageServiceId;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this._user;
  }
  public set user(value: string | undefined) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      identity_domain: cdktf.stringToTerraform(this._identityDomain),
      insecure: cdktf.booleanToTerraform(this._insecure),
      lbaas_endpoint: cdktf.stringToTerraform(this._lbaasEndpoint),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      password: cdktf.stringToTerraform(this._password),
      storage_endpoint: cdktf.stringToTerraform(this._storageEndpoint),
      storage_service_id: cdktf.stringToTerraform(this._storageServiceId),
      user: cdktf.stringToTerraform(this._user),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
