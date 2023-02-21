# `computeSecRule` Submodule <a name="`computeSecRule` Submodule" id="@cdktf/provider-opc.computeSecRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecRule <a name="ComputeSecRule" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule opc_compute_sec_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_sec_rule

computeSecRule.ComputeSecRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  application: str,
  destination_list: str,
  name: str,
  source_list: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#action ComputeSecRule#action}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#application ComputeSecRule#application}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.destinationList">destination_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#destination_list ComputeSecRule#destination_list}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#name ComputeSecRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.sourceList">source_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#source_list ComputeSecRule#source_list}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#description ComputeSecRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#disabled ComputeSecRule#disabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#id ComputeSecRule#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#action ComputeSecRule#action}.

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.application"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#application ComputeSecRule#application}.

---

##### `destination_list`<sup>Required</sup> <a name="destination_list" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.destinationList"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#destination_list ComputeSecRule#destination_list}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#name ComputeSecRule#name}.

---

##### `source_list`<sup>Required</sup> <a name="source_list" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.sourceList"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#source_list ComputeSecRule#source_list}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#description ComputeSecRule#description}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.disabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#disabled ComputeSecRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#id ComputeSecRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetDisabled">reset_disabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetDisabled"></a>

```python
def reset_disabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_sec_rule

computeSecRule.ComputeSecRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_sec_rule

computeSecRule.ComputeSecRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_sec_rule

computeSecRule.ComputeSecRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.applicationInput">application_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.destinationListInput">destination_list_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.disabledInput">disabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.sourceListInput">source_list_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.application">application</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.destinationList">destination_list</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.sourceList">source_list</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `application_input`<sup>Optional</sup> <a name="application_input" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.applicationInput"></a>

```python
application_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `destination_list_input`<sup>Optional</sup> <a name="destination_list_input" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.destinationListInput"></a>

```python
destination_list_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.disabledInput"></a>

```python
disabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `source_list_input`<sup>Optional</sup> <a name="source_list_input" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.sourceListInput"></a>

```python
source_list_input: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.application"></a>

```python
application: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `destination_list`<sup>Required</sup> <a name="destination_list" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.destinationList"></a>

```python
destination_list: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source_list`<sup>Required</sup> <a name="source_list" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.sourceList"></a>

```python
source_list: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeSecRule.ComputeSecRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecRuleConfig <a name="ComputeSecRuleConfig" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_sec_rule

computeSecRule.ComputeSecRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  application: str,
  destination_list: str,
  name: str,
  source_list: str,
  description: str = None,
  disabled: typing.Union[bool, IResolvable] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#action ComputeSecRule#action}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.application">application</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#application ComputeSecRule#application}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.destinationList">destination_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#destination_list ComputeSecRule#destination_list}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#name ComputeSecRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.sourceList">source_list</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#source_list ComputeSecRule#source_list}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#description ComputeSecRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.disabled">disabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#disabled ComputeSecRule#disabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#id ComputeSecRule#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#action ComputeSecRule#action}.

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.application"></a>

```python
application: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#application ComputeSecRule#application}.

---

##### `destination_list`<sup>Required</sup> <a name="destination_list" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.destinationList"></a>

```python
destination_list: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#destination_list ComputeSecRule#destination_list}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#name ComputeSecRule#name}.

---

##### `source_list`<sup>Required</sup> <a name="source_list" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.sourceList"></a>

```python
source_list: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#source_list ComputeSecRule#source_list}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#description ComputeSecRule#description}.

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.disabled"></a>

```python
disabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#disabled ComputeSecRule#disabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecRule.ComputeSecRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_sec_rule#id ComputeSecRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



