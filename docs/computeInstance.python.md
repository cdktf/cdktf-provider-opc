# `computeInstance` Submodule <a name="`computeInstance` Submodule" id="@cdktf/provider-opc.computeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstance <a name="ComputeInstance" id="@cdktf/provider-opc.computeInstance.ComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance opc_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstance(
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
  shape: str,
  boot_order: typing.List[typing.Union[int, float]] = None,
  desired_state: str = None,
  hostname: str = None,
  id: str = None,
  image_list: str = None,
  instance_attributes: str = None,
  label: str = None,
  networking_info: typing.Union[IResolvable, typing.List[ComputeInstanceNetworkingInfo]] = None,
  reverse_dns: typing.Union[bool, IResolvable] = None,
  ssh_keys: typing.List[str] = None,
  storage: typing.Union[IResolvable, typing.List[ComputeInstanceStorage]] = None,
  tags: typing.List[str] = None,
  timeouts: ComputeInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.bootOrder">boot_order</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.imageList">image_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.instanceAttributes">instance_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.networkingInfo">networking_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]</code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.reverseDns">reverse_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.storage">storage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]</code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.shape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}.

---

##### `boot_order`<sup>Optional</sup> <a name="boot_order" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.bootOrder"></a>

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}.

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.desiredState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_list`<sup>Optional</sup> <a name="image_list" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.imageList"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}.

---

##### `instance_attributes`<sup>Optional</sup> <a name="instance_attributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.instanceAttributes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.label"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}.

---

##### `networking_info`<sup>Optional</sup> <a name="networking_info" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.networkingInfo"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#networking_info ComputeInstance#networking_info}

---

##### `reverse_dns`<sup>Optional</sup> <a name="reverse_dns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.reverseDns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}.

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.sshKeys"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.storage"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#storage ComputeInstance#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo">put_networking_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetBootOrder">reset_boot_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetImageList">reset_image_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetInstanceAttributes">reset_instance_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetNetworkingInfo">reset_networking_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetReverseDns">reset_reverse_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_networking_info` <a name="put_networking_info" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo"></a>

```python
def put_networking_info(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceNetworkingInfo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]

---

##### `put_storage` <a name="put_storage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage"></a>

```python
def put_storage(
  value: typing.Union[IResolvable, typing.List[ComputeInstanceStorage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}.

---

##### `reset_boot_order` <a name="reset_boot_order" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetBootOrder"></a>

```python
def reset_boot_order() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_image_list` <a name="reset_image_list" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetImageList"></a>

```python
def reset_image_list() -> None
```

##### `reset_instance_attributes` <a name="reset_instance_attributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetInstanceAttributes"></a>

```python
def reset_instance_attributes() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_networking_info` <a name="reset_networking_info" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetNetworkingInfo"></a>

```python
def reset_networking_info() -> None
```

##### `reset_reverse_dns` <a name="reset_reverse_dns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetReverseDns"></a>

```python
def reset_reverse_dns() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.entry">entry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageFormat">image_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfo">networking_info</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList">ComputeInstanceNetworkingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.placementRequirements">placement_requirements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.quotaReservation">quota_reservation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.relationships">relationships</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.resolvers">resolvers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.site">site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList">ComputeInstanceStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference">ComputeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.vcable">vcable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.virtio">virtio</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.vncAddress">vnc_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrderInput">boot_order_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageListInput">image_list_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributesInput">instance_attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfoInput">networking_info_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDnsInput">reverse_dns_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.storageInput">storage_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrder">boot_order</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageList">image_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributes">instance_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDns">reverse_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.entry"></a>

```python
entry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `image_format`<sup>Required</sup> <a name="image_format" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageFormat"></a>

```python
image_format: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `networking_info`<sup>Required</sup> <a name="networking_info" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfo"></a>

```python
networking_info: ComputeInstanceNetworkingInfoList
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList">ComputeInstanceNetworkingInfoList</a>

---

##### `placement_requirements`<sup>Required</sup> <a name="placement_requirements" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.placementRequirements"></a>

```python
placement_requirements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `quota_reservation`<sup>Required</sup> <a name="quota_reservation" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.quotaReservation"></a>

```python
quota_reservation: str
```

- *Type:* str

---

##### `relationships`<sup>Required</sup> <a name="relationships" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.relationships"></a>

```python
relationships: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.resolvers"></a>

```python
resolvers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.site"></a>

```python
site: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.storage"></a>

```python
storage: ComputeInstanceStorageList
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList">ComputeInstanceStorageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeouts"></a>

```python
timeouts: ComputeInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference">ComputeInstanceTimeoutsOutputReference</a>

---

##### `vcable`<sup>Required</sup> <a name="vcable" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.vcable"></a>

```python
vcable: str
```

- *Type:* str

---

##### `virtio`<sup>Required</sup> <a name="virtio" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.virtio"></a>

```python
virtio: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vnc_address`<sup>Required</sup> <a name="vnc_address" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.vncAddress"></a>

```python
vnc_address: str
```

- *Type:* str

---

##### `boot_order_input`<sup>Optional</sup> <a name="boot_order_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrderInput"></a>

```python
boot_order_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_list_input`<sup>Optional</sup> <a name="image_list_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageListInput"></a>

```python
image_list_input: str
```

- *Type:* str

---

##### `instance_attributes_input`<sup>Optional</sup> <a name="instance_attributes_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributesInput"></a>

```python
instance_attributes_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networking_info_input`<sup>Optional</sup> <a name="networking_info_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfoInput"></a>

```python
networking_info_input: typing.Union[IResolvable, typing.List[ComputeInstanceNetworkingInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]

---

##### `reverse_dns_input`<sup>Optional</sup> <a name="reverse_dns_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDnsInput"></a>

```python
reverse_dns_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.storageInput"></a>

```python
storage_input: typing.Union[IResolvable, typing.List[ComputeInstanceStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>]

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrder"></a>

```python
boot_order: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_list`<sup>Required</sup> <a name="image_list" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageList"></a>

```python
image_list: str
```

- *Type:* str

---

##### `instance_attributes`<sup>Required</sup> <a name="instance_attributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributes"></a>

```python
instance_attributes: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `reverse_dns`<sup>Required</sup> <a name="reverse_dns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDns"></a>

```python
reverse_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceConfig <a name="ComputeInstanceConfig" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  shape: str,
  boot_order: typing.List[typing.Union[int, float]] = None,
  desired_state: str = None,
  hostname: str = None,
  id: str = None,
  image_list: str = None,
  instance_attributes: str = None,
  label: str = None,
  networking_info: typing.Union[IResolvable, typing.List[ComputeInstanceNetworkingInfo]] = None,
  reverse_dns: typing.Union[bool, IResolvable] = None,
  ssh_keys: typing.List[str] = None,
  storage: typing.Union[IResolvable, typing.List[ComputeInstanceStorage]] = None,
  tags: typing.List[str] = None,
  timeouts: ComputeInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.bootOrder">boot_order</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.imageList">image_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.instanceAttributes">instance_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.networkingInfo">networking_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]</code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.reverseDns">reverse_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.storage">storage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]</code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}.

---

##### `boot_order`<sup>Optional</sup> <a name="boot_order" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.bootOrder"></a>

```python
boot_order: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}.

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `image_list`<sup>Optional</sup> <a name="image_list" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.imageList"></a>

```python
image_list: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}.

---

##### `instance_attributes`<sup>Optional</sup> <a name="instance_attributes" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.instanceAttributes"></a>

```python
instance_attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}.

