(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[681],{3747:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(5893),s=n(7294),i=n(9935),o=n.n(i);n(1767);var a=n(9327),c=n(5434),l=function(e){let{src:t,onFinish:n,play:i,paused:o,loud:a}=e,c=(0,s.useRef)(),l=(0,s.useRef)(),d=(0,s.useRef)(),[u,h]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{u&&(o?c.current.pause():c.current.play())},[o]),(0,s.useEffect)(()=>{if(a){if(l.current)d.current.gain.value=20;else{let e=new AudioContext,t=c.current;l.current=e.createMediaElementSource(t),d.current=e.createGain(),d.current.gain.value=20,l.current.connect(d.current),d.current.connect(e.destination)}}else l.current&&(d.current.gain.value=1)},[a]),(0,s.useEffect)(()=>{i&&(h(!0),c.current.src=t,c.current.play(),c.current.onended=()=>{n()},c.current.onerror=()=>{n()})},[i,t]),(0,r.jsx)("audio",{src:t,ref:c,style:{display:"none"}})},d=n(2968),u=n.n(d),h=n(5786),m=n(498),_=n(405),g=n(6979);let y=e=>{let t=e.split("]");return(0,r.jsxs)("span",{children:[(0,r.jsx)("strong",{children:t[0].replace("[","")}),t[1]]})};var x=n(8193),f=n(3990),p=n(1163),j=n(2021),b=n(2840);let v={};var w=function(e){let{id:t}=e,n=(0,s.useRef)(null),i=(0,s.useRef)(null),d=(0,s.useRef)(null),w=(0,s.useRef)(null),k=(0,s.useRef)(null),P=(0,s.useRef)(null),Z=(0,p.useRouter)(),[C,N]=(0,s.useState)(),[S,z]=(0,s.useState)({}),[H,L]=(0,s.useState)(),[O,R]=(0,s.useState)(),[E,T]=(0,s.useState)(!1),[I,M]=(0,s.useState)([]),[B,A]=(0,s.useState)(!1),[F,D]=(0,s.useState)(!0),[W,q]=(0,s.useState)("0%"),[U,K]=(0,s.useState)(!1),[G,Y]=(0,s.useState)(!1),[J,Q]=(0,s.useState)(),[V,X]=(0,s.useState)([]),[$,ee]=(0,s.useState)(!1),[et,en]=(0,s.useState)(!1),[er,es]=(0,s.useState)(!1),[ei,eo]=(0,s.useState)(!1),[ea,ec]=(0,s.useState)(!1),[el,ed]=(0,s.useState)(!1),[eu,eh]=(0,s.useState)(!1),[em,e_]=(0,s.useState)(!1),[eg,ey]=(0,s.useState)(!1),[ex,ef]=(0,s.useState)(!1),ep=(e,t)=>{if(console.log("logging",e,t),et)k.current.log(et,e,t);else{let n=localStorage.getItem("loggerId");en(n),k.current.log(n,e,t)}};function ej(){try{i.current.play()}catch(e){console.log(e)}}let eb=e=>{e_(e),ep("loudness","".concat(t," ").concat(O.id," ").concat(e))},ev=e=>{eo(e),ep("paused","".concat(t," ").concat(O.id," ").concat(e))},ew=()=>{Z.push("/")},ek=e=>{P.current=e},eP=e=>{d.current=e,es(e),ep("muted","".concat(t," ").concat(O.id," ").concat(e))},eZ=e=>{w.current=e,A(e)},eC=async()=>{if(localStorage.getItem("loggerId"),navigator.mediaDevices){let e=await a.Ue("BROWSER_FFT");await e.ensureModelLoaded();let t=e.wordLabels();try{e.listen(e=>{let n=t[eS(Object.values(e.scores))];!d.current&&w.current?(ep("speech action",n),N(n)):N("")},{includeSpectrogram:!0,probabilityThreshold:.95})}catch(n){}}else eP(!0)},eN=()=>new Promise((e,t)=>{let n=indexedDB.open("stories",3);n.onsuccess=t=>{ek(t.target.result),e()},n.onerror=e=>{t()},n.onupgradeneeded=t=>{let n=t.target.result;ek(n),e();try{n.createObjectStore("tracks",{keyPath:"id"})}catch(r){}}});(0,s.useEffect)(()=>{k.current=new j.Z,ep("story loaded",t);let e=async()=>{Promise.all([new Promise(async(e,n)=>{await eN(),eD(t),e()}),await eC()]).then(()=>{console.log("model loaded, storage setup")})};e();let n=async()=>{if("wakeLock"in navigator){let e=async()=>{try{await navigator.wakeLock.request()}catch(e){console.error("".concat(e.name,", ").concat(e.message))}};await e()}};n()},[]),(0,s.useEffect)(()=>{H&&X(H.reduce((e,t)=>t.waypoint?[...e,t.id]:e,[]))},[H]),(0,s.useEffect)(()=>{v=I.reduce((e,t,n)=>({...e,[n]:!0}),{})},[I]);let eS=e=>e.map((e,t)=>[e,t]).reduce((e,t)=>t[0]>e[0]?t:e)[1],ez=(e,t)=>e.split(/(\s+)/).reduce((e,n)=>({...e,[n.trim().toLocaleLowerCase()]:t}),{});(0,s.useEffect)(()=>{if(O&&O.rules){let e=Object.keys(O.rules).reduce((e,t)=>e||!isNaN(t.trim()),!1);ey(e);let t=Object.keys(O.rules).reduce((e,t)=>e||isNaN(t.trim()),!1);ef(t)}!E&&O&&Object.keys(O.rules).forEach(e=>{let t=e.trim();if(!isNaN(t)){let r=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1?arguments[1]:void 0;Q(Math.round((s-t)/1e3)),console.log("--->",Math.round((s-t)/1e3)),t==s?(ej(),eO(O.rules[e].toLowerCase()),N(),T(!0),Y(!1)):n.current=setTimeout(()=>r(t+1e3,s),1e3)};Y(!0),r(0,1e3*Number(t))}},{})},[O,E]),(0,s.useEffect)(()=>{if(O){let e=Object.keys(O.rules).reduce((e,t)=>({...e,...ez(t,O.rules[t].toLowerCase())}),{}),n=Object.keys(e);if(C)for(let r of C.split(" ")){let s=r.toLowerCase();-1!==n.indexOf(s)&&(ej(),ep("trigger","".concat(t," ").concat(s)),setTimeout(()=>{eO(e[s].toLowerCase()),N(),eZ(!1),T(!0)},500))}}},[C,E]);let eH=()=>{B&&eZ(!1);let e=H.find(e=>!0===e.start)||H[0];R(e),T(!0),K(!0)},eL=e=>{v={...v,[e]:!1};let t=Object.keys(v).reduce((e,t)=>e&&!1==v[t],!0);T(!t),eZ(t)},eO=e=>{try{clearTimeout(n.current),Y(!1)}catch(r){console.log(r)}ep("scenechange","".concat(t," ").concat(e)),"restart"===e.toLowerCase()&&ew(),eZ(!1);let s=H.find(t=>t.id==e);R(s);let i=S.find(e=>e.id==s.id),{tracks:o}=i||{};M(o||[])},eR=e=>{N(e.toLocaleLowerCase()),ep("manualpress","".concat(t," ").concat(O.id," ").concat(e))},eE=()=>{let e=O&&O.id?"".concat(t," : ").concat(O.id):t;return(0,r.jsx)("div",{children:O&&(0,r.jsxs)("div",{className:o().storytextcontainer,children:[(0,r.jsx)("div",{className:o().storytitle,children:e}),(0,r.jsx)("div",{className:o().storytext,children:function(e){let t=[];return -1!==e.indexOf("[")&&-1!=e.indexOf("]")?(e.split(/\s+/).forEach(e=>{e.startsWith("[")&&t.push(""),t[t.length-1]="".concat(t[t.length-1]," ").concat(e)}),t.map((e,t)=>(0,r.jsx)("div",{style:{marginTop:0==t?0:10},children:y(e)},t))):e}(O.text)})]})})},eT=()=>{let e=210;return eg||(e=150),(0,r.jsx)("div",{className:o().micontainer,style:{bottom:e},children:(0,r.jsx)("div",{className:o().listening,children:(0,r.jsx)(c.zPH,{})})})},eI=async e=>new Promise((t,n)=>{var r=P.current.transaction("tracks","readwrite").objectStore("tracks");let s=r.get(e);s.onsuccess=e=>{let{result:n={}}=e.target,{src:r}=n;t(r)},s.onerror=e=>{t("")}}),eM=e=>{let{folder:t,id:n}=e;return new Promise(async(e,t)=>{u().get("../media/".concat(n,".txt")).set("Content-Type","application/json").end(async function(t,r){console.log(r),t?e(""):(await eA(n,r.text),e(r.text))})})},eB=e=>{let{useCache:t=!1,folder:n,id:r}=e;return new Promise(async(e,s)=>{if(t){let i=await eI(r);if(i&&""!==i.trim()){console.log("succesfully retrieved track from cache"),e(i);return}}console.log("re-fetching from server!");let o=await eM({folder:n,id:r});e(o)})},eA=(e,t)=>new Promise((n,r)=>{var s=P.current.transaction("tracks","readwrite").objectStore("tracks");let i=s.put({id:e,src:t});i.onsuccess=()=>{n()}}),eF=e=>e<20?"building mountains (".concat(e,"%)"):e<40?"growing forests... (".concat(e,"%)"):e<60?"filling lakes... (".concat(e,"%)"):e<80?"hiring musicians..(".concat(e,"%)"):e<100?"get ready (".concat(e,"%)"):void 0,eD=e=>{D(!0),e||ew();let t=t=>{let{script:n,ts:r}=t;console.log("loading",n,r);let s=[],i=localStorage.getItem("".concat(e,"-ts")),o="".concat(i)=="".concat(r);console.log("use cache is",o);let a=n.reduce((e,t)=>{let n=t.tracks||[],r=t.id.toLowerCase();return n.length>0?{...e,[r]:n}:e},{}),c=Object.keys(a).reduce((e,t)=>e+a[t].length,0),l=0,d=[],u={};for(let h of Object.keys(a))d=[...d,...a[h].map(t=>new Promise(async(n,r)=>{let s=await eB({useCache:o,folder:e,id:t});u[h]=u[h]||[],u[h].push({id:t,src:s}),q(eF(Math.round((l+=1)/c*100))),n()}))];Promise.all(d).then(()=>{Object.keys(u).map(e=>{s.push({id:e,tracks:u[e]})}),z(s),localStorage.setItem("".concat(e,"-ts"),r);let t=n.map(e=>({...e,id:e.id.toLowerCase()})),i=t.find(e=>!0===e.start),{id:o}=i||{};console.log("sid is",o=o||t[0].id),L(t);let a=s.find(e=>e.id==o);console.log("OK START NODE IS",a),a&&a.tracks&&M(a.tracks),D(!1)})};u().get("../scripts/".concat(e,".json")).then(async e=>{t(e.body)}).catch(t=>{D(!1),q("0%"),ep("loaderror","".concat(e," ").concat(t)),console.log(t)})},eW=e=>{let{currentKey:r}=e;ep("waypointselected","".concat(t," ").concat(r)),clearTimeout(n.current),Y(!1),B&&eZ(!1),T(!0),eo(!1),eO(r)},eq=()=>{if(B||!U)return;let e=V.map(e=>(0,r.jsx)(h.ZP.Item,{children:e},e));return(0,r.jsxs)(h.ZP,{children:[(0,r.jsx)(h.ZP.Button,{flat:!0,children:"go to"}),(0,r.jsx)(h.ZP.Menu,{"aria-label":"Single selection actions",color:"secondary",disallowEmptySelection:!0,selectionMode:"single",onSelectionChange:eW,children:e})]})};return(0,r.jsxs)("div",{className:o().container,children:[(I||[]).map((e,t)=>(0,r.jsx)(l,{loud:em,src:e.src,paused:ei,play:U,onFinish:()=>eL(t)},t)),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(m.ZP,{isBordered:!1,variant:"sticky",children:[(0,r.jsxs)(m.ZP.Brand,{children:[!U&&(0,b.Z)(),eq()]}),(0,r.jsxs)(m.ZP.Content,{activeColor:"red",children:[(0,r.jsx)(m.ZP.Link,{children:(()=>{if(U)return em?(0,r.jsx)("div",{onClick:()=>eb(!em),className:o().navbaricon,children:(0,r.jsx)(x.dfw,{})}):(0,r.jsx)("div",{onClick:()=>eb(!em),className:o().navbaricon,children:(0,r.jsx)(x.CRd,{})})})()}),(0,r.jsx)(m.ZP.Link,{children:(()=>{if(U)return ei?(0,r.jsx)("div",{onClick:()=>ev(!ei),className:o().navbaricon,children:(0,r.jsx)(x.Wxs,{})}):(0,r.jsx)("div",{onClick:()=>ev(!ei),className:o().navbaricon,children:(0,r.jsx)(x.lbi,{})})})()}),(0,r.jsx)(m.ZP.Link,{children:(()=>{if(U)return er?(0,r.jsx)("div",{onClick:()=>eP(!er),className:o().navbaricon,children:(0,r.jsx)(x.Q4c,{})}):(0,r.jsx)("div",{onClick:()=>eP(!er),className:o().navbaricon,children:(0,r.jsx)(x.UUX,{})})})()})]})]}),$&&eq()]}),(()=>{if(F)return(0,r.jsx)("div",{className:o().loadingcontainer,children:(0,r.jsxs)("div",{className:o().imagerow,children:[(0,r.jsx)("div",{className:o().progress,children:"just loading.."}),(0,r.jsx)("div",{className:o().imagecontainer,children:(0,r.jsx)("img",{src:"../logo.svg",height:"200px"})}),(0,r.jsx)("div",{className:o().progress,children:W})]})})})(),(()=>{if(H)return(0,r.jsxs)("div",{className:o().startcontainer,style:{height:O?"auto":"calc(100vh - 160px)"},children:[S.length>0&&!O&&(0,r.jsx)("div",{onClick:eH,onClickCapture:ej,className:o().imagecontainer,children:(0,r.jsx)("img",{className:o().spinning,src:"../start.png",width:"200px"})}),S.length>0&&!O&&(0,r.jsx)("div",{onClick:eH,onClickCapture:ej,className:o().progress,children:"Start!"}),eE()]})})(),B&&U&&(0,r.jsxs)(r.Fragment,{children:[(()=>{if(!H)return(0,r.jsx)(r.Fragment,{});let e=240,t=200;return eg?ex||(e=80):ex&&(e=180,t=140),(0,r.jsxs)("div",{className:o().listeningcontainer,style:{height:e},children:[B&&O&&ex&&eT(),ex&&(0,r.jsx)("div",{className:o().heard,style:{bottom:t},children:B&&C&&O&&(0,r.jsx)("div",{children:'"'.concat(C,'"')})})]})})(),(()=>{let e=(O||{}).rules||[],t=Object.keys(e).map(e=>{if(isNaN(e))return(0,r.jsx)("div",{className:o().keyword,style:{color:e.toLowerCase()==C?"#01ABB3":"#7ED8A1"},onClick:()=>eR(e),children:e},e)});if(!E&&O&&O.rules){let n=160;return!eg&&ex&&(n=100),(0,r.jsx)("div",{className:o().keywordcontainer,style:{bottom:n},children:t})}})(),(()=>{if(G)return(0,r.jsx)("div",{className:o().countdowncontainer,children:(0,r.jsx)("div",{className:o().countdown,children:J})})})()]}),(0,r.jsxs)("div",{className:o().helpcontainer,children:[(0,r.jsxs)("div",{onClick:ew,className:o().tabbaricon,children:[(0,r.jsx)(x.V9Z,{}),"home"]}),(0,r.jsxs)("div",{onClick:()=>ec(!0),className:o().tabbaricon,children:[(0,r.jsx)(x.znh,{}),"help"]}),(0,r.jsxs)("div",{onClick:()=>ed(!0),className:o().tabbaricon,children:[(0,r.jsx)(x.FDz,{}),"credits"]}),(0,r.jsxs)("div",{onClick:()=>eh(!0),className:o().tabbaricon,children:[(0,r.jsx)(f.aVd,{}),"not working!"]})]}),(0,r.jsxs)(_.ZP,{closeButton:!0,"aria-labelledby":"modal-title",open:ea,onClose:()=>ec(!1),children:[(0,r.jsx)(_.ZP.Header,{children:(0,r.jsx)(g.Z,{id:"modal-title",size:16,children:(0,r.jsx)(g.Z,{b:!0,size:16,children:"".concat((0,b.Z)()," Help!")})})}),(0,r.jsx)(_.ZP.Body,{children:(0,r.jsx)("img",{src:"../help.png"})})]}),(0,r.jsxs)(_.ZP,{closeButton:!0,"aria-labelledby":"modal-title",open:el,onClose:()=>ed(!1),children:[(0,r.jsx)(_.ZP.Header,{children:(0,r.jsx)(g.Z,{id:"modal-title",size:18,children:(0,r.jsx)(g.Z,{b:!0,size:16,children:"".concat((0,b.Z)(),": Credits")})})}),(0,r.jsxs)(_.ZP.Body,{className:o().credits,children:[(0,r.jsxs)(g.Z,{b:!0,size:16,children:["Writer and Story Development ",(0,r.jsx)(g.Z,{size:16,children:"Matt Beames"})]}),(0,r.jsxs)(g.Z,{b:!0,size:16,children:["Story Ideas and Sound Effects ",(0,r.jsx)(g.Z,{size:16,children:"Year 5, Middleton Primary School"})]}),(0,r.jsxs)(g.Z,{b:!0,size:16,children:["Voice Artists ",(0,r.jsx)(g.Z,{size:16,children:"Hayley Thornton, Stuart Reid"})]}),(0,r.jsxs)(g.Z,{b:!0,size:16,children:["Creative Producer ",(0,r.jsx)(g.Z,{size:16,children:"Sarah West Valstar"})]}),(0,r.jsxs)(g.Z,{b:!0,size:16,children:["Software Development ",(0,r.jsx)(g.Z,{size:16,children:"Tom Lodge"})]}),(0,r.jsxs)(g.Z,{b:!0,size:16,children:["Recording and Mixing ",(0,r.jsx)(g.Z,{size:16,children:"Daniel Swann"})]}),(0,r.jsxs)(g.Z,{b:!0,size:16,children:["Executive Producer ",(0,r.jsx)(g.Z,{size:16,children:"Chris Greenhalgh"})]}),(0,r.jsxs)(g.Z,{b:!0,size:16,children:["timebeing by airtone ",(0,r.jsx)(g.Z,{size:16,children:" \xa9 Copyright 2021 Licensed under a Creative Commons Attribution Noncommercial\xa0 (3.0) license."})]}),(0,r.jsx)(g.Z,{size:16,children:(0,r.jsx)("a",{href:"http://dig.ccmixter.org/files/airtone/63895",children:"http://dig.ccmixter.org/files/airtone/63895"})})]})]}),(0,r.jsxs)(_.ZP,{closeButton:!0,"aria-labelledby":"modal-title",open:eu,onClose:()=>eh(!1),children:[(0,r.jsx)(_.ZP.Header,{children:(0,r.jsx)(g.Z,{id:"modal-title",size:18,children:(0,r.jsx)(g.Z,{b:!0,size:16,children:"".concat((0,b.Z)(),": Not working!")})})}),(0,r.jsxs)(_.ZP.Body,{className:o().credits,children:[(0,r.jsx)(g.Z,{size:16,children:"First of all.  Apologies!  This is a prototype app and will inevitably not work quite as smoothly as we would like. Here is a list of potential problems.  However before you spend too much time fiddling with settings, if possible, it might be worth trying a different device or browser (Chrome?) first, to see if the problem goes away."}),(0,r.jsx)(g.Z,{b:!0,size:16,children:"It does not hear me!"}),(0,r.jsx)(g.Z,{size:16,children:" First, check that the app prompted you to use your microphone. If it did and you accepted you should see a little microphone icon in your browser address bar.  If not, it may be that the microphone is not supported on your device."}),(0,r.jsx)(g.Z,{size:16,children:"We have found that voice recognition is better on some devices than on others.  Can you try it on another device or phone?"}),(0,r.jsx)(g.Z,{size:16,children:" We have also found some words are more easily recognised that others. No can be a problem. Try lengthening the word as you say it to see if you get better results"}),(0,r.jsx)(g.Z,{size:16,children:" If all else fails, you can simply click on the word that the app is expecting, to move on to the next scene."}),(0,r.jsx)(g.Z,{b:!0,size:16,children:"It does not play anything"}),(0,r.jsx)(g.Z,{size:16,children:"Hmmm. Assuming your volume controls are working, it might be because your device does not recognise the sound format (mp3) of the audio tracks.  Could you try a different device or phone to see if you have any more luck? "})]})]}),(0,r.jsx)("audio",{src:"../../ping.mp3",ref:i,style:{display:"none"}})]})}},2021:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});class r{log(e,t,n){console.log([e,t,n])}constructor(){if(r._instance)return r._instance;r._instance=this}}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",App:"Home_App__2g2bl",line:"Home_line___MWv3",narrator:"Home_narrator__Fr_cT",dialogue:"Home_dialogue__5Jmgd",actions:"Home_actions__INjAs",record:"Home_record__zLKYD",play:"Home_play__b61Hf",stop:"Home_stop__tg1HT",filterLine:"Home_filterLine__RwTsx",filter:"Home_filter__URZGR",character:"Home_character__ur6on",toolbar:"Home_toolbar__JY_RL",toolbaritem:"Home_toolbaritem__JQRjN"}},9935:function(e){e.exports={container:"Player_container__AM4te",uploadcontainer:"Player_uploadcontainer__uCS_a",fileupload:"Player_fileupload__7q8Co",textbox:"Player_textbox__qPNl9",librarybutton:"Player_librarybutton__3BFKa",keywordcontainer:"Player_keywordcontainer__ZO32p",keyword:"Player_keyword__xaYQC",micontainer:"Player_micontainer__qFJW_",listening:"Player_listening__1GL5T",heard:"Player_heard__XJvZR",startcontainer:"Player_startcontainer__Oh_79",startbutton:"Player_startbutton__pvC4M",customfileupload:"Player_customfileupload__wdK3C",loadingcontainer:"Player_loadingcontainer__v9PE3",progress:"Player_progress__v0__O",storytextcontainer:"Player_storytextcontainer__7G1CO",storytitle:"Player_storytitle__2XM6R",listeningcontainer:"Player_listeningcontainer__qCuUW",helpcontainer:"Player_helpcontainer__qp3fv",storytext:"Player_storytext__uYLZ4",tabbaricon:"Player_tabbaricon__nZhzA",countdowncontainer:"Player_countdowncontainer__myM3X",countdown:"Player_countdown__qIMyf",imagerow:"Player_imagerow__xsUO4",imagecontainer:"Player_imagecontainer___OgUC",credits:"Player_credits__dsypU",spinning:"Player_spinning__ATi8z","image-spin":"Player_image-spin__9viKO",navbaricon:"Player_navbaricon__NK38x"}},9127:function(){},5410:function(){},8628:function(){},1601:function(){},7792:function(){},4977:function(){},4654:function(){},5042:function(){},3695:function(){}}]);