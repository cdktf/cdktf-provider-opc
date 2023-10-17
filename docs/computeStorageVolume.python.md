# `opc_compute_storage_volume`

Refer to the Terraform Registory for docs: [`opc_compute_storage_volume`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume).

# `computeStorageVolume` Submodule <a name="`computeStorageVolume` Submodule" id="@cdktf/provider-opc.computeStorageVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStorageVolume <a name="ComputeStorageVolume" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume opc_compute_storage_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume

computeStorageVolume.ComputeStorageVolume(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  size: typing.Union[int, float],
  bootable: typing.Union[bool, IResolvable] = None,
  description: str = None,
  hypervisor: str = None,
  id: str = None,
  image_list: str = None,
  image_list_entry: typing.Union[int, float] = None,
  machine_image: str = None,
  managed: typing.Union[bool, IResolvable] = None,
  platform: str = None,
  readonly: typing.Union[bool, IResolvable] = None,
  snapshot: str = None,
  snapshot_account: str = None,
  snapshot_id: str = None,
  status: str = None,
  storage_pool: str = None,
  storage_type: str = None,
  tags: typing.List[str] = None,
  timeouts: ComputeStorageVolumeTimeouts = None,
  uri: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.bootable">bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.hypervisor">hypervisor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.imageList">image_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.imageListEntry">image_list_entry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.machineImage">machine_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.readonly">readonly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshot">snapshot</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshotAccount">snapshot_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.storagePool">storage_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.size"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.bootable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.hypervisor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_list`<sup>Optional</sup> <a name="image_list" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.imageList"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}.

---

##### `image_list_entry`<sup>Optional</sup> <a name="image_list_entry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.imageListEntry"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}.

---

##### `machine_image`<sup>Optional</sup> <a name="machine_image" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.machineImage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.managed"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.platform"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.readonly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshot"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}.

---

##### `snapshot_account`<sup>Optional</sup> <a name="snapshot_account" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshotAccount"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshotId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}.

---

##### `storage_pool`<sup>Optional</sup> <a name="storage_pool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.storagePool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.storageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#timeouts ComputeStorageVolume#timeouts}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable">reset_bootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor">reset_hypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList">reset_image_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry">reset_image_list_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage">reset_machine_image</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged">reset_managed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform">reset_platform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly">reset_readonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot">reset_snapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount">reset_snapshot_account</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId">reset_snapshot_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool">reset_storage_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType">reset_storage_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri">reset_uri</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}.

---

##### `reset_bootable` <a name="reset_bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable"></a>

```python
def reset_bootable() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_hypervisor` <a name="reset_hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor"></a>

```python
def reset_hypervisor() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_list` <a name="reset_image_list" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList"></a>

```python
def reset_image_list() -> None
```

##### `reset_image_list_entry` <a name="reset_image_list_entry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry"></a>

```python
def reset_image_list_entry() -> None
```

##### `reset_machine_image` <a name="reset_machine_image" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage"></a>

```python
def reset_machine_image() -> None
```

##### `reset_managed` <a name="reset_managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged"></a>

```python
def reset_managed() -> None
```

##### `reset_platform` <a name="reset_platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform"></a>

```python
def reset_platform() -> None
```

##### `reset_readonly` <a name="reset_readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly"></a>

```python
def reset_readonly() -> None
```

##### `reset_snapshot` <a name="reset_snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot"></a>

```python
def reset_snapshot() -> None
```

##### `reset_snapshot_account` <a name="reset_snapshot_account" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount"></a>

```python
def reset_snapshot_account() -> None
```

##### `reset_snapshot_id` <a name="reset_snapshot_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId"></a>

```python
def reset_snapshot_id() -> None
```

##### `reset_status` <a name="reset_status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_storage_pool` <a name="reset_storage_pool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool"></a>

```python
def reset_storage_pool() -> None
```

##### `reset_storage_type` <a name="reset_storage_type" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType"></a>

```python
def reset_storage_type() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_uri` <a name="reset_uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri"></a>

```python
def reset_uri() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeStorageVolume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume

computeStorageVolume.ComputeStorageVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume

computeStorageVolume.ComputeStorageVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume

computeStorageVolume.ComputeStorageVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume

computeStorageVolume.ComputeStorageVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeStorageVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeStorageVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeStorageVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeStorageVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput">bootable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput">hypervisor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput">image_list_entry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput">image_list_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput">machine_image_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput">managed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput">platform_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput">readonly_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput">size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput">snapshot_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput">snapshot_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput">snapshot_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput">storage_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable">bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor">hypervisor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList">image_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry">image_list_entry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage">machine_image</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly">readonly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot">snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount">snapshot_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool">storage_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri">uri</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts"></a>

```python
timeouts: ComputeStorageVolumeTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a>

---

##### `bootable_input`<sup>Optional</sup> <a name="bootable_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput"></a>

```python
bootable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `hypervisor_input`<sup>Optional</sup> <a name="hypervisor_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput"></a>

```python
hypervisor_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_list_entry_input`<sup>Optional</sup> <a name="image_list_entry_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput"></a>

```python
image_list_entry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `image_list_input`<sup>Optional</sup> <a name="image_list_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput"></a>

```python
image_list_input: str
```

- *Type:* str

---

##### `machine_image_input`<sup>Optional</sup> <a name="machine_image_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput"></a>

```python
machine_image_input: str
```

- *Type:* str

---

##### `managed_input`<sup>Optional</sup> <a name="managed_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput"></a>

```python
managed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `platform_input`<sup>Optional</sup> <a name="platform_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput"></a>

```python
platform_input: str
```

- *Type:* str

---

##### `readonly_input`<sup>Optional</sup> <a name="readonly_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput"></a>

```python
readonly_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `size_input`<sup>Optional</sup> <a name="size_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput"></a>

```python
size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot_account_input`<sup>Optional</sup> <a name="snapshot_account_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput"></a>

```python
snapshot_account_input: str
```

- *Type:* str

---

##### `snapshot_id_input`<sup>Optional</sup> <a name="snapshot_id_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput"></a>

```python
snapshot_id_input: str
```

- *Type:* str

---

##### `snapshot_input`<sup>Optional</sup> <a name="snapshot_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput"></a>

```python
snapshot_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `storage_pool_input`<sup>Optional</sup> <a name="storage_pool_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput"></a>

```python
storage_pool_input: str
```

- *Type:* str

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeStorageVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>]

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable"></a>

```python
bootable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor"></a>

```python
hypervisor: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_list`<sup>Required</sup> <a name="image_list" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList"></a>

```python
image_list: str
```

- *Type:* str

---

##### `image_list_entry`<sup>Required</sup> <a name="image_list_entry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry"></a>

```python
image_list_entry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `machine_image`<sup>Required</sup> <a name="machine_image" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage"></a>

```python
machine_image: str
```

- *Type:* str

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly"></a>

```python
readonly: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

---

##### `snapshot_account`<sup>Required</sup> <a name="snapshot_account" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount"></a>

```python
snapshot_account: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_pool`<sup>Required</sup> <a name="storage_pool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStorageVolumeConfig <a name="ComputeStorageVolumeConfig" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume

computeStorageVolume.ComputeStorageVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  size: typing.Union[int, float],
  bootable: typing.Union[bool, IResolvable] = None,
  description: str = None,
  hypervisor: str = None,
  id: str = None,
  image_list: str = None,
  image_list_entry: typing.Union[int, float] = None,
  machine_image: str = None,
  managed: typing.Union[bool, IResolvable] = None,
  platform: str = None,
  readonly: typing.Union[bool, IResolvable] = None,
  snapshot: str = None,
  snapshot_account: str = None,
  snapshot_id: str = None,
  status: str = None,
  storage_pool: str = None,
  storage_type: str = None,
  tags: typing.List[str] = None,
  timeouts: ComputeStorageVolumeTimeouts = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size">size</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable">bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor">hypervisor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList">image_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry">image_list_entry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage">machine_image</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed">managed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform">platform</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly">readonly</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot">snapshot</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount">snapshot_account</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId">snapshot_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool">storage_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType">storage_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable"></a>

```python
bootable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor"></a>

```python
hypervisor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_list`<sup>Optional</sup> <a name="image_list" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList"></a>

```python
image_list: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}.

---

##### `image_list_entry`<sup>Optional</sup> <a name="image_list_entry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry"></a>

```python
image_list_entry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}.

---

##### `machine_image`<sup>Optional</sup> <a name="machine_image" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage"></a>

```python
machine_image: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed"></a>

```python
managed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform"></a>

```python
platform: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly"></a>

```python
readonly: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot"></a>

```python
snapshot: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}.

---

##### `snapshot_account`<sup>Optional</sup> <a name="snapshot_account" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount"></a>

```python
snapshot_account: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}.

---

##### `snapshot_id`<sup>Optional</sup> <a name="snapshot_id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}.

---

##### `storage_pool`<sup>Optional</sup> <a name="storage_pool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool"></a>

```python
storage_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}.

---

##### `storage_type`<sup>Optional</sup> <a name="storage_type" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts"></a>

```python
timeouts: ComputeStorageVolumeTimeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#timeouts ComputeStorageVolume#timeouts}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}.

---

### ComputeStorageVolumeTimeouts <a name="ComputeStorageVolumeTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume

computeStorageVolume.ComputeStorageVolumeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStorageVolumeTimeoutsOutputReference <a name="ComputeStorageVolumeTimeoutsOutputReference" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume

computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeStorageVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>]

---



