# `computeOrchestratedInstance` Submodule <a name="`computeOrchestratedInstance` Submodule" id="@cdktf/provider-opc.computeOrchestratedInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeOrchestratedInstance <a name="ComputeOrchestratedInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance opc_compute_orchestrated_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstance(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  desired_state: str,
  instance: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstance]],
  name: str,
  description: str = None,
  id: str = None,
  tags: typing.List[str] = None,
  timeouts: ComputeOrchestratedInstanceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.instance">instance</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]</code> | instance block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.desiredState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.instance"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]

instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance ComputeOrchestratedInstance#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#timeouts ComputeOrchestratedInstance#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance">put_instance</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_instance` <a name="put_instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance"></a>

```python
def put_instance(
  value: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstance]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putInstance.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ComputeOrchestratedInstance resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstance.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstance.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstance.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstance.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ComputeOrchestratedInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ComputeOrchestratedInstance to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ComputeOrchestratedInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeOrchestratedInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instance">instance</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList">ComputeOrchestratedInstanceInstanceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference">ComputeOrchestratedInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instanceInput">instance_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instance"></a>

```python
instance: ComputeOrchestratedInstanceInstanceList
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList">ComputeOrchestratedInstanceInstanceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeouts"></a>

```python
timeouts: ComputeOrchestratedInstanceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference">ComputeOrchestratedInstanceTimeoutsOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_input`<sup>Optional</sup> <a name="instance_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.instanceInput"></a>

```python
instance_input: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstance]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ComputeOrchestratedInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstance.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeOrchestratedInstanceConfig <a name="ComputeOrchestratedInstanceConfig" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  desired_state: str,
  instance: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstance]],
  name: str,
  description: str = None,
  id: str = None,
  tags: typing.List[str] = None,
  timeouts: ComputeOrchestratedInstanceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.instance">instance</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]</code> | instance block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#desired_state ComputeOrchestratedInstance#desired_state}.

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.instance"></a>

```python
instance: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstance]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]

instance block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance ComputeOrchestratedInstance#instance}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#description ComputeOrchestratedInstance#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#id ComputeOrchestratedInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceConfig.property.timeouts"></a>

```python
timeouts: ComputeOrchestratedInstanceTimeouts
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#timeouts ComputeOrchestratedInstance#timeouts}

---

### ComputeOrchestratedInstanceInstance <a name="ComputeOrchestratedInstanceInstance" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstance(
  name: str,
  shape: str,
  boot_order: typing.List[typing.Union[int, float]] = None,
  hostname: str = None,
  image_list: str = None,
  instance_attributes: str = None,
  label: str = None,
  networking_info: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceNetworkingInfo]] = None,
  persistent: typing.Union[bool, IResolvable] = None,
  reverse_dns: typing.Union[bool, IResolvable] = None,
  ssh_keys: typing.List[str] = None,
  storage: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceStorage]] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.shape">shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shape ComputeOrchestratedInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.bootOrder">boot_order</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#boot_order ComputeOrchestratedInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#hostname ComputeOrchestratedInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.imageList">image_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#image_list ComputeOrchestratedInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.instanceAttributes">instance_attributes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance_attributes ComputeOrchestratedInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.label">label</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#label ComputeOrchestratedInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.networkingInfo">networking_info</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]]</code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.persistent">persistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#persistent ComputeOrchestratedInstance#persistent}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.reverseDns">reverse_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#reverse_dns ComputeOrchestratedInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ssh_keys ComputeOrchestratedInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.storage">storage</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]]</code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name ComputeOrchestratedInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.shape"></a>

```python
shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shape ComputeOrchestratedInstance#shape}.

---

##### `boot_order`<sup>Optional</sup> <a name="boot_order" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.bootOrder"></a>

```python
boot_order: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#boot_order ComputeOrchestratedInstance#boot_order}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#hostname ComputeOrchestratedInstance#hostname}.

---

##### `image_list`<sup>Optional</sup> <a name="image_list" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.imageList"></a>

```python
image_list: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#image_list ComputeOrchestratedInstance#image_list}.

---

##### `instance_attributes`<sup>Optional</sup> <a name="instance_attributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.instanceAttributes"></a>

```python
instance_attributes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#instance_attributes ComputeOrchestratedInstance#instance_attributes}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.label"></a>

```python
label: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#label ComputeOrchestratedInstance#label}.

---

##### `networking_info`<sup>Optional</sup> <a name="networking_info" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.networkingInfo"></a>

