# `computeSecurityProtocol` Submodule <a name="`computeSecurityProtocol` Submodule" id="@cdktf/provider-opc.computeSecurityProtocol"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityProtocol <a name="ComputeSecurityProtocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol opc_compute_security_protocol}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer"></a>

```typescript
import { computeSecurityProtocol } from '@cdktf/provider-opc'

new computeSecurityProtocol.ComputeSecurityProtocol(scope: Construct, id: string, config: ComputeSecurityProtocolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig">ComputeSecurityProtocolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig">ComputeSecurityProtocolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetDstPorts">resetDstPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetIpProtocol">resetIpProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetSrcPorts">resetSrcPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDstPorts` <a name="resetDstPorts" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetDstPorts"></a>

```typescript
public resetDstPorts(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIpProtocol` <a name="resetIpProtocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetIpProtocol"></a>

```typescript
public resetIpProtocol(): void
```

##### `resetSrcPorts` <a name="resetSrcPorts" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetSrcPorts"></a>

```typescript
public resetSrcPorts(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isConstruct"></a>

```typescript
import { computeSecurityProtocol } from '@cdktf/provider-opc'

computeSecurityProtocol.ComputeSecurityProtocol.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformElement"></a>

```typescript
import { computeSecurityProtocol } from '@cdktf/provider-opc'

computeSecurityProtocol.ComputeSecurityProtocol.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformResource"></a>

```typescript
import { computeSecurityProtocol } from '@cdktf/provider-opc'

computeSecurityProtocol.ComputeSecurityProtocol.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dstPortsInput">dstPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.ipProtocolInput">ipProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.srcPortsInput">srcPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dstPorts">dstPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.srcPorts">srcPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dstPortsInput`<sup>Optional</sup> <a name="dstPortsInput" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dstPortsInput"></a>

```typescript
public readonly dstPortsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ipProtocolInput`<sup>Optional</sup> <a name="ipProtocolInput" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.ipProtocolInput"></a>

```typescript
public readonly ipProtocolInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `srcPortsInput`<sup>Optional</sup> <a name="srcPortsInput" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.srcPortsInput"></a>

```typescript
public readonly srcPortsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dstPorts`<sup>Required</sup> <a name="dstPorts" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.dstPorts"></a>

```typescript
public readonly dstPorts: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipProtocol`<sup>Required</sup> <a name="ipProtocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `srcPorts`<sup>Required</sup> <a name="srcPorts" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.srcPorts"></a>

```typescript
public readonly srcPorts: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocol.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityProtocolConfig <a name="ComputeSecurityProtocolConfig" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.Initializer"></a>

```typescript
import { computeSecurityProtocol } from '@cdktf/provider-opc'

const computeSecurityProtocolConfig: computeSecurityProtocol.ComputeSecurityProtocolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#name ComputeSecurityProtocol#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#description ComputeSecurityProtocol#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.dstPorts">dstPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#dst_ports ComputeSecurityProtocol#dst_ports}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#id ComputeSecurityProtocol#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.ipProtocol">ipProtocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#ip_protocol ComputeSecurityProtocol#ip_protocol}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.srcPorts">srcPorts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#src_ports ComputeSecurityProtocol#src_ports}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#tags ComputeSecurityProtocol#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#name ComputeSecurityProtocol#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#description ComputeSecurityProtocol#description}.

---

##### `dstPorts`<sup>Optional</sup> <a name="dstPorts" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.dstPorts"></a>

```typescript
public readonly dstPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#dst_ports ComputeSecurityProtocol#dst_ports}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#id ComputeSecurityProtocol#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipProtocol`<sup>Optional</sup> <a name="ipProtocol" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.ipProtocol"></a>

```typescript
public readonly ipProtocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#ip_protocol ComputeSecurityProtocol#ip_protocol}.

---

##### `srcPorts`<sup>Optional</sup> <a name="srcPorts" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.srcPorts"></a>

```typescript
public readonly srcPorts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#src_ports ComputeSecurityProtocol#src_ports}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityProtocol.ComputeSecurityProtocolConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_protocol#tags ComputeSecurityProtocol#tags}.

---



