"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1118],{4252:(e,n,t)=>{t(6540),t(5195);t(4848)},5195:(e,n,t)=>{t.d(n,{A:()=>h});var r=t(6540),a=t(6342);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const r=t.slice(2,e.level);e.parentIndex=Math.max(...r),t[e.level]=n}));const r=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):r.push(a)})),r}function o(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:r}=e;return n.flatMap((e=>{const n=o({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[{...e,children:n}]:n}))}function s(e){const n=e.getBoundingClientRect();return n.top===n.bottom?s(e.parentNode):n}function u(e,n){let{anchorTopOffset:t}=n;const r=e.find((e=>s(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:e[e.indexOf(r)-1]??null}return e[e.length-1]??null}function i(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,r.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function c(e){const n=(0,r.useRef)(void 0),t=i();(0,r.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:r,linkActiveClassName:a,minHeadingLevel:l,maxHeadingLevel:o}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),s=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const r=[];for(let a=n;a<=t;a+=1)r.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:l,maxHeadingLevel:o}),i=u(s,{anchorTopOffset:t.current}),c=e.find((e=>i&&i.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===c)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,t])}var d=t(8774),m=t(4848);function f(e){let{toc:n,className:t,linkClassName:r,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(d.A,{to:`#${e.id}`,className:r??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:r})]},e.id)))}):null}const v=r.memo(f);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:u,minHeadingLevel:i,maxHeadingLevel:d,...f}=e;const h=(0,a.p)(),b=i??h.tableOfContents.minHeadingLevel,p=d??h.tableOfContents.maxHeadingLevel,g=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,r.useMemo)((()=>o({toc:l(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:b,maxHeadingLevel:p});return c((0,r.useMemo)((()=>{if(s&&u)return{linkClassName:s,linkActiveClassName:u,minHeadingLevel:b,maxHeadingLevel:p}}),[s,u,b,p])),(0,m.jsx)(v,{toc:g,className:t,linkClassName:s,...f})}},9365:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var r=t(4164);const a={tabItem:"tabItem_Ymn6"};var l=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>C});var r=t(6540),a=t(4164),l=t(3104),o=t(6347),s=t(205),u=t(7485),i=t(1682),c=t(9466);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,i.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[i,d]=v({queryString:t,groupId:a}),[h,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),p=(()=>{const e=i??h;return f({value:e,tabValues:l})?e:null})();(0,s.A)((()=>{p&&u(p)}),[p]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,l]),tabValues:l}}var b=t(2303);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,l.a_)(),c=e=>{const n=e.currentTarget,t=u.indexOf(n),a=s[t].value;a!==r&&(i(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:d,onClick:c,...l,className:(0,a.A)("tabs__item",p.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function L(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",p.tabList),children:[(0,g.jsx)(x,{...e,...n}),(0,g.jsx)(L,{...e,...n})]})}function C(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var r=t(6540);const a={},l=r.createContext(a);function o(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);