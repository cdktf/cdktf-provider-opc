# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-opc.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpcProvider <a name="OpcProvider" id="@cdktf/provider-opc.provider.OpcProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs opc}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.provider.OpcProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-opc'

new provider.OpcProvider(scope: Construct, id: string, config: OpcProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig">OpcProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opc.provider.OpcProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opc.provider.OpcProviderConfig">OpcProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint">resetLbaasEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries">resetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint">resetStorageEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId">resetStorageServiceId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.provider.OpcProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.provider.OpcProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.provider.OpcProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.provider.OpcProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.provider.OpcProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.provider.OpcProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-opc.provider.OpcProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-opc.provider.OpcProvider.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetLbaasEndpoint` <a name="resetLbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetLbaasEndpoint"></a>

```typescript
public resetLbaasEndpoint(): void
```

##### `resetMaxRetries` <a name="resetMaxRetries" id="@cdktf/provider-opc.provider.OpcProvider.resetMaxRetries"></a>

```typescript
public resetMaxRetries(): void
```

##### `resetStorageEndpoint` <a name="resetStorageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageEndpoint"></a>

```typescript
public resetStorageEndpoint(): void
```

##### `resetStorageServiceId` <a name="resetStorageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.resetStorageServiceId"></a>

```typescript
public resetStorageServiceId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OpcProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.provider.OpcProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-opc'

provider.OpcProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-opc'

provider.OpcProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-opc'

provider.OpcProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.provider.OpcProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktf/provider-opc'

provider.OpcProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OpcProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OpcProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OpcProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.provider.OpcProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OpcProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput">identityDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput">lbaasEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput">maxRetriesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput">storageEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput">storageServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.identityDomain">identityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint">lbaasEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.maxRetries">maxRetries</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId">storageServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.provider.OpcProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.provider.OpcProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.provider.OpcProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.provider.OpcProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-opc.provider.OpcProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-opc.provider.OpcProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opc.provider.OpcProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-opc.provider.OpcProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `identityDomainInput`<sup>Optional</sup> <a name="identityDomainInput" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomainInput"></a>

```typescript
public readonly identityDomainInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-opc.provider.OpcProvider.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lbaasEndpointInput`<sup>Optional</sup> <a name="lbaasEndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpointInput"></a>

```typescript
public readonly lbaasEndpointInput: string;
```

- *Type:* string

---

##### `maxRetriesInput`<sup>Optional</sup> <a name="maxRetriesInput" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetriesInput"></a>

```typescript
public readonly maxRetriesInput: number;
```

- *Type:* number

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-opc.provider.OpcProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `storageEndpointInput`<sup>Optional</sup> <a name="storageEndpointInput" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpointInput"></a>

```typescript
public readonly storageEndpointInput: string;
```

- *Type:* string

---

##### `storageServiceIdInput`<sup>Optional</sup> <a name="storageServiceIdInput" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceIdInput"></a>

```typescript
public readonly storageServiceIdInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-opc.provider.OpcProvider.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `identityDomain`<sup>Optional</sup> <a name="identityDomain" id="@cdktf/provider-opc.provider.OpcProvider.property.identityDomain"></a>

```typescript
public readonly identityDomain: string;
```

- *Type:* string

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opc.provider.OpcProvider.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `lbaasEndpoint`<sup>Optional</sup> <a name="lbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.lbaasEndpoint"></a>

```typescript
public readonly lbaasEndpoint: string;
```

- *Type:* string

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opc.provider.OpcProvider.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-opc.provider.OpcProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-opc.provider.OpcProvider.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

---

##### `storageServiceId`<sup>Optional</sup> <a name="storageServiceId" id="@cdktf/provider-opc.provider.OpcProvider.property.storageServiceId"></a>

```typescript
public readonly storageServiceId: string;
```

- *Type:* string

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-opc.provider.OpcProvider.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.provider.OpcProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpcProviderConfig <a name="OpcProviderConfig" id="@cdktf/provider-opc.provider.OpcProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.provider.OpcProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-opc'

const opcProviderConfig: provider.OpcProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain">identityDomain</a></code> | <code>string</code> | The OPC identity domain for API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.password">password</a></code> | <code>string</code> | The user password for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.user">user</a></code> | <code>string</code> | The user name for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint">endpoint</a></code> | <code>string</code> | The HTTP endpoint for OPC API operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Skip TLS Verification for self-signed certificates. Should only be used if absolutely required. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint">lbaasEndpoint</a></code> | <code>string</code> | The HTTP endpoint for the Load Balancer Classic service. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries">maxRetries</a></code> | <code>number</code> | Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1). |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint">storageEndpoint</a></code> | <code>string</code> | The HTTP endpoint for Oracle Storage operations. |
| <code><a href="#@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId">storageServiceId</a></code> | <code>string</code> | The Storage Service ID. |

---

##### `identityDomain`<sup>Required</sup> <a name="identityDomain" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.identityDomain"></a>

```typescript
public readonly identityDomain: string;
```

- *Type:* string

The OPC identity domain for API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#identity_domain OpcProvider#identity_domain}

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

The user password for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#password OpcProvider#password}

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

The user name for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#user OpcProvider#user}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#alias OpcProvider#alias}

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

The HTTP endpoint for OPC API operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#endpoint OpcProvider#endpoint}

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Skip TLS Verification for self-signed certificates. Should only be used if absolutely required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#insecure OpcProvider#insecure}

---

##### `lbaasEndpoint`<sup>Optional</sup> <a name="lbaasEndpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.lbaasEndpoint"></a>

```typescript
public readonly lbaasEndpoint: string;
```

- *Type:* string

The HTTP endpoint for the Load Balancer Classic service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#lbaas_endpoint OpcProvider#lbaas_endpoint}

---

##### `maxRetries`<sup>Optional</sup> <a name="maxRetries" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.maxRetries"></a>

```typescript
public readonly maxRetries: number;
```

- *Type:* number

Maximum number retries to wait for a successful response when operating on resources within OPC (defaults to 1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#max_retries OpcProvider#max_retries}

---

##### `storageEndpoint`<sup>Optional</sup> <a name="storageEndpoint" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageEndpoint"></a>

```typescript
public readonly storageEndpoint: string;
```

- *Type:* string

The HTTP endpoint for Oracle Storage operations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_endpoint OpcProvider#storage_endpoint}

---

##### `storageServiceId`<sup>Optional</sup> <a name="storageServiceId" id="@cdktf/provider-opc.provider.OpcProviderConfig.property.storageServiceId"></a>

```typescript
public readonly storageServiceId: string;
```

- *Type:* string

The Storage Service ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs#storage_service_id OpcProvider#storage_service_id}

---



