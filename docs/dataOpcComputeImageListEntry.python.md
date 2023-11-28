# `dataOpcComputeImageListEntry` Submodule <a name="`dataOpcComputeImageListEntry` Submodule" id="@cdktf/provider-opc.dataOpcComputeImageListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeImageListEntry <a name="DataOpcComputeImageListEntry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry opc_compute_image_list_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_image_list_entry

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image_list: str,
  version: typing.Union[int, float],
  entry: typing.Union[int, float] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.imageList">image_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#image_list DataOpcComputeImageListEntry#image_list}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#version DataOpcComputeImageListEntry#version}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.entry">entry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#entry DataOpcComputeImageListEntry#entry}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#id DataOpcComputeImageListEntry#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image_list`<sup>Required</sup> <a name="image_list" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.imageList"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#image_list DataOpcComputeImageListEntry#image_list}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#version DataOpcComputeImageListEntry#version}.

---

##### `entry`<sup>Optional</sup> <a name="entry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.entry"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#entry DataOpcComputeImageListEntry#entry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#id DataOpcComputeImageListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetEntry">reset_entry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_entry` <a name="reset_entry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetEntry"></a>

```python
def reset_entry() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpcComputeImageListEntry resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_image_list_entry

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_image_list_entry

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_image_list_entry

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_image_list_entry

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpcComputeImageListEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpcComputeImageListEntry to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpcComputeImageListEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpcComputeImageListEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.attributes">attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.machineImages">machine_images</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.entryInput">entry_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.imageListInput">image_list_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.entry">entry</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.imageList">image_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.attributes"></a>

```python
attributes: str
```

- *Type:* str

---

##### `machine_images`<sup>Required</sup> <a name="machine_images" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.machineImages"></a>

```python
machine_images: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `entry_input`<sup>Optional</sup> <a name="entry_input" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.entryInput"></a>

```python
entry_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `image_list_input`<sup>Optional</sup> <a name="image_list_input" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.imageListInput"></a>

```python
image_list_input: str
```

- *Type:* str

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.entry"></a>

```python
entry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `image_list`<sup>Required</sup> <a name="image_list" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.imageList"></a>

```python
image_list: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeImageListEntryConfig <a name="DataOpcComputeImageListEntryConfig" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_image_list_entry

dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  image_list: str,
  version: typing.Union[int, float],
  entry: typing.Union[int, float] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.imageList">image_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#image_list DataOpcComputeImageListEntry#image_list}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#version DataOpcComputeImageListEntry#version}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.entry">entry</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#entry DataOpcComputeImageListEntry#entry}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#id DataOpcComputeImageListEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `image_list`<sup>Required</sup> <a name="image_list" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.imageList"></a>

```python
image_list: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#image_list DataOpcComputeImageListEntry#image_list}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#version DataOpcComputeImageListEntry#version}.

---

##### `entry`<sup>Optional</sup> <a name="entry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.entry"></a>

```python
entry: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#entry DataOpcComputeImageListEntry#entry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#id DataOpcComputeImageListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



