var n=Object.defineProperty;var p=(r,e,o)=>e in r?n(r,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[e]=o;var i=(r,e,o)=>p(r,typeof e!="symbol"?e+"":e,o);import{r as h,j as t}from"./index-DV3HGm6M.js";import{T as l,a as d}from"./ThemeEditor-DnzQ9lOi.js";import{r as c,l as x}from"./ViewDesignerLoader-9INExxN_.js";import{B as f}from"./Button-Bz3NjrPG.js";import{M as T}from"./index-l65SKHf7.js";import"./index-by9GQrEU.js";import"./MainRouter-aS_Iaf8w.js";import"./ContextIsolator-oL5Pl0CQ.js";import"./useZIndex-BTBR7p11.js";import"./asyncToGenerator-CtTh0QTb.js";import"./collapse-B_kZv9nw.js";import"./mobxreact.esm-YJlkT53R.js";import"./render-Cw1HGrJm.js";import"./button-Cvk8VxbG.js";import"./NumberInput-Bl50LkCo.js";import"./GlobalMessage-BFtSe0qv.js";import"./InfoCircleFilled-Co9mi4T9.js";import"./FetchUtil-XmzwyhQj.js";import"./Overflow-DDCCnAKR.js";import"./index-BZlaEHGr.js";import"./Input-esSgYffC.js";import"./Data-BV9iJkIq.js";class I extends h.Component{constructor(){super(...arguments);i(this,"state",{editTheme:!1});i(this,"openThemeEditor",()=>this.setState({editTheme:!0}));i(this,"closeEditor",()=>this.setState({editTheme:!1}));i(this,"themeChange",o=>{if(!o)return;const{activeElem:{id:m}}=c,{compController:a}=x,s=a[m+""];s&&s.updateTheme(o)})}render(){return t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"lc-theme-config",style:{padding:10},children:[t.jsx("div",{className:"lc-theme-custom",children:t.jsx(f,{onClick:this.openThemeEditor,children:"+ 自定义主题"})}),t.jsx("br",{}),t.jsx(l,{onSelected:this.themeChange})]}),t.jsx(T,{title:"编辑主题",open:this.state.editTheme,onCancel:this.closeEditor,width:860,footer:null,children:t.jsx(d,{})})]})}}export{I as default};