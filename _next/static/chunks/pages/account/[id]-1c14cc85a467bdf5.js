(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[838],{943:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/[id]",function(){return n(3527)}])},3527:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return V}});var o=n(2322),r=n(8939),i=n(309),t=n(6790),l=n(939),a=n(3030),c=n(3535),d=n(2784),_=n(1189),x=n(8413),h=n(4189);(0,x.c)(void 0);let u=(0,x.c)(void 0);(0,x.c)(void 0),(0,x.c)(void 0),(0,x.c)(void 0);let m=(0,x.c)(void 0),p=(0,x.c)(void 0),b=(0,x.c)(void 0),g=(0,x.c)(void 0),f=(0,x.c)(void 0);(0,x.c)(void 0),(0,x.c)(void 0);let w=(0,x.c)(void 0),j=(0,x.c)(void 0),v=async(e,s)=>{(0,h.oE)(async()=>{console.log("[TASK] : Setting ".concat(s)),e.set(s)})},$=new _.KU().setEndpoint("https://ap.kbve.com/v1").setProject("6436a6dc9a6b48db802f"),S=new _.mR($),y=(0,x.c)(void 0);S.getSession("current").then(function(e){y.set(e)},function(e){y.set(void 0)});let I=(0,x.c)(void 0);(0,x.c)(void 0),(0,x.c)(!1),(0,x.c)(void 0),(0,x.c)(void 0),y.subscribe(async e=>{(null==e?void 0:e.userId)&&I.set(await C())});let k=async(e,s)=>{try{let n=await S.createEmailSession(e,s);y.set(n)}catch(e){throw e.message}},z=async(e,s,n)=>{try{await S.create(_.ID.unique(),e,s,n);let o=await S.createEmailSession(e,s);y.set(o)}catch(e){throw e.message}},C=async()=>{try{return S.get()}catch(e){throw e.message}},T=async(e,s,n,o)=>{(0,h.oE)(async()=>{console.log("[TASK] -> ".concat(e.get()," : ").concat(s.get()," : ").concat(n.get()," : ").concat(o.get())),k(e.get(),s.get()).then(()=>"").catch(e=>v(o,e)).finally(()=>setTimeout(()=>v(n,void 0)))})};var E=n(4419);let N=()=>{let[e,s]=(0,d.useState)(""),[n,_]=(0,d.useState)(!0),x=(0,E.o)(w),h=(0,E.o)(f),m=(0,E.o)(b),p=(0,E.o)(g);return(0,E.o)(u),(0,d.useEffect)(()=>{console.log("Current Status: ".concat(x));let e=async()=>{try{await z(String(m),String(p),String(h)),v(w,void 0)}catch(e){v(u,e),v(w,e)}};"submitting"===x&&e()},[x]),(0,o.jsxs)(r.FA,{jc:"center",ai:"center",p:"$4",space:!0,children:[(0,o.jsx)(i.zx,{children:(0,o.jsx)("h3",{className:"  is_H3 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632984 _fow-233016264 _ls-167744183 _fos-229441344 _lh-222976697 _ussel-auto ",children:"Welcome on board!"})}),(0,o.jsx)(r.sL,{space:!0,children:(0,o.jsxs)(t.l0,{alignItems:"center",minWidth:350,space:!0,onSubmit:()=>v(w,"submitting"),borderWidth:1,borderRadius:"$4",backgroundColor:"$background",borderColor:"$borderColor",padding:"$8",children:[(0,o.jsxs)("span",{className:"  is_SizableText font_body  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _fow-233016140 _ls-167744059 _fos-20px _lh-222976573 ",children:[" ","Lets create an account!"]}),(0,o.jsxs)(r.sL,{alignItems:"center",space:"$1",children:[(0,o.jsxs)(l.__,{htmlFor:"registerUsername",width:80,size:"$1",children:["Username:"," "]}),(0,o.jsx)(a.II,{id:"registerUsername",flex:1,size:"$4",onChangeText:e=>v(f,e),value:null!=h?h:"",placeholder:"Your Username!"})]}),(0,o.jsxs)(r.sL,{alignItems:"center",space:"$1",children:[(0,o.jsxs)(l.__,{htmlFor:"registerEmail",width:80,size:"$1",children:["Email:"," "]}),(0,o.jsx)(a.II,{id:"registerEmail",flex:1,size:"$4",onChangeText:e=>v(b,e),value:null!=m?m:"",placeholder:"Your Email!"})]}),(0,o.jsxs)(r.sL,{alignItems:"center",space:"$1",children:[(0,o.jsxs)(l.__,{htmlFor:"registerPassword",width:80,size:"$1",children:["Password:"," "]}),(0,o.jsx)(a.II,{id:"registerPassword",flex:1,size:"$4",onChangeText:e=>v(g,e),value:null!=p?p:"",secureTextEntry:!0})]}),(0,o.jsxs)(r.sL,{alignItems:"center",space:"$1",children:[(0,o.jsxs)(l.__,{htmlFor:"confirm",width:80,size:"$1",children:["Confirm:"," "]}),(0,o.jsx)(a.II,{id:"confirm",flex:1,size:"$4",onChangeText:s,value:null!=e?e:"",secureTextEntry:!!n})]}),(0,o.jsx)(t.l0.Trigger,{asChild:!0,disabled:"submitting"===x,children:(0,o.jsx)(i.zx,{icon:"submitting"===x?()=>(0,o.jsx)(c.$,{padding:"$1",m:"$1"}):void 0,children:"Register"})}),(0,o.jsx)("span",{className:"  is_SizableText font_body  _ff-299667014 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _col-E879F935 _fow-233016140 _ls-167744059 _fos-15px _lh-222976573 ",children:null!=x?x:""}),(0,o.jsx)("span",{className:"  is_SizableText font_body  _ff-299667014 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _col-E879F935 _fow-233016140 _ls-167744059 _fos-10px _lh-222976573 ",children:"Shadow Wizard Money Gang - v0.1"})]})})]})};n(8995);var P=n(2274),F=n(3763),L=n(166),A=n(6321);let H="  is_SizableText font_body  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _fow-233016140 _ls-167744059 _fos-12px _lh-222976573 ",W=e=>(0,o.jsx)(r.sL,{alignItems:"center",space:"$1",children:(0,o.jsx)(i.zx,{...(0,A.n)({href:e.link}),children:(0,o.jsx)("h3",{className:"  is_H3 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632984 _fow-233016264 _ls-167744183 _fos-229441344 _lh-222976697 _ussel-auto ",children:e.data})})}),R=e=>{var s,n,i,t;return(0,o.jsxs)(r.sL,{alignItems:"center",space:"$1",children:[(0,o.jsx)(l.__,{htmlFor:e.data.concat(null!==(s=e.formId)&&void 0!==s?s:""),width:80,size:"$1",children:"".concat(e.data,":")}),(0,o.jsx)(a.II,{id:e.data.concat(null!==(n=e.formId)&&void 0!==n?n:""),flex:1,size:"$4",onChangeText:s=>v(e.storage,s),value:null!==(i=(0,E.o)(e.storage))&&void 0!==i?i:"",placeholder:"Your ".concat(e.data,"!"),secureTextEntry:null!==(t=e.secure)&&void 0!==t&&t})]})},U=e=>{let s=(0,E.o)(w),n=(0,E.o)(j),l=(0,E.o)(p),a=(0,E.o)(m),d=(0,F.Py)();return(0,o.jsx)(r.sL,{space:!0,children:(0,o.jsxs)(t.l0,{alignItems:"center",minWidth:350,space:!0,onSubmit:()=>{v(w,"submitting"),v(p,!0)},borderWidth:1,borderRadius:"$4",backgroundColor:"$background",borderColor:"$borderColor",padding:"$8",children:[e.data&&(0,o.jsxs)("span",{className:H,children:[" ",e.data]}),e.children,(0,o.jsx)(t.l0.Trigger,{asChild:!0,disabled:void 0!==s,onPress:()=>console.log("Pressed!"),children:(0,o.jsx)(i.zx,{icon:"submitting"===s?()=>(0,o.jsx)(c.$,{padding:"$1",m:"$1"}):void 0,children:"Log In"})}),(0,o.jsx)("h4",{className:"  is_H4 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632953 _fow-233016233 _ls-167744152 _fos-229441313 _lh-222976666 _ussel-auto ",children:null!=s?s:""}),(0,o.jsxs)(P.Sheet,{modal:!0,open:null!=l&&l,onOpenChange:e=>v(p,e),snapPoints:[80],position:a,onPositionChange:e=>v(m,e),dismissOnSnapToBottom:!0,children:[(0,o.jsx)(P.Sheet.Overlay,{}),(0,o.jsxs)(P.Sheet.Frame,{ai:"center",jc:"center",children:[(0,o.jsx)("span",{className:H,children:null!=n?n:""}),(0,o.jsx)(P.Sheet.Handle,{}),(0,o.jsx)(i.zx,{size:"$6",circular:!0,icon:L._,onPress:()=>{v(p,!1),v(j,void 0),d.show("Vash! The liquor store was closed!",{message:'Swipe right to dismiss! Don"t Shoot...'})}})]})]})]})})};n(5994);let O=()=>("submitting"===(0,E.o)(w)&&T(b,g,w,j),(0,o.jsxs)(r.FA,{jc:"center",ai:"center",p:"$4",space:!0,children:[(0,o.jsx)(i.zx,{children:(0,o.jsx)("h3",{className:"  is_H3 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632984 _fow-233016264 _ls-167744183 _fos-229441344 _lh-222976697 _ussel-auto ",children:"Hi! Welcome"})}),(0,o.jsx)(r.sL,{space:!0,children:(0,o.jsxs)(U,{data:"A more productive you is waiting inside this app. Please enter your details!",children:[(0,o.jsx)(R,{formId:"login",data:"Email",storage:b}),(0,o.jsx)(R,{formId:"login",data:"Password",storage:g,secure:!0})]})}),(0,o.jsx)(W,{data:"Forgot Password?",link:"/account/recover"}),(0,o.jsx)(W,{data:"Don't have an account? Sign Up!",link:"/account/register"})]}));n(6661);let D=()=>{let e=(0,E.o)(w),s=(0,E.o)(b);return(0,d.useEffect)(()=>{if(console.log("Current Status: ".concat(e)),"submitting"===e){let s=setTimeout(()=>v(w,void 0),4e3);return()=>{clearTimeout(s),console.log("[DEBUG] : Status: ".concat(e))}}},[e]),(0,o.jsxs)(r.FA,{jc:"center",ai:"center",p:"$4",space:!0,children:[(0,o.jsx)(i.zx,{children:(0,o.jsx)("h3",{className:"  is_H3 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632984 _fow-233016264 _ls-167744183 _fos-229441344 _lh-222976697 _ussel-auto ",children:"Oh, no! You forgot?"})}),(0,o.jsx)(r.sL,{space:!0,children:(0,o.jsxs)(t.l0,{alignItems:"center",minWidth:350,space:!0,onSubmit:()=>v(w,"submitting"),borderWidth:1,borderRadius:"$4",backgroundColor:"$background",borderColor:"$borderColor",padding:"$8",children:[(0,o.jsxs)("span",{className:"  is_SizableText font_body  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _fow-233016140 _ls-167744059 _fos-12px _lh-222976573 ",children:[" ","Enter your email and we'll send you a link to change a new password!"]}),(0,o.jsxs)(r.sL,{alignItems:"center",space:"$1",children:[(0,o.jsxs)(l.__,{htmlFor:"recover",width:80,size:"$1",children:["Recover:"," "]}),(0,o.jsx)(a.II,{id:"recover",flex:1,size:"$4",onChangeText:e=>v(b,e),value:null!=s?s:"",placeholder:"Your Email!"})]}),(0,o.jsx)(t.l0.Trigger,{asChild:!0,disabled:void 0!==e,children:(0,o.jsx)(i.zx,{icon:"submitting"===e?()=>(0,o.jsx)(c.$,{padding:"$1",m:"$1"}):void 0,children:"Request Password"})}),(0,o.jsx)("h4",{className:"  is_H4 font_heading _role-heading  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _tt-230632953 _fow-233016233 _ls-167744152 _fos-229441313 _lh-222976666 _ussel-auto ",children:null!=e?e:""})]})})]})};n(4282);var Y=n(641),q=n(4818);let{useParam:G}=(0,q.X)(),K=e=>{switch(e.id){case"register":return(0,o.jsx)(N,{});case"login":return(0,o.jsx)(O,{});case"recover":return(0,o.jsx)(D,{});default:return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("p",{className:"  is_Paragraph font_body  _ff-299667014 _col-675002279 _dsp-inline _bxs-border-box _ww-break-word _mt-0px _mr-0px _mb-0px _ml-0px _fow-700 _ls-167744059 _fos-229441220 _lh-222976573 _ussel-auto _ta-center ",children:"Auth ID: ".concat(e.id)})})}};function X(){let[e]=G("id"),s=(0,A.n)({href:"/"});return(0,o.jsxs)(r.FA,{f:1,jc:"center",ai:"center",backgroundColor:"#000",space:!0,children:[(0,o.jsx)(K,{id:e}),(0,o.jsx)(i.zx,{...s,icon:Y.s,children:"Go Home"})]})}n(3242);var B=n(7729),M=n.n(B);function V(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(M(),{children:(0,o.jsx)("title",{children:" Account "})}),(0,o.jsx)(X,{})]})}},3242:function(){},6661:function(){},4282:function(){},8995:function(){},5994:function(){}},function(e){e.O(0,[932,985,746,774,888,179],function(){return e(e.s=943)}),_N_E=e.O()}]);