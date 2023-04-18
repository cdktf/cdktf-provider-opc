# `opc_storage_container`

Refer to the Terraform Registory for docs: [`opc_storage_container`](https://www.terraform.io/docs/providers/opc/r/storage_container).

# `storageContainer` Submodule <a name="`storageContainer` Submodule" id="@cdktf/provider-opc.storageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageContainer <a name="StorageContainer" id="@cdktf/provider-opc.storageContainer.StorageContainer"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/storage_container opc_storage_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import storage_container

storageContainer.StorageContainer(
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
  allowed_origins: typing.List[str] = None,
  exposed_headers: typing.List[str] = None,
  id: str = None,
  max_age: typing.Union[int, float] = None,
  metadata: typing.Mapping[str] = None,
  primary_key: str = None,
  quota_bytes: typing.Union[int, float] = None,
  quota_count: typing.Union[int, float] = None,
  read_acls: typing.List[str] = None,
  secondary_key: str = None,
  write_acls: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#name StorageContainer#name}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#allowed_origins StorageContainer#allowed_origins}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#exposed_headers StorageContainer#exposed_headers}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#id StorageContainer#id}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#max_age StorageContainer#max_age}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#metadata StorageContainer#metadata}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#primary_key StorageContainer#primary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.quotaBytes">quota_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_bytes StorageContainer#quota_bytes}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.quotaCount">quota_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_count StorageContainer#quota_count}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.readAcls">read_acls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#read_acls StorageContainer#read_acls}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.secondaryKey">secondary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#secondary_key StorageContainer#secondary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.writeAcls">write_acls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#write_acls StorageContainer#write_acls}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#name StorageContainer#name}.

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.allowedOrigins"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#allowed_origins StorageContainer#allowed_origins}.

---

##### `exposed_headers`<sup>Optional</sup> <a name="exposed_headers" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.exposedHeaders"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#exposed_headers StorageContainer#exposed_headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#id StorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.maxAge"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#max_age StorageContainer#max_age}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#metadata StorageContainer#metadata}.

---

##### `primary_key`<sup>Optional</sup> <a name="primary_key" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.primaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#primary_key StorageContainer#primary_key}.

---

##### `quota_bytes`<sup>Optional</sup> <a name="quota_bytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.quotaBytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_bytes StorageContainer#quota_bytes}.

---

##### `quota_count`<sup>Optional</sup> <a name="quota_count" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.quotaCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_count StorageContainer#quota_count}.

---

##### `read_acls`<sup>Optional</sup> <a name="read_acls" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.readAcls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#read_acls StorageContainer#read_acls}.

---

##### `secondary_key`<sup>Optional</sup> <a name="secondary_key" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.secondaryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#secondary_key StorageContainer#secondary_key}.

---

##### `write_acls`<sup>Optional</sup> <a name="write_acls" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.writeAcls"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#write_acls StorageContainer#write_acls}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetAllowedOrigins">reset_allowed_origins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetExposedHeaders">reset_exposed_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetMaxAge">reset_max_age</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetPrimaryKey">reset_primary_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaBytes">reset_quota_bytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaCount">reset_quota_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetReadAcls">reset_read_acls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetSecondaryKey">reset_secondary_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetWriteAcls">reset_write_acls</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.storageContainer.StorageContainer.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.storageContainer.StorageContainer.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_allowed_origins` <a name="reset_allowed_origins" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetAllowedOrigins"></a>

```python
def reset_allowed_origins() -> None
```

##### `reset_exposed_headers` <a name="reset_exposed_headers" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetExposedHeaders"></a>

```python
def reset_exposed_headers() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_max_age` <a name="reset_max_age" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetMaxAge"></a>

```python
def reset_max_age() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_primary_key` <a name="reset_primary_key" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetPrimaryKey"></a>

```python
def reset_primary_key() -> None
```

##### `reset_quota_bytes` <a name="reset_quota_bytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaBytes"></a>

```python
def reset_quota_bytes() -> None
```

##### `reset_quota_count` <a name="reset_quota_count" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaCount"></a>

```python
def reset_quota_count() -> None
```

##### `reset_read_acls` <a name="reset_read_acls" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetReadAcls"></a>

```python
def reset_read_acls() -> None
```

##### `reset_secondary_key` <a name="reset_secondary_key" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetSecondaryKey"></a>

```python
def reset_secondary_key() -> None
```

##### `reset_write_acls` <a name="reset_write_acls" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetWriteAcls"></a>

```python
def reset_write_acls() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import storage_container

storageContainer.StorageContainer.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import storage_container

storageContainer.StorageContainer.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import storage_container

storageContainer.StorageContainer.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOriginsInput">allowed_origins_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeadersInput">exposed_headers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAgeInput">max_age_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKeyInput">primary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytesInput">quota_bytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCountInput">quota_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.readAclsInput">read_acls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKeyInput">secondary_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAclsInput">write_acls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKey">primary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytes">quota_bytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCount">quota_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.readAcls">read_acls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKey">secondary_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAcls">write_acls</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `allowed_origins_input`<sup>Optional</sup> <a name="allowed_origins_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOriginsInput"></a>

```python
allowed_origins_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers_input`<sup>Optional</sup> <a name="exposed_headers_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeadersInput"></a>

```python
exposed_headers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_age_input`<sup>Optional</sup> <a name="max_age_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAgeInput"></a>

```python
max_age_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `primary_key_input`<sup>Optional</sup> <a name="primary_key_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKeyInput"></a>

```python
primary_key_input: str
```

- *Type:* str

---

##### `quota_bytes_input`<sup>Optional</sup> <a name="quota_bytes_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytesInput"></a>

```python
quota_bytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quota_count_input`<sup>Optional</sup> <a name="quota_count_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCountInput"></a>

```python
quota_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_acls_input`<sup>Optional</sup> <a name="read_acls_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.readAclsInput"></a>

```python
read_acls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secondary_key_input`<sup>Optional</sup> <a name="secondary_key_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKeyInput"></a>

```python
secondary_key_input: str
```

- *Type:* str

---

##### `write_acls_input`<sup>Optional</sup> <a name="write_acls_input" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAclsInput"></a>

```python
write_acls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allowed_origins`<sup>Required</sup> <a name="allowed_origins" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exposed_headers`<sup>Required</sup> <a name="exposed_headers" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_age`<sup>Required</sup> <a name="max_age" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `primary_key`<sup>Required</sup> <a name="primary_key" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

---

##### `quota_bytes`<sup>Required</sup> <a name="quota_bytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytes"></a>

```python
quota_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `quota_count`<sup>Required</sup> <a name="quota_count" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCount"></a>

```python
quota_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_acls`<sup>Required</sup> <a name="read_acls" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.readAcls"></a>

```python
read_acls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `secondary_key`<sup>Required</sup> <a name="secondary_key" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

---

##### `write_acls`<sup>Required</sup> <a name="write_acls" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAcls"></a>

```python
write_acls: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageContainerConfig <a name="StorageContainerConfig" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import storage_container

storageContainer.StorageContainerConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  allowed_origins: typing.List[str] = None,
  exposed_headers: typing.List[str] = None,
  id: str = None,
  max_age: typing.Union[int, float] = None,
  metadata: typing.Mapping[str] = None,
  primary_key: str = None,
  quota_bytes: typing.Union[int, float] = None,
  quota_count: typing.Union[int, float] = None,
  read_acls: typing.List[str] = None,
  secondary_key: str = None,
  write_acls: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#name StorageContainer#name}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.allowedOrigins">allowed_origins</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#allowed_origins StorageContainer#allowed_origins}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.exposedHeaders">exposed_headers</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#exposed_headers StorageContainer#exposed_headers}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#id StorageContainer#id}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.maxAge">max_age</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#max_age StorageContainer#max_age}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#metadata StorageContainer#metadata}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.primaryKey">primary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#primary_key StorageContainer#primary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaBytes">quota_bytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_bytes StorageContainer#quota_bytes}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaCount">quota_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_count StorageContainer#quota_count}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.readAcls">read_acls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#read_acls StorageContainer#read_acls}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.secondaryKey">secondary_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#secondary_key StorageContainer#secondary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.writeAcls">write_acls</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#write_acls StorageContainer#write_acls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#name StorageContainer#name}.

---

##### `allowed_origins`<sup>Optional</sup> <a name="allowed_origins" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.allowedOrigins"></a>

```python
allowed_origins: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#allowed_origins StorageContainer#allowed_origins}.

---

##### `exposed_headers`<sup>Optional</sup> <a name="exposed_headers" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.exposedHeaders"></a>

```python
exposed_headers: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#exposed_headers StorageContainer#exposed_headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#id StorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `max_age`<sup>Optional</sup> <a name="max_age" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.maxAge"></a>

```python
max_age: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#max_age StorageContainer#max_age}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#metadata StorageContainer#metadata}.

---

##### `primary_key`<sup>Optional</sup> <a name="primary_key" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.primaryKey"></a>

```python
primary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#primary_key StorageContainer#primary_key}.

---

##### `quota_bytes`<sup>Optional</sup> <a name="quota_bytes" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaBytes"></a>

```python
quota_bytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_bytes StorageContainer#quota_bytes}.

---

##### `quota_count`<sup>Optional</sup> <a name="quota_count" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaCount"></a>

```python
quota_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_count StorageContainer#quota_count}.

---

##### `read_acls`<sup>Optional</sup> <a name="read_acls" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.readAcls"></a>

```python
read_acls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#read_acls StorageContainer#read_acls}.

---

##### `secondary_key`<sup>Optional</sup> <a name="secondary_key" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.secondaryKey"></a>

```python
secondary_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#secondary_key StorageContainer#secondary_key}.

---

##### `write_acls`<sup>Optional</sup> <a name="write_acls" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.writeAcls"></a>

```python
write_acls: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#write_acls StorageContainer#write_acls}.

---



