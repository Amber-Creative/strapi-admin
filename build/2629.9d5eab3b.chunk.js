(self.webpackChunk_strapi_admin=self.webpackChunk_strapi_admin||[]).push([[2629],{56671:function(f,c,e){var t=e(35897),n=e(74741),r=n(t);f.exports=r},52920:function(f,c,e){var t=e(56671),n=e(81580);function r(a,o){var i=-1,d=n(a)?Array(a.length):[];return t(a,function(l,h,x){d[++i]=o(l,h,x)}),d}f.exports=r},50690:function(f,c,e){var t=e(26460),n=e(80166),r=e(88904),a=e(52920),o=e(36024),i=e(76535),d=e(1397),l=e(15362),h=e(77236);function x(v,m,O){m.length?m=t(m,function(p){return h(p)?function(E){return n(E,p.length===1?p[0]:p)}:p}):m=[l];var u=-1;m=t(m,i(r));var y=a(v,function(p,E,s){var g=t(m,function(_){return _(p)});return{criteria:g,index:++u,value:p}});return o(y,function(p,E){return d(p,E,O)})}f.exports=x},36024:function(f){function c(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}f.exports=c},40709:function(f,c,e){var t=e(22945);function n(r,a){if(r!==a){var o=r!==void 0,i=r===null,d=r===r,l=t(r),h=a!==void 0,x=a===null,v=a===a,m=t(a);if(!x&&!m&&!l&&r>a||l&&h&&v&&!x&&!m||i&&h&&v||!o&&v||!d)return 1;if(!i&&!l&&!m&&r<a||m&&o&&d&&!i&&!l||x&&o&&d||!h&&d||!v)return-1}return 0}f.exports=n},1397:function(f,c,e){var t=e(40709);function n(r,a,o){for(var i=-1,d=r.criteria,l=a.criteria,h=d.length,x=o.length;++i<h;){var v=t(d[i],l[i]);if(v){if(i>=x)return v;var m=o[i];return v*(m=="desc"?-1:1)}}return r.index-a.index}f.exports=n},74741:function(f,c,e){var t=e(81580);function n(r,a){return function(o,i){if(o==null)return o;if(!t(o))return r(o,i);for(var d=o.length,l=a?d:-1,h=Object(o);(a?l--:++l<d)&&i(h[l],l,h)!==!1;);return o}}f.exports=n},37213:function(f,c,e){var t=e(26460),n=e(88904),r=e(52920),a=e(77236);function o(i,d){var l=a(i)?t:r;return l(i,n(d,3))}f.exports=o},98978:function(f,c,e){var t=e(40314),n=e(50690),r=e(94569),a=e(63108),o=r(function(i,d){if(i==null)return[];var l=d.length;return l>1&&a(i,d[0],d[1])?d=[]:l>2&&a(d[0],d[1],d[2])&&(d=[d[0]]),n(i,t(d,1),[])});f.exports=o},15738:function(f,c,e){var t=e(4293);function n(r){var a=r==null?0:r.length;return a?t(r,1,a):[]}f.exports=n},47851:function(f,c,e){"use strict";e.d(c,{c:function(){return a}});var t=e(32735),n=e(76144),r=e(49372);const a=()=>{const{id:o,error:i}=(0,n.U)();return!i||typeof i!="string"?null:t.createElement(r.Z,{variant:"pi",as:"p",id:`${o}-error`,textColor:"danger600","data-strapi-field-error":!0},i)}},67014:function(f,c,e){"use strict";e.d(c,{J:function(){return a}});var t=e(32735),n=e(76144),r=e(49372);const a=()=>{const{id:o,hint:i,error:d}=(0,n.U)();return!i||typeof i!="string"||d?null:t.createElement(r.Z,{variant:"pi",as:"p",id:`${o}-hint`,textColor:"neutral600"},i)}},5803:function(f,c,e){"use strict";e.d(c,{P:function(){return d}});var t=e(32735),n=e(83292),r=e(60216),a=e(72850),o=e(14338);const i=n.default.div`
  grid-column: span ${({col:l})=>l};
  max-width: 100%;

  ${({theme:l})=>l.mediaQueries.tablet} {
    grid-column: span ${({s:l})=>l};
  }

  ${({theme:l})=>l.mediaQueries.mobile} {
    grid-column: span ${({xs:l})=>l};
  }
`,d=({col:l,xs:h,s:x,...v})=>{const{gap:m,gridCols:O}=(0,o.N)();return t.createElement(i,{gap:m,gridCols:O,col:l,xs:h,s:x},t.createElement(a.x,{...v}))};d.defaultProps={col:void 0,s:void 0,xs:void 0},d.propTypes={col:r.number,s:r.number,xs:r.number}},17e3:function(f,c,e){"use strict";e.d(c,{D:function(){return a}});var t=e(32735),n=e(60216),r=e(72850);const a=({children:o})=>t.createElement(r.x,{paddingLeft:10,paddingRight:10},o);a.propTypes={children:n.node.isRequired}},28356:function(f,c,e){"use strict";e.d(c,{T:function(){return v}});var t=e(32735),n=e(83292),r=e(60216),a=e(49372),o=e(72850),i=e(87933);const d=u=>{const y=(0,t.useRef)(null),[p,E]=(0,t.useState)(!0),s=([g])=>{E(g.isIntersecting)};return(0,t.useEffect)(()=>{const g=y.current,_=new IntersectionObserver(s,u);return g&&_.observe(y.current),()=>{g&&_.disconnect()}},[y,u]),[y,p]};var l=e(81002);const h=(u,y)=>{const p=(0,l.useCallbackRef)(y);(0,t.useLayoutEffect)(()=>{const E=new ResizeObserver(p);return Array.isArray(u)?u.forEach(s=>{s.current&&E.observe(s.current)}):u.current&&E.observe(u.current),()=>{E.disconnect()}},[u,p])},x=()=>{const u=(0,t.useRef)(null),[y,p]=(0,t.useState)(null),[E,s]=d({root:null,rootMargin:"0px",threshold:0});return h(E,()=>{E.current&&p(E.current.getBoundingClientRect())}),(0,t.useEffect)(()=>{u.current&&p(u.current.getBoundingClientRect())},[u]),{containerRef:E,isVisible:s,baseHeaderLayoutRef:u,headerSize:y}},v=u=>{const{containerRef:y,isVisible:p,baseHeaderLayoutRef:E,headerSize:s}=x();return t.createElement(t.Fragment,null,t.createElement("div",{style:{height:s?.height},ref:y},p&&t.createElement(O,{ref:E,...u})),!p&&t.createElement(O,{...u,sticky:!0,width:s?.width}))};v.displayName="HeaderLayout";const m=(0,n.default)(o.x)`
  width: ${u=>u.width}px;
`,O=t.forwardRef(({navigationAction:u,primaryAction:y,secondaryAction:p,subtitle:E,title:s,sticky:g,width:_,...M},A)=>{const b=typeof E=="string";return g?t.createElement(m,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:_,zIndex:4,"data-strapi-header-sticky":!0},t.createElement(i.k,{justifyContent:"space-between"},t.createElement(i.k,null,u&&t.createElement(o.x,{paddingRight:3},u),t.createElement(o.x,null,t.createElement(a.Z,{variant:"beta",as:"h1",...M},s),b?t.createElement(a.Z,{variant:"pi",textColor:"neutral600"},E):E),p?t.createElement(o.x,{paddingLeft:4},p):null),t.createElement(i.k,null,y?t.createElement(o.x,{paddingLeft:2},y):void 0))):t.createElement(o.x,{ref:A,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:u?6:8,background:"neutral100","data-strapi-header":!0},u?t.createElement(o.x,{paddingBottom:2},u):null,t.createElement(i.k,{justifyContent:"space-between"},t.createElement(i.k,null,t.createElement(a.Z,{as:"h1",variant:"alpha",...M},s),p?t.createElement(o.x,{paddingLeft:4},p):null),y),b?t.createElement(a.Z,{variant:"epsilon",textColor:"neutral600",as:"p"},E):E)});O.displayName="BaseHeaderLayout",O.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0,sticky:!1,width:void 0},O.propTypes={navigationAction:r.node,primaryAction:r.node,secondaryAction:r.node,sticky:r.bool,subtitle:r.oneOfType([r.string,r.node]),title:r.string.isRequired,width:r.number},v.defaultProps={navigationAction:void 0,primaryAction:void 0,secondaryAction:void 0,subtitle:void 0},v.propTypes={navigationAction:r.node,primaryAction:r.node,secondaryAction:r.node,subtitle:r.oneOfType([r.string,r.node]),title:r.string.isRequired}},27649:function(f,c,e){"use strict";e.d(c,{o:function(){return o}});var t=e(32735),n=e(60216),r=e(83292);const a=r.default.main`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,o=({labelledBy:i,...d})=>{const l=i||"main-content-title";return t.createElement(a,{"aria-labelledby":l,id:"main-content",tabIndex:-1,...d})};o.defaultProps={labelledBy:void 0},o.propTypes={labelledBy:n.string}},10369:function(f,c,e){"use strict";e.d(c,{o:function(){return v}});var t=e(32735),n=e(60216),r=e(87107),a=e(76437),o=e(98275),i=e(67014),d=e(47851),l=e(27677),h=e(78542),x=e(66436);const v=t.forwardRef(({size:m,startAction:O,endAction:u,name:y,hint:p,error:E,label:s,labelAction:g,id:_,required:M,...A},b)=>{const T=(0,x.M)(_),P=(0,t.useRef)(null);if(!s&&!A["aria-label"])throw new Error('The TextInput component needs a "label" or an "aria-label" props');return(0,t.useImperativeHandle)(b,()=>({inputWrapperRef:P})),t.createElement("div",{ref:P},t.createElement(r.g,{name:y,hint:p,error:E,id:T,required:M},t.createElement(l.K,{spacing:1},s&&t.createElement(a.Q,{action:g},s),t.createElement(o._,{size:m,ref:b,startAction:O,endAction:u,...A}),t.createElement(i.J,null),t.createElement(d.c,null))))});v.displayName="TextInput",v.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,startAction:void 0,size:"M",endAction:void 0,required:!1},v.propTypes={"aria-label":n.string,endAction:n.element,error:n.oneOfType([n.string,n.bool]),hint:n.oneOfType([n.string,n.bool,n.node,n.arrayOf(n.node)]),id:n.string,label:n.string,labelAction:n.element,name:n.string.isRequired,required:n.bool,size:n.oneOf(Object.keys(h.J.input)),startAction:n.element}},10508:function(f,c,e){"use strict";e.d(c,{g:function(){return E}});var t=e(32735),n=e(60216),r=e(83292),a=e(87107),o=e(76437),i=e(67014),d=e(47851),l=e(76144),h=e(30350);const x=r.default.div`
  border: 1px solid ${({theme:s,hasError:g})=>g?s.colors.danger600:s.colors.neutral200};
  border-radius: ${({theme:s})=>s.borderRadius};

  padding-left: ${({theme:s,hasLeftAction:g})=>g?0:s.spaces[4]};
  padding-right: ${({theme:s,hasRightAction:g})=>g?0:s.spaces[4]};
  padding-top: ${({theme:s})=>`${s.spaces[3]}`};
  padding-bottom: ${({theme:s})=>`${s.spaces[3]}`};

  background: ${({theme:s,disabled:g})=>g?s.colors.neutral150:s.colors.neutral0};
  ${(0,h.k3)()}
`,v=r.default.textarea`
  display: block;
  width: 100%;
  font-weight: 400;
  font-size: ${14/16}rem;
  border: none;
  color: ${({theme:s,disabled:g})=>g?s.colors.neutral600:s.colors.neutral800};
  resize: none;
  background: inherit;

  ::placeholder {
    color: ${({theme:s})=>s.colors.neutral500};
    opacity: 1;
  }

  &:focus-within {
    outline: none;
  }
`,m=(0,t.forwardRef)(({disabled:s,...g},_)=>{const{id:M,error:A,hint:b,name:T,required:P}=(0,l.U)();let D;A?D=`${M}-error`:b&&(D=`${M}-hint`);const L=Boolean(A);return t.createElement(x,{hasError:L,disabled:s},t.createElement(v,{id:M,name:T,ref:_,"aria-describedby":D,"aria-invalid":L,disabled:s,hasError:L,"aria-required":P,...g}))});m.displayName="TextareaInput",m.defaultProps={disabled:!1},m.propTypes={disabled:n.bool};var O=e(27677),u=e(87933),y=e(66436);const p=r.default.div`
  & textarea {
    // TODO: remove when we'll have fonts in the theme
    height: ${80/16}rem;
    line-height: ${20/16}rem;
  }

  & textarea::placeholder {
    font-weight: 400;
    font-size: ${14/16}rem;
    line-height: 1.43;
    color: ${({theme:s})=>s.colors.neutral500};
    opacity: 1;
  }
`,E=t.forwardRef(({name:s,hint:g,error:_,label:M,children:A,labelAction:b,id:T,required:P,...D},L)=>{const B=(0,y.M)(T);return t.createElement(p,null,t.createElement(a.g,{name:s,hint:g,error:_,id:B,required:P},t.createElement(O.K,{spacing:1},M&&t.createElement(u.k,null,t.createElement(o.Q,{action:b},M)),t.createElement(m,{ref:L,as:"textarea",value:A,...D}),t.createElement(i.J,null),t.createElement(d.c,null))))});E.displayName="Textarea",E.defaultProps={"aria-label":void 0,label:void 0,labelAction:void 0,error:void 0,hint:void 0,id:void 0,children:"",required:!1},E.propTypes={"aria-label":n.string,children:n.string,error:n.string,hint:n.oneOfType([n.string,n.node,n.arrayOf(n.node)]),id:n.string,label:n.string,labelAction:n.element,name:n.string.isRequired,required:n.bool}},29439:function(f,c,e){"use strict";e.d(c,{Z:function(){return n}});var t=e(74512);function n(r){return(0,t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,t.jsx)("path",{d:"M24 13.3a.2.2 0 01-.2.2H5.74l8.239 8.239a.2.2 0 010 .282L12.14 23.86a.2.2 0 01-.282 0L.14 12.14a.2.2 0 010-.282L11.86.14a.2.2 0 01.282 0L13.98 1.98a.2.2 0 010 .282L5.74 10.5H23.8c.11 0 .2.09.2.2v2.6z",fill:"#212134"})})}},66456:function(f,c,e){"use strict";e.d(c,{Z:function(){return n}});var t=e(74512);function n(r){return(0,t.jsx)("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...r,children:(0,t.jsx)("path",{d:"M20.727 2.97a.2.2 0 01.286 0l2.85 2.89a.2.2 0 010 .28L9.554 20.854a.2.2 0 01-.285 0l-9.13-9.243a.2.2 0 010-.281l2.85-2.892a.2.2 0 01.284 0l6.14 6.209L20.726 2.97z",fill:"#212134"})})}}}]);
