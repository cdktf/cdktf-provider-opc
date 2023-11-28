# `computeStorageVolume` Submodule <a name="`computeStorageVolume` Submodule" id="@cdktf/provider-opc.computeStorageVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStorageVolume <a name="ComputeStorageVolume" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume opc_compute_storage_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer"></a>

```typescript
import { computeStorageVolume } from '@cdktf/provider-opc'

new computeStorageVolume.ComputeStorageVolume(scope: Construct, id: string, config: ComputeStorageVolumeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig">ComputeStorageVolumeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig">ComputeStorageVolumeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable">resetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor">resetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList">resetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry">resetImageListEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage">resetMachineImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly">resetReadonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount">resetSnapshotAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool">resetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri">resetUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeStorageVolumeTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

---

##### `resetBootable` <a name="resetBootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable"></a>

```typescript
public resetBootable(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetHypervisor` <a name="resetHypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor"></a>

```typescript
public resetHypervisor(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageList` <a name="resetImageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList"></a>

```typescript
public resetImageList(): void
```

##### `resetImageListEntry` <a name="resetImageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry"></a>

```typescript
public resetImageListEntry(): void
```

##### `resetMachineImage` <a name="resetMachineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage"></a>

```typescript
public resetMachineImage(): void
```

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged"></a>

```typescript
public resetManaged(): void
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform"></a>

```typescript
public resetPlatform(): void
```

##### `resetReadonly` <a name="resetReadonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly"></a>

```typescript
public resetReadonly(): void
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot"></a>

```typescript
public resetSnapshot(): void
```

##### `resetSnapshotAccount` <a name="resetSnapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount"></a>

```typescript
public resetSnapshotAccount(): void
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId"></a>

```typescript
public resetSnapshotId(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetStoragePool` <a name="resetStoragePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool"></a>

```typescript
public resetStoragePool(): void
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType"></a>

```typescript
public resetStorageType(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri"></a>

```typescript
public resetUri(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeStorageVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct"></a>

```typescript
import { computeStorageVolume } from '@cdktf/provider-opc'

computeStorageVolume.ComputeStorageVolume.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement"></a>

```typescript
import { computeStorageVolume } from '@cdktf/provider-opc'

computeStorageVolume.ComputeStorageVolume.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource"></a>

```typescript
import { computeStorageVolume } from '@cdktf/provider-opc'

computeStorageVolume.ComputeStorageVolume.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport"></a>

```typescript
import { computeStorageVolume } from '@cdktf/provider-opc'

computeStorageVolume.ComputeStorageVolume.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeStorageVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeStorageVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeStorageVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeStorageVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput">bootableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput">hypervisorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput">imageListEntryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput">imageListInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput">machineImageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput">managedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput">platformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput">readonlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput">sizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput">snapshotAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput">snapshotInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput">storagePoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput">storageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable">bootable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor">hypervisor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList">imageList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry">imageListEntry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage">machineImage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly">readonly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot">snapshot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount">snapshotAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool">storagePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType">storageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri">uri</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeStorageVolumeTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a>

---

##### `bootableInput`<sup>Optional</sup> <a name="bootableInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput"></a>

```typescript
public readonly bootableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `hypervisorInput`<sup>Optional</sup> <a name="hypervisorInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput"></a>

```typescript
public readonly hypervisorInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageListEntryInput`<sup>Optional</sup> <a name="imageListEntryInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput"></a>

```typescript
public readonly imageListEntryInput: number;
```

- *Type:* number

---

##### `imageListInput`<sup>Optional</sup> <a name="imageListInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput"></a>

```typescript
public readonly imageListInput: string;
```

- *Type:* string

---

##### `machineImageInput`<sup>Optional</sup> <a name="machineImageInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput"></a>

```typescript
public readonly machineImageInput: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput"></a>

```typescript
public readonly managedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput"></a>

```typescript
public readonly platformInput: string;
```

- *Type:* string

---

##### `readonlyInput`<sup>Optional</sup> <a name="readonlyInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput"></a>

```typescript
public readonly readonlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput"></a>

```typescript
public readonly sizeInput: number;
```

- *Type:* number

---

##### `snapshotAccountInput`<sup>Optional</sup> <a name="snapshotAccountInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput"></a>

```typescript
public readonly snapshotAccountInput: string;
```

- *Type:* string

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput"></a>

```typescript
public readonly snapshotIdInput: string;
```

- *Type:* string

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput"></a>

```typescript
public readonly snapshotInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput"></a>

```typescript
public readonly storagePoolInput: string;
```

- *Type:* string

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput"></a>

```typescript
public readonly storageTypeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeStorageVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable"></a>

```typescript
public readonly bootable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor"></a>

```typescript
public readonly hypervisor: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageList`<sup>Required</sup> <a name="imageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList"></a>

```typescript
public readonly imageList: string;
```

- *Type:* string

---

##### `imageListEntry`<sup>Required</sup> <a name="imageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry"></a>

```typescript
public readonly imageListEntry: number;
```

- *Type:* number

---

##### `machineImage`<sup>Required</sup> <a name="machineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage"></a>

```typescript
public readonly machineImage: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly"></a>

```typescript
public readonly readonly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot"></a>

```typescript
public readonly snapshot: string;
```

- *Type:* string

---

##### `snapshotAccount`<sup>Required</sup> <a name="snapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount"></a>

```typescript
public readonly snapshotAccount: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStorageVolumeConfig <a name="ComputeStorageVolumeConfig" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.Initializer"></a>

```typescript
import { computeStorageVolume } from '@cdktf/provider-opc'

const computeStorageVolumeConfig: computeStorageVolume.ComputeStorageVolumeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size">size</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable">bootable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor">hypervisor</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList">imageList</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry">imageListEntry</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage">machineImage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform">platform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly">readonly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot">snapshot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount">snapshotAccount</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool">storagePool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType">storageType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri">uri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#name ComputeStorageVolume#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#size ComputeStorageVolume#size}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable"></a>

```typescript
public readonly bootable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#bootable ComputeStorageVolume#bootable}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#description ComputeStorageVolume#description}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor"></a>

```typescript
public readonly hypervisor: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#id ComputeStorageVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageList`<sup>Optional</sup> <a name="imageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList"></a>

```typescript
public readonly imageList: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list ComputeStorageVolume#image_list}.

---

##### `imageListEntry`<sup>Optional</sup> <a name="imageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry"></a>

```typescript
public readonly imageListEntry: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}.

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage"></a>

```typescript
public readonly machineImage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#managed ComputeStorageVolume#managed}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#platform ComputeStorageVolume#platform}.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly"></a>

```typescript
public readonly readonly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#readonly ComputeStorageVolume#readonly}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot"></a>

```typescript
public readonly snapshot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}.

---

##### `snapshotAccount`<sup>Optional</sup> <a name="snapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount"></a>

```typescript
public readonly snapshotAccount: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#status ComputeStorageVolume#status}.

---

##### `storagePool`<sup>Optional</sup> <a name="storagePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool"></a>

```typescript
public readonly storagePool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType"></a>

```typescript
public readonly storageType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#tags ComputeStorageVolume#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeStorageVolumeTimeouts;
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#timeouts ComputeStorageVolume#timeouts}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#uri ComputeStorageVolume#uri}.

---

### ComputeStorageVolumeTimeouts <a name="ComputeStorageVolumeTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.Initializer"></a>

```typescript
import { computeStorageVolume } from '@cdktf/provider-opc'

const computeStorageVolumeTimeouts: computeStorageVolume.ComputeStorageVolumeTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#create ComputeStorageVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#delete ComputeStorageVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_storage_volume#update ComputeStorageVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStorageVolumeTimeoutsOutputReference <a name="ComputeStorageVolumeTimeoutsOutputReference" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeStorageVolume } from '@cdktf/provider-opc'

new computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeStorageVolumeTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

---



