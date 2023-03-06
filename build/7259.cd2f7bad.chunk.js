"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[7259],{30493:function(h,E,e){e.d(E,{Z:function(){return g}});var t=e(32735),u=e(5636),s=e(60216),a=e.n(s),o=e(13478),i=e(57269),r=e(39161),l=e(8888);const c=({onRegenerate:d,idToRegenerate:n,backUrl:m})=>{const{formatMessage:M}=(0,u.useIntl)(),[R,O]=(0,t.useState)(!1),{regenerateData:_,isLoadingConfirmation:A}=(0,l.rW)(m,n,d),D=async()=>{_(),O(!1)};return t.createElement(t.Fragment,null,t.createElement(r.Button,{startIcon:t.createElement(i.Refresh,null),type:"button",size:"S",variant:"tertiary",onClick:()=>O(!0),name:"regenerate"},M({id:"Settings.tokens.regenerate",defaultMessage:"Regenerate"})),t.createElement(o.ConfirmDialog,{bodyText:{id:"Settings.tokens.popUpWarning.message",defaultMessage:"Are you sure you want to regenerate this token?"},iconRightButton:t.createElement(i.Refresh,null),isConfirmButtonLoading:A,isOpen:R,onToggleDialog:()=>O(!1),onConfirm:D,leftButtonText:{id:"Settings.tokens.Button.cancel",defaultMessage:"Cancel"},rightButtonText:{id:"Settings.tokens.Button.regenerate",defaultMessage:"Regenerate"},title:{id:"Settings.tokens.RegenerateDialog.title",defaultMessage:"Regenerate token"}}))};c.defaultProps={onRegenerate(){}},c.propTypes={onRegenerate:a().func,idToRegenerate:a().oneOfType([a().number,a().string]).isRequired,backUrl:a().string.isRequired};var f=c;const p=({title:d,token:n,setToken:m,canEditInputs:M,canRegenerate:R,isSubmitting:O,backUrl:_,regenerateUrl:A})=>{const{formatMessage:D}=(0,u.useIntl)(),K=N=>{m({...n,accessKey:N})};return t.createElement(r.HeaderLayout,{title:n?.name||D(d),primaryAction:M?t.createElement(r.Stack,{horizontal:!0,spacing:2},R&&n?.id&&t.createElement(f,{backUrl:A,onRegenerate:K,idToRegenerate:n?.id}),t.createElement(r.Button,{disabled:O,loading:O,startIcon:t.createElement(i.Check,null),type:"submit",size:"S"},D({id:"global.save",defaultMessage:"Save"}))):R&&n?.id&&t.createElement(f,{onRegenerate:K,idToRegenerate:n?.id,backUrl:A}),navigationAction:t.createElement(o.Link,{startIcon:t.createElement(i.ArrowLeft,null),to:_},D({id:"global.back",defaultMessage:"Back"}))})};p.propTypes={token:a().shape({id:a().oneOfType([a().number,a().string]),type:a().string,lifespan:a().oneOfType([a().number,a().string]),name:a().string,accessKey:a().string,permissions:a().array,description:a().string,createdAt:a().string}),canEditInputs:a().bool.isRequired,canRegenerate:a().bool.isRequired,setToken:a().func.isRequired,isSubmitting:a().bool.isRequired,backUrl:a().string.isRequired,title:a().shape({id:a().string,label:a().string}).isRequired,regenerateUrl:a().string.isRequired},p.defaultProps={token:void 0};var g=p},4321:function(h,E,e){var t=e(32735),u=e(60216),s=e.n(u),a=e(5636),o=e(39161),i=e.n(o),r=e(37944);const l=({token:c,errors:f,values:p,onChange:g,isCreating:d})=>{const{formatMessage:n}=(0,a.useIntl)();return t.createElement(t.Fragment,null,t.createElement(o.Select,{name:"lifespan",label:n({id:"Settings.tokens.form.duration",defaultMessage:"Token duration"}),value:p.lifespan!==null?p.lifespan:"0",error:f.lifespan?n(f.lifespan?.id?f.lifespan:{id:f.lifespan,defaultMessage:f.lifespan}):null,onChange:m=>{g({target:{name:"lifespan",value:m}})},required:!0,disabled:!d,placeholder:"Select"},t.createElement(o.Option,{value:"604800000"},n({id:"Settings.tokens.duration.7-days",defaultMessage:"7 days"})),t.createElement(o.Option,{value:"2592000000"},n({id:"Settings.tokens.duration.30-days",defaultMessage:"30 days"})),t.createElement(o.Option,{value:"7776000000"},n({id:"Settings.tokens.duration.90-days",defaultMessage:"90 days"})),t.createElement(o.Option,{value:"0"},n({id:"Settings.tokens.duration.unlimited",defaultMessage:"Unlimited"}))),t.createElement(o.Typography,{variant:"pi",textColor:"neutral600"},!d&&`${n({id:"Settings.tokens.duration.expiration-date",defaultMessage:"Expiration date"})}: ${(0,r.IX)(c?.createdAt,parseInt(p.lifespan,10))}`))};l.propTypes={errors:s().shape({lifespan:s().string}),onChange:s().func.isRequired,values:s().shape({lifespan:s().oneOfType([s().number,s().string])}).isRequired,isCreating:s().bool.isRequired,token:s().shape({id:s().oneOfType([s().number,s().string]),type:s().string,lifespan:s().string,name:s().string,accessKey:s().string,permissions:s().array,description:s().string,createdAt:s().string})},l.defaultProps={errors:{},token:{}},E.Z=l},93682:function(h,E,e){var t=e(32735),u=e(5636),s=e(13478),a=e.n(s),o=e(39161),i=e.n(o),r=e(57269),l=e.n(r),c=e(60216),f=e.n(c),p=e(59087),g=e.n(p);const d=({token:n,tokenType:m})=>{const{formatMessage:M}=(0,u.useIntl)(),R=(0,s.useNotification)(),{trackUsage:O}=(0,s.useTracking)(),_=(0,t.useRef)(O);return t.createElement(s.ContentBox,{endAction:n&&t.createElement("span",{style:{alignSelf:"start"}},t.createElement(p.CopyToClipboard,{onCopy:()=>{_.current("didCopyTokenKey",{tokenType:m}),R({type:"success",message:{id:"Settings.tokens.notification.copied"}})},text:n},t.createElement(o.IconButton,{label:M({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"}),noBorder:!0,icon:t.createElement(r.Duplicate,null),style:{padding:0,height:"1rem"}}))),title:n||M({id:"Settings.tokens.copy.editTitle",defaultMessage:"This token isn\u2019t accessible anymore."}),subtitle:M(n?{id:"Settings.tokens.copy.lastWarning",defaultMessage:"Make sure to copy this token, you won\u2019t be able to see it again!"}:{id:"Settings.tokens.copy.editMessage",defaultMessage:"For security reasons, you can only see your token once."}),icon:t.createElement(r.Key,null),iconBackground:"neutral100"})};d.defaultProps={token:null},d.propTypes={token:f().string,tokenType:f().string.isRequired},E.Z=d},42789:function(h,E,e){var t=e(32735),u=e(60216),s=e.n(u),a=e(5636),o=e(39161),i=e.n(o);const r=({errors:l,values:c,onChange:f,canEditInputs:p})=>{const{formatMessage:g}=(0,a.useIntl)();return t.createElement(o.Textarea,{label:g({id:"Settings.tokens.form.description",defaultMessage:"Description"}),name:"description",error:l.description?g(l.description?.id?l.description:{id:l.description,defaultMessage:l.description}):null,onChange:f,disabled:!p},c.description)};r.propTypes={errors:s().shape({description:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({description:s().string}).isRequired},r.defaultProps={errors:{}},E.Z=r},8377:function(h,E,e){var t=e(32735),u=e(60216),s=e.n(u),a=e(5636),o=e(39161),i=e.n(o);const r=({errors:l,values:c,onChange:f,canEditInputs:p})=>{const{formatMessage:g}=(0,a.useIntl)();return t.createElement(o.TextInput,{name:"name",error:l.name?g(l.name?.id?l.name:{id:l.name,defaultMessage:l.name}):null,label:g({id:"Settings.tokens.form.name",defaultMessage:"Name"}),onChange:f,value:c.name,disabled:!p,required:!0})};r.propTypes={errors:s().shape({name:s().string}),onChange:s().func.isRequired,canEditInputs:s().bool.isRequired,values:s().shape({name:s().string}).isRequired},r.defaultProps={errors:{}},E.Z=r},68774:function(h,E,e){e.d(E,{Z:function(){return t},f:function(){return u}});const t="api-token",u="transfer-token"},37944:function(h,E,e){e.d(E,{IX:function(){return a},fK:function(){return l},mk:function(){return p}});var t=e(64213),u=e(54049),a=(g,d,n="en")=>{if(d&&typeof d=="number"){const m=d/24/60/60/1e3;return(0,t.format)((0,t.addDays)(new Date(g),m),"PPP",{locale:u[n]})}return"Unlimited"},o=e(5173),i=e(13478),l=o.Ry().shape({name:o.Z_(i.translatedErrors.string).required(i.translatedErrors.required),type:o.Z_(i.translatedErrors.string).oneOf(["read-only","full-access","custom"]).required(i.translatedErrors.required),description:o.Z_().nullable(),lifespan:o.Rx().integer().min(0).nullable().defined(i.translatedErrors.required)}),c=e(92891),p=g=>{const d={allActionsIds:[],permissions:[]};return d.permissions=Object.keys(g).map(n=>({apiId:n,label:n.split("::")[1],controllers:(0,c.flatten)(Object.keys(g[n].controllers).map(m=>({controller:m,actions:(0,c.flatten)(g[n].controllers[m].map(M=>{const R=`${n}.${m}.${M}`;return n.includes("api::")&&d.allActionsIds.push(R),{action:M,actionId:R}}))})))})),d}},37259:function(h,E,e){e.d(E,{Z:function(){return z}});var t=e(32735),u=e(5636),s=e(83281),a=e(5141),o=e(84968),i=e(13478),r=e(39161),l=e(64421),c=e(5173),p=c.Ry().shape({name:c.Z_(i.translatedErrors.string).required(i.translatedErrors.required),description:c.Z_().nullable(),lifespan:c.Rx().integer().min(0).nullable().defined(i.translatedErrors.required)}),g=e(57269),d=e(60216),n=e.n(d);const m=({transferTokenName:C})=>{const{formatMessage:k}=(0,u.useIntl)();return(0,i.useFocusWhenNavigate)(),t.createElement(r.Main,{"aria-busy":"true"},t.createElement(i.SettingsPageTitle,{name:"Transfer Tokens"}),t.createElement(r.HeaderLayout,{primaryAction:t.createElement(r.Button,{disabled:!0,startIcon:t.createElement(g.Check,null),type:"button",size:"L"},k({id:"global.save",defaultMessage:"Save"})),title:C||k({id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"})}),t.createElement(r.ContentLayout,null,t.createElement(i.LoadingIndicatorPage,null)))};m.defaultProps={transferTokenName:null},m.propTypes={transferTokenName:n().string};var M=m,R=e(72041),O=e(4321),_=e(8377),A=e(42789);const D=({errors:C,onChange:k,canEditInputs:L,isCreating:B,values:I,transferToken:T})=>{const{formatMessage:U}=(0,u.useIntl)();return t.createElement(r.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(r.Stack,{spacing:4},t.createElement(r.Typography,{variant:"delta",as:"h2"},U({id:"global.details",defaultMessage:"Details"})),t.createElement(r.Grid,{gap:5},t.createElement(r.GridItem,{key:"name",col:6,xs:12},t.createElement(_.Z,{errors:C,values:I,canEditInputs:L,onChange:k})),t.createElement(r.GridItem,{key:"description",col:6,xs:12},t.createElement(A.Z,{errors:C,values:I,canEditInputs:L,onChange:k})),t.createElement(r.GridItem,{key:"lifespan",col:6,xs:12},t.createElement(O.Z,{isCreating:B,errors:C,values:I,onChange:k,token:T})))))};D.propTypes={errors:n().shape({name:n().string,description:n().string,lifespan:n().string,type:n().string}),onChange:n().func.isRequired,canEditInputs:n().bool.isRequired,values:n().shape({name:n().string,description:n().string,lifespan:n().oneOfType([n().number,n().string]),type:n().string}).isRequired,isCreating:n().bool.isRequired,transferToken:n().shape({id:n().oneOfType([n().number,n().string]),type:n().string,lifespan:n().string,name:n().string,accessKey:n().string,permissions:n().array,description:n().string,createdAt:n().string})},D.defaultProps={errors:{},transferToken:{}};var K=D,N=e(93682),V=e(30493),W=e(68774);const $="Name already taken";var z=()=>{(0,i.useFocusWhenNavigate)();const{formatMessage:C}=(0,u.useIntl)(),{lockApp:k,unlockApp:L}=(0,i.useOverlayBlocker)(),B=(0,i.useNotification)(),I=(0,a.useHistory)(),[T,U]=(0,t.useState)(I.location.state?.transferToken.accessKey?{...I.location.state.transferToken}:null),{trackUsage:G}=(0,i.useTracking)(),Z=(0,t.useRef)(G),{setCurrentStep:H}=(0,i.useGuidedTour)(),{allowedActions:{canCreate:j,canUpdate:X,canRegenerate:Y}}=(0,i.useRBAC)(R.Z.settings["transfer-tokens"]),{params:{id:x}}=(0,a.useRouteMatch)("/settings/transfer-tokens/:id"),{get:Q,post:J,put:q}=(0,i.useFetchClient)(),v=x==="create";(0,t.useEffect)(()=>{Z.current(v?"didAddTokenFromList":"didEditTokenFromList",{tokenType:W.f})},[v]);const{status:w}=(0,o.useQuery)(["transfer-token",x],async()=>{const{data:{data:y}}=await Q(`/admin/transfer/tokens/${x}`);return U({...y}),y},{enabled:!v&&!T,onError(){B({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),ee=async(y,S)=>{Z.current(v?"willCreateToken":"willEditToken",{tokenType:W.f}),k();const F=y.lifespan&&parseInt(y.lifespan,10)&&y.lifespan!=="0"?parseInt(y.lifespan,10):null;try{const{data:{data:P}}=v?await J("/admin/transfer/tokens",{...y,lifespan:F,permissions:["push"]}):await q(`/admin/transfer/tokens/${x}`,{name:y.name,description:y.description,type:y.type,permissions:["push"]});L(),v&&(I.replace(`/settings/transfer-tokens/${P.id}`,{transferToken:P}),H("transferTokens.success")),U({...P}),B({type:"success",message:C(v?{id:"notification.success.transfertokencreated",defaultMessage:"Transfer Token successfully created"}:{id:"notification.success.transfertokenedited",defaultMessage:"Transfer Token successfully edited"})}),Z.current(v?"didCreateToken":"didEditToken",{type:T?.type,tokenType:W.f})}catch(P){const te=(0,l.Iz)(P.response.data);S.setErrors(te),P?.response?.data?.error?.message===$?B({type:"warning",message:P.response.data.message||"notification.error.tokennamenotunique"}):B({type:"warning",message:P?.response?.data?.message||"notification.error"}),L()}},b=X&&!v||j&&v;return!v&&!T&&w!=="success"?t.createElement(M,{transferTokenName:T?.name}):t.createElement(r.Main,null,t.createElement(i.SettingsPageTitle,{name:"Transfer Tokens"}),t.createElement(s.Formik,{validationSchema:p,validateOnChange:!1,initialValues:{name:T?.name||"",description:T?.description||"",lifespan:T?.lifespan?T.lifespan.toString():T?.lifespan},enableReinitialize:!0,onSubmit:(y,S)=>ee(y,S)},({errors:y,handleChange:S,isSubmitting:F,values:P})=>t.createElement(i.Form,null,t.createElement(V.Z,{backUrl:"/settings/transfer-tokens",title:{id:"Settings.transferTokens.createPage.title",defaultMessage:"Create Transfer Token"},token:T,setToken:U,canEditInputs:b,canRegenerate:Y,isSubmitting:F,regenerateUrl:"/admin/transfer/tokens/"}),t.createElement(r.ContentLayout,null,t.createElement(r.Stack,{spacing:6},Boolean(T?.name)&&t.createElement(N.Z,{token:T?.accessKey,tokenType:W.f}),t.createElement(K,{errors:y,onChange:S,canEditInputs:b,isCreating:v,values:P,transferToken:T}))))))}}}]);