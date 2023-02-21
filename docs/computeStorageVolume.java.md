# `computeStorageVolume` Submodule <a name="`computeStorageVolume` Submodule" id="@cdktf/provider-opc.computeStorageVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeStorageVolume <a name="ComputeStorageVolume" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume"></a>

Represents a {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume opc_compute_storage_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_storage_volume.ComputeStorageVolume;

ComputeStorageVolume.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
    .size(java.lang.Number)
//  .bootable(java.lang.Boolean)
//  .bootable(IResolvable)
//  .description(java.lang.String)
//  .hypervisor(java.lang.String)
//  .id(java.lang.String)
//  .imageList(java.lang.String)
//  .imageListEntry(java.lang.Number)
//  .machineImage(java.lang.String)
//  .managed(java.lang.Boolean)
//  .managed(IResolvable)
//  .platform(java.lang.String)
//  .readonly(java.lang.Boolean)
//  .readonly(IResolvable)
//  .snapshot(java.lang.String)
//  .snapshotAccount(java.lang.String)
//  .snapshotId(java.lang.String)
//  .status(java.lang.String)
//  .storagePool(java.lang.String)
//  .storageType(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeStorageVolumeTimeouts)
//  .uri(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#name ComputeStorageVolume#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#size ComputeStorageVolume#size}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.bootable">bootable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#bootable ComputeStorageVolume#bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#description ComputeStorageVolume#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.hypervisor">hypervisor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#id ComputeStorageVolume#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.imageList">imageList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#image_list ComputeStorageVolume#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.imageListEntry">imageListEntry</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.machineImage">machineImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#managed ComputeStorageVolume#managed}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#platform ComputeStorageVolume#platform}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.readonly">readonly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#readonly ComputeStorageVolume#readonly}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshot">snapshot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshotAccount">snapshotAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#status ComputeStorageVolume#status}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.storagePool">storagePool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#tags ComputeStorageVolume#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#uri ComputeStorageVolume#uri}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#name ComputeStorageVolume#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.size"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#size ComputeStorageVolume#size}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.bootable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#bootable ComputeStorageVolume#bootable}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#description ComputeStorageVolume#description}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.hypervisor"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#id ComputeStorageVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageList`<sup>Optional</sup> <a name="imageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.imageList"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#image_list ComputeStorageVolume#image_list}.

---

##### `imageListEntry`<sup>Optional</sup> <a name="imageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.imageListEntry"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}.

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.machineImage"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.managed"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#managed ComputeStorageVolume#managed}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.platform"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#platform ComputeStorageVolume#platform}.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.readonly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#readonly ComputeStorageVolume#readonly}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshot"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}.

---

##### `snapshotAccount`<sup>Optional</sup> <a name="snapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshotAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.snapshotId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#status ComputeStorageVolume#status}.

---

##### `storagePool`<sup>Optional</sup> <a name="storagePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.storagePool"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.storageType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.tags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#tags ComputeStorageVolume#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#timeouts ComputeStorageVolume#timeouts}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.Initializer.parameter.uri"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#uri ComputeStorageVolume#uri}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable">resetBootable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor">resetHypervisor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList">resetImageList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry">resetImageListEntry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage">resetMachineImage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform">resetPlatform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly">resetReadonly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot">resetSnapshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount">resetSnapshotAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId">resetSnapshotId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool">resetStoragePool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType">resetStorageType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri">resetUri</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts"></a>

```java
public void putTimeouts(ComputeStorageVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

---

##### `resetBootable` <a name="resetBootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetBootable"></a>

```java
public void resetBootable()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetHypervisor` <a name="resetHypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetHypervisor"></a>

```java
public void resetHypervisor()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetId"></a>

```java
public void resetId()
```

##### `resetImageList` <a name="resetImageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageList"></a>

```java
public void resetImageList()
```

##### `resetImageListEntry` <a name="resetImageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetImageListEntry"></a>

```java
public void resetImageListEntry()
```

##### `resetMachineImage` <a name="resetMachineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetMachineImage"></a>

```java
public void resetMachineImage()
```

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetManaged"></a>

```java
public void resetManaged()
```

##### `resetPlatform` <a name="resetPlatform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetPlatform"></a>

```java
public void resetPlatform()
```

##### `resetReadonly` <a name="resetReadonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetReadonly"></a>

```java
public void resetReadonly()
```

##### `resetSnapshot` <a name="resetSnapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshot"></a>

```java
public void resetSnapshot()
```

##### `resetSnapshotAccount` <a name="resetSnapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotAccount"></a>

```java
public void resetSnapshotAccount()
```

##### `resetSnapshotId` <a name="resetSnapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetSnapshotId"></a>

```java
public void resetSnapshotId()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetStoragePool` <a name="resetStoragePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStoragePool"></a>

```java
public void resetStoragePool()
```

##### `resetStorageType` <a name="resetStorageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetStorageType"></a>

```java
public void resetStorageType()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUri` <a name="resetUri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.resetUri"></a>

```java
public void resetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_storage_volume.ComputeStorageVolume;

ComputeStorageVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_storage_volume.ComputeStorageVolume;

ComputeStorageVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_storage_volume.ComputeStorageVolume;

ComputeStorageVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput">bootableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput">hypervisorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput">imageListEntryInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput">imageListInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput">machineImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput">managedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput">platformInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput">readonlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput">sizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput">snapshotAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput">snapshotIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput">snapshotInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput">storagePoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput">storageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput">tagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable">bootable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor">hypervisor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList">imageList</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry">imageListEntry</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage">machineImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly">readonly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size">size</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot">snapshot</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount">snapshotAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType">storageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeouts"></a>

```java
public ComputeStorageVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference">ComputeStorageVolumeTimeoutsOutputReference</a>

---

##### `bootableInput`<sup>Optional</sup> <a name="bootableInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootableInput"></a>

```java
public java.lang.Object getBootableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `hypervisorInput`<sup>Optional</sup> <a name="hypervisorInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisorInput"></a>

```java
public java.lang.String getHypervisorInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `imageListEntryInput`<sup>Optional</sup> <a name="imageListEntryInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntryInput"></a>

```java
public java.lang.Number getImageListEntryInput();
```

- *Type:* java.lang.Number

---

##### `imageListInput`<sup>Optional</sup> <a name="imageListInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListInput"></a>

```java
public java.lang.String getImageListInput();
```

- *Type:* java.lang.String

---

##### `machineImageInput`<sup>Optional</sup> <a name="machineImageInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImageInput"></a>

```java
public java.lang.String getMachineImageInput();
```

- *Type:* java.lang.String

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managedInput"></a>

```java
public java.lang.Object getManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `platformInput`<sup>Optional</sup> <a name="platformInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platformInput"></a>

```java
public java.lang.String getPlatformInput();
```

- *Type:* java.lang.String

---

##### `readonlyInput`<sup>Optional</sup> <a name="readonlyInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonlyInput"></a>

```java
public java.lang.Object getReadonlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sizeInput`<sup>Optional</sup> <a name="sizeInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.sizeInput"></a>

```java
public java.lang.Number getSizeInput();
```

- *Type:* java.lang.Number

---

##### `snapshotAccountInput`<sup>Optional</sup> <a name="snapshotAccountInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccountInput"></a>

```java
public java.lang.String getSnapshotAccountInput();
```

- *Type:* java.lang.String

---

##### `snapshotIdInput`<sup>Optional</sup> <a name="snapshotIdInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotIdInput"></a>

```java
public java.lang.String getSnapshotIdInput();
```

- *Type:* java.lang.String

---

##### `snapshotInput`<sup>Optional</sup> <a name="snapshotInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotInput"></a>

```java
public java.lang.String getSnapshotInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `storagePoolInput`<sup>Optional</sup> <a name="storagePoolInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePoolInput"></a>

```java
public java.lang.String getStoragePoolInput();
```

- *Type:* java.lang.String

---

##### `storageTypeInput`<sup>Optional</sup> <a name="storageTypeInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageTypeInput"></a>

```java
public java.lang.String getStorageTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tagsInput"></a>

```java
public java.util.List<java.lang.String> getTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.bootable"></a>

```java
public java.lang.Object getBootable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `hypervisor`<sup>Required</sup> <a name="hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.hypervisor"></a>

```java
public java.lang.String getHypervisor();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageList`<sup>Required</sup> <a name="imageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageList"></a>

```java
public java.lang.String getImageList();
```

- *Type:* java.lang.String

---

##### `imageListEntry`<sup>Required</sup> <a name="imageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.imageListEntry"></a>

```java
public java.lang.Number getImageListEntry();
```

- *Type:* java.lang.Number

---

##### `machineImage`<sup>Required</sup> <a name="machineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.machineImage"></a>

```java
public java.lang.String getMachineImage();
```

- *Type:* java.lang.String

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.readonly"></a>

```java
public java.lang.Object getReadonly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

---

##### `snapshot`<sup>Required</sup> <a name="snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshot"></a>

```java
public java.lang.String getSnapshot();
```

- *Type:* java.lang.String

---

##### `snapshotAccount`<sup>Required</sup> <a name="snapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotAccount"></a>

```java
public java.lang.String getSnapshotAccount();
```

- *Type:* java.lang.String

---

##### `snapshotId`<sup>Required</sup> <a name="snapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storagePool`<sup>Required</sup> <a name="storagePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

---

##### `storageType`<sup>Required</sup> <a name="storageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeStorageVolumeConfig <a name="ComputeStorageVolumeConfig" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_storage_volume.ComputeStorageVolumeConfig;

ComputeStorageVolumeConfig.builder()
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
    .name(java.lang.String)
    .size(java.lang.Number)
//  .bootable(java.lang.Boolean)
//  .bootable(IResolvable)
//  .description(java.lang.String)
//  .hypervisor(java.lang.String)
//  .id(java.lang.String)
//  .imageList(java.lang.String)
//  .imageListEntry(java.lang.Number)
//  .machineImage(java.lang.String)
//  .managed(java.lang.Boolean)
//  .managed(IResolvable)
//  .platform(java.lang.String)
//  .readonly(java.lang.Boolean)
//  .readonly(IResolvable)
//  .snapshot(java.lang.String)
//  .snapshotAccount(java.lang.String)
//  .snapshotId(java.lang.String)
//  .status(java.lang.String)
//  .storagePool(java.lang.String)
//  .storageType(java.lang.String)
//  .tags(java.util.List<java.lang.String>)
//  .timeouts(ComputeStorageVolumeTimeouts)
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#name ComputeStorageVolume#name}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size">size</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#size ComputeStorageVolume#size}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable">bootable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#bootable ComputeStorageVolume#bootable}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#description ComputeStorageVolume#description}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor">hypervisor</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#id ComputeStorageVolume#id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList">imageList</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#image_list ComputeStorageVolume#image_list}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry">imageListEntry</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage">machineImage</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#managed ComputeStorageVolume#managed}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform">platform</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#platform ComputeStorageVolume#platform}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly">readonly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#readonly ComputeStorageVolume#readonly}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot">snapshot</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount">snapshotAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId">snapshotId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#status ComputeStorageVolume#status}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool">storagePool</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType">storageType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags">tags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#tags ComputeStorageVolume#tags}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri">uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#uri ComputeStorageVolume#uri}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#name ComputeStorageVolume#name}.

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.size"></a>

```java
public java.lang.Number getSize();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#size ComputeStorageVolume#size}.

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.bootable"></a>

```java
public java.lang.Object getBootable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#bootable ComputeStorageVolume#bootable}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#description ComputeStorageVolume#description}.

---

##### `hypervisor`<sup>Optional</sup> <a name="hypervisor" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.hypervisor"></a>

```java
public java.lang.String getHypervisor();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#hypervisor ComputeStorageVolume#hypervisor}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#id ComputeStorageVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `imageList`<sup>Optional</sup> <a name="imageList" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageList"></a>

```java
public java.lang.String getImageList();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#image_list ComputeStorageVolume#image_list}.

---

##### `imageListEntry`<sup>Optional</sup> <a name="imageListEntry" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.imageListEntry"></a>

```java
public java.lang.Number getImageListEntry();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#image_list_entry ComputeStorageVolume#image_list_entry}.

---

##### `machineImage`<sup>Optional</sup> <a name="machineImage" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.machineImage"></a>

```java
public java.lang.String getMachineImage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#machine_image ComputeStorageVolume#machine_image}.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#managed ComputeStorageVolume#managed}.

---

##### `platform`<sup>Optional</sup> <a name="platform" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#platform ComputeStorageVolume#platform}.

---

##### `readonly`<sup>Optional</sup> <a name="readonly" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.readonly"></a>

```java
public java.lang.Object getReadonly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#readonly ComputeStorageVolume#readonly}.

---

##### `snapshot`<sup>Optional</sup> <a name="snapshot" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshot"></a>

```java
public java.lang.String getSnapshot();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot ComputeStorageVolume#snapshot}.

---

##### `snapshotAccount`<sup>Optional</sup> <a name="snapshotAccount" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotAccount"></a>

```java
public java.lang.String getSnapshotAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot_account ComputeStorageVolume#snapshot_account}.

---

##### `snapshotId`<sup>Optional</sup> <a name="snapshotId" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.snapshotId"></a>

```java
public java.lang.String getSnapshotId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#snapshot_id ComputeStorageVolume#snapshot_id}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#status ComputeStorageVolume#status}.

---

##### `storagePool`<sup>Optional</sup> <a name="storagePool" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storagePool"></a>

```java
public java.lang.String getStoragePool();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#storage_pool ComputeStorageVolume#storage_pool}.

---

##### `storageType`<sup>Optional</sup> <a name="storageType" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.storageType"></a>

```java
public java.lang.String getStorageType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#storage_type ComputeStorageVolume#storage_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.tags"></a>

```java
public java.util.List<java.lang.String> getTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#tags ComputeStorageVolume#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.timeouts"></a>

```java
public ComputeStorageVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#timeouts ComputeStorageVolume#timeouts}

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeConfig.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#uri ComputeStorageVolume#uri}.

---

### ComputeStorageVolumeTimeouts <a name="ComputeStorageVolumeTimeouts" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_storage_volume.ComputeStorageVolumeTimeouts;

ComputeStorageVolumeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#create ComputeStorageVolume#create}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#delete ComputeStorageVolume#delete}. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#update ComputeStorageVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#create ComputeStorageVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#delete ComputeStorageVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opc/r/compute_storage_volume#update ComputeStorageVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeStorageVolumeTimeoutsOutputReference <a name="ComputeStorageVolumeTimeoutsOutputReference" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.opc.compute_storage_volume.ComputeStorageVolumeTimeoutsOutputReference;

new ComputeStorageVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-opc.computeStorageVolume.ComputeStorageVolumeTimeouts">ComputeStorageVolumeTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



