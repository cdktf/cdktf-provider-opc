# `storageObject` Submodule <a name="`storageObject` Submodule" id="@cdktf/provider-opc.storageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageObject <a name="StorageObject" id="@cdktf/provider-opc.storageObject.StorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object opc_storage_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_object.StorageObject;

StorageObject.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .container(java.lang.String)
    .name(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentType(java.lang.String)
//  .copyFrom(java.lang.String)
//  .deleteAt(java.lang.Number)
//  .etag(java.lang.String)
//  .file(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .transferEncoding(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.container">container</a></code> | <code>java.lang.String</code> | Name of the storage container. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the storage object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.content">content</a></code> | <code>java.lang.String</code> | Raw content in string-form of the data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Overrides the behavior of the browser. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Set the content-encoding metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentType">contentType</a></code> | <code>java.lang.String</code> | Set the MIME type for the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.copyFrom">copyFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.deleteAt">deleteAt</a></code> | <code>java.lang.Number</code> | The date and time in UNIX Epoch time stamp format when the system removes the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.etag">etag</a></code> | <code>java.lang.String</code> | MD5 checksum value of the request body. Unquoted. Strongly Recommended. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.file">file</a></code> | <code>java.lang.String</code> | File path for the content to use for data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The object metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.transferEncoding">transferEncoding</a></code> | <code>java.lang.String</code> | Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.container"></a>

- *Type:* java.lang.String

Name of the storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#container StorageObject#container}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#name StorageObject#name}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.content"></a>

- *Type:* java.lang.String

Raw content in string-form of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content StorageObject#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentDisposition"></a>

- *Type:* java.lang.String

Overrides the behavior of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_disposition StorageObject#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentEncoding"></a>

- *Type:* java.lang.String

Set the content-encoding metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_encoding StorageObject#content_encoding}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.contentType"></a>

- *Type:* java.lang.String

Set the MIME type for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_type StorageObject#content_type}

---

##### `copyFrom`<sup>Optional</sup> <a name="copyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.copyFrom"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}.

---

##### `deleteAt`<sup>Optional</sup> <a name="deleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.deleteAt"></a>

- *Type:* java.lang.Number

The date and time in UNIX Epoch time stamp format when the system removes the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#delete_at StorageObject#delete_at}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.etag"></a>

- *Type:* java.lang.String

MD5 checksum value of the request body. Unquoted. Strongly Recommended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#etag StorageObject#etag}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.file"></a>

- *Type:* java.lang.String

File path for the content to use for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#file StorageObject#file}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The object metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#metadata StorageObject#metadata}

---

##### `transferEncoding`<sup>Optional</sup> <a name="transferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.transferEncoding"></a>

- *Type:* java.lang.String

Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#transfer_encoding StorageObject#transfer_encoding}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContent">resetContent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentDisposition">resetContentDisposition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentEncoding">resetContentEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetContentType">resetContentType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetCopyFrom">resetCopyFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetDeleteAt">resetDeleteAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetEtag">resetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetFile">resetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetTransferEncoding">resetTransferEncoding</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.storageObject.StorageObject.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opc.storageObject.StorageObject.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.storageObject.StorageObject.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.storageObject.StorageObject.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.storageObject.StorageObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opc.storageObject.StorageObject.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.storageObject.StorageObject.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opc.storageObject.StorageObject.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.storageObject.StorageObject.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.storageObject.StorageObject.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.storageObject.StorageObject.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opc.storageObject.StorageObject.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opc.storageObject.StorageObject.resetContent"></a>

```java
public void resetContent()
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentDisposition"></a>

```java
public void resetContentDisposition()
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentEncoding"></a>

```java
public void resetContentEncoding()
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentType"></a>

```java
public void resetContentType()
```

##### `resetCopyFrom` <a name="resetCopyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.resetCopyFrom"></a>

```java
public void resetCopyFrom()
```

##### `resetDeleteAt` <a name="resetDeleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.resetDeleteAt"></a>

```java
public void resetDeleteAt()
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-opc.storageObject.StorageObject.resetEtag"></a>

```java
public void resetEtag()
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-opc.storageObject.StorageObject.resetFile"></a>

```java
public void resetFile()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.storageObject.StorageObject.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetTransferEncoding` <a name="resetTransferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetTransferEncoding"></a>

```java
public void resetTransferEncoding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StorageObject resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.storageObject.StorageObject.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_object.StorageObject;

StorageObject.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_object.StorageObject;

StorageObject.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_object.StorageObject;

StorageObject.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_object.StorageObject;

StorageObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),StorageObject.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a StorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the StorageObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing StorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the StorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges">acceptRanges</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentLength">contentLength</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lastModified">lastModified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest">objectManifest</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.timestamp">timestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transactionId">transactionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentInput">contentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput">copyFromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput">deleteAtInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etagInput">etagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fileInput">fileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput">transferEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.content">content</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom">copyFrom</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt">deleteAt</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.file">file</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding">transferEncoding</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.storageObject.StorageObject.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.storageObject.StorageObject.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageObject.StorageObject.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageObject.StorageObject.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageObject.StorageObject.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageObject.StorageObject.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acceptRanges`<sup>Required</sup> <a name="acceptRanges" id="@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges"></a>

```java
public java.lang.String getAcceptRanges();
```

- *Type:* java.lang.String

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentLength"></a>

```java
public java.lang.Number getContentLength();
```

