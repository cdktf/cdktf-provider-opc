# `storageContainer` Submodule <a name="`storageContainer` Submodule" id="@cdktf/provider-opc.storageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageContainer <a name="StorageContainer" id="@cdktf/provider-opc.storageContainer.StorageContainer"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/storage_container opc_storage_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_container.StorageContainer;

StorageContainer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowedOrigins(java.util.List<java.lang.String>)
//  .exposedHeaders(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maxAge(java.lang.Number)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .primaryKey(java.lang.String)
//  .quotaBytes(java.lang.Number)
//  .quotaCount(java.lang.Number)
//  .readAcls(java.util.List<java.lang.String>)
//  .secondaryKey(java.lang.String)
//  .writeAcls(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#name StorageContainer#name}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#allowed_origins StorageContainer#allowed_origins}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#exposed_headers StorageContainer#exposed_headers}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#id StorageContainer#id}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#max_age StorageContainer#max_age}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#metadata StorageContainer#metadata}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#primary_key StorageContainer#primary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.quotaBytes">quotaBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_bytes StorageContainer#quota_bytes}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.quotaCount">quotaCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_count StorageContainer#quota_count}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.readAcls">readAcls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#read_acls StorageContainer#read_acls}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#secondary_key StorageContainer#secondary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.writeAcls">writeAcls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#write_acls StorageContainer#write_acls}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#name StorageContainer#name}.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.allowedOrigins"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#allowed_origins StorageContainer#allowed_origins}.

---

##### `exposedHeaders`<sup>Optional</sup> <a name="exposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.exposedHeaders"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#exposed_headers StorageContainer#exposed_headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#id StorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.maxAge"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#max_age StorageContainer#max_age}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#metadata StorageContainer#metadata}.

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.primaryKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#primary_key StorageContainer#primary_key}.

---

##### `quotaBytes`<sup>Optional</sup> <a name="quotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.quotaBytes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_bytes StorageContainer#quota_bytes}.

---

##### `quotaCount`<sup>Optional</sup> <a name="quotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.quotaCount"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_count StorageContainer#quota_count}.

---

##### `readAcls`<sup>Optional</sup> <a name="readAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.readAcls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#read_acls StorageContainer#read_acls}.

---

##### `secondaryKey`<sup>Optional</sup> <a name="secondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.secondaryKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#secondary_key StorageContainer#secondary_key}.

---

##### `writeAcls`<sup>Optional</sup> <a name="writeAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.writeAcls"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#write_acls StorageContainer#write_acls}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetAllowedOrigins">resetAllowedOrigins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetExposedHeaders">resetExposedHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetMaxAge">resetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetPrimaryKey">resetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaBytes">resetQuotaBytes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaCount">resetQuotaCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetReadAcls">resetReadAcls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetSecondaryKey">resetSecondaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.resetWriteAcls">resetWriteAcls</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.storageContainer.StorageContainer.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.storageContainer.StorageContainer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetAllowedOrigins"></a>

```java
public void resetAllowedOrigins()
```

##### `resetExposedHeaders` <a name="resetExposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetExposedHeaders"></a>

```java
public void resetExposedHeaders()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetId"></a>

```java
public void resetId()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetMaxAge"></a>

```java
public void resetMaxAge()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetPrimaryKey` <a name="resetPrimaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetPrimaryKey"></a>

```java
public void resetPrimaryKey()
```

##### `resetQuotaBytes` <a name="resetQuotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaBytes"></a>

```java
public void resetQuotaBytes()
```

##### `resetQuotaCount` <a name="resetQuotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaCount"></a>

```java
public void resetQuotaCount()
```

##### `resetReadAcls` <a name="resetReadAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetReadAcls"></a>

```java
public void resetReadAcls()
```

##### `resetSecondaryKey` <a name="resetSecondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetSecondaryKey"></a>

```java
public void resetSecondaryKey()
```

##### `resetWriteAcls` <a name="resetWriteAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetWriteAcls"></a>

```java
public void resetWriteAcls()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_container.StorageContainer;

StorageContainer.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_container.StorageContainer;

StorageContainer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_container.StorageContainer;

StorageContainer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKeyInput">primaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytesInput">quotaBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCountInput">quotaCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.readAclsInput">readAclsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKeyInput">secondaryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAclsInput">writeAclsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytes">quotaBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCount">quotaCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.readAcls">readAcls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAcls">writeAcls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOriginsInput"></a>

```java
public java.util.List<java.lang.String> getAllowedOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeadersInput"></a>

