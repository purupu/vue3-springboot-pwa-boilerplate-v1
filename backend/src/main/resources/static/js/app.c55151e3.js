(function(){"use strict";var e={5180:function(e,t,a){var o=a(3751),r=a(4445),s=a(641),l=a(4335),n=a(953),c=a(33),i={getNumberFormatted(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}};const d={class:"col"},u={class:"card shadow-sm"},m={class:"card-body"},p={class:"card-text"},k={class:"discount badge bg-danger"},f={class:"d-flex justify-content-between align-items-center"},b={class:"price text-muted"},v={class:"real text-danger"};var h={__name:"Card",props:{item:Object},setup(e){const t=e=>{l.A.post(`/api/cart/items/${e}`).then((()=>{console.log("success")}))};return(a,o)=>((0,s.uX)(),(0,s.CE)("div",d,[(0,s.Lk)("div",u,[(0,s.Lk)("span",{class:"img",style:(0,c.Tr)({backgroundImage:`url(${e.item.imgPath}`})},null,4),(0,s.Lk)("div",m,[(0,s.Lk)("p",p,[(0,s.eW)((0,c.v_)(e.item.name)+"   ",1),(0,s.Lk)("span",k,(0,c.v_)(e.item.discountPer)+"%",1)]),(0,s.Lk)("div",f,[(0,s.Lk)("button",{onClick:o[0]||(o[0]=a=>t(e.item.id)),class:"btn btn-primary"},o[1]||(o[1]=[(0,s.Lk)("i",{class:"fa fa-shopping-cart","aria-hidden":"true"},null,-1)])),(0,s.Lk)("small",b,(0,c.v_)((0,n.R1)(i).getNumberFormatted(e.item.price))+"원",1),(0,s.Lk)("small",v,(0,c.v_)(e.item.price*e.item.discountPer/100)+"원",1)])])])]))}},g=a(6262);const L=(0,g.A)(h,[["__scopeId","data-v-2266ce08"]]);var y=L;const w=(0,r.nY)("counter",{state:()=>({account:{id:0}}),getters:{setAccount(e,t){e.account.id=t},doubleCount:e=>2*e.count},actions:{increment(){this.count++}}}),_={class:"album py-5 bg-body-tertiary"},x={class:"container"},C={class:"row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3"};var E={__name:"Home",setup(e){const t=(0,n.Kh)({items:[]}),a=w();return console.log(a.account),l.A.get("/api/items").then((e=>{console.log(e),t.items=e.data})),(e,a)=>((0,s.uX)(),(0,s.CE)("div",null,[(0,s.Lk)("div",_,[(0,s.Lk)("div",x,[(0,s.Lk)("div",C,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.items,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},[(0,s.bF)(y,{item:e},null,8,["item"])])))),128))])])])]))}};const X=E;var F=X;a(4114);const I={class:"form-signin w-100 m-auto"},O={class:"form-floating"},A={class:"form-floating"},R={class:"form-check text-start my-3"};var P={__name:"Login",setup(e){const t=(0,n.Kh)({form:{email:"",password:""},isRemember:!1});"true"===localStorage.getItem("isRemember")&&(t.isRemember=!0,t.form.email=localStorage.getItem("email"));const a=()=>{l.A.post("/api/account/login",t.form).then((e=>{const a=w();a.account.id=e.data,console.log("header"+t.isRemember),t.isRemember?(localStorage.setItem("isRemember","true"),localStorage.setItem("email",t.form.email)):(localStorage.setItem("isRemember","false"),localStorage.removeItem("email")),window.alert("로그인하였습니다."),ye.push({path:"/"})})).catch((()=>{window.alert("ID/PW를 확인해주세요.")}))};return(e,r)=>((0,s.uX)(),(0,s.CE)("div",I,[(0,s.Lk)("form",null,[r[7]||(r[7]=(0,s.Lk)("h1",{class:"h3 mb-3 fw-normal"},"Please sign in",-1)),(0,s.Lk)("div",O,[(0,s.bo)((0,s.Lk)("input",{type:"email",class:"form-control",id:"floatingInput",placeholder:"name@example.com","onUpdate:modelValue":r[0]||(r[0]=e=>t.form.email=e)},null,512),[[o.Jo,t.form.email]]),r[4]||(r[4]=(0,s.Lk)("label",{for:"floatingInput"},"Email address",-1))]),(0,s.Lk)("div",A,[(0,s.bo)((0,s.Lk)("input",{type:"password",class:"form-control",id:"floatingPassword",placeholder:"Password","onUpdate:modelValue":r[1]||(r[1]=e=>t.form.password=e)},null,512),[[o.Jo,t.form.password]]),r[5]||(r[5]=(0,s.Lk)("label",{for:"floatingPassword"},"Password",-1))]),(0,s.Lk)("div",R,[(0,s.bo)((0,s.Lk)("input",{class:"form-check-input",type:"checkbox",value:"remember-me",id:"isRemember","onUpdate:modelValue":r[2]||(r[2]=e=>t.isRemember=e)},null,512),[[o.lH,t.isRemember]]),r[6]||(r[6]=(0,s.Lk)("label",{class:"form-check-label",for:"flexCheckDefault"}," Remember me ",-1))]),(0,s.Lk)("button",{onClick:r[3]||(r[3]=e=>a()),class:"btn btn-primary w-100 py-2",type:"submit"},"Sign in"),r[8]||(r[8]=(0,s.Lk)("p",{class:"mt-5 mb-3 text-body-secondary"},"© 2017–2024",-1))])]))}};const S=(0,g.A)(P,[["__scopeId","data-v-69ee6d52"]]);var j=S;const N={class:"cart"},K={class:"container"},V=["src"],B={class:"name"},J={class:"price"},W=["onClick"];var U={__name:"Cart",setup(e){const t=(0,n.Kh)({items:[]}),a=e=>{l.A.delete(`/api/cart/items/${e}`).then((e=>{console.log(e),alert("삭제되었습니다."),o()}))},o=()=>{l.A.get("/api/cart/items").then((({data:e})=>{t.items=e}))};return o(),(e,o)=>{const r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("div",N,[(0,s.Lk)("div",K,[(0,s.Lk)("ul",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.items,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{key:t},[(0,s.Lk)("img",{src:e.imgPath},null,8,V),(0,s.Lk)("span",B,(0,c.v_)(e.name),1),(0,s.Lk)("span",J,(0,c.v_)((0,n.R1)(i).getNumberFormatted(e.price-e.price*e.discountPer/100))+"원",1),(0,s.Lk)("i",{class:"fa fa-trash",onClick:t=>a(e.id)},null,8,W)])))),128))]),(0,s.bF)(r,{to:"/order",class:"btn btn-primary order-button"},{default:(0,s.k6)((()=>o[0]||(o[0]=[(0,s.eW)("주문하기")]))),_:1})])])}}};const H=(0,g.A)(U,[["__scopeId","data-v-5d73bb17"]]);var T=H,M=a(5220);const $={class:"order"},q={class:"container"},z={class:"row g-5"},D={class:"col-md-5 col-lg-4 order-md-last"},Q={class:"d-flex justify-content-between align-items-center mb-3"},G={class:"badge bg-primary rounded-pill"},Y={class:"list-group mb-3"},Z={class:"my-0"},ee={class:"text-muted"},te={class:"text-center total-price"},ae={class:"col-md-7 col-lg-8"},oe={class:"needs-validation",novalidate:""},re={class:"row g-3"},se={class:"col-12"},le={class:"col-12"},ne={class:"my-3"},ce={class:"form-check"},ie={class:"form-check"};var de={__name:"Order",setup(e){const t=(0,n.Kh)({items:[],form:{name:"",address:"",payment:"",cardNumber:"",items:""}}),a=()=>{l.A.get("/api/cart/items").then((({data:e})=>{console.log(e),t.items=e}))},r=()=>{const e=JSON.parse(JSON.stringify(t.form));e.items=JSON.stringify(t.items),l.A.post("/api/orders",e).then((()=>{alert("주문 완료하였습니다."),ye.push({path:"/orders"})}))},d=(0,s.EW)((()=>{let e=0;for(let a of t.items)e+=a.price-a.price*a.discountPer/100;return e}));return a(),(e,a)=>((0,s.uX)(),(0,s.CE)("div",$,[(0,s.Lk)("div",q,[(0,s.Lk)("main",null,[a[16]||(a[16]=(0,s.Lk)("div",{class:"py-5 text-center"},[(0,s.Lk)("h2",null,"주문하기"),(0,s.Lk)("p",{class:"lead"},"Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.")],-1)),(0,s.Lk)("div",z,[(0,s.Lk)("div",D,[(0,s.Lk)("h4",Q,[a[6]||(a[6]=(0,s.Lk)("span",{class:"text-primary"},"구입 목록",-1)),(0,s.Lk)("span",G,(0,c.v_)(t.items.length),1)]),(0,s.Lk)("ul",Y,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.items,((e,t)=>((0,s.uX)(),(0,s.CE)("li",{class:"list-group-item d-flex justify-content-between lh-sm",key:t},[(0,s.Lk)("div",null,[(0,s.Lk)("h6",Z,(0,c.v_)(e.name),1)]),(0,s.Lk)("span",ee,(0,c.v_)((0,n.R1)(i).getNumberFormatted(e.price-e.price*e.discountPer/100))+"원 ",1)])))),128))]),(0,s.Lk)("h3",te,(0,c.v_)((0,n.R1)(i).getNumberFormatted(d.value))+"원 ",1)]),(0,s.Lk)("div",ae,[a[15]||(a[15]=(0,s.Lk)("h4",{class:"mb-3"},"주문자 정보",-1)),(0,s.Lk)("div",oe,[(0,s.Lk)("div",re,[(0,s.Lk)("div",se,[a[7]||(a[7]=(0,s.Lk)("label",{for:"username",class:"form-label"},"이름",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"username","onUpdate:modelValue":a[0]||(a[0]=e=>t.form.name=e)},null,512),[[o.Jo,t.form.name]])]),(0,s.Lk)("div",le,[a[8]||(a[8]=(0,s.Lk)("label",{for:"address",class:"form-label"},"주소",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"address","onUpdate:modelValue":a[1]||(a[1]=e=>t.form.address=e)},null,512),[[o.Jo,t.form.address]])])]),a[11]||(a[11]=(0,s.Lk)("hr",{class:"my-4"},null,-1)),a[12]||(a[12]=(0,s.Lk)("h4",{class:"mb-3"},"결제 수단",-1)),(0,s.Lk)("div",ne,[(0,s.Lk)("div",ce,[(0,s.bo)((0,s.Lk)("input",{id:"card",name:"paymentMethod",type:"radio",class:"form-check-input",value:"card","onUpdate:modelValue":a[2]||(a[2]=e=>t.form.payment=e)},null,512),[[o.XL,t.form.payment]]),a[9]||(a[9]=(0,s.Lk)("label",{class:"form-check-label",for:"card"},"신용카드 ",-1))]),(0,s.Lk)("div",ie,[(0,s.bo)((0,s.Lk)("input",{id:"bank",name:"paymentMethod",type:"radio",class:"form-check-input",value:"bank","onUpdate:modelValue":a[3]||(a[3]=e=>t.form.payment=e)},null,512),[[o.XL,t.form.payment]]),a[10]||(a[10]=(0,s.Lk)("label",{class:"form-check-label",for:"bank"},"무통장입금",-1))])]),a[13]||(a[13]=(0,s.Lk)("label",{for:"cc-name",class:"form-label"},"카드 번호",-1)),(0,s.bo)((0,s.Lk)("input",{type:"text",class:"form-control",id:"cc-name","onUpdate:modelValue":a[4]||(a[4]=e=>t.form.cardNumber=e)},null,512),[[o.Jo,t.form.cardNumber]]),a[14]||(a[14]=(0,s.Lk)("hr",{class:"my-4"},null,-1)),(0,s.Lk)("button",{class:"w-100 btn btn-primary btn-lg",onClick:a[5]||(a[5]=e=>r())},"결제하기")])])])])])]))}};const ue=de;var me=ue;const pe={class:"orders"},ke={class:"container"},fe={class:"table table-bordered"};var be={__name:"Orders",setup(e){const t=(0,n.Kh)({orders:[]});return l.A.get("/api/orders").then((({data:e})=>{t.orders=[];for(let a of e)a.items&&(a.items=JSON.parse(a.items)),t.orders.push(a)})),(e,a)=>((0,s.uX)(),(0,s.CE)("div",pe,[(0,s.Lk)("div",ke,[(0,s.Lk)("table",fe,[a[0]||(a[0]=(0,s.Lk)("thead",null,[(0,s.Lk)("tr",null,[(0,s.Lk)("th",null,"번호"),(0,s.Lk)("th",null,"주문자명"),(0,s.Lk)("th",null,"주소"),(0,s.Lk)("th",null,"결제 수단"),(0,s.Lk)("th",null,"구입 항목")])],-1)),(0,s.Lk)("tbody",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t.orders,((e,a)=>((0,s.uX)(),(0,s.CE)("tr",{key:a},[(0,s.Lk)("td",null,(0,c.v_)(t.orders.length-a),1),(0,s.Lk)("td",null,(0,c.v_)(e.name),1),(0,s.Lk)("td",null,(0,c.v_)(e.address),1),(0,s.Lk)("td",null,(0,c.v_)(e.payment),1),(0,s.Lk)("td",null,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(e.items,((e,t)=>((0,s.uX)(),(0,s.CE)("div",{key:t},(0,c.v_)(e.name),1)))),128))])])))),128))])])])]))}};const ve=(0,g.A)(be,[["__scopeId","data-v-0c56b810"]]);var he=ve;const ge=[{path:"/",component:F},{path:"/login",component:j},{path:"/cart",component:T},{path:"/order",component:me},{path:"/orders",component:he}],Le=(0,M.aE)({history:(0,M.Bt)(),routes:ge});var ye=Le;const we={"data-bs-theme":"dark"},_e={class:"collapse text-bg-dark",id:"navbarHeader"},xe={class:"container"},Ce={class:"row"},Ee={class:"col-sm-4 py-4"},Xe={class:"list-unstyled"},Fe={key:0},Ie={class:"navbar navbar-dark bg-dark shadow-sm"},Oe={class:"container"};var Ae={__name:"Header",setup(e){const t=w(),a=()=>{l.A.post("/api/account/logout").then((()=>{alert("로그아웃 하였습니다."),t.account.id=0})),ye.push({path:"/"})};return(e,o)=>{const r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("header",we,[(0,s.Lk)("div",_e,[(0,s.Lk)("div",xe,[(0,s.Lk)("div",Ce,[(0,s.Lk)("div",Ee,[o[3]||(o[3]=(0,s.Lk)("h4",{class:"text-white"},"사이트맵",-1)),(0,s.Lk)("ul",Xe,[(0,s.Lk)("li",null,[(0,s.bF)(r,{to:"/",class:"text-white"},{default:(0,s.k6)((()=>o[0]||(o[0]=[(0,s.eW)("메인 화면")]))),_:1})]),(0,n.R1)(t).account.id?((0,s.uX)(),(0,s.CE)("li",Fe,[(0,s.bF)(r,{to:"/orders",class:"text-white"},{default:(0,s.k6)((()=>o[1]||(o[1]=[(0,s.eW)("주문 내역")]))),_:1})])):(0,s.Q3)("",!0),(0,s.Lk)("li",null,[0===(0,n.R1)(t).account.id?((0,s.uX)(),(0,s.Wv)(r,{key:0,to:"/login",class:"text-white"},{default:(0,s.k6)((()=>o[2]||(o[2]=[(0,s.eW)("로그인")]))),_:1})):((0,s.uX)(),(0,s.CE)("a",{key:1,onClick:a,class:"text-white"},"로그아웃"))])])])])])]),(0,s.Lk)("div",Ie,[(0,s.Lk)("div",Oe,[(0,s.bF)(r,{to:"/",href:"#",class:"navbar-brand d-flex align-items-center"},{default:(0,s.k6)((()=>o[4]||(o[4]=[(0,s.Lk)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2","aria-hidden":"true",class:"me-2",viewBox:"0 0 24 24"},[(0,s.Lk)("path",{d:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"}),(0,s.Lk)("circle",{cx:"12",cy:"13",r:"4"})],-1),(0,s.Lk)("strong",null,"Gallery",-1)]))),_:1}),(0,n.R1)(t).account.id?((0,s.uX)(),(0,s.Wv)(r,{key:0,to:"/cart",class:"cart"},{default:(0,s.k6)((()=>o[5]||(o[5]=[(0,s.Lk)("i",{class:"fa fa-shopping-cart","aria-hidden":"true"},null,-1)]))),_:1})):(0,s.Q3)("",!0),o[6]||(o[6]=(0,s.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarHeader","aria-controls":"navbarHeader","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s.Lk)("span",{class:"navbar-toggler-icon"})],-1))])])])}}};const Re=(0,g.A)(Ae,[["__scopeId","data-v-0541668e"]]);var Pe=Re;const Se={class:"text-body-secondary py-5"};function je(e,t){return(0,s.uX)(),(0,s.CE)("footer",Se,t[0]||(t[0]=[(0,s.Fv)('<div class="container"><p class="float-end mb-1"><a href="#">Back to top</a></p><p class="mb-1">Album example is © Bootstrap, but please download and customize it for yourself!</p><p class="mb-0">New to Bootstrap? <a href="/">Visit the homepage</a> or read our <a href="/docs/5.3/getting-started/introduction/">getting started guide</a>.</p></div>',1)]))}const Ne={},Ke=(0,g.A)(Ne,[["render",je]]);var Ve=Ke,Be={__name:"App",setup(e){const t=w(),a=()=>{l.A.get("/api/account/check").then((({data:e})=>{console.log(e),t.account.id=e||0}))},o=(0,M.lq)();return(0,s.wB)(o,(()=>{a()})),(e,t)=>((0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(Pe),(0,s.bF)((0,n.R1)(M.Tp)),(0,s.bF)(Ve)],64))}};const Je=Be;var We=Je;(0,o.Ef)(We).use((0,r.Ey)()).use(ye).mount("#app")}},t={};function a(o){var r=t[o];if(void 0!==r)return r.exports;var s=t[o]={exports:{}};return e[o].call(s.exports,s,s.exports,a),s.exports}a.m=e,function(){var e=[];a.O=function(t,o,r,s){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],s=e[d][2];for(var n=!0,c=0;c<o.length;c++)(!1&s||l>=s)&&Object.keys(a.O).every((function(e){return a.O[e](o[c])}))?o.splice(c--,1):(n=!1,s<l&&(l=s));if(n){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[o,r,s]}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,s,l=o[0],n=o[1],c=o[2],i=0;if(l.some((function(t){return 0!==e[t]}))){for(r in n)a.o(n,r)&&(a.m[r]=n[r]);if(c)var d=c(a)}for(t&&t(o);i<l.length;i++)s=l[i],a.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return a.O(d)},o=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(5180)}));o=a.O(o)})();
//# sourceMappingURL=app.c55151e3.js.map