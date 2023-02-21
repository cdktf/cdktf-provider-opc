# `computeIpAddressAssociation` Submodule <a name="`computeIpAddressAssociation` Submodule" id="@cdktf/provider-opc.computeIpAddressAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeIpAddressAssociation <a name="ComputeIpAddressAssociation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association opc_compute_ip_address_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_association

computeIpAddressAssociation.ComputeIpAddressAssociation(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  ip_address_reservation: str = None,
  tags: typing.List[str] = None,
  vnic: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#name ComputeIpAddressAssociation#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#description ComputeIpAddressAssociation#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#id ComputeIpAddressAssociation#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.ipAddressReservation">ip_address_reservation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#ip_address_reservation ComputeIpAddressAssociation#ip_address_reservation}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#tags ComputeIpAddressAssociation#tags}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.vnic">vnic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#vnic ComputeIpAddressAssociation#vnic}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#name ComputeIpAddressAssociation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#description ComputeIpAddressAssociation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#id ComputeIpAddressAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address_reservation`<sup>Optional</sup> <a name="ip_address_reservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.ipAddressReservation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#ip_address_reservation ComputeIpAddressAssociation#ip_address_reservation}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#tags ComputeIpAddressAssociation#tags}.

---

##### `vnic`<sup>Optional</sup> <a name="vnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.vnic"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#vnic ComputeIpAddressAssociation#vnic}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetIpAddressReservation">reset_ip_address_reservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetVnic">reset_vnic</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_address_reservation` <a name="reset_ip_address_reservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetIpAddressReservation"></a>

```python
def reset_ip_address_reservation() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vnic` <a name="reset_vnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetVnic"></a>

```python
def reset_vnic() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_association

computeIpAddressAssociation.ComputeIpAddressAssociation.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_association

computeIpAddressAssociation.ComputeIpAddressAssociation.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_association

computeIpAddressAssociation.ComputeIpAddressAssociation.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservationInput">ip_address_reservation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnicInput">vnic_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservation">ip_address_reservation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnic">vnic</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_address_reservation_input`<sup>Optional</sup> <a name="ip_address_reservation_input" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservationInput"></a>

```python
ip_address_reservation_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vnic_input`<sup>Optional</sup> <a name="vnic_input" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnicInput"></a>

```python
vnic_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address_reservation`<sup>Required</sup> <a name="ip_address_reservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservation"></a>

```python
ip_address_reservation: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnic"></a>

```python
vnic: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeIpAddressAssociationConfig <a name="ComputeIpAddressAssociationConfig" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_ip_address_association

computeIpAddressAssociation.ComputeIpAddressAssociationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  id: str = None,
  ip_address_reservation: str = None,
  tags: typing.List[str] = None,
  vnic: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#name ComputeIpAddressAssociation#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#description ComputeIpAddressAssociation#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#id ComputeIpAddressAssociation#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.ipAddressReservation">ip_address_reservation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#ip_address_reservation ComputeIpAddressAssociation#ip_address_reservation}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#tags ComputeIpAddressAssociation#tags}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.vnic">vnic</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#vnic ComputeIpAddressAssociation#vnic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#name ComputeIpAddressAssociation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#description ComputeIpAddressAssociation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#id ComputeIpAddressAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_address_reservation`<sup>Optional</sup> <a name="ip_address_reservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.ipAddressReservation"></a>

```python
ip_address_reservation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#ip_address_reservation ComputeIpAddressAssociation#ip_address_reservation}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#tags ComputeIpAddressAssociation#tags}.

---

##### `vnic`<sup>Optional</sup> <a name="vnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.vnic"></a>

```python
vnic: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_ip_address_association#vnic ComputeIpAddressAssociation#vnic}.

---



