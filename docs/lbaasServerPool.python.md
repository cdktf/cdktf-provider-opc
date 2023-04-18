# `opc_lbaas_server_pool`

Refer to the Terraform Registory for docs: [`opc_lbaas_server_pool`](https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool).

# `lbaasServerPool` Submodule <a name="`lbaasServerPool` Submodule" id="@cdktf/provider-opc.lbaasServerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasServerPool <a name="LbaasServerPool" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool opc_lbaas_server_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_server_pool

lbaasServerPool.LbaasServerPool(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer: str,
  name: str,
  servers: typing.List[str],
  enabled: typing.Union[bool, IResolvable] = None,
  health_check: LbaasServerPoolHealthCheck = None,
  id: str = None,
  tags: typing.List[str] = None,
  vnic_set: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#name LbaasServerPool#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.servers">servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#servers LbaasServerPool#servers}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#id LbaasServerPool#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#tags LbaasServerPool#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.vnicSet">vnic_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.loadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#name LbaasServerPool#name}.

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.servers"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#servers LbaasServerPool#servers}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#health_check LbaasServerPool#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#id LbaasServerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#tags LbaasServerPool#tags}.

---

##### `vnic_set`<sup>Optional</sup> <a name="vnic_set" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.vnicSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck">put_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetHealthCheck">reset_health_check</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetVnicSet">reset_vnic_set</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_health_check` <a name="put_health_check" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck"></a>

```python
def put_health_check(
  accepted_return_codes: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  healthy_threshold: typing.Union[int, float] = None,
  interval: typing.Union[int, float] = None,
  path: str = None,
  timeout: typing.Union[int, float] = None,
  type: str = None,
  unhealthy_threshold: typing.Union[int, float] = None
) -> None
```

###### `accepted_return_codes`<sup>Optional</sup> <a name="accepted_return_codes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.acceptedReturnCodes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}.

---

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

###### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.healthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}.

---

###### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.interval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#interval LbaasServerPool#interval}.

---

###### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#path LbaasServerPool#path}.

---

###### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.timeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#timeout LbaasServerPool#timeout}.

---

###### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#type LbaasServerPool#type}.

---

###### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.unhealthyThreshold"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}.

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_health_check` <a name="reset_health_check" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetHealthCheck"></a>

```python
def reset_health_check() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_vnic_set` <a name="reset_vnic_set" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetVnicSet"></a>

```python
def reset_vnic_set() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_server_pool

lbaasServerPool.LbaasServerPool.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_server_pool

lbaasServerPool.LbaasServerPool.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_server_pool

lbaasServerPool.LbaasServerPool.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.consumers">consumers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference">LbaasServerPoolHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.operationDetails">operation_details</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.status">status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheckInput">health_check_input</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancerInput">load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.serversInput">servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSetInput">vnic_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancer">load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.servers">servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSet">vnic_set</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.consumers"></a>

```python
consumers: str
```

- *Type:* str

---

##### `health_check`<sup>Required</sup> <a name="health_check" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheck"></a>

```python
health_check: LbaasServerPoolHealthCheckOutputReference
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference">LbaasServerPoolHealthCheckOutputReference</a>

---

##### `operation_details`<sup>Required</sup> <a name="operation_details" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.operationDetails"></a>

```python
operation_details: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.status"></a>

```python
status: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `health_check_input`<sup>Optional</sup> <a name="health_check_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheckInput"></a>

```python
health_check_input: LbaasServerPoolHealthCheck
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancerInput"></a>

```python
load_balancer_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `servers_input`<sup>Optional</sup> <a name="servers_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.serversInput"></a>

```python
servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vnic_set_input`<sup>Optional</sup> <a name="vnic_set_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSetInput"></a>

```python
vnic_set_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vnic_set`<sup>Required</sup> <a name="vnic_set" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSet"></a>

```python
vnic_set: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasServerPoolConfig <a name="LbaasServerPoolConfig" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_server_pool

lbaasServerPool.LbaasServerPoolConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  load_balancer: str,
  name: str,
  servers: typing.List[str],
  enabled: typing.Union[bool, IResolvable] = None,
  health_check: LbaasServerPoolHealthCheck = None,
  id: str = None,
  tags: typing.List[str] = None,
  vnic_set: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#name LbaasServerPool#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.servers">servers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#servers LbaasServerPool#servers}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.healthCheck">health_check</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#id LbaasServerPool#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#tags LbaasServerPool#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.vnicSet">vnic_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#name LbaasServerPool#name}.

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.servers"></a>

```python
servers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#servers LbaasServerPool#servers}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `health_check`<sup>Optional</sup> <a name="health_check" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.healthCheck"></a>

```python
health_check: LbaasServerPoolHealthCheck
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#health_check LbaasServerPool#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#id LbaasServerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#tags LbaasServerPool#tags}.

---

##### `vnic_set`<sup>Optional</sup> <a name="vnic_set" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.vnicSet"></a>

```python
vnic_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}.

---

### LbaasServerPoolHealthCheck <a name="LbaasServerPoolHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_server_pool

lbaasServerPool.LbaasServerPoolHealthCheck(
  accepted_return_codes: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  healthy_threshold: typing.Union[int, float] = None,
  interval: typing.Union[int, float] = None,
  path: str = None,
  timeout: typing.Union[int, float] = None,
  type: str = None,
  unhealthy_threshold: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.acceptedReturnCodes">accepted_return_codes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#interval LbaasServerPool#interval}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#path LbaasServerPool#path}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#timeout LbaasServerPool#timeout}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#type LbaasServerPool#type}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}. |

---

##### `accepted_return_codes`<sup>Optional</sup> <a name="accepted_return_codes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.acceptedReturnCodes"></a>

```python
accepted_return_codes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `healthy_threshold`<sup>Optional</sup> <a name="healthy_threshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#interval LbaasServerPool#interval}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#path LbaasServerPool#path}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#timeout LbaasServerPool#timeout}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#type LbaasServerPool#type}.

---

##### `unhealthy_threshold`<sup>Optional</sup> <a name="unhealthy_threshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasServerPoolHealthCheckOutputReference <a name="LbaasServerPoolHealthCheckOutputReference" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_server_pool

lbaasServerPool.LbaasServerPoolHealthCheckOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetAcceptedReturnCodes">reset_accepted_return_codes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetHealthyThreshold">reset_healthy_threshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetInterval">reset_interval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetPath">reset_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetTimeout">reset_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetUnhealthyThreshold">reset_unhealthy_threshold</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_accepted_return_codes` <a name="reset_accepted_return_codes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetAcceptedReturnCodes"></a>

```python
def reset_accepted_return_codes() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_healthy_threshold` <a name="reset_healthy_threshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetHealthyThreshold"></a>

```python
def reset_healthy_threshold() -> None
```

##### `reset_interval` <a name="reset_interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetInterval"></a>

```python
def reset_interval() -> None
```

##### `reset_path` <a name="reset_path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetPath"></a>

```python
def reset_path() -> None
```

##### `reset_timeout` <a name="reset_timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetTimeout"></a>

```python
def reset_timeout() -> None
```

##### `reset_type` <a name="reset_type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_unhealthy_threshold` <a name="reset_unhealthy_threshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```python
def reset_unhealthy_threshold() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodesInput">accepted_return_codes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThresholdInput">healthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.intervalInput">interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeoutInput">timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthy_threshold_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodes">accepted_return_codes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThreshold">healthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.interval">interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThreshold">unhealthy_threshold</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `accepted_return_codes_input`<sup>Optional</sup> <a name="accepted_return_codes_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodesInput"></a>

```python
accepted_return_codes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `healthy_threshold_input`<sup>Optional</sup> <a name="healthy_threshold_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThresholdInput"></a>

```python
healthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval_input`<sup>Optional</sup> <a name="interval_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.intervalInput"></a>

```python
interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `timeout_input`<sup>Optional</sup> <a name="timeout_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeoutInput"></a>

```python
timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `unhealthy_threshold_input`<sup>Optional</sup> <a name="unhealthy_threshold_input" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```python
unhealthy_threshold_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `accepted_return_codes`<sup>Required</sup> <a name="accepted_return_codes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodes"></a>

```python
accepted_return_codes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `healthy_threshold`<sup>Required</sup> <a name="healthy_threshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThreshold"></a>

```python
healthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.interval"></a>

```python
interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeout"></a>

```python
timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `unhealthy_threshold`<sup>Required</sup> <a name="unhealthy_threshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThreshold"></a>

```python
unhealthy_threshold: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.internalValue"></a>

```python
internal_value: LbaasServerPoolHealthCheck
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---



