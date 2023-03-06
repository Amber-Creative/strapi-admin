"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[4263],{34669:function(R,u,e){e.r(u),e.d(u,{default:function(){return J}});var t=e(32735),a=e(13478),n=e(5141),g=e(92891),l=e(72041),d=e(41925),o=e(5636),p=e(60216),m=e.n(p),c=e(88423),P=e.n(c),h=e(33795),I=e.n(h),W=e(9086),T=e.n(W),K=e(84968),S=e(83281),s=e(39161),f=e(57269),v=e(64421);const F=async y=>{const{get:_}=(0,a.getFetchClient)(),{data:r}=await _(`/admin/users/${y}`);return r.data},G=async(y,_)=>{const{put:r}=(0,a.getFetchClient)(),{data:M}=await r(`/admin/users/${y}`,_);return M.data};var H=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.username.label",defaultMessage:"Username"},name:"username",placeholder:{id:"Auth.form.username.placeholder",defaultMessage:"e.g. Kai_Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"global.password",defaultMessage:"Password"},name:"password",type:"password",size:{col:6,xs:12},autoComplete:"new-password"},{intlLabel:{id:"Auth.form.confirmPassword.label",defaultMessage:"Password confirmation"},name:"confirmPassword",type:"password",size:{col:6,xs:12},autoComplete:"new-password"}],[{intlLabel:{id:"Auth.form.active.label",defaultMessage:"Active"},name:"isActive",type:"bool",size:{col:6,xs:12}}]],C=e(1057),Y=e(4397);const j=(()=>window&&window.strapi&&window.strapi.isEE?e(28890).Z:e(16325).Z)(),z=["email","firstname","lastname","username","isActive","roles"],$=y=>{let{canUpdate:_}=y;const{formatMessage:r}=(0,o.useIntl)(),{params:{id:M}}=(0,n.useRouteMatch)("/settings/users/:id"),{push:U}=(0,n.useHistory)(),{setUserDisplayName:Q}=(0,a.useAppInfos)(),Z=(0,a.useNotification)(),{lockApp:q,unlockApp:ee}=(0,a.useOverlayBlocker)();(0,a.useFocusWhenNavigate)();const{status:te,data:x}=(0,K.useQuery)(["user",M],()=>F(M),{retry:!1,onError(i){i.response.status===403&&(Z({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}}),U("/")),console.log(i.response.status)}}),ae=async(i,E)=>{q();try{const D=await G(M,T()(i,"confirmPassword"));Z({type:"success",message:r({id:"notification.success.saved",defaultMessage:"Saved"})});const O=a.auth.getUserInfo();if(M.toString()===O.id.toString()){a.auth.setUserInfo(D);const B=I()(i,"username")||(0,v.Pp)(i.firstname,i.lastname);Q(B)}E.setValues(P()(i,z))}catch(D){const O=(0,v.Iz)(D.response.data),B=Object.keys(O).reduce((b,L)=>(b[L]=O[L].id,b),{});E.setErrors(B),Z({type:"warning",message:I()(D,"response.data.error.message","notification.error")})}ee()},X=te!=="success",se=X?{id:"app.containers.Users.EditPage.header.label-loading",defaultMessage:"Edit user"}:{id:"app.containers.Users.EditPage.header.label",defaultMessage:"Edit {name}"},N=Object.keys(P()(x,z)).reduce((i,E)=>E==="roles"?(i[E]=(x?.roles||[]).map(D=>{let{id:O}=D;return O}),i):(i[E]=x?.[E],i),{}),ne=N.username||(0,v.Pp)(N.firstname,N.lastname),k=r(se,{name:ne});return X?t.createElement(s.Main,{"aria-busy":"true"},t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(s.HeaderLayout,{primaryAction:t.createElement(s.Button,{disabled:!0,startIcon:t.createElement(f.Check,null),type:"button",size:"L"},r({id:"global.save",defaultMessage:"Save"})),title:k,navigationAction:t.createElement(a.Link,{startIcon:t.createElement(f.ArrowLeft,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},r({id:"global.back",defaultMessage:"Back"}))}),t.createElement(s.ContentLayout,null,t.createElement(a.LoadingIndicatorPage,null))):t.createElement(s.Main,null,t.createElement(a.SettingsPageTitle,{name:"Users"}),t.createElement(S.Formik,{onSubmit:ae,initialValues:N,validateOnChange:!1,validationSchema:C.YM},i=>{let{errors:E,values:D,handleChange:O,isSubmitting:B}=i;return t.createElement(a.Form,null,t.createElement(s.HeaderLayout,{primaryAction:t.createElement(s.Button,{disabled:B||!_,startIcon:t.createElement(f.Check,null),loading:B,type:"submit",size:"L"},r({id:"global.save",defaultMessage:"Save"})),title:k,navigationAction:t.createElement(a.Link,{startIcon:t.createElement(f.ArrowLeft,null),to:"/settings/users?pageSize=10&page=1&sort=firstname"},r({id:"global.back",defaultMessage:"Back"}))}),t.createElement(s.ContentLayout,null,x?.registrationToken&&t.createElement(s.Box,{paddingBottom:6},t.createElement(j,{registrationToken:x.registrationToken})),t.createElement(s.Stack,{spacing:7},t.createElement(s.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(s.Stack,{spacing:4},t.createElement(s.Typography,{variant:"delta",as:"h2"},r({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"Details"})),t.createElement(s.Grid,{gap:5},H.map(b=>b.map(L=>t.createElement(s.GridItem,(0,d.Z)({key:L.name},L.size),t.createElement(a.GenericInput,(0,d.Z)({},L,{disabled:!_,error:E[L.name],onChange:O,value:D[L.name]||""})))))))),t.createElement(s.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(s.Stack,{spacing:4},t.createElement(s.Typography,{variant:"delta",as:"h2"},r({id:"global.roles",defaultMessage:"User's role"})),t.createElement(s.Grid,{gap:5},t.createElement(s.GridItem,{col:6,xs:12},t.createElement(Y.Z,{disabled:!_,error:E.roles,onChange:O,value:D.roles}))))))))}))};$.propTypes={canUpdate:m().bool.isRequired};var w=$,J=()=>{const y=(0,a.useNotification)(),_=(0,t.useMemo)(()=>({read:l.Z.settings.users.read,update:l.Z.settings.users.update}),[]),{isLoading:r,allowedActions:{canRead:M,canUpdate:U}}=(0,a.useRBAC)(_),{state:Q}=(0,n.useLocation)(),Z=(0,g.get)(Q,"from","/");return(0,t.useEffect)(()=>{r||!M&&!U&&y({type:"info",message:{id:"notification.permission.not-allowed-read",defaultMessage:"You are not allowed to see this document"}})},[r,M,U,y]),r?t.createElement(a.LoadingIndicatorPage,null):!M&&!U?t.createElement(n.Redirect,{to:Z}):t.createElement(w,{canUpdate:U})}},76779:function(R,u,e){var t=e(32735),a=e(60216),n=e.n(a),g=e(39161),l=e.n(g),d=e(13478),o=e.n(d),p=e(57269),m=e.n(p),c=e(59087),P=e.n(c),h=e(5636);const I=({children:W,target:T})=>{const K=(0,d.useNotification)(),{formatMessage:S}=(0,h.useIntl)(),s=()=>{K({type:"info",message:{id:"notification.link-copied"}})},f=S({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(d.ContentBox,{endAction:t.createElement(c.CopyToClipboard,{onCopy:s,text:T},t.createElement(g.IconButton,{label:f,noBorder:!0,icon:t.createElement(p.Duplicate,null)})),title:T,titleEllipsis:!0,subtitle:W,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};I.propTypes={children:n().oneOfType([n().element,n().string]).isRequired,target:n().string.isRequired},u.Z=I},16325:function(R,u,e){var t=e(32735),a=e(5636),n=e(60216),g=e.n(n),l=e(463),d=e(76779);const o=({registrationToken:p})=>{const{formatMessage:m}=(0,a.useIntl)(),c=`${window.location.origin}${l.Z}auth/register?registrationToken=${p}`;return t.createElement(d.Z,{target:c},m({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:g().string},u.Z=o},4397:function(R,u,e){var t=e(32735),a=e(60216),n=e.n(a),g=e(5636),l=e(39161),d=e.n(l),o=e(84968),p=e.n(o),m=e(83292),c=e(57269),P=e.n(c),h=e(13478),I=e.n(h);const W=m.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,T=m.default.div`
  animation: ${W} 2s infinite linear;
`,K=()=>t.createElement(T,null,t.createElement(c.Loader,null)),S=async()=>{const{get:f}=(0,h.getFetchClient)(),{data:v}=await f("/admin/roles");return v.data},s=({disabled:f,error:v,onChange:F,value:G})=>{const{status:V,data:H}=(0,o.useQuery)(["roles"],S,{staleTime:5e4}),{formatMessage:C}=(0,g.useIntl)(),Y=v?C({id:v,defaultMessage:v}):"",j=C({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),z=C({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),$=C({id:"app.components.Select.placeholder",defaultMessage:"Select"}),w=V==="loading"?t.createElement(K,null):void 0;return t.createElement(l.Select,{id:"roles",disabled:f,error:Y,hint:z,label:j,name:"roles",onChange:A=>{F({target:{name:"roles",value:A}})},placeholder:$,multi:!0,startIcon:w,value:G,withTags:!0,required:!0},(H||[]).map(A=>t.createElement(l.Option,{key:A.id,value:A.id},C({id:`global.${A.code}`,defaultMessage:A.name}))))};s.defaultProps={disabled:!1,error:void 0},s.propTypes={disabled:n().bool,error:n().string,onChange:n().func.isRequired,value:n().array.isRequired},u.Z=s},1057:function(R,u,e){e.d(u,{YM:function(){return m},Rw:function(){return l}});var t=e(5173),a=e(13478);const n={firstname:t.Z_().trim().required(a.translatedErrors.required),lastname:t.Z_(),email:t.Z_().email(a.translatedErrors.email).lowercase().required(a.translatedErrors.required),username:t.Z_().nullable(),password:t.Z_().min(8,a.translatedErrors.minLength).matches(/[a-z]/,"components.Input.error.contain.lowercase").matches(/[A-Z]/,"components.Input.error.contain.uppercase").matches(/\d/,"components.Input.error.contain.number"),confirmPassword:t.Z_().min(8,a.translatedErrors.minLength).oneOf([t.iH("password"),null],"components.Input.error.password.noMatch").when("password",(c,P)=>c?P.required(a.translatedErrors.required):P)};var l={...n,currentPassword:t.Z_().when(["password","confirmPassword"],(c,P,h)=>c||P?h.required(a.translatedErrors.required):h),preferedLanguage:t.Z_().nullable()},o={roles:t.IX().min(1,a.translatedErrors.required).required(a.translatedErrors.required)},m=t.Ry().shape({...n,isActive:t.Xg(),...o})},28890:function(R,u,e){var t=e(32735),a=e(5636),n=e(60216),g=e.n(n),l=e(463),d=e(76779);const o=({registrationToken:p})=>{const{formatMessage:m}=(0,a.useIntl)();return p?t.createElement(d.Z,{target:`${window.location.origin}${l.Z}auth/register?registrationToken=${p}`},m({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(d.Z,{target:`${window.location.origin}${l.Z}auth/login`},m({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};o.defaultProps={registrationToken:""},o.propTypes={registrationToken:g().string},u.Z=o}}]);