```python
networking_info: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceNetworkingInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]]

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#networking_info ComputeOrchestratedInstance#networking_info}

---

##### `persistent`<sup>Optional</sup> <a name="persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.persistent"></a>

```python
persistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#persistent ComputeOrchestratedInstance#persistent}.

---

##### `reverse_dns`<sup>Optional</sup> <a name="reverse_dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.reverseDns"></a>

```python
reverse_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#reverse_dns ComputeOrchestratedInstance#reverse_dns}.

---

##### `ssh_keys`<sup>Optional</sup> <a name="ssh_keys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ssh_keys ComputeOrchestratedInstance#ssh_keys}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.storage"></a>

```python
storage: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#storage ComputeOrchestratedInstance#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#tags ComputeOrchestratedInstance#tags}.

---

### ComputeOrchestratedInstanceInstanceNetworkingInfo <a name="ComputeOrchestratedInstanceInstanceNetworkingInfo" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo(
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
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.index">index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.dns">dns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#dns ComputeOrchestratedInstance#dns}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipAddress">ip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_address ComputeOrchestratedInstance#ip_address}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipNetwork">ip_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_network ComputeOrchestratedInstance#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.isDefaultGateway">is_default_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#is_default_gateway ComputeOrchestratedInstance#is_default_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.macAddress">mac_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#mac_address ComputeOrchestratedInstance#mac_address}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name_servers ComputeOrchestratedInstance#name_servers}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nat">nat</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#nat ComputeOrchestratedInstance#nat}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#search_domains ComputeOrchestratedInstance#search_domains}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.secLists">sec_lists</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#sec_lists ComputeOrchestratedInstance#sec_lists}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.sharedNetwork">shared_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shared_network ComputeOrchestratedInstance#shared_network}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnic">vnic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic ComputeOrchestratedInstance#vnic}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnicSets">vnic_sets</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic_sets ComputeOrchestratedInstance#vnic_sets}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#dns ComputeOrchestratedInstance#dns}.

---

##### `ip_address`<sup>Optional</sup> <a name="ip_address" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_address ComputeOrchestratedInstance#ip_address}.

---

##### `ip_network`<sup>Optional</sup> <a name="ip_network" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#ip_network ComputeOrchestratedInstance#ip_network}.

---

##### `is_default_gateway`<sup>Optional</sup> <a name="is_default_gateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.isDefaultGateway"></a>

```python
is_default_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#is_default_gateway ComputeOrchestratedInstance#is_default_gateway}.

---

##### `mac_address`<sup>Optional</sup> <a name="mac_address" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#mac_address ComputeOrchestratedInstance#mac_address}.

---

##### `name_servers`<sup>Optional</sup> <a name="name_servers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#name_servers ComputeOrchestratedInstance#name_servers}.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.nat"></a>

```python
nat: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#nat ComputeOrchestratedInstance#nat}.

---

##### `search_domains`<sup>Optional</sup> <a name="search_domains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#search_domains ComputeOrchestratedInstance#search_domains}.

---

##### `sec_lists`<sup>Optional</sup> <a name="sec_lists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.secLists"></a>

```python
sec_lists: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#sec_lists ComputeOrchestratedInstance#sec_lists}.

---

##### `shared_network`<sup>Optional</sup> <a name="shared_network" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.sharedNetwork"></a>

```python
shared_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#shared_network ComputeOrchestratedInstance#shared_network}.

---

##### `vnic`<sup>Optional</sup> <a name="vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnic"></a>

```python
vnic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic ComputeOrchestratedInstance#vnic}.

---

##### `vnic_sets`<sup>Optional</sup> <a name="vnic_sets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo.property.vnicSets"></a>

```python
vnic_sets: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#vnic_sets ComputeOrchestratedInstance#vnic_sets}.

---

### ComputeOrchestratedInstanceInstanceStorage <a name="ComputeOrchestratedInstanceInstanceStorage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage(
  index: typing.Union[int, float],
  volume: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.index">index</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.volume">volume</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#volume ComputeOrchestratedInstance#volume}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#index ComputeOrchestratedInstance#index}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage.property.volume"></a>

