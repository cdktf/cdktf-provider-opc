# `computeIpAddressReservation` Submodule <a name="`computeIpAddressReservation` Submodule" id="@cdktf/provider-opc.computeIpAddressReservation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeIpAddressReservation <a name="ComputeIpAddressReservation" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation opc_compute_ip_address_reservation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_reservation

computeIpAddressReservation.ComputeIpAddressReservation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_address_pool: str,
  name: str,
  description: str = None,
  id: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.ipAddressPool">ip_address_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#ip_address_pool ComputeIpAddressReservation#ip_address_pool}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#name ComputeIpAddressReservation#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#description ComputeIpAddressReservation#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#id ComputeIpAddressReservation#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#tags ComputeIpAddressReservation#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_address_pool`<sup>Required</sup> <a name="ip_address_pool" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.ipAddressPool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#ip_address_pool ComputeIpAddressReservation#ip_address_pool}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#name ComputeIpAddressReservation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#description ComputeIpAddressReservation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#id ComputeIpAddressReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#tags ComputeIpAddressReservation#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_reservation

computeIpAddressReservation.ComputeIpAddressReservation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_reservation

computeIpAddressReservation.ComputeIpAddressReservation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_reservation

computeIpAddressReservation.ComputeIpAddressReservation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.ipAddressPoolInput">ip_address_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.ipAddressPool">ip_address_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_pool_input`<sup>Optional</sup> <a name="ip_address_pool_input" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.ipAddressPoolInput"></a>

```python
ip_address_pool_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address_pool`<sup>Required</sup> <a name="ip_address_pool" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.ipAddressPool"></a>

```python
ip_address_pool: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeIpAddressReservationConfig <a name="ComputeIpAddressReservationConfig" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_reservation

computeIpAddressReservation.ComputeIpAddressReservationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  ip_address_pool: str,
  name: str,
  description: str = None,
  id: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.ipAddressPool">ip_address_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#ip_address_pool ComputeIpAddressReservation#ip_address_pool}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#name ComputeIpAddressReservation#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#description ComputeIpAddressReservation#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#id ComputeIpAddressReservation#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#tags ComputeIpAddressReservation#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `ip_address_pool`<sup>Required</sup> <a name="ip_address_pool" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.ipAddressPool"></a>

```python
ip_address_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#ip_address_pool ComputeIpAddressReservation#ip_address_pool}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#name ComputeIpAddressReservation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#description ComputeIpAddressReservation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#id ComputeIpAddressReservation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeIpAddressReservation.ComputeIpAddressReservationConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_reservation#tags ComputeIpAddressReservation#tags}.

---



