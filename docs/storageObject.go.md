# `opc_storage_object`

Refer to the Terraform Registory for docs: [`opc_storage_object`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object).

# `storageObject` Submodule <a name="`storageObject` Submodule" id="@cdktf/provider-opc.storageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageObject <a name="StorageObject" id="@cdktf/provider-opc.storageObject.StorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object opc_storage_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/storageobject"

storageobject.NewStorageObject(scope Construct, id *string, config StorageObjectConfig) StorageObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig">StorageObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opc.storageObject.StorageObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetContent` <a name="ResetContent" id="@cdktf/provider-opc.storageObject.StorageObject.resetContent"></a>

```go
func ResetContent()
```

##### `ResetContentDisposition` <a name="ResetContentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentDisposition"></a>

```go
func ResetContentDisposition()
```

##### `ResetContentEncoding` <a name="ResetContentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentEncoding"></a>

```go
func ResetContentEncoding()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetCopyFrom` <a name="ResetCopyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.resetCopyFrom"></a>

```go
func ResetCopyFrom()
```

##### `ResetDeleteAt` <a name="ResetDeleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.resetDeleteAt"></a>

```go
func ResetDeleteAt()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-opc.storageObject.StorageObject.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-opc.storageObject.StorageObject.resetFile"></a>

```go
func ResetFile()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opc.storageObject.StorageObject.resetId"></a>

```go
func ResetId()
```

##### `ResetMetadata` <a name="ResetMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.resetMetadata"></a>

```go
func ResetMetadata()
```

##### `ResetTransferEncoding` <a name="ResetTransferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetTransferEncoding"></a>

```go
func ResetTransferEncoding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opc.storageObject.StorageObject.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/storageobject"

storageobject.StorageObject_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/storageobject"

storageobject.StorageObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/storageobject"

storageobject.StorageObject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges">AcceptRanges</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentLength">ContentLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lastModified">LastModified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest">ObjectManifest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.timestamp">Timestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transactionId">TransactionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.containerInput">ContainerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput">ContentDispositionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput">ContentEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput">CopyFromInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput">DeleteAtInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fileInput">FileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput">MetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput">TransferEncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.container">Container</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom">CopyFrom</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt">DeleteAt</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.file">File</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding">TransferEncoding</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opc.storageObject.StorageObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opc.storageObject.StorageObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.storageObject.StorageObject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.storageObject.StorageObject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.storageObject.StorageObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.storageObject.StorageObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.storageObject.StorageObject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceptRanges`<sup>Required</sup> <a name="AcceptRanges" id="@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges"></a>

```go
func AcceptRanges() *string
```

- *Type:* *string

---

##### `ContentLength`<sup>Required</sup> <a name="ContentLength" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentLength"></a>

```go
func ContentLength() *f64
```

- *Type:* *f64

---

##### `LastModified`<sup>Required</sup> <a name="LastModified" id="@cdktf/provider-opc.storageObject.StorageObject.property.lastModified"></a>

```go
func LastModified() *string
```

- *Type:* *string

---

##### `ObjectManifest`<sup>Required</sup> <a name="ObjectManifest" id="@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest"></a>

```go
func ObjectManifest() *string
```

- *Type:* *string

---

##### `Timestamp`<sup>Required</sup> <a name="Timestamp" id="@cdktf/provider-opc.storageObject.StorageObject.property.timestamp"></a>

```go
func Timestamp() *string
```

- *Type:* *string

---

##### `TransactionId`<sup>Required</sup> <a name="TransactionId" id="@cdktf/provider-opc.storageObject.StorageObject.property.transactionId"></a>

```go
func TransactionId() *string
```

- *Type:* *string

---

##### `ContainerInput`<sup>Optional</sup> <a name="ContainerInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.containerInput"></a>

```go
func ContainerInput() *string
```

- *Type:* *string

---

##### `ContentDispositionInput`<sup>Optional</sup> <a name="ContentDispositionInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput"></a>

```go
func ContentDispositionInput() *string
```

- *Type:* *string

---

##### `ContentEncodingInput`<sup>Optional</sup> <a name="ContentEncodingInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput"></a>

