# `computeSecurityRule` Submodule <a name="`computeSecurityRule` Submodule" id="@cdktf/provider-opc.computeSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityRule <a name="ComputeSecurityRule" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule opc_compute_security_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_rule

computeSecurityRule.ComputeSecurityRule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  flow_direction: str,
  name: str,
  acl: str = None,
  description: str = None,
  dst_ip_address_prefixes: typing.List[str] = None,
  dst_vnic_set: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  security_protocols: typing.List[str] = None,
  src_ip_address_prefixes: typing.List[str] = None,
  src_vnic_set: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.flowDirection">flow_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#name ComputeSecurityRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#acl ComputeSecurityRule#acl}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#description ComputeSecurityRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dstIpAddressPrefixes">dst_ip_address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dstVnicSet">dst_vnic_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#enabled ComputeSecurityRule#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#id ComputeSecurityRule#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.securityProtocols">security_protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.srcIpAddressPrefixes">src_ip_address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.srcVnicSet">src_vnic_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#tags ComputeSecurityRule#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `flow_direction`<sup>Required</sup> <a name="flow_direction" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.flowDirection"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#name ComputeSecurityRule#name}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.acl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#acl ComputeSecurityRule#acl}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#description ComputeSecurityRule#description}.

---

##### `dst_ip_address_prefixes`<sup>Optional</sup> <a name="dst_ip_address_prefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dstIpAddressPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}.

---

##### `dst_vnic_set`<sup>Optional</sup> <a name="dst_vnic_set" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.dstVnicSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#enabled ComputeSecurityRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#id ComputeSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_protocols`<sup>Optional</sup> <a name="security_protocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.securityProtocols"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}.

---

##### `src_ip_address_prefixes`<sup>Optional</sup> <a name="src_ip_address_prefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.srcIpAddressPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}.

---

##### `src_vnic_set`<sup>Optional</sup> <a name="src_vnic_set" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.srcVnicSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#tags ComputeSecurityRule#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl">reset_acl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes">reset_dst_ip_address_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet">reset_dst_vnic_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols">reset_security_protocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes">reset_src_ip_address_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet">reset_src_vnic_set</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_acl` <a name="reset_acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl"></a>

```python
def reset_acl() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_dst_ip_address_prefixes` <a name="reset_dst_ip_address_prefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes"></a>

```python
def reset_dst_ip_address_prefixes() -> None
```

##### `reset_dst_vnic_set` <a name="reset_dst_vnic_set" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet"></a>

```python
def reset_dst_vnic_set() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_security_protocols` <a name="reset_security_protocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols"></a>

```python
def reset_security_protocols() -> None
```

##### `reset_src_ip_address_prefixes` <a name="reset_src_ip_address_prefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes"></a>

```python
def reset_src_ip_address_prefixes() -> None
```

##### `reset_src_vnic_set` <a name="reset_src_vnic_set" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet"></a>

```python
def reset_src_vnic_set() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_rule

computeSecurityRule.ComputeSecurityRule.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_rule

computeSecurityRule.ComputeSecurityRule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_rule

computeSecurityRule.ComputeSecurityRule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput">acl_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput">dst_ip_address_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput">dst_vnic_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput">flow_direction_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput">security_protocols_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput">src_ip_address_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput">src_vnic_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl">acl</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes">dst_ip_address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet">dst_vnic_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection">flow_direction</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols">security_protocols</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes">src_ip_address_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet">src_vnic_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `acl_input`<sup>Optional</sup> <a name="acl_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput"></a>

```python
acl_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `dst_ip_address_prefixes_input`<sup>Optional</sup> <a name="dst_ip_address_prefixes_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput"></a>

```python
dst_ip_address_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dst_vnic_set_input`<sup>Optional</sup> <a name="dst_vnic_set_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput"></a>

```python
dst_vnic_set_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `flow_direction_input`<sup>Optional</sup> <a name="flow_direction_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput"></a>

```python
flow_direction_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `security_protocols_input`<sup>Optional</sup> <a name="security_protocols_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput"></a>

```python
security_protocols_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_address_prefixes_input`<sup>Optional</sup> <a name="src_ip_address_prefixes_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput"></a>

```python
src_ip_address_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_vnic_set_input`<sup>Optional</sup> <a name="src_vnic_set_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput"></a>

```python
src_vnic_set_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl"></a>

```python
acl: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `dst_ip_address_prefixes`<sup>Required</sup> <a name="dst_ip_address_prefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes"></a>

```python
dst_ip_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `dst_vnic_set`<sup>Required</sup> <a name="dst_vnic_set" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet"></a>

```python
dst_vnic_set: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `flow_direction`<sup>Required</sup> <a name="flow_direction" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection"></a>

```python
flow_direction: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `security_protocols`<sup>Required</sup> <a name="security_protocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols"></a>

```python
security_protocols: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_ip_address_prefixes`<sup>Required</sup> <a name="src_ip_address_prefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes"></a>

```python
src_ip_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `src_vnic_set`<sup>Required</sup> <a name="src_vnic_set" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet"></a>

```python
src_vnic_set: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityRuleConfig <a name="ComputeSecurityRuleConfig" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import compute_security_rule

computeSecurityRule.ComputeSecurityRuleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  flow_direction: str,
  name: str,
  acl: str = None,
  description: str = None,
  dst_ip_address_prefixes: typing.List[str] = None,
  dst_vnic_set: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  security_protocols: typing.List[str] = None,
  src_ip_address_prefixes: typing.List[str] = None,
  src_vnic_set: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection">flow_direction</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#name ComputeSecurityRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl">acl</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#acl ComputeSecurityRule#acl}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#description ComputeSecurityRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes">dst_ip_address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet">dst_vnic_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#enabled ComputeSecurityRule#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#id ComputeSecurityRule#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols">security_protocols</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes">src_ip_address_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet">src_vnic_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#tags ComputeSecurityRule#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `flow_direction`<sup>Required</sup> <a name="flow_direction" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection"></a>

```python
flow_direction: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#name ComputeSecurityRule#name}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl"></a>

```python
acl: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#acl ComputeSecurityRule#acl}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#description ComputeSecurityRule#description}.

---

##### `dst_ip_address_prefixes`<sup>Optional</sup> <a name="dst_ip_address_prefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes"></a>

```python
dst_ip_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}.

---

##### `dst_vnic_set`<sup>Optional</sup> <a name="dst_vnic_set" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet"></a>

```python
dst_vnic_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#enabled ComputeSecurityRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#id ComputeSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `security_protocols`<sup>Optional</sup> <a name="security_protocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols"></a>

```python
security_protocols: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}.

---

##### `src_ip_address_prefixes`<sup>Optional</sup> <a name="src_ip_address_prefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes"></a>

```python
src_ip_address_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}.

---

##### `src_vnic_set`<sup>Optional</sup> <a name="src_vnic_set" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet"></a>

```python
src_vnic_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#tags ComputeSecurityRule#tags}.

---



