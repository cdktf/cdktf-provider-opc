# `computeIpNetworkExchange` Submodule <a name="`computeIpNetworkExchange` Submodule" id="@cdktf/provider-opc.computeIpNetworkExchange"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeIpNetworkExchange <a name="ComputeIpNetworkExchange" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange opc_compute_ip_network_exchange}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.Initializer"></a>

```typescript
import { computeIpNetworkExchange } from '@cdktf/provider-opc'

new computeIpNetworkExchange.ComputeIpNetworkExchange(scope: Construct, id: string, config: ComputeIpNetworkExchangeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig">ComputeIpNetworkExchangeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig">ComputeIpNetworkExchangeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeIpNetworkExchange resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isConstruct"></a>

```typescript
import { computeIpNetworkExchange } from '@cdktf/provider-opc'

computeIpNetworkExchange.ComputeIpNetworkExchange.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isTerraformElement"></a>

```typescript
import { computeIpNetworkExchange } from '@cdktf/provider-opc'

computeIpNetworkExchange.ComputeIpNetworkExchange.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isTerraformResource"></a>

```typescript
import { computeIpNetworkExchange } from '@cdktf/provider-opc'

computeIpNetworkExchange.ComputeIpNetworkExchange.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.generateConfigForImport"></a>

```typescript
import { computeIpNetworkExchange } from '@cdktf/provider-opc'

computeIpNetworkExchange.ComputeIpNetworkExchange.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeIpNetworkExchange resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeIpNetworkExchange to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeIpNetworkExchange that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeIpNetworkExchange to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchange.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeIpNetworkExchangeConfig <a name="ComputeIpNetworkExchangeConfig" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.Initializer"></a>

```typescript
import { computeIpNetworkExchange } from '@cdktf/provider-opc'

const computeIpNetworkExchangeConfig: computeIpNetworkExchange.ComputeIpNetworkExchangeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#name ComputeIpNetworkExchange#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#description ComputeIpNetworkExchange#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#id ComputeIpNetworkExchange#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#tags ComputeIpNetworkExchange#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#name ComputeIpNetworkExchange#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#description ComputeIpNetworkExchange#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#id ComputeIpNetworkExchange#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeIpNetworkExchange.ComputeIpNetworkExchangeConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_network_exchange#tags ComputeIpNetworkExchange#tags}.

---



