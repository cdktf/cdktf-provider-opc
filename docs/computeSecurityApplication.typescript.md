# `computeSecurityApplication` Submodule <a name="`computeSecurityApplication` Submodule" id="@cdktf/provider-opc.computeSecurityApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityApplication <a name="ComputeSecurityApplication" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application opc_compute_security_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.Initializer"></a>

```typescript
import { computeSecurityApplication } from '@cdktf/provider-opc'

new computeSecurityApplication.ComputeSecurityApplication(scope: Construct, id: string, config: ComputeSecurityApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig">ComputeSecurityApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig">ComputeSecurityApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetDport">resetDport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetIcmpcode">resetIcmpcode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetIcmptype">resetIcmptype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDport` <a name="resetDport" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetDport"></a>

```typescript
public resetDport(): void
```

##### `resetIcmpcode` <a name="resetIcmpcode" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetIcmpcode"></a>

```typescript
public resetIcmpcode(): void
```

##### `resetIcmptype` <a name="resetIcmptype" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetIcmptype"></a>

```typescript
public resetIcmptype(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeSecurityApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isConstruct"></a>

```typescript
import { computeSecurityApplication } from '@cdktf/provider-opc'

computeSecurityApplication.ComputeSecurityApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isTerraformElement"></a>

```typescript
import { computeSecurityApplication } from '@cdktf/provider-opc'

computeSecurityApplication.ComputeSecurityApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isTerraformResource"></a>

```typescript
import { computeSecurityApplication } from '@cdktf/provider-opc'

computeSecurityApplication.ComputeSecurityApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.generateConfigForImport"></a>

```typescript
import { computeSecurityApplication } from '@cdktf/provider-opc'

computeSecurityApplication.ComputeSecurityApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ComputeSecurityApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ComputeSecurityApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ComputeSecurityApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ComputeSecurityApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.dportInput">dportInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.icmpcodeInput">icmpcodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.icmptypeInput">icmptypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.dport">dport</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.icmpcode">icmpcode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.icmptype">icmptype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dportInput`<sup>Optional</sup> <a name="dportInput" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.dportInput"></a>

```typescript
public readonly dportInput: string;
```

- *Type:* string

---

##### `icmpcodeInput`<sup>Optional</sup> <a name="icmpcodeInput" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.icmpcodeInput"></a>

```typescript
public readonly icmpcodeInput: string;
```

- *Type:* string

---

##### `icmptypeInput`<sup>Optional</sup> <a name="icmptypeInput" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.icmptypeInput"></a>

```typescript
public readonly icmptypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dport`<sup>Required</sup> <a name="dport" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.dport"></a>

```typescript
public readonly dport: string;
```

- *Type:* string

---

##### `icmpcode`<sup>Required</sup> <a name="icmpcode" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.icmpcode"></a>

```typescript
public readonly icmpcode: string;
```

- *Type:* string

---

##### `icmptype`<sup>Required</sup> <a name="icmptype" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.icmptype"></a>

```typescript
public readonly icmptype: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityApplicationConfig <a name="ComputeSecurityApplicationConfig" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.Initializer"></a>

```typescript
import { computeSecurityApplication } from '@cdktf/provider-opc'

const computeSecurityApplicationConfig: computeSecurityApplication.ComputeSecurityApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#name ComputeSecurityApplication#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#protocol ComputeSecurityApplication#protocol}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#description ComputeSecurityApplication#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.dport">dport</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#dport ComputeSecurityApplication#dport}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.icmpcode">icmpcode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#icmpcode ComputeSecurityApplication#icmpcode}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.icmptype">icmptype</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#icmptype ComputeSecurityApplication#icmptype}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#id ComputeSecurityApplication#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#name ComputeSecurityApplication#name}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#protocol ComputeSecurityApplication#protocol}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#description ComputeSecurityApplication#description}.

---

##### `dport`<sup>Optional</sup> <a name="dport" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.dport"></a>

```typescript
public readonly dport: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#dport ComputeSecurityApplication#dport}.

---

##### `icmpcode`<sup>Optional</sup> <a name="icmpcode" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.icmpcode"></a>

```typescript
public readonly icmpcode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#icmpcode ComputeSecurityApplication#icmpcode}.

---

##### `icmptype`<sup>Optional</sup> <a name="icmptype" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.icmptype"></a>

```typescript
public readonly icmptype: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#icmptype ComputeSecurityApplication#icmptype}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityApplication.ComputeSecurityApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/compute_security_application#id ComputeSecurityApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



