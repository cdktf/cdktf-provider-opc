# `opc_lbaas_listener`

Refer to the Terraform Registory for docs: [`opc_lbaas_listener`](https://www.terraform.io/docs/providers/opc/r/lbaas_listener).

# `lbaasListener` Submodule <a name="`lbaasListener` Submodule" id="@cdktf/provider-opc.lbaasListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasListener <a name="LbaasListener" id="@cdktf/provider-opc.lbaasListener.LbaasListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener opc_lbaas_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_listener

lbaasListener.LbaasListener(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  balancer_protocol: str,
  load_balancer: str,
  name: str,
  port: typing.Union[int, float],
  server_protocol: str,
  certificates: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  path_prefixes: typing.List[str] = None,
  policies: typing.List[str] = None,
  server_pool: str = None,
  tags: typing.List[str] = None,
  virtual_hosts: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.balancerProtocol">balancer_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#load_balancer LbaasListener#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#name LbaasListener#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#port LbaasListener#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.serverProtocol">server_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_protocol LbaasListener#server_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.certificates">certificates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#certificates LbaasListener#certificates}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#enabled LbaasListener#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#id LbaasListener#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.pathPrefixes">path_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#path_prefixes LbaasListener#path_prefixes}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.policies">policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#policies LbaasListener#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.serverPool">server_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_pool LbaasListener#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#tags LbaasListener#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.virtualHosts">virtual_hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_protocol`<sup>Required</sup> <a name="balancer_protocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.balancerProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}.

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.loadBalancer"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#load_balancer LbaasListener#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#name LbaasListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#port LbaasListener#port}.

---

##### `server_protocol`<sup>Required</sup> <a name="server_protocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.serverProtocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_protocol LbaasListener#server_protocol}.

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.certificates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#certificates LbaasListener#certificates}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#enabled LbaasListener#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#id LbaasListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path_prefixes`<sup>Optional</sup> <a name="path_prefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.pathPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#path_prefixes LbaasListener#path_prefixes}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.policies"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#policies LbaasListener#policies}.

---

##### `server_pool`<sup>Optional</sup> <a name="server_pool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.serverPool"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_pool LbaasListener#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.tags"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#tags LbaasListener#tags}.

---

##### `virtual_hosts`<sup>Optional</sup> <a name="virtual_hosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.virtualHosts"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetCertificates">reset_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetPathPrefixes">reset_path_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetServerPool">reset_server_pool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetTags">reset_tags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetVirtualHosts">reset_virtual_hosts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_certificates` <a name="reset_certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetCertificates"></a>

```python
def reset_certificates() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_path_prefixes` <a name="reset_path_prefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetPathPrefixes"></a>

```python
def reset_path_prefixes() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_server_pool` <a name="reset_server_pool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetServerPool"></a>

```python
def reset_server_pool() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetTags"></a>

```python
def reset_tags() -> None
```

##### `reset_virtual_hosts` <a name="reset_virtual_hosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetVirtualHosts"></a>

```python
def reset_virtual_hosts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_listener

lbaasListener.LbaasListener.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_listener

lbaasListener.LbaasListener.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_listener

lbaasListener.LbaasListener.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.operationDetails">operation_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.parentListener">parent_listener</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.state">state</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocolInput">balancer_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificatesInput">certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancerInput">load_balancer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixesInput">path_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.policiesInput">policies_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPoolInput">server_pool_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocolInput">server_protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tagsInput">tags_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHostsInput">virtual_hosts_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocol">balancer_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificates">certificates</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancer">load_balancer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixes">path_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.policies">policies</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPool">server_pool</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocol">server_protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tags">tags</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHosts">virtual_hosts</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operation_details`<sup>Required</sup> <a name="operation_details" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.operationDetails"></a>

```python
operation_details: str
```

- *Type:* str

---

##### `parent_listener`<sup>Required</sup> <a name="parent_listener" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.parentListener"></a>

```python
parent_listener: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.state"></a>

```python
state: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `balancer_protocol_input`<sup>Optional</sup> <a name="balancer_protocol_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocolInput"></a>

```python
balancer_protocol_input: str
```

- *Type:* str

---

##### `certificates_input`<sup>Optional</sup> <a name="certificates_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificatesInput"></a>

```python
certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `load_balancer_input`<sup>Optional</sup> <a name="load_balancer_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancerInput"></a>

```python
load_balancer_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `path_prefixes_input`<sup>Optional</sup> <a name="path_prefixes_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixesInput"></a>

```python
path_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.policiesInput"></a>

```python
policies_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_pool_input`<sup>Optional</sup> <a name="server_pool_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPoolInput"></a>

```python
server_pool_input: str
```

- *Type:* str

---

##### `server_protocol_input`<sup>Optional</sup> <a name="server_protocol_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocolInput"></a>

```python
server_protocol_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tagsInput"></a>

```python
tags_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_hosts_input`<sup>Optional</sup> <a name="virtual_hosts_input" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHostsInput"></a>

```python
virtual_hosts_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `balancer_protocol`<sup>Required</sup> <a name="balancer_protocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocol"></a>

```python
balancer_protocol: str
```

- *Type:* str

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificates"></a>

```python
certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `path_prefixes`<sup>Required</sup> <a name="path_prefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixes"></a>

```python
path_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `server_pool`<sup>Required</sup> <a name="server_pool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPool"></a>

```python
server_pool: str
```

- *Type:* str

---

##### `server_protocol`<sup>Required</sup> <a name="server_protocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `virtual_hosts`<sup>Required</sup> <a name="virtual_hosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHosts"></a>

```python
virtual_hosts: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasListenerConfig <a name="LbaasListenerConfig" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import lbaas_listener

lbaasListener.LbaasListenerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  balancer_protocol: str,
  load_balancer: str,
  name: str,
  port: typing.Union[int, float],
  server_protocol: str,
  certificates: typing.List[str] = None,
  enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  path_prefixes: typing.List[str] = None,
  policies: typing.List[str] = None,
  server_pool: str = None,
  tags: typing.List[str] = None,
  virtual_hosts: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.balancerProtocol">balancer_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.loadBalancer">load_balancer</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#load_balancer LbaasListener#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#name LbaasListener#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#port LbaasListener#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverProtocol">server_protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_protocol LbaasListener#server_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.certificates">certificates</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#certificates LbaasListener#certificates}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#enabled LbaasListener#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#id LbaasListener#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.pathPrefixes">path_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#path_prefixes LbaasListener#path_prefixes}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.policies">policies</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#policies LbaasListener#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverPool">server_pool</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_pool LbaasListener#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.tags">tags</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#tags LbaasListener#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.virtualHosts">virtual_hosts</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `balancer_protocol`<sup>Required</sup> <a name="balancer_protocol" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.balancerProtocol"></a>

```python
balancer_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}.

---

##### `load_balancer`<sup>Required</sup> <a name="load_balancer" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.loadBalancer"></a>

```python
load_balancer: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#load_balancer LbaasListener#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#name LbaasListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#port LbaasListener#port}.

---

##### `server_protocol`<sup>Required</sup> <a name="server_protocol" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverProtocol"></a>

```python
server_protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_protocol LbaasListener#server_protocol}.

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.certificates"></a>

```python
certificates: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#certificates LbaasListener#certificates}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#enabled LbaasListener#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#id LbaasListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `path_prefixes`<sup>Optional</sup> <a name="path_prefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.pathPrefixes"></a>

```python
path_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#path_prefixes LbaasListener#path_prefixes}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.policies"></a>

```python
policies: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#policies LbaasListener#policies}.

---

##### `server_pool`<sup>Optional</sup> <a name="server_pool" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverPool"></a>

```python
server_pool: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_pool LbaasListener#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.tags"></a>

```python
tags: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#tags LbaasListener#tags}.

---

##### `virtual_hosts`<sup>Optional</sup> <a name="virtual_hosts" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.virtualHosts"></a>

```python
virtual_hosts: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}.

---



