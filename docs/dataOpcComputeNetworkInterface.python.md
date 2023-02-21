# `dataOpcComputeNetworkInterface` Submodule <a name="`dataOpcComputeNetworkInterface` Submodule" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeNetworkInterface <a name="DataOpcComputeNetworkInterface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface opc_compute_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_network_interface

dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  instance_name: str,
  interface: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.interface">interface</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.instanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}.

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.instanceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}.

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.interface"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_network_interface

dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_network_interface

dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_network_interface

dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dns">dns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipNetwork">ip_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.isDefaultGateway">is_default_gateway</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.macAddress">mac_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nameServers">name_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nat">nat</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.searchDomains">search_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.secLists">sec_lists</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.sharedNetwork">shared_network</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnic">vnic</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnicSets">vnic_sets</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceIdInput">instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceNameInput">instance_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interfaceInput">interface_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceId">instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceName">instance_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interface">interface</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.dns"></a>

```python
dns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

---

##### `is_default_gateway`<sup>Required</sup> <a name="is_default_gateway" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.isDefaultGateway"></a>

```python
is_default_gateway: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `mac_address`<sup>Required</sup> <a name="mac_address" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.macAddress"></a>

```python
mac_address: str
```

- *Type:* str

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `name_servers`<sup>Required</sup> <a name="name_servers" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nameServers"></a>

```python
name_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.nat"></a>

```python
nat: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `search_domains`<sup>Required</sup> <a name="search_domains" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.searchDomains"></a>

```python
search_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sec_lists`<sup>Required</sup> <a name="sec_lists" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.secLists"></a>

```python
sec_lists: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shared_network`<sup>Required</sup> <a name="shared_network" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.sharedNetwork"></a>

```python
shared_network: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnic"></a>

```python
vnic: str
```

- *Type:* str

---

##### `vnic_sets`<sup>Required</sup> <a name="vnic_sets" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.vnicSets"></a>

```python
vnic_sets: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instance_id_input`<sup>Optional</sup> <a name="instance_id_input" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceIdInput"></a>

```python
instance_id_input: str
```

- *Type:* str

---

##### `instance_name_input`<sup>Optional</sup> <a name="instance_name_input" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceNameInput"></a>

```python
instance_name_input: str
```

- *Type:* str

---

##### `interface_input`<sup>Optional</sup> <a name="interface_input" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interfaceInput"></a>

```python
interface_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.interface"></a>

```python
interface: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterface.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeNetworkInterfaceConfig <a name="DataOpcComputeNetworkInterfaceConfig" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import data_opc_compute_network_interface

dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  instance_id: str,
  instance_name: str,
  interface: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceId">instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceName">instance_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.interface">interface</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `instance_id`<sup>Required</sup> <a name="instance_id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceId"></a>

```python
instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_id DataOpcComputeNetworkInterface#instance_id}.

---

##### `instance_name`<sup>Required</sup> <a name="instance_name" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.instanceName"></a>

```python
instance_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#instance_name DataOpcComputeNetworkInterface#instance_name}.

---

##### `interface`<sup>Required</sup> <a name="interface" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.interface"></a>

```python
interface: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#interface DataOpcComputeNetworkInterface#interface}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeNetworkInterface.DataOpcComputeNetworkInterfaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/d/compute_network_interface#id DataOpcComputeNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



