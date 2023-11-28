# `dataOpcComputeImageListEntry` Submodule <a name="`dataOpcComputeImageListEntry` Submodule" id="@cdktf/provider-opc.dataOpcComputeImageListEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpcComputeImageListEntry <a name="DataOpcComputeImageListEntry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry opc_compute_image_list_entry}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer"></a>

```typescript
import { dataOpcComputeImageListEntry } from '@cdktf/provider-opc'

new dataOpcComputeImageListEntry.DataOpcComputeImageListEntry(scope: Construct, id: string, config: DataOpcComputeImageListEntryConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig">DataOpcComputeImageListEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig">DataOpcComputeImageListEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetEntry">resetEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEntry` <a name="resetEntry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetEntry"></a>

```typescript
public resetEntry(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpcComputeImageListEntry resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isConstruct"></a>

```typescript
import { dataOpcComputeImageListEntry } from '@cdktf/provider-opc'

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformElement"></a>

```typescript
import { dataOpcComputeImageListEntry } from '@cdktf/provider-opc'

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformDataSource"></a>

```typescript
import { dataOpcComputeImageListEntry } from '@cdktf/provider-opc'

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport"></a>

```typescript
import { dataOpcComputeImageListEntry } from '@cdktf/provider-opc'

dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpcComputeImageListEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpcComputeImageListEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpcComputeImageListEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpcComputeImageListEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.machineImages">machineImages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.entryInput">entryInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.imageListInput">imageListInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.versionInput">versionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.entry">entry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.imageList">imageList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.version">version</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `machineImages`<sup>Required</sup> <a name="machineImages" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.machineImages"></a>

```typescript
public readonly machineImages: string[];
```

- *Type:* string[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `entryInput`<sup>Optional</sup> <a name="entryInput" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.entryInput"></a>

```typescript
public readonly entryInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageListInput`<sup>Optional</sup> <a name="imageListInput" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.imageListInput"></a>

```typescript
public readonly imageListInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.versionInput"></a>

```typescript
public readonly versionInput: number;
```

- *Type:* number

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.entry"></a>

```typescript
public readonly entry: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageList`<sup>Required</sup> <a name="imageList" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.imageList"></a>

```typescript
public readonly imageList: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntry.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpcComputeImageListEntryConfig <a name="DataOpcComputeImageListEntryConfig" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.Initializer"></a>

```typescript
import { dataOpcComputeImageListEntry } from '@cdktf/provider-opc'

const dataOpcComputeImageListEntryConfig: dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.imageList">imageList</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#image_list DataOpcComputeImageListEntry#image_list}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.version">version</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#version DataOpcComputeImageListEntry#version}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.entry">entry</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#entry DataOpcComputeImageListEntry#entry}. |
| <code><a href="#@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#id DataOpcComputeImageListEntry#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `imageList`<sup>Required</sup> <a name="imageList" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.imageList"></a>

```typescript
public readonly imageList: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#image_list DataOpcComputeImageListEntry#image_list}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.version"></a>

```typescript
public readonly version: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#version DataOpcComputeImageListEntry#version}.

---

##### `entry`<sup>Optional</sup> <a name="entry" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.entry"></a>

```typescript
public readonly entry: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#entry DataOpcComputeImageListEntry#entry}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.dataOpcComputeImageListEntry.DataOpcComputeImageListEntryConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/data-sources/compute_image_list_entry#id DataOpcComputeImageListEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