```go
func ContentEncodingInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `CopyFromInput`<sup>Optional</sup> <a name="CopyFromInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput"></a>

```go
func CopyFromInput() *string
```

- *Type:* *string

---

##### `DeleteAtInput`<sup>Optional</sup> <a name="DeleteAtInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput"></a>

```go
func DeleteAtInput() *f64
```

- *Type:* *f64

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.fileInput"></a>

```go
func FileInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MetadataInput`<sup>Optional</sup> <a name="MetadataInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput"></a>

```go
func MetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TransferEncodingInput`<sup>Optional</sup> <a name="TransferEncodingInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput"></a>

```go
func TransferEncodingInput() *string
```

- *Type:* *string

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-opc.storageObject.StorageObject.property.container"></a>

```go
func Container() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-opc.storageObject.StorageObject.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `ContentDisposition`<sup>Required</sup> <a name="ContentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition"></a>

```go
func ContentDisposition() *string
```

- *Type:* *string

---

##### `ContentEncoding`<sup>Required</sup> <a name="ContentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding"></a>

```go
func ContentEncoding() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `CopyFrom`<sup>Required</sup> <a name="CopyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom"></a>

```go
func CopyFrom() *string
```

- *Type:* *string

---

##### `DeleteAt`<sup>Required</sup> <a name="DeleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt"></a>

```go
func DeleteAt() *f64
```

- *Type:* *f64

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-opc.storageObject.StorageObject.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-opc.storageObject.StorageObject.property.file"></a>

```go
func File() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opc.storageObject.StorageObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadata"></a>

```go
func Metadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.storageObject.StorageObject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TransferEncoding`<sup>Required</sup> <a name="TransferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding"></a>

```go
func TransferEncoding() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageObjectConfig <a name="StorageObjectConfig" id="@cdktf/provider-opc.storageObject.StorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opc-go/opc/v4/storageobject"

&storageobject.StorageObjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Container: *string,
	Name: *string,
	Content: *string,
	ContentDisposition: *string,
	ContentEncoding: *string,
	ContentType: *string,
	CopyFrom: *string,
	DeleteAt: *f64,
	Etag: *string,
	File: *string,
	Id: *string,
	Metadata: *map[string]*string,
	TransferEncoding: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container">Container</a></code> | <code>*string</code> | Name of the storage container. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name">Name</a></code> | <code>*string</code> | Name of the storage object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content">Content</a></code> | <code>*string</code> | Raw content in string-form of the data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition">ContentDisposition</a></code> | <code>*string</code> | Overrides the behavior of the browser. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding">ContentEncoding</a></code> | <code>*string</code> | Set the content-encoding metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType">ContentType</a></code> | <code>*string</code> | Set the MIME type for the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom">CopyFrom</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt">DeleteAt</a></code> | <code>*f64</code> | The date and time in UNIX Epoch time stamp format when the system removes the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag">Etag</a></code> | <code>*string</code> | MD5 checksum value of the request body. Unquoted. Strongly Recommended. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file">File</a></code> | <code>*string</code> | File path for the content to use for data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata">Metadata</a></code> | <code>*map[string]*string</code> | The object metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding">TransferEncoding</a></code> | <code>*string</code> | Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Container`<sup>Required</sup> <a name="Container" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container"></a>

```go
Container *string
```

- *Type:* *string

Name of the storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#container StorageObject#container}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#name StorageObject#name}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

Raw content in string-form of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content StorageObject#content}

---

##### `ContentDisposition`<sup>Optional</sup> <a name="ContentDisposition" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition"></a>

```go
ContentDisposition *string
```

- *Type:* *string

Overrides the behavior of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_disposition StorageObject#content_disposition}

---

##### `ContentEncoding`<sup>Optional</sup> <a name="ContentEncoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding"></a>

```go
ContentEncoding *string
```

- *Type:* *string

Set the content-encoding metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_encoding StorageObject#content_encoding}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

Set the MIME type for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_type StorageObject#content_type}

---

##### `CopyFrom`<sup>Optional</sup> <a name="CopyFrom" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom"></a>

```go
CopyFrom *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}.

---

##### `DeleteAt`<sup>Optional</sup> <a name="DeleteAt" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt"></a>

```go
DeleteAt *f64
```

- *Type:* *f64

The date and time in UNIX Epoch time stamp format when the system removes the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#delete_at StorageObject#delete_at}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

MD5 checksum value of the request body. Unquoted. Strongly Recommended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#etag StorageObject#etag}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file"></a>

```go
File *string
```

- *Type:* *string

File path for the content to use for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#file StorageObject#file}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Metadata`<sup>Optional</sup> <a name="Metadata" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata"></a>

```go
Metadata *map[string]*string
```

- *Type:* *map[string]*string

The object metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#metadata StorageObject#metadata}

---

##### `TransferEncoding`<sup>Optional</sup> <a name="TransferEncoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding"></a>

```go
TransferEncoding *string
```

- *Type:* *string

Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#transfer_encoding StorageObject#transfer_encoding}

---



