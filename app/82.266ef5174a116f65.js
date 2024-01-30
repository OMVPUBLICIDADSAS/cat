"use strict";(self.webpackChunkquote_cli_01=self.webpackChunkquote_cli_01||[]).push([[82],{9082:(W,w,r)=>{r.r(w),r.d(w,{CatalogModule:()=>B});var g=r(6895),A=r(2510),d=r(9671),t=r(4650),f=r(529),Z=r(6805),y=r(930);function S(s,l){const e="object"==typeof l;return new Promise((i,a)=>{const o=new y.Hp({next:n=>{i(n),o.unsubscribe()},error:a,complete:()=>{e?i(l.defaultValue):a(new Z.K)}});s.subscribe(o)})}var T=r(8139);let E=(()=>{class s{constructor(e,i){this.httpq=e,this.sharedvar=i,this.categTree=[],this.productList=[]}getOMVCats(){return this.httpq.get(`${this.sharedvar.OMV_SERVER}catalog`)}getOMVCatsFromTxt(){return this.httpq.get(`${this.sharedvar.OMV_SERVER}catalog/txtdatabs`)}updateItemDataAsync(e){var i=this;return(0,d.Z)(function*(){return yield S(i.httpq.put(`${i.sharedvar.OMV_SERVER}catalog/${e._id}`,e))})()}uploadImagesAsync(e){var i=this;return(0,d.Z)(function*(){return yield S(i.httpq.post(i.sharedvar.OMV_SERVER+"catalog/images2dtbase_",e))})()}getOMVCatsDataPromise(){var e=this;return(0,d.Z)(function*(){return new Promise(function(){var i=(0,d.Z)(function*(a){const o=e.getOMVCats().subscribe({next:n=>{o&&o.unsubscribe(),e.productList=n,e.productList.length>0&&e.resolveData(e.productList),a(!0)},error:n=>{n.error instanceof Error?console.log("An error occurred:",n.error.message):(console.log("Backend returned status code: ",n.status),console.log("Response body:",n.error))},complete:()=>{o&&o.unsubscribe()}})});return function(a){return i.apply(this,arguments)}}())})()}resolveData(e){this.categTree=[],e.forEach(i=>{if(i.existencia=0,i.materiales.forEach(a=>{i.precio=i.precio||a.precio,i.existencia=i.existencia+(Number(a.inventario)||0)}),i.etiquetas){const a=[];i.etiquetas.forEach(o=>{o&&o.nombre&&a.push(o.nombre)})}this.addToCatTreeSimple(i.subcategoria_1)}),this.sortCat()}sortCat(){this.categTree.sort((e,i)=>e.nombre.localeCompare(i.nombre)),this.categTree.forEach(e=>{e.subCategTree?.sort((i,a)=>i.nombre.localeCompare(a.nombre))})}addToCatTreeSimple(e){let i=this.categTree.find(o=>o.nombre===e.categoria.nombre);i||(i={jerarquia:e.categoria.jerarquia,nombre:e.categoria.nombre,subCategTree:[]},this.categTree.push(i)),i.subCategTree?.find(o=>o.nombre===e.nombre)||i.subCategTree?.push({jerarquia:e.jerarquia,nombre:e.nombre})}getCatalogs(){return this.httpq.get(`${this.sharedvar.OMV_SERVER}Catalog`)}getCatalog(e){return this.httpq.get(`${this.sharedvar.OMV_SERVER}Catalog/findOne/${e}`)}getCatalogByFilter(e,i){let a=new f.LE;return a=a.append("status",e),a=a.append("agent_id",i),this.httpq.get(`${this.sharedvar.OMV_SERVER}Catalog/filter/data`,{params:a})}getCatalogByDates(e,i){let a=new f.LE;return a=a.append("date_in",e),a=a.append("date_out",i),this.httpq.get(`${this.sharedvar.OMV_SERVER}Catalog/filter/datebetween`,{params:a})}createCatalog(e){return this.httpq.post(`${this.sharedvar.OMV_SERVER}Catalog`,e)}deleteCatalog(e){return this.httpq.delete(`${this.sharedvar.OMV_SERVER}Catalog/${e}`)}resendMailCatalog(e,i){return this.httpq.put(`${this.sharedvar.OMV_SERVER}Catalog/resend/${e}`,i)}updateCatalog(e,i){return this.httpq.put(`${this.sharedvar.OMV_SERVER}Catalog/${e}`,i)}getCssData(e){return this.httpq.get(e,{responseType:"text"})}b64toBlob(e,i="",a=512){const o=atob(e.replace(/^data:image\/(png|jpeg|jpg);base64,/,"")),n=[];for(let m=0;m<o.length;m+=a){const u=o.slice(m,m+a),h=new Array(u.length);for(let p=0;p<u.length;p++)h[p]=u.charCodeAt(p);const z=new Uint8Array(h);n.push(z)}return new Blob(n,{type:i})}updateItemData(e,i){var a=this;return(0,d.Z)(function*(){const o=new FormData;for(let n=0;n<i.length;n++)o.append("files",i[n].data,i[n].file_name);if(yield a.updateItemDataAsync(e),0!==i.length)return yield a.uploadImagesAsync(o)})()}static#t=this.\u0275fac=function(i){return new(i||s)(t.LFG(f.eN),t.LFG(T.m))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var R=r(1481),M=r(1425),v=r(5412),_=r(4006),x=r(7392),C=r(4859),b=r(1561);function k(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",15)(1,"input",16),t.NdJ("change",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onChekAll())}),t.qZA()()}if(2&s){const e=t.oxw(2);t.xp6(1),t.Q6J("checked",e.chekAll)}}function q(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",11),t.YNc(1,k,2,1,"div",12),t.TgZ(2,"mat-icon",13),t._uU(3),t.qZA(),t.TgZ(4,"input",14),t.NdJ("ngModelChange",function(a){t.CHM(e);const o=t.oxw();return t.KtG(o.filtertext=a)})("change",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onViewSelected(!1))}),t.qZA()()}if(2&s){const e=t.oxw(),i=t.MAs(15);t.xp6(1),t.Q6J("ngIf",e.multiSelect),t.xp6(1),t.Q6J("matMenuTriggerFor",i),t.xp6(1),t.Oqu(e.getView()),t.xp6(1),t.Q6J("ngModel",e.filtertext)}}function $(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",19)(1,"input",20),t.NdJ("ngModelChange",function(a){t.CHM(e);const o=t.oxw().$implicit;return t.KtG(o.selected=a)})("change",function(){t.CHM(e);const a=t.oxw().$implicit,o=t.oxw();return t.KtG(o.onSelected(a))}),t.qZA(),t.TgZ(2,"label",21),t._uU(3),t.qZA()()}if(2&s){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",e.selected),t.xp6(2),t.Oqu(e.name)}}function V(s,l){if(1&s&&(t.TgZ(0,"div",17),t.YNc(1,$,4,2,"div",18),t.qZA()),2&s){const e=l.$implicit,i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.getViewFilter(e))}}function D(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",22)(1,"button",7),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.onNew())}),t._uU(2," Nuevo\xa0 "),t.TgZ(3,"mat-icon"),t._uU(4,"add"),t.qZA()()()}}let J=(()=>{class s{constructor(e,i){this.dialogRef=e,this.data=i,this.filtertext="",this.selectedOptions=[],this.chekAll=!1,this.viewSelected=!1,this.multiSelect=!1,e.disableClose=!0,this.multiSelect=i.multiSelect||!1}onNew(){this.dialogRef.close({new:!0})}onChekAll(){this.chekAll=!this.chekAll,this.data.valuelst?.forEach(e=>{e.selected=this.chekAll})}getViewFilter(e){if(this.viewSelected)return e.selected||!1;const i=this.filtertext.toUpperCase();return!!(0===i.length||e&&e.name&&e.name.toUpperCase().includes(i))}onSelected(e){this.multiSelect||(this.selectedOptions=[e],this.dialogRef.close(this.selectedOptions))}onSave(){this.selectedOptions=[],this.data.valuelst?.forEach(e=>{e.selected&&this.selectedOptions.push(e)}),this.dialogRef.close(this.selectedOptions)}onDismiss(){this.dialogRef.close()}getView(){return this.viewSelected?"done":"visibility"}onViewSelected(e){this.viewSelected=e}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(v.so),t.Y36(v.WI))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-select-dialog"]],decls:24,vars:4,consts:[[1,"flex","flex-col","h-full"],[1,"h-12","p-3","text-2xl","bg-violet-600","text-white"],["class","h-10 w-full flex flex-row items-center border-b border-violet-500",4,"ngIf"],[1,"flex-1","overflow-auto","mt-2"],["class","flex flex-column",4,"ngFor","ngForOf"],[1,"flex","p-3","justify-end","border-t","border-violet-500"],["class","flex-1","fxFlex","",4,"ngIf"],["mat-stroked-button","","color","warn",3,"click"],["mat-stroked-button","","color","primary","cdkFocusInitia","",3,"click"],["selectView","matMenu"],["mat-menu-item","",3,"click"],[1,"h-10","w-full","flex","flex-row","items-center","border-b","border-violet-500"],["class","w-6 ml-2 mt-2",4,"ngIf"],[1,"bg-gray-200","rounded-sm",3,"matMenuTriggerFor"],["type","search","placeholder","Filtrar...",1,"flex-1","ml-2","h-8","z-20","text-gray-900","outline-none","border-b","border-gray-200","focus:outline-none","focus:outline-none",3,"ngModel","ngModelChange","change"],[1,"w-6","ml-2","mt-2"],["type","checkbox",1,"w-4","h-4","focus:border-blue-500",3,"checked","change"],[1,"flex","flex-column"],["class","flex flex-row h-8 ml-2",4,"ngIf"],[1,"flex","flex-row","h-8","ml-2"],["id","itemsel","type","checkbox",1,"w-4","h-4","text-violet-500","bg-gray-100","border-gray-300","rounded","dark:focus:ring-violet-500","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"ngModel","ngModelChange","change"],["for","itemsel",1,"ml-4","h-4","w-72","text-sm","text-gray-900","overflow-hidden"],["fxFlex","",1,"flex-1"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"h1",1),t._uU(2),t.qZA(),t.YNc(3,q,5,4,"div",2),t.TgZ(4,"div",3),t.YNc(5,V,2,1,"div",4),t.qZA(),t.TgZ(6,"div",5),t.YNc(7,D,5,0,"div",6),t.TgZ(8,"button",7),t.NdJ("click",function(){return a.onDismiss()}),t.TgZ(9,"mat-icon"),t._uU(10,"close"),t.qZA()(),t.TgZ(11,"button",8),t.NdJ("click",function(){return a.onSave()}),t.TgZ(12,"mat-icon"),t._uU(13,"done"),t.qZA()()(),t.TgZ(14,"mat-menu",null,9)(16,"button",10),t.NdJ("click",function(){return a.onViewSelected(!0)}),t.TgZ(17,"mat-icon"),t._uU(18,"done"),t.qZA(),t._uU(19," Ver seleccionados "),t.qZA(),t.TgZ(20,"button",10),t.NdJ("click",function(){return a.onViewSelected(!1)}),t.TgZ(21,"mat-icon"),t._uU(22,"visibility"),t.qZA(),t._uU(23," Ver Todo "),t.qZA()()()),2&i&&(t.xp6(2),t.Oqu(a.data.title),t.xp6(1),t.Q6J("ngIf",a.data.viewfilter),t.xp6(2),t.Q6J("ngForOf",a.data.valuelst),t.xp6(2),t.Q6J("ngIf",a.data.viewAdd))},dependencies:[g.sg,g.O5,_.Fj,_.Wl,_.JJ,_.On,x.Hw,C.lW,b.VK,b.OP,b.p6]})}return s})(),F=(()=>{class s{constructor(e){this.dialog=e}aSelectDefault(e){let i=window.innerHeight-20;return e.dgheigth=e.dgheigth||i,i=i>e.dgheigth?e.dgheigth:i,this.dialogRef=this.dialog.open(J,{panelClass:"custom-dialog-container",height:i.toString()+"px",width:"350px",data:e}),this.dialogRef.afterClosed()}static#t=this.\u0275fac=function(i){return new(i||s)(t.LFG(v.uw))};static#e=this.\u0275prov=t.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})();var I=r(7009),N=r(4726),O=r(2395);function U(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13),t._uU(3,"Detalles del art\xedculo"),t.qZA()(),t.TgZ(4,"app-dynamic-form",14),t.NdJ("result",function(a){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onGetData(a))}),t.qZA(),t.TgZ(5,"div"),t._uU(6),t.qZA(),t.TgZ(7,"label"),t._uU(8," Foto/Image. "),t._UZ(9,"img",15)(10,"div"),t.TgZ(11,"input",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,o=t.oxw();return t.KtG(o.fileChangeEvent(a,null))}),t.qZA()()()}if(2&s){const e=t.oxw().$implicit,i=t.oxw();t.xp6(4),t.Q6J("jsonFormData",i.itemData)("values",i.itemResult)("reset",i.itemreset),t.xp6(2),t.hij(" ",i.itemResult.existencia," "),t.xp6(3),t.Q6J("src",i.getComImage(e,null),t.LSH)}}function L(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div")(1,"app-dynamic-form",29),t.NdJ("result",function(a){t.CHM(e);const o=t.oxw(4);return t.KtG(o.onGetMaterialData(a))}),t.qZA(),t.TgZ(2,"label"),t._uU(3," Foto/Image 1. "),t._UZ(4,"img",15)(5,"div"),t.TgZ(6,"input",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,o=t.oxw(2).$implicit,n=t.oxw();return t.KtG(n.fileChangeEvent(o,a,0))}),t.qZA()(),t.TgZ(7,"label"),t._uU(8," Foto/Image 2. "),t._UZ(9,"img",15)(10,"div"),t.TgZ(11,"input",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,o=t.oxw(2).$implicit,n=t.oxw();return t.KtG(n.fileChangeEvent(o,a,1))}),t.qZA()(),t.TgZ(12,"label"),t._uU(13," Foto/Image 3. "),t._UZ(14,"img",15)(15,"div"),t.TgZ(16,"input",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,o=t.oxw(2).$implicit,n=t.oxw();return t.KtG(n.fileChangeEvent(o,a,2))}),t.qZA()(),t.TgZ(17,"label"),t._uU(18," Foto/Image 4. "),t._UZ(19,"img",15)(20,"div"),t.TgZ(21,"input",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,o=t.oxw(2).$implicit,n=t.oxw();return t.KtG(n.fileChangeEvent(o,a,3))}),t.qZA()(),t.TgZ(22,"label"),t._uU(23," Foto/Image 5. "),t._UZ(24,"img",15)(25,"div"),t.TgZ(26,"input",16),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().$implicit,o=t.oxw(2).$implicit,n=t.oxw();return t.KtG(n.fileChangeEvent(o,a,4))}),t.qZA()()()}if(2&s){const e=t.oxw().$implicit,i=t.oxw(2).$implicit,a=t.oxw();t.xp6(1),t.Q6J("jsonFormData",a.materialData)("values",a.materialResult),t.xp6(3),t.Q6J("src",a.getComImage(i,e,0),t.LSH),t.xp6(5),t.Q6J("src",a.getComImage(i,e,1),t.LSH),t.xp6(5),t.Q6J("src",a.getComImage(i,e,2),t.LSH),t.xp6(5),t.Q6J("src",a.getComImage(i,e,3),t.LSH),t.xp6(5),t.Q6J("src",a.getComImage(i,e,4),t.LSH)}}function j(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"div",25),t._uU(3),t.qZA(),t.TgZ(4,"div",26)(5,"mat-icon",27),t.NdJ("click",function(){const o=t.CHM(e).$implicit,n=t.oxw(3);return t.KtG(n.showArea(o.codigo,"mat_select"))}),t._uU(6,"edit"),t.qZA(),t.TgZ(7,"mat-icon",20),t._uU(8,"delete"),t.qZA()()(),t.YNc(9,L,27,7,"div",28),t.qZA()}if(2&s){const e=l.$implicit,i=t.oxw(3);t.xp6(3),t.lnq("",e.codigo," - ",e.color_nombre," Existencia: ",e.inventario,""),t.xp6(6),t.Q6J("ngIf",i.getExpand(e.codigo,e.codigo))}}function G(s,l){if(1&s&&(t.TgZ(0,"div",17)(1,"div",18)(2,"div",13),t._uU(3,"Listado de Materiales"),t.qZA(),t.TgZ(4,"button",19)(5,"mat-icon",20),t._uU(6,"add"),t.qZA()()(),t.TgZ(7,"div",21),t.YNc(8,j,10,4,"div",22),t.qZA()()),2&s){const e=t.oxw().$implicit;t.xp6(8),t.Q6J("ngForOf",e.materiales)}}function H(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"div",6),t.NdJ("click",function(){const o=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.showArea(o.familia,"item"))}),t._uU(3),t.qZA(),t.TgZ(4,"div",7)(5,"mat-icon",6),t.NdJ("click",function(){const o=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.showArea(o.familia,"item"))}),t._uU(6,"edit"),t.qZA(),t.TgZ(7,"mat-icon",6),t.NdJ("click",function(){const o=t.CHM(e).$implicit,n=t.oxw();return t.KtG(n.showArea(o.familia,"materiales"))}),t._uU(8,"list"),t.qZA(),t._uU(9," \xa0 "),t.TgZ(10,"mat-icon",6),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.ask2Save())}),t._uU(11,"done"),t.qZA(),t.TgZ(12,"mat-icon",8),t._uU(13,"delete"),t.qZA()()(),t.YNc(14,U,12,5,"div",9),t.YNc(15,G,9,1,"div",10),t.qZA()}if(2&s){const e=l.$implicit,i=t.oxw();t.xp6(3),t.Oqu(e.descripcion_comercial),t.xp6(11),t.Q6J("ngIf",i.getExpand(e.familia,"item")),t.xp6(1),t.Q6J("ngIf",i.getExpand(e.familia,"materiales"))}}const Q=[{path:"",component:(()=>{class s{constructor(e,i,a,o,n,c){this.httpCat=e,this.sharedvar=i,this.sanitizer=a,this.imageCompress=o,this.ds=n,this.snkBar=c,this.itemData={controls:[{name:"familia",label:"C\xf3digo:",type:"text",validators:{required:!0}},{name:"descripcion_comercial",label:"Descripci\xf3n comercial:",type:"text",validators:{required:!0}},{name:"lista_colores",label:"Lista de colores:",type:"text",validators:{}},{name:"precio",label:"Precio:",type:"number",validators:{required:!0}},{name:"categ_titulo",label:"Categor\xeda:",type:"text",sideBtn:"list",validators:{required:!0}},{name:"subcateg_titulo",label:"Subcategor\xeda:",type:"text",sideBtn:"list",validators:{required:!0}}]},this.materialData={controls:[{name:"codigo",label:"C\xf3digo:",type:"text",validators:{required:!0}},{name:"color_nombre",label:"Descripci\xf3n comercial:",type:"text",validators:{required:!0}},{name:"inventario",label:"existencia:",type:"number",validators:{required:!0}}]},this.pictList=[],this.showAreaState={item:"",show_item:!1,show_materiales:!1,show_material_item:!1,material_item:"",sel_categ:"",sel_categ_jerarquia:"",sel_subcat:""},this.itemreset=0}ngOnInit(){var e=this;return(0,d.Z)(function*(){yield e.httpCat.getOMVCatsDataPromise(),e.httpCat.productList.length>0&&e.startItemAdditionalVals(e.httpCat.productList[0].familia)})()}getClicked(e){}onGetData(e){if(e._btnclick_&&e._btnclick_.length>0)switch(e._btnclick_){case"categ_titulo":return e._btnclick_="",void this.getCategList();case"subcateg_titulo":return e._btnclick_="",void this.getSubCategList()}this.sharedvar.updatePropResult(this.itemResult,e)}onGetMaterialData(e){this.sharedvar.updatePropResult(this.materialResult,e),this.itemResult.existencia=0,this.itemResult.materiales.forEach(i=>{this.itemResult.existencia=this.itemResult.existencia+(Number(i.inventario)||0)})}getCategList(){const e=[];this.httpCat.categTree.forEach(a=>{a.nombre&&a.nombre.length>0&&e.push({selected:a.nombre===this.showAreaState.sel_categ,myid:a.jerarquia,name:a.nombre})}),this.ds.aSelectDefault({title:"Seleccione Categor\xeda",dgheigth:450,viewfilter:!1,viewAdd:!1,multiSelect:!1,valuelst:e}).subscribe(a=>{a&&(this.showAreaState.sel_categ=a[0].name,this.showAreaState.sel_categ_jerarquia=a[0].myid,this.showAreaState.sel_subcat="-",this.setItemAdditionalVals())})}getSubCategList(){const e=[],i=this.httpCat.categTree.find(o=>o.nombre===this.showAreaState.sel_categ);i&&(i.subCategTree?.forEach(o=>{o.nombre&&o.nombre.length>0&&e.push({selected:o.nombre===this.showAreaState.sel_categ,myid:o.jerarquia,name:o.nombre})}),this.ds.aSelectDefault({title:"Seleccione Subcategor\xeda",dgheigth:450,viewfilter:!1,viewAdd:!1,multiSelect:!1,valuelst:e}).subscribe(o=>{if(o){const n=this.httpCat.productList.find(c=>c.familia===this.showAreaState.item);if(!n)return;n.subcategoria_1.jerarquia=o[0].myid,n.subcategoria_1.nombre=o[0].name,n.subcategoria_1.categoria.nombre=this.showAreaState.sel_categ,n.subcategoria_1.categoria.jerarquia=this.showAreaState.sel_categ_jerarquia,this.showAreaState.sel_subcat=o[0].name,this.setItemAdditionalVals()}}))}getExpand(e,i){let a=!1;switch(i){case"item":a=this.showAreaState.item===e&&this.showAreaState.show_item;break;case"materiales":a=this.showAreaState.item===e&&this.showAreaState.show_materiales;break;default:a=this.showAreaState.material_item===e&&this.showAreaState.show_material_item}return a}showArea(e,i){var a=this;return(0,d.Z)(function*(){switch(("item"===i||"materiales"===i)&&a.showAreaState.item!==e&&(a.showAreaState.item=e,a.startItemAdditionalVals(e)),i){case"item":a.showAreaState.show_item=!a.showAreaState.show_item,a.showAreaState.show_materiales=!1,a.showAreaState.show_material_item=!1;break;case"materiales":a.showAreaState.show_materiales=!0,a.showAreaState.show_material_item=!1,a.showAreaState.show_item=!1;break;default:a.showAreaState.show_material_item=!a.showAreaState.show_material_item,a.showAreaState.material_item!==e&&(a.showAreaState.material_item=e,a.startMaterialData(e))}})()}startMaterialData(e){const i=this.itemResult.materiales.find(a=>a.codigo===e);i&&(this.materialResult=i)}ask2Save(){var e=this;return(0,d.Z)(function*(){e.snkBar.open('Salvar datos?"',"Continuar",{duration:3e3}).onAction().subscribe(function(){var i=(0,d.Z)(function*(a){yield e.saveItem()});return function(a){return i.apply(this,arguments)}}())})()}saveItem(){var e=this;return(0,d.Z)(function*(){e.showArea(e.itemResult.familia,"item");const i=e.httpCat.productList.findIndex(n=>n.familia===e.itemResult.familia);if(i<0)return;let a=`${e.itemResult.familia}__0`,o=e.findPictElement(a);if(o){const n=`${e.sharedvar.OMV_SERVER}catalog/${a}.JPEG`;o.file_name=n,e.itemResult.imagen.imagen.file_md=n,e.itemResult.imagen.imagen.file_sm=n,o.data=e.httpCat.b64toBlob(o.data,"image/JPEG")}e.itemResult.materiales.forEach(n=>{for(let c=0;c<6;c++)if(a=`${e.itemResult.familia}_${n.codigo||""}_${c}`,o=e.findPictElement(a),o){const m=`${e.sharedvar.OMV_SERVER}catalog/${a}.JPEG`;o.file_name=m,c>=n.imagenes.length?n.imagenes.push({id:c,imagen:{file:"",file_sm:m,file_md:m},orden:c,nombre_original:n.color_nombre}):(n.imagenes[c].imagen.file_md=m,n.imagenes[c].imagen.file_sm=m),o.data=e.httpCat.b64toBlob(o.data,"image/jpeg")}}),e.httpCat.productList[i]={...e.itemResult},yield e.httpCat.updateItemData(e.itemResult,e.pictList),e.pictList=[]})()}startItemAdditionalVals(e){const i=this.httpCat.productList.find(a=>a.familia===e);i&&(this.itemResult=i,this.showAreaState.sel_categ=i.subcategoria_1.categoria.nombre,this.showAreaState.sel_subcat=i.subcategoria_1.nombre,this.setItemAdditionalVals())}setItemAdditionalVals(){this.itemResult.existencia=Number(this.itemResult.existencia),this.itemResult.precio=Number(this.itemResult.precio),this.itemResult.categ_titulo=this.showAreaState.sel_categ,this.itemResult.subcateg_titulo=this.showAreaState.sel_subcat||"-",this.itemResult={...this.itemResult},this.itemreset++}getComImage(e,i,a=0){const n=this.findPictElement(`${e.familia}_${i?.codigo||""}_${a}`);return n?this.sanitizer.bypassSecurityTrustUrl(n.data):i?i.imagenes&&i.imagenes[a]?i.imagenes[a].imagen.file_md:"":e.imagen.imagen.file_md}fileChangeEvent(e,i,a=0){const o=`${e.familia}_${i?.codigo||""}_${a}`;this.imageCompress.uploadFile().then(({image:n,orientation:c})=>{console.log("Size in bytes of the uploaded image was:",this.imageCompress.byteCount(n)),this.imageCompress.compressFile(n,c,100,100,550,550).then(m=>{const u=this.findPictElement(o);u?u.data=m:this.pictList.push({file_name:o,data:m})})})}findPictElement(e){return this.pictList.find(i=>i.file_name===e)}static#t=this.\u0275fac=function(i){return new(i||s)(t.Y36(E),t.Y36(T.m),t.Y36(R.H7),t.Y36(M.r),t.Y36(F),t.Y36(I.ux))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-catalog"]],decls:4,vars:2,consts:[[1,"flex","flex-col","h-screen","bg-slate-100"],[3,"buttons","onClicked"],[1,"flex-1","px-10","pt-1","overflow-auto"],["class","flex flex-col justify-between",4,"ngFor","ngForOf"],[1,"flex","flex-col","justify-between"],[1,"flex","justify-between"],[3,"click"],[1,"text-sky-500"],["color","warn"],["class","p-2 bg-gray-200",4,"ngIf"],["class","p-2 flex flex-col bg-gray-200",4,"ngIf"],[1,"p-2","bg-gray-200"],[1,"flex-1","content-center","flex","border-b","border-violet-500"],[1,"font-medium","mr-2","h-12"],[1,"flex-1","p-1","mt-2",3,"jsonFormData","values","reset","result"],[1,"h-60","border","min-w-60","border-gray-400","py-1","px-2","rounded","shadow-sm",3,"src"],["accept",".png,.jpg,.jpeg",2,"display","none",3,"click"],[1,"p-2","flex","flex-col","bg-gray-200"],[1,"flex-1","flex","content-center","border-b","border-violet-500"],["mat-stroked-button",""],["color","primary"],[1,"p-2","text-sm"],["class","flex flex-col justify-start",4,"ngFor","ngForOf"],[1,"flex","flex-col","justify-start"],[1,"flex","flex-row"],[1,"grow"],[1,"ml-2"],["color","primary",3,"click"],[4,"ngIf"],[1,"flex-1","p-1","mt-2",3,"jsonFormData","values","result"]],template:function(i,a){1&i&&(t.TgZ(0,"div",0)(1,"app-nav-bar",1),t.NdJ("onClicked",function(n){return a.getClicked(n)}),t.qZA(),t.TgZ(2,"div",2),t.YNc(3,H,16,3,"div",3),t.qZA()()),2&i&&(t.xp6(1),t.Q6J("buttons","101000"),t.xp6(2),t.Q6J("ngForOf",a.httpCat.productList))},dependencies:[g.sg,g.O5,N.w,x.Hw,C.lW,O.r]})}return s})()}];let K=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#i=this.\u0275inj=t.cJS({imports:[A.Bz.forChild(Q),A.Bz]})}return s})();var Y=r(2469),P=r(6842);let B=(()=>{class s{static#t=this.\u0275fac=function(i){return new(i||s)};static#e=this.\u0275mod=t.oAB({type:s});static#i=this.\u0275inj=t.cJS({imports:[g.ez,K,Y.R,x.Ps,C.ot,P.N]})}return s})()}}]);