- *Type:* java.lang.Number

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-opc.storageObject.StorageObject.property.lastModified"></a>

```java
public java.lang.String getLastModified();
```

- *Type:* java.lang.String

---

##### `objectManifest`<sup>Required</sup> <a name="objectManifest" id="@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest"></a>

```java
public java.lang.String getObjectManifest();
```

- *Type:* java.lang.String

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-opc.storageObject.StorageObject.property.timestamp"></a>

```java
public java.lang.String getTimestamp();
```

- *Type:* java.lang.String

---

##### `transactionId`<sup>Required</sup> <a name="transactionId" id="@cdktf/provider-opc.storageObject.StorageObject.property.transactionId"></a>

```java
public java.lang.String getTransactionId();
```

- *Type:* java.lang.String

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput"></a>

```java
public java.lang.String getContentDispositionInput();
```

- *Type:* java.lang.String

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput"></a>

```java
public java.lang.String getContentEncodingInput();
```

- *Type:* java.lang.String

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentInput"></a>

```java
public java.lang.String getContentInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `copyFromInput`<sup>Optional</sup> <a name="copyFromInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput"></a>

```java
public java.lang.String getCopyFromInput();
```

- *Type:* java.lang.String

---

##### `deleteAtInput`<sup>Optional</sup> <a name="deleteAtInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput"></a>

```java
public java.lang.Number getDeleteAtInput();
```

- *Type:* java.lang.Number

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.etagInput"></a>

```java
public java.lang.String getEtagInput();
```

- *Type:* java.lang.String

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.fileInput"></a>

```java
public java.lang.String getFileInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `transferEncodingInput`<sup>Optional</sup> <a name="transferEncodingInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput"></a>

```java
public java.lang.String getTransferEncodingInput();
```

- *Type:* java.lang.String

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opc.storageObject.StorageObject.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opc.storageObject.StorageObject.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `copyFrom`<sup>Required</sup> <a name="copyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom"></a>

```java
public java.lang.String getCopyFrom();
```

- *Type:* java.lang.String

---

##### `deleteAt`<sup>Required</sup> <a name="deleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt"></a>

```java
public java.lang.Number getDeleteAt();
```

- *Type:* java.lang.Number

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-opc.storageObject.StorageObject.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-opc.storageObject.StorageObject.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageObject.StorageObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `transferEncoding`<sup>Required</sup> <a name="transferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding"></a>

```java
public java.lang.String getTransferEncoding();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageObjectConfig <a name="StorageObjectConfig" id="@cdktf/provider-opc.storageObject.StorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_object.StorageObjectConfig;

StorageObjectConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .container(java.lang.String)
    .name(java.lang.String)
//  .content(java.lang.String)
//  .contentDisposition(java.lang.String)
//  .contentEncoding(java.lang.String)
//  .contentType(java.lang.String)
//  .copyFrom(java.lang.String)
//  .deleteAt(java.lang.Number)
//  .etag(java.lang.String)
//  .file(java.lang.String)
//  .id(java.lang.String)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .transferEncoding(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container">container</a></code> | <code>java.lang.String</code> | Name of the storage container. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the storage object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content">content</a></code> | <code>java.lang.String</code> | Raw content in string-form of the data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>java.lang.String</code> | Overrides the behavior of the browser. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>java.lang.String</code> | Set the content-encoding metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Set the MIME type for the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom">copyFrom</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt">deleteAt</a></code> | <code>java.lang.Number</code> | The date and time in UNIX Epoch time stamp format when the system removes the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag">etag</a></code> | <code>java.lang.String</code> | MD5 checksum value of the request body. Unquoted. Strongly Recommended. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file">file</a></code> | <code>java.lang.String</code> | File path for the content to use for data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The object metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding">transferEncoding</a></code> | <code>java.lang.String</code> | Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

Name of the storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#container StorageObject#container}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#name StorageObject#name}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content"></a>

```java
public java.lang.String getContent();
```

- *Type:* java.lang.String

Raw content in string-form of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content StorageObject#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition"></a>

```java
public java.lang.String getContentDisposition();
```

- *Type:* java.lang.String

Overrides the behavior of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_disposition StorageObject#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding"></a>

```java
public java.lang.String getContentEncoding();
```

- *Type:* java.lang.String

Set the content-encoding metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_encoding StorageObject#content_encoding}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Set the MIME type for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_type StorageObject#content_type}

---

##### `copyFrom`<sup>Optional</sup> <a name="copyFrom" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom"></a>

```java
public java.lang.String getCopyFrom();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}.

---

##### `deleteAt`<sup>Optional</sup> <a name="deleteAt" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt"></a>

```java
public java.lang.Number getDeleteAt();
```

- *Type:* java.lang.Number

The date and time in UNIX Epoch time stamp format when the system removes the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#delete_at StorageObject#delete_at}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

MD5 checksum value of the request body. Unquoted. Strongly Recommended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#etag StorageObject#etag}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file"></a>

```java
public java.lang.String getFile();
```

- *Type:* java.lang.String

File path for the content to use for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#file StorageObject#file}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The object metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#metadata StorageObject#metadata}

---

##### `transferEncoding`<sup>Optional</sup> <a name="transferEncoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding"></a>

```java
public java.lang.String getTransferEncoding();
```

- *Type:* java.lang.String

Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#transfer_encoding StorageObject#transfer_encoding}

---