---

##### `networking_info`<sup>Optional</sup> <a name="networking_info" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.networkingInfo"></a>

```python
networking_info: typing.Union[IResolvable, typing.List[ComputeInstanceNetworkingInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#networking_info ComputeInstance#networking_info}

---

##### `reverse_dns`<sup>Optional</sup> <a name="reverse_dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.reverseDns"></a>

```python
reverse_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}.

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.storage"></a>

```python
storage: typing.Union[IResolvable, typing.List[ComputeInstanceStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#storage ComputeInstance#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.timeouts"></a>

```python
timeouts: ComputeInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}

---

### ComputeInstanceNetworkingInfo <a name="ComputeInstanceNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceNetworkingInfo(
  index: typing.Union[int, float],
  dns: typing.List[str] = None,
  ip_address: str = None,
  ip_network: str = None,
  is_default_gateway: typing.Union[bool, IResolvable] = None,
  mac_address: str = None,
  name_servers: typing.List[str] = None,
  nat: typing.List[str] = None,
  search_domains: typing.List[str] = None,
  sec_lists: typing.List[str] = None,
  shared_network: typing.Union[bool, IResolvable] = None,
  vnic: str = None,
  vnic_sets: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.index">index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.dns">dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipNetwork">ip_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.isDefaultGateway">is_default_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.macAddress">mac_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nat">nat</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.secLists">sec_lists</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.sharedNetwork">shared_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnic">vnic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnicSets">vnic_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}.

---

##### `ip_network`<sup>Optional</sup> <a name="ip_network" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}.

---

##### `is_default_gateway`<sup>Optional</sup> <a name="is_default_gateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.isDefaultGateway"></a>

```python
is_default_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}.

---

##### `mac_address`<sup>Optional</sup> <a name="mac_address" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}.

---

##### `name_servers`<sup>Optional</sup> <a name="name_servers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nat"></a>

```python
nat: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}.

---

##### `search_domains`<sup>Optional</sup> <a name="search_domains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}.

---

##### `sec_lists`<sup>Optional</sup> <a name="sec_lists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.secLists"></a>

```python
sec_lists: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}.

---

##### `shared_network`<sup>Optional</sup> <a name="shared_network" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.sharedNetwork"></a>

```python
shared_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}.

---

##### `vnic`<sup>Optional</sup> <a name="vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnic"></a>

```python
vnic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}.

---

##### `vnic_sets`<sup>Optional</sup> <a name="vnic_sets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnicSets"></a>

```python
vnic_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}.

---

### ComputeInstanceStorage <a name="ComputeInstanceStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceStorage(
  index: typing.Union[int, float],
  volume: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.index">index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.volume">volume</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.volume"></a>

```python
volume: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}.

---

### ComputeInstanceTimeouts <a name="ComputeInstanceTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceNetworkingInfoList <a name="ComputeInstanceNetworkingInfoList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceNetworkingInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceNetworkingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceNetworkingInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]]

---


### ComputeInstanceNetworkingInfoOutputReference <a name="ComputeInstanceNetworkingInfoOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceNetworkingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpNetwork">reset_ip_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIsDefaultGateway">reset_is_default_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetMacAddress">reset_mac_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNameServers">reset_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNat">reset_nat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSearchDomains">reset_search_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSecLists">reset_sec_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSharedNetwork">reset_shared_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnic">reset_vnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnicSets">reset_vnic_sets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns` <a name="reset_dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_ip_network` <a name="reset_ip_network" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpNetwork"></a>

```python
def reset_ip_network() -> None
```

##### `reset_is_default_gateway` <a name="reset_is_default_gateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIsDefaultGateway"></a>

```python
def reset_is_default_gateway() -> None
```

##### `reset_mac_address` <a name="reset_mac_address" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetMacAddress"></a>

```python
def reset_mac_address() -> None
```

##### `reset_name_servers` <a name="reset_name_servers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNameServers"></a>

```python
def reset_name_servers() -> None
```

##### `reset_nat` <a name="reset_nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNat"></a>

```python
def reset_nat() -> None
```

##### `reset_search_domains` <a name="reset_search_domains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSearchDomains"></a>

```python
def reset_search_domains() -> None
```

##### `reset_sec_lists` <a name="reset_sec_lists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSecLists"></a>

```python
def reset_sec_lists() -> None
```

##### `reset_shared_network` <a name="reset_shared_network" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSharedNetwork"></a>

```python
def reset_shared_network() -> None
```

##### `reset_vnic` <a name="reset_vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnic"></a>

```python
def reset_vnic() -> None
```

##### `reset_vnic_sets` <a name="reset_vnic_sets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnicSets"></a>

```python
def reset_vnic_sets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dnsInput">dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.indexInput">index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetworkInput">ip_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput">is_default_gateway_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddressInput">mac_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServersInput">name_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.natInput">nat_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomainsInput">search_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secListsInput">sec_lists_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetworkInput">shared_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicInput">vnic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSetsInput">vnic_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dns">dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.index">index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetwork">ip_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGateway">is_default_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nat">nat</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secLists">sec_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetwork">shared_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnic">vnic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSets">vnic_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dnsInput"></a>

```python
dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.indexInput"></a>

```python
index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_network_input`<sup>Optional</sup> <a name="ip_network_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetworkInput"></a>

```python
ip_network_input: str
```

- *Type:* str

---

##### `is_default_gateway_input`<sup>Optional</sup> <a name="is_default_gateway_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput"></a>

```python
is_default_gateway_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mac_address_input`<sup>Optional</sup> <a name="mac_address_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddressInput"></a>

```python
mac_address_input: str
```

- *Type:* str

---

##### `name_servers_input`<sup>Optional</sup> <a name="name_servers_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServersInput"></a>

```python
name_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nat_input`<sup>Optional</sup> <a name="nat_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.natInput"></a>

```python
nat_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domains_input`<sup>Optional</sup> <a name="search_domains_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomainsInput"></a>

```python
search_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sec_lists_input`<sup>Optional</sup> <a name="sec_lists_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secListsInput"></a>

```python
sec_lists_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_network_input`<sup>Optional</sup> <a name="shared_network_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetworkInput"></a>

```python
shared_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnic_input`<sup>Optional</sup> <a name="vnic_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicInput"></a>

```python
vnic_input: str
```

- *Type:* str

---

##### `vnic_sets_input`<sup>Optional</sup> <a name="vnic_sets_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSetsInput"></a>

```python
vnic_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

---

##### `is_default_gateway`<sup>Required</sup> <a name="is_default_gateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGateway"></a>

```python
is_default_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nat"></a>

```python
nat: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domains`<sup>Required</sup> <a name="search_domains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sec_lists`<sup>Required</sup> <a name="sec_lists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secLists"></a>

```python
sec_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_network`<sup>Required</sup> <a name="shared_network" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetwork"></a>

```python
shared_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnic"></a>

```python
vnic: str
```

- *Type:* str

---

##### `vnic_sets`<sup>Required</sup> <a name="vnic_sets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSets"></a>

```python
vnic_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceNetworkingInfo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>]

---


### ComputeInstanceStorageList <a name="ComputeInstanceStorageList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeInstanceStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeInstanceStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]]

---


### ComputeInstanceStorageOutputReference <a name="ComputeInstanceStorageOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.indexInput">index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volumeInput">volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.index">index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volume">volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.indexInput"></a>

```python
index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volumeInput"></a>

```python
volume_input: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volume"></a>

```python
volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceStorage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>]

---


### ComputeInstanceTimeoutsOutputReference <a name="ComputeInstanceTimeoutsOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_instance

computeInstance.ComputeInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>]

---



