"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[62689],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(67294),a=n(86010);const o="tabItem_Ymn6";function i(e){var t=e.children,n=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(87462),a=n(67294),o=n(86010),i=n(12466),l=n(16550),c=n(91980),s=n(67392),u=n(50012);function p(e){return function(e){return a.Children.map(e,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function m(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function d(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,o=(0,l.k6)(),i=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,c._X)(i),(0,a.useCallback)((function(e){if(i){var t=new URLSearchParams(o.location.search);t.set(i,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[i,o])]}function h(e){var t,n,r,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,s=e.groupId,p=m(e),h=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:p})})),v=h[0],g=h[1],y=f({queryString:c,groupId:s}),A=y[0],C=y[1],b=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,u.Nk)(t),r=n[0],o=n[1],[r,(0,a.useCallback)((function(e){t&&o.set(e)}),[t,o])]),k=b[0],D=b[1],w=function(){var e=null!=A?A:k;return d({value:e,tabValues:p})?e:null}();return(0,a.useEffect)((function(){w&&g(w)}),[w]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),C(e),D(e)}),[C,D,p]),tabValues:p}}var v=n(72389);const g="tabList__CuJ",y="tabItem_LNqP";function A(e){var t=e.className,n=e.block,l=e.selectedValue,c=e.selectValue,s=e.tabValues,u=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var t=e.currentTarget,n=u.indexOf(t),r=s[n].value;r!==l&&(p(t),c(r))},d=function(e){var t,n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=u.indexOf(e.currentTarget)+1;n=null!=(r=u[a])?r:u[0];break;case"ArrowLeft":var o,i=u.indexOf(e.currentTarget)-1;n=null!=(o=u[i])?o:u[u.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:function(e){return u.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",y,null==i?void 0:i.className,{"tabs__item--active":l===t})}),null!=n?n:t)})))}function C(e){var t=e.lazy,n=e.children,r=e.selectedValue;if(t){var o=n.find((function(e){return e.props.value===r}));return o?(0,a.cloneElement)(o,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},n.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function b(e){var t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g)},a.createElement(A,(0,r.Z)({},e,t)),a.createElement(C,(0,r.Z)({},e,t)))}function k(e){var t=(0,v.Z)();return a.createElement(b,(0,r.Z)({key:String(t)},e))}},37047:(e,t,n)=>{n.d(t,{w:()=>c});var r=n(67294),a=n(35742),o=n(14330),i=n(98576),l=n(61720),c=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+l.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+o.Z+") format('truetype');\n          }\n        "))}},22365:(e,t,n)=>{n.d(t,{Z:()=>D});var r=n(63366),a=n(87462),o=n(67294),i=n(10407),l=n(86010),c=(n(95999),n(52263)),s=n(91262),u=n(66412);const p="playgroundContainer_TGbA",m="playgroundEditor_PvJ1",d="playgroundPreview_bb8I",f="toggleContainer_ZZiH",h="toggleIcon_OnrQ",v="showCode_O0Od";var g=n(72389),y=n(5434),A=["children","transformCode"];function C(){return o.createElement("div",null,"Loading...")}function b(e){var t=(0,g.Z)(),n=(0,o.useContext)(i.L2),r=n.code,l=n.language,c=n.theme,s=n.disabled,u=n.onChange;return o.createElement(i.uz,(0,a.Z)({key:String(t),code:r,language:l,theme:c,disabled:s,onChange:u},e,{className:m}))}function k(e){var t=e.showCode,n=e.preImports,r=void 0===n?"":n,a=(e.wrapper,o.useState(t)),c=a[0],u=a[1],p=function(){u((function(e){return!e}))};return o.createElement(o.Fragment,null,o.createElement("div",{className:d},o.createElement(s.Z,{fallback:o.createElement(C,null)},(function(){return o.createElement(o.Fragment,null,o.createElement(i.i5,null),o.createElement(i.IF,null),o.createElement("div",{className:f},o.createElement("div",{className:(0,l.Z)(h),onClick:p},o.createElement(y.xoN,null),o.createElement("span",{className:v},c?"Hide":"Show"," Code"))))}))),c&&o.createElement(b,{preImports:r,showCode:c}))}function D(e){var t=e.children,n=(e.transformCode,(0,r.Z)(e,A)),l=((0,c.Z)().siteConfig.themeConfig.liveCodeBlock.playgroundPosition,(0,u.p)());return o.createElement("div",{className:p},o.createElement(i.nu,(0,a.Z)({code:t.replace(/\n$/,""),theme:l},n),o.createElement(k,{showCode:n.showCode})))}},56922:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(67294),a=n(32408),o=n(13925),i=n(53211),l=n(83279);const c=Object.assign({React:r,LinearGradient:l.Z},a,o,i,r)},57036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>A,frontMatter:()=>d,metadata:()=>h,toc:()=>g});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(37047),l=(n(74866),n(85162),n(96711)),c=n(47516),s=["components"],u={toc:[{value:"LinearGradient Usage",id:"lineargradient-usage",level:3}]};function p(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"lineargradient-usage"},"LinearGradient Usage"),(0,o.kt)("p",null,"Using LinearGradient in React Native Elements is supported through the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient"},"react-native-linear-gradient"),"\npackage. If you're using expo or create-react-native-app then you can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"linearGradientProps")," prop right out the box with no additional setup."),(0,o.kt)("p",null,"For react-native-cli users, make sure to follow the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project"},"installation instructions"),"\nand use it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { Chip } from '@rneui/themed';\nimport LinearGradient from 'react-native-linear-gradient';\n\n...\n\n<Chip\n  ViewComponent={LinearGradient} // Don't forget this!\n  linearGradientProps={{\n    colors: ['red', 'pink'],\n    start: { x: 0, y: 0.5 },\n    end: { x: 1, y: 0.5 },\n  }}\n/>\n")),(0,o.kt)("div",{className:"snack-player","data-snack-name":"RNE Chip","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20View%2C%20ScrollView%2C%20StyleSheet%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Chip%2C%20withTheme%2C%20lightColors%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20ChipsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Chips%3A%20React.FunctionComponent%3CChipsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CView%20style%3D%7Bstyles.contentView%7D%3E%0A%20%20%20%20%20%20%20%20%3CView%20style%3D%7B%7B%20alignItems%3A%20'center'%20%7D%7D%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%20title%3D%22Solid%20Chip%22%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Disabled%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Outlined%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Outlined%20%26%20Disabled%22%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20disabled%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Left%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'bluetooth'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Right%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'close'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20'white'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Pressable%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'bluetooth'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20lightColors.primary2%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Icon%20chip%20was%20pressed!')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3CChip%0A%20%20%20%20%20%20%20%20%20%20%20%20title%3D%22Pressable%20Icon%20Chip%22%0A%20%20%20%20%20%20%20%20%20%20%20%20icon%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20name%3A%20'close'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'font-awesome'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20size%3A%2020%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20color%3A%20lightColors.primary2%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20onPress%3D%7B()%20%3D%3E%20console.log('Icon%20chip%20was%20pressed!')%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20iconRight%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3D%22outline%22%0A%20%20%20%20%20%20%20%20%20%20%20%20containerStyle%3D%7B%7B%20marginVertical%3A%2015%20%7D%7D%0A%20%20%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0AcontentView%3A%20%7B%0A%20%20flex%3A%201%2C%0A%20%20marginTop%3A%2020%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20withTheme(Chips%2C%20'')%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var m=["components"],d={id:"chip",title:"Chip"},f=void 0,h={unversionedId:"components/chip",id:"version-4.0.0-rc.8/components/chip",title:"Chip",description:"Chips are compact elements that represent an input, attribute, or action.",source:"@site/versioned_docs/version-4.0.0-rc.8/components/Chip.mdx",sourceDirName:"components",slug:"/components/chip",permalink:"/react-naitve-elements-doc-image/docs/components/chip",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.8/components/Chip.mdx",tags:[],version:"4.0.0-rc.8",frontMatter:{id:"chip",title:"Chip"},sidebar:"docs",previous:{title:"CheckBox",permalink:"/react-naitve-elements-doc-image/docs/components/checkbox"},next:{title:"Dialog",permalink:"/react-naitve-elements-doc-image/docs/components/dialog"}},v={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],y={toc:g};function A(e){var t=e.components,n=(0,a.Z)(e,m);return(0,o.kt)("wrapper",(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.w,{mdxType:"IconsStyle"}),(0,o.kt)("p",null,"Chips are compact elements that represent an input, attribute, or action.\nThey may display text, icons, or both."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("div",{class:"row inline-flex-center"},(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Import")),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"import { Chip } from '@rneui/themed';")),(0,o.kt)("div",{class:"col col--3"},(0,o.kt)("h4",null,"Theme Key"," ",(0,o.kt)("a",{href:"../customizing#using-themeprovider"},(0,o.kt)(c.Fs0,{mdxType:"BiInfoCircle"})))),(0,o.kt)("div",{class:"col col--9"},(0,o.kt)(l.Z,{mdxType:"CodeBlock"},"Chip"))),(0,o.kt)(p,{mdxType:"Usage"}),(0,o.kt)("h2",{id:"props"},"Props"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Includes all ",(0,o.kt)("a",{parentName:"p",href:"button#props"},"Button")," props.")),(0,o.kt)("div",{class:"table-responsive"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"solid")," ","|"," ",(0,o.kt)("inlineCode",{parentName:"td"},"outline")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Type of button."))))))}A.isMDXComponent=!0}}]);