"use strict";(self.webpackChunkquote_cli_01=self.webpackChunkquote_cli_01||[]).push([[592],{2993:(p,m,i)=>{i.d(m,{y:()=>a});var t=i(4650),_=i(6895),d=i(7392);function c(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"input",6),t.NdJ("change",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.visibleCond(n))}),t.qZA(),t.TgZ(2,"label",7),t._uU(3,"Incluir"),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("checked",e.visible)}}function u(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"span",8)(1,"mat-icon",9),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.editCond())}),t._uU(2,"edit"),t.qZA(),t.TgZ(3,"mat-icon",9),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.delCond())}),t._uU(4,"delete"),t.qZA()()}}let a=(()=>{class o{constructor(){this.edit=!1,this.editView=!1,this.visible=!0,this.status=new t.vpe}editCond(){this.condition.tag="edit",this.status.emit(this.condition)}delCond(){this.condition.tag="delete",this.status.emit(this.condition)}visibleCond(e){this.condition.tag=e.target.checked?"visible":"invisible",this.status.emit(this.condition)}static#t=this.\u0275fac=function(s){return new(s||o)};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["app-cond-quote"]],inputs:{condition:"condition",edit:"edit",editView:"editView",visible:"visible"},outputs:{status:"status"},decls:7,vars:4,consts:[[1,"mt-2"],[1,"col-span-3","border","border-gray-200","bg-slate-100","p-1","text-center","font-medium"],["class","flex items-center mb-4",4,"ngIf"],["class","text-sky-700",4,"ngIf"],[1,"border","border-gray-200","px-1"],[1,"flex","items-center","mb-4"],["id","default-checkbox","type","checkbox",1,"w-4","h-4","text-blue-600","bg-gray-100","border-gray-300","rounded","focus:ring-blue-500","dark:focus:ring-blue-600","dark:ring-offset-gray-800","focus:ring-2","dark:bg-gray-700","dark:border-gray-600",3,"checked","change"],["for","default-checkbox",1,"ml-2","text-sm","font-medium","text-gray-900","dark:text-gray-300"],[1,"text-sky-700"],[3,"click"]],template:function(s,n){1&s&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2),t.YNc(3,c,4,1,"div",2),t.YNc(4,u,5,0,"span",3),t.qZA(),t.TgZ(5,"div",4),t._uU(6),t.qZA()()),2&s&&(t.xp6(2),t.hij(" ",n.condition.name," \xa0 "),t.xp6(1),t.Q6J("ngIf",n.editView),t.xp6(1),t.Q6J("ngIf",n.edit),t.xp6(2),t.hij(" ",n.condition.detail," "))},dependencies:[_.O5,d.Hw]})}return o})()},2355:(p,m,i)=>{i.d(m,{z:()=>r});var t=i(6895),_=i(2510),d=i(2993),c=i(4650);const u=[{path:"",component:d.y}];let a=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#e=this.\u0275mod=c.oAB({type:e});static#n=this.\u0275inj=c.cJS({imports:[_.Bz.forChild(u),_.Bz]})}return e})();var o=i(7392);let r=(()=>{class e{static#t=this.\u0275fac=function(l){return new(l||e)};static#e=this.\u0275mod=c.oAB({type:e});static#n=this.\u0275inj=c.cJS({imports:[t.ez,a,o.Ps]})}return e})()},9671:(p,m,i)=>{function t(d,c,u,a,o,r,e){try{var s=d[r](e),n=s.value}catch(l){return void u(l)}s.done?c(n):Promise.resolve(n).then(a,o)}function _(d){return function(){var c=this,u=arguments;return new Promise(function(a,o){var r=d.apply(c,u);function e(n){t(r,a,o,e,s,"next",n)}function s(n){t(r,a,o,e,s,"throw",n)}e(void 0)})}}i.d(m,{Z:()=>_})}}]);