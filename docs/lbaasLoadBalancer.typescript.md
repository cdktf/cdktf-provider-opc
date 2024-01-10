# `lbaasLoadBalancer` Submodule <a name="`lbaasLoadBalancer` Submodule" id="@cdktf/provider-opc.lbaasLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasLoadBalancer <a name="LbaasLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer opc_lbaas_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer"></a>

```typescript
import { lbaasLoadBalancer } from '@cdktf/provider-opc'

new lbaasLoadBalancer.LbaasLoadBalancer(scope: Construct, id: string, config: LbaasLoadBalancerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig">LbaasLoadBalancerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig">LbaasLoadBalancerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetIpNetwork">resetIpNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetParentLoadBalancer">resetParentLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedClients">resetPermittedClients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedMethods">resetPermittedMethods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetServerPool">resetServerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetIpNetwork"></a>

```typescript
public resetIpNetwork(): void
```

##### `resetParentLoadBalancer` <a name="resetParentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetParentLoadBalancer"></a>

```typescript
public resetParentLoadBalancer(): void
```

##### `resetPermittedClients` <a name="resetPermittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedClients"></a>

```typescript
public resetPermittedClients(): void
```

##### `resetPermittedMethods` <a name="resetPermittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedMethods"></a>

```typescript
public resetPermittedMethods(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetServerPool` <a name="resetServerPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetServerPool"></a>

```typescript
public resetServerPool(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbaasLoadBalancer resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct"></a>

```typescript
import { lbaasLoadBalancer } from '@cdktf/provider-opc'

lbaasLoadBalancer.LbaasLoadBalancer.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement"></a>

```typescript
import { lbaasLoadBalancer } from '@cdktf/provider-opc'

lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource"></a>

```typescript
import { lbaasLoadBalancer } from '@cdktf/provider-opc'

lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport"></a>

```typescript
import { lbaasLoadBalancer } from '@cdktf/provider-opc'

lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbaasLoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbaasLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbaasLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbaasLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips">balancerVips</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName">canonicalHostName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable">cloudgateCapable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput">ipNetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput">parentLoadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput">permittedClientsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput">permittedMethodsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput">serverPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork">ipNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer">parentLoadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients">permittedClients</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods">permittedMethods</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool">serverPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `balancerVips`<sup>Required</sup> <a name="balancerVips" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips"></a>

```typescript
public readonly balancerVips: string[];
```

- *Type:* string[]

---

##### `canonicalHostName`<sup>Required</sup> <a name="canonicalHostName" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName"></a>

```typescript
public readonly canonicalHostName: string;
```

- *Type:* string

---

##### `cloudgateCapable`<sup>Required</sup> <a name="cloudgateCapable" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable"></a>

```typescript
public readonly cloudgateCapable: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput"></a>

```typescript
public readonly ipNetworkInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parentLoadBalancerInput`<sup>Optional</sup> <a name="parentLoadBalancerInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput"></a>

```typescript
public readonly parentLoadBalancerInput: string;
```

- *Type:* string

---

##### `permittedClientsInput`<sup>Optional</sup> <a name="permittedClientsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput"></a>

```typescript
public readonly permittedClientsInput: string[];
```

- *Type:* string[]

---

##### `permittedMethodsInput`<sup>Optional</sup> <a name="permittedMethodsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput"></a>

```typescript
public readonly permittedMethodsInput: string[];
```

- *Type:* string[]

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `serverPoolInput`<sup>Optional</sup> <a name="serverPoolInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput"></a>

```typescript
public readonly serverPoolInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork"></a>

```typescript
public readonly ipNetwork: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parentLoadBalancer`<sup>Required</sup> <a name="parentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer"></a>

```typescript
public readonly parentLoadBalancer: string;
```

- *Type:* string

---

##### `permittedClients`<sup>Required</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients"></a>

```typescript
public readonly permittedClients: string[];
```

- *Type:* string[]

---

##### `permittedMethods`<sup>Required</sup> <a name="permittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods"></a>

```typescript
public readonly permittedMethods: string[];
```

- *Type:* string[]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `serverPool`<sup>Required</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool"></a>

```typescript
public readonly serverPool: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasLoadBalancerConfig <a name="LbaasLoadBalancerConfig" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.Initializer"></a>

```typescript
import { lbaasLoadBalancer } from '@cdktf/provider-opc'

const lbaasLoadBalancerConfig: lbaasLoadBalancer.LbaasLoadBalancerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork">ipNetwork</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer">parentLoadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients">permittedClients</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods">permittedMethods</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies">policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool">serverPool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}.

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork"></a>

```typescript
public readonly ipNetwork: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}.

---

##### `parentLoadBalancer`<sup>Optional</sup> <a name="parentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer"></a>

```typescript
public readonly parentLoadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}.

---

##### `permittedClients`<sup>Optional</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients"></a>

```typescript
public readonly permittedClients: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}.

---

##### `permittedMethods`<sup>Optional</sup> <a name="permittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods"></a>

```typescript
public readonly permittedMethods: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}.

---

##### `serverPool`<sup>Optional</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool"></a>

```typescript
public readonly serverPool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}.

---



