# `opc_lbaas_load_balancer`

Refer to the Terraform Registory for docs: [`opc_lbaas_load_balancer`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer).

# `lbaasLoadBalancer` Submodule <a name="`lbaasLoadBalancer` Submodule" id="@cdktf/provider-opc.lbaasLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasLoadBalancer <a name="LbaasLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer opc_lbaas_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_load_balancer

lbaasLoadBalancer.LbaasLoadBalancer(
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
  region: str,
  scheme: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip_network: str = None,
  parent_load_balancer: str = None,
  permitted_clients: typing.List[str] = None,
  permitted_methods: typing.List[str] = None,
  policies: typing.List[str] = None,
  server_pool: str = None,
  tags: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.ipNetwork">ip_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.parentLoadBalancer">parent_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.permittedClients">permitted_clients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.permittedMethods">permitted_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.serverPool">server_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}.

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scheme"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_network`<sup>Optional</sup> <a name="ip_network" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.ipNetwork"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}.

---

##### `parent_load_balancer`<sup>Optional</sup> <a name="parent_load_balancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.parentLoadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}.

---

##### `permitted_clients`<sup>Optional</sup> <a name="permitted_clients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.permittedClients"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}.

---

##### `permitted_methods`<sup>Optional</sup> <a name="permitted_methods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.permittedMethods"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}.

---

##### `server_pool`<sup>Optional</sup> <a name="server_pool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.serverPool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetIpNetwork">reset_ip_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetParentLoadBalancer">reset_parent_load_balancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedClients">reset_permitted_clients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedMethods">reset_permitted_methods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetServerPool">reset_server_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_network` <a name="reset_ip_network" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetIpNetwork"></a>

```python
def reset_ip_network() -> None
```

##### `reset_parent_load_balancer` <a name="reset_parent_load_balancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetParentLoadBalancer"></a>

```python
def reset_parent_load_balancer() -> None
```

##### `reset_permitted_clients` <a name="reset_permitted_clients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedClients"></a>

```python
def reset_permitted_clients() -> None
```

##### `reset_permitted_methods` <a name="reset_permitted_methods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedMethods"></a>

```python
def reset_permitted_methods() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_server_pool` <a name="reset_server_pool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetServerPool"></a>

```python
def reset_server_pool() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_load_balancer

lbaasLoadBalancer.LbaasLoadBalancer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_load_balancer

lbaasLoadBalancer.LbaasLoadBalancer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_load_balancer

lbaasLoadBalancer.LbaasLoadBalancer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips">balancer_vips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName">canonical_host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable">cloudgate_capable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput">ip_network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput">parent_load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput">permitted_clients_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput">permitted_methods_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput">scheme_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput">server_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork">ip_network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer">parent_load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients">permitted_clients</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods">permitted_methods</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme">scheme</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool">server_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_vips`<sup>Required</sup> <a name="balancer_vips" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips"></a>

```python
balancer_vips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `canonical_host_name`<sup>Required</sup> <a name="canonical_host_name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName"></a>

```python
canonical_host_name: str
```

- *Type:* str

---

##### `cloudgate_capable`<sup>Required</sup> <a name="cloudgate_capable" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable"></a>

```python
cloudgate_capable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_network_input`<sup>Optional</sup> <a name="ip_network_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput"></a>

```python
ip_network_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_load_balancer_input`<sup>Optional</sup> <a name="parent_load_balancer_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput"></a>

```python
parent_load_balancer_input: str
```

- *Type:* str

---

##### `permitted_clients_input`<sup>Optional</sup> <a name="permitted_clients_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput"></a>

```python
permitted_clients_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_methods_input`<sup>Optional</sup> <a name="permitted_methods_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput"></a>

```python
permitted_methods_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `scheme_input`<sup>Optional</sup> <a name="scheme_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput"></a>

```python
scheme_input: str
```

- *Type:* str

---

##### `server_pool_input`<sup>Optional</sup> <a name="server_pool_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput"></a>

```python
server_pool_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_network`<sup>Required</sup> <a name="ip_network" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent_load_balancer`<sup>Required</sup> <a name="parent_load_balancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer"></a>

```python
parent_load_balancer: str
```

- *Type:* str

---

##### `permitted_clients`<sup>Required</sup> <a name="permitted_clients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients"></a>

```python
permitted_clients: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `permitted_methods`<sup>Required</sup> <a name="permitted_methods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods"></a>

```python
permitted_methods: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

---

##### `server_pool`<sup>Required</sup> <a name="server_pool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool"></a>

```python
server_pool: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasLoadBalancerConfig <a name="LbaasLoadBalancerConfig" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_load_balancer

lbaasLoadBalancer.LbaasLoadBalancerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  region: str,
  scheme: str,
  description: str = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ip_network: str = None,
  parent_load_balancer: str = None,
  permitted_clients: typing.List[str] = None,
  permitted_methods: typing.List[str] = None,
  policies: typing.List[str] = None,
  server_pool: str = None,
  tags: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme">scheme</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork">ip_network</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer">parent_load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients">permitted_clients</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods">permitted_methods</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool">server_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}.

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme"></a>

```python
scheme: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_network`<sup>Optional</sup> <a name="ip_network" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork"></a>

```python
ip_network: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}.

---

##### `parent_load_balancer`<sup>Optional</sup> <a name="parent_load_balancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer"></a>

```python
parent_load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}.

---

##### `permitted_clients`<sup>Optional</sup> <a name="permitted_clients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients"></a>

```python
permitted_clients: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}.

---

##### `permitted_methods`<sup>Optional</sup> <a name="permitted_methods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods"></a>

```python
permitted_methods: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}.

---

##### `server_pool`<sup>Optional</sup> <a name="server_pool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool"></a>

```python
server_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}.

---



