"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[47765],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),s=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(u,".").concat(c)]||m[c]||p[c]||l;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function i(t){var e=t.children,n=t.hidden,i=t.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},74866:(t,e,n)=>{n.d(e,{Z:()=>A});var a=n(87462),r=n(67294),l=n(86010),i=n(12466),o=n(16550),u=n(91980),s=n(67392),d=n(50012);function p(t){return function(t){return r.Children.map(t,(function(t){if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')}))}(t).map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes,default:e.default}}))}function m(t){var e=t.values,n=t.children;return(0,r.useMemo)((function(){var t=null!=e?e:p(n);return function(t){var e=(0,s.l)(t,(function(t,e){return t.value===e.value}));if(e.length>0)throw new Error('Docusaurus error: Duplicate values "'+e.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(t),t}),[e,n])}function c(t){var e=t.value;return t.tabValues.some((function(t){return t.value===e}))}function g(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId,l=(0,o.k6)(),i=function(t){var e=t.queryString,n=void 0!==e&&e,a=t.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:a});return[(0,u._X)(i),(0,r.useCallback)((function(t){if(i){var e=new URLSearchParams(l.location.search);e.set(i,t),l.replace(Object.assign({},l.location,{search:e.toString()}))}}),[i,l])]}function f(t){var e,n,a,l,i=t.defaultValue,o=t.queryString,u=void 0!==o&&o,s=t.groupId,p=m(t),f=(0,r.useState)((function(){return function(t){var e,n=t.defaultValue,a=t.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!c({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var r=null!=(e=a.find((function(t){return t.default})))?e:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:p})})),k=f[0],b=f[1],N=g({queryString:u,groupId:s}),h=N[0],v=N[1],y=(e=function(t){return t?"docusaurus.tab."+t:null}({groupId:s}.groupId),n=(0,d.Nk)(e),a=n[0],l=n[1],[a,(0,r.useCallback)((function(t){e&&l.set(t)}),[e,l])]),A=y[0],D=y[1],C=function(){var t=null!=h?h:A;return c({value:t,tabValues:p})?t:null}();return(0,r.useEffect)((function(){C&&b(C)}),[C]),{selectedValue:k,selectValue:(0,r.useCallback)((function(t){if(!c({value:t,tabValues:p}))throw new Error("Can't select invalid tab value="+t);b(t),v(t),D(t)}),[v,D,p]),tabValues:p}}var k=n(72389);const b="tabList__CuJ",N="tabItem_LNqP";function h(t){var e=t.className,n=t.block,o=t.selectedValue,u=t.selectValue,s=t.tabValues,d=[],p=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(t){var e=t.currentTarget,n=d.indexOf(e),a=s[n].value;a!==o&&(p(e),u(a))},c=function(t){var e,n=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":var a,r=d.indexOf(t.currentTarget)+1;n=null!=(a=d[r])?a:d[0];break;case"ArrowLeft":var l,i=d.indexOf(t.currentTarget)-1;n=null!=(l=d[i])?l:d[d.length-1]}null==(e=n)||e.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},e)},s.map((function(t){var e=t.value,n=t.label,i=t.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===e?0:-1,"aria-selected":o===e,key:e,ref:function(t){return d.push(t)},onKeyDown:c,onClick:m},i,{className:(0,l.Z)("tabs__item",N,null==i?void 0:i.className,{"tabs__item--active":o===e})}),null!=n?n:e)})))}function v(t){var e=t.lazy,n=t.children,a=t.selectedValue;if(e){var l=n.find((function(t){return t.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==a})})))}function y(t){var e=f(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",b)},r.createElement(h,(0,a.Z)({},t,e)),r.createElement(v,(0,a.Z)({},t,e)))}function A(t){var e=(0,k.Z)();return r.createElement(y,(0,a.Z)({key:String(e)},t))}},66658:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>k,frontMatter:()=>d,metadata:()=>m,toc:()=>g});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=(n(74866),n(85162),n(32408),["components"]),o={toc:[{value:"Read-only mode",id:"read-only-mode",level:3},{value:"Fractions",id:"fractions",level:3}]};function u(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"read-only-mode"},"Read-only mode"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const { rating } = this.props;\n\n<Rating imageSize={20} readonly startingValue={rating} style={styles.rating} />;\n")),(0,l.kt)("h3",{id:"fractions"},"Fractions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<Rating showRating fractions="{1}" startingValue="{3.3}" />\n')),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif",alt:"Fractions demo gif"})),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Rating","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20StyleSheet%2C%20Text%2C%20View%2C%20Platform%2C%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20Rating%2C%20RatingProps%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20RatingsComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Ratings%3A%20React.FunctionComponent%3CRatingsComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Aconst%20ratingCompleted%20%3D%20(rating%3A%20number)%20%3D%3E%20%7B%0A%20%20console.log('Rating%20is%3A%20'%20%2B%20rating)%3B%0A%7D%3B%0A%0Aconst%20ratingProps%20%3D%20%7B%7D%3B%0Areturn%20(%0A%20%20%3CView%20style%3D%7Bstyles.container%7D%3E%0A%20%20%20%20%3CScrollView%20style%3D%7Bstyles.viewContainer%7D%3E%0A%20%20%20%20%20%20%3CView%0A%20%20%20%20%20%20%20%20style%3D%7B%7B%0A%20%20%20%20%20%20%20%20%20%20justifyContent%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20alignItems%3A%20'center'%2C%0A%20%20%20%20%20%20%20%20%20%20marginBottom%3A%2030%2C%0A%20%20%20%20%20%20%20%20%7D%7D%0A%20%20%20%20%20%20%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22star%22%0A%20%20%20%20%20%20%20%20%20%20fractions%3D%7B1%7D%0A%20%20%20%20%20%20%20%20%20%20startingValue%3D%7B3.6%7D%0A%20%20%20%20%20%20%20%20%20%20readonly%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22custom%22%0A%20%20%20%20%20%20%20%20%20%20ratingColor%3D%22%233498db%22%0A%20%20%20%20%20%20%20%20%20%20ratingCount%3D%7B10%7D%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B30%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20style%3D%7B%7B%20paddingVertical%3A%2010%20%7D%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%20%20%3CRating%0A%20%20%20%20%20%20%20%20%20%20type%3D%22heart%22%0A%20%20%20%20%20%20%20%20%20%20ratingCount%3D%7B3%7D%0A%20%20%20%20%20%20%20%20%20%20fractions%3D%7B2%7D%0A%20%20%20%20%20%20%20%20%20%20startingValue%3D%7B1.57%7D%0A%20%20%20%20%20%20%20%20%20%20imageSize%3D%7B40%7D%0A%20%20%20%20%20%20%20%20%20%20onFinishRating%3D%7BratingCompleted%7D%0A%20%20%20%20%20%20%20%20%20%20showRating%0A%20%20%20%20%20%20%20%20%20%20style%3D%7Bstyles.rating%7D%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3C%2FView%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2FView%3E%0A)%3B%0A%7D%3B%0A%0Aconst%20styles%20%3D%20StyleSheet.create(%7B%0Acontainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0AheadingContainer%3A%20%7B%0A%20%20paddingTop%3A%2050%2C%0A%7D%2C%0AtitleText%3A%20%7B%0A%20%20fontSize%3A%2025%2C%0A%20%20fontWeight%3A%20'bold'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20paddingVertical%3A%205%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Menlo-Bold'%20%3A%20''%2C%0A%20%20color%3A%20'%2327ae60'%2C%0A%7D%2C%0AsubtitleText%3A%20%7B%0A%20%20fontSize%3A%2018%2C%0A%20%20fontWeight%3A%20'400'%2C%0A%20%20textAlign%3A%20'center'%2C%0A%20%20fontFamily%3A%20Platform.OS%20%3D%3D%3D%20'ios'%20%3F%20'Trebuchet%20MS'%20%3A%20''%2C%0A%20%20color%3A%20'%2334495e'%2C%0A%7D%2C%0AviewContainer%3A%20%7B%0A%20%20flex%3A%201%2C%0A%7D%2C%0Arating%3A%20%7B%0A%20%20paddingVertical%3A%2010%2C%0A%7D%2C%0A%7D)%3B%0A%0Aexport%20default%20Ratings%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}u.isMDXComponent=!0;var s=["components"],d={id:"rating",title:"Rating"},p=void 0,m={unversionedId:"components/rating",id:"version-4.0.0-rc.2/components/rating",title:"Rating",description:"Ratings are used to collect measurable feedback from users.",source:"@site/versioned_docs/version-4.0.0-rc.2/components/Rating.mdx",sourceDirName:"components",slug:"/components/rating",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-rc.2/components/rating",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.2/components/Rating.mdx",tags:[],version:"4.0.0-rc.2",frontMatter:{id:"rating",title:"Rating"}},c={},g=[{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],f={toc:g};function k(t){var e=t.components,n=(0,r.Z)(t,s);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Ratings are used to collect measurable feedback from users.\nUse Rating over an Input where imagery can increase user interaction.\nThis component is imported from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Monte9/react-native-ratings"},"react-native-ratings"),".\nThere are two tyoes of rating - TapRating and SwipeRating.\nThis documentation is for Swipe Rating version."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(u,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fractions")),(0,l.kt)("td",{parentName:"tr",align:null},"any"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The number of decimal places for the rating value; must be between 0 and 20")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"imageSize")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The size of each rating imageDefault is 50")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jumpValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The number to jump per swipeDefault is 0 (not to jump)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"minValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum value the user can selectDefault is 0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onFinishRating")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback method when the user finishes rating. Gives you the final rating value as a whole number")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onStartRating")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback method when the user starts rating.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onSwipeRating")),(0,l.kt)("td",{parentName:"tr",align:null},"(number: any) => void"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Callback method when the user is swiping.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingBackgroundColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pass in a custom background-fill-color for the rating icon; use this along with type='custom' prop aboveDefault is 'white'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pass in a custom fill-color for the rating icon; use this along with type='custom' prop aboveDefault is '#f1c40f'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingCount")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Number of rating images to displayDefault is 5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingImage")),(0,l.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Pass in a custom image source; use this along with type='custom' prop above")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ratingTextColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Color used for the text labels")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"readonly")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the rating can be modiefied by the userDefault is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showRating")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Displays the Built-in Rating UI to show the rating value in real-timeDefault is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"showReadOnlyText")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the text is read onlyDefault is false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"startingValue")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The initial rating to renderDefault is ratingCount/2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"style")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Exposes style prop to add additonal styling to the container view")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"tintColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Color used for the background")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"type")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Graphic used for represent a ratingDefault is 'star'"))))))}k.isMDXComponent=!0}}]);