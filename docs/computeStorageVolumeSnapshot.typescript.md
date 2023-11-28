# `computeStorageVolumeSnapshot` Submodule <a name="`computeStorageVolumeSnapshot` Submodule" id="@cdktf/provider-opc.computeStorageVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStorageVolumeSnapshot <a name="ComputeStorageVolumeSnapshot" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot opc_compute_storage_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer"></a>

```typescript
import { computeStorageVolumeSnapshot } from '@cdktf/provider-opc'

new computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot(scope: Construct, id: string, config: ComputeStorageVolumeSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig">ComputeStorageVolumeSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig">ComputeStorageVolumeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetCollocated">resetCollocated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetParentVolumeBootable">resetParentVolumeBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeStorageVolumeSnapshotTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>

---

##### `resetCollocated` <a name="resetCollocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetCollocated"></a>

```typescript
public resetCollocated(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParentVolumeBootable` <a name="resetParentVolumeBootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetParentVolumeBootable"></a>

```typescript
public resetParentVolumeBootable(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeStorageVolumeSnapshot resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct"></a>

```typescript
import { computeStorageVolumeSnapshot } from '@cdktf/provider-opc'

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement"></a>

```typescript
import { computeStorageVolumeSnapshot } from '@cdktf/provider-opc'

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource"></a>

```typescript
import { computeStorageVolumeSnapshot } from '@cdktf/provider-opc'

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.generateConfigForImport"></a>

```typescript
import { computeStorageVolumeSnapshot } from '@cdktf/provider-opc'

computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeStorageVolumeSnapshot resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeStorageVolumeSnapshot to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeStorageVolumeSnapshot that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeStorageVolumeSnapshot to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.machineImageName">machineImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotTimestamp">snapshotTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.startTimestamp">startTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusDetail">statusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusTimestamp">statusTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference">ComputeStorageVolumeSnapshotTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocatedInput">collocatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootableInput">parentVolumeBootableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeNameInput">volumeNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocated">collocated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootable">parentVolumeBootable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `machineImageName`<sup>Required</sup> <a name="machineImageName" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.machineImageName"></a>

```typescript
public readonly machineImageName: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `snapshotTimestamp`<sup>Required</sup> <a name="snapshotTimestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.snapshotTimestamp"></a>

```typescript
public readonly snapshotTimestamp: string;
```

- *Type:* string

---

##### `startTimestamp`<sup>Required</sup> <a name="startTimestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.startTimestamp"></a>

```typescript
public readonly startTimestamp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetail`<sup>Required</sup> <a name="statusDetail" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusDetail"></a>

```typescript
public readonly statusDetail: string;
```

- *Type:* string

---

##### `statusTimestamp`<sup>Required</sup> <a name="statusTimestamp" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.statusTimestamp"></a>

```typescript
public readonly statusTimestamp: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeStorageVolumeSnapshotTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference">ComputeStorageVolumeSnapshotTimeoutsOutputReference</a>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `collocatedInput`<sup>Optional</sup> <a name="collocatedInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocatedInput"></a>

```typescript
public readonly collocatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentVolumeBootableInput`<sup>Optional</sup> <a name="parentVolumeBootableInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootableInput"></a>

```typescript
public readonly parentVolumeBootableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeStorageVolumeSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>

---

##### `volumeNameInput`<sup>Optional</sup> <a name="volumeNameInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeNameInput"></a>

```typescript
public readonly volumeNameInput: string;
```

- *Type:* string

---

##### `collocated`<sup>Required</sup> <a name="collocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.collocated"></a>

```typescript
public readonly collocated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentVolumeBootable`<sup>Required</sup> <a name="parentVolumeBootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.parentVolumeBootable"></a>

```typescript
public readonly parentVolumeBootable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStorageVolumeSnapshotConfig <a name="ComputeStorageVolumeSnapshotConfig" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.Initializer"></a>

```typescript
import { computeStorageVolumeSnapshot } from '@cdktf/provider-opc'

const computeStorageVolumeSnapshotConfig: computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.volumeName">volumeName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.collocated">collocated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.parentVolumeBootable">parentVolumeBootable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#volume_name ComputeStorageVolumeSnapshot#volume_name}.

---

##### `collocated`<sup>Optional</sup> <a name="collocated" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.collocated"></a>

```typescript
public readonly collocated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#collocated ComputeStorageVolumeSnapshot#collocated}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#description ComputeStorageVolumeSnapshot#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#id ComputeStorageVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#name ComputeStorageVolumeSnapshot#name}.

---

##### `parentVolumeBootable`<sup>Optional</sup> <a name="parentVolumeBootable" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.parentVolumeBootable"></a>

```typescript
public readonly parentVolumeBootable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#parent_volume_bootable ComputeStorageVolumeSnapshot#parent_volume_bootable}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#tags ComputeStorageVolumeSnapshot#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeStorageVolumeSnapshotTimeouts;
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#timeouts ComputeStorageVolumeSnapshot#timeouts}

---

### ComputeStorageVolumeSnapshotTimeouts <a name="ComputeStorageVolumeSnapshotTimeouts" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.Initializer"></a>

```typescript
import { computeStorageVolumeSnapshot } from '@cdktf/provider-opc'

const computeStorageVolumeSnapshotTimeouts: computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#create ComputeStorageVolumeSnapshot#create}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#delete ComputeStorageVolumeSnapshot#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#create ComputeStorageVolumeSnapshot#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume_snapshot#delete ComputeStorageVolumeSnapshot#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStorageVolumeSnapshotTimeoutsOutputReference <a name="ComputeStorageVolumeSnapshotTimeoutsOutputReference" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeStorageVolumeSnapshot } from '@cdktf/provider-opc'

new computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeStorageVolumeSnapshotTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeStorageVolumeSnapshot.ComputeStorageVolumeSnapshotTimeouts">ComputeStorageVolumeSnapshotTimeouts</a>

---



