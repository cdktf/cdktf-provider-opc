# `opc_lbaas_listener`

Refer to the Terraform Registory for docs: [`opc_lbaas_listener`](https://www.terraform.io/docs/providers/opc/r/lbaas_listener).

# `lbaasListener` Submodule <a name="`lbaasListener` Submodule" id="@cdktf/provider-opc.lbaasListener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LbaasListener <a name="LbaasListener" id="@cdktf/provider-opc.lbaasListener.LbaasListener"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener opc_lbaas_listener}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_listener.LbaasListener;

LbaasListener.Builder.create(Construct scope, java.lang.String id)
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
    .balancerProtocol(java.lang.String)
    .loadBalancer(java.lang.String)
    .name(java.lang.String)
    .port(java.lang.Number)
    .serverProtocol(java.lang.String)
//  .certificates(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .pathPrefixes(java.util.List<java.lang.String>)
//  .policies(java.util.List<java.lang.String>)
//  .serverPool(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .virtualHosts(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.balancerProtocol">balancerProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#load_balancer LbaasListener#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#name LbaasListener#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#port LbaasListener#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_protocol LbaasListener#server_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#certificates LbaasListener#certificates}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#enabled LbaasListener#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#id LbaasListener#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.pathPrefixes">pathPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#path_prefixes LbaasListener#path_prefixes}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#policies LbaasListener#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.serverPool">serverPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_pool LbaasListener#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#tags LbaasListener#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.virtualHosts">virtualHosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `balancerProtocol`<sup>Required</sup> <a name="balancerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.balancerProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}.

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.loadBalancer"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#load_balancer LbaasListener#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#name LbaasListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#port LbaasListener#port}.

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.serverProtocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_protocol LbaasListener#server_protocol}.

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.certificates"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#certificates LbaasListener#certificates}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#enabled LbaasListener#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#id LbaasListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathPrefixes`<sup>Optional</sup> <a name="pathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.pathPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#path_prefixes LbaasListener#path_prefixes}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.policies"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#policies LbaasListener#policies}.

---

##### `serverPool`<sup>Optional</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.serverPool"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_pool LbaasListener#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#tags LbaasListener#tags}.

---

##### `virtualHosts`<sup>Optional</sup> <a name="virtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.Initializer.parameter.virtualHosts"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}.

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
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
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

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.lbaasListener.LbaasListener.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.lbaasListener.LbaasListener.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.lbaasListener.LbaasListener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetCertificates` <a name="resetCertificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetCertificates"></a>

```java
public void resetCertificates()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetId"></a>

```java
public void resetId()
```

##### `resetPathPrefixes` <a name="resetPathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetPathPrefixes"></a>

```java
public void resetPathPrefixes()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetServerPool` <a name="resetServerPool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetServerPool"></a>

```java
public void resetServerPool()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetTags"></a>

```java
public void resetTags()
```

##### `resetVirtualHosts` <a name="resetVirtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.resetVirtualHosts"></a>

```java
public void resetVirtualHosts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_listener.LbaasListener;

LbaasListener.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_listener.LbaasListener;

LbaasListener.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_listener.LbaasListener;

LbaasListener.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.lbaasListener.LbaasListener.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.operationDetails">operationDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.parentListener">parentListener</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.state">state</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocolInput">balancerProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificatesInput">certificatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancerInput">loadBalancerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixesInput">pathPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.policiesInput">policiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPoolInput">serverPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocolInput">serverProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHostsInput">virtualHostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocol">balancerProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixes">pathPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPool">serverPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHosts">virtualHosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `operationDetails`<sup>Required</sup> <a name="operationDetails" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.operationDetails"></a>

```java
public java.lang.String getOperationDetails();
```

- *Type:* java.lang.String

---

##### `parentListener`<sup>Required</sup> <a name="parentListener" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.parentListener"></a>

```java
public java.lang.String getParentListener();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.state"></a>

```java
public IResolvable getState();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `balancerProtocolInput`<sup>Optional</sup> <a name="balancerProtocolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocolInput"></a>

```java
public java.lang.String getBalancerProtocolInput();
```

- *Type:* java.lang.String

---

##### `certificatesInput`<sup>Optional</sup> <a name="certificatesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificatesInput"></a>

```java
public java.util.List<java.lang.String> getCertificatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancerInput"></a>

```java
public java.lang.String getLoadBalancerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `pathPrefixesInput`<sup>Optional</sup> <a name="pathPrefixesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getPathPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.policiesInput"></a>

```java
public java.util.List<java.lang.String> getPoliciesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `serverPoolInput`<sup>Optional</sup> <a name="serverPoolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPoolInput"></a>

```java
public java.lang.String getServerPoolInput();
```

- *Type:* java.lang.String

---

##### `serverProtocolInput`<sup>Optional</sup> <a name="serverProtocolInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocolInput"></a>

```java
public java.lang.String getServerProtocolInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualHostsInput`<sup>Optional</sup> <a name="virtualHostsInput" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHostsInput"></a>

```java
public java.util.List<java.lang.String> getVirtualHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `balancerProtocol`<sup>Required</sup> <a name="balancerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.balancerProtocol"></a>

```java
public java.lang.String getBalancerProtocol();
```

- *Type:* java.lang.String

---

##### `certificates`<sup>Required</sup> <a name="certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.certificates"></a>

```java
public java.util.List<java.lang.String> getCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.loadBalancer"></a>

```java
public java.lang.String getLoadBalancer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pathPrefixes`<sup>Required</sup> <a name="pathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.pathPrefixes"></a>

```java
public java.util.List<java.lang.String> getPathPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `serverPool`<sup>Required</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverPool"></a>

```java
public java.lang.String getServerPool();
```

- *Type:* java.lang.String

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `virtualHosts`<sup>Required</sup> <a name="virtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.virtualHosts"></a>

```java
public java.util.List<java.lang.String> getVirtualHosts();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListener.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.lbaasListener.LbaasListener.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LbaasListenerConfig <a name="LbaasListenerConfig" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.lbaas_listener.LbaasListenerConfig;

LbaasListenerConfig.builder()
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
    .balancerProtocol(java.lang.String)
    .loadBalancer(java.lang.String)
    .name(java.lang.String)
    .port(java.lang.Number)
    .serverProtocol(java.lang.String)
//  .certificates(java.util.List<java.lang.String>)
//  .enabled(java.lang.Boolean)
//  .enabled(IResolvable)
//  .id(java.lang.String)
//  .pathPrefixes(java.util.List<java.lang.String>)
//  .policies(java.util.List<java.lang.String>)
//  .serverPool(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .virtualHosts(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.balancerProtocol">balancerProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.loadBalancer">loadBalancer</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#load_balancer LbaasListener#load_balancer}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#name LbaasListener#name}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#port LbaasListener#port}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverProtocol">serverProtocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_protocol LbaasListener#server_protocol}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.certificates">certificates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#certificates LbaasListener#certificates}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#enabled LbaasListener#enabled}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#id LbaasListener#id}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.pathPrefixes">pathPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#path_prefixes LbaasListener#path_prefixes}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.policies">policies</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#policies LbaasListener#policies}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverPool">serverPool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_pool LbaasListener#server_pool}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#tags LbaasListener#tags}. |
| <code><a href="#@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.virtualHosts">virtualHosts</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `balancerProtocol`<sup>Required</sup> <a name="balancerProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.balancerProtocol"></a>

```java
public java.lang.String getBalancerProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#balancer_protocol LbaasListener#balancer_protocol}.

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.loadBalancer"></a>

```java
public java.lang.String getLoadBalancer();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#load_balancer LbaasListener#load_balancer}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#name LbaasListener#name}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#port LbaasListener#port}.

---

##### `serverProtocol`<sup>Required</sup> <a name="serverProtocol" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverProtocol"></a>

```java
public java.lang.String getServerProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_protocol LbaasListener#server_protocol}.

---

##### `certificates`<sup>Optional</sup> <a name="certificates" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.certificates"></a>

```java
public java.util.List<java.lang.String> getCertificates();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#certificates LbaasListener#certificates}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#enabled LbaasListener#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#id LbaasListener#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `pathPrefixes`<sup>Optional</sup> <a name="pathPrefixes" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.pathPrefixes"></a>

```java
public java.util.List<java.lang.String> getPathPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#path_prefixes LbaasListener#path_prefixes}.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.policies"></a>

```java
public java.util.List<java.lang.String> getPolicies();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#policies LbaasListener#policies}.

---

##### `serverPool`<sup>Optional</sup> <a name="serverPool" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.serverPool"></a>

```java
public java.lang.String getServerPool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#server_pool LbaasListener#server_pool}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#tags LbaasListener#tags}.

---

##### `virtualHosts`<sup>Optional</sup> <a name="virtualHosts" id="@cdktf/provider-opc.lbaasListener.LbaasListenerConfig.property.virtualHosts"></a>

```java
public java.util.List<java.lang.String> getVirtualHosts();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/lbaas_listener#virtual_hosts LbaasListener#virtual_hosts}.

---



