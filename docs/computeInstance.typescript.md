# `computeInstance` Submodule <a name="`computeInstance` Submodule" id="@cdktf/provider-opc.computeInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeInstance <a name="ComputeInstance" id="@cdktf/provider-opc.computeInstance.ComputeInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance opc_compute_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

new computeInstance.ComputeInstance(scope: Construct, id: string, config: ComputeInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig">ComputeInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeInstance.ComputeInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig">ComputeInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo">putNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetBootOrder">resetBootOrder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetDesiredState">resetDesiredState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetHostname">resetHostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetImageList">resetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetInstanceAttributes">resetInstanceAttributes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetNetworkingInfo">resetNetworkingInfo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetReverseDns">resetReverseDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetSshKeys">resetSshKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetStorage">resetStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeInstance.ComputeInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeInstance.ComputeInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putNetworkingInfo` <a name="putNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo"></a>

```typescript
public putNetworkingInfo(value: IResolvable | ComputeInstanceNetworkingInfo[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putNetworkingInfo.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>[]

---

##### `putStorage` <a name="putStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage"></a>

```typescript
public putStorage(value: IResolvable | ComputeInstanceStorage[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putStorage.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: ComputeInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeInstance.ComputeInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

---

##### `resetBootOrder` <a name="resetBootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetBootOrder"></a>

```typescript
public resetBootOrder(): void
```

##### `resetDesiredState` <a name="resetDesiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetDesiredState"></a>

```typescript
public resetDesiredState(): void
```

##### `resetHostname` <a name="resetHostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetHostname"></a>

```typescript
public resetHostname(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetImageList` <a name="resetImageList" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetImageList"></a>

```typescript
public resetImageList(): void
```

##### `resetInstanceAttributes` <a name="resetInstanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetInstanceAttributes"></a>

```typescript
public resetInstanceAttributes(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetNetworkingInfo` <a name="resetNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetNetworkingInfo"></a>

```typescript
public resetNetworkingInfo(): void
```

##### `resetReverseDns` <a name="resetReverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetReverseDns"></a>

```typescript
public resetReverseDns(): void
```

##### `resetSshKeys` <a name="resetSshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetSshKeys"></a>

```typescript
public resetSshKeys(): void
```

##### `resetStorage` <a name="resetStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetStorage"></a>

```typescript
public resetStorage(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

computeInstance.ComputeInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

computeInstance.ComputeInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

computeInstance.ComputeInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeInstance.ComputeInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

computeInstance.ComputeInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.attributes">attributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.entry">entry</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqdn">fqdn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageFormat">imageFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfo">networkingInfo</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList">ComputeInstanceNetworkingInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.placementRequirements">placementRequirements</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.platform">platform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.priority">priority</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.quotaReservation">quotaReservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.relationships">relationships</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.resolvers">resolvers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.site">site</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.startTime">startTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.storage">storage</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList">ComputeInstanceStorageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference">ComputeInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.vcable">vcable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.virtio">virtio</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.vncAddress">vncAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrderInput">bootOrderInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredStateInput">desiredStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostnameInput">hostnameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageListInput">imageListInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributesInput">instanceAttributesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfoInput">networkingInfoInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDnsInput">reverseDnsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.shapeInput">shapeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeysInput">sshKeysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.storageInput">storageInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrder">bootOrder</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredState">desiredState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostname">hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageList">imageList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributes">instanceAttributes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDns">reverseDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.shape">shape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `attributes`<sup>Required</sup> <a name="attributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.attributes"></a>

```typescript
public readonly attributes: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `entry`<sup>Required</sup> <a name="entry" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.entry"></a>

```typescript
public readonly entry: number;
```

- *Type:* number

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.fqdn"></a>

```typescript
public readonly fqdn: string;
```

- *Type:* string

---

##### `imageFormat`<sup>Required</sup> <a name="imageFormat" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageFormat"></a>

```typescript
public readonly imageFormat: string;
```

- *Type:* string

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `networkingInfo`<sup>Required</sup> <a name="networkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfo"></a>

```typescript
public readonly networkingInfo: ComputeInstanceNetworkingInfoList;
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList">ComputeInstanceNetworkingInfoList</a>

---

##### `placementRequirements`<sup>Required</sup> <a name="placementRequirements" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.placementRequirements"></a>

```typescript
public readonly placementRequirements: string[];
```

- *Type:* string[]

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.platform"></a>

```typescript
public readonly platform: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.priority"></a>

```typescript
public readonly priority: string;
```

- *Type:* string

---

##### `quotaReservation`<sup>Required</sup> <a name="quotaReservation" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.quotaReservation"></a>

```typescript
public readonly quotaReservation: string;
```

- *Type:* string

---

##### `relationships`<sup>Required</sup> <a name="relationships" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.relationships"></a>

```typescript
public readonly relationships: string[];
```

- *Type:* string[]

---

##### `resolvers`<sup>Required</sup> <a name="resolvers" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.resolvers"></a>

```typescript
public readonly resolvers: string[];
```

- *Type:* string[]

---

##### `site`<sup>Required</sup> <a name="site" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.site"></a>

```typescript
public readonly site: string;
```

- *Type:* string

---

##### `startTime`<sup>Required</sup> <a name="startTime" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.startTime"></a>

```typescript
public readonly startTime: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.storage"></a>

```typescript
public readonly storage: ComputeInstanceStorageList;
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList">ComputeInstanceStorageList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference">ComputeInstanceTimeoutsOutputReference</a>

---

##### `vcable`<sup>Required</sup> <a name="vcable" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.vcable"></a>

```typescript
public readonly vcable: string;
```

- *Type:* string

---

##### `virtio`<sup>Required</sup> <a name="virtio" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.virtio"></a>

```typescript
public readonly virtio: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `vncAddress`<sup>Required</sup> <a name="vncAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.vncAddress"></a>

```typescript
public readonly vncAddress: string;
```

- *Type:* string

---

##### `bootOrderInput`<sup>Optional</sup> <a name="bootOrderInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrderInput"></a>

```typescript
public readonly bootOrderInput: number[];
```

- *Type:* number[]

---

##### `desiredStateInput`<sup>Optional</sup> <a name="desiredStateInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredStateInput"></a>

```typescript
public readonly desiredStateInput: string;
```

- *Type:* string

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostnameInput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `imageListInput`<sup>Optional</sup> <a name="imageListInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageListInput"></a>

```typescript
public readonly imageListInput: string;
```

- *Type:* string

---

##### `instanceAttributesInput`<sup>Optional</sup> <a name="instanceAttributesInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributesInput"></a>

```typescript
public readonly instanceAttributesInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkingInfoInput`<sup>Optional</sup> <a name="networkingInfoInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.networkingInfoInput"></a>

```typescript
public readonly networkingInfoInput: IResolvable | ComputeInstanceNetworkingInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>[]

---

##### `reverseDnsInput`<sup>Optional</sup> <a name="reverseDnsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDnsInput"></a>

```typescript
public readonly reverseDnsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.shapeInput"></a>

```typescript
public readonly shapeInput: string;
```

- *Type:* string

---

##### `sshKeysInput`<sup>Optional</sup> <a name="sshKeysInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeysInput"></a>

```typescript
public readonly sshKeysInput: string[];
```

- *Type:* string[]

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.storageInput"></a>

```typescript
public readonly storageInput: IResolvable | ComputeInstanceStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | ComputeInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

---

##### `bootOrder`<sup>Required</sup> <a name="bootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.bootOrder"></a>

```typescript
public readonly bootOrder: number[];
```

- *Type:* number[]

---

##### `desiredState`<sup>Required</sup> <a name="desiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `imageList`<sup>Required</sup> <a name="imageList" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.imageList"></a>

```typescript
public readonly imageList: string;
```

- *Type:* string

---

##### `instanceAttributes`<sup>Required</sup> <a name="instanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.instanceAttributes"></a>

```typescript
public readonly instanceAttributes: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reverseDns`<sup>Required</sup> <a name="reverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.reverseDns"></a>

```typescript
public readonly reverseDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

---

##### `sshKeys`<sup>Required</sup> <a name="sshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeInstance.ComputeInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeInstanceConfig <a name="ComputeInstanceConfig" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

const computeInstanceConfig: computeInstance.ComputeInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.shape">shape</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.bootOrder">bootOrder</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.desiredState">desiredState</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.hostname">hostname</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.imageList">imageList</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.instanceAttributes">instanceAttributes</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.networkingInfo">networkingInfo</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>[]</code> | networking_info block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.reverseDns">reverseDns</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.sshKeys">sshKeys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.storage">storage</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>[]</code> | storage block. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name ComputeInstance#name}.

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.shape"></a>

```typescript
public readonly shape: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shape ComputeInstance#shape}.

---

##### `bootOrder`<sup>Optional</sup> <a name="bootOrder" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.bootOrder"></a>

```typescript
public readonly bootOrder: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#boot_order ComputeInstance#boot_order}.

---

##### `desiredState`<sup>Optional</sup> <a name="desiredState" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.desiredState"></a>

```typescript
public readonly desiredState: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#desired_state ComputeInstance#desired_state}.

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.hostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#hostname ComputeInstance#hostname}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#id ComputeInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageList`<sup>Optional</sup> <a name="imageList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.imageList"></a>

```typescript
public readonly imageList: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#image_list ComputeInstance#image_list}.

---

##### `instanceAttributes`<sup>Optional</sup> <a name="instanceAttributes" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.instanceAttributes"></a>

```typescript
public readonly instanceAttributes: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#instance_attributes ComputeInstance#instance_attributes}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#label ComputeInstance#label}.

---

##### `networkingInfo`<sup>Optional</sup> <a name="networkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.networkingInfo"></a>

```typescript
public readonly networkingInfo: IResolvable | ComputeInstanceNetworkingInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>[]

networking_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#networking_info ComputeInstance#networking_info}

---

##### `reverseDns`<sup>Optional</sup> <a name="reverseDns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.reverseDns"></a>

```typescript
public readonly reverseDns: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#reverse_dns ComputeInstance#reverse_dns}.

---

##### `sshKeys`<sup>Optional</sup> <a name="sshKeys" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.sshKeys"></a>

```typescript
public readonly sshKeys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ssh_keys ComputeInstance#ssh_keys}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.storage"></a>

```typescript
public readonly storage: IResolvable | ComputeInstanceStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>[]

storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#storage ComputeInstance#storage}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#tags ComputeInstance#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ComputeInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#timeouts ComputeInstance#timeouts}

---

### ComputeInstanceNetworkingInfo <a name="ComputeInstanceNetworkingInfo" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

const computeInstanceNetworkingInfo: computeInstance.ComputeInstanceNetworkingInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.index">index</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.dns">dns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipAddress">ipAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipNetwork">ipNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.isDefaultGateway">isDefaultGateway</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.macAddress">macAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nameServers">nameServers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nat">nat</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.searchDomains">searchDomains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.secLists">secLists</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.sharedNetwork">sharedNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnic">vnic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnicSets">vnicSets</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.index"></a>

```typescript
public readonly index: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}.

---

##### `dns`<sup>Optional</sup> <a name="dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.dns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#dns ComputeInstance#dns}.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_address ComputeInstance#ip_address}.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.ipNetwork"></a>

```typescript
public readonly ipNetwork: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#ip_network ComputeInstance#ip_network}.

---

##### `isDefaultGateway`<sup>Optional</sup> <a name="isDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.isDefaultGateway"></a>

```typescript
public readonly isDefaultGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#is_default_gateway ComputeInstance#is_default_gateway}.

---

##### `macAddress`<sup>Optional</sup> <a name="macAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#mac_address ComputeInstance#mac_address}.

---

##### `nameServers`<sup>Optional</sup> <a name="nameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nameServers"></a>

```typescript
public readonly nameServers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#name_servers ComputeInstance#name_servers}.

---

##### `nat`<sup>Optional</sup> <a name="nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.nat"></a>

```typescript
public readonly nat: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#nat ComputeInstance#nat}.

---

##### `searchDomains`<sup>Optional</sup> <a name="searchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.searchDomains"></a>

```typescript
public readonly searchDomains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#search_domains ComputeInstance#search_domains}.

---

##### `secLists`<sup>Optional</sup> <a name="secLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.secLists"></a>

```typescript
public readonly secLists: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#sec_lists ComputeInstance#sec_lists}.

---

##### `sharedNetwork`<sup>Optional</sup> <a name="sharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.sharedNetwork"></a>

```typescript
public readonly sharedNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#shared_network ComputeInstance#shared_network}.

---

##### `vnic`<sup>Optional</sup> <a name="vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnic"></a>

```typescript
public readonly vnic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic ComputeInstance#vnic}.

---

##### `vnicSets`<sup>Optional</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo.property.vnicSets"></a>

```typescript
public readonly vnicSets: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#vnic_sets ComputeInstance#vnic_sets}.

---

### ComputeInstanceStorage <a name="ComputeInstanceStorage" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

const computeInstanceStorage: computeInstance.ComputeInstanceStorage = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.index">index</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.volume">volume</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}. |

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.index"></a>

```typescript
public readonly index: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#index ComputeInstance#index}.

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorage.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#volume ComputeInstance#volume}.

---

### ComputeInstanceTimeouts <a name="ComputeInstanceTimeouts" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

const computeInstanceTimeouts: computeInstance.ComputeInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#create ComputeInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#delete ComputeInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_instance#update ComputeInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeInstanceNetworkingInfoList <a name="ComputeInstanceNetworkingInfoList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

new computeInstance.ComputeInstanceNetworkingInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get"></a>

```typescript
public get(index: number): ComputeInstanceNetworkingInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceNetworkingInfo[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>[]

---


### ComputeInstanceNetworkingInfoOutputReference <a name="ComputeInstanceNetworkingInfoOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

new computeInstance.ComputeInstanceNetworkingInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetDns">resetDns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpNetwork">resetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIsDefaultGateway">resetIsDefaultGateway</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetMacAddress">resetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNameServers">resetNameServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNat">resetNat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSearchDomains">resetSearchDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSecLists">resetSecLists</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSharedNetwork">resetSharedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnic">resetVnic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnicSets">resetVnicSets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDns` <a name="resetDns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetDns"></a>

```typescript
public resetDns(): void
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpAddress"></a>

```typescript
public resetIpAddress(): void
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIpNetwork"></a>

```typescript
public resetIpNetwork(): void
```

##### `resetIsDefaultGateway` <a name="resetIsDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetIsDefaultGateway"></a>

```typescript
public resetIsDefaultGateway(): void
```

##### `resetMacAddress` <a name="resetMacAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetMacAddress"></a>

```typescript
public resetMacAddress(): void
```

##### `resetNameServers` <a name="resetNameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNameServers"></a>

```typescript
public resetNameServers(): void
```

##### `resetNat` <a name="resetNat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetNat"></a>

```typescript
public resetNat(): void
```

##### `resetSearchDomains` <a name="resetSearchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSearchDomains"></a>

```typescript
public resetSearchDomains(): void
```

##### `resetSecLists` <a name="resetSecLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSecLists"></a>

```typescript
public resetSecLists(): void
```

##### `resetSharedNetwork` <a name="resetSharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetSharedNetwork"></a>

```typescript
public resetSharedNetwork(): void
```

##### `resetVnic` <a name="resetVnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnic"></a>

```typescript
public resetVnic(): void
```

##### `resetVnicSets` <a name="resetVnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.resetVnicSets"></a>

```typescript
public resetVnicSets(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dnsInput">dnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.indexInput">indexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddressInput">ipAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetworkInput">ipNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput">isDefaultGatewayInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddressInput">macAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServersInput">nameServersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.natInput">natInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomainsInput">searchDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secListsInput">secListsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetworkInput">sharedNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicInput">vnicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSetsInput">vnicSetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dns">dns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.index">index</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddress">ipAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetwork">ipNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGateway">isDefaultGateway</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddress">macAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServers">nameServers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nat">nat</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomains">searchDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secLists">secLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetwork">sharedNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnic">vnic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSets">vnicSets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dnsInput`<sup>Optional</sup> <a name="dnsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dnsInput"></a>

```typescript
public readonly dnsInput: string[];
```

- *Type:* string[]

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: number;
```

- *Type:* number

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddressInput"></a>

```typescript
public readonly ipAddressInput: string;
```

- *Type:* string

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetworkInput"></a>

```typescript
public readonly ipNetworkInput: string;
```

- *Type:* string

---

##### `isDefaultGatewayInput`<sup>Optional</sup> <a name="isDefaultGatewayInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGatewayInput"></a>

```typescript
public readonly isDefaultGatewayInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `macAddressInput`<sup>Optional</sup> <a name="macAddressInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddressInput"></a>

```typescript
public readonly macAddressInput: string;
```

- *Type:* string

---

##### `nameServersInput`<sup>Optional</sup> <a name="nameServersInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServersInput"></a>

```typescript
public readonly nameServersInput: string[];
```

- *Type:* string[]

---

##### `natInput`<sup>Optional</sup> <a name="natInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.natInput"></a>

```typescript
public readonly natInput: string[];
```

- *Type:* string[]

---

##### `searchDomainsInput`<sup>Optional</sup> <a name="searchDomainsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomainsInput"></a>

```typescript
public readonly searchDomainsInput: string[];
```

- *Type:* string[]

---

##### `secListsInput`<sup>Optional</sup> <a name="secListsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secListsInput"></a>

```typescript
public readonly secListsInput: string[];
```

- *Type:* string[]

---

##### `sharedNetworkInput`<sup>Optional</sup> <a name="sharedNetworkInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetworkInput"></a>

```typescript
public readonly sharedNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnicInput`<sup>Optional</sup> <a name="vnicInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicInput"></a>

```typescript
public readonly vnicInput: string;
```

- *Type:* string

---

##### `vnicSetsInput`<sup>Optional</sup> <a name="vnicSetsInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSetsInput"></a>

```typescript
public readonly vnicSetsInput: string[];
```

- *Type:* string[]

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.dns"></a>

```typescript
public readonly dns: string[];
```

- *Type:* string[]

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.index"></a>

```typescript
public readonly index: number;
```

- *Type:* number

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipAddress"></a>

```typescript
public readonly ipAddress: string;
```

- *Type:* string

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.ipNetwork"></a>

```typescript
public readonly ipNetwork: string;
```

- *Type:* string

---

##### `isDefaultGateway`<sup>Required</sup> <a name="isDefaultGateway" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.isDefaultGateway"></a>

```typescript
public readonly isDefaultGateway: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.macAddress"></a>

```typescript
public readonly macAddress: string;
```

- *Type:* string

---

##### `nameServers`<sup>Required</sup> <a name="nameServers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nameServers"></a>

```typescript
public readonly nameServers: string[];
```

- *Type:* string[]

---

##### `nat`<sup>Required</sup> <a name="nat" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.nat"></a>

```typescript
public readonly nat: string[];
```

- *Type:* string[]

---

##### `searchDomains`<sup>Required</sup> <a name="searchDomains" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.searchDomains"></a>

```typescript
public readonly searchDomains: string[];
```

- *Type:* string[]

---

##### `secLists`<sup>Required</sup> <a name="secLists" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.secLists"></a>

```typescript
public readonly secLists: string[];
```

- *Type:* string[]

---

##### `sharedNetwork`<sup>Required</sup> <a name="sharedNetwork" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.sharedNetwork"></a>

```typescript
public readonly sharedNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnic"></a>

```typescript
public readonly vnic: string;
```

- *Type:* string

---

##### `vnicSets`<sup>Required</sup> <a name="vnicSets" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.vnicSets"></a>

```typescript
public readonly vnicSets: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceNetworkingInfo;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceNetworkingInfo">ComputeInstanceNetworkingInfo</a>

---


### ComputeInstanceStorageList <a name="ComputeInstanceStorageList" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

new computeInstance.ComputeInstanceStorageList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get"></a>

```typescript
public get(index: number): ComputeInstanceStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceStorage[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>[]

---


### ComputeInstanceStorageOutputReference <a name="ComputeInstanceStorageOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

new computeInstance.ComputeInstanceStorageOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.indexInput">indexInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volumeInput">volumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.index">index</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volume">volume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `indexInput`<sup>Optional</sup> <a name="indexInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.indexInput"></a>

```typescript
public readonly indexInput: number;
```

- *Type:* number

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volumeInput"></a>

```typescript
public readonly volumeInput: string;
```

- *Type:* string

---

##### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.index"></a>

```typescript
public readonly index: number;
```

- *Type:* number

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.volume"></a>

```typescript
public readonly volume: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceStorageOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceStorage;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceStorage">ComputeInstanceStorage</a>

---


### ComputeInstanceTimeoutsOutputReference <a name="ComputeInstanceTimeoutsOutputReference" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { computeInstance } from '@cdktf/provider-opc'

new computeInstance.ComputeInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeInstance.ComputeInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | ComputeInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-opc.computeInstance.ComputeInstanceTimeouts">ComputeInstanceTimeouts</a>

---



