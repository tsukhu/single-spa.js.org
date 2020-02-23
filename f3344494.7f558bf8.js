(window.webpackJsonp=window.webpackJsonp||[]).push([[143],{272:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var a=n(1),i=n(9),o=(n(0),n(288)),r={id:"building-applications",title:"Building single-spa applications",sidebar_label:"single-spa applications"},l=[{value:"Creating a registered application",id:"creating-a-registered-application",children:[]},{value:"Registered application lifecycle",id:"registered-application-lifecycle",children:[]},{value:"Lifecyle props",id:"lifecyle-props",children:[{value:"Lifecycle helpers",id:"lifecycle-helpers",children:[]},{value:"Load",id:"load",children:[]},{value:"Bootstrap",id:"bootstrap",children:[]},{value:"Mount",id:"mount",children:[]},{value:"Unmount",id:"unmount",children:[]},{value:"Unload",id:"unload",children:[]}]},{value:"Timeouts",id:"timeouts",children:[]},{value:"Transitioning between applications",id:"transitioning-between-applications",children:[]}],p={rightToc:l},c="wrapper";function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)(c,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A single-spa registered application is everything that a normal SPA is, except that it doesn't have an HTML page. In a single-spa world, your SPA contains many registered applications, where each has its own framework. Registered applications have their own client-side routing and their own frameworks/libraries. They render their own html and have full freedom to do whatever they want, whenever they are ",Object(o.b)("em",{parentName:"p"},"mounted"),". The concept of being ",Object(o.b)("em",{parentName:"p"},"mounted")," refers to whether a registered application is putting content on the DOM or not. What determines if a registered application is mounted is its ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#activity-function"}),"activity function"),". Whenever a registered application is ",Object(o.b)("em",{parentName:"p"},"not mounted"),", it should remain completely dormant until mounted."),Object(o.b)("h2",{id:"creating-a-registered-application"},"Creating a registered application"),Object(o.b)("p",null,"To create a registered application, first ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#registering-applications"}),"register the application with single-spa"),". Once registered, the registered application must correctly implement ",Object(o.b)("strong",{parentName:"p"},"all")," of the following lifecycle functions inside of its main entry point."),Object(o.b)("h2",{id:"registered-application-lifecycle"},"Registered application lifecycle"),Object(o.b)("p",null,"During the course of a single-spa page, registered applications are loaded, bootstrapped (initialized), mounted, unmounted, and unloaded. single-spa provides hooks into each phase via ",Object(o.b)("inlineCode",{parentName:"p"},"lifecycles"),"."),Object(o.b)("p",null,"A lifecycle function is a function or array of functions that single-spa will call on a registered application. single-spa calls these by finding specific named exports from the registered application's main file."),Object(o.b)("p",null,"Notes:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Implementing ",Object(o.b)("inlineCode",{parentName:"li"},"bootstrap"),", ",Object(o.b)("inlineCode",{parentName:"li"},"mount"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"unmount")," is required. But implementing ",Object(o.b)("inlineCode",{parentName:"li"},"unload")," is optional."),Object(o.b)("li",{parentName:"ul"},"Each lifecycle function must either return a ",Object(o.b)("inlineCode",{parentName:"li"},"Promise")," or be an ",Object(o.b)("inlineCode",{parentName:"li"},"async function"),"."),Object(o.b)("li",{parentName:"ul"},"If an array of functions is exported (instead of just one function), the functions will be called\none-after-the-other, waiting for the resolution of one function's promise before calling the next."),Object(o.b)("li",{parentName:"ul"},"If single-spa is ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/api#start"}),"not started"),", applications will be loaded,\nbut will not be bootstrapped, mounted or unmounted.")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note")),Object(o.b)("p",{parentName:"blockquote"},"Framework-specific helper libraries exist in the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ecosystem"}),"single-spa ecosystem")," to implement these required lifecycle methods. This documentation is helpful for understanding what those helpers are doing, or for implementing your own.")),Object(o.b)("h2",{id:"lifecyle-props"},"Lifecyle props"),Object(o.b)("p",null,"Lifecycle functions are called with a ",Object(o.b)("inlineCode",{parentName:"p"},"props")," argument, which is an object with some guaranteed information and additional custom information."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"function bootstrap(props) {\n  const {\n    name,        // The name of the application\n    singleSpa,   // The singleSpa instance\n    mountParcel, // Function for manually mounting \n    customProps  // Additional custom information\n  } = props;     // Props are given to every lifecycle\n  return Promise.resolve();\n}\n")),Object(o.b)("h4",{id:"built-in-props"},"Built-in props"),Object(o.b)("p",null,"Each lifecycle function is guranteed to be called with the following props:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name"),": The string name that was registered to single-spa."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"singleSpa"),": A reference to the singleSpa instance, itself. This is intended to allow applications and helper libraries to call singleSpa\nAPIs without having to import it. This is useful in situations where there are multiple webpack configs that are not set up to ensure\nthat only one instance of singleSpa is loaded."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"mountParcel"),": The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/parcels-api.html#mountparcel"}),"mountParcel function"),".")),Object(o.b)("h4",{id:"custom-props"},"Custom props"),Object(o.b)("p",null,"In addition to the built-in props that are provided by single-spa, you may optionally specify custom props to be passed to an application by providing a fourth argument to ",Object(o.b)("inlineCode",{parentName:"p"},"registerApplication"),". These ",Object(o.b)("em",{parentName:"p"},"customProps")," will be passed into each lifecycle method."),Object(o.b)("p",{className:"filename"},"root.application.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"singleSpa.registerApplication(\n  'app1', \n  () => {}, \n  () => {}, \n  { authToken: \"d83jD63UdZ6RS6f70D0\" }\n);\n")),Object(o.b)("p",{className:"filename"},"app1.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export function mount(props) {\n  console.log(props.customProps.authToken); // do something with the common authToken in app1\n  return reactLifecycles.mount(props);\n}\n")),Object(o.b)("p",null,"Some use cases could be to:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"share a common access token with all child apps"),Object(o.b)("li",{parentName:"ul"},"pass down some initialization information, like the rendering target"),Object(o.b)("li",{parentName:"ul"},"pass a reference to a common event bus so each app may talk to each other")),Object(o.b)("p",null,"Note that when no ",Object(o.b)("em",{parentName:"p"},"customProps")," are provided during registration, ",Object(o.b)("inlineCode",{parentName:"p"},"props.customProps")," defaults to an empty object."),Object(o.b)("h3",{id:"lifecycle-helpers"},"Lifecycle helpers"),Object(o.b)("p",null,"Some helper libraries that implement lifecycle functions for ease of use are available for many popular frameworks/libraries. Learn more on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/ecosystem"}),"Ecosystem page"),"."),Object(o.b)("h3",{id:"load"},"Load"),Object(o.b)("p",null,"When registered applications are being lazily loaded, this refers to when the code for a registered application is fetched from the server and executed. This will happen once the registered application's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#activity-function"}),"activity function")," returns a truthy value for the first time. It is best practice to do as little as possible / nothing at all during ",Object(o.b)("inlineCode",{parentName:"p"},"load"),", but instead to wait until the bootstrap lifecycle function to do anything. If you need to do something during ",Object(o.b)("inlineCode",{parentName:"p"},"load"),", simply put the code into a registered application's main entry point, but not inside of an exported function. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'console.log("The registered application has been loaded!");\n\nexport async function bootstrap(props) {...}\nexport async function mount(props) {...}\nexport async function unmount(props) {...}\n')),Object(o.b)("h3",{id:"bootstrap"},"Bootstrap"),Object(o.b)("p",null,"This lifecycle function will be called once, right before the registered application is mounted for the first time."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export function bootstrap(props) {\n  return Promise\n    .resolve()\n    .then(() => {\n      // One-time initialization code goes here\n      console.log('bootstrapped!')\n    });\n}\n")),Object(o.b)("h3",{id:"mount"},"Mount"),Object(o.b)("p",null,"This lifecycle function will be called whenever the registered application is not mounted, but its ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#activity-function"}),"activity function")," returns a truthy value. When called, this function should look at the URL to determine the active route and then create DOM elements, DOM event listeners, etc. to render content to the user. Any subsequent routing events (such as ",Object(o.b)("inlineCode",{parentName:"p"},"hashchange")," and ",Object(o.b)("inlineCode",{parentName:"p"},"popstate"),") will ",Object(o.b)("strong",{parentName:"p"},"not")," trigger more calls to ",Object(o.b)("inlineCode",{parentName:"p"},"mount"),", but instead should be handled by the application itself."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export function mount(props) {\n  return Promise\n    .resolve()\n    .then(() => {\n      // Do framework UI rendering here\n      console.log('mounted!')\n    });\n}\n")),Object(o.b)("h3",{id:"unmount"},"Unmount"),Object(o.b)("p",null,"This lifecycle function will be called whenever the registered application is mounted, but its ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"configuration#activity-function"}),"activity function")," returns a falsy value. When called, this function should clean up all DOM elements, DOM event listeners, leaked memory, globals, observable subscriptions, etc. that were created at any point when the registered application was mounted."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export function unmount(props) {\n  return Promise\n    .resolve()\n    .then(() => {\n      // Do framework UI unrendering here\n      console.log('unmounted!');\n    });\n}\n")),Object(o.b)("h3",{id:"unload"},"Unload"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"unload")," lifecycle is an optionally implemented lifecycle function. It will be called whenever an application should be ",Object(o.b)("inlineCode",{parentName:"p"},"unloaded"),". This will not ever happen unless someone calls the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api#unloadapplication"}),Object(o.b)("inlineCode",{parentName:"a"},"unloadApplication"))," API. If a registered application does not implement the unload lifecycle, then it assumed that unloading the app is a no-op."),Object(o.b)("p",null,"The purpose of the ",Object(o.b)("inlineCode",{parentName:"p"},"unload")," lifecycle is to perform logic right before a single-spa application is unloaded. Once the application is unloaded, the application status will be NOT_LOADED and the application will be re-bootstrapped."),Object(o.b)("p",null,"The motivation for ",Object(o.b)("inlineCode",{parentName:"p"},"unload")," was to implement the hot-loading of entire registered applications, but it is useful in other scenarios as well when you want to re-bootstrap applications, but perform some logic before applications are re-bootstrapped."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export function unload(props) {\n  return Promise\n    .resolve()\n    .then(() => {\n      // Hot-reloading implementation goes here\n      console.log('unloaded!');\n    });\n}\n")),Object(o.b)("h2",{id:"timeouts"},"Timeouts"),Object(o.b)("p",null,"By default, registered applications obey the global dieOnTimeout configuration, but can override that behavior for their specific application. This is done by exporting a ",Object(o.b)("inlineCode",{parentName:"p"},"timeouts")," object from the main entry point of the registered application. Example:"),Object(o.b)("p",{className:"filename"},"app-1.main-entry.js"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"export function bootstrap(props) {...}\nexport function mount(props) {...}\nexport function unmount(props) {...}\n\nexport const timeouts = {\n  bootstrap: {\n    millis: 5000,\n    dieOnTimeout: true,\n  },\n  mount: {\n    millis: 5000,\n    dieOnTimeout: false,\n  },\n  unmount: {\n    millis: 5000,\n    dieOnTimeout: true,\n  },\n  unload: {\n    millis: 5000,\n    dieOnTimeout: true,\n  },\n};\n")),Object(o.b)("h2",{id:"transitioning-between-applications"},"Transitioning between applications"),Object(o.b)("p",null,"If you find yourself wanting to add transitions as applications are mounted and unmounted, then you'll probably want to tie into the ",Object(o.b)("inlineCode",{parentName:"p"},"bootstrap"),", ",Object(o.b)("inlineCode",{parentName:"p"},"mount"),", and ",Object(o.b)("inlineCode",{parentName:"p"},"unmount")," lifecycle methods.  This ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/frehner/singlespa-transitions"}),"single-spa transitions")," repo is a small proof-of-concept of how you can tie into these lifecycle methods to add transitions as your apps mount and unmount."),Object(o.b)("p",null,"Transitions for pages within a mounted application can be handled entirely by the application itself. For example, using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reactjs/react-transition-group"}),"react-transition-group")," for React-based projects."))}s.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a),o=i.a.createContext({}),r=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=r(e.components);return i.a.createElement(o.Provider,{value:t},e.children)};var p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),s=r(n),u=a,b=s[l+"."+u]||s[u]||c[u]||o;return n?i.a.createElement(b,Object.assign({},{ref:t},p,{components:n})):i.a.createElement(b,Object.assign({},{ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);