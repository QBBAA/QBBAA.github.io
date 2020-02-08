// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/arrayUtils ../../core/Collection ../../core/Error ../../core/HandleOwner ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../layers/GraphicsLayer ../../layers/graphics/editingSupport ../../layers/support/fieldUtils ../../renderers/support/clickToleranceUtils ../../symbols/support/symbolUtils ../../views/2d/layers/support/popupUtils2D ../../views/support/layerViewUtils ./CreateWorkflowData ./Edits ./UpdateWorkflowData ./Workflow ../FeatureForm/FeatureFormViewModel ../FeatureTemplates/FeatureTemplatesViewModel ../Sketch/SketchViewModel ../Spinner/SpinnerViewModel".split(" "),
function(ba,ca,B,m,w,k,h,t,C,D,E,F,r,u,l,G,H,I,J,K,L,M,N,x,O,y,P,Q,R,S){function q(d,b,a){T.error(new D(d,b,a))}function U(d){return d&&H.isEditableLayer(d.layer)}function v(d,b){return d&&t.find(d,function(a){return a.layer===b})}function V(d,b,a){var c=d.layer,e=c.createQuery();e.objectIds=[d.getAttribute(c.objectIdField)];e.outFields=["*"];e.outSpatialReference=b.spatialReference;return c.queryFeatures(e,a).then(function(a){return a.features[0]})}function W(d,b,a,c,e){d.create(b.layer.geometryType);
var f=d.on("create",function(a){var n=a.state;a=a.graphic;if("cancel"===n)e();else if("complete"===n){var g=a.clone();g.attributes=w({},b.template.prototype.attributes);g.layer=b.layer;d.layer.remove(a);var X=g.symbol;g.symbol=null;K.getDisplayedSymbol(g).then(function(a){g.symbol=a||X;c(g)})}});a.map.add(d.layer);return{remove:function(){f.remove();a.map.remove(d.layer);d.cancel()}}}function z(d,b,a,c){var e=d.clone();b.layer.add(e);var f=function(){var c=d.layer;if("graphics"===c.type)return{remove:function(){}};
var b=d.attributes[c.objectIdField];a.whenLayerView(d.layer).then(function(a){return a.setVisibility(b,!1)});return{remove:function(){a.whenLayerView(d.layer).then(function(a){return a.setVisibility(b,!0)})}}}(),p={multipleSelectionEnabled:!1};b.update(e,p);var n=b.on("update",function(a){var e=a.graphics[0];"cancel"===a.state?b.update(e,p):c(e.clone())});a.map.add(b.layer);return{remove:function(){f.remove();n.remove();a.map.remove(b.layer);b.cancel();b.layer.removeAll()}}}function Y(d){if(1===d.length)if(d=
d[0],"items"in d){if(1===d.items.length)return d.items[0]}else return d}var Z=this,T=F.getLogger("esri.widgets.Editor.EditorViewModel"),A=["create","update"],aa=function(d,b,a){return h(Z,void 0,void 0,function(){var c,e;return k(this,function(f){switch(f.label){case 0:return 0===d.length?[2,void 0]:[4,b.hitTest(a)];case 1:c=f.sent();if(0===c.results.length)return[2,void 0];e=c.results.map(function(a){return a.graphic.layer});return[2,r.eachAlways(d.items.filter(function(a){var c=a.layer;return-1<
a.supports.indexOf("update")&&-1<e.indexOf(c)}).map(function(c){c=c.layer;var e=J.calculateTolerance(c.renderer),e=L.createQueryGeometry(a.mapPoint,e,b),g=c.displayField,f=[c.objectIdField];I.hasField(c.fields,g)&&f.push(g);return c.queryFeatures({geometry:e,outFields:f}).then(function(a){return a.features})}))]}})})};return function(d){function b(a){a=d.call(this,a)||this;a._sketchGraphicsLayer=new G({listMode:"hide"});a.activeWorkflow=null;a.activityQueue=[];a.failures=[];a.featureFormViewModel=
new P;a.featureTemplatesViewModel=new Q;a.layerInfos=null;a.sketchViewModel=new R({layer:a._sketchGraphicsLayer});a.spinnerViewModel=new S;return a}B(b,d);b.prototype.initialize=function(){var a=this;this.handles.add([u.on(this,"view.allLayerViews","change",function(){return a.notifyChange("editableItems")}),u.watch(this,"editableItems",function(){var c=a.activeWorkflow;if(c){var b=c.stepId;"create"===c.type?(a.updateCreationTemplates(),"awaiting-feature-creation-info"!==b||a.canCreate||a._cancelWorkflow()):
"update"===c.type&&("awaiting-feature-to-update"===b&&!a.canUpdate||"awaiting-update-feature-candidate"===b&&!c.data.candidates.some(function(c){var b=a.editableItems.find(function(a){return a.layer===c.layer});return b&&-1<b.supports.indexOf("update")}))&&a._cancelWorkflow()}})])};b.prototype.destroy=function(){this.view=null;this._cancelWorkflow()};Object.defineProperty(b.prototype,"allowedWorkflows",{get:function(){return this._get("allowedWorkflows")},set:function(a){a&&0!==a.length||(a=A.slice());
this._set("allowedWorkflows",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"canCreate",{get:function(){return this.editableItems.some(function(a){return-1<a.supports.indexOf("create")})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"canUpdate",{get:function(){return this.editableItems.some(function(a){return-1<a.supports.indexOf("update")})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"editableItems",{get:function(){var a=this,c=this.get("view.allLayerViews");
if(!c)return new C;this.handles.remove("layer-view-property-watchers");var b=function(){return a.notifyChange("editableItems")};return c.filter(U).map(function(c){a.handles.add(u.watch(c,"suspended",b),"layer-view-property-watchers");var e=c.layer;c=c.suspended;var n=[],g=a.allowedWorkflows,d=e.capabilities.operations,f=v(a.layerInfos,e),g=g.filter(function(a){return f?!1!==f.enabled&&("create"===a&&!1!==f.addEnabled||"update"===a&&!1!==f.updateEnabled):!0});!c&&t.find(g,function(a){return"create"===
a})&&d.supportsAdd&&n.push("create");!c&&t.find(g,function(a){return"update"===a})&&d.supportsUpdate&&n.push("update");!c&&!1!==(f&&f.deleteEnabled)&&d.supportsDelete&&n.push("delete");return{layer:e,supports:n}}).reverse()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){if(!this.get("view.ready")||0===this.editableItems.length)return"disabled";var a=this.activeWorkflow;return a?a.stepId:"ready"},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"syncing",{get:function(){return 0<this.activityQueue.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"view",{set:function(a){a&&"2d"!==a.type?q("editing:unsupported-view","SceneView is not supported"):(this.sketchViewModel.view=a,this.spinnerViewModel.view=a,this._set("view",a))},enumerable:!0,configurable:!0});b.prototype.startCreateWorkflowAtFeatureTypeSelection=function(){return h(this,void 0,void 0,function(){var a;return k(this,function(c){switch(c.label){case 0:return this.canCreate?
[4,this._cancelWorkflow()]:(q("editing:unsupported-workflow","Create workflow is unsupported or disabled."),[2]);case 1:return c.sent(),a=this._createCreateWorkflow(),[4,a.start()];case 2:return c.sent(),this._set("activeWorkflow",a),[2]}})})};b.prototype.startCreateWorkflowAtFeatureCreation=function(a){return h(this,void 0,void 0,function(){var c;return k(this,function(b){switch(b.label){case 0:return this.canCreate?[4,this._cancelWorkflow()]:(q("editing:unsupported-workflow","Update workflow is unsupported or disabled."),
[2]);case 1:return b.sent(),c=this._createCreateWorkflow("awaiting-feature-to-create"),c.data.creationInfo=a,[4,c.start()];case 2:return b.sent(),this._set("activeWorkflow",c),[2]}})})};b.prototype.startCreateWorkflowAtFeatureEdit=function(a){return h(this,void 0,void 0,function(){var c;return k(this,function(b){switch(b.label){case 0:return this.canCreate?[4,this._cancelWorkflow()]:(q("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),c=this._createCreateWorkflow("editing-new-feature"),
c.data.edits.feature=a,[4,c.start()];case 2:return b.sent(),this._set("activeWorkflow",c),[2]}})})};b.prototype.startUpdateWorkflowAtFeatureSelection=function(){return h(this,void 0,void 0,function(){var a;return k(this,function(c){switch(c.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(q("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return c.sent(),a=this._createUpdateWorkflow(),[4,a.start()];case 2:return c.sent(),this._set("activeWorkflow",
a),[2]}})})};b.prototype.startUpdateWorkflowAtMultipleFeatureSelection=function(a){return h(this,void 0,void 0,function(){var c;return k(this,function(b){switch(b.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(q("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),c=this._createUpdateWorkflow("awaiting-update-feature-candidate"),c.data.candidates=a,[4,c.start()];case 2:return b.sent(),this._set("activeWorkflow",c),[2]}})})};b.prototype.startUpdateWorkflowAtFeatureEdit=
function(a){return h(this,void 0,void 0,function(){var c;return k(this,function(b){switch(b.label){case 0:return this.canUpdate?[4,this._cancelWorkflow()]:(q("editing:unsupported-workflow","Update workflow is unsupported or disabled."),[2]);case 1:return b.sent(),c=this._createUpdateWorkflow("editing-existing-feature"),c.data.edits.feature=a,[4,c.start()];case 2:return b.sent(),this._set("activeWorkflow",c),[2]}})})};b.prototype.deleteFeatureFromWorkflow=function(){return h(this,void 0,void 0,function(){var a;
return k(this,function(c){switch(c.label){case 0:a=this.activeWorkflow;if(!a||"create"===a.type)return q("editing:unsupported-workflow","Deleting requires an active update workflow."),[2];this._delete(a.data.edits.feature);return[4,a.reset()];case 1:return c.sent(),[2]}})})};b.prototype.cancelWorkflow=function(a){return h(this,void 0,void 0,function(){return k(this,function(c){return[2,this._cancelWorkflow(w({warn:!0},a))]})})};b.prototype.updateCreationTemplates=function(){this.featureTemplatesViewModel.layers=
this.editableItems.filter(function(a){return-1<a.supports.indexOf("create")}).map(function(a){return a.layer}).toArray()};b.prototype._highlight=function(a){var c=a&&t.find(this.view.allLayerViews.items,function(c){return c.layer===a.layer});M.hasHighlight(c)&&this.handles.add(c.highlight(a),"candidate-highlight")};b.prototype._unhighlight=function(){this.handles.remove("candidate-highlight")};b.prototype._cancelWorkflow=function(a){return h(this,void 0,void 0,function(){var c;return k(this,function(b){switch(b.label){case 0:return c=
this.activeWorkflow,c?[4,c.cancel(a)]:(a&&a.warn&&q("editing:no-active-workflow","There is no active workflow to cancel."),[2]);case 1:return b.sent(),this._set("activeWorkflow",null),[2]}})})};b.prototype._createCreateWorkflow=function(a){var c=this,b=this.handles,f=new N({edits:new x,viewModel:this}),d=new y({type:"create",data:f,steps:this._createWorkflowStepCreator(f,a),commit:function(){return h(c,void 0,void 0,function(){return k(this,function(a){switch(a.label){case 0:return b.remove(this.activeWorkflow.stepId),
[4,this._create(f.edits.feature)];case 1:return a.sent(),[4,this.activeWorkflow.reset()];case 2:return a.sent(),d.emit("commit"),[2]}})})}});return d};b.prototype._createWorkflowStepCreator=function(a,c){void 0===c&&(c="awaiting-feature-creation-info");var b=a.viewModel.handles,d={"awaiting-feature-creation-info":function(){return{id:"awaiting-feature-creation-info",setUp:function(){return h(this,void 0,void 0,function(){return k(this,function(c){a.creationInfo=null;b.add(a.viewModel.featureTemplatesViewModel.on("select",
function(b){b=b.item;a.creationInfo={layer:b.layer,template:b.template};a.viewModel.activeWorkflow.next()}),this.id);return[2]})})},tearDown:function(){return h(this,void 0,void 0,function(){return k(this,function(a){b.remove(this.id);return[2]})})}}},"awaiting-feature-to-create":function(){return{id:"awaiting-feature-to-create",setUp:function(){return h(this,void 0,void 0,function(){var c,g=this;return k(this,function(d){c=function(){b.add(W(a.viewModel.sketchViewModel,a.creationInfo,a.viewModel.view,
function(b){a.edits.feature=b;a.viewModel.activeWorkflow.next()},function(){b.remove(g.id);c()}),g.id)};c();return[2]})})},tearDown:function(){return h(this,void 0,void 0,function(){return k(this,function(a){b.remove(this.id);return[2]})})}}},"editing-new-feature":function(){return{id:"editing-new-feature",setUp:function(){return h(this,void 0,void 0,function(){var c,g,d;return k(this,function(f){c=a.edits.feature;d=(g=v(a.viewModel.layerInfos,c.layer))&&g.fieldConfig;a.viewModel.featureFormViewModel.set({feature:c,
fieldConfig:d});b.add([a.viewModel.featureFormViewModel.on("value-change",function(){a.edits.updateAttributes(a.viewModel.featureFormViewModel.getValues())}),z(c,a.viewModel.sketchViewModel,a.viewModel.view,function(b){return a.edits.updateGeometry(b.geometry)})],this.id);return[2]})})},tearDown:function(){return h(this,void 0,void 0,function(){return k(this,function(c){a.edits.feature=null;a.viewModel.featureFormViewModel.set({feature:null,fieldConfig:null});b.remove(this.id);return[2]})})}}}},p=
!1,n=["awaiting-feature-creation-info","awaiting-feature-to-create","editing-new-feature"].filter(function(a){return p?!0:p=a===c}).map(function(a){return d[a]()});a.viewModel.updateCreationTemplates();var g=Y(a.viewModel.featureTemplatesViewModel.items);"awaiting-feature-creation-info"===n[0].id&&g&&(a.creationInfo={layer:g.layer,template:g.template},n.shift());return n};b.prototype._createUpdateWorkflow=function(a){var b=this,d=this.handles,f=new O({edits:new x,viewModel:this}),p=new y({type:"update",
data:f,steps:this._updateWorkflowStepCreator(f,a),commit:function(){return h(b,void 0,void 0,function(){var a,b,c,e;return k(this,function(g){switch(g.label){case 0:return d.remove(this.activeWorkflow.stepId),b=f.edits.feature,c=b.clone(),f.edits.attributesModified||(e=b.layer.objectIdField,c.attributes=(a={},a[e]=b.getAttribute(e),a)),f.edits.geometryModified||(c.geometry=null),[4,this._update(c)];case 1:return g.sent(),[4,this.activeWorkflow.reset()];case 2:return g.sent(),p.emit("commit"),[2]}})})}});
return p};b.prototype._updateWorkflowStepCreator=function(a,b){void 0===b&&(b="awaiting-feature-to-update");var c=a.viewModel.handles,d={"awaiting-feature-to-update":function(){return{id:"awaiting-feature-to-update",setUp:function(){return h(this,void 0,void 0,function(){var b,d,f,e,h;return k(this,function(g){b=a.viewModel;d=b.spinnerViewModel;f=b.view;e=null;c.add({remove:function(){e&&(e.abort(),e=null)}},this.id);a.edits.feature=null;h=f.on("click",function(b){b.stopPropagation();d.location=b.mapPoint;
d.visible=!0;e&&e.abort();var c=a.viewModel.editableItems;e=r.createAbortController();r.create(function(a,d){r.onAbort(e.signal,function(){return d(r.createAbortError())});a(aa(c,f,b))}).then(function(b){a.viewModel.spinnerViewModel.visible=!1;r.throwIfAborted(e);a.candidates=b.reduce(function(a,b){return b.error?a:a.concat(b.value)},[]);0!==a.candidates.length&&(1===a.candidates.length?(a.edits.feature=a.candidates[0],a.viewModel.activeWorkflow.go("editing-existing-feature")):a.viewModel.activeWorkflow.next())})});
c.add(h,this.id);return[2]})})},tearDown:function(){return h(this,void 0,void 0,function(){return k(this,function(a){c.remove(this.id);return[2]})})}}},"awaiting-update-feature-candidate":function(){return{id:"awaiting-update-feature-candidate",setUp:function(){return h(this,void 0,void 0,function(){var b,d;return k(this,function(g){b=a.edits;d=a.viewModel;b.feature=null;c.add(u.watch(b,"feature",function(a){d._unhighlight();d._highlight(a)}),this.id);return[2]})})},tearDown:function(){return h(this,
void 0,void 0,function(){return k(this,function(b){a.viewModel._unhighlight();c.remove(this.id);return[2]})})}}},"editing-existing-feature":function(){return{id:"editing-existing-feature",setUp:function(){return h(this,void 0,void 0,function(){var b,d,f,e=this;return k(this,function(g){b=a.edits.feature;d=a.viewModel;a.editableItem=d.editableItems.find(function(a){return a.layer===b.layer});f=r.createAbortController();c.add({remove:function(){return f.abort()}});return[2,V(b,d.view,f).then(function(b){if(!r.isAborted(f)){a.edits.updateGeometry(b.geometry);
a.edits.updateAttributes(b.attributes);a.edits.trackChanges();var g=b.layer,h=v(d.layerInfos,g);d.featureFormViewModel.set({feature:b,fieldConfig:h&&h.fieldConfig});h=[d.featureFormViewModel.on("value-change",function(){a.edits.updateAttributes(d.featureFormViewModel.getValues())})];g.capabilities.editing.supportsGeometryUpdate?h.push(z(b,d.sketchViewModel,d.view,function(b){return a.edits.updateGeometry(b.geometry)})):d._highlight(b);c.add(h,e.id)}})]})})},tearDown:function(){return h(this,void 0,
void 0,function(){return k(this,function(b){a.editableItem=null;a.viewModel.featureFormViewModel.set({feature:null,fieldConfig:null});c.remove(this.id);a.viewModel._unhighlight();return[2]})})}}}},p=!1;return["awaiting-feature-to-update","awaiting-update-feature-candidate","editing-existing-feature"].filter(function(a){return p?!0:p=a===b}).map(function(a){return d[a]()})};b.prototype._create=function(a){return this._queueOperation(function(){return a.layer.applyEdits({addFeatures:[a]})})};b.prototype._delete=
function(a){return this._queueOperation(function(){return a.layer.applyEdits({deleteFeatures:[a]})})};b.prototype._update=function(a){return this._queueOperation(function(){return a.layer.applyEdits({updateFeatures:[a]})}).then()};b.prototype._queueOperation=function(a){var b=this;this.activityQueue.push(a);this.notifyChange("syncing");var d=function(a,b){a=b.indexOf(a);-1<a&&b.splice(a,1)};return a().then(function(a){var b=a.deleteFeatureResults,c=a.updateFeatureResults;if(a=t.find(a.addFeatureResults,
function(a){return!!a.error})||t.find(c,function(a){return!!a.error})||t.find(b,function(a){return!!a.error}))throw a.error;}).catch(function(c){q("editing:operation-error","An error ocurred.",{error:c});var e={error:c,retry:function(){d(e,b.failures);b._queueOperation(a)},cancel:function(){return d(e,b.failures)}};b._set("failures",b.failures.concat([e]))}).then(function(){d(a,b.activityQueue);b.notifyChange("syncing")})};m([l.property({readOnly:!0})],b.prototype,"activeWorkflow",void 0);m([l.property({readOnly:!0})],
b.prototype,"activityQueue",void 0);m([l.property({value:A.slice()})],b.prototype,"allowedWorkflows",null);m([l.property({readOnly:!0,dependsOn:["editableItems"]})],b.prototype,"canCreate",null);m([l.property({readOnly:!0,dependsOn:["editableItems"]})],b.prototype,"canUpdate",null);m([l.property({dependsOn:["allowedWorkflows","layerInfos","view.allLayerViews","view.ready"],readOnly:!0})],b.prototype,"editableItems",null);m([l.property({readOnly:!0})],b.prototype,"failures",void 0);m([l.property()],
b.prototype,"featureFormViewModel",void 0);m([l.property()],b.prototype,"featureTemplatesViewModel",void 0);m([l.property()],b.prototype,"layerInfos",void 0);m([l.property()],b.prototype,"sketchViewModel",void 0);m([l.property()],b.prototype,"spinnerViewModel",void 0);m([l.property({dependsOn:["editableItems","activeWorkflow.stepId","view.ready"]})],b.prototype,"state",null);m([l.property({readOnly:!0})],b.prototype,"syncing",null);m([l.property()],b.prototype,"view",null);return b=m([l.subclass("esri.widgets.Editor.EditorViewModel")],
b)}(l.declared(E.HandleOwner))});