```python
volume: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#volume ComputeOrchestratedInstance#volume}.

---

### ComputeOrchestratedInstanceTimeouts <a name="ComputeOrchestratedInstanceTimeouts" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#create ComputeOrchestratedInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#delete ComputeOrchestratedInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_orchestrated_instance#update ComputeOrchestratedInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeOrchestratedInstanceInstanceList <a name="ComputeOrchestratedInstanceInstanceList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrchestratedInstanceInstanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstance]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]]

---


### ComputeOrchestratedInstanceInstanceNetworkingInfoList <a name="ComputeOrchestratedInstanceInstanceNetworkingInfoList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceNetworkingInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]]

---


### ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference <a name="ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetDns">reset_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpAddress">reset_ip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpNetwork">reset_ip_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIsDefaultGateway">reset_is_default_gateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetMacAddress">reset_mac_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNameServers">reset_name_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNat">reset_nat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSearchDomains">reset_search_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSecLists">reset_sec_lists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSharedNetwork">reset_shared_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnic">reset_vnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnicSets">reset_vnic_sets</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dns` <a name="reset_dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetDns"></a>

```python
def reset_dns() -> None
```

##### `reset_ip_address` <a name="reset_ip_address" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpAddress"></a>

```python
def reset_ip_address() -> None
```

##### `reset_ip_network` <a name="reset_ip_network" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIpNetwork"></a>

```python
def reset_ip_network() -> None
```

##### `reset_is_default_gateway` <a name="reset_is_default_gateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetIsDefaultGateway"></a>

```python
def reset_is_default_gateway() -> None
```

##### `reset_mac_address` <a name="reset_mac_address" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetMacAddress"></a>

```python
def reset_mac_address() -> None
```

##### `reset_name_servers` <a name="reset_name_servers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNameServers"></a>

```python
def reset_name_servers() -> None
```

##### `reset_nat` <a name="reset_nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetNat"></a>

```python
def reset_nat() -> None
```

##### `reset_search_domains` <a name="reset_search_domains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSearchDomains"></a>

```python
def reset_search_domains() -> None
```

##### `reset_sec_lists` <a name="reset_sec_lists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSecLists"></a>

```python
def reset_sec_lists() -> None
```

##### `reset_shared_network` <a name="reset_shared_network" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetSharedNetwork"></a>

```python
def reset_shared_network() -> None
```

##### `reset_vnic` <a name="reset_vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnic"></a>

```python
def reset_vnic() -> None
```

##### `reset_vnic_sets` <a name="reset_vnic_sets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.resetVnicSets"></a>

```python
def reset_vnic_sets() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dnsInput">dns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.indexInput">index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddressInput">ip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetworkInput">ip_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput">is_default_gateway_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddressInput">mac_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServersInput">name_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.natInput">nat_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomainsInput">search_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secListsInput">sec_lists_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetworkInput">shared_network_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicInput">vnic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSetsInput">vnic_sets_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dns">dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.index">index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetwork">ip_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGateway">is_default_gateway</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nat">nat</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secLists">sec_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetwork">shared_network</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnic">vnic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSets">vnic_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns_input`<sup>Optional</sup> <a name="dns_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dnsInput"></a>

```python
dns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.indexInput"></a>

```python
index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address_input`<sup>Optional</sup> <a name="ip_address_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddressInput"></a>

```python
ip_address_input: str
```

- *Type:* str

---

##### `ip_network_input`<sup>Optional</sup> <a name="ip_network_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetworkInput"></a>

```python
ip_network_input: str
```

- *Type:* str

---

##### `is_default_gateway_input`<sup>Optional</sup> <a name="is_default_gateway_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput"></a>

```python
is_default_gateway_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mac_address_input`<sup>Optional</sup> <a name="mac_address_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddressInput"></a>

```python
mac_address_input: str
```

- *Type:* str

---

##### `name_servers_input`<sup>Optional</sup> <a name="name_servers_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServersInput"></a>

```python
name_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nat_input`<sup>Optional</sup> <a name="nat_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.natInput"></a>

```python
nat_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domains_input`<sup>Optional</sup> <a name="search_domains_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomainsInput"></a>

```python
search_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sec_lists_input`<sup>Optional</sup> <a name="sec_lists_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secListsInput"></a>

```python
sec_lists_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_network_input`<sup>Optional</sup> <a name="shared_network_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetworkInput"></a>

```python
shared_network_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnic_input`<sup>Optional</sup> <a name="vnic_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicInput"></a>

```python
vnic_input: str
```

- *Type:* str

---

##### `vnic_sets_input`<sup>Optional</sup> <a name="vnic_sets_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSetsInput"></a>

```python
vnic_sets_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

---

##### `is_default_gateway`<sup>Required</sup> <a name="is_default_gateway" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.isDefaultGateway"></a>

