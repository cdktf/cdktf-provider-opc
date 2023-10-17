# `provider`

Refer to the Terraform Registory for docs: [`opc`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpcProvider <a name="OpcProvider" id="@cdktf/provider-opc.provider.OpcProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs opc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.provider.OpcProvider.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import provider

provider.OpcProvider(
  scope: Construct,
  id: str,
  identity_domain: str,
  password: str,
  user: str,
  alias: str = None,
  endpoint: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  lbaas_endpoint: str = None,
  max_retries: typing.Union[int, float] = None,
  storage_endpoint: str = None,
  storage_service_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.identityDomain">identity_domain</a></code> | <code>str</code> | The OPC identity domain for API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.password">password</a></code> | <code>str</code> | The user password for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.user">user</a></code> | <code>str</code> | The user name for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.endpoint">endpoint</a></code> | <code>str</code> | The HTTP endpoint for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.lbaasEndpoint">lbaas_endpoint</a></code> | <code>str</code> | The HTTP endpoint for the Load Balancer Classic service. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1). |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | The HTTP endpoint for Oracle Storage operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.storageServiceId">storage_service_id</a></code> | <code>str</code> | The Storage Service ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `identity_domain`<sup>Required</sup> <a name="identity_domain" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.identityDomain"></a>

- *Type:* str

The OPC identity domain for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#identity_domain OpcProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.password"></a>

- *Type:* str

The user password for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#password OpcProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.user"></a>

- *Type:* str

The user name for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#user OpcProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.alias"></a>

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#alias OpcProvider#alias}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.endpoint"></a>

- *Type:* str

The HTTP endpoint for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#endpoint OpcProvider#endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.insecure"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#insecure OpcProvider#insecure}

---

##### `lbaas_endpoint`<sup>Optional</sup> <a name="lbaas_endpoint" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.lbaasEndpoint"></a>

- *Type:* str

The HTTP endpoint for the Load Balancer Classic service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#lbaas_endpoint OpcProvider#lbaas_endpoint}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.maxRetries"></a>

- *Type:* typing.Union[int, float]

Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#max_retries OpcProvider#max_retries}

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.storageEndpoint"></a>

- *Type:* str

The HTTP endpoint for Oracle Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_endpoint OpcProvider#storage_endpoint}

---

##### `storage_service_id`<sup>Optional</sup> <a name="storage_service_id" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.storageServiceId"></a>

- *Type:* str

The Storage Service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_service_id OpcProvider#storage_service_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetAlias">reset_alias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetEndpoint">reset_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetInsecure">reset_insecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint">reset_lbaas_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries">reset_max_retries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint">reset_storage_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId">reset_storage_service_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opc.provider.OpcProvider.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opc.provider.OpcProvider.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opc.provider.OpcProvider.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opc.provider.OpcProvider.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `reset_alias` <a name="reset_alias" id="@cdktf/provider-opc.provider.OpcProvider.resetAlias"></a>

```python
def reset_alias() -> None
```

##### `reset_endpoint` <a name="reset_endpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetEndpoint"></a>

```python
def reset_endpoint() -> None
```

##### `reset_insecure` <a name="reset_insecure" id="@cdktf/provider-opc.provider.OpcProvider.resetInsecure"></a>

```python
def reset_insecure() -> None
```

##### `reset_lbaas_endpoint` <a name="reset_lbaas_endpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint"></a>

```python
def reset_lbaas_endpoint() -> None
```

##### `reset_max_retries` <a name="reset_max_retries" id="@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries"></a>

```python
def reset_max_retries() -> None
```

##### `reset_storage_endpoint` <a name="reset_storage_endpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint"></a>

```python
def reset_storage_endpoint() -> None
```

##### `reset_storage_service_id` <a name="reset_storage_service_id" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId"></a>

```python
def reset_storage_service_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider">is_terraform_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OpcProvider resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opc.provider.OpcProvider.isConstruct"></a>

```python
from cdktf_cdktf_provider_opc import provider

provider.OpcProvider.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opc import provider

provider.OpcProvider.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_provider` <a name="is_terraform_provider" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider"></a>

```python
from cdktf_cdktf_provider_opc import provider

provider.OpcProvider.is_terraform_provider(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opc import provider

provider.OpcProvider.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OpcProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OpcProvider to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OpcProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpcProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes">meta_attributes</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource">terraform_provider_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.alias">alias</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.aliasInput">alias_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpointInput">endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput">identity_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecureInput">insecure_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput">lbaas_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput">max_retries_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput">storage_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput">storage_service_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.userInput">user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpoint">endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomain">identity_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint">lbaas_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId">storage_service_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.user">user</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.provider.OpcProvider.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.provider.OpcProvider.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `meta_attributes`<sup>Required</sup> <a name="meta_attributes" id="@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes"></a>

```python
meta_attributes: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraform_provider_source`<sup>Optional</sup> <a name="terraform_provider_source" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource"></a>

```python
terraform_provider_source: str
```

- *Type:* str

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opc.provider.OpcProvider.property.alias"></a>

```python
alias: str
```

- *Type:* str

---

##### `alias_input`<sup>Optional</sup> <a name="alias_input" id="@cdktf/provider-opc.provider.OpcProvider.property.aliasInput"></a>

```python
alias_input: str
```

- *Type:* str

---

##### `endpoint_input`<sup>Optional</sup> <a name="endpoint_input" id="@cdktf/provider-opc.provider.OpcProvider.property.endpointInput"></a>

```python
endpoint_input: str
```

- *Type:* str

---

##### `identity_domain_input`<sup>Optional</sup> <a name="identity_domain_input" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput"></a>

```python
identity_domain_input: str
```

- *Type:* str

---

##### `insecure_input`<sup>Optional</sup> <a name="insecure_input" id="@cdktf/provider-opc.provider.OpcProvider.property.insecureInput"></a>

```python
insecure_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lbaas_endpoint_input`<sup>Optional</sup> <a name="lbaas_endpoint_input" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput"></a>

```python
lbaas_endpoint_input: str
```

- *Type:* str

---

##### `max_retries_input`<sup>Optional</sup> <a name="max_retries_input" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput"></a>

```python
max_retries_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-opc.provider.OpcProvider.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `storage_endpoint_input`<sup>Optional</sup> <a name="storage_endpoint_input" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput"></a>

```python
storage_endpoint_input: str
```

- *Type:* str

---

##### `storage_service_id_input`<sup>Optional</sup> <a name="storage_service_id_input" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput"></a>

```python
storage_service_id_input: str
```

- *Type:* str

---

##### `user_input`<sup>Optional</sup> <a name="user_input" id="@cdktf/provider-opc.provider.OpcProvider.property.userInput"></a>

```python
user_input: str
```

- *Type:* str

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

---

##### `identity_domain`<sup>Optional</sup> <a name="identity_domain" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomain"></a>

```python
identity_domain: str
```

- *Type:* str

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opc.provider.OpcProvider.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `lbaas_endpoint`<sup>Optional</sup> <a name="lbaas_endpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint"></a>

```python
lbaas_endpoint: str
```

- *Type:* str

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opc.provider.OpcProvider.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

---

##### `storage_service_id`<sup>Optional</sup> <a name="storage_service_id" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId"></a>

```python
storage_service_id: str
```

- *Type:* str

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-opc.provider.OpcProvider.property.user"></a>

```python
user: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OpcProviderConfig <a name="OpcProviderConfig" id="@cdktf/provider-opc.provider.OpcProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.provider.OpcProviderConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opc import provider

provider.OpcProviderConfig(
  identity_domain: str,
  password: str,
  user: str,
  alias: str = None,
  endpoint: str = None,
  insecure: typing.Union[bool, IResolvable] = None,
  lbaas_endpoint: str = None,
  max_retries: typing.Union[int, float] = None,
  storage_endpoint: str = None,
  storage_service_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain">identity_domain</a></code> | <code>str</code> | The OPC identity domain for API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.password">password</a></code> | <code>str</code> | The user password for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.user">user</a></code> | <code>str</code> | The user name for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.alias">alias</a></code> | <code>str</code> | Alias name. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint">endpoint</a></code> | <code>str</code> | The HTTP endpoint for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure">insecure</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint">lbaas_endpoint</a></code> | <code>str</code> | The HTTP endpoint for the Load Balancer Classic service. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries">max_retries</a></code> | <code>typing.Union[int, float]</code> | Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1). |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint">storage_endpoint</a></code> | <code>str</code> | The HTTP endpoint for Oracle Storage operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId">storage_service_id</a></code> | <code>str</code> | The Storage Service ID. |

---

##### `identity_domain`<sup>Required</sup> <a name="identity_domain" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain"></a>

```python
identity_domain: str
```

- *Type:* str

The OPC identity domain for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#identity_domain OpcProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.password"></a>

```python
password: str
```

- *Type:* str

The user password for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#password OpcProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.user"></a>

```python
user: str
```

- *Type:* str

The user name for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#user OpcProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.alias"></a>

```python
alias: str
```

- *Type:* str

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#alias OpcProvider#alias}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint"></a>

```python
endpoint: str
```

- *Type:* str

The HTTP endpoint for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#endpoint OpcProvider#endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure"></a>

```python
insecure: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#insecure OpcProvider#insecure}

---

##### `lbaas_endpoint`<sup>Optional</sup> <a name="lbaas_endpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint"></a>

```python
lbaas_endpoint: str
```

- *Type:* str

The HTTP endpoint for the Load Balancer Classic service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#lbaas_endpoint OpcProvider#lbaas_endpoint}

---

##### `max_retries`<sup>Optional</sup> <a name="max_retries" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries"></a>

```python
max_retries: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#max_retries OpcProvider#max_retries}

---

##### `storage_endpoint`<sup>Optional</sup> <a name="storage_endpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint"></a>

```python
storage_endpoint: str
```

- *Type:* str

The HTTP endpoint for Oracle Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_endpoint OpcProvider#storage_endpoint}

---

##### `storage_service_id`<sup>Optional</sup> <a name="storage_service_id" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId"></a>

```python
storage_service_id: str
```

- *Type:* str

The Storage Service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_service_id OpcProvider#storage_service_id}

---



