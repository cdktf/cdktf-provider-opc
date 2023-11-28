# `lbaasListener` Submodule <a name="`lbaasListener` Submodule" id="@cdktf/provider-opc.lbaasListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasListener <a name="LbaasListener" id="@cdktf/provider-opc.lbaasListener.LbaasListener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener opc_lbaas_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer"></a>

```typescript
import { lbaasListener } from '@cdktf/provider-opc'

new lbaasListener.LbaasListener(scope: Construct, id: string, config: LbaasListenerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig">LbaasListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig">LbaasListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetCertificates">resetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetPathPrefixes">resetPathPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetServerPool">resetServerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.resetVirtualHosts">resetVirtualHosts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.lbaasListener.LbaasListener.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.lbaasListener.LbaasListener.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.lbaasListener.LbaasListener.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.lbaasListener.LbaasListener.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetCertificates` <a name="resetCertificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetCertificates"></a>

```typescript
public resetCertificates(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPathPrefixes` <a name="resetPathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetPathPrefixes"></a>

```typescript
public resetPathPrefixes(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetServerPool` <a name="resetServerPool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetServerPool"></a>

```typescript
public resetServerPool(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVirtualHosts` <a name="resetVirtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetVirtualHosts"></a>

```typescript
public resetVirtualHosts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a LbaasListener resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct"></a>

```typescript
import { lbaasListener } from '@cdktf/provider-opc'

lbaasListener.LbaasListener.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement"></a>

```typescript
import { lbaasListener } from '@cdktf/provider-opc'

lbaasListener.LbaasListener.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource"></a>

```typescript
import { lbaasListener } from '@cdktf/provider-opc'

lbaasListener.LbaasListener.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport"></a>

```typescript
import { lbaasListener } from '@cdktf/provider-opc'

lbaasListener.LbaasListener.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a LbaasListener resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the LbaasListener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing LbaasListener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the LbaasListener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.operationDetails">operationDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.parentListener">parentListener</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.state">state</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocolInput">balancerProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificatesInput">certificatesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancerInput">loadBalancerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixesInput">pathPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.policiesInput">policiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPoolInput">serverPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocolInput">serverProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHostsInput">virtualHostsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocol">balancerProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificates">certificates</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixes">pathPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.policies">policies</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPool">serverPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocol">serverProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHosts">virtualHosts</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `operationDetails`<sup>Required</sup> <a name="operationDetails" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.operationDetails"></a>

```typescript
public readonly operationDetails: string;
```

- *Type:* string

---

##### `parentListener`<sup>Required</sup> <a name="parentListener" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.parentListener"></a>

```typescript
public readonly parentListener: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.state"></a>

```typescript
public readonly state: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `balancerProtocolInput`<sup>Optional</sup> <a name="balancerProtocolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocolInput"></a>

```typescript
public readonly balancerProtocolInput: string;
```

- *Type:* string

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificatesInput"></a>

```typescript
public readonly certificatesInput: string[];
```

- *Type:* string[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathPrefixesInput`<sup>Optional</sup> <a name="pathPrefixesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixesInput"></a>

```typescript
public readonly pathPrefixesInput: string[];
```

- *Type:* string[]

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.policiesInput"></a>

```typescript
public readonly policiesInput: string[];
```

- *Type:* string[]

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `serverPoolInput`<sup>Optional</sup> <a name="serverPoolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPoolInput"></a>

```typescript
public readonly serverPoolInput: string;
```

- *Type:* string

---

##### `serverProtocolInput`<sup>Optional</sup> <a name="serverProtocolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocolInput"></a>

```typescript
public readonly serverProtocolInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `virtualHostsInput`<sup>Optional</sup> <a name="virtualHostsInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHostsInput"></a>

```typescript
public readonly virtualHostsInput: string[];
```

- *Type:* string[]

---

##### `balancerProtocol`<sup>Required</sup> <a name="balancerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocol"></a>

```typescript
public readonly balancerProtocol: string;
```

- *Type:* string

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificates"></a>

```typescript
public readonly certificates: string[];
```

- *Type:* string[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `pathPrefixes`<sup>Required</sup> <a name="pathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixes"></a>

```typescript
public readonly pathPrefixes: string[];
```

- *Type:* string[]

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `serverPool`<sup>Required</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPool"></a>

```typescript
public readonly serverPool: string;
```

- *Type:* string

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocol"></a>

```typescript
public readonly serverProtocol: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `virtualHosts`<sup>Required</sup> <a name="virtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHosts"></a>

```typescript
public readonly virtualHosts: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasListenerConfig <a name="LbaasListenerConfig" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.Initializer"></a>

```typescript
import { lbaasListener } from '@cdktf/provider-opc'

const lbaasListenerConfig: lbaasListener.LbaasListenerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.balancerProtocol">balancerProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.loadBalancer">loadBalancer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#load_balancer LbaasListener#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#name LbaasListener#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#port LbaasListener#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverProtocol">serverProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_protocol LbaasListener#server_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.certificates">certificates</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#certificates LbaasListener#certificates}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#enabled LbaasListener#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#id LbaasListener#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.pathPrefixes">pathPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#path_prefixes LbaasListener#path_prefixes}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.policies">policies</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#policies LbaasListener#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverPool">serverPool</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_pool LbaasListener#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#tags LbaasListener#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.virtualHosts">virtualHosts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `balancerProtocol`<sup>Required</sup> <a name="balancerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.balancerProtocol"></a>

```typescript
public readonly balancerProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}.

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#load_balancer LbaasListener#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#name LbaasListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#port LbaasListener#port}.

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverProtocol"></a>

```typescript
public readonly serverProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_protocol LbaasListener#server_protocol}.

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.certificates"></a>

```typescript
public readonly certificates: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#certificates LbaasListener#certificates}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#enabled LbaasListener#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#id LbaasListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathPrefixes`<sup>Optional</sup> <a name="pathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.pathPrefixes"></a>

```typescript
public readonly pathPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#path_prefixes LbaasListener#path_prefixes}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.policies"></a>

```typescript
public readonly policies: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#policies LbaasListener#policies}.

---

##### `serverPool`<sup>Optional</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverPool"></a>

```typescript
public readonly serverPool: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#server_pool LbaasListener#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#tags LbaasListener#tags}.

---

##### `virtualHosts`<sup>Optional</sup> <a name="virtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.virtualHosts"></a>

```typescript
public readonly virtualHosts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}.

---



