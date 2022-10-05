// https://www.terraform.io/docs/providers/opc/r/compute_security_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSecurityAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_association#id ComputeSecurityAssociation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_association#name ComputeSecurityAssociation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_association#seclist ComputeSecurityAssociation#seclist}
  */
  readonly seclist: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_association#vcable ComputeSecurityAssociation#vcable}
  */
  readonly vcable: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_security_association opc_compute_security_association}
*/
export class ComputeSecurityAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_security_association";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/opc/r/compute_security_association opc_compute_security_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSecurityAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSecurityAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_security_association',
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
    this._name = config.name;
    this._seclist = config.seclist;
    this._vcable = config.vcable;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // seclist - computed: false, optional: false, required: true
  private _seclist?: string; 
  public get seclist() {
    return this.getStringAttribute('seclist');
  }
  public set seclist(value: string) {
    this._seclist = value;
  }
  // Temporarily expose input value. Use with caution.
  public get seclistInput() {
    return this._seclist;
  }

  // vcable - computed: false, optional: false, required: true
  private _vcable?: string; 
  public get vcable() {
    return this.getStringAttribute('vcable');
  }
  public set vcable(value: string) {
    this._vcable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcableInput() {
    return this._vcable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      seclist: cdktf.stringToTerraform(this._seclist),
      vcable: cdktf.stringToTerraform(this._vcable),
    };
  }
}
