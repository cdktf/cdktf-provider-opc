# `computeSecurityRule` Submodule <a name="`computeSecurityRule` Submodule" id="@cdktf/provider-opc.computeSecurityRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeSecurityRule <a name="ComputeSecurityRule" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule opc_compute_security_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer"></a>

```typescript
import { computeSecurityRule } from '@cdktf/provider-opc'

new computeSecurityRule.ComputeSecurityRule(scope: Construct, id: string, config: ComputeSecurityRuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig">ComputeSecurityRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig">ComputeSecurityRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl">resetAcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes">resetDstIpAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet">resetDstVnicSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols">resetSecurityProtocols</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes">resetSrcIpAddressPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet">resetSrcVnicSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAcl` <a name="resetAcl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetAcl"></a>

```typescript
public resetAcl(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDstIpAddressPrefixes` <a name="resetDstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstIpAddressPrefixes"></a>

```typescript
public resetDstIpAddressPrefixes(): void
```

##### `resetDstVnicSet` <a name="resetDstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetDstVnicSet"></a>

```typescript
public resetDstVnicSet(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetId"></a>

```typescript
public resetId(): void
```

##### `resetSecurityProtocols` <a name="resetSecurityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSecurityProtocols"></a>

```typescript
public resetSecurityProtocols(): void
```

##### `resetSrcIpAddressPrefixes` <a name="resetSrcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcIpAddressPrefixes"></a>

```typescript
public resetSrcIpAddressPrefixes(): void
```

##### `resetSrcVnicSet` <a name="resetSrcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetSrcVnicSet"></a>

```typescript
public resetSrcVnicSet(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct"></a>

```typescript
import { computeSecurityRule } from '@cdktf/provider-opc'

computeSecurityRule.ComputeSecurityRule.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement"></a>

```typescript
import { computeSecurityRule } from '@cdktf/provider-opc'

computeSecurityRule.ComputeSecurityRule.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource"></a>

```typescript
import { computeSecurityRule } from '@cdktf/provider-opc'

computeSecurityRule.ComputeSecurityRule.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput">aclInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput">dstIpAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput">dstVnicSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput">flowDirectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput">securityProtocolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput">srcIpAddressPrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput">srcVnicSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl">acl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes">dstIpAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet">dstVnicSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection">flowDirection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols">securityProtocols</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes">srcIpAddressPrefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet">srcVnicSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `aclInput`<sup>Optional</sup> <a name="aclInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.aclInput"></a>

```typescript
public readonly aclInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dstIpAddressPrefixesInput`<sup>Optional</sup> <a name="dstIpAddressPrefixesInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixesInput"></a>

```typescript
public readonly dstIpAddressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `dstVnicSetInput`<sup>Optional</sup> <a name="dstVnicSetInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSetInput"></a>

```typescript
public readonly dstVnicSetInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flowDirectionInput`<sup>Optional</sup> <a name="flowDirectionInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirectionInput"></a>

```typescript
public readonly flowDirectionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `securityProtocolsInput`<sup>Optional</sup> <a name="securityProtocolsInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocolsInput"></a>

```typescript
public readonly securityProtocolsInput: string[];
```

- *Type:* string[]

---

##### `srcIpAddressPrefixesInput`<sup>Optional</sup> <a name="srcIpAddressPrefixesInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixesInput"></a>

```typescript
public readonly srcIpAddressPrefixesInput: string[];
```

- *Type:* string[]

---

##### `srcVnicSetInput`<sup>Optional</sup> <a name="srcVnicSetInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSetInput"></a>

```typescript
public readonly srcVnicSetInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `acl`<sup>Required</sup> <a name="acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dstIpAddressPrefixes`<sup>Required</sup> <a name="dstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstIpAddressPrefixes"></a>

```typescript
public readonly dstIpAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `dstVnicSet`<sup>Required</sup> <a name="dstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.dstVnicSet"></a>

```typescript
public readonly dstVnicSet: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `flowDirection`<sup>Required</sup> <a name="flowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.flowDirection"></a>

```typescript
public readonly flowDirection: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `securityProtocols`<sup>Required</sup> <a name="securityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.securityProtocols"></a>

```typescript
public readonly securityProtocols: string[];
```

- *Type:* string[]

---

##### `srcIpAddressPrefixes`<sup>Required</sup> <a name="srcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcIpAddressPrefixes"></a>

```typescript
public readonly srcIpAddressPrefixes: string[];
```

- *Type:* string[]

---

##### `srcVnicSet`<sup>Required</sup> <a name="srcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.srcVnicSet"></a>

```typescript
public readonly srcVnicSet: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRule.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeSecurityRuleConfig <a name="ComputeSecurityRuleConfig" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.Initializer"></a>

```typescript
import { computeSecurityRule } from '@cdktf/provider-opc'

const computeSecurityRuleConfig: computeSecurityRule.ComputeSecurityRuleConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection">flowDirection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#name ComputeSecurityRule#name}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl">acl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#acl ComputeSecurityRule#acl}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#description ComputeSecurityRule#description}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes">dstIpAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet">dstVnicSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#enabled ComputeSecurityRule#enabled}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#id ComputeSecurityRule#id}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols">securityProtocols</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes">srcIpAddressPrefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet">srcVnicSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}. |
| <code><a href="#@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#tags ComputeSecurityRule#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `flowDirection`<sup>Required</sup> <a name="flowDirection" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.flowDirection"></a>

```typescript
public readonly flowDirection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#flow_direction ComputeSecurityRule#flow_direction}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#name ComputeSecurityRule#name}.

---

##### `acl`<sup>Optional</sup> <a name="acl" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.acl"></a>

```typescript
public readonly acl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#acl ComputeSecurityRule#acl}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#description ComputeSecurityRule#description}.

---

##### `dstIpAddressPrefixes`<sup>Optional</sup> <a name="dstIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstIpAddressPrefixes"></a>

```typescript
public readonly dstIpAddressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_ip_address_prefixes ComputeSecurityRule#dst_ip_address_prefixes}.

---

##### `dstVnicSet`<sup>Optional</sup> <a name="dstVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.dstVnicSet"></a>

```typescript
public readonly dstVnicSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#dst_vnic_set ComputeSecurityRule#dst_vnic_set}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#enabled ComputeSecurityRule#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#id ComputeSecurityRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `securityProtocols`<sup>Optional</sup> <a name="securityProtocols" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.securityProtocols"></a>

```typescript
public readonly securityProtocols: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#security_protocols ComputeSecurityRule#security_protocols}.

---

##### `srcIpAddressPrefixes`<sup>Optional</sup> <a name="srcIpAddressPrefixes" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcIpAddressPrefixes"></a>

```typescript
public readonly srcIpAddressPrefixes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_ip_address_prefixes ComputeSecurityRule#src_ip_address_prefixes}.

---

##### `srcVnicSet`<sup>Optional</sup> <a name="srcVnicSet" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.srcVnicSet"></a>

```typescript
public readonly srcVnicSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#src_vnic_set ComputeSecurityRule#src_vnic_set}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeSecurityRule.ComputeSecurityRuleConfig.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_security_rule#tags ComputeSecurityRule#tags}.

---



