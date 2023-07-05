/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}
  */
  readonly bootOrder?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}
  */
  readonly imageList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}
  */
  readonly instanceAttributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}
  */
  readonly reverseDns?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}
  */
  readonly shape: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}
  */
  readonly tags?: string[];
  /**
  * networking_info block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#networking_info ComputeInstance#networking_info}
  */
  readonly networkingInfo?: ComputeInstanceNetworkingInfo[] | cdktf.IResolvable;
  /**
  * storage block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#storage ComputeInstance#storage}
  */
  readonly storage?: ComputeInstanceStorage[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}
  */
  readonly timeouts?: ComputeInstanceTimeouts;
}
export interface ComputeInstanceNetworkingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}
  */
  readonly dns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}
  */
  readonly index: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}
  */
  readonly ipNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}
  */
  readonly isDefaultGateway?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}
  */
  readonly nameServers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}
  */
  readonly nat?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}
  */
  readonly searchDomains?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}
  */
  readonly secLists?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}
  */
  readonly sharedNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}
  */
  readonly vnic?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}
  */
  readonly vnicSets?: string[];
}

export function computeInstanceNetworkingInfoToTerraform(struct?: ComputeInstanceNetworkingInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dns),
    index: cdktf.numberToTerraform(struct!.index),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_network: cdktf.stringToTerraform(struct!.ipNetwork),
    is_default_gateway: cdktf.booleanToTerraform(struct!.isDefaultGateway),
    mac_address: cdktf.stringToTerraform(struct!.macAddress),
    name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameServers),
    nat: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nat),
    search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchDomains),
    sec_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.secLists),
    shared_network: cdktf.booleanToTerraform(struct!.sharedNetwork),
    vnic: cdktf.stringToTerraform(struct!.vnic),
    vnic_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vnicSets),
  }
}

export class ComputeInstanceNetworkingInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceNetworkingInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNetwork = this._ipNetwork;
    }
    if (this._isDefaultGateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefaultGateway = this._isDefaultGateway;
    }
    if (this._macAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddress = this._macAddress;
    }
    if (this._nameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameServers = this._nameServers;
    }
    if (this._nat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat = this._nat;
    }
    if (this._searchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomains = this._searchDomains;
    }
    if (this._secLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.secLists = this._secLists;
    }
    if (this._sharedNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedNetwork = this._sharedNetwork;
    }
    if (this._vnic !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnic = this._vnic;
    }
    if (this._vnicSets !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnicSets = this._vnicSets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceNetworkingInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns = undefined;
      this._index = undefined;
      this._ipAddress = undefined;
      this._ipNetwork = undefined;
      this._isDefaultGateway = undefined;
      this._macAddress = undefined;
      this._nameServers = undefined;
      this._nat = undefined;
      this._searchDomains = undefined;
      this._secLists = undefined;
      this._sharedNetwork = undefined;
      this._vnic = undefined;
      this._vnicSets = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns = value.dns;
      this._index = value.index;
      this._ipAddress = value.ipAddress;
      this._ipNetwork = value.ipNetwork;
      this._isDefaultGateway = value.isDefaultGateway;
      this._macAddress = value.macAddress;
      this._nameServers = value.nameServers;
      this._nat = value.nat;
      this._searchDomains = value.searchDomains;
      this._secLists = value.secLists;
      this._sharedNetwork = value.sharedNetwork;
      this._vnic = value.vnic;
      this._vnicSets = value.vnicSets;
    }
  }

  // dns - computed: true, optional: true, required: false
  private _dns?: string[]; 
  public get dns() {
    return this.getListAttribute('dns');
  }
  public set dns(value: string[]) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_network - computed: false, optional: true, required: false
  private _ipNetwork?: string; 
  public get ipNetwork() {
    return this.getStringAttribute('ip_network');
  }
  public set ipNetwork(value: string) {
    this._ipNetwork = value;
  }
  public resetIpNetwork() {
    this._ipNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNetworkInput() {
    return this._ipNetwork;
  }

  // is_default_gateway - computed: false, optional: true, required: false
  private _isDefaultGateway?: boolean | cdktf.IResolvable; 
  public get isDefaultGateway() {
    return this.getBooleanAttribute('is_default_gateway');
  }
  public set isDefaultGateway(value: boolean | cdktf.IResolvable) {
    this._isDefaultGateway = value;
  }
  public resetIsDefaultGateway() {
    this._isDefaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultGatewayInput() {
    return this._isDefaultGateway;
  }

  // mac_address - computed: true, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // name_servers - computed: false, optional: true, required: false
  private _nameServers?: string[]; 
  public get nameServers() {
    return this.getListAttribute('name_servers');
  }
  public set nameServers(value: string[]) {
    this._nameServers = value;
  }
  public resetNameServers() {
    this._nameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServersInput() {
    return this._nameServers;
  }

  // nat - computed: false, optional: true, required: false
  private _nat?: string[]; 
  public get nat() {
    return this.getListAttribute('nat');
  }
  public set nat(value: string[]) {
    this._nat = value;
  }
  public resetNat() {
    this._nat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat;
  }

  // search_domains - computed: false, optional: true, required: false
  private _searchDomains?: string[]; 
  public get searchDomains() {
    return this.getListAttribute('search_domains');
  }
  public set searchDomains(value: string[]) {
    this._searchDomains = value;
  }
  public resetSearchDomains() {
    this._searchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains;
  }

  // sec_lists - computed: true, optional: true, required: false
  private _secLists?: string[]; 
  public get secLists() {
    return this.getListAttribute('sec_lists');
  }
  public set secLists(value: string[]) {
    this._secLists = value;
  }
  public resetSecLists() {
    this._secLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secListsInput() {
    return this._secLists;
  }

  // shared_network - computed: false, optional: true, required: false
  private _sharedNetwork?: boolean | cdktf.IResolvable; 
  public get sharedNetwork() {
    return this.getBooleanAttribute('shared_network');
  }
  public set sharedNetwork(value: boolean | cdktf.IResolvable) {
    this._sharedNetwork = value;
  }
  public resetSharedNetwork() {
    this._sharedNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedNetworkInput() {
    return this._sharedNetwork;
  }

  // vnic - computed: false, optional: true, required: false
  private _vnic?: string; 
  public get vnic() {
    return this.getStringAttribute('vnic');
  }
  public set vnic(value: string) {
    this._vnic = value;
  }
  public resetVnic() {
    this._vnic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicInput() {
    return this._vnic;
  }

  // vnic_sets - computed: false, optional: true, required: false
  private _vnicSets?: string[]; 
  public get vnicSets() {
    return this.getListAttribute('vnic_sets');
  }
  public set vnicSets(value: string[]) {
    this._vnicSets = value;
  }
  public resetVnicSets() {
    this._vnicSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnicSetsInput() {
    return this._vnicSets;
  }
}

export class ComputeInstanceNetworkingInfoList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceNetworkingInfo[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceNetworkingInfoOutputReference {
    return new ComputeInstanceNetworkingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}
  */
  readonly index: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}
  */
  readonly volume: string;
}

export function computeInstanceStorageToTerraform(struct?: ComputeInstanceStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    index: cdktf.numberToTerraform(struct!.index),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}

export class ComputeInstanceStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ComputeInstanceStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._index !== undefined) {
      hasAnyValues = true;
      internalValueResult.index = this._index;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._index = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._index = value.index;
      this._volume = value.volume;
    }
  }

  // index - computed: false, optional: false, required: true
  private _index?: number; 
  public get index() {
    return this.getNumberAttribute('index');
  }
  public set index(value: number) {
    this._index = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexInput() {
    return this._index;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}

export class ComputeInstanceStorageList extends cdktf.ComplexList {
  public internalValue? : ComputeInstanceStorage[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ComputeInstanceStorageOutputReference {
    return new ComputeInstanceStorageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}
  */
  readonly update?: string;
}

export function computeInstanceTimeoutsToTerraform(struct?: ComputeInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ComputeInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance opc_compute_instance}
*/
export class ComputeInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opc_compute_instance";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance opc_compute_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'opc_compute_instance',
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
    this._bootOrder = config.bootOrder;
    this._desiredState = config.desiredState;
    this._hostname = config.hostname;
    this._id = config.id;
    this._imageList = config.imageList;
    this._instanceAttributes = config.instanceAttributes;
    this._label = config.label;
    this._name = config.name;
    this._reverseDns = config.reverseDns;
    this._shape = config.shape;
    this._sshKeys = config.sshKeys;
    this._tags = config.tags;
    this._networkingInfo.internalValue = config.networkingInfo;
    this._storage.internalValue = config.storage;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  public get attributes() {
    return this.getStringAttribute('attributes');
  }

  // availability_domain - computed: true, optional: false, required: false
  public get availabilityDomain() {
    return this.getStringAttribute('availability_domain');
  }

  // boot_order - computed: false, optional: true, required: false
  private _bootOrder?: number[]; 
  public get bootOrder() {
    return this.getNumberListAttribute('boot_order');
  }
  public set bootOrder(value: number[]) {
    this._bootOrder = value;
  }
  public resetBootOrder() {
    this._bootOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootOrderInput() {
    return this._bootOrder;
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // entry - computed: true, optional: false, required: false
  public get entry() {
    return this.getNumberAttribute('entry');
  }

  // fingerprint - computed: true, optional: false, required: false
  public get fingerprint() {
    return this.getStringAttribute('fingerprint');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // image_format - computed: true, optional: false, required: false
  public get imageFormat() {
    return this.getStringAttribute('image_format');
  }

  // image_list - computed: false, optional: true, required: false
  private _imageList?: string; 
  public get imageList() {
    return this.getStringAttribute('image_list');
  }
  public set imageList(value: string) {
    this._imageList = value;
  }
  public resetImageList() {
    this._imageList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageListInput() {
    return this._imageList;
  }

  // instance_attributes - computed: false, optional: true, required: false
  private _instanceAttributes?: string; 
  public get instanceAttributes() {
    return this.getStringAttribute('instance_attributes');
  }
  public set instanceAttributes(value: string) {
    this._instanceAttributes = value;
  }
  public resetInstanceAttributes() {
    this._instanceAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAttributesInput() {
    return this._instanceAttributes;
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
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

  // placement_requirements - computed: true, optional: false, required: false
  public get placementRequirements() {
    return this.getListAttribute('placement_requirements');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // quota_reservation - computed: true, optional: false, required: false
  public get quotaReservation() {
    return this.getStringAttribute('quota_reservation');
  }

  // relationships - computed: true, optional: false, required: false
  public get relationships() {
    return this.getListAttribute('relationships');
  }

  // resolvers - computed: true, optional: false, required: false
  public get resolvers() {
    return this.getListAttribute('resolvers');
  }

  // reverse_dns - computed: false, optional: true, required: false
  private _reverseDns?: boolean | cdktf.IResolvable; 
  public get reverseDns() {
    return this.getBooleanAttribute('reverse_dns');
  }
  public set reverseDns(value: boolean | cdktf.IResolvable) {
    this._reverseDns = value;
  }
  public resetReverseDns() {
    this._reverseDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reverseDnsInput() {
    return this._reverseDns;
  }

  // shape - computed: false, optional: false, required: true
  private _shape?: string; 
  public get shape() {
    return this.getStringAttribute('shape');
  }
  public set shape(value: string) {
    this._shape = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape;
  }

  // site - computed: true, optional: false, required: false
  public get site() {
    return this.getStringAttribute('site');
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // vcable - computed: true, optional: false, required: false
  public get vcable() {
    return this.getStringAttribute('vcable');
  }

  // virtio - computed: true, optional: false, required: false
  public get virtio() {
    return this.getBooleanAttribute('virtio');
  }

  // vnc_address - computed: true, optional: false, required: false
  public get vncAddress() {
    return this.getStringAttribute('vnc_address');
  }

  // networking_info - computed: false, optional: true, required: false
  private _networkingInfo = new ComputeInstanceNetworkingInfoList(this, "networking_info", true);
  public get networkingInfo() {
    return this._networkingInfo;
  }
  public putNetworkingInfo(value: ComputeInstanceNetworkingInfo[] | cdktf.IResolvable) {
    this._networkingInfo.internalValue = value;
  }
  public resetNetworkingInfo() {
    this._networkingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkingInfoInput() {
    return this._networkingInfo.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new ComputeInstanceStorageList(this, "storage", true);
  public get storage() {
    return this._storage;
  }
  public putStorage(value: ComputeInstanceStorage[] | cdktf.IResolvable) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeInstanceTimeouts) {
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
      boot_order: cdktf.listMapper(cdktf.numberToTerraform, false)(this._bootOrder),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      hostname: cdktf.stringToTerraform(this._hostname),
      id: cdktf.stringToTerraform(this._id),
      image_list: cdktf.stringToTerraform(this._imageList),
      instance_attributes: cdktf.stringToTerraform(this._instanceAttributes),
      label: cdktf.stringToTerraform(this._label),
      name: cdktf.stringToTerraform(this._name),
      reverse_dns: cdktf.booleanToTerraform(this._reverseDns),
      shape: cdktf.stringToTerraform(this._shape),
      ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshKeys),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      networking_info: cdktf.listMapper(computeInstanceNetworkingInfoToTerraform, true)(this._networkingInfo.internalValue),
      storage: cdktf.listMapper(computeInstanceStorageToTerraform, true)(this._storage.internalValue),
      timeouts: computeInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
