"use strict";(self.webpackChunkppg_frontend=self.webpackChunkppg_frontend||[]).push([[382],{382:(wt,U,a)=>{a.r(U),a.d(U,{AccountModule:()=>Zt});var F=a(5113),u=a(9808),J=a(2155),s=a(3075),E=a(4466),p=a(1787),h=a(593),v=a(520),x=a(9591),t=a(5e3),N=a(5953),Z=a(3106),w=a(1716),c=a(9224),C=a(7093),m=a(7322),M=a(7531),d=a(5245),A=a(7423);function L(o,r){1&o&&(t.TgZ(0,"mat-error")(1,"mat-icon"),t._uU(2,"error"),t.qZA(),t._uU(3," La contrase\xf1a actual es requerida "),t.qZA())}function H(o,r){1&o&&(t.TgZ(0,"mat-error")(1,"mat-icon"),t._uU(2,"error"),t.qZA(),t._uU(3," La nueva contrase\xf1a es requerida "),t.qZA())}function k(o,r){if(1&o&&(t.TgZ(0,"mat-error")(1,"mat-icon"),t._uU(2,"error"),t.qZA(),t._uU(3),t.qZA()),2&o){const e=t.oxw();t.xp6(3),t.hij(" ",e.getPasswordValidationMsg()," ")}}function Y(o,r){1&o&&(t.TgZ(0,"mat-error")(1,"mat-icon"),t._uU(2,"error"),t.qZA(),t._uU(3," Debe confirmar su contrase\xf1a volvi\xe9ndola a escribir "),t.qZA())}function Q(o,r){1&o&&(t.TgZ(0,"mat-error")(1,"mat-icon"),t._uU(2,"error"),t.qZA(),t._uU(3," Las contrase\xf1as no coinciden "),t.qZA())}let T=(()=>{class o{constructor(e,n,i){this.fb=e,this.accountService=n,this.alertService=i,this.hideCurrent=!0,this.hideNew=!0,this.hideNew2=!0,this.submitting=!1,this.form=this.fb.group({currentPassword:["",[s.kI.required]],newPassword:["",[s.kI.required,s.kI.minLength(8),s.kI.maxLength(30),s.kI.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#@$!%*?&.])([A-Za-z\d#@$!%*?&.]|[^ ])/)]],newPassword2:["",[s.kI.required]]},{validators:[(0,x.e)("newPassword","newPassword2")]})}get currentPassword(){return this.form.get("currentPassword")}get newPassword(){return this.form.get("newPassword")}get newPassword2(){return this.form.get("newPassword2")}cancel(){location.reload()}getPasswordValidationMsg(){var e;const n=null===(e=this.form.get("newPassword"))||void 0===e?void 0:e.value;if(n)return(0,x.r)(n)}updatePassword(){if(this.form.invalid)return;const{currentPassword:e,newPassword:n}=this.form.value;this.accountService.updatePassword({currentPassword:e,newPassword:n}).subscribe({next:()=>{this.alertService.success({title:"Contrase\xf1a actualizada con \xe9xito"}),this.form.reset()},error:i=>{i instanceof v.UA&&this.alertService.error(j[i.status])}})}}return o.PATH="change-password",o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(N.B),t.Y36(Z.c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-change-password"]],decls:32,vars:13,consts:[["title","Cambiar contrase\xf1a"],[3,"formGroup","ngSubmit"],["fxLayout","column"],["appearance","outline"],["matInput","","formControlName","currentPassword","name","currentPassword",3,"type"],["matSuffix","",3,"click"],[4,"ngIf"],["matInput","","formControlName","newPassword","name","newPassword",3,"type"],["matInput","","formControlName","newPassword2","name","newPassword2",3,"type"],["mat-button","","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(e,n){1&e&&(t._UZ(0,"app-account-header",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return n.updatePassword()}),t.TgZ(2,"mat-card")(3,"mat-card-content",2)(4,"mat-form-field",3)(5,"mat-label"),t._uU(6,"Contrase\xf1a actual"),t.qZA(),t._UZ(7,"input",4),t.TgZ(8,"mat-icon",5),t.NdJ("click",function(){return n.hideCurrent=!n.hideCurrent}),t._uU(9),t.qZA(),t.YNc(10,L,4,0,"mat-error",6),t.qZA(),t.TgZ(11,"mat-form-field",3)(12,"mat-label"),t._uU(13,"Nueva contrase\xf1a"),t.qZA(),t._UZ(14,"input",7),t.TgZ(15,"mat-icon",5),t.NdJ("click",function(){return n.hideNew=!n.hideNew}),t._uU(16),t.qZA(),t.YNc(17,H,4,0,"mat-error",6),t.YNc(18,k,4,1,"mat-error",6),t.qZA(),t.TgZ(19,"mat-form-field",3)(20,"mat-label"),t._uU(21,"Confirmar nueva contrase\xf1a"),t.qZA(),t._UZ(22,"input",8),t.TgZ(23,"mat-icon",5),t.NdJ("click",function(){return n.hideNew2=!n.hideNew2}),t._uU(24),t.qZA(),t.YNc(25,Y,4,0,"mat-error",6),t.YNc(26,Q,4,0,"mat-error",6),t.qZA()(),t.TgZ(27,"mat-card-actions")(28,"button",9),t.NdJ("click",function(){return n.cancel()}),t._uU(29,"Cancelar"),t.qZA(),t.TgZ(30,"button",10),t._uU(31," Establecer nueva contrase\xf1a "),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(6),t.Q6J("type",n.hideCurrent?"password":"text"),t.xp6(2),t.Oqu(n.hideCurrent?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==n.currentPassword?null:n.currentPassword.hasError("required")),t.xp6(4),t.Q6J("type",n.hideNew?"password":"text"),t.xp6(2),t.Oqu(n.hideNew?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==n.newPassword?null:n.newPassword.hasError("required")),t.xp6(1),t.Q6J("ngIf",null==n.newPassword?null:n.newPassword.hasError("pattern")),t.xp6(4),t.Q6J("type",n.hideNew2?"password":"text"),t.xp6(2),t.Oqu(n.hideNew2?"visibility_off":"visibility"),t.xp6(1),t.Q6J("ngIf",null==n.newPassword2?null:n.newPassword2.hasError("required")),t.xp6(1),t.Q6J("ngIf",n.form.hasError("doNotMatch")),t.xp6(4),t.Q6J("disabled",n.submitting))},directives:[w.G,s._Y,s.JL,s.sg,c.a8,c.dn,C.xw,m.KE,m.hX,M.Nt,s.Fj,s.JJ,s.u,d.Hw,m.R9,u.O5,m.TO,c.hq,A.lW],styles:["mat-card[_ngcontent-%COMP%]{margin:24px auto;max-width:660px}mat-card-actions[_ngcontent-%COMP%]{text-align:right}"]}),o})();const j={400:{title:"La contrase\xf1a actual no es correcta"}};var g=a(752),D=a(7838),z=a(773),G=a(2368);function V(o,r){1&o&&t._UZ(0,"mat-spinner")}function B(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-card-content")(1,"p"),t._uU(2," Edita cuales datos de tu cuenta deseas que aparezcan en la descarga de un perfil profesional: "),t.qZA(),t.TgZ(3,"mat-slide-toggle",4),t._uU(4," Foto "),t.qZA(),t.TgZ(5,"mat-slide-toggle",5),t._uU(6," Correo electr\xf3nico "),t.qZA(),t.TgZ(7,"mat-slide-toggle",6),t._uU(8," Biograf\xeda "),t.qZA(),t.TgZ(9,"mat-slide-toggle",7),t._uU(10," Enlace de LinkedIn "),t.qZA(),t.TgZ(11,"mat-slide-toggle",8),t._uU(12," Enlace de GitHub "),t.qZA(),t.TgZ(13,"mat-slide-toggle",9),t._uU(14," Enlace de portafolio "),t.qZA()(),t.TgZ(15,"mat-card-actions")(16,"button",10),t.NdJ("click",function(){return t.CHM(e),t.oxw().cancel()}),t._uU(17," Cancelar "),t.qZA(),t.TgZ(18,"button",11),t._uU(19," Editar descarga de perfil "),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(18),t.Q6J("disabled",e.submitting)}}let P=(()=>{class o{constructor(e,n,i){this.fb=e,this.dpService=n,this.alertService=i,this.submitting=!1,this.loadingData=!0,this.form=this.fb.group({photo:[!1],email:[!1],biography:[!1],linkedIn:[!1],github:[!1],portfolio:[!1]})}ngOnInit(){this.loadAccountDataInForm()}loadAccountDataInForm(){this.loadingData=!0,this.dpService.get().subscribe(({data:e})=>{this.form.setValue({photo:e.photo,email:e.email,biography:e.biography,linkedIn:e.linkedIn,github:e.github,portfolio:e.portfolio}),this.loadingData=!1})}updateDownloadProfile(){this.submitting=!0,this.dpService.patch({photo:this.form.value.photo,email:this.form.value.email,biography:this.form.value.biography,linkedIn:this.form.value.linkedIn,github:this.form.value.github,portfolio:this.form.value.portfolio}).subscribe({next:()=>{this.submitting=!1,this.alertService.success({title:"Preferencias actualizadas con \xe9xito"})},error:n=>{this.submitting=!1,n instanceof v.UA&&this.alertService.error()}})}cancel(){location.reload()}}return o.PATH="edit-download",o.\u0275fac=function(e){return new(e||o)(t.Y36(s.qu),t.Y36(D.a),t.Y36(Z.c))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-edit-download"]],decls:6,vars:3,consts:[["title","Editar descarga de perfil"],[3,"formGroup","ngSubmit"],[4,"ngIf","ngIfElse"],["formContent",""],["formControlName","photo","name","photo"],["formControlName","email","name","email"],["formControlName","biography","name","biography"],["formControlName","linkedIn","name","linkedIn"],["formControlName","github","name","github"],["formControlName","portfolio","name","portfolio"],["mat-button","","color","","type","button",3,"click"],["mat-raised-button","","color","primary","type","submit",3,"disabled"]],template:function(e,n){if(1&e&&(t._UZ(0,"app-account-header",0),t.TgZ(1,"form",1),t.NdJ("ngSubmit",function(){return n.updateDownloadProfile()}),t.TgZ(2,"mat-card"),t.YNc(3,V,1,0,"mat-spinner",2),t.YNc(4,B,20,1,"ng-template",null,3,t.W1O),t.qZA()()),2&e){const i=t.MAs(5);t.xp6(1),t.Q6J("formGroup",n.form),t.xp6(2),t.Q6J("ngIf",n.loadingData)("ngIfElse",i)}},directives:[w.G,s._Y,s.JL,s.sg,c.a8,u.O5,z.Ou,c.dn,G.Rr,s.JJ,s.u,c.hq,A.lW],styles:["mat-card[_ngcontent-%COMP%]{margin:24px auto;max-width:660px}mat-card-actions[_ngcontent-%COMP%]{text-align:right}form[_ngcontent-%COMP%]   mat-slide-toggle[_ngcontent-%COMP%]{margin:8px 0;display:block}mat-spinner[_ngcontent-%COMP%]{margin:auto}"]}),o})();var O=a(1186),R=a(4834);function $(o,r){if(1&o&&(t.TgZ(0,"a",7),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.Q6J("href",e.account.linkedIn,t.LSH),t.xp6(1),t.hij(" ",e.account.linkedIn||"-"," ")}}function X(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function K(o,r){if(1&o&&(t.TgZ(0,"a",7),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.Q6J("href",e.account.github,t.LSH),t.xp6(1),t.hij(" ",e.account.github||"-"," ")}}function W(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}function tt(o,r){if(1&o&&(t.TgZ(0,"a",7),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.Q6J("href",e.account.portfolio,t.LSH),t.xp6(1),t.hij(" ",e.account.portfolio||"-"," ")}}function et(o,r){1&o&&(t.TgZ(0,"span"),t._uU(1,"-"),t.qZA())}let f=(()=>{class o{constructor(e){this.authService=e,this.account=this.authService.authAccount}get fullName(){return`${this.account.name} ${this.account.surname}`}get editAccountRoute(){return`/${h.P.PATH}/${g.V.PATH}`}}return o.PATH="overview",o.\u0275fac=function(e){return new(e||o)(t.Y36(O.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-overview"]],decls:60,vars:14,consts:[["title","Visi\xf3n general de la cuenta"],["fxLayout","row"],["fxFlex","50",1,"font-medium"],["fxFlex","50"],["target","_blank",3,"href",4,"ngIf"],[4,"ngIf"],["mat-button","","color","primary",3,"routerLink"],["target","_blank",3,"href"]],template:function(e,n){1&e&&(t._UZ(0,"app-account-header",0),t.TgZ(1,"mat-card")(2,"mat-card-content")(3,"ul")(4,"li",1)(5,"p",2),t._uU(6,"Nombre completo"),t.qZA(),t.TgZ(7,"p",3),t._uU(8),t.ALo(9,"titlecase"),t.qZA()(),t._UZ(10,"mat-divider"),t.TgZ(11,"li")(12,"p",2),t._uU(13,"Correo electr\xf3nico"),t.qZA(),t.TgZ(14,"p",3),t._uU(15),t.qZA()(),t._UZ(16,"mat-divider"),t.TgZ(17,"li")(18,"p",2),t._uU(19,"Biograf\xeda"),t.qZA(),t.TgZ(20,"p",3),t._uU(21),t.qZA()(),t._UZ(22,"mat-divider"),t.TgZ(23,"li")(24,"p",2),t._uU(25,"T\xedtulo de trabajo"),t.qZA(),t.TgZ(26,"p",3),t._uU(27),t.qZA()(),t._UZ(28,"mat-divider"),t.TgZ(29,"li")(30,"p",2),t._uU(31,"Ubicaci\xf3n"),t.qZA(),t.TgZ(32,"p",3),t._uU(33),t.qZA()(),t._UZ(34,"mat-divider"),t.TgZ(35,"li")(36,"p",2),t._uU(37,"Perfil LinkedIn"),t.qZA(),t.TgZ(38,"p",3),t.YNc(39,$,2,2,"a",4),t.YNc(40,X,2,0,"span",5),t.qZA()(),t._UZ(41,"mat-divider"),t.TgZ(42,"li")(43,"p",2),t._uU(44,"Perfil GitHub"),t.qZA(),t.TgZ(45,"p",3),t.YNc(46,K,2,2,"a",4),t.YNc(47,W,2,0,"span",5),t.qZA()(),t._UZ(48,"mat-divider"),t.TgZ(49,"li")(50,"p",2),t._uU(51,"Portfolio"),t.qZA(),t.TgZ(52,"p",3),t.YNc(53,tt,2,2,"a",4),t.YNc(54,et,2,0,"span",5),t.qZA()()()(),t.TgZ(55,"mat-card-actions")(56,"a",6)(57,"mat-icon"),t._uU(58,"edit"),t.qZA(),t._uU(59," Editar cuenta "),t.qZA()()()),2&e&&(t.xp6(8),t.hij(" ",t.lcZ(9,12,n.fullName)," "),t.xp6(7),t.hij(" ",n.account.email," "),t.xp6(6),t.hij(" ",n.account.biography||"-"," "),t.xp6(6),t.hij(" ",n.account.jobTitle," "),t.xp6(6),t.hij(" ",n.account.location," "),t.xp6(6),t.Q6J("ngIf",n.account.linkedIn),t.xp6(1),t.Q6J("ngIf",!n.account.linkedIn),t.xp6(6),t.Q6J("ngIf",n.account.github),t.xp6(1),t.Q6J("ngIf",!n.account.github),t.xp6(6),t.Q6J("ngIf",n.account.portfolio),t.xp6(1),t.Q6J("ngIf",!n.account.portfolio),t.xp6(2),t.Q6J("routerLink",n.editAccountRoute))},directives:[w.G,c.a8,c.dn,C.xw,C.yH,R.d,u.O5,c.hq,A.zs,p.yS,d.Hw],pipes:[u.rS],styles:["mat-card[_ngcontent-%COMP%]{margin:24px auto;max-width:660px}mat-card-actions[_ngcontent-%COMP%]{text-align:right}img[_ngcontent-%COMP%]{width:100%;height:auto}li[_ngcontent-%COMP%]{list-style-type:none}li[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:10px;margin-bottom:10px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}"]}),o})();const ot=[{path:"",component:h.P,children:[{path:f.PATH,component:f},{path:g.V.PATH,component:g.V},{path:T.PATH,component:T},{path:P.PATH,component:P},{path:"**",redirectTo:f.PATH}]}];let nt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[p.Bz.forChild(ot)],p.Bz]}),o})();var at=a(72),rt=a(7746),I=a(4623);function it(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"a",1),t.NdJ("click",function(){return t.CHM(e),t.oxw().clickOption.emit(!0)}),t.TgZ(1,"mat-icon",2),t._uU(2),t.qZA(),t.TgZ(3,"span",3),t._uU(4),t.qZA()()}if(2&o){const e=r.$implicit;t.Q6J("routerLink",e.path),t.xp6(2),t.hij(" ",e.icon," "),t.xp6(2),t.hij(" ",e.label," ")}}let st=(()=>{class o{constructor(){this.menuOptions=[{icon:"home",label:"Vista general de mi cuenta",path:f.PATH},{icon:"edit",label:"Editar cuenta",path:g.V.PATH},{icon:"lock",label:"Cambiar contrase\xf1a",path:T.PATH},{icon:"app_registration",label:"Editar descarga de perfil",path:P.PATH}],this.clickOption=new t.vpe}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-account-nav-list"]],outputs:{clickOption:"clickOption"},decls:2,vars:1,consts:[["mat-list-item","",3,"routerLink","click",4,"ngFor","ngForOf"],["mat-list-item","",3,"routerLink","click"],["color","primary",1,"sidenav-icon"],[1,"ml-3"]],template:function(e,n){1&e&&(t.TgZ(0,"mat-nav-list"),t.YNc(1,it,5,3,"a",0),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngForOf",n.menuOptions))},directives:[I.Hk,u.sg,I.Tg,p.yS,d.Hw],styles:[""]}),o})();var ct=a(6805),lt=a(930);function S(o,r){const e="object"==typeof r;return new Promise((n,i)=>{const l=new lt.Hp({next:q=>{n(q),l.unsubscribe()},error:i,complete:()=>{e?n(r.defaultValue):i(new ct.K)}});o.subscribe(l)})}var ut=a(5226),_=a.n(ut),pt=a(4004),mt=a(2340);let dt=(()=>{class o{constructor(e){this.http=e}uploadFile(e){const n=`${mt.N.cloudinaryApi}/jean-cloudinary/upload`,i=new FormData;return i.append("file",e,e.name),i.append("upload_preset","ppg-ug"),this.http.post(n,i).pipe((0,pt.U)(l=>l.secure_url))}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(v.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var gt=a(3322),b=a(2181);const ft=["photo"],ht=["fileInput"];let vt=(()=>{class o{constructor(e,n,i,l){this.authService=e,this.alertService=n,this.cloudinaryService=i,this.accountService=l,this.defaultPhotoUrl="https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg",this.account=this.authService.authAccount}get photoStyle(){return{"background-image":`url(${this.account.photo||this.defaultPhotoUrl})`}}get fullName(){if(!this.account)return;const{name:e,surname:n}=this.account;return`${e} ${n}`}ngAfterViewInit(){this.setListenersForHoverPhoto()}setListenersForHoverPhoto(){this.photo.nativeElement.addEventListener("mouseenter",()=>{this.photo.nativeElement.innerText="CAMBIAR FOTO"}),this.photo.nativeElement.addEventListener("mouseout",()=>{this.photo.nativeElement.innerText=""})}uploadAccountPhoto(){const{files:e}=this.fileInput.nativeElement;(null==e?void 0:e.length)&&(_().fire({title:"Subiendo...",text:"Por favor, espere...",allowOutsideClick:!1,showConfirmButton:!1,didOpen:()=>{_().showLoading()}}),this.cloudinaryService.uploadFile(e[0]).subscribe(i=>{S(this.accountService.updateAccount({photo:i})).then(()=>{_().close(),this.account.photo=i,this.alertService.success({title:"Foto de perfil actualizada con \xe9xito"})})}))}removeAccountPhoto(){S(this.accountService.updateAccount({photo:""})).then(()=>{this.account.photo="",this.alertService.success({title:"Foto de perfil eliminada"})})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(O.e),t.Y36(Z.c),t.Y36(dt),t.Y36(N.B))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-photo"]],viewQuery:function(e,n){if(1&e&&(t.Gf(ft,5),t.Gf(ht,5)),2&e){let i;t.iGM(i=t.CRH())&&(n.photo=i.first),t.iGM(i=t.CRH())&&(n.fileInput=i.first)}},decls:20,vars:6,consts:[[1,"photo-container"],["id","photo","alt","account photo",3,"ngStyle","matMenuTriggerFor"],["photo",""],["menu","matMenu"],["mat-menu-item","",3,"click"],[1,"account-name"],["type","file",2,"display","none",3,"change"],["fileInput",""]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t._UZ(1,"div",1,2),t.TgZ(3,"mat-menu",null,3)(5,"button",4),t.NdJ("click",function(){return t.CHM(i),t.MAs(19).click()}),t.TgZ(6,"mat-icon"),t._uU(7,"upload"),t.qZA(),t._uU(8," Subir foto "),t.qZA(),t.TgZ(9,"button",4),t.NdJ("click",function(){return n.removeAccountPhoto()}),t.TgZ(10,"mat-icon"),t._uU(11,"delete"),t.qZA(),t._uU(12," Eliminar foto "),t.qZA()(),t.TgZ(13,"h3",5),t._uU(14),t.ALo(15,"titlecase"),t.qZA(),t.TgZ(16,"mat-card-subtitle"),t._uU(17),t.qZA()(),t.TgZ(18,"input",6,7),t.NdJ("change",function(){return n.uploadAccountPhoto()}),t.qZA()}if(2&e){const i=t.MAs(4);t.xp6(1),t.Q6J("ngStyle",n.photoStyle)("matMenuTriggerFor",i),t.xp6(13),t.Oqu(t.lcZ(15,4,n.fullName)),t.xp6(3),t.Oqu(n.account.biography)}},directives:[u.PC,gt.Zl,b.p6,b.VK,b.OP,d.Hw,c.$j],pipes:[u.rS],styles:["#photo[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;background-size:cover;background-blend-mode:darken;width:128px;height:128px;border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:700;color:#fff;margin:0;overflow:hidden;text-align:center;padding:0;font-size:12px;cursor:pointer}#photo[_ngcontent-%COMP%]:hover{background-color:#00000080}.photo-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:2rem;margin-bottom:1rem}.account-name[_ngcontent-%COMP%]{margin-top:.75rem;margin-bottom:.5rem;font-size:large;font-weight:500}"]}),o})();var y=a(2638);let Zt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[u.ez,rt.q,s.u5,F.xu,J.o9,E.m,nt,s.UX,at.ef]]}),o})();t.B6R(h.P,[y.TM,y.JX,vt,st,y.Rh,p.lC],[])}}]);