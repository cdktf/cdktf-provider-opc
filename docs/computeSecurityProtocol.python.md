# `opc_compute_security_protocol`

Refer to the Terraform Registory for docs: [`opc_compute_security_protocol`](https://www.terraform.io/docs/providers/opc/r/compute_security_protocol).

# `computeSecurityProtocol` Submodule <a name="`computeSecurityProtocol` Submodule" id="@cdktf/provider-opc.computeSecurityProtocol"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityProtocol <a name="ComputeSecurityProtocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol opc_compute_security_protocol}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_protocol

computeSecurityProtocol.ComputeSecurityProtocol(
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
  dst_ports: typing.List[str] = None,
  id: str = None,
  ip_protocol: str = None,
  src_ports: typing.List[str] = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#name ComputeSecurityProtocol#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#description ComputeSecurityProtocol#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.dstPorts">dst_ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#dst_ports ComputeSecurityProtocol#dst_ports}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#id ComputeSecurityProtocol#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.ipProtocol">ip_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#ip_protocol ComputeSecurityProtocol#ip_protocol}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.srcPorts">src_ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#src_ports ComputeSecurityProtocol#src_ports}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#tags ComputeSecurityProtocol#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#name ComputeSecurityProtocol#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#description ComputeSecurityProtocol#description}.

---

##### `dst_ports`<sup>Optional</sup> <a name="dst_ports" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.dstPorts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#dst_ports ComputeSecurityProtocol#dst_ports}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#id ComputeSecurityProtocol#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_protocol`<sup>Optional</sup> <a name="ip_protocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.ipProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#ip_protocol ComputeSecurityProtocol#ip_protocol}.

---

##### `src_ports`<sup>Optional</sup> <a name="src_ports" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.srcPorts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#src_ports ComputeSecurityProtocol#src_ports}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#tags ComputeSecurityProtocol#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetDstPorts">reset_dst_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetIpProtocol">reset_ip_protocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetSrcPorts">reset_src_ports</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dst_ports` <a name="reset_dst_ports" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetDstPorts"></a>

```python
def reset_dst_ports() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_protocol` <a name="reset_ip_protocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetIpProtocol"></a>

```python
def reset_ip_protocol() -> None
```

##### `reset_src_ports` <a name="reset_src_ports" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetSrcPorts"></a>

```python
def reset_src_ports() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_protocol

computeSecurityProtocol.ComputeSecurityProtocol.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_protocol

computeSecurityProtocol.ComputeSecurityProtocol.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_protocol

computeSecurityProtocol.ComputeSecurityProtocol.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dstPortsInput">dst_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.ipProtocolInput">ip_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.srcPortsInput">src_ports_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dstPorts">dst_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.srcPorts">src_ports</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dst_ports_input`<sup>Optional</sup> <a name="dst_ports_input" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dstPortsInput"></a>

```python
dst_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_protocol_input`<sup>Optional</sup> <a name="ip_protocol_input" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.ipProtocolInput"></a>

```python
ip_protocol_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `src_ports_input`<sup>Optional</sup> <a name="src_ports_input" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.srcPortsInput"></a>

```python
src_ports_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dst_ports`<sup>Required</sup> <a name="dst_ports" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dstPorts"></a>

```python
dst_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_protocol`<sup>Required</sup> <a name="ip_protocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `src_ports`<sup>Required</sup> <a name="src_ports" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.srcPorts"></a>

```python
src_ports: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityProtocolConfig <a name="ComputeSecurityProtocolConfig" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_protocol

computeSecurityProtocol.ComputeSecurityProtocolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  description: str = None,
  dst_ports: typing.List[str] = None,
  id: str = None,
  ip_protocol: str = None,
  src_ports: typing.List[str] = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#name ComputeSecurityProtocol#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#description ComputeSecurityProtocol#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.dstPorts">dst_ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#dst_ports ComputeSecurityProtocol#dst_ports}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#id ComputeSecurityProtocol#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.ipProtocol">ip_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#ip_protocol ComputeSecurityProtocol#ip_protocol}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.srcPorts">src_ports</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#src_ports ComputeSecurityProtocol#src_ports}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#tags ComputeSecurityProtocol#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#name ComputeSecurityProtocol#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#description ComputeSecurityProtocol#description}.

---

##### `dst_ports`<sup>Optional</sup> <a name="dst_ports" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.dstPorts"></a>

```python
dst_ports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#dst_ports ComputeSecurityProtocol#dst_ports}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#id ComputeSecurityProtocol#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_protocol`<sup>Optional</sup> <a name="ip_protocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.ipProtocol"></a>

```python
ip_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#ip_protocol ComputeSecurityProtocol#ip_protocol}.

---

##### `src_ports`<sup>Optional</sup> <a name="src_ports" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.srcPorts"></a>

```python
src_ports: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#src_ports ComputeSecurityProtocol#src_ports}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#tags ComputeSecurityProtocol#tags}.

---



