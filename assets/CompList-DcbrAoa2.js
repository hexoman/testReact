var I=Object.defineProperty;var x=(c,s,t)=>s in c?I(c,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):c[s]=t;var m=(c,s,t)=>x(c,typeof s!="symbol"?s+"":s,t);import{r as v,j as a}from"./index-DV3HGm6M.js";import{o as y}from"./mobxreact.esm-YJlkT53R.js";import{i as C,b as h,e as f}from"./ViewDesignerLoader-9INExxN_.js";import{I as j}from"./NumberInput-Bl50LkCo.js";import{k as g}from"./DesignerPage-B61Axt1s.js";import{D}from"./DragAddProvider-CGIp7MQw.js";import{I as b}from"./index-BZlaEHGr.js";import"./MainRouter-aS_Iaf8w.js";import"./collapse-B_kZv9nw.js";import"./asyncToGenerator-CtTh0QTb.js";import"./render-Cw1HGrJm.js";import"./useZIndex-BTBR7p11.js";import"./button-Cvk8VxbG.js";import"./ContextIsolator-oL5Pl0CQ.js";import"./index-by9GQrEU.js";import"./FetchUtil-XmzwyhQj.js";import"./Overflow-DDCCnAKR.js";import"./index-l65SKHf7.js";import"./InfoCircleFilled-Co9mi4T9.js";import"./Data-BV9iJkIq.js";import"./Input-esSgYffC.js";import"./Button-Bz3NjrPG.js";import"./GlobalMessage-BFtSe0qv.js";import"./FontGlobal-DilEOr2K.js";import"./System-S1Hfsdah.js";import"./ThemeEditor-DnzQ9lOi.js";import"./Info-BGt8Y646.js";class N extends v.Component{constructor(t){super(t);m(this,"dragAddProvider",null);m(this,"dragStart",t=>{var e;if(t.target.classList.contains("droppable-element")){const o=t.target;(e=t.dataTransfer)==null||e.setData("type",o.getAttribute("data-type"))}});m(this,"dragover",t=>{t.preventDefault()});m(this,"drop",t=>{var d;t.preventDefault();const e=(d=t.dataTransfer)==null?void 0:d.getData("type");if(!e)return;const{scale:o,dsContentRef:n}=f,i=n==null?void 0:n.getBoundingClientRect(),r=(t.clientX-((i==null?void 0:i.x)||0))/o,l=(t.clientY-((i==null?void 0:i.y)||0))/o;this.addItem(e,[r,l])});m(this,"addItem",(t,e=[0,0])=>{let{setAddRecordCompId:o}=f;const{definitionMap:n}=h,{compName:i,width:r=320,height:l=200}=n[t].getBaseInfo(),d={name:i,type:t,x:Math.round(e[0]),y:Math.round(e[1]),id:j.generateId(),lock:!1,hide:!1,width:r,height:l};o(d.id),C.doAdd(d)});m(this,"getChartDom",()=>{const t=[];let{compInfoArr:e,search:o,categories:n,subCategories:i}=g;n!=="all"&&(e=e.filter(r=>r.categorize===n)),i!=="all"&&(e=e.filter(r=>r.subCategorize===i)),o!==""&&(e=e.filter(r=>r.compName.indexOf(o)>=0));for(let r=0;r<e.length;r++){const l=e[r],{compName:d,compKey:p}=l,u=h.definitionMap[p].getChartImg();t.push(a.jsx("div",{className:"list-item droppable-element",draggable:!0,onDoubleClick:()=>this.addItem(p),"data-type":p,children:a.jsxs("div",{style:{pointerEvents:"none"},children:[a.jsx("div",{className:"item-header",ref:"drag-target",children:a.jsx("div",{className:"item-name",children:d})}),a.jsx("div",{className:"item-content",children:a.jsx("img",{src:u,alt:d})})]})},r+""))}return t});m(this,"searchChart",t=>{const{setSearch:e}=g;e&&e(t.target.value)});const{doInit:e}=g;e&&e()}componentDidMount(){let t=0;const e=setInterval(()=>{const o=document.getElementById("component-drag-container"),n=document.getElementById("designer-ds-content");o&&n&&(clearInterval(e),this.dragAddProvider=new D(document.getElementById("component-drag-container"),document.getElementById("designer-ds-content"),this.dragStart,this.dragover,this.drop)),++t>100&&(clearInterval(e),console.warn("组件列表与画布拖拽关联失败，无法通过拖拽添加组件。"))},100)}componentWillUnmount(){var t;(t=this.dragAddProvider)==null||t.destroy()}render(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"list-search",children:a.jsx(b,{placeholder:"搜索组件",onChange:this.searchChart,style:{height:28}})}),a.jsx("div",{className:"list-items",id:"component-drag-container",children:this.getChartDom()})]})}}const et=y(N);export{et as default};