"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[44720],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),p=a,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(87462),a=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),s=n(67392),c=n(50012);function m(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:m(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,l=(0,o.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,u._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(l.location.search);t.set(i,e),l.replace(Object.assign({},l.location,{search:t.toString()}))}}),[i,l])]}function g(e){var t,n,r,l,i=e.defaultValue,o=e.queryString,u=void 0!==o&&o,s=e.groupId,m=d(e),g=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),b=g[0],k=g[1],v=f({queryString:u,groupId:s}),h=v[0],N=v[1],y=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],l=n[1],[r,(0,a.useCallback)((function(e){t&&l.set(e)}),[t,l])]),w=y[0],C=y[1],E=function(){var e=null!=h?h:w;return p({value:e,tabValues:m})?e:null}();return(0,a.useEffect)((function(){E&&k(E)}),[E]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);k(e),N(e),C(e)}),[N,C,m]),tabValues:m}}var b=n(72389);const k="tabList__CuJ",v="tabItem_LNqP";function h(e){var t=e.className,n=e.block,o=e.selectedValue,u=e.selectValue,s=e.tabValues,c=[],m=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(m(t),u(r))},p=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var l,i=c.indexOf(e.currentTarget)-1;n=null!=(l=c[i])?l:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:p,onClick:d},i,{className:(0,l.Z)("tabs__item",v,null==i?void 0:i.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function N(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var l=n.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function y(e){var t=g(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",k)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(N,(0,r.Z)({},e,t)))}function w(e){var t=(0,b.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>u});var r=n(67294),a=n(35742),l=n(14330),i=n(98576),o=n(61720),u=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>C});var r=n(63366),a=n(87462),l=n(67294),i=n(10407),o=n(86010),u=(n(95999),n(52263)),s=n(91262),c=n(66412);const m="playgroundContainer_TGbA",d="playgroundEditor_PvJ1",p="playgroundPreview_bb8I",f="toggleContainer_ZZiH",g="toggleIcon_OnrQ",b="showCode_O0Od";var k=n(72389),v=n(5434),h=["children","transformCode"];function N(){return l.createElement("div",null,"Loading...")}function y(e){var t=(0,k.Z)(),n=(0,l.useContext)(i.L2),r=n.code,o=n.language,u=n.theme,s=n.disabled,c=n.onChange;return l.createElement(i.uz,(0,a.Z)({key:String(t),code:r,language:o,theme:u,disabled:s,onChange:c},e,{className:d}))}function w(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,l.useState(t)),u=a[0],c=a[1],m=function(){c((function(e){return!e}))};return l.createElement(l.Fragment,null,l.createElement("div",{className:p},l.createElement(s.Z,{fallback:l.createElement(N,null)},(function(){return l.createElement(l.Fragment,null,l.createElement(i.i5,null),l.createElement(i.IF,null),l.createElement("div",{className:f},l.createElement("div",{className:(0,o.Z)(g),onClick:m},l.createElement(v.xoN,null),l.createElement("span",{className:b},u?"Hide":"Show"," Code"))))}))),u&&l.createElement(y,{preImports:r,showCode:u}))}function C(e){var t=e.children,n=(e.transformCode,(0,r.Z)(e,h)),o=((0,u.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,c.p)());return l.createElement("div",{className:m},l.createElement(i.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:o},n),l.createElement(w,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(32408),l=n(13925),i=n(53211),o=n(83279);const u=Object.assign({React:r,LinearGradient:o.Z},a,l,i,r)},26549:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>h,frontMatter:()=>p,metadata:()=>g,toc:()=>k});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(37047),o=(n(74866),n(85162),n(96711)),u=n(47516),s=["components"],c={toc:[]};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("img",{src:"/img/swipeable.gif",width:"500"}),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"<ListItem.Swipeable\n  leftContent={(reset) => (\n    <Button\n      title=\"Info\"\n      onPress={() => reset()}\n      icon={{ name: 'info', color: 'white' }}\n      buttonStyle={{ minHeight: '100%' }}\n    />\n  )}\n  rightContent={(reset) => (\n    <Button\n      title=\"Delete\"\n      onPress={() => reset()}\n      icon={{ name: 'delete', color: 'white' }}\n      buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}\n    />\n  )}\n>\n  <Icon name=\"My Icon\" />\n  <ListItem.Content>\n    <ListItem.Title>Hello Swiper</ListItem.Title>\n  </ListItem.Content>\n  <ListItem.Chevron />\n</ListItem.Swipeable>\n")))}m.isMDXComponent=!0;var d=["components"],p={id:"listitem_swipeable",title:"ListItem.Swipeable"},f=void 0,g={unversionedId:"components/listitem_swipeable",id:"components/listitem_swipeable",title:"ListItem.Swipeable",description:"We offer a special kind of ListItem which is swipeable from both ends and allows users select an event.",source:"@site/docs/components/ListItem.Swipeable.mdx",sourceDirName:"components",slug:"/components/listitem_swipeable",permalink:"/react-naitve-elements-doc-image/docs/next/components/listitem_swipeable",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/docs/components/ListItem.Swipeable.mdx",tags:[],version:"current",frontMatter:{id:"listitem_swipeable",title:"ListItem.Swipeable"},sidebar:"docs",previous:{title:"ListItem.Subtitle",permalink:"/react-naitve-elements-doc-image/docs/next/components/listitem_subtitle"},next:{title:"ListItem.Title",permalink:"/react-naitve-elements-doc-image/docs/next/components/listitem_title"}},b={},k=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],v={toc:k};function h(e){var t=e.components,n=(0,a.Z)(e,d);return(0,l.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"We offer a special kind of ListItem which is swipeable from both ends and allows users select an event."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("div",{class:"row inline-flex-center"},(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Import")),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"import { ListItem } from '@rneui/themed';")),(0,l.kt)("div",{class:"col col--3"},(0,l.kt)("h4",null,"Theme Key"," ",(0,l.kt)("a",{href:"../customizing#using-themeprovider"},(0,l.kt)(u.Fs0,{mdxType:"BiInfoCircle"})))),(0,l.kt)("div",{class:"col col--9"},(0,l.kt)(o.Z,{mdxType:"CodeBlock"},"ListItemSwipeable"))),(0,l.kt)(m,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"Includes all ",(0,l.kt)("a",{parentName:"p",href:"listitem#props"},"ListItem")," props.")),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"animation")),(0,l.kt)("td",{parentName:"tr",align:null},"Animated.TimingAnimationConfig"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Object with duration 350ms and type timing")),(0,l.kt)("td",{parentName:"tr",align:null},"Decide whether to show animation.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftContent")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode or resetCallback => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Left Content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of left container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leftWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ScreenWidth / 3")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of swipe left container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minSlideWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ScreenWidth / 3")),(0,l.kt)("td",{parentName:"tr",align:null},"minimum horizontal distance to open content")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeBegin")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"(direction: left")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"right) => unknown")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for swipe in either direction")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeEnd")),(0,l.kt)("td",{parentName:"tr",align:null},"() => unknown"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Handler for swipe end.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightContent")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode or resetCallback => ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Right Content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Style of right container.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"rightWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ScreenWidth / 3")),(0,l.kt)("td",{parentName:"tr",align:null},"Width of swipe right container."))))))}h.isMDXComponent=!0}}]);