```java
public java.util.List<java.lang.String> getExposedHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKeyInput"></a>

```java
public java.lang.String getPrimaryKeyInput();
```

- *Type:* java.lang.String

---

##### `quotaBytesInput`<sup>Optional</sup> <a name="quotaBytesInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytesInput"></a>

```java
public java.lang.Number getQuotaBytesInput();
```

- *Type:* java.lang.Number

---

##### `quotaCountInput`<sup>Optional</sup> <a name="quotaCountInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCountInput"></a>

```java
public java.lang.Number getQuotaCountInput();
```

- *Type:* java.lang.Number

---

##### `readAclsInput`<sup>Optional</sup> <a name="readAclsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.readAclsInput"></a>

```java
public java.util.List<java.lang.String> getReadAclsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secondaryKeyInput`<sup>Optional</sup> <a name="secondaryKeyInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKeyInput"></a>

```java
public java.lang.String getSecondaryKeyInput();
```

- *Type:* java.lang.String

---

##### `writeAclsInput`<sup>Optional</sup> <a name="writeAclsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAclsInput"></a>

```java
public java.util.List<java.lang.String> getWriteAclsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

---

##### `quotaBytes`<sup>Required</sup> <a name="quotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytes"></a>

```java
public java.lang.Number getQuotaBytes();
```

- *Type:* java.lang.Number

---

##### `quotaCount`<sup>Required</sup> <a name="quotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCount"></a>

```java
public java.lang.Number getQuotaCount();
```

- *Type:* java.lang.Number

---

##### `readAcls`<sup>Required</sup> <a name="readAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.readAcls"></a>

```java
public java.util.List<java.lang.String> getReadAcls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

---

##### `writeAcls`<sup>Required</sup> <a name="writeAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAcls"></a>

```java
public java.util.List<java.lang.String> getWriteAcls();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### StorageContainerConfig <a name="StorageContainerConfig" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.storage_container.StorageContainerConfig;

StorageContainerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .allowedOrigins(java.util.List<java.lang.String>)
//  .exposedHeaders(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .maxAge(java.lang.Number)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .primaryKey(java.lang.String)
//  .quotaBytes(java.lang.Number)
//  .quotaCount(java.lang.Number)
//  .readAcls(java.util.List<java.lang.String>)
//  .secondaryKey(java.lang.String)
//  .writeAcls(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#name StorageContainer#name}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.allowedOrigins">allowedOrigins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#allowed_origins StorageContainer#allowed_origins}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.exposedHeaders">exposedHeaders</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#exposed_headers StorageContainer#exposed_headers}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#id StorageContainer#id}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#max_age StorageContainer#max_age}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#metadata StorageContainer#metadata}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.primaryKey">primaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#primary_key StorageContainer#primary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaBytes">quotaBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_bytes StorageContainer#quota_bytes}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaCount">quotaCount</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_count StorageContainer#quota_count}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.readAcls">readAcls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#read_acls StorageContainer#read_acls}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.secondaryKey">secondaryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#secondary_key StorageContainer#secondary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.writeAcls">writeAcls</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#write_acls StorageContainer#write_acls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#name StorageContainer#name}.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.allowedOrigins"></a>

```java
public java.util.List<java.lang.String> getAllowedOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#allowed_origins StorageContainer#allowed_origins}.

---

##### `exposedHeaders`<sup>Optional</sup> <a name="exposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.exposedHeaders"></a>

```java
public java.util.List<java.lang.String> getExposedHeaders();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#exposed_headers StorageContainer#exposed_headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#id StorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#max_age StorageContainer#max_age}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#metadata StorageContainer#metadata}.

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.primaryKey"></a>

```java
public java.lang.String getPrimaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#primary_key StorageContainer#primary_key}.

---

##### `quotaBytes`<sup>Optional</sup> <a name="quotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaBytes"></a>

```java
public java.lang.Number getQuotaBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_bytes StorageContainer#quota_bytes}.

---

##### `quotaCount`<sup>Optional</sup> <a name="quotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaCount"></a>

```java
public java.lang.Number getQuotaCount();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#quota_count StorageContainer#quota_count}.

---

##### `readAcls`<sup>Optional</sup> <a name="readAcls" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.readAcls"></a>

```java
public java.util.List<java.lang.String> getReadAcls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#read_acls StorageContainer#read_acls}.

---

##### `secondaryKey`<sup>Optional</sup> <a name="secondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.secondaryKey"></a>

```java
public java.lang.String getSecondaryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#secondary_key StorageContainer#secondary_key}.

---

##### `writeAcls`<sup>Optional</sup> <a name="writeAcls" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.writeAcls"></a>

```java
public java.util.List<java.lang.String> getWriteAcls();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/storage_container#write_acls StorageContainer#write_acls}.

---



