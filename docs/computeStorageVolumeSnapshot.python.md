# `opc_compute_storage_volume_snapshot`

Refer to the Terraform Registory for docs: [`opc_compute_storage_volume_snapshot`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot).

# `computeStorageVolumeSnapshot` Submodule <a name="`computeStorageVolumeSnapshot` Submodule" id="@cdktf/provider-opc.computeStorageVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStorageVolumeSnapshot <a name="ComputeStorageVolumeSnapshot" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot opc_compute_storage_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume_snapshot

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  volume_name: str,
  collocated: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  parent_volume_bootable: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: ComputeStorageVolumeSnapshotTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.volumeName">volume_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.collocated">collocated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.parentVolumeBootable">parent_volume_bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.volumeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}.

---

##### `collocated`<sup>Optional</sup> <a name="collocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.collocated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}.

---

##### `parent_volume_bootable`<sup>Optional</sup> <a name="parent_volume_bootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.parentVolumeBootable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#timeouts ComputeStorageVolumeSnapshot#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetCollocated">reset_collocated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetParentVolumeBootable">reset_parent_volume_bootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#create ComputeStorageVolumeSnapshot#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#delete ComputeStorageVolumeSnapshot#delete}.

---

##### `reset_collocated` <a name="reset_collocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetCollocated"></a>

```python
def reset_collocated() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent_volume_bootable` <a name="reset_parent_volume_bootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetParentVolumeBootable"></a>

```python
def reset_parent_volume_bootable() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume_snapshot

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume_snapshot

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume_snapshot

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.machineImageName">machine_image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.property">property</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotTimestamp">snapshot_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.startTimestamp">start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusDetail">status_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusTimestamp">status_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference">ComputeStorageVolumeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocatedInput">collocated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootableInput">parent_volume_bootable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeNameInput">volume_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocated">collocated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootable">parent_volume_bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `machine_image_name`<sup>Required</sup> <a name="machine_image_name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.machineImageName"></a>

```python
machine_image_name: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.property"></a>

```python
property: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `snapshot_timestamp`<sup>Required</sup> <a name="snapshot_timestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotTimestamp"></a>

```python
snapshot_timestamp: str
```

- *Type:* str

---

##### `start_timestamp`<sup>Required</sup> <a name="start_timestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.startTimestamp"></a>

```python
start_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_detail`<sup>Required</sup> <a name="status_detail" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusDetail"></a>

```python
status_detail: str
```

- *Type:* str

---

##### `status_timestamp`<sup>Required</sup> <a name="status_timestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusTimestamp"></a>

```python
status_timestamp: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeouts"></a>

```python
timeouts: ComputeStorageVolumeSnapshotTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference">ComputeStorageVolumeSnapshotTimeoutsOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `collocated_input`<sup>Optional</sup> <a name="collocated_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocatedInput"></a>

```python
collocated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_volume_bootable_input`<sup>Optional</sup> <a name="parent_volume_bootable_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootableInput"></a>

```python
parent_volume_bootable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeStorageVolumeSnapshotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>]

---

##### `volume_name_input`<sup>Optional</sup> <a name="volume_name_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeNameInput"></a>

```python
volume_name_input: str
```

- *Type:* str

---

##### `collocated`<sup>Required</sup> <a name="collocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocated"></a>

```python
collocated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_volume_bootable`<sup>Required</sup> <a name="parent_volume_bootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootable"></a>

```python
parent_volume_bootable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStorageVolumeSnapshotConfig <a name="ComputeStorageVolumeSnapshotConfig" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume_snapshot

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  volume_name: str,
  collocated: typing.Union[bool, IResolvable] = None,
  description: str = None,
  id: str = None,
  name: str = None,
  parent_volume_bootable: typing.Union[bool, IResolvable] = None,
  tags: typing.List[str] = None,
  timeouts: ComputeStorageVolumeSnapshotTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.volumeName">volume_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.collocated">collocated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.parentVolumeBootable">parent_volume_bootable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}.

---

##### `collocated`<sup>Optional</sup> <a name="collocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.collocated"></a>

```python
collocated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}.

---

##### `parent_volume_bootable`<sup>Optional</sup> <a name="parent_volume_bootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.parentVolumeBootable"></a>

```python
parent_volume_bootable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.timeouts"></a>

```python
timeouts: ComputeStorageVolumeSnapshotTimeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#timeouts ComputeStorageVolumeSnapshot#timeouts}

---

### ComputeStorageVolumeSnapshotTimeouts <a name="ComputeStorageVolumeSnapshotTimeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume_snapshot

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts(
  create: str = None,
  delete: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#create ComputeStorageVolumeSnapshot#create}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#delete ComputeStorageVolumeSnapshot#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#create ComputeStorageVolumeSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#delete ComputeStorageVolumeSnapshot#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStorageVolumeSnapshotTimeoutsOutputReference <a name="ComputeStorageVolumeSnapshotTimeoutsOutputReference" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_storage_volume_snapshot

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeStorageVolumeSnapshotTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>]

---



