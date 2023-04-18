# `data_opc_compute_storage_volume_snapshot`

Refer to the Terraform Registory for docs: [`data_opc_compute_storage_volume_snapshot`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot).

# `dataOpcComputeStorageVolumeSnapshot` Submodule <a name="`dataOpcComputeStorageVolumeSnapshot` Submodule" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeStorageVolumeSnapshot <a name="DataOpcComputeStorageVolumeSnapshot" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot opc_compute_storage_volume_snapshot}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer"></a>

```typescript
import { dataOpcComputeStorageVolumeSnapshot } from '@cdktf/provider-opc'

new dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot(scope: Construct, id: string, config: DataOpcComputeStorageVolumeSnapshotConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig">DataOpcComputeStorageVolumeSnapshotConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig">DataOpcComputeStorageVolumeSnapshotConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct"></a>

```typescript
import { dataOpcComputeStorageVolumeSnapshot } from '@cdktf/provider-opc'

dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement"></a>

```typescript
import { dataOpcComputeStorageVolumeSnapshot } from '@cdktf/provider-opc'

dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource"></a>

```typescript
import { dataOpcComputeStorageVolumeSnapshot } from '@cdktf/provider-opc'

dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.collocated">collocated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.machineImageName">machineImageName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.parentVolumeBootable">parentVolumeBootable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.property">property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.size">size</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotId">snapshotId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotTimestamp">snapshotTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.startTimestamp">startTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusDetail">statusDetail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusTimestamp">statusTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.volumeName">volumeName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `collocated`<sup>Required</sup> <a name="collocated" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.collocated"></a>

```typescript
public readonly collocated: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `machineImageName`<sup>Required</sup> <a name="machineImageName" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.machineImageName"></a>

```typescript
public readonly machineImageName: string;
```

- *Type:* string

---

##### `parentVolumeBootable`<sup>Required</sup> <a name="parentVolumeBootable" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.parentVolumeBootable"></a>

```typescript
public readonly parentVolumeBootable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.property"></a>

```typescript
public readonly property: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.size"></a>

```typescript
public readonly size: string;
```

- *Type:* string

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotId"></a>

```typescript
public readonly snapshotId: string;
```

- *Type:* string

---

##### `snapshotTimestamp`<sup>Required</sup> <a name="snapshotTimestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.snapshotTimestamp"></a>

```typescript
public readonly snapshotTimestamp: string;
```

- *Type:* string

---

##### `startTimestamp`<sup>Required</sup> <a name="startTimestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.startTimestamp"></a>

```typescript
public readonly startTimestamp: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusDetail`<sup>Required</sup> <a name="statusDetail" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusDetail"></a>

```typescript
public readonly statusDetail: string;
```

- *Type:* string

---

##### `statusTimestamp`<sup>Required</sup> <a name="statusTimestamp" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.statusTimestamp"></a>

```typescript
public readonly statusTimestamp: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `volumeName`<sup>Required</sup> <a name="volumeName" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.volumeName"></a>

```typescript
public readonly volumeName: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshot.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeStorageVolumeSnapshotConfig <a name="DataOpcComputeStorageVolumeSnapshotConfig" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.Initializer"></a>

```typescript
import { dataOpcComputeStorageVolumeSnapshot } from '@cdktf/provider-opc'

const dataOpcComputeStorageVolumeSnapshotConfig: dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#name DataOpcComputeStorageVolumeSnapshot#name}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#id DataOpcComputeStorageVolumeSnapshot#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#name DataOpcComputeStorageVolumeSnapshot#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeStorageVolumeSnapshot.DataOpcComputeStorageVolumeSnapshotConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_storage_volume_snapshot#id DataOpcComputeStorageVolumeSnapshot#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



