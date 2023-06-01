/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeStorageVolumeSnapshotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}
  */
  readonly collocated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}
  */
  readonly parentVolumeBootable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}
  */
  readonly volumeName: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#timeouts ComputeStorageVolumeSnapshot#timeouts}
  */
  readonly timeouts?: ComputeStorageVolumeSnapshotTimeouts;
}
export interface ComputeStorageVolumeSnapshotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#create ComputeStorageVolumeSnapshot#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#delete ComputeStorageVolumeSnapshot#delete}
  */
  readonly delete?: string;
}

export function computeStorageVolumeSnapshotTimeoutsToTerraform(struct?: ComputeStorageVolumeSnapshotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ComputeStorageVolumeSnapshotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeStorageVolumeSnapshotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeStorageVolumeSnapshotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot opc_compute_storage_volume_snapshot}
*/
export class ComputeStorageVolumeSnapshot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_storage_volume_snapshot";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot opc_compute_storage_volume_snapshot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeStorageVolumeSnapshotConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeStorageVolumeSnapshotConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_storage_volume_snapshot',
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
    this._collocated = config.collocated;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parentVolumeBootable = config.parentVolumeBootable;
    this._tags = config.tags;
    this._volumeName = config.volumeName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // collocated - computed: false, optional: true, required: false
  private _collocated?: boolean | cdktf.IResolvable; 
  public get collocated() {
    return this.getBooleanAttribute('collocated');
  }
  public set collocated(value: boolean | cdktf.IResolvable) {
    this._collocated = value;
  }
  public resetCollocated() {
    this._collocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collocatedInput() {
    return this._collocated;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // machine_image_name - computed: true, optional: false, required: false
  public get machineImageName() {
    return this.getStringAttribute('machine_image_name');
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

  // parent_volume_bootable - computed: false, optional: true, required: false
  private _parentVolumeBootable?: boolean | cdktf.IResolvable; 
  public get parentVolumeBootable() {
    return this.getBooleanAttribute('parent_volume_bootable');
  }
  public set parentVolumeBootable(value: boolean | cdktf.IResolvable) {
    this._parentVolumeBootable = value;
  }
  public resetParentVolumeBootable() {
    this._parentVolumeBootable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentVolumeBootableInput() {
    return this._parentVolumeBootable;
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getStringAttribute('size');
  }

  // snapshot_id - computed: true, optional: false, required: false
  public get snapshotId() {
    return this.getStringAttribute('snapshot_id');
  }

  // snapshot_timestamp - computed: true, optional: false, required: false
  public get snapshotTimestamp() {
    return this.getStringAttribute('snapshot_timestamp');
  }

  // start_timestamp - computed: true, optional: false, required: false
  public get startTimestamp() {
    return this.getStringAttribute('start_timestamp');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // status_detail - computed: true, optional: false, required: false
  public get statusDetail() {
    return this.getStringAttribute('status_detail');
  }

  // status_timestamp - computed: true, optional: false, required: false
  public get statusTimestamp() {
    return this.getStringAttribute('status_timestamp');
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // volume_name - computed: false, optional: false, required: true
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeStorageVolumeSnapshotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeStorageVolumeSnapshotTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collocated: cdktf.booleanToTerraform(this._collocated),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_volume_bootable: cdktf.booleanToTerraform(this._parentVolumeBootable),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      volume_name: cdktf.stringToTerraform(this._volumeName),
      timeouts: computeStorageVolumeSnapshotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
