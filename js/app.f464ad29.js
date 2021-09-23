(function(){"use strict";var e={146:function(e,n,l){var t=l(963),a=l(252),s=l(577);const i={id:"main",class:""},r=(0,a._)("div",{class:"self-center mt-8 mb-10 border-b-4 border-gray-300 pb-2"},[(0,a._)("span",{class:"text-5xl uppercase font-bold text-blue-800"},"Machinest")],-1),o={class:"styled-table hidden"},u=(0,a._)("th",null,"Test:",-1),c=(0,a._)("th",null,"Training Method:",-1);function d(e,n,l,t,d,f){const _=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",i,[r,(0,a._)("table",o,[(0,a._)("tbody",null,[(0,a._)("tr",null,[u,(0,a._)("td",null,(0,s.zw)(e.config.test.value),1)]),(0,a._)("tr",null,[c,(0,a._)("td",null,(0,s.zw)(e.config.training_method.value),1)])])]),(0,a.Wm)(_)])}var f=l(262),_=(0,f.iH)(null);var m=_,p=l(460),g=l.n(p),h=l(151),v=((0,h.pm)(),{dataset:(0,f.iH)(null),model:(0,f.iH)(null)});var b=v,w=(0,f.iH)({}),y=(0,f.iH)(null),x=(0,f.iH)(null),k=(0,f.iH)(null);function C(){return{files:b,dataset_config:w,training_method_category:y,training_method:x,features:m,test:k}}var D=(0,a.aZ)({name:"App",setup:function(){var e=C();return{config:e}}});D.render=d;var H=D,O=l(119);const j=(0,a._)("h1",null,"Home",-1),M=(0,a._)("p",null,[(0,a.Uk)("Welcome to "),(0,a._)("span",{class:"underline"},"MACHINEST"),(0,a.Uk)(". Our goal is to enable everone to train Machine Learning models in their browser. ")],-1),T={class:"flex justify-between mt-8"},$=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1);function q(e,n,l,t,s,i){return(0,a.wg)(),(0,a.iD)("div",null,[j,M,(0,a._)("div",T,[$,(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"load"})}),class:"router-btn"}," 1. Load > ")])])}var F=(0,a.aZ)({name:"Home",setup:function(){var e=C();return e}});F.render=q;var U=F;const L=(0,a.uE)('<h1>1. Load</h1><p class="text-sm">Please select the dataset which you wish to use for training the model. You can also select a previously trained model. Your options are:</p><ul class="text-sm mt-1 list-disc list-inside leading-6"><li>Train new model based on dataset: only requires selecting a <span class="underline">dataset</span>.</li><li>Make predictions on model: only requires selecting a <span class="underline">model</span>.</li><li>Continue training model on (new) dataset: requires selecting a <span class="underline">dataset</span> and <span class="underline">model</span>.</li></ul><hr class="my-4">',4),R={class:"flex flex-col md:flex-row md:space-x-4"},E={class:"md:w-1/2 mt-4"},P=(0,a._)("h2",{class:"text-xl mb-1"},"Dataset",-1),Z={class:"bg-gray-50 border border-gray-300 text-center py-6"},z=(0,a._)("label",{for:"file_dataset",class:"w-full cursor-pointer"},[(0,a.Uk)(" Click "),(0,a._)("span",{class:"underline"},"here"),(0,a.Uk)(" to select the dataset ")],-1),A={key:0,class:"w-full"},S={class:"align-middle text-sm text-blue-700"},I={class:"md:w-1/2 mt-4"},N=(0,a._)("h2",{class:"text-xl mb-1"},"Model",-1),Y={class:"bg-gray-50 border border-gray-300 text-center py-6"},K=(0,a._)("label",{for:"file_model",class:"w-full cursor-pointer"},[(0,a.Uk)(" Click "),(0,a._)("span",{class:"underline"},"here"),(0,a.Uk)(" to select the model ")],-1),G={key:0,class:"w-full"},J={class:"align-middle text-sm text-blue-700"},W={class:"flex flex-col md:flex-row items-start justify-between mt-8"},V=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),B={class:"flex flex-col space-y-2 md:items-end"},Q={key:0,disabled:"true",class:"router-btn"},X=(0,a.Uk)(" 2. Create new model using "),ee=(0,a._)("u",null,"dataset",-1),ne=[X,ee],le=(0,a.Uk)(" 6. Make predictions on "),te=(0,a._)("u",null,"model",-1),ae=[le,te],se=(0,a.Uk)(" 4. Clean to continue training "),ie=(0,a._)("u",null,"model",-1),re=(0,a.Uk)(" using "),oe=(0,a._)("u",null,"dataset",-1),ue=[se,ie,re,oe];function ce(e,n){return(0,a.wg)(),(0,a.iD)("div",null,[L,(0,a._)("div",R,[(0,a._)("div",E,[P,(0,a._)("input",{ref:"file_dataset",id:"file_dataset",class:"hidden",type:"file",onChange:n[0]||(n[0]=n=>e.file_changed_dataset(n))},null,544),(0,a._)("div",Z,[z,null!=e.config.files.dataset?.value?((0,a.wg)(),(0,a.iD)("div",A,[(0,a._)("span",S,(0,s.zw)(e.config.files.dataset.value?.name),1),(0,a._)("span",{class:"align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0",onClick:n[1]||(n[1]=n=>e.file_clear_dataset())},"×")])):(0,a.kq)("",!0)])]),(0,a._)("div",I,[N,(0,a._)("input",{ref:"file_model",id:"file_model",class:"hidden",type:"file",onChange:n[2]||(n[2]=n=>e.file_changed_model(n))},null,544),(0,a._)("div",Y,[K,null!=e.config.files.model?.value?((0,a.wg)(),(0,a.iD)("div",G,[(0,a._)("span",J,(0,s.zw)(e.config.files.model.value.name),1),(0,a._)("span",{class:"align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0",onClick:n[3]||(n[3]=n=>e.file_clear_model())},"×")])):(0,a.kq)("",!0)])])]),(0,a._)("div",W,[(0,a._)("button",{onClick:n[4]||(n[4]=n=>{e.$router.push({name:"home"})}),class:"router-btn mb-2 md:mb-0"}," ＜ Home "),V,(0,a._)("div",B,[null===e.config.files.model?.value&&null===e.config.files.dataset?.value?((0,a.wg)(),(0,a.iD)("button",Q," Load dataset or model ")):(0,a.kq)("",!0),null!==e.config.files.dataset?.value?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:n[5]||(n[5]=n=>{e.parse_dataset()&&e.$router.push({name:"method"})}),class:"router-btn"},ne)):(0,a.kq)("",!0),null!==e.config.files.model?.value?((0,a.wg)(),(0,a.iD)("button",{key:2,onClick:n[6]||(n[6]=n=>{e.parse_model()&&e.$router.push({name:"predict"})}),class:"router-btn"},ae)):(0,a.kq)("",!0),null!==e.config.files.model?.value&&null!==e.config.files.dataset?.value?((0,a.wg)(),(0,a.iD)("button",{key:3,onClick:n[7]||(n[7]=n=>{e.parse_dataset()&&e.parse_model()&&e.$router.push({name:"clean"})}),class:"router-btn"},ue)):(0,a.kq)("",!0)])])])}var de=l(655),fe=(0,a.aZ)({setup:function(){var e=this,n=C(),l=((0,h.pm)(),(0,f.iH)(null)),t=(0,f.iH)(null),a=function(e){var n=e.target;if(null==n||null==n.files)return null;if(1!==n.files.length)return alert("now null?"),null;var l=n.files[0];return l},s=function(e){n.files.dataset.value=a(e)},i=function(e){n.files.model.value=a(e)},r=function(){null!=l.value&&(l.value.value=""),n.files.dataset.value=null},o=function(){null!=t.value&&(t.value.value=""),n.files.model.value=null},u=(0,f.iH)(null),c=function(){return(0,de.mG)(e,void 0,void 0,(function(){return(0,de.Jh)(this,(function(e){switch(e.label){case 0:return u.value=0,null===n.files.dataset.value?[3,2]:[4,g().parse(n.files.dataset.value,{error:function(e,n){console.log("ERROR:",e,n)},complete:function(e){console.log("PARSED.",e),console.log(e.data[0]),u.value=100}})];case 1:e.sent(),e.label=2;case 2:return[2,!1]}}))}))},d=(0,f.iH)(null),_=function(){return!1},m=(0,f.Fl)((function(){return!1}));return{config:n,file_changed_dataset:s,file_changed_model:i,file_clear_dataset:r,file_clear_model:o,parse_dataset_progress:u,parse_dataset:c,parse_model_progress:d,parse_model:_,page_next_disabled:m}}});fe.render=ce;var _e=fe;(0,a.dD)("data-v-781fc166");const me={class:"flex flex-col"},pe=(0,a._)("h1",null,"2. Training Method",-1),ge=(0,a._)("p",{class:"text-sm"},"Please select the which you would like to use.",-1),he=(0,a._)("hr",{class:"my-4"},null,-1),ve={class:"grid grid-cols-3 gap-4"},be=["onClick"],we={class:"self-center"},ye=(0,a._)("hr",{class:"my-4"},null,-1),xe={key:0,class:"grid grid-cols-3 gap-4"},ke=["onClick"],Ce={class:"self-center"},De={class:"flex justify-between mt-8"},He=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),Oe=["disabled"];function je(e,n,l,t,i,r){return(0,a.wg)(),(0,a.iD)("div",me,[pe,ge,he,(0,a._)("div",ve,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.training_methods.library,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:(0,s.C_)(["method-category-block",{selected:Object.assign({},e.config.training_method_category.value).name==n.name}]),onClick:l=>{e.config.training_method_category.value=n,e.config.training_method.value=null}},[(0,a._)("span",we,(0,s.zw)(n.name),1)],10,be)))),128))]),ye,null!=e.config.training_method_category.value?((0,a.wg)(),(0,a.iD)("div",xe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.config.training_method_category.value.methods,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:(0,s.C_)(["method-block",{selected:Object.assign({},e.config.training_method.value).name==n.name}]),onClick:l=>e.config.training_method.value=n},[(0,a._)("span",Ce,(0,s.zw)(n.name),1)],10,ke)))),128))])):(0,a.kq)("",!0),(0,a._)("div",De,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"load"})}),class:"router-btn"}," ＜ 1. Load "),He,(0,a._)("button",{onClick:n[1]||(n[1]=n=>{e.$router.push({name:"features"})}),disabled:e.config.training_method.value==e.method,class:"router-btn"}," 3. Feature Configuration ＞ ",8,Oe)])])}(0,a.Cn)();var Me={name:"(Multiple) Linear Regression",train:function(e){console.log("simulating training row",e)}},Te=[{name:"supervised",methods:[Me]},{name:"unsupervised",methods:[]},{name:"deep learning",methods:[]}];function $e(){return{library:Te}}var qe=C(),Fe=(0,a.aZ)({setup:function(){var e=$e(),n=(0,f.Fl)((function(){return null==qe.files.dataset&&null==qe.files.model})),l=(0,f.iH)(),t=function(){console.log(""),null==qe.files.dataset.value?console.log("DATASET IS NULL"):(console.log("PARSING..."),g().parse(qe.files.dataset.value,{error:function(e,n){console.log("ERROR:",e,n)},complete:function(e){console.log("PARSED.",e),console.log(e.data[0]),l.value=JSON.stringify(e)}}))};return{config:qe,training_methods:e,page_next_disabled:n,parsed_status:l,dataset_parse:t,dologthings:function(e){console.log(e)}}}});Fe.render=je,Fe.__scopeId="data-v-781fc166";var Ue=Fe;const Le=(0,a._)("h1",null,"3. Feature Configuration",-1),Re=(0,a._)("p",{class:"text-sm"},"Here you can configure each feature from the dataset which you supplied",-1),Ee=(0,a._)("hr",{class:"my-4"},null,-1),Pe={class:"styled-table"},Ze=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Feature"),(0,a._)("th",null,"DataType"),(0,a._)("th",null,"Dependant"),(0,a._)("th",null,"Independant")])],-1),ze={key:0},Ae=(0,a._)("td",{colspan:"4"},"Loading...",-1),Se=[Ae],Ie={key:1},Ne=(0,a._)("td",{colspan:"4"},"No features available in dataset [refetch]...",-1),Ye=[Ne],Ke={class:"flex justify-between mt-8"},Ge=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),Je=["disabled"];function We(e,n,l,t,i,r){return(0,a.wg)(),(0,a.iD)("div",null,[Le,Re,Ee,(0,a._)("table",Pe,[Ze,(0,a._)("tbody",null,[null==e.features?((0,a.wg)(),(0,a.iD)("tr",ze,Se)):0==e.features.length?((0,a.wg)(),(0,a.iD)("tr",Ie,Ye)):((0,a.wg)(!0),(0,a.iD)(a.HY,{key:2},(0,a.Ko)(e.features,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e},[(0,a._)("td",null,(0,s.zw)(e.name),1)])))),128))])]),(0,a._)("div",Ke,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"method"})}),class:"router-btn"}," ＜ 2. Method "),Ge,(0,a._)("button",{onClick:n[1]||(n[1]=n=>{e.$router.push({name:"clean"})}),disabled:e.page_next_disabled,class:"router-btn"}," 4. Clean Data ＞ ",8,Je)])])}var Ve=(0,a.aZ)({setup:function(){var e=C();return null===e.features&&e.features,{config:e}}});Ve.render=We;var Be=Ve;const Qe=(0,a._)("h1",null,"4. Data Cleaning",-1),Xe=(0,a._)("p",{class:"text-sm"},"Here you can configure each feature from the dataset which you supplied",-1),en=(0,a._)("hr",{class:"my-4"},null,-1),nn={class:"styled-table"},ln=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Feature"),(0,a._)("th",null,"DataType"),(0,a._)("th",null,"Dependant"),(0,a._)("th",null,"Independant")])],-1),tn={key:0},an=(0,a._)("td",{colspan:"4"},"Loading...",-1),sn=[an],rn={key:1},on=(0,a._)("td",{colspan:"4"},"No features available in dataset...",-1),un=[on],cn={class:"flex justify-between mt-8"},dn=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),fn=["disabled"];function _n(e,n,l,t,s,i){return(0,a.wg)(),(0,a.iD)("div",null,[Qe,Xe,en,(0,a._)("table",nn,[ln,(0,a._)("tbody",null,[null==e.features?((0,a.wg)(),(0,a.iD)("tr",tn,sn)):0==e.features.length?((0,a.wg)(),(0,a.iD)("tr",rn,un)):(0,a.kq)("",!0)])]),(0,a._)("div",cn,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"features"})}),class:"router-btn"}," ＜ 3. Features "),dn,(0,a._)("button",{onClick:n[1]||(n[1]=n=>{e.$router.push({name:"train"})}),disabled:e.page_next_disabled,class:"router-btn"}," 5. Train Model ＞ ",8,fn)])])}var mn=(0,a.aZ)({setup:function(){var e=C();return null===e.features&&e.features,{config:e}}});mn.render=_n;var pn=mn;const gn=(0,a.uE)('<h1>5. Train Model</h1><p class="text-sm">Here you can configure each feature from the dataset which you supplied</p><hr class="my-4"><div class="mt-4"><div class="flex flex-row justify-between items-end"><span class="text-xl font-medium text-purple-900">40% Completed</span><span class="text-sm font-thin text-gray-700">row 96 of 240</span></div><div class="mt-2 rounded h-3 w-full bg-gray-200 overflow-hidden text-xs text-center text-gray-100"><div style="" class="rounded w-1/3 h-full bg-purple-400 border-purple-500 border-b-2"></div></div></div>',4),hn={class:"flex justify-between mt-8"},vn=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1);function bn(e,n,l,t,s,i){return(0,a.wg)(),(0,a.iD)("div",null,[gn,(0,a._)("div",hn,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"clean"})}),class:"router-btn"}," ＜ 4. Data Cleaning "),vn])])}var wn=(0,a.aZ)({setup:function(){var e=C();return null===e.features&&e.features,{config:e}}});wn.render=bn;var yn=wn;const xn=(0,a._)("h1",null,"6. Predict",-1),kn=(0,a._)("p",{class:"text-sm"},"This page allows you to predict dependant values by providing independant values",-1),Cn=(0,a._)("hr",{class:"mt-1"},null,-1),Dn=(0,a._)("div",{class:"flex flex-row space-x-4"},[(0,a._)("table",{class:"w-1/2 styled-table"},[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Feature"),(0,a._)("th",null,"Value")])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("th",null,"[Feature-name]"),(0,a._)("td",null,"[Feature-value]")])])])],-1),Hn={class:"flex justify-between mt-8"},On=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),jn=["disabled"];function Mn(e,n,l,t,s,i){return(0,a.wg)(),(0,a.iD)("div",null,[xn,kn,Cn,Dn,(0,a._)("div",Hn,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"method"})}),class:"router-btn"}," ＜ 2. Method "),On,(0,a._)("button",{onClick:n[1]||(n[1]=n=>{e.$router.push({name:"home"})}),disabled:e.page_next_disabled,class:"router-btn"}," 4. Data Cleaning ＞ ",8,jn)])])}var Tn=(0,a.aZ)({setup:function(){var e=C();return null===e.features&&e.features,{config:e}}});Tn.render=Mn;var $n=Tn,qn=[{name:"home",path:"/",component:U},{name:"load",path:"/load",component:_e},{name:"method",path:"/method",component:Ue},{name:"features",path:"/features",component:Be},{name:"clean",path:"/clean",component:pn},{name:"train",path:"/train",component:yn},{name:"predict",path:"/predict",component:$n}],Fn=O.p7({history:O.r5(),routes:qn}),Un=Fn;(0,t.ri)(H).use(Un).use(h.ZP).mount("#app")}},n={};function l(t){var a=n[t];if(void 0!==a)return a.exports;var s=n[t]={exports:{}};return e[t].call(s.exports,s,s.exports,l),s.exports}l.m=e,function(){var e=[];l.O=function(n,t,a,s){if(!t){var i=1/0;for(c=0;c<e.length;c++){t=e[c][0],a=e[c][1],s=e[c][2];for(var r=!0,o=0;o<t.length;o++)(!1&s||i>=s)&&Object.keys(l.O).every((function(e){return l.O[e](t[o])}))?t.splice(o--,1):(r=!1,s<i&&(i=s));if(r){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[t,a,s]}}(),function(){l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,{a:n}),n}}(),function(){l.d=function(e,n){for(var t in n)l.o(n,t)&&!l.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){l.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};l.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,s,i=t[0],r=t[1],o=t[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(a in r)l.o(r,a)&&(l.m[a]=r[a]);if(o)var c=o(l)}for(n&&n(t);u<i.length;u++)s=i[u],l.o(e,s)&&e[s]&&e[s][0](),e[i[u]]=0;return l.O(c)},t=self["webpackChunkbd02_ai_casus"]=self["webpackChunkbd02_ai_casus"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=l.O(void 0,[998],(function(){return l(146)}));t=l.O(t)})();
//# sourceMappingURL=app.f464ad29.js.map