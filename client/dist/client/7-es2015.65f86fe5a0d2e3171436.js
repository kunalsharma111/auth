(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{zrcO:function(r,o,e){"use strict";e.r(o),e.d(o,"UsersModule",(function(){return v}));var t=e("ofXK"),n=e("3Pt+"),i=e("tyNb"),s=e("Nm8O"),c=e("fXoL"),a=e("OC8m"),b=e("qfBg"),d=e("jPKf"),l=e("L5s/");function u(r,o){1&r&&(c.Zb(0,"div"),c.Nc(1,"Email or User Id is required"),c.Yb())}function f(r,o){if(1&r&&(c.Zb(0,"div",20),c.Lc(1,u,2,0,"div",21),c.Yb()),2&r){const r=c.nc();c.Hb(1),c.uc("ngIf",r.f.email.errors.required)}}function g(r,o){1&r&&(c.Zb(0,"div"),c.Nc(1,"Password is required"),c.Yb())}function m(r,o){if(1&r&&(c.Zb(0,"div",20),c.Lc(1,g,2,0,"div",21),c.Yb()),2&r){const r=c.nc();c.Hb(1),c.uc("ngIf",r.f.password.errors.required)}}const p=function(r){return{"is-invalid":r}},h=[{path:"",component:(()=>{class r{constructor(r,o,e,t,n,i){this.formBuilder=r,this.router=o,this.notifyService=e,this.userService=t,this.datatransferService=n,this.userAccess=i,this.formSubmitted=!1,this.helper=new s.a,this.showPassword=!1}ngOnInit(){this.createForm()}togglePassword(){this.showPassword=!this.showPassword}get f(){return this.loginForm.controls}createForm(){this.loginForm=this.formBuilder.group({email:["",[n.s.required]],password:["",[n.s.required]]})}loginUser(){this.formSubmitted=!0,this.loginForm.invalid||this.userService.userLogin(this.loginForm.value).subscribe(r=>{this.notifyService.showSuccess("Login Successfully",""),localStorage.setItem("Token",r.token),this.helper.decodeToken(r.token),this.router.navigate(["/dashboard"])},r=>{this.notifyService.showError(r.error.error?r.error.error:r.error.msg?r.error.msg:"Something went wrong","")})}}return r.\u0275fac=function(o){return new(o||r)(c.Ub(n.d),c.Ub(i.b),c.Ub(a.a),c.Ub(b.a),c.Ub(d.a),c.Ub(l.a))},r.\u0275cmp=c.Ob({type:r,selectors:[["app-login"]],decls:28,vars:12,consts:[[1,"fullpage"],[1,"container-fluid"],[1,"row","justify-content-center"],[1,"col-12","col-sm-6","col-md-4"],[1,"form-container",3,"formGroup","ngSubmit"],[1,"form-group"],["src","../../../assets/img/logo.png",1,"img-fluid","logo"],[1,"text-center","font-weight-bold","mb-3","lh"],["for","InputEmail1"],["type","text","formControlName","email","aria-describeby","emailHelp","placeholder","Email or Username",1,"form-control",3,"ngClass"],["class","invalid-feedback",4,"ngIf"],["for","InputPassword1"],[1,"row"],[1,"col-md-11"],["formControlName","password","placeholder","Password",1,"form-control","password-type",2,"border-right","none",3,"type","ngClass"],[1,"col-md-1"],["type","button",1,"password-type","bg-transparent",2,"float","right","padding","6px 12px","border","1px solid #ced4da","border-left","none","border-radius","0.25rem","outline","none",3,"click"],["aria-hidden","true"],["type","submit",1,"btn","btn-custom","btn-block","btn-background"],[1,"form-footer","text-center","mt-4","background"],[1,"invalid-feedback"],[4,"ngIf"]],template:function(r,o){1&r&&(c.Zb(0,"div",0),c.Zb(1,"section",1),c.Zb(2,"section",2),c.Zb(3,"section",3),c.Zb(4,"form",4),c.lc("ngSubmit",(function(){return o.loginUser()})),c.Zb(5,"div",5),c.Vb(6,"img",6),c.Zb(7,"h4",7),c.Nc(8," Login "),c.Yb(),c.Zb(9,"label",8),c.Nc(10,"Email or Username"),c.Yb(),c.Vb(11,"input",9),c.Lc(12,f,2,1,"div",10),c.Yb(),c.Zb(13,"div",5),c.Zb(14,"label",11),c.Nc(15,"Password"),c.Yb(),c.Zb(16,"div",12),c.Zb(17,"div",13),c.Vb(18,"input",14),c.Yb(),c.Zb(19,"div",15),c.Zb(20,"button",16),c.lc("click",(function(){return o.togglePassword()})),c.Vb(21,"i",17),c.Yb(),c.Yb(),c.Yb(),c.Lc(22,m,2,1,"div",10),c.Yb(),c.Zb(23,"button",18),c.Nc(24,"Submit"),c.Yb(),c.Zb(25,"div",19),c.Zb(26,"p"),c.Nc(27,"To reset password, Please contact the system admin"),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb(),c.Yb()),2&r&&(c.Hb(4),c.uc("formGroup",o.loginForm),c.Hb(7),c.uc("ngClass",c.yc(8,p,o.formSubmitted&&o.f.email.errors)),c.Hb(1),c.uc("ngIf",o.formSubmitted&&o.f.email.errors),c.Hb(6),c.uc("type",o.showPassword?"text":"password")("ngClass",c.yc(10,p,o.formSubmitted&&o.f.password.errors)),c.Hb(3),c.Jb(o.showPassword?"fa fa-eye":"fa fa-eye-slash"),c.Hb(1),c.uc("ngIf",o.formSubmitted&&o.f.password.errors))},directives:[n.u,n.m,n.g,n.b,n.l,n.f,t.l,t.n],styles:[".fullpage[_ngcontent-%COMP%]{height:100vh;padding-top:22vh;background-image:url(br.7b8159444e7c8e9716ca.jpg);overflow:hidden;background:linear-gradient(rgba(0,0,0,.5),rgba(135,196,66,.7)),url(br.7b8159444e7c8e9716ca.jpg)}form[_ngcontent-%COMP%]{background:#fff}.logo[_ngcontent-%COMP%]{max-height:50px;display:block;margin-left:auto;margin-right:auto}.lh[_ngcontent-%COMP%]{color:#87c442}.form-container[_ngcontent-%COMP%]{border-radius:10px;padding:30px}label[_ngcontent-%COMP%]{color:grey;font-weight:500}.background[_ngcontent-%COMP%]{color:#87c442}.btn-background[_ngcontent-%COMP%]{background-color:#87c442;color:#fff}"]}),r})()},{path:"**",redirectTo:""}];let w=(()=>{class r{}return r.\u0275mod=c.Sb({type:r}),r.\u0275inj=c.Rb({factory:function(o){return new(o||r)},imports:[[i.d.forChild(h)],i.d]}),r})(),v=(()=>{class r{}return r.\u0275mod=c.Sb({type:r}),r.\u0275inj=c.Rb({factory:function(o){return new(o||r)},imports:[[t.b,w,n.i,n.q]]}),r})()}}]);