```python
is_default_gateway: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.nat"></a>

```python
nat: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domains`<sup>Required</sup> <a name="search_domains" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sec_lists`<sup>Required</sup> <a name="sec_lists" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.secLists"></a>

```python
sec_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_network`<sup>Required</sup> <a name="shared_network" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.sharedNetwork"></a>

```python
shared_network: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnic"></a>

```python
vnic: str
```

- *Type:* str

---

##### `vnic_sets`<sup>Required</sup> <a name="vnic_sets" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.vnicSets"></a>

```python
vnic_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeOrchestratedInstanceInstanceNetworkingInfo]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]

---


### ComputeOrchestratedInstanceInstanceOutputReference <a name="ComputeOrchestratedInstanceInstanceOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo">put_networking_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage">put_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetBootOrder">reset_boot_order</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetImageList">reset_image_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetInstanceAttributes">reset_instance_attributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetLabel">reset_label</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetNetworkingInfo">reset_networking_info</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetPersistent">reset_persistent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetReverseDns">reset_reverse_dns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetSshKeys">reset_ssh_keys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetStorage">reset_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetTags">reset_tags</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_networking_info` <a name="put_networking_info" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo"></a>

```python
def put_networking_info(
  value: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceNetworkingInfo]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putNetworkingInfo.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]]

---

##### `put_storage` <a name="put_storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage"></a>

```python
def put_storage(
  value: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceStorage]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.putStorage.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]]

---

##### `reset_boot_order` <a name="reset_boot_order" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetBootOrder"></a>

```python
def reset_boot_order() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_image_list` <a name="reset_image_list" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetImageList"></a>

```python
def reset_image_list() -> None
```

##### `reset_instance_attributes` <a name="reset_instance_attributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetInstanceAttributes"></a>

```python
def reset_instance_attributes() -> None
```

##### `reset_label` <a name="reset_label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetLabel"></a>

```python
def reset_label() -> None
```

##### `reset_networking_info` <a name="reset_networking_info" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetNetworkingInfo"></a>

```python
def reset_networking_info() -> None
```

##### `reset_persistent` <a name="reset_persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetPersistent"></a>

```python
def reset_persistent() -> None
```

##### `reset_reverse_dns` <a name="reset_reverse_dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetReverseDns"></a>

```python
def reset_reverse_dns() -> None
```

##### `reset_ssh_keys` <a name="reset_ssh_keys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetSshKeys"></a>

```python
def reset_ssh_keys() -> None
```

##### `reset_storage` <a name="reset_storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetStorage"></a>

```python
def reset_storage() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.resetTags"></a>

```python
def reset_tags() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.entry">entry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fingerprint">fingerprint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqdn">fqdn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageFormat">image_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfo">networking_info</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList">ComputeOrchestratedInstanceInstanceNetworkingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.placementRequirements">placement_requirements</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.priority">priority</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.quotaReservation">quota_reservation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.relationships">relationships</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.resolvers">resolvers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.site">site</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.startTime">start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList">ComputeOrchestratedInstanceInstanceStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vcable">vcable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.virtio">virtio</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vncAddress">vnc_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrderInput">boot_order_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageListInput">image_list_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributesInput">instance_attributes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.labelInput">label_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfoInput">networking_info_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistentInput">persistent_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDnsInput">reverse_dns_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shapeInput">shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeysInput">ssh_keys_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storageInput">storage_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrder">boot_order</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageList">image_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributes">instance_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.label">label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistent">persistent</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDns">reverse_dns</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeys">ssh_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.entry"></a>

```python
entry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fingerprint"></a>

```python
fingerprint: str
```

- *Type:* str

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.fqdn"></a>

```python
fqdn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_format`<sup>Required</sup> <a name="image_format" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageFormat"></a>

```python
image_format: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `networking_info`<sup>Required</sup> <a name="networking_info" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfo"></a>

```python
networking_info: ComputeOrchestratedInstanceInstanceNetworkingInfoList
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfoList">ComputeOrchestratedInstanceInstanceNetworkingInfoList</a>

---

##### `placement_requirements`<sup>Required</sup> <a name="placement_requirements" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.placementRequirements"></a>

```python
placement_requirements: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.priority"></a>

```python
priority: str
```

- *Type:* str

---

##### `quota_reservation`<sup>Required</sup> <a name="quota_reservation" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.quotaReservation"></a>

```python
quota_reservation: str
```

- *Type:* str

---

##### `relationships`<sup>Required</sup> <a name="relationships" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.relationships"></a>

