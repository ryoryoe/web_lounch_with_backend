(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(7052)}])},7052:function(e,t,a){"use strict";a.r(t),a.d(t,{Button_0edfa79c9a5e29a5b5301a2d3fed277a:function(){return Button_0edfa79c9a5e29a5b5301a2d3fed277a},Button_9536ec986b479b7340205c02e2bd32e2:function(){return Button_9536ec986b479b7340205c02e2bd32e2},Button_fedde601b6afe693bd06ea8b8f5c51ff:function(){return Button_fedde601b6afe693bd06ea8b8f5c51ff},Div_ac2a89ea84667d600a059f034bd91dfe:function(){return Div_ac2a89ea84667d600a059f034bd91dfe},Flex_3b31247b1be7c21c7b839aa1e088a9e8:function(){return Flex_3b31247b1be7c21c7b839aa1e088a9e8},Flex_c68c9a4168ec6710eaca8172046f5476:function(){return Flex_c68c9a4168ec6710eaca8172046f5476},Fragment_cf53a535ae2e610a113dd361eb6ac95b:function(){return Fragment_cf53a535ae2e610a113dd361eb6ac95b},Reactdropzone_d30456831ccaa7e4b7d303a2ab44566f:function(){return Reactdropzone_d30456831ccaa7e4b7d303a2ab44566f},Toaster_89416713a273995fc60191a4cf573054:function(){return Toaster_89416713a273995fc60191a4cf573054},default:function(){return Component}});var n=a(2729),c=a(6811),o=a(7294),r=a(687),d=a(6608),i=a(2196),l=a(917),u=a(4712),s=a(3954),f=a(6776),b=a(2512),_=a(3100),p=a(5640),x=a(9008),m=a.n(x);function _templateObject(){let e=(0,n._)(["\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n"]);return _templateObject=function(){return e},e}function Toaster_89416713a273995fc60191a4cf573054(){let[e,t]=(0,o.useContext)(r.kc);d.xL.__toast=u.A;let[a,n]=(0,o.useContext)(r.DR),i={description:"Check if server is reachable at ".concat((0,d.LH)(s.Ks).href),closeButton:!0,duration:12e4,id:"websocket-error"},[l,f]=(0,o.useState)(!1);return(0,o.useEffect)(()=>{n.length>=2?l||u.A.error("Cannot connect to server: ".concat(n.length>0?n[n.length-1].message:"","."),{...i,onDismiss:()=>f(!0)}):(u.A.dismiss("websocket-error"),f(!1))},[n]),(0,c.tZ)(u.x,{closeButton:!1,expand:!0,position:"bottom-right",richColors:!0,theme:e})}function Button_9536ec986b479b7340205c02e2bd32e2(){let[e,t]=(0,o.useContext)(r.DR),a=(0,o.useCallback)(t=>e([(0,d.ju)("state.state.clear_data",{})],t,{}),[e,d.ju]);return(0,c.tZ)(f.zx,{onClick:a,children:"初期状態に戻す"})}function Button_fedde601b6afe693bd06ea8b8f5c51ff(){let[e,t]=(0,o.useContext)(r.ql),a=(0,o.useContext)(r.M4.state__state),[n,i]=(0,o.useContext)(r.DR),l=(0,o.useCallback)(t=>n([(0,d.ju)("state.state.handle_save",{files:e.upload1,upload_id:"upload1"},"uploadFiles")],t,{}),[n,d.ju,e,t]);return(0,c.tZ)(f.zx,{disabled:a.is_button_save_disabled,loading:a.is_loading_save,onClick:l,children:"結果をシートに保存"})}function Div_ac2a89ea84667d600a059f034bd91dfe(){let[e,t]=(0,o.useContext)(r.DR);return(0,c.tZ)("div",{css:{position:"fixed",width:"100vw",height:"0"},title:"Connection Error: ".concat(t.length>0?t[t.length-1].message:""),children:(0,c.tZ)(Fragment_cf53a535ae2e610a113dd361eb6ac95b,{})})}function Button_0edfa79c9a5e29a5b5301a2d3fed277a(){let[e,t]=(0,o.useContext)(r.ql),a=(0,o.useContext)(r.M4.state__state),[n,i]=(0,o.useContext)(r.DR),l=(0,o.useCallback)(t=>n([(0,d.ju)("state.state.handle_upload",{files:e.upload1,upload_id:"upload1"},"uploadFiles")],t,{}),[n,d.ju,e,t]);return(0,c.tZ)(f.zx,{disabled:a.is_button_analyze_disabled,loading:a.is_loading_summary,onClick:l,children:"分析を実行"})}function Flex_3b31247b1be7c21c7b839aa1e088a9e8(){let[e,t]=(0,o.useContext)(r.ql);return(0,c.tZ)(f.kC,{align:"start",className:"rx-Stack",direction:"row",gap:"3",children:(e.upload1?e.upload1.map(e=>e.path||e.name):[]).map((e,t)=>(0,c.tZ)(f.xv,{as:"p",children:e},t))})}function Fragment_cf53a535ae2e610a113dd361eb6ac95b(){let[e,t]=(0,o.useContext)(r.DR);return(0,c.tZ)(o.Fragment,{children:(0,d.oA)(t.length>0)?(0,c.tZ)(o.Fragment,{children:(0,c.tZ)(i.Z,{css:{color:"crimson",zIndex:9999,position:"fixed",bottom:"33px",right:"33px",animation:"".concat(g," 1s infinite")},size:32})}):(0,c.tZ)(o.Fragment,{})})}function Reactdropzone_d30456831ccaa7e4b7d303a2ab44566f(){let e=(0,o.useRef)(null);d.xL.ref_upload1=e;let[t,a]=(0,o.useContext)(r.ql),[n,i]=(0,o.useContext)(r.DR),l=(0,o.useContext)(r.M4.state__state),u=(0,o.useCallback)(e=>a(t=>({...t,upload1:e})),[n,d.ju,t,a]);return(0,c.tZ)(b.ZP,{id:"upload1",multiple:!0,onDrop:u,ref:e,children:t=>{let{getRootProps:a,getInputProps:o}=t;return(0,c.BX)(_.xu,{className:"rx-Upload",id:"upload1",ref:e,sx:{border:"1px dotted rgb(107,99,246)",padding:"5em",textAlign:"center"},...a(),children:[(0,c.tZ)(p.I,{type:"file",...o()}),(0,c.BX)(f.kC,{align:"start",className:"rx-Stack",direction:"column",gap:"3",children:[(0,c.tZ)(f.zx,{css:{color:"rgb(107,99,246)",background:"white",border:"1px solid rgb(107,99,246)"},disabled:l.is_button_disabled,onClick:e=>n([(0,d.ju)("state.state.first_def",{})],e,{}),children:"選択"}),(0,c.tZ)(f.xv,{as:"p",children:"「選択」ボタンからアップロードするファイルを選択してください"})]})]})}})}let g=(0,l.F4)(_templateObject());function Flex_c68c9a4168ec6710eaca8172046f5476(){let e=(0,o.useContext)(r.M4.state__state);return(0,c.BX)(f.kC,{align:"start",className:"rx-Stack",css:{padding:"5em"},direction:"column",gap:"3",children:[(0,c.tZ)(Reactdropzone_d30456831ccaa7e4b7d303a2ab44566f,{}),(0,c.tZ)(Flex_3b31247b1be7c21c7b839aa1e088a9e8,{}),(0,c.tZ)(Button_0edfa79c9a5e29a5b5301a2d3fed277a,{}),e.textls.map((e,t)=>(0,c.tZ)(f.xu,{children:(0,c.tZ)(f.xu,{css:{textAlign:"right"},children:(0,c.tZ)(f.xv,{as:"p",css:{padding:"1em",borderRadius:"5px",marginTop:"0.5em",marginBottom:"0.5em",boxShadow:"rgba(0, 0, 0, 0.15) 0px 2px 8px",maxWidth:"30em",display:"inline-block",marginLeft:"20%",backgroundColor:"var(--gray-4)"},children:e})})},t)),(0,c.tZ)(Button_fedde601b6afe693bd06ea8b8f5c51ff,{}),(0,c.tZ)(Button_9536ec986b479b7340205c02e2bd32e2,{})]})}function Component(){return(0,c.BX)(o.Fragment,{children:[(0,c.BX)(o.Fragment,{children:[(0,c.tZ)(Div_ac2a89ea84667d600a059f034bd91dfe,{}),(0,c.tZ)(Toaster_89416713a273995fc60191a4cf573054,{})]}),(0,c.tZ)(Flex_c68c9a4168ec6710eaca8172046f5476,{}),(0,c.BX)(m(),{children:[(0,c.tZ)("title",{children:"Reflex Test | Index"}),(0,c.tZ)("meta",{content:"favicon.ico",property:"og:image"})]})]})}}},function(e){e.O(0,[991,12,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);