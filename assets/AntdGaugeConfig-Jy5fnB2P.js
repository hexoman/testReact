import{j as Y}from"./index-CVqWl29Y.js";import{aK as Z,b1 as _}from"./ViewDesignerLoader-CJcT4NzU.js";import"./mobxreact.esm-KAt7k5l6.js";import"./MainRouter-EKvtFLVg.js";import"./collapse-DRX6yDSX.js";import"./asyncToGenerator-D5I__-Xk.js";import"./render-Cr8goVEQ.js";import"./useZIndex-CHdz0B8B.js";import"./button-B6kTD9RR.js";import"./ContextIsolator-Cq30XSBq.js";import"./NumberInput-COfnTcny.js";import"./index-CYsXB1vj.js";import"./GlobalMessage-Cj-ILfRT.js";import"./InfoCircleFilled-l_xmyWmS.js";import"./FetchUtil-XCnLpe6B.js";import"./Overflow-x-fhRLb1.js";import"./index-BJAefdRj.js";import"./index-G84CViVj.js";import"./Input-ui-619tQ.js";import"./Data-1DPfVwCk.js";import"./Button-DpmiGi3h.js";function xe(H){var l,i,r,n,a,y,p,o,s,u,c,d,k,b,m,h,x,v,L,T,A,W,w,I,g,j,C,P,F,G,M,R,U,z,K,S,E,N;const{controller:t}=H,e=(l=t.getConfig())==null?void 0:l.style,J={key:"style",children:[{type:"accordion",label:"图形",children:[{type:"sub-accordion",label:"基础",children:[{type:"grid",children:[{key:"radius",type:"number-input",label:"外半径",value:e==null?void 0:e.radius,config:{min:0,max:1,step:.01}},{id:"startAngle",key:"startAngle",type:"number-input",label:"起始角度",value:e.startAngle/Math.PI*180},{key:"innerRadius",type:"number-input",label:"内半径",value:e==null?void 0:e.innerRadius,config:{min:0,max:1,step:.01}},{id:"endAngle",key:"endAngle",type:"number-input",label:"结束角度",value:e.endAngle/Math.PI*180},{key:"range",children:[{key:"color",type:"color-mode",label:"颜色",value:(i=e==null?void 0:e.range)==null?void 0:i.color}]}]}]}]},{type:"accordion",label:"指针",key:"indicator",children:[{label:"基础",key:"pointer",type:"sub-accordion",children:[{type:"grid",key:"style",children:[{key:"stroke",type:"color-picker",label:"颜色",value:(n=(r=e==null?void 0:e.indicator)==null?void 0:r.pointer.style)==null?void 0:n.stroke,config:{showText:!0}},{key:"lineWidth",type:"number-input",label:"线宽",value:(y=(a=e==null?void 0:e.indicator)==null?void 0:a.pointer.style)==null?void 0:y.lineWidth,config:{min:0,max:10,step:1}}]}]},{type:"sub-accordion",label:"指针原点",children:[{key:"pin",type:"grid",children:[{key:"style",children:[{key:"stroke",type:"color-picker",label:"描边",value:(o=(p=e==null?void 0:e.indicator)==null?void 0:p.pin.style)==null?void 0:o.stroke,config:{showText:!0}},{key:"fill",type:"color-picker",label:"填充",value:(u=(s=e==null?void 0:e.indicator)==null?void 0:s.pin.style)==null?void 0:u.fill,config:{showText:!0}},{key:"r",type:"number-input",label:"半径",value:(d=(c=e==null?void 0:e.indicator)==null?void 0:c.pin.style)==null?void 0:d.r,config:{min:0}},{key:"lineWidth",type:"number-input",label:"描边宽",value:(b=(k=e==null?void 0:e.indicator)==null?void 0:k.pin.style)==null?void 0:b.lineWidth,config:{min:0}}]}]}]}]},{type:"accordion",label:"刻度",children:[{type:"sub-accordion",label:"主刻度",key:"axis",children:[{key:"tickLine",type:"grid",children:[{key:"style",children:[{key:"stroke",type:"color-picker",label:"颜色",value:(x=(h=(m=e==null?void 0:e.axis)==null?void 0:m.tickLine)==null?void 0:h.style)==null?void 0:x.stroke,config:{showText:!0}},{key:"lineWidth",type:"number-input",label:"宽度",value:(T=(L=(v=e==null?void 0:e.axis)==null?void 0:v.tickLine)==null?void 0:L.style)==null?void 0:T.lineWidth,config:{min:0}}]},{key:"length",type:"number-input",label:"长度",value:(W=(A=e==null?void 0:e.axis)==null?void 0:A.tickLine)==null?void 0:W.length}]}]},{type:"sub-accordion",label:"子刻度",key:"axis",children:[{key:"subTickLine",type:"grid",children:[{key:"style",children:[{key:"stroke",type:"color-picker",label:"颜色",value:(g=(I=(w=e==null?void 0:e.axis)==null?void 0:w.subTickLine)==null?void 0:I.style)==null?void 0:g.stroke,config:{showText:!0}},{key:"lineWidth",type:"number-input",label:"宽度",value:(P=(C=(j=e==null?void 0:e.axis)==null?void 0:j.subTickLine)==null?void 0:C.style)==null?void 0:P.lineWidth,config:{min:0}}]},{key:"length",type:"number-input",label:"长度",value:(G=(F=e==null?void 0:e.axis)==null?void 0:F.subTickLine)==null?void 0:G.length},{key:"count",type:"number-input",label:"数量",value:(R=(M=e==null?void 0:e.axis)==null?void 0:M.subTickLine)==null?void 0:R.count,config:{min:0}}]}]}]},{type:"accordion",label:"文本",key:"statistic",children:[{key:"content",type:"grid",children:[{key:"style",children:[{key:"color",type:"color-picker",label:"颜色",value:(K=(z=(U=e==null?void 0:e.statistic)==null?void 0:U.content)==null?void 0:z.style)==null?void 0:K.color,config:{showText:!0}},{key:"fontSize",type:"number-input",label:"字号",value:parseInt((N=(E=(S=e==null?void 0:e.statistic)==null?void 0:S.content)==null?void 0:E.style)==null?void 0:N.fontSize),config:{min:0}}]}]}]}]},Q=O=>{const{id:q,data:V,dataKeyPath:X}=O;let{dataFragment:B}=O;(q==="startAngle"||q==="endAngle")&&(B=_.createObjectFromArray(X,Number(V)/180*Math.PI)),t.update(B)};return Y.jsx(Z,{schema:J,onFieldChange:Q})}export{xe as default};