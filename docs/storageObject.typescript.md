# `storageObject` Submodule <a name="`storageObject` Submodule" id="@cdktf/provider-opc.storageObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StorageObject <a name="StorageObject" id="@cdktf/provider-opc.storageObject.StorageObject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object opc_storage_object}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer"></a>

```typescript
import { storageObject } from '@cdktf/provider-opc'

new storageObject.StorageObject(scope: Construct, id: string, config: StorageObjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig">StorageObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.storageObject.StorageObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig">StorageObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.storageObject.StorageObject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.storageObject.StorageObject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.storageObject.StorageObject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.storageObject.StorageObject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.storageObject.StorageObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opc.storageObject.StorageObject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.storageObject.StorageObject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.storageObject.StorageObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opc.storageObject.StorageObject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.storageObject.StorageObject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.storageObject.StorageObject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.storageObject.StorageObject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opc.storageObject.StorageObject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetContent` <a name="resetContent" id="@cdktf/provider-opc.storageObject.StorageObject.resetContent"></a>

```typescript
public resetContent(): void
```

##### `resetContentDisposition` <a name="resetContentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentDisposition"></a>

```typescript
public resetContentDisposition(): void
```

##### `resetContentEncoding` <a name="resetContentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentEncoding"></a>

```typescript
public resetContentEncoding(): void
```

##### `resetContentType` <a name="resetContentType" id="@cdktf/provider-opc.storageObject.StorageObject.resetContentType"></a>

```typescript
public resetContentType(): void
```

##### `resetCopyFrom` <a name="resetCopyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.resetCopyFrom"></a>

```typescript
public resetCopyFrom(): void
```

##### `resetDeleteAt` <a name="resetDeleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.resetDeleteAt"></a>

```typescript
public resetDeleteAt(): void
```

##### `resetEtag` <a name="resetEtag" id="@cdktf/provider-opc.storageObject.StorageObject.resetEtag"></a>

```typescript
public resetEtag(): void
```

##### `resetFile` <a name="resetFile" id="@cdktf/provider-opc.storageObject.StorageObject.resetFile"></a>

```typescript
public resetFile(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.storageObject.StorageObject.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetTransferEncoding` <a name="resetTransferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.resetTransferEncoding"></a>

```typescript
public resetTransferEncoding(): void
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

```typescript
import { storageObject } from '@cdktf/provider-opc'

storageObject.StorageObject.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement"></a>

```typescript
import { storageObject } from '@cdktf/provider-opc'

storageObject.StorageObject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource"></a>

```typescript
import { storageObject } from '@cdktf/provider-opc'

storageObject.StorageObject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.storageObject.StorageObject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport"></a>

```typescript
import { storageObject } from '@cdktf/provider-opc'

storageObject.StorageObject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StorageObject resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StorageObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StorageObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StorageObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges">acceptRanges</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentLength">contentLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.lastModified">lastModified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest">objectManifest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transactionId">transactionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.containerInput">containerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput">contentDispositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput">contentEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentInput">contentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput">contentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput">copyFromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput">deleteAtInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etagInput">etagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.fileInput">fileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput">transferEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.container">container</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.content">content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.contentType">contentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom">copyFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt">deleteAt</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.file">file</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding">transferEncoding</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.storageObject.StorageObject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.storageObject.StorageObject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.storageObject.StorageObject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.storageObject.StorageObject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageObject.StorageObject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageObject.StorageObject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageObject.StorageObject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageObject.StorageObject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageObject.StorageObject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageObject.StorageObject.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acceptRanges`<sup>Required</sup> <a name="acceptRanges" id="@cdktf/provider-opc.storageObject.StorageObject.property.acceptRanges"></a>

```typescript
public readonly acceptRanges: string;
```

- *Type:* string

---

##### `contentLength`<sup>Required</sup> <a name="contentLength" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentLength"></a>

```typescript
public readonly contentLength: number;
```

- *Type:* number

---

##### `lastModified`<sup>Required</sup> <a name="lastModified" id="@cdktf/provider-opc.storageObject.StorageObject.property.lastModified"></a>

```typescript
public readonly lastModified: string;
```

- *Type:* string

---

##### `objectManifest`<sup>Required</sup> <a name="objectManifest" id="@cdktf/provider-opc.storageObject.StorageObject.property.objectManifest"></a>

```typescript
public readonly objectManifest: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-opc.storageObject.StorageObject.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `transactionId`<sup>Required</sup> <a name="transactionId" id="@cdktf/provider-opc.storageObject.StorageObject.property.transactionId"></a>

```typescript
public readonly transactionId: string;
```

- *Type:* string

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.containerInput"></a>

```typescript
public readonly containerInput: string;
```

- *Type:* string

---

##### `contentDispositionInput`<sup>Optional</sup> <a name="contentDispositionInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDispositionInput"></a>

```typescript
public readonly contentDispositionInput: string;
```

- *Type:* string

---

##### `contentEncodingInput`<sup>Optional</sup> <a name="contentEncodingInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncodingInput"></a>

```typescript
public readonly contentEncodingInput: string;
```

- *Type:* string

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentInput"></a>

```typescript
public readonly contentInput: string;
```

- *Type:* string

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentTypeInput"></a>

```typescript
public readonly contentTypeInput: string;
```

- *Type:* string

---

##### `copyFromInput`<sup>Optional</sup> <a name="copyFromInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFromInput"></a>

```typescript
public readonly copyFromInput: string;
```

- *Type:* string

---

##### `deleteAtInput`<sup>Optional</sup> <a name="deleteAtInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAtInput"></a>

```typescript
public readonly deleteAtInput: number;
```

- *Type:* number

---

##### `etagInput`<sup>Optional</sup> <a name="etagInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.etagInput"></a>

```typescript
public readonly etagInput: string;
```

- *Type:* string

---

##### `fileInput`<sup>Optional</sup> <a name="fileInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.fileInput"></a>

```typescript
public readonly fileInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `transferEncodingInput`<sup>Optional</sup> <a name="transferEncodingInput" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncodingInput"></a>