```python
relationships: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.resolvers"></a>

```python
resolvers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.site"></a>

```python
site: str
```

- *Type:* str

---

##### `start_time`<sup>Required</sup> <a name="start_time" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.startTime"></a>

```python
start_time: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storage"></a>

```python
storage: ComputeOrchestratedInstanceInstanceStorageList
```

- *Type:* <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList">ComputeOrchestratedInstanceInstanceStorageList</a>

---

##### `vcable`<sup>Required</sup> <a name="vcable" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vcable"></a>

```python
vcable: str
```

- *Type:* str

---

##### `virtio`<sup>Required</sup> <a name="virtio" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.virtio"></a>

```python
virtio: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vnc_address`<sup>Required</sup> <a name="vnc_address" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.vncAddress"></a>

```python
vnc_address: str
```

- *Type:* str

---

##### `boot_order_input`<sup>Optional</sup> <a name="boot_order_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrderInput"></a>

```python
boot_order_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `image_list_input`<sup>Optional</sup> <a name="image_list_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageListInput"></a>

```python
image_list_input: str
```

- *Type:* str

---

##### `instance_attributes_input`<sup>Optional</sup> <a name="instance_attributes_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributesInput"></a>

```python
instance_attributes_input: str
```

- *Type:* str

---

##### `label_input`<sup>Optional</sup> <a name="label_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.labelInput"></a>

```python
label_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `networking_info_input`<sup>Optional</sup> <a name="networking_info_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.networkingInfoInput"></a>

```python
networking_info_input: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceNetworkingInfo]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceNetworkingInfo">ComputeOrchestratedInstanceInstanceNetworkingInfo</a>]]

---

##### `persistent_input`<sup>Optional</sup> <a name="persistent_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistentInput"></a>

```python
persistent_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reverse_dns_input`<sup>Optional</sup> <a name="reverse_dns_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDnsInput"></a>

```python
reverse_dns_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shape_input`<sup>Optional</sup> <a name="shape_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shapeInput"></a>

```python
shape_input: str
```

- *Type:* str

---

##### `ssh_keys_input`<sup>Optional</sup> <a name="ssh_keys_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeysInput"></a>

```python
ssh_keys_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `storage_input`<sup>Optional</sup> <a name="storage_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.storageInput"></a>

```python
storage_input: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `boot_order`<sup>Required</sup> <a name="boot_order" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.bootOrder"></a>

```python
boot_order: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `image_list`<sup>Required</sup> <a name="image_list" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.imageList"></a>

```python
image_list: str
```

- *Type:* str

---

##### `instance_attributes`<sup>Required</sup> <a name="instance_attributes" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.instanceAttributes"></a>

```python
instance_attributes: str
```

- *Type:* str

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.label"></a>

```python
label: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `persistent`<sup>Required</sup> <a name="persistent" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.persistent"></a>

```python
persistent: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `reverse_dns`<sup>Required</sup> <a name="reverse_dns" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.reverseDns"></a>

```python
reverse_dns: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `ssh_keys`<sup>Required</sup> <a name="ssh_keys" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.sshKeys"></a>

```python
ssh_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeOrchestratedInstanceInstance]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstance">ComputeOrchestratedInstanceInstance</a>]

---


### ComputeOrchestratedInstanceInstanceStorageList <a name="ComputeOrchestratedInstanceInstanceStorageList" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ComputeOrchestratedInstanceInstanceStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ComputeOrchestratedInstanceInstanceStorage]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]]

---


### ComputeOrchestratedInstanceInstanceStorageOutputReference <a name="ComputeOrchestratedInstanceInstanceStorageOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.indexInput">index_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volumeInput">volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.index">index</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volume">volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `index_input`<sup>Optional</sup> <a name="index_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.indexInput"></a>

```python
index_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume_input`<sup>Optional</sup> <a name="volume_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volumeInput"></a>

```python
volume_input: str
```

- *Type:* str

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.index"></a>

```python
index: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.volume"></a>

```python
volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorageOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeOrchestratedInstanceInstanceStorage]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceInstanceStorage">ComputeOrchestratedInstanceInstanceStorage</a>]

---


### ComputeOrchestratedInstanceTimeoutsOutputReference <a name="ComputeOrchestratedInstanceTimeoutsOutputReference" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_orchestrated_instance

computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ComputeOrchestratedInstanceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opc.computeOrchestratedInstance.ComputeOrchestratedInstanceTimeouts">ComputeOrchestratedInstanceTimeouts</a>]

---



