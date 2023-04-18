# `opc_storage_object`

Refer to the Terraform Registory for docs: [`opc_storage_object`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object).

# `storageObject` Submodule <a name="`storageObject` Submodule" id="@cdktf/provider-opc.storageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageObject <a name="StorageObject" id="@cdktf/provider-opc.storageObject.StorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object opc_storage_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new StorageObject(Construct Scope, string Id, StorageObjectConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig">StorageObjectConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig">StorageObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentDisposition">ResetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentEncoding">ResetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetCopyFrom">ResetCopyFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetDeleteAt">ResetDeleteAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetMetadata">ResetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetTransferEncoding">ResetTransferEncoding</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opc.storageObject.StorageObject.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.storageObject.StorageObject.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-opc.storageObject.StorageObject.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentDisposition"></a>

```csharp
private void ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentEncoding"></a>

```csharp
private void ResetContentEncoding()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetCopyFrom` <a name="ResetCopyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.resetCopyFrom"></a>

```csharp
private void ResetCopyFrom()
```

##### `ResetDeleteAt` <a name="ResetDeleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.resetDeleteAt"></a>

```csharp
private void ResetDeleteAt()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-opc.storageObject.StorageObject.resetEtag"></a>

```csharp
private void ResetEtag()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-opc.storageObject.StorageObject.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.storageObject.StorageObject.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.resetMetadata"></a>

```csharp
private void ResetMetadata()
```

##### `ResetTransferEncoding` <a name="ResetTransferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetTransferEncoding"></a>

```csharp
private void ResetTransferEncoding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.storageObject.StorageObject.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

StorageObject.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.storageObject.StorageObject.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

StorageObject.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

StorageObject.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges">AcceptRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentLength">ContentLength</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lastModified">LastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest">ObjectManifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.timestamp">Timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transactionId">TransactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.containerInput">ContainerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput">CopyFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput">DeleteAtInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etagInput">EtagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput">MetadataInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput">TransferEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.container">Container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom">CopyFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt">DeleteAt</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding">TransferEncoding</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.storageObject.StorageObject.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.storageObject.StorageObject.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.storageObject.StorageObject.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.storageObject.StorageObject.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.storageObject.StorageObject.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.storageObject.StorageObject.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.storageObject.StorageObject.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `AcceptRanges`<sup>Required</sup> <a name="AcceptRanges" id="@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges"></a>

```csharp
public string AcceptRanges { get; }
```

- *Type:* string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentLength"></a>

```csharp
public double ContentLength { get; }
```

- *Type:* double

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-opc.storageObject.StorageObject.property.lastModified"></a>

```csharp
public string LastModified { get; }
```

- *Type:* string

---

##### `ObjectManifest`<sup>Required</sup> <a name="ObjectManifest" id="@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest"></a>

```csharp
public string ObjectManifest { get; }
```

- *Type:* string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-opc.storageObject.StorageObject.property.timestamp"></a>

```csharp
public string Timestamp { get; }
```

- *Type:* string

---

##### `TransactionId`<sup>Required</sup> <a name="TransactionId" id="@cdktf/provider-opc.storageObject.StorageObject.property.transactionId"></a>

```csharp
public string TransactionId { get; }
```

- *Type:* string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.containerInput"></a>

```csharp
public string ContainerInput { get; }
```

- *Type:* string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput"></a>

```csharp
public string ContentDispositionInput { get; }
```

- *Type:* string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput"></a>

```csharp
public string ContentEncodingInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `CopyFromInput`<sup>Optional</sup> <a name="CopyFromInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput"></a>

```csharp
public string CopyFromInput { get; }
```

- *Type:* string

---

##### `DeleteAtInput`<sup>Optional</sup> <a name="DeleteAtInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput"></a>

```csharp
public double DeleteAtInput { get; }
```

- *Type:* double

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.etagInput"></a>

```csharp
public string EtagInput { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> MetadataInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TransferEncodingInput`<sup>Optional</sup> <a name="TransferEncodingInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput"></a>

```csharp
public string TransferEncodingInput { get; }
```

- *Type:* string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-opc.storageObject.StorageObject.property.container"></a>

```csharp
public string Container { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opc.storageObject.StorageObject.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; }
```

- *Type:* string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `CopyFrom`<sup>Required</sup> <a name="CopyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom"></a>

```csharp
public string CopyFrom { get; }
```

- *Type:* string

---

##### `DeleteAt`<sup>Required</sup> <a name="DeleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt"></a>

```csharp
public double DeleteAt { get; }
```

- *Type:* double

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-opc.storageObject.StorageObject.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-opc.storageObject.StorageObject.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.storageObject.StorageObject.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.storageObject.StorageObject.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `TransferEncoding`<sup>Required</sup> <a name="TransferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding"></a>

```csharp
public string TransferEncoding { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageObjectConfig <a name="StorageObjectConfig" id="@cdktf/provider-opc.storageObject.StorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Opc;

new StorageObjectConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Container,
    string Name,
    string Content = null,
    string ContentDisposition = null,
    string ContentEncoding = null,
    string ContentType = null,
    string CopyFrom = null,
    double DeleteAt = null,
    string Etag = null,
    string File = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Metadata = null,
    string TransferEncoding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container">Container</a></code> | <code>string</code> | Name of the storage container. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name">Name</a></code> | <code>string</code> | Name of the storage object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content">Content</a></code> | <code>string</code> | Raw content in string-form of the data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>string</code> | Overrides the behavior of the browser. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>string</code> | Set the content-encoding metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType">ContentType</a></code> | <code>string</code> | Set the MIME type for the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom">CopyFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt">DeleteAt</a></code> | <code>double</code> | The date and time in UNIX Epoch time stamp format when the system removes the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag">Etag</a></code> | <code>string</code> | MD5 checksum value of the request body. Unquoted. Strongly Recommended. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file">File</a></code> | <code>string</code> | File path for the content to use for data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata">Metadata</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | The object metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding">TransferEncoding</a></code> | <code>string</code> | Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container"></a>

```csharp
public string Container { get; set; }
```

- *Type:* string

Name of the storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#container StorageObject#container}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#name StorageObject#name}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Raw content in string-form of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content StorageObject#content}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition"></a>

```csharp
public string ContentDisposition { get; set; }
```

- *Type:* string

Overrides the behavior of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_disposition StorageObject#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding"></a>

```csharp
public string ContentEncoding { get; set; }
```

- *Type:* string

Set the content-encoding metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_encoding StorageObject#content_encoding}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Set the MIME type for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_type StorageObject#content_type}

---

##### `CopyFrom`<sup>Optional</sup> <a name="CopyFrom" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom"></a>

```csharp
public string CopyFrom { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}.

---

##### `DeleteAt`<sup>Optional</sup> <a name="DeleteAt" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt"></a>

```csharp
public double DeleteAt { get; set; }
```

- *Type:* double

The date and time in UNIX Epoch time stamp format when the system removes the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#delete_at StorageObject#delete_at}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag"></a>

```csharp
public string Etag { get; set; }
```

- *Type:* string

MD5 checksum value of the request body. Unquoted. Strongly Recommended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#etag StorageObject#etag}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

File path for the content to use for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#file StorageObject#file}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Metadata { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

The object metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#metadata StorageObject#metadata}

---

##### `TransferEncoding`<sup>Optional</sup> <a name="TransferEncoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding"></a>

```csharp
public string TransferEncoding { get; set; }
```

- *Type:* string

Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#transfer_encoding StorageObject#transfer_encoding}

---



