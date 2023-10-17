# `opc_lbaas_load_balancer`

Refer to the Terraform Registory for docs: [`opc_lbaas_load_balancer`](https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer).

# `lbaasLoadBalancer` Submodule <a name="`lbaasLoadBalancer` Submodule" id="@cdktf/provider-opc.lbaasLoadBalancer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasLoadBalancer <a name="LbaasLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer opc_lbaas_load_balancer}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_load_balancer.LbaasLoadBalancer;

LbaasLoadBalancer.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .region(java.lang.String)
    .scheme(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .ipNetwork(java.lang.String)
//  .parentLoadBalancer(java.lang.String)
//  .permittedClients(java.util.List<java.lang.String>)
//  .permittedMethods(java.util.List<java.lang.String>)
//  .policies(java.util.List<java.lang.String>)
//  .serverPool(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.parentLoadBalancer">parentLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.permittedClients">permittedClients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.permittedMethods">permittedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.serverPool">serverPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}.

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.scheme"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.ipNetwork"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}.

---

##### `parentLoadBalancer`<sup>Optional</sup> <a name="parentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.parentLoadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}.

---

##### `permittedClients`<sup>Optional</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.permittedClients"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}.

---

##### `permittedMethods`<sup>Optional</sup> <a name="permittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.permittedMethods"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}.

---

##### `serverPool`<sup>Optional</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.serverPool"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
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
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetId"></a>

```java
public void resetId()
```

##### `resetIpNetwork` <a name="resetIpNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetIpNetwork"></a>

```java
public void resetIpNetwork()
```

##### `resetParentLoadBalancer` <a name="resetParentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetParentLoadBalancer"></a>

```java
public void resetParentLoadBalancer()
```

##### `resetPermittedClients` <a name="resetPermittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedClients"></a>

```java
public void resetPermittedClients()
```

##### `resetPermittedMethods` <a name="resetPermittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPermittedMethods"></a>

```java
public void resetPermittedMethods()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetServerPool` <a name="resetServerPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetServerPool"></a>

```java
public void resetServerPool()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.resetTags"></a>

```java
public void resetTags()
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

```java
import com.hashicorp.cdktf.providers.opc.lbaas_load_balancer.LbaasLoadBalancer;

LbaasLoadBalancer.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_load_balancer.LbaasLoadBalancer;

LbaasLoadBalancer.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_load_balancer.LbaasLoadBalancer;

LbaasLoadBalancer.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_load_balancer.LbaasLoadBalancer;

LbaasLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LbaasLoadBalancer.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a LbaasLoadBalancer resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LbaasLoadBalancer to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LbaasLoadBalancer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the LbaasLoadBalancer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips">balancerVips</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName">canonicalHostName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable">cloudgateCapable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput">ipNetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput">parentLoadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput">permittedClientsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput">permittedMethodsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput">schemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput">serverPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer">parentLoadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients">permittedClients</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods">permittedMethods</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme">scheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool">serverPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `balancerVips`<sup>Required</sup> <a name="balancerVips" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.balancerVips"></a>

```java
public java.util.List<java.lang.String> getBalancerVips();
```

- *Type:* java.util.List<java.lang.String>

---

##### `canonicalHostName`<sup>Required</sup> <a name="canonicalHostName" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.canonicalHostName"></a>

```java
public java.lang.String getCanonicalHostName();
```

- *Type:* java.lang.String

---

##### `cloudgateCapable`<sup>Required</sup> <a name="cloudgateCapable" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.cloudgateCapable"></a>

```java
public IResolvable getCloudgateCapable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipNetworkInput`<sup>Optional</sup> <a name="ipNetworkInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetworkInput"></a>

```java
public java.lang.String getIpNetworkInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parentLoadBalancerInput`<sup>Optional</sup> <a name="parentLoadBalancerInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancerInput"></a>

```java
public java.lang.String getParentLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `permittedClientsInput`<sup>Optional</sup> <a name="permittedClientsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClientsInput"></a>

```java
public java.util.List<java.lang.String> getPermittedClientsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedMethodsInput`<sup>Optional</sup> <a name="permittedMethodsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethodsInput"></a>

```java
public java.util.List<java.lang.String> getPermittedMethodsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.schemeInput"></a>

```java
public java.lang.String getSchemeInput();
```

- *Type:* java.lang.String

---

##### `serverPoolInput`<sup>Optional</sup> <a name="serverPoolInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPoolInput"></a>

```java
public java.lang.String getServerPoolInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipNetwork`<sup>Required</sup> <a name="ipNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parentLoadBalancer`<sup>Required</sup> <a name="parentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.parentLoadBalancer"></a>

```java
public java.lang.String getParentLoadBalancer();
```

- *Type:* java.lang.String

---

##### `permittedClients`<sup>Required</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedClients"></a>

```java
public java.util.List<java.lang.String> getPermittedClients();
```

- *Type:* java.util.List<java.lang.String>

---

##### `permittedMethods`<sup>Required</sup> <a name="permittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.permittedMethods"></a>

```java
public java.util.List<java.lang.String> getPermittedMethods();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

---

##### `serverPool`<sup>Required</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.serverPool"></a>

```java
public java.lang.String getServerPool();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancer.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasLoadBalancerConfig <a name="LbaasLoadBalancerConfig" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_load_balancer.LbaasLoadBalancerConfig;

LbaasLoadBalancerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .region(java.lang.String)
    .scheme(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .ipNetwork(java.lang.String)
//  .parentLoadBalancer(java.lang.String)
//  .permittedClients(java.util.List<java.lang.String>)
//  .permittedMethods(java.util.List<java.lang.String>)
//  .policies(java.util.List<java.lang.String>)
//  .serverPool(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme">scheme</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork">ipNetwork</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer">parentLoadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients">permittedClients</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods">permittedMethods</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool">serverPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#name LbaasLoadBalancer#name}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#region LbaasLoadBalancer#region}.

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.scheme"></a>

```java
public java.lang.String getScheme();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#scheme LbaasLoadBalancer#scheme}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#description LbaasLoadBalancer#description}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#enabled LbaasLoadBalancer#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#id LbaasLoadBalancer#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipNetwork`<sup>Optional</sup> <a name="ipNetwork" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.ipNetwork"></a>

```java
public java.lang.String getIpNetwork();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#ip_network LbaasLoadBalancer#ip_network}.

---

##### `parentLoadBalancer`<sup>Optional</sup> <a name="parentLoadBalancer" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.parentLoadBalancer"></a>

```java
public java.lang.String getParentLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#parent_load_balancer LbaasLoadBalancer#parent_load_balancer}.

---

##### `permittedClients`<sup>Optional</sup> <a name="permittedClients" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedClients"></a>

```java
public java.util.List<java.lang.String> getPermittedClients();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_clients LbaasLoadBalancer#permitted_clients}.

---

##### `permittedMethods`<sup>Optional</sup> <a name="permittedMethods" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.permittedMethods"></a>

```java
public java.util.List<java.lang.String> getPermittedMethods();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#permitted_methods LbaasLoadBalancer#permitted_methods}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#policies LbaasLoadBalancer#policies}.

---

##### `serverPool`<sup>Optional</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.serverPool"></a>

```java
public java.lang.String getServerPool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#server_pool LbaasLoadBalancer#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasLoadBalancer.LbaasLoadBalancerConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/opc/1.4.1/docs/resources/lbaas_load_balancer#tags LbaasLoadBalancer#tags}.

---



