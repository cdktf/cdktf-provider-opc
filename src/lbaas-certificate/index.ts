/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbaasCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate#certificate_body LbaasCertificate#certificate_body}
  */
  readonly certificateBody: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate#certificate_chain LbaasCertificate#certificate_chain}
  */
  readonly certificateChain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate#id LbaasCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate#name LbaasCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate#private_key LbaasCertificate#private_key}
  */
  readonly privateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate#type LbaasCertificate#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate opc_lbaas_certificate}
*/
export class LbaasCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_lbaas_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbaasCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbaasCertificate to import
  * @param importFromId The id of the existing LbaasCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbaasCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opc_lbaas_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_certificate opc_lbaas_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbaasCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: LbaasCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_lbaas_certificate',
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
    this._certificateBody = config.certificateBody;
    this._certificateChain = config.certificateChain;
    this._id = config.id;
    this._name = config.name;
    this._privateKey = config.privateKey;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_body - computed: false, optional: false, required: true
  private _certificateBody?: string; 
  public get certificateBody() {
    return this.getStringAttribute('certificate_body');
  }
  public set certificateBody(value: string) {
    this._certificateBody = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBodyInput() {
    return this._certificateBody;
  }

  // certificate_chain - computed: false, optional: true, required: false
  private _certificateChain?: string; 
  public get certificateChain() {
    return this.getStringAttribute('certificate_chain');
  }
  public set certificateChain(value: string) {
    this._certificateChain = value;
  }
  public resetCertificateChain() {
    this._certificateChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateChainInput() {
    return this._certificateChain;
  }

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

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_body: cdktf.stringToTerraform(this._certificateBody),
      certificate_chain: cdktf.stringToTerraform(this._certificateChain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      private_key: cdktf.stringToTerraform(this._privateKey),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_body: {
        value: cdktf.stringToHclTerraform(this._certificateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_chain: {
        value: cdktf.stringToHclTerraform(this._certificateChain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