```typescript
public readonly transferEncodingInput: string;
```

- *Type:* string

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opc.storageObject.StorageObject.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktf/provider-opc.storageObject.StorageObject.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

---

##### `contentDisposition`<sup>Required</sup> <a name="contentDisposition" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

---

##### `contentEncoding`<sup>Required</sup> <a name="contentEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktf/provider-opc.storageObject.StorageObject.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

---

##### `copyFrom`<sup>Required</sup> <a name="copyFrom" id="@cdktf/provider-opc.storageObject.StorageObject.property.copyFrom"></a>

```typescript
public readonly copyFrom: string;
```

- *Type:* string

---

##### `deleteAt`<sup>Required</sup> <a name="deleteAt" id="@cdktf/provider-opc.storageObject.StorageObject.property.deleteAt"></a>

```typescript
public readonly deleteAt: number;
```

- *Type:* number

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-opc.storageObject.StorageObject.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `file`<sup>Required</sup> <a name="file" id="@cdktf/provider-opc.storageObject.StorageObject.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObject.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opc.storageObject.StorageObject.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageObject.StorageObject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `transferEncoding`<sup>Required</sup> <a name="transferEncoding" id="@cdktf/provider-opc.storageObject.StorageObject.property.transferEncoding"></a>

```typescript
public readonly transferEncoding: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.storageObject.StorageObject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StorageObjectConfig <a name="StorageObjectConfig" id="@cdktf/provider-opc.storageObject.StorageObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.Initializer"></a>

```typescript
import { storageObject } from '@cdktf/provider-opc'

const storageObjectConfig: storageObject.StorageObjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container">container</a></code> | <code>string</code> | Name of the storage container. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name">name</a></code> | <code>string</code> | Name of the storage object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content">content</a></code> | <code>string</code> | Raw content in string-form of the data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition">contentDisposition</a></code> | <code>string</code> | Overrides the behavior of the browser. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding">contentEncoding</a></code> | <code>string</code> | Set the content-encoding metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType">contentType</a></code> | <code>string</code> | Set the MIME type for the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom">copyFrom</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt">deleteAt</a></code> | <code>number</code> | The date and time in UNIX Epoch time stamp format when the system removes the object. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag">etag</a></code> | <code>string</code> | MD5 checksum value of the request body. Unquoted. Strongly Recommended. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file">file</a></code> | <code>string</code> | File path for the content to use for data. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | The object metadata. |
| <code><a href="#@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding">transferEncoding</a></code> | <code>string</code> | Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.container"></a>

```typescript
public readonly container: string;
```

- *Type:* string

Name of the storage container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#container StorageObject#container}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the storage object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#name StorageObject#name}

---

##### `content`<sup>Optional</sup> <a name="content" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.content"></a>

```typescript
public readonly content: string;
```

- *Type:* string

Raw content in string-form of the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content StorageObject#content}

---

##### `contentDisposition`<sup>Optional</sup> <a name="contentDisposition" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentDisposition"></a>

```typescript
public readonly contentDisposition: string;
```

- *Type:* string

Overrides the behavior of the browser.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_disposition StorageObject#content_disposition}

---

##### `contentEncoding`<sup>Optional</sup> <a name="contentEncoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentEncoding"></a>

```typescript
public readonly contentEncoding: string;
```

- *Type:* string

Set the content-encoding metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_encoding StorageObject#content_encoding}

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.contentType"></a>

```typescript
public readonly contentType: string;
```

- *Type:* string

Set the MIME type for the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#content_type StorageObject#content_type}

---

##### `copyFrom`<sup>Optional</sup> <a name="copyFrom" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.copyFrom"></a>

```typescript
public readonly copyFrom: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#copy_from StorageObject#copy_from}.

---

##### `deleteAt`<sup>Optional</sup> <a name="deleteAt" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.deleteAt"></a>

```typescript
public readonly deleteAt: number;
```

- *Type:* number

The date and time in UNIX Epoch time stamp format when the system removes the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#delete_at StorageObject#delete_at}

---

##### `etag`<sup>Optional</sup> <a name="etag" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

MD5 checksum value of the request body. Unquoted. Strongly Recommended.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#etag StorageObject#etag}

---

##### `file`<sup>Optional</sup> <a name="file" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.file"></a>

```typescript
public readonly file: string;
```

- *Type:* string

File path for the content to use for data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#file StorageObject#file}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#id StorageObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The object metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#metadata StorageObject#metadata}

---

##### `transferEncoding`<sup>Optional</sup> <a name="transferEncoding" id="@cdktf/provider-opc.storageObject.StorageObjectConfig.property.transferEncoding"></a>

```typescript
public readonly transferEncoding: string;
```

- *Type:* string

Sets the transfer encoding. Can only be 'chunked' or Nil, requires Content-Length to be 0 if set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/storage_object#transfer_encoding StorageObject#transfer_encoding}

---



