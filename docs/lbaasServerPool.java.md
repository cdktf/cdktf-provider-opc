# `opc_lbaas_server_pool`

Refer to the Terraform Registory for docs: [`opc_lbaas_server_pool`](https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool).

# `lbaasServerPool` Submodule <a name="`lbaasServerPool` Submodule" id="@cdktf/provider-opc.lbaasServerPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasServerPool <a name="LbaasServerPool" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool opc_lbaas_server_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_server_pool.LbaasServerPool;

LbaasServerPool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .loadBalancer(java.lang.String)
    .name(java.lang.String)
    .servers(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .healthCheck(LbaasServerPoolHealthCheck)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .vnicSet(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#name LbaasServerPool#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#servers LbaasServerPool#servers}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#id LbaasServerPool#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#tags LbaasServerPool#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.vnicSet">vnicSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.loadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#name LbaasServerPool#name}.

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.servers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#servers LbaasServerPool#servers}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.healthCheck"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#health_check LbaasServerPool#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#id LbaasServerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#tags LbaasServerPool#tags}.

---

##### `vnicSet`<sup>Optional</sup> <a name="vnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.Initializer.parameter.vnicSet"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}.

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
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck">putHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetHealthCheck">resetHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetVnicSet">resetVnicSet</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putHealthCheck` <a name="putHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck"></a>

```java
public void putHealthCheck(LbaasServerPoolHealthCheck value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.putHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHealthCheck` <a name="resetHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetHealthCheck"></a>

```java
public void resetHealthCheck()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetId"></a>

```java
public void resetId()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetTags"></a>

```java
public void resetTags()
```

##### `resetVnicSet` <a name="resetVnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.resetVnicSet"></a>

```java
public void resetVnicSet()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_server_pool.LbaasServerPool;

LbaasServerPool.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_server_pool.LbaasServerPool;

LbaasServerPool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_server_pool.LbaasServerPool;

LbaasServerPool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.consumers">consumers</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference">LbaasServerPoolHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.operationDetails">operationDetails</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.status">status</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheckInput">healthCheckInput</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancerInput">loadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.serversInput">serversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSetInput">vnicSetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSet">vnicSet</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.consumers"></a>

```java
public java.lang.String getConsumers();
```

- *Type:* java.lang.String

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheck"></a>

```java
public LbaasServerPoolHealthCheckOutputReference getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference">LbaasServerPoolHealthCheckOutputReference</a>

---

##### `operationDetails`<sup>Required</sup> <a name="operationDetails" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.operationDetails"></a>

```java
public IResolvable getOperationDetails();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.status"></a>

```java
public IResolvable getStatus();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthCheckInput`<sup>Optional</sup> <a name="healthCheckInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.healthCheckInput"></a>

```java
public LbaasServerPoolHealthCheck getHealthCheckInput();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancerInput"></a>

```java
public java.lang.String getLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serversInput`<sup>Optional</sup> <a name="serversInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.serversInput"></a>

```java
public java.util.List<java.lang.String> getServersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vnicSetInput`<sup>Optional</sup> <a name="vnicSetInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSetInput"></a>

```java
public java.lang.String getVnicSetInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.loadBalancer"></a>

```java
public java.lang.String getLoadBalancer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `vnicSet`<sup>Required</sup> <a name="vnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.vnicSet"></a>

```java
public java.lang.String getVnicSet();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasServerPoolConfig <a name="LbaasServerPoolConfig" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_server_pool.LbaasServerPoolConfig;

LbaasServerPoolConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .loadBalancer(java.lang.String)
    .name(java.lang.String)
    .servers(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .healthCheck(LbaasServerPoolHealthCheck)
//  .id(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .vnicSet(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#name LbaasServerPool#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.servers">servers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#servers LbaasServerPool#servers}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.healthCheck">healthCheck</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | health_check block. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#id LbaasServerPool#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#tags LbaasServerPool#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.vnicSet">vnicSet</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.loadBalancer"></a>

```java
public java.lang.String getLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#load_balancer LbaasServerPool#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#name LbaasServerPool#name}.

---

##### `servers`<sup>Required</sup> <a name="servers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.servers"></a>

```java
public java.util.List<java.lang.String> getServers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#servers LbaasServerPool#servers}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `healthCheck`<sup>Optional</sup> <a name="healthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.healthCheck"></a>

```java
public LbaasServerPoolHealthCheck getHealthCheck();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

health_check block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#health_check LbaasServerPool#health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#id LbaasServerPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#tags LbaasServerPool#tags}.

---

##### `vnicSet`<sup>Optional</sup> <a name="vnicSet" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolConfig.property.vnicSet"></a>

```java
public java.lang.String getVnicSet();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#vnic_set LbaasServerPool#vnic_set}.

---

### LbaasServerPoolHealthCheck <a name="LbaasServerPoolHealthCheck" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_server_pool.LbaasServerPoolHealthCheck;

LbaasServerPoolHealthCheck.builder()
//  .acceptedReturnCodes(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .healthyThreshold(java.lang.Number)
//  .interval(java.lang.Number)
//  .path(java.lang.String)
//  .timeout(java.lang.Number)
//  .type(java.lang.String)
//  .unhealthyThreshold(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.acceptedReturnCodes">acceptedReturnCodes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.interval">interval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#interval LbaasServerPool#interval}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.path">path</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#path LbaasServerPool#path}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#timeout LbaasServerPool#timeout}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#type LbaasServerPool#type}. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}. |

---

##### `acceptedReturnCodes`<sup>Optional</sup> <a name="acceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.acceptedReturnCodes"></a>

```java
public java.util.List<java.lang.String> getAcceptedReturnCodes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#accepted_return_codes LbaasServerPool#accepted_return_codes}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#enabled LbaasServerPool#enabled}.

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#healthy_threshold LbaasServerPool#healthy_threshold}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#interval LbaasServerPool#interval}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#path LbaasServerPool#path}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#timeout LbaasServerPool#timeout}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#type LbaasServerPool#type}.

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_server_pool#unhealthy_threshold LbaasServerPool#unhealthy_threshold}.

---

## Classes <a name="Classes" id="Classes"></a>

### LbaasServerPoolHealthCheckOutputReference <a name="LbaasServerPoolHealthCheckOutputReference" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_server_pool.LbaasServerPoolHealthCheckOutputReference;

new LbaasServerPoolHealthCheckOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

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

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAcceptedReturnCodes` <a name="resetAcceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetAcceptedReturnCodes"></a>

```java
public void resetAcceptedReturnCodes()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetHealthyThreshold"></a>

```java
public void resetHealthyThreshold()
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetInterval"></a>

```java
public void resetInterval()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetTimeout"></a>

```java
public void resetTimeout()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetType"></a>

```java
public void resetType()
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.resetUnhealthyThreshold"></a>

```java
public void resetUnhealthyThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodesInput">acceptedReturnCodesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodes">acceptedReturnCodes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThreshold">healthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.interval">interval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeout">timeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `acceptedReturnCodesInput`<sup>Optional</sup> <a name="acceptedReturnCodesInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodesInput"></a>

```java
public java.util.List<java.lang.String> getAcceptedReturnCodesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThresholdInput"></a>

```java
public java.lang.Number getHealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.intervalInput"></a>

```java
public java.lang.Number getIntervalInput();
```

- *Type:* java.lang.Number

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeoutInput"></a>

```java
public java.lang.Number getTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThresholdInput"></a>

```java
public java.lang.Number getUnhealthyThresholdInput();
```

- *Type:* java.lang.Number

---

##### `acceptedReturnCodes`<sup>Required</sup> <a name="acceptedReturnCodes" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.acceptedReturnCodes"></a>

```java
public java.util.List<java.lang.String> getAcceptedReturnCodes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.healthyThreshold"></a>

```java
public java.lang.Number getHealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.interval"></a>

```java
public java.lang.Number getInterval();
```

- *Type:* java.lang.Number

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.timeout"></a>

```java
public java.lang.Number getTimeout();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.unhealthyThreshold"></a>

```java
public java.lang.Number getUnhealthyThreshold();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheckOutputReference.property.internalValue"></a>

```java
public LbaasServerPoolHealthCheck getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.lbaasServerPool.LbaasServerPoolHealthCheck">LbaasServerPoolHealthCheck</a>

---



