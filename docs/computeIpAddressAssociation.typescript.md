# `computeIpAddressAssociation` Submodule <a name="`computeIpAddressAssociation` Submodule" id="@cdktf/provider-opc.computeIpAddressAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeIpAddressAssociation <a name="ComputeIpAddressAssociation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association opc_compute_ip_address_association}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer"></a>

```typescript
import { computeIpAddressAssociation } from '@cdktf/provider-opc'

new computeIpAddressAssociation.ComputeIpAddressAssociation(scope: Construct, id: string, config: ComputeIpAddressAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig">ComputeIpAddressAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig">ComputeIpAddressAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetIpAddressReservation">resetIpAddressReservation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetVnic">resetVnic</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpAddressReservation` <a name="resetIpAddressReservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetIpAddressReservation"></a>

```typescript
public resetIpAddressReservation(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVnic` <a name="resetVnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.resetVnic"></a>

```typescript
public resetVnic(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeIpAddressAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct"></a>

```typescript
import { computeIpAddressAssociation } from '@cdktf/provider-opc'

computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement"></a>

```typescript
import { computeIpAddressAssociation } from '@cdktf/provider-opc'

computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource"></a>

```typescript
import { computeIpAddressAssociation } from '@cdktf/provider-opc'

computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.generateConfigForImport"></a>

```typescript
import { computeIpAddressAssociation } from '@cdktf/provider-opc'

computeIpAddressAssociation.ComputeIpAddressAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeIpAddressAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeIpAddressAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeIpAddressAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeIpAddressAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservationInput">ipAddressReservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnicInput">vnicInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservation">ipAddressReservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnic">vnic</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipAddressReservationInput`<sup>Optional</sup> <a name="ipAddressReservationInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservationInput"></a>

```typescript
public readonly ipAddressReservationInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `vnicInput`<sup>Optional</sup> <a name="vnicInput" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnicInput"></a>

```typescript
public readonly vnicInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipAddressReservation`<sup>Required</sup> <a name="ipAddressReservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.ipAddressReservation"></a>

```typescript
public readonly ipAddressReservation: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `vnic`<sup>Required</sup> <a name="vnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.vnic"></a>

```typescript
public readonly vnic: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeIpAddressAssociationConfig <a name="ComputeIpAddressAssociationConfig" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.Initializer"></a>

```typescript
import { computeIpAddressAssociation } from '@cdktf/provider-opc'

const computeIpAddressAssociationConfig: computeIpAddressAssociation.ComputeIpAddressAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#name ComputeIpAddressAssociation#name}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#description ComputeIpAddressAssociation#description}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#id ComputeIpAddressAssociation#id}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.ipAddressReservation">ipAddressReservation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#ip_address_reservation ComputeIpAddressAssociation#ip_address_reservation}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#tags ComputeIpAddressAssociation#tags}. |
| <code><a href="#@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.vnic">vnic</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#vnic ComputeIpAddressAssociation#vnic}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#name ComputeIpAddressAssociation#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#description ComputeIpAddressAssociation#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#id ComputeIpAddressAssociation#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddressReservation`<sup>Optional</sup> <a name="ipAddressReservation" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.ipAddressReservation"></a>

```typescript
public readonly ipAddressReservation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#ip_address_reservation ComputeIpAddressAssociation#ip_address_reservation}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#tags ComputeIpAddressAssociation#tags}.

---

##### `vnic`<sup>Optional</sup> <a name="vnic" id="@cdktf/provider-opc.computeIpAddressAssociation.ComputeIpAddressAssociationConfig.property.vnic"></a>

```typescript
public readonly vnic: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_ip_address_association#vnic ComputeIpAddressAssociation#vnic}.

---



