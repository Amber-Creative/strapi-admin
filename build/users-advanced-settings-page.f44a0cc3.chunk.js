"use strict";(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[9460],{84764:function(b,u,n){n.r(u),n.d(u,{default:function(){return C}});var t=n(32735),r=n(84968),y=n(5636),d=n(83281),a=n(13478),i=n(39161),O=n(57269),f=n(88369),e=n(59677),h=[{intlLabel:{id:(0,e.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,e.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,e.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,e.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,e.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,e.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,e.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,e.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,e.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,e.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,e.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,e.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}],l=n(5173);const m=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))");var g=l.Ry().shape({email_confirmation_redirection:l.nK().when("email_confirmation",{is:!0,then:l.Z_().matches(m).required(),otherwise:l.Z_().nullable()}),email_reset_password:l.Z_(a.translatedErrors.string).matches(m,a.translatedErrors.regex).nullable()});const F=async()=>{const{data:s}=await e.be.get((0,e.Gc)("advanced"));return s},P=s=>e.be.put((0,e.Gc)("advanced"),s),R=()=>t.createElement(a.CheckPagePermissions,{permissions:f.Z.readAdvancedSettings},t.createElement(w,null)),w=()=>{const{formatMessage:s}=(0,y.useIntl)(),M=(0,a.useNotification)(),{lockApp:x,unlockApp:B}=(0,a.useOverlayBlocker)(),{notifyStatus:I}=(0,i.useNotifyAT)(),D=(0,r.useQueryClient)();(0,a.useFocusWhenNavigate)();const N=(0,t.useMemo)(()=>({update:f.Z.updateAdvancedSettings}),[]),{isLoading:U,allowedActions:{canUpdate:Z}}=(0,a.useRBAC)(N),{status:z,data:A}=(0,r.useQuery)("advanced",()=>F(),{onSuccess(){I(s({id:(0,e.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){M({type:"warning",message:{id:(0,e.OB)("notification.error"),defaultMessage:"An error occured"}})}}),G=U||z!=="success",L=(0,r.useMutation)(c=>P(c),{async onSuccess(){await D.invalidateQueries("advanced"),M({type:"success",message:{id:(0,e.OB)("notification.success.saved"),defaultMessage:"Saved"}}),B()},onError(){M({type:"warning",message:{id:(0,e.OB)("notification.error"),defaultMessage:"An error occured"}}),B()},refetchActive:!0}),{isLoading:k}=L,H=async c=>{x();const p=c.email_confirmation?c.email_confirmation_redirection:"";await L.mutateAsync({...c,email_confirmation_redirection:p})};return G?t.createElement(i.Main,{"aria-busy":"true"},t.createElement(a.SettingsPageTitle,{name:s({id:(0,e.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),t.createElement(i.HeaderLayout,{title:s({id:(0,e.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),t.createElement(i.ContentLayout,null,t.createElement(a.LoadingIndicatorPage,null))):t.createElement(i.Main,{"aria-busy":k},t.createElement(a.SettingsPageTitle,{name:s({id:(0,e.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),t.createElement(d.Formik,{onSubmit:H,initialValues:A.settings,validateOnChange:!1,validationSchema:g,enableReinitialize:!0},({errors:c,values:p,handleChange:T,isSubmitting:W})=>t.createElement(a.Form,null,t.createElement(i.HeaderLayout,{title:s({id:(0,e.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:t.createElement(i.Button,{loading:W,type:"submit",disabled:!Z,startIcon:t.createElement(O.Check,null),size:"S"},s({id:"global.save",defaultMessage:"Save"}))}),t.createElement(i.ContentLayout,null,t.createElement(i.Box,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},t.createElement(i.Stack,{spacing:4},t.createElement(i.Typography,{variant:"delta",as:"h2"},s({id:"global.settings",defaultMessage:"Settings"})),t.createElement(i.Grid,{gap:6},t.createElement(i.GridItem,{col:6,s:12},t.createElement(i.Select,{label:s({id:(0,e.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:p.default_role,hint:s({id:(0,e.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:o=>T({target:{name:"default_role",value:o}})},A.roles.map(o=>t.createElement(i.Option,{key:o.type,value:o.type},o.name)))),h.map(o=>{let S=p[o.name];return S||(S=o.type==="bool"?!1:""),t.createElement(i.GridItem,{key:o.name,...o.size},t.createElement(a.GenericInput,{...o,value:S,error:c[o.name],disabled:o.name==="email_confirmation_redirection"&&p.email_confirmation===!1,onChange:T}))}))))))))};var C=R},8917:function(b,u,n){var t=n(55721),r=n(13478),y=n.n(r);const d=t.Z.create({baseURL:"http://localhost:1337"});d.interceptors.request.use(async a=>(a.headers={Authorization:`Bearer ${r.auth.getToken()}`,Accept:"application/json","Content-Type":"application/json"},a),a=>{Promise.reject(a)}),d.interceptors.response.use(a=>a,a=>{throw a.response?.status===401&&(r.auth.clearAppStorage(),window.location.reload()),a}),u.Z=d},59677:function(b,u,n){n.d(u,{be:function(){return t.Z},YX:function(){return d},Gc:function(){return O},OB:function(){return f.Z}});var t=n(8917),r=n(92891),d=e=>Object.keys(e).reduce((v,h)=>{const l=e[h].controllers,m=Object.keys(l).reduce((E,g)=>((0,r.isEmpty)(l[g])||(E[g]=l[g]),E),{});return(0,r.isEmpty)(m)||(v[h]={controllers:m}),v},{}),a=n(90201),O=e=>`/${a.Z}/${e}`,f=n(82069)}}]);
