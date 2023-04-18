# `provider`

Refer to the Terraform Registory for docs: [`opc`](https://www.terraform.io/docs/providers/opc).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpcProvider <a name="OpcProvider" id="@cdktf/provider-opc.provider.OpcProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc opc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.provider.OpcProvider.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.provider.OpcProvider;

OpcProvider.Builder.create(Construct scope, java.lang.String id)
    .identityDomain(java.lang.String)
    .password(java.lang.String)
    .user(java.lang.String)
//  .alias(java.lang.String)
//  .endpoint(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .lbaasEndpoint(java.lang.String)
//  .maxRetries(java.lang.Number)
//  .storageEndpoint(java.lang.String)
//  .storageServiceId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.identityDomain">identityDomain</a></code> | <code>java.lang.String</code> | The OPC identity domain for API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.password">password</a></code> | <code>java.lang.String</code> | The user password for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.user">user</a></code> | <code>java.lang.String</code> | The user name for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.lbaasEndpoint">lbaasEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for the Load Balancer Classic service. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1). |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for Oracle Storage operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.storageServiceId">storageServiceId</a></code> | <code>java.lang.String</code> | The Storage Service ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `identityDomain`<sup>Required</sup> <a name="identityDomain" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.identityDomain"></a>

- *Type:* java.lang.String

The OPC identity domain for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#identity_domain OpcProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.password"></a>

- *Type:* java.lang.String

The user password for OPC API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#password OpcProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.user"></a>

- *Type:* java.lang.String

The user name for OPC API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#user OpcProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.alias"></a>

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#alias OpcProvider#alias}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.endpoint"></a>

- *Type:* java.lang.String

The HTTP endpoint for OPC API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#endpoint OpcProvider#endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.insecure"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#insecure OpcProvider#insecure}

---

##### `lbaasEndpoint`<sup>Optional</sup> <a name="lbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.lbaasEndpoint"></a>

- *Type:* java.lang.String

The HTTP endpoint for the Load Balancer Classic service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#lbaas_endpoint OpcProvider#lbaas_endpoint}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.maxRetries"></a>

- *Type:* java.lang.Number

Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#max_retries OpcProvider#max_retries}

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.storageEndpoint"></a>

- *Type:* java.lang.String

The HTTP endpoint for Oracle Storage operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#storage_endpoint OpcProvider#storage_endpoint}

---

##### `storageServiceId`<sup>Optional</sup> <a name="storageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.storageServiceId"></a>

- *Type:* java.lang.String

The Storage Service ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#storage_service_id OpcProvider#storage_service_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint">resetLbaasEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId">resetStorageServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.provider.OpcProvider.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.provider.OpcProvider.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.provider.OpcProvider.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.provider.OpcProvider.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-opc.provider.OpcProvider.resetAlias"></a>

```java
public void resetAlias()
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetEndpoint"></a>

```java
public void resetEndpoint()
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-opc.provider.OpcProvider.resetInsecure"></a>

```java
public void resetInsecure()
```

##### `resetLbaasEndpoint` <a name="resetLbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint"></a>

```java
public void resetLbaasEndpoint()
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries"></a>

```java
public void resetMaxRetries()
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint"></a>

```java
public void resetStorageEndpoint()
```

##### `resetStorageServiceId` <a name="resetStorageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId"></a>

```java
public void resetStorageServiceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.provider.OpcProvider.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.provider.OpcProvider;

OpcProvider.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.provider.OpcProvider;

OpcProvider.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider"></a>

```java
import com.hashicorp.cdktf.providers.opc.provider.OpcProvider;

OpcProvider.isTerraformProvider(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes">metaAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.alias">alias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.aliasInput">aliasInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpointInput">endpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput">identityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecureInput">insecureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput">lbaasEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput">storageEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput">storageServiceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomain">identityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint">lbaasEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId">storageServiceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.provider.OpcProvider.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.provider.OpcProvider.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getMetaAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource"></a>

```java
public java.lang.String getTerraformProviderSource();
```

- *Type:* java.lang.String

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opc.provider.OpcProvider.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-opc.provider.OpcProvider.property.aliasInput"></a>

```java
public java.lang.String getAliasInput();
```

- *Type:* java.lang.String

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.endpointInput"></a>

```java
public java.lang.String getEndpointInput();
```

- *Type:* java.lang.String

---

##### `identityDomainInput`<sup>Optional</sup> <a name="identityDomainInput" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput"></a>

```java
public java.lang.String getIdentityDomainInput();
```

- *Type:* java.lang.String

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-opc.provider.OpcProvider.property.insecureInput"></a>

```java
public java.lang.Object getInsecureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lbaasEndpointInput`<sup>Optional</sup> <a name="lbaasEndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput"></a>

```java
public java.lang.String getLbaasEndpointInput();
```

- *Type:* java.lang.String

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput"></a>

```java
public java.lang.Number getMaxRetriesInput();
```

- *Type:* java.lang.Number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opc.provider.OpcProvider.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput"></a>

```java
public java.lang.String getStorageEndpointInput();
```

- *Type:* java.lang.String

---

##### `storageServiceIdInput`<sup>Optional</sup> <a name="storageServiceIdInput" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput"></a>

```java
public java.lang.String getStorageServiceIdInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-opc.provider.OpcProvider.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `identityDomain`<sup>Optional</sup> <a name="identityDomain" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomain"></a>

```java
public java.lang.String getIdentityDomain();
```

- *Type:* java.lang.String

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opc.provider.OpcProvider.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `lbaasEndpoint`<sup>Optional</sup> <a name="lbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint"></a>

```java
public java.lang.String getLbaasEndpoint();
```

- *Type:* java.lang.String

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opc.provider.OpcProvider.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

---

##### `storageServiceId`<sup>Optional</sup> <a name="storageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId"></a>

```java
public java.lang.String getStorageServiceId();
```

- *Type:* java.lang.String

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-opc.provider.OpcProvider.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OpcProviderConfig <a name="OpcProviderConfig" id="@cdktf/provider-opc.provider.OpcProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.provider.OpcProviderConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.provider.OpcProviderConfig;

OpcProviderConfig.builder()
    .identityDomain(java.lang.String)
    .password(java.lang.String)
    .user(java.lang.String)
//  .alias(java.lang.String)
//  .endpoint(java.lang.String)
//  .insecure(java.lang.Boolean)
//  .insecure(IResolvable)
//  .lbaasEndpoint(java.lang.String)
//  .maxRetries(java.lang.Number)
//  .storageEndpoint(java.lang.String)
//  .storageServiceId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain">identityDomain</a></code> | <code>java.lang.String</code> | The OPC identity domain for API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.password">password</a></code> | <code>java.lang.String</code> | The user password for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.user">user</a></code> | <code>java.lang.String</code> | The user name for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.alias">alias</a></code> | <code>java.lang.String</code> | Alias name. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure">insecure</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint">lbaasEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for the Load Balancer Classic service. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries">maxRetries</a></code> | <code>java.lang.Number</code> | Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1). |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>java.lang.String</code> | The HTTP endpoint for Oracle Storage operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId">storageServiceId</a></code> | <code>java.lang.String</code> | The Storage Service ID. |

---

##### `identityDomain`<sup>Required</sup> <a name="identityDomain" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain"></a>

```java
public java.lang.String getIdentityDomain();
```

- *Type:* java.lang.String

The OPC identity domain for API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#identity_domain OpcProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The user password for OPC API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#password OpcProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

The user name for OPC API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#user OpcProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.alias"></a>

```java
public java.lang.String getAlias();
```

- *Type:* java.lang.String

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#alias OpcProvider#alias}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

The HTTP endpoint for OPC API operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#endpoint OpcProvider#endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure"></a>

```java
public java.lang.Object getInsecure();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#insecure OpcProvider#insecure}

---

##### `lbaasEndpoint`<sup>Optional</sup> <a name="lbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint"></a>

```java
public java.lang.String getLbaasEndpoint();
```

- *Type:* java.lang.String

The HTTP endpoint for the Load Balancer Classic service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#lbaas_endpoint OpcProvider#lbaas_endpoint}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries"></a>

```java
public java.lang.Number getMaxRetries();
```

- *Type:* java.lang.Number

Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#max_retries OpcProvider#max_retries}

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint"></a>

```java
public java.lang.String getStorageEndpoint();
```

- *Type:* java.lang.String

The HTTP endpoint for Oracle Storage operations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#storage_endpoint OpcProvider#storage_endpoint}

---

##### `storageServiceId`<sup>Optional</sup> <a name="storageServiceId" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId"></a>

```java
public java.lang.String getStorageServiceId();
```

- *Type:* java.lang.String

The Storage Service ID.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc#storage_service_id OpcProvider#storage_service_id}

---



