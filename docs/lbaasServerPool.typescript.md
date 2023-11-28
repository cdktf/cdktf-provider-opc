# `lbaasServerPool` Submodule <a name="`lbaasServerPool` Submodule" id="@cdktf/provider-opc.lbaasServerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasServerPool <a name="LbaasServerPool" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool opc_lbaas_server_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer"></a>

```typescript
import { lbaasServerPool } from '@cdktf/provider-opc'

new lbaasServerPool.LbaasServerPool(scope: Construct, id: string, config: LbaasServerPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig">LbaasServerPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig">LbaasServerPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetVnicSet">resetVnicSet</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck"></a>

```typescript
public putHealthCheck(value: LbaasServerPoolHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetHealthCheck"></a>

```typescript
public resetHealthCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVnicSet` <a name="resetVnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetVnicSet"></a>

```typescript
public resetVnicSet(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbaasServerPool resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct"></a>

```typescript
import { lbaasServerPool } from '@cdktf/provider-opc'

lbaasServerPool.LbaasServerPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement"></a>

```typescript
import { lbaasServerPool } from '@cdktf/provider-opc'

lbaasServerPool.LbaasServerPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource"></a>

```typescript
import { lbaasServerPool } from '@cdktf/provider-opc'

lbaasServerPool.LbaasServerPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.generateConfigForImport"></a>

```typescript
import { lbaasServerPool } from '@cdktf/provider-opc'

lbaasServerPool.LbaasServerPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbaasServerPool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbaasServerPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbaasServerPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbaasServerPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.consumers">consumers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference">LbaasServerPoolHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.operationDetails">operationDetails</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.status">status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancerInput">loadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.serversInput">serversInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSetInput">vnicSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.servers">servers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSet">vnicSet</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.consumers"></a>

```typescript
public readonly consumers: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheck"></a>

```typescript
public readonly healthCheck: LbaasServerPoolHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference">LbaasServerPoolHealthCheckOutputReference</a>

---

##### `operationDetails`<sup>Required</sup> <a name="operationDetails" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.operationDetails"></a>

```typescript
public readonly operationDetails: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.status"></a>

```typescript
public readonly status: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheckInput"></a>

```typescript
public readonly healthCheckInput: LbaasServerPoolHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.serversInput"></a>

```typescript
public readonly serversInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `vnicSetInput`<sup>Optional</sup> <a name="vnicSetInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSetInput"></a>

```typescript
public readonly vnicSetInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.servers"></a>

```typescript
public readonly servers: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `vnicSet`<sup>Required</sup> <a name="vnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSet"></a>

```typescript
public readonly vnicSet: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasServerPoolConfig <a name="LbaasServerPoolConfig" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.Initializer"></a>

```typescript
import { lbaasServerPool } from '@cdktf/provider-opc'

const lbaasServerPoolConfig: lbaasServerPool.LbaasServerPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#name LbaasServerPool#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.servers">servers</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#servers LbaasServerPool#servers}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#id LbaasServerPool#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#tags LbaasServerPool#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.vnicSet">vnicSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#name LbaasServerPool#name}.

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.servers"></a>

```typescript
public readonly servers: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#servers LbaasServerPool#servers}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.healthCheck"></a>

```typescript
public readonly healthCheck: LbaasServerPoolHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#health_check LbaasServerPool#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#id LbaasServerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#tags LbaasServerPool#tags}.

---

##### `vnicSet`<sup>Optional</sup> <a name="vnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.vnicSet"></a>

```typescript
public readonly vnicSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}.

---

### LbaasServerPoolHealthCheck <a name="LbaasServerPoolHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.Initializer"></a>

```typescript
import { lbaasServerPool } from '@cdktf/provider-opc'

const lbaasServerPoolHealthCheck: lbaasServerPool.LbaasServerPoolHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.acceptedReturnCodes">acceptedReturnCodes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#interval LbaasServerPool#interval}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#path LbaasServerPool#path}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#timeout LbaasServerPool#timeout}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#type LbaasServerPool#type}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}. |

---

##### `acceptedReturnCodes`<sup>Optional</sup> <a name="acceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.acceptedReturnCodes"></a>

```typescript
public readonly acceptedReturnCodes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#interval LbaasServerPool#interval}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#path LbaasServerPool#path}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#timeout LbaasServerPool#timeout}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#type LbaasServerPool#type}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasServerPoolHealthCheckOutputReference <a name="LbaasServerPoolHealthCheckOutputReference" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer"></a>

```typescript
import { lbaasServerPool } from '@cdktf/provider-opc'

new lbaasServerPool.LbaasServerPoolHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetAcceptedReturnCodes">resetAcceptedReturnCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetType">resetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceptedReturnCodes` <a name="resetAcceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetAcceptedReturnCodes"></a>

```typescript
public resetAcceptedReturnCodes(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetHealthyThreshold"></a>

```typescript
public resetHealthyThreshold(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetType"></a>

```typescript
public resetType(): void
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```typescript
public resetUnhealthyThreshold(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodesInput">acceptedReturnCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodes">acceptedReturnCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `acceptedReturnCodesInput`<sup>Optional</sup> <a name="acceptedReturnCodesInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodesInput"></a>

```typescript
public readonly acceptedReturnCodesInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `acceptedReturnCodes`<sup>Required</sup> <a name="acceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodes"></a>

```typescript
public readonly acceptedReturnCodes: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: LbaasServerPoolHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---



