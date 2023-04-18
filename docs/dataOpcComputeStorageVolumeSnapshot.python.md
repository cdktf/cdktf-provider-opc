# `data_opc_compute_storage_volume_snapshot`

Refer to the Terraform Registory for docs: [`data_opc_compute_storage_volume_snapshot`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot).

# `dataOpcComputeStorageVolumeSnapshot` Submodule <a name="`dataOpcComputeStorageVolumeSnapshot` Submodule" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeStorageVolumeSnapshot <a name="DataOpcComputeStorageVolumeSnapshot" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot opc_compute_storage_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_storage_volume_snapshot

dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot(
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
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#name DataOpcComputeStorageVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#id DataOpcComputeStorageVolumeSnapshot#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#name DataOpcComputeStorageVolumeSnapshot#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#id DataOpcComputeStorageVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_storage_volume_snapshot

dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_storage_volume_snapshot

dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_storage_volume_snapshot

dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.account">account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.collocated">collocated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.machineImageName">machine_image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.parentVolumeBootable">parent_volume_bootable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.property">property</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.size">size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotId">snapshot_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotTimestamp">snapshot_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.startTimestamp">start_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusDetail">status_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusTimestamp">status_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.volumeName">volume_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.name">name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.account"></a>

```python
account: str
```

- *Type:* str

---

##### `collocated`<sup>Required</sup> <a name="collocated" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.collocated"></a>

```python
collocated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `machine_image_name`<sup>Required</sup> <a name="machine_image_name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.machineImageName"></a>

```python
machine_image_name: str
```

- *Type:* str

---

##### `parent_volume_bootable`<sup>Required</sup> <a name="parent_volume_bootable" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.parentVolumeBootable"></a>

```python
parent_volume_bootable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.property"></a>

```python
property: str
```

- *Type:* str

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.size"></a>

```python
size: str
```

- *Type:* str

---

##### `snapshot_id`<sup>Required</sup> <a name="snapshot_id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotId"></a>

```python
snapshot_id: str
```

- *Type:* str

---

##### `snapshot_timestamp`<sup>Required</sup> <a name="snapshot_timestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotTimestamp"></a>

```python
snapshot_timestamp: str
```

- *Type:* str

---

##### `start_timestamp`<sup>Required</sup> <a name="start_timestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.startTimestamp"></a>

```python
start_timestamp: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_detail`<sup>Required</sup> <a name="status_detail" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusDetail"></a>

```python
status_detail: str
```

- *Type:* str

---

##### `status_timestamp`<sup>Required</sup> <a name="status_timestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusTimestamp"></a>

```python
status_timestamp: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `volume_name`<sup>Required</sup> <a name="volume_name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.volumeName"></a>

```python
volume_name: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.name"></a>

```python
name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeStorageVolumeSnapshotConfig <a name="DataOpcComputeStorageVolumeSnapshotConfig" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_storage_volume_snapshot

dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#name DataOpcComputeStorageVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#id DataOpcComputeStorageVolumeSnapshot#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#name DataOpcComputeStorageVolumeSnapshot#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#id DataOpcComputeStorageVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



