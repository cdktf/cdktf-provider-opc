# `opc_storage_container`

Refer to the Terraform Registory for docs: [`opc_storage_container`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container).

# `storageContainer` Submodule <a name="`storageContainer` Submodule" id="@cdktf/provider-opc.storageContainer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageContainer <a name="StorageContainer" id="@cdktf/provider-opc.storageContainer.StorageContainer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container opc_storage_container}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer"></a>

```typescript
import { storageContainer } from '@cdktf/provider-opc'

new storageContainer.StorageContainer(scope: Construct, id: string, config: StorageContainerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig">StorageContainerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.storageContainer.StorageContainer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig">StorageContainerConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.storageContainer.StorageContainer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.storageContainer.StorageContainer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageContainer.StorageContainer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAllowedOrigins` <a name="resetAllowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetAllowedOrigins"></a>

```typescript
public resetAllowedOrigins(): void
```

##### `resetExposedHeaders` <a name="resetExposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetExposedHeaders"></a>

```typescript
public resetExposedHeaders(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetMaxAge"></a>

```typescript
public resetMaxAge(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetPrimaryKey` <a name="resetPrimaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetPrimaryKey"></a>

```typescript
public resetPrimaryKey(): void
```

##### `resetQuotaBytes` <a name="resetQuotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaBytes"></a>

```typescript
public resetQuotaBytes(): void
```

##### `resetQuotaCount` <a name="resetQuotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetQuotaCount"></a>

```typescript
public resetQuotaCount(): void
```

##### `resetReadAcls` <a name="resetReadAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetReadAcls"></a>

```typescript
public resetReadAcls(): void
```

##### `resetSecondaryKey` <a name="resetSecondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetSecondaryKey"></a>

```typescript
public resetSecondaryKey(): void
```

##### `resetWriteAcls` <a name="resetWriteAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.resetWriteAcls"></a>

```typescript
public resetWriteAcls(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.storageContainer.StorageContainer.isConstruct"></a>

```typescript
import { storageContainer } from '@cdktf/provider-opc'

storageContainer.StorageContainer.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement"></a>

```typescript
import { storageContainer } from '@cdktf/provider-opc'

storageContainer.StorageContainer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource"></a>

```typescript
import { storageContainer } from '@cdktf/provider-opc'

storageContainer.StorageContainer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageContainer.StorageContainer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOriginsInput">allowedOriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeadersInput">exposedHeadersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAgeInput">maxAgeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKeyInput">primaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytesInput">quotaBytesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCountInput">quotaCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.readAclsInput">readAclsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKeyInput">secondaryKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAclsInput">writeAclsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAge">maxAge</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKey">primaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytes">quotaBytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCount">quotaCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.readAcls">readAcls</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAcls">writeAcls</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `allowedOriginsInput`<sup>Optional</sup> <a name="allowedOriginsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOriginsInput"></a>

```typescript
public readonly allowedOriginsInput: string[];
```

- *Type:* string[]

---

##### `exposedHeadersInput`<sup>Optional</sup> <a name="exposedHeadersInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeadersInput"></a>

```typescript
public readonly exposedHeadersInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAgeInput"></a>

```typescript
public readonly maxAgeInput: number;
```

- *Type:* number

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: string;
```

- *Type:* string

---

##### `quotaBytesInput`<sup>Optional</sup> <a name="quotaBytesInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytesInput"></a>

```typescript
public readonly quotaBytesInput: number;
```

- *Type:* number

---

##### `quotaCountInput`<sup>Optional</sup> <a name="quotaCountInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCountInput"></a>

```typescript
public readonly quotaCountInput: number;
```

- *Type:* number

---

##### `readAclsInput`<sup>Optional</sup> <a name="readAclsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.readAclsInput"></a>

```typescript
public readonly readAclsInput: string[];
```

- *Type:* string[]

---

##### `secondaryKeyInput`<sup>Optional</sup> <a name="secondaryKeyInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKeyInput"></a>

```typescript
public readonly secondaryKeyInput: string;
```

- *Type:* string

---

##### `writeAclsInput`<sup>Optional</sup> <a name="writeAclsInput" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAclsInput"></a>

```typescript
public readonly writeAclsInput: string[];
```

- *Type:* string[]

---

##### `allowedOrigins`<sup>Required</sup> <a name="allowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

---

##### `exposedHeaders`<sup>Required</sup> <a name="exposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

---

##### `quotaBytes`<sup>Required</sup> <a name="quotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaBytes"></a>

```typescript
public readonly quotaBytes: number;
```

- *Type:* number

---

##### `quotaCount`<sup>Required</sup> <a name="quotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.quotaCount"></a>

```typescript
public readonly quotaCount: number;
```

- *Type:* number

---

##### `readAcls`<sup>Required</sup> <a name="readAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.readAcls"></a>

```typescript
public readonly readAcls: string[];
```

- *Type:* string[]

---

##### `secondaryKey`<sup>Required</sup> <a name="secondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

---

##### `writeAcls`<sup>Required</sup> <a name="writeAcls" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.writeAcls"></a>

```typescript
public readonly writeAcls: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.storageContainer.StorageContainer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageContainerConfig <a name="StorageContainerConfig" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.Initializer"></a>

```typescript
import { storageContainer } from '@cdktf/provider-opc'

const storageContainerConfig: storageContainer.StorageContainerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#name StorageContainer#name}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.allowedOrigins">allowedOrigins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#allowed_origins StorageContainer#allowed_origins}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.exposedHeaders">exposedHeaders</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#exposed_headers StorageContainer#exposed_headers}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#id StorageContainer#id}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.maxAge">maxAge</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#max_age StorageContainer#max_age}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#metadata StorageContainer#metadata}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.primaryKey">primaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#primary_key StorageContainer#primary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaBytes">quotaBytes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_bytes StorageContainer#quota_bytes}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaCount">quotaCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_count StorageContainer#quota_count}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.readAcls">readAcls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#read_acls StorageContainer#read_acls}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.secondaryKey">secondaryKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#secondary_key StorageContainer#secondary_key}. |
| <code><a href="#@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.writeAcls">writeAcls</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#write_acls StorageContainer#write_acls}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#name StorageContainer#name}.

---

##### `allowedOrigins`<sup>Optional</sup> <a name="allowedOrigins" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.allowedOrigins"></a>

```typescript
public readonly allowedOrigins: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#allowed_origins StorageContainer#allowed_origins}.

---

##### `exposedHeaders`<sup>Optional</sup> <a name="exposedHeaders" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.exposedHeaders"></a>

```typescript
public readonly exposedHeaders: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#exposed_headers StorageContainer#exposed_headers}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#id StorageContainer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.maxAge"></a>

```typescript
public readonly maxAge: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#max_age StorageContainer#max_age}.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#metadata StorageContainer#metadata}.

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.primaryKey"></a>

```typescript
public readonly primaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#primary_key StorageContainer#primary_key}.

---

##### `quotaBytes`<sup>Optional</sup> <a name="quotaBytes" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaBytes"></a>

```typescript
public readonly quotaBytes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_bytes StorageContainer#quota_bytes}.

---

##### `quotaCount`<sup>Optional</sup> <a name="quotaCount" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.quotaCount"></a>

```typescript
public readonly quotaCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#quota_count StorageContainer#quota_count}.

---

##### `readAcls`<sup>Optional</sup> <a name="readAcls" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.readAcls"></a>

```typescript
public readonly readAcls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#read_acls StorageContainer#read_acls}.

---

##### `secondaryKey`<sup>Optional</sup> <a name="secondaryKey" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.secondaryKey"></a>

```typescript
public readonly secondaryKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#secondary_key StorageContainer#secondary_key}.

---

##### `writeAcls`<sup>Optional</sup> <a name="writeAcls" id="@cdktf/provider-opc.storageContainer.StorageContainerConfig.property.writeAcls"></a>

```typescript
public readonly writeAcls: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_container#write_acls StorageContainer#write_acls}.

---



