(function(){"use strict";var e={856:function(e,n,t){var l=t(963),a=t(252),s=t(577);const i={id:"main",class:""},r=(0,a._)("div",{class:"self-center mt-8 mb-10 border-b-4 border-gray-300 pb-2"},[(0,a._)("span",{class:"text-5xl uppercase font-bold text-blue-800"},"Machinest")],-1),o={class:"styled-table hidden"},u=(0,a._)("th",null,"Test:",-1),c=(0,a._)("th",null,"Training Method:",-1);function d(e,n,t,l,d,f){const _=(0,a.up)("router-view");return(0,a.wg)(),(0,a.iD)("div",i,[r,(0,a._)("table",o,[(0,a._)("tbody",null,[(0,a._)("tr",null,[u,(0,a._)("td",null,(0,s.zw)(e.config.test.value),1)]),(0,a._)("tr",null,[c,(0,a._)("td",null,(0,s.zw)(e.config.training_method.value),1)])])]),(0,a.Wm)(_)])}var f,_=t(262);(function(e){e["CONTINUOUS"]="Continuous",e["DISCRETE"]="Discrete",e["ORDINAL"]="Ordinal",e["NOMINAL"]="Nominal"})(f||(f={}));var m=(0,_.iH)([{name:"Age",is_dependant:!0,measurability:f.DISCRETE},{name:"Gender",is_dependant:!1,measurability:f.NOMINAL},{name:"Total_Protiens",is_dependant:!1,measurability:f.CONTINUOUS},{name:"Alkaline_Phosphotase",is_dependant:!1,measurability:f.CONTINUOUS}]);var g=m,p=t(460),v=t.n(p),h=t(151),b=((0,h.pm)(),{dataset:(0,_.iH)(null),model:(0,_.iH)(null)});var y=b,w=(0,_.iH)({}),x=(0,_.iH)(null),k=(0,_.iH)(null),C=(0,_.iH)(null);function D(){return{files:y,dataset_config:w,training_method_category:x,training_method:k,features:g,test:C}}var O=(0,a.aZ)({name:"App",setup:function(){var e=D();return{config:e}}});O.render=d;var H=O,N=t(119);const T=(0,a._)("h1",null,"Home",-1),M=(0,a._)("p",null,[(0,a.Uk)("Welcome to "),(0,a._)("span",{class:"underline"},"MACHINEST"),(0,a.Uk)(". Our goal is to enable everone to train Machine Learning models in their browser. ")],-1),U={class:"flex justify-between mt-8"},j=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1);function S(e,n,t,l,s,i){return(0,a.wg)(),(0,a.iD)("div",null,[T,M,(0,a._)("div",U,[j,(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"load"})}),class:"router-btn"}," 1. Load > ")])])}var $=(0,a.aZ)({name:"Home",setup:function(){var e=D();return e}});$.render=S;var E=$;const I=(0,a.uE)('<h1>1. Load</h1><p class="mb-4">You can download a test-dataset by clicking <a class="text-blue-800 hover:underline" href="/test-datasets/indian_liver_patient.csv">here.</a></p><p class="text-sm">Please select the dataset which you wish to use for training the model. You can also select a previously trained model. Your options are:</p><ul class="text-sm mt-1 list-disc list-inside leading-6"><li>Train new model based on dataset: only requires selecting a <span class="underline">dataset</span>.</li><li>Make predictions on model: only requires selecting a <span class="underline">model</span>.</li><li>Continue training model on (new) dataset: requires selecting a <span class="underline">dataset</span> and <span class="underline">model</span>.</li></ul><hr class="my-4">',5),L={class:"flex flex-col md:flex-row md:space-x-4"},R={class:"md:w-1/2 mt-4"},A=(0,a._)("h2",{class:"text-xl mb-1"},"Dataset",-1),F={class:"bg-gray-50 border border-gray-300 text-center py-6"},P=(0,a._)("label",{for:"file_dataset",class:"w-full cursor-pointer"},[(0,a.Uk)(" Click "),(0,a._)("span",{class:"underline"},"here"),(0,a.Uk)(" to select the dataset ")],-1),q={key:0,class:"w-full"},Z={class:"align-middle text-sm text-blue-700"},z={class:"md:w-1/2 mt-4"},Y=(0,a._)("h2",{class:"text-xl mb-1"},"Model",-1),K={class:"bg-gray-50 border border-gray-300 text-center py-6"},G=(0,a._)("label",{for:"file_model",class:"w-full cursor-pointer"},[(0,a.Uk)(" Click "),(0,a._)("span",{class:"underline"},"here"),(0,a.Uk)(" to select the model ")],-1),J={key:0,class:"w-full"},W={class:"align-middle text-sm text-blue-700"},V={class:"flex flex-col md:flex-row items-start justify-between mt-8"},B=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),Q={class:"flex flex-col space-y-2 md:items-end"},X={key:0,disabled:"true",class:"router-btn"},ee=(0,a.Uk)(" 2. Create new model using "),ne=(0,a._)("u",null,"dataset",-1),te=[ee,ne],le=(0,a.Uk)(" 6. Make predictions on "),ae=(0,a._)("u",null,"model",-1),se=[le,ae],ie=(0,a.Uk)(" 4. Clean to continue training "),re=(0,a._)("u",null,"model",-1),oe=(0,a.Uk)(" using "),ue=(0,a._)("u",null,"dataset",-1),ce=[ie,re,oe,ue];function de(e,n){return(0,a.wg)(),(0,a.iD)("div",null,[I,(0,a._)("div",L,[(0,a._)("div",R,[A,(0,a._)("input",{ref:"file_dataset",id:"file_dataset",class:"hidden",type:"file",onChange:n[0]||(n[0]=n=>e.file_changed_dataset(n))},null,544),(0,a._)("div",F,[P,null!=e.config.files.dataset?.value?((0,a.wg)(),(0,a.iD)("div",q,[(0,a._)("span",Z,(0,s.zw)(e.config.files.dataset.value?.name),1),(0,a._)("span",{class:"align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0",onClick:n[1]||(n[1]=n=>e.file_clear_dataset())},"×")])):(0,a.kq)("",!0)])]),(0,a._)("div",z,[Y,(0,a._)("input",{ref:"file_model",id:"file_model",class:"hidden",type:"file",onChange:n[2]||(n[2]=n=>e.file_changed_model(n))},null,544),(0,a._)("div",K,[G,null!=e.config.files.model?.value?((0,a.wg)(),(0,a.iD)("div",J,[(0,a._)("span",W,(0,s.zw)(e.config.files.model.value.name),1),(0,a._)("span",{class:"align-middle ml-2 text-gray-600 cursor-pointer text-xl leading-0",onClick:n[3]||(n[3]=n=>e.file_clear_model())},"×")])):(0,a.kq)("",!0)])])]),(0,a._)("div",V,[(0,a._)("button",{onClick:n[4]||(n[4]=n=>{e.$router.push({name:"home"})}),class:"router-btn mb-2 md:mb-0"}," ＜ Home "),B,(0,a._)("div",Q,[null===e.config.files.model?.value&&null===e.config.files.dataset?.value?((0,a.wg)(),(0,a.iD)("button",X," Load dataset or model ")):(0,a.kq)("",!0),null!==e.config.files.dataset?.value?((0,a.wg)(),(0,a.iD)("button",{key:1,onClick:n[5]||(n[5]=n=>{e.parse_dataset()&&e.$router.push({name:"method"})}),class:"router-btn"},te)):(0,a.kq)("",!0),null!==e.config.files.model?.value?((0,a.wg)(),(0,a.iD)("button",{key:2,onClick:n[6]||(n[6]=n=>{e.parse_model()&&e.$router.push({name:"predict"})}),class:"router-btn"},se)):(0,a.kq)("",!0),null!==e.config.files.model?.value&&null!==e.config.files.dataset?.value?((0,a.wg)(),(0,a.iD)("button",{key:3,onClick:n[7]||(n[7]=n=>{e.parse_dataset()&&e.parse_model()&&e.$router.push({name:"clean"})}),class:"router-btn"},ce)):(0,a.kq)("",!0)])])])}var fe=t(655),_e=(0,a.aZ)({setup:function(){var e=this,n=D(),t=(0,h.pm)(),l=!1;l&&t("a");var a=(0,_.iH)(null),s=(0,_.iH)(null),i=function(e){var n=e.target;if(null==n||null==n.files)return null;if(1!==n.files.length)return alert("now null?"),null;var t=n.files[0];return t},r=function(e){n.files.dataset.value=i(e)},o=function(e){n.files.model.value=i(e)},u=function(){null!=a.value&&(a.value.value=""),n.files.dataset.value=null},c=function(){null!=s.value&&(s.value.value=""),n.files.model.value=null},d=(0,_.iH)(null),f=function(){return(0,fe.mG)(e,void 0,void 0,(function(){return(0,fe.Jh)(this,(function(e){switch(e.label){case 0:return d.value=0,null===n.files.dataset.value?[3,2]:[4,v().parse(n.files.dataset.value,{error:function(e,n){console.log("ERROR:",e,n)},complete:function(e){console.log("PARSED.",e),console.log(e.data[0]),d.value=100}})];case 1:e.sent(),e.label=2;case 2:return[2,!1]}}))}))},m=(0,_.iH)(null),g=function(){return!1},p=(0,_.Fl)((function(){return!1}));return{config:n,file_changed_dataset:r,file_changed_model:o,file_clear_dataset:u,file_clear_model:c,parse_dataset_progress:d,parse_dataset:f,parse_model_progress:m,parse_model:g,page_next_disabled:p}}});_e.render=de;var me=_e;(0,a.dD)("data-v-7da9b88c");const ge={class:"flex flex-col"},pe=(0,a._)("h1",null,"2. Training Method",-1),ve=(0,a._)("p",{class:"text-sm"},"Please select the which you would like to use.",-1),he=(0,a._)("hr",{class:"my-4"},null,-1),be={class:"grid grid-cols-3 gap-4"},ye=["onClick"],we={class:"self-center"},xe=(0,a._)("hr",{class:"my-4"},null,-1),ke={key:0,class:"grid grid-cols-3 gap-4"},Ce=["onClick"],De={class:"self-center"},Oe={class:"flex justify-between mt-8"},He=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),Ne=["disabled"];function Te(e,n,t,l,i,r){return(0,a.wg)(),(0,a.iD)("div",ge,[pe,ve,he,(0,a._)("div",be,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.training_methods.library,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:(0,s.C_)(["method-category-block",{selected:Object.assign({},e.config.training_method_category.value).name==n.name}]),onClick:t=>{e.config.training_method_category.value=n,e.config.training_method.value=null}},[(0,a._)("span",we,(0,s.zw)(n.name),1)],10,ye)))),128))]),xe,null!=e.config.training_method_category.value?((0,a.wg)(),(0,a.iD)("div",ke,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.config.training_method_category.value.methods,(n=>((0,a.wg)(),(0,a.iD)("div",{key:n,class:(0,s.C_)(["method-block",{selected:Object.assign({},e.config.training_method.value).name==n.name}]),onClick:t=>e.config.training_method.value=n},[(0,a._)("span",De,(0,s.zw)(n.name),1)],10,Ce)))),128))])):(0,a.kq)("",!0),(0,a._)("div",Oe,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"load"})}),class:"router-btn"}," ＜ 1. Load "),He,(0,a._)("button",{onClick:n[1]||(n[1]=n=>{e.$router.push({name:"features"})}),disabled:e.config.training_method.value==e.method,class:"router-btn"}," 3. Feature Configuration ＞ ",8,Ne)])])}(0,a.Cn)();var Me={name:"(Multiple) Linear Regression",train:function(e){console.log("simulating training row",e)}},Ue=[{name:"supervised",methods:[Me]},{name:"unsupervised",methods:[]},{name:"deep learning",methods:[]}];function je(){return{library:Ue}}var Se=D(),$e=(0,a.aZ)({setup:function(){var e=je(),n=(0,_.Fl)((function(){return null==Se.files.dataset&&null==Se.files.model})),t=(0,_.iH)(),l=function(){console.log(""),null==Se.files.dataset.value?console.log("DATASET IS NULL"):(console.log("PARSING..."),v().parse(Se.files.dataset.value,{error:function(e,n){console.log("ERROR:",e,n)},complete:function(e){console.log("PARSED.",e),console.log(e.data[0]),t.value=JSON.stringify(e)}}))};return{config:Se,training_methods:e,page_next_disabled:n,parsed_status:t,dataset_parse:l}}});$e.render=Te,$e.__scopeId="data-v-7da9b88c";var Ee=$e;const Ie=(0,a._)("h1",null,"3. Feature Configuration",-1),Le=(0,a._)("p",{class:"text-sm"},"Here you can configure each feature from the dataset which you supplied",-1),Re=(0,a._)("hr",{class:"my-4"},null,-1),Ae={class:"styled-table"},Fe=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Feature"),(0,a._)("th",null,"Measurability"),(0,a._)("th",null,"Is dependant ")])],-1),Pe={key:0},qe=(0,a._)("td",{colspan:"4"},"Loading...",-1),Ze=[qe],ze={key:1},Ye=(0,a._)("td",{colspan:"4"},"No features available in dataset [refetch]...",-1),Ke=[Ye],Ge=["value"],Je=["checked"],We={class:"flex justify-between mt-8"},Ve=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1);function Be(e,n,t,l,i,r){return(0,a.wg)(),(0,a.iD)("div",null,[Ie,Le,Re,(0,a._)("table",Ae,[Fe,(0,a._)("tbody",null,[null==e.config.features.value?((0,a.wg)(),(0,a.iD)("tr",Pe,Ze)):0==e.config.features.value.length?((0,a.wg)(),(0,a.iD)("tr",ze,Ke)):((0,a.wg)(!0),(0,a.iD)(a.HY,{key:2},(0,a.Ko)(e.config.features.value,(e=>((0,a.wg)(),(0,a.iD)("tr",{key:e},[(0,a._)("td",null,(0,s.zw)(e.name),1),(0,a._)("td",null,[(0,a._)("input",{class:"border border-gray-200 px-2 py-1",type:"text",value:e.measurability},null,8,Ge)]),(0,a._)("td",null,[(0,a._)("input",{class:"w-5 h-5 cursor-pointer",type:"checkbox",checked:e.is_dependant},null,8,Je)])])))),128))])]),(0,a._)("div",We,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"method"})}),class:"router-btn"}," ＜ 2. Method "),Ve,(0,a._)("button",{onClick:n[1]||(n[1]=n=>{e.$router.push({name:"clean"})}),disabled:!1,class:"router-btn"}," 4. Clean Data ＞ ")])])}var Qe=(0,a.aZ)({setup:function(){var e=D();return{config:e}}});Qe.render=Be;var Xe=Qe;const en=(0,a._)("h1",null,"4. Data Cleaning",-1),nn=(0,a._)("p",{class:"text-sm"},"Here you can configure each feature from the dataset which you supplied",-1),tn=(0,a._)("hr",{class:"my-4"},null,-1),ln={class:"styled-table"},an=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Feature"),(0,a._)("th")])],-1),sn={key:0},rn=(0,a._)("td",{colspan:"4"},"Loading...",-1),on=[rn],un={key:1},cn=(0,a._)("td",{colspan:"4"},"No features available in dataset [refetch]...",-1),dn=[cn],fn={class:"flex justify-between mt-8"},_n=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),mn=["disabled"];function gn(e,n,t,l,i,r){return(0,a.wg)(),(0,a.iD)("div",null,[en,nn,tn,(0,a._)("table",ln,[an,(0,a._)("tbody",null,[null==e.config.features.value?((0,a.wg)(),(0,a.iD)("tr",sn,on)):0==e.config.features.value.length?((0,a.wg)(),(0,a.iD)("tr",un,dn)):((0,a.wg)(!0),(0,a.iD)(a.HY,{key:2},(0,a.Ko)(e.config.features.value,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t},[(0,a._)("td",null,(0,s.zw)(t.name),1),(0,a._)("td",null,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>e.toast("Scanning feature")),class:"router-btn"}," Scan ")])])))),128))])]),(0,a._)("div",fn,[(0,a._)("button",{onClick:n[1]||(n[1]=n=>{e.$router.push({name:"features"})}),class:"router-btn"}," ＜ 3. Features "),_n,(0,a._)("button",{onClick:n[2]||(n[2]=n=>{e.$router.push({name:"train"})}),disabled:e.page_next_disabled,class:"router-btn"}," 5. Train Model ＞ ",8,mn)])])}var pn=(0,a.aZ)({setup:function(){var e=D(),n=(0,h.pm)();return{config:e,toast:n}}});pn.render=gn;var vn=pn;const hn=(0,a.uE)('<h1>5. Train Model</h1><p class="text-sm">Here you can configure each feature from the dataset which you supplied</p><hr class="my-4"><div class="mt-8"><div class="flex flex-row justify-between items-end"><span class="text-xl font-medium text-blue-900">40% Completed</span><span class="text-sm font-thin text-gray-700">row 96 of 240</span></div><div class="mt-2 rounded h-3 w-full bg-gray-200 overflow-hidden text-xs text-center text-gray-100"><div style="" class="rounded w-1/3 h-full bg-blue-400 border-blue-500 border-b-2"></div></div></div>',4),bn={class:"flex justify-between mt-16 items-start space-x-4"},yn={class:"flex-1"},wn=(0,a._)("div",{class:"flex-1 flex flex-col flex-grow-0"},[(0,a._)("button",{class:"btn btn-gray mb-2"}," Pause "),(0,a._)("button",{class:"btn btn-gray"}," Finish ")],-1),xn=(0,a._)("div",{class:"flex-1 w-0 h-0 invisible"},null,-1);function kn(e,n,t,l,s,i){return(0,a.wg)(),(0,a.iD)("div",null,[hn,(0,a._)("div",bn,[(0,a._)("div",yn,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"clean"})}),class:"router-btn"}," ＜ 4. Data Cleaning ")]),wn,xn])])}var Cn=(0,a.aZ)({setup:function(){var e=D();return null===e.features&&e.features,{config:e}}});Cn.render=kn;var Dn=Cn;const On=(0,a._)("h1",null,"6. Predict",-1),Hn=(0,a._)("p",{class:"text-sm"},"This page allows you to predict dependant values by providing independant values",-1),Nn=(0,a._)("hr",{class:"mt-1"},null,-1),Tn=(0,a._)("div",{class:"flex flex-row space-x-4"},[(0,a._)("table",{class:"w-1/2 styled-table"},[(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Feature"),(0,a._)("th",null,"Value")])]),(0,a._)("tbody",null,[(0,a._)("tr",null,[(0,a._)("th",null,"[Feature-name]"),(0,a._)("td",null,"[Feature-value]")])])])],-1),Mn={class:"flex justify-between mt-8"},Un=(0,a._)("div",{class:"w-0 h-0 invisible"},null,-1),jn=["disabled"];function Sn(e,n,t,l,s,i){return(0,a.wg)(),(0,a.iD)("div",null,[On,Hn,Nn,Tn,(0,a._)("div",Mn,[(0,a._)("button",{onClick:n[0]||(n[0]=n=>{e.$router.push({name:"method"})}),class:"router-btn"}," ＜ 2. Method "),Un,(0,a._)("button",{onClick:n[1]||(n[1]=n=>{e.$router.push({name:"home"})}),disabled:e.page_next_disabled,class:"router-btn"}," 4. Data Cleaning ＞ ",8,jn)])])}var $n=(0,a.aZ)({setup:function(){var e=D();return null===e.features&&e.features,{config:e}}});$n.render=Sn;var En=$n,In=[{name:"home",path:"/",component:E},{name:"load",path:"/load",component:me},{name:"method",path:"/method",component:Ee},{name:"features",path:"/features",component:Xe},{name:"clean",path:"/clean",component:vn},{name:"train",path:"/train",component:Dn},{name:"predict",path:"/predict",component:En}],Ln=N.p7({history:N.r5(),routes:In}),Rn=Ln;(0,l.ri)(H).use(Rn).use(h.ZP).mount("#app")}},n={};function t(l){var a=n[l];if(void 0!==a)return a.exports;var s=n[l]={exports:{}};return e[l].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(n,l,a,s){if(!l){var i=1/0;for(c=0;c<e.length;c++){l=e[c][0],a=e[c][1],s=e[c][2];for(var r=!0,o=0;o<l.length;o++)(!1&s||i>=s)&&Object.keys(t.O).every((function(e){return t.O[e](l[o])}))?l.splice(o--,1):(r=!1,s<i&&(i=s));if(r){e.splice(c--,1);var u=a();void 0!==u&&(n=u)}}return n}s=s||0;for(var c=e.length;c>0&&e[c-1][2]>s;c--)e[c]=e[c-1];e[c]=[l,a,s]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={143:0};t.O.j=function(n){return 0===e[n]};var n=function(n,l){var a,s,i=l[0],r=l[1],o=l[2],u=0;if(i.some((function(n){return 0!==e[n]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(o)var c=o(t)}for(n&&n(l);u<i.length;u++)s=i[u],t.o(e,s)&&e[s]&&e[s][0](),e[i[u]]=0;return t.O(c)},l=self["webpackChunkbd02_ai_casus"]=self["webpackChunkbd02_ai_casus"]||[];l.forEach(n.bind(null,0)),l.push=n.bind(null,l.push.bind(l))}();var l=t.O(void 0,[998],(function(){return t(856)}));l=t.O(l)})();
//# sourceMappingURL=app.a930716e.js.map