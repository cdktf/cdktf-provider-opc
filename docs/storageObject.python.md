# `opc_storage_object`

Refer to the Terraform Registory for docs: [`opc_storage_object`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object).

# `storageObject` Submodule <a name="`storageObject` Submodule" id="@cdktf/provider-opc.storageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageObject <a name="StorageObject" id="@cdktf/provider-opc.storageObject.StorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object opc_storage_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import storage_object

storageObject.StorageObject(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container: str,
  name: str,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_type: str = None,
  copy_from: str = None,
  delete_at: typing.Union[int, float] = None,
  etag: str = None,
  file: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  transfer_encoding: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.container">container</a></code> | <code>str</code> | Name of the storage container. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the storage object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.content">content</a></code> | <code>str</code> | Raw content in string-form of the data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentDisposition">content_disposition</a></code> | <code>str</code> | Overrides the behavior of the browser. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentEncoding">content_encoding</a></code> | <code>str</code> | Set the content-encoding metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentType">content_type</a></code> | <code>str</code> | Set the MIME type for the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.copyFrom">copy_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.deleteAt">delete_at</a></code> | <code>typing.Union[int, float]</code> | The date and time in UNIX Epoch time stamp format when the system removes the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.etag">etag</a></code> | <code>str</code> | MD5 checksum value of the request body. Unquoted. Strongly Recommended. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.file">file</a></code> | <code>str</code> | File path for the content to use for data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The object metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.transferEncoding">transfer_encoding</a></code> | <code>str</code> | Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.container"></a>

- *Type:* str

Name of the storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#container StorageObject#container}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.name"></a>

- *Type:* str

Name of the storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#name StorageObject#name}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.content"></a>

- *Type:* str

Raw content in string-form of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content StorageObject#content}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentDisposition"></a>

- *Type:* str

Overrides the behavior of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_disposition StorageObject#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentEncoding"></a>

- *Type:* str

Set the content-encoding metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_encoding StorageObject#content_encoding}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentType"></a>

- *Type:* str

Set the MIME type for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_type StorageObject#content_type}

---

##### `copy_from`<sup>Optional</sup> <a name="copy_from" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.copyFrom"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}.

---

##### `delete_at`<sup>Optional</sup> <a name="delete_at" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.deleteAt"></a>

- *Type:* typing.Union[int, float]

The date and time in UNIX Epoch time stamp format when the system removes the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#delete_at StorageObject#delete_at}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.etag"></a>

- *Type:* str

MD5 checksum value of the request body. Unquoted. Strongly Recommended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#etag StorageObject#etag}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.file"></a>

- *Type:* str

File path for the content to use for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#file StorageObject#file}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.metadata"></a>

- *Type:* typing.Mapping[str]

The object metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#metadata StorageObject#metadata}

---

##### `transfer_encoding`<sup>Optional</sup> <a name="transfer_encoding" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.transferEncoding"></a>

- *Type:* str

Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#transfer_encoding StorageObject#transfer_encoding}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContent">reset_content</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentDisposition">reset_content_disposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentEncoding">reset_content_encoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetCopyFrom">reset_copy_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetDeleteAt">reset_delete_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetEtag">reset_etag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetFile">reset_file</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetTransferEncoding">reset_transfer_encoding</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.storageObject.StorageObject.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.storageObject.StorageObject.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.storageObject.StorageObject.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_content` <a name="reset_content" id="@cdktf/provider-opc.storageObject.StorageObject.resetContent"></a>

```python
def reset_content() -> None
```

##### `reset_content_disposition` <a name="reset_content_disposition" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentDisposition"></a>

```python
def reset_content_disposition() -> None
```

##### `reset_content_encoding` <a name="reset_content_encoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentEncoding"></a>

```python
def reset_content_encoding() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_copy_from` <a name="reset_copy_from" id="@cdktf/provider-opc.storageObject.StorageObject.resetCopyFrom"></a>

```python
def reset_copy_from() -> None
```

##### `reset_delete_at` <a name="reset_delete_at" id="@cdktf/provider-opc.storageObject.StorageObject.resetDeleteAt"></a>

```python
def reset_delete_at() -> None
```

##### `reset_etag` <a name="reset_etag" id="@cdktf/provider-opc.storageObject.StorageObject.resetEtag"></a>

```python
def reset_etag() -> None
```

##### `reset_file` <a name="reset_file" id="@cdktf/provider-opc.storageObject.StorageObject.resetFile"></a>

```python
def reset_file() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opc.storageObject.StorageObject.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-opc.storageObject.StorageObject.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_transfer_encoding` <a name="reset_transfer_encoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetTransferEncoding"></a>

```python
def reset_transfer_encoding() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.storageObject.StorageObject.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import storage_object

storageObject.StorageObject.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import storage_object

storageObject.StorageObject.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opc import storage_object

storageObject.StorageObject.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges">accept_ranges</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentLength">content_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lastModified">last_modified</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest">object_manifest</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transactionId">transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.containerInput">container_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput">content_disposition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput">content_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentInput">content_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput">copy_from_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput">delete_at_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etagInput">etag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fileInput">file_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput">metadata_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput">transfer_encoding_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.container">container</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition">content_disposition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding">content_encoding</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom">copy_from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt">delete_at</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.file">file</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding">transfer_encoding</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.storageObject.StorageObject.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.storageObject.StorageObject.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageObject.StorageObject.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageObject.StorageObject.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.storageObject.StorageObject.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageObject.StorageObject.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `accept_ranges`<sup>Required</sup> <a name="accept_ranges" id="@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges"></a>

```python
accept_ranges: str
```

- *Type:* str

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentLength"></a>

```python
content_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `last_modified`<sup>Required</sup> <a name="last_modified" id="@cdktf/provider-opc.storageObject.StorageObject.property.lastModified"></a>

```python
last_modified: str
```

- *Type:* str

---

##### `object_manifest`<sup>Required</sup> <a name="object_manifest" id="@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest"></a>

```python
object_manifest: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-opc.storageObject.StorageObject.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `transaction_id`<sup>Required</sup> <a name="transaction_id" id="@cdktf/provider-opc.storageObject.StorageObject.property.transactionId"></a>

```python
transaction_id: str
```

- *Type:* str

---

##### `container_input`<sup>Optional</sup> <a name="container_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.containerInput"></a>

```python
container_input: str
```

- *Type:* str

---

##### `content_disposition_input`<sup>Optional</sup> <a name="content_disposition_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput"></a>

```python
content_disposition_input: str
```

- *Type:* str

---

##### `content_encoding_input`<sup>Optional</sup> <a name="content_encoding_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput"></a>

```python
content_encoding_input: str
```

- *Type:* str

---

##### `content_input`<sup>Optional</sup> <a name="content_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentInput"></a>

```python
content_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `copy_from_input`<sup>Optional</sup> <a name="copy_from_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput"></a>

```python
copy_from_input: str
```

- *Type:* str

---

##### `delete_at_input`<sup>Optional</sup> <a name="delete_at_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput"></a>

```python
delete_at_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag_input`<sup>Optional</sup> <a name="etag_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.etagInput"></a>

```python
etag_input: str
```

- *Type:* str

---

##### `file_input`<sup>Optional</sup> <a name="file_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.fileInput"></a>

```python
file_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput"></a>

```python
metadata_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `transfer_encoding_input`<sup>Optional</sup> <a name="transfer_encoding_input" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput"></a>

```python
transfer_encoding_input: str
```

- *Type:* str

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opc.storageObject.StorageObject.property.container"></a>

```python
container: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opc.storageObject.StorageObject.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `content_disposition`<sup>Required</sup> <a name="content_disposition" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

---

##### `content_encoding`<sup>Required</sup> <a name="content_encoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `copy_from`<sup>Required</sup> <a name="copy_from" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom"></a>

```python
copy_from: str
```

- *Type:* str

---

##### `delete_at`<sup>Required</sup> <a name="delete_at" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt"></a>

```python
delete_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-opc.storageObject.StorageObject.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-opc.storageObject.StorageObject.property.file"></a>

```python
file: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageObject.StorageObject.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `transfer_encoding`<sup>Required</sup> <a name="transfer_encoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding"></a>

```python
transfer_encoding: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StorageObjectConfig <a name="StorageObjectConfig" id="@cdktf/provider-opc.storageObject.StorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import storage_object

storageObject.StorageObjectConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  container: str,
  name: str,
  content: str = None,
  content_disposition: str = None,
  content_encoding: str = None,
  content_type: str = None,
  copy_from: str = None,
  delete_at: typing.Union[int, float] = None,
  etag: str = None,
  file: str = None,
  id: str = None,
  metadata: typing.Mapping[str] = None,
  transfer_encoding: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container">container</a></code> | <code>str</code> | Name of the storage container. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name">name</a></code> | <code>str</code> | Name of the storage object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content">content</a></code> | <code>str</code> | Raw content in string-form of the data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition">content_disposition</a></code> | <code>str</code> | Overrides the behavior of the browser. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding">content_encoding</a></code> | <code>str</code> | Set the content-encoding metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType">content_type</a></code> | <code>str</code> | Set the MIME type for the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom">copy_from</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt">delete_at</a></code> | <code>typing.Union[int, float]</code> | The date and time in UNIX Epoch time stamp format when the system removes the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag">etag</a></code> | <code>str</code> | MD5 checksum value of the request body. Unquoted. Strongly Recommended. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file">file</a></code> | <code>str</code> | File path for the content to use for data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata">metadata</a></code> | <code>typing.Mapping[str]</code> | The object metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding">transfer_encoding</a></code> | <code>str</code> | Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container"></a>

```python
container: str
```

- *Type:* str

Name of the storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#container StorageObject#container}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#name StorageObject#name}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content"></a>

```python
content: str
```

- *Type:* str

Raw content in string-form of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content StorageObject#content}

---

##### `content_disposition`<sup>Optional</sup> <a name="content_disposition" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition"></a>

```python
content_disposition: str
```

- *Type:* str

Overrides the behavior of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_disposition StorageObject#content_disposition}

---

##### `content_encoding`<sup>Optional</sup> <a name="content_encoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding"></a>

```python
content_encoding: str
```

- *Type:* str

Set the content-encoding metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_encoding StorageObject#content_encoding}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Set the MIME type for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_type StorageObject#content_type}

---

##### `copy_from`<sup>Optional</sup> <a name="copy_from" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom"></a>

```python
copy_from: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}.

---

##### `delete_at`<sup>Optional</sup> <a name="delete_at" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt"></a>

```python
delete_at: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The date and time in UNIX Epoch time stamp format when the system removes the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#delete_at StorageObject#delete_at}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

MD5 checksum value of the request body. Unquoted. Strongly Recommended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#etag StorageObject#etag}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file"></a>

```python
file: str
```

- *Type:* str

File path for the content to use for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#file StorageObject#file}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata"></a>

```python
metadata: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The object metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#metadata StorageObject#metadata}

---

##### `transfer_encoding`<sup>Optional</sup> <a name="transfer_encoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding"></a>

```python
transfer_encoding: str
```

- *Type:* str

Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#transfer_encoding StorageObject#transfer_encoding}

---



