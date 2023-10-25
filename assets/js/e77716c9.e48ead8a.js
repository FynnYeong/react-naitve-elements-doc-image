"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[92066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27581:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],l={id:"migration_v3_to_v4",title:"Migration from v3 to v4"},s=void 0,p={unversionedId:"migration_v3_to_v4",id:"version-4.0.0-beta.0/migration_v3_to_v4",title:"Migration from v3 to v4",description:"Table of Contents",source:"@site/versioned_docs/version-4.0.0-beta.0/migration-v4.md",sourceDirName:".",slug:"/migration_v3_to_v4",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/migration_v3_to_v4",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-beta.0/migration-v4.md",tags:[],version:"4.0.0-beta.0",frontMatter:{id:"migration_v3_to_v4",title:"Migration from v3 to v4"},sidebar:"version-4.0.0-beta.0/docs",previous:{title:"Label Guide",permalink:"/react-naitve-elements-doc-image/docs/4.0.0-beta.0/labels"}},c={},u=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"What&#39;s New?",id:"whats-new",level:2},{value:"Migration to Functional",id:"migration-to-functional",level:3},{value:"Why?",id:"why",level:4},{value:"How would it affect?",id:"how-would-it-affect",level:4},{value:"Migration to Pressable",id:"migration-to-pressable",level:3},{value:"The Reason",id:"the-reason",level:4},{value:"Tests migrated to React Native Testing library",id:"tests-migrated-to-react-native-testing-library",level:3},{value:"Handling breaking changes",id:"handling-breaking-changes",level:2},{value:"Tooltip",id:"tooltip",level:3},{value:"Text",id:"text",level:3}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"table-of-contents"},"Table of Contents"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#whats-new"},"What's New?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#migration-to-functional"},"Migration to Functional"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#why"},"Why?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#how-would-it-affect"},"How would it affect?")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#migration-to-pressable"},"Migration to Pressable"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#the-reason"},"The Reason")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tests-migrated-to-react-native-testing-library"},"Tests migrated to React Native Testing library")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#handling-breaking-changes"},"Handling breaking changes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#tooltip"},"Tooltip")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#text"},"Text"))))),(0,o.kt)("h2",{id:"whats-new"},"What's New?"),(0,o.kt)("p",null,"React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being ",(0,o.kt)("a",{parentName:"p",href:"#handling-breaking-changes"},"given below"),"."),(0,o.kt)("h3",{id:"migration-to-functional"},"Migration to Functional"),(0,o.kt)("p",null,"These components are converted to Functional Components,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Button"),(0,o.kt)("li",{parentName:"ul"},"Slider"),(0,o.kt)("li",{parentName:"ul"},"Tooltip"),(0,o.kt)("li",{parentName:"ul"},"Image")),(0,o.kt)("h4",{id:"why"},"Why?"),(0,o.kt)("h4",{id:"how-would-it-affect"},"How would it affect?"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"ref")," may not work as of now, but would be added in future releases.")),(0,o.kt)("h3",{id:"migration-to-pressable"},"Migration to Pressable"),(0,o.kt)("h4",{id:"the-reason"},"The Reason"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Earlier React Native Elements was using ",(0,o.kt)("inlineCode",{parentName:"p"},"Touchable")," as touch handler, but since ",(0,o.kt)("inlineCode",{parentName:"p"},"v4.0")," will use ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable"))),(0,o.kt)("h3",{id:"tests-migrated-to-react-native-testing-library"},"Tests migrated to React Native Testing library"),(0,o.kt)("h2",{id:"handling-breaking-changes"},"Handling breaking changes"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable")," is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.")),(0,o.kt)("p",null,"This change would let you use ",(0,o.kt)("inlineCode",{parentName:"p"},"onPressIn")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"onPressOut")," APIs in RNE components, For example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <CheckBox\n    title="I agree"\n+   onPressIn={()=>{}}\n+   onPressOut={()=>{}}\n    onPress={() => {}}\n  />\n')),(0,o.kt)("p",null,"and the rest of props for ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," can be added via ",(0,o.kt)("inlineCode",{parentName:"p"},"pressableProps")," API"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"  <ButtonGroup\n+   pressableProps={{android_ripple:{radius:2}}}\n  />\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"Button")," Component still uses Touchable, As ",(0,o.kt)("inlineCode",{parentName:"p"},"Pressable")," works differently compared to ",(0,o.kt)("inlineCode",{parentName:"p"},"TouchableNativeFeedback"),", for instance, the Button will apply the primary color as the button background color, however, the pressable ripple effect will then render behind the button, which results in no ripple.")),(0,o.kt)("h3",{id:"tooltip"},"Tooltip"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Tooltip")," is one of core component of RNE, Since v4 this component would be stateless and would use ",(0,o.kt)("inlineCode",{parentName:"p"},"visible"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"onOpen")," & ",(0,o.kt)("inlineCode",{parentName:"p"},"onClose")," Props for its working"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <Tooltip\n+   visible={open}\n+   onOpen={() => {\n+      setOpen(true);\n+   }}\n+   onClose={() => {\n+      setOpen(false);\n+   }}\n    popover="Hey All"\n  />\n')),(0,o.kt)("p",null,"You can still use Tooltip as stateful component by doing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const ControlledTooltip: React.FC<TooltipProps> = (props) => {\n  const [open, setOpen] = React.useState(false);\n  return (\n    <Tooltip\n      visible={open}\n      onOpen={() => {\n        setOpen(true);\n      }}\n      onClose={() => {\n        setOpen(false);\n      }}\n      {...props}\n    />\n  );\n};\n")),(0,o.kt)("h3",{id:"text"},"Text"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"variant")," can be => h1 h2 h3 h4 caption props"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},'  <Text\n-  h1\n-  h1style={{}}\n+  variant="h1"\n   style={{}}\n  />\n')))}d.isMDXComponent=!0}}]);