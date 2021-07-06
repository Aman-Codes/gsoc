(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[322],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(2122),i=n(9756),a=(n(7294),n(3905)),o=["components"],s={title:"Week 3",author:"Avinal"},l=void 0,u={unversionedId:"2021/buildsystem/updates/2021-06-23",id:"2021/buildsystem/updates/2021-06-23",isDocsHomePage:!1,title:"Week 3",description:"\x3c!--",source:"@site/docs/2021/buildsystem/updates/2021-06-23.md",sourceDirName:"2021/buildsystem/updates",slug:"/2021/buildsystem/updates/2021-06-23",permalink:"/gsoc/docs/2021/buildsystem/updates/2021-06-23",editUrl:"https://github.com/fossology/gsoc-2021/edit/master/docs/docs/2021/buildsystem/updates/2021-06-23.md",version:"current",frontMatter:{title:"Week 3",author:"Avinal"},sidebar:"2021",previous:{title:"Introduction",permalink:"/gsoc/docs/2021/buildsystem/"},next:{title:"Building FOSSology",permalink:"/gsoc/docs/2021/buildsystem/build"}},c=[{value:"Attendees",id:"attendees",children:[]},{value:"Week 2 Progress",id:"week-2-progress",children:[]},{value:"Discussions",id:"discussions",children:[]},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",children:[]}],p={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"coding-week-3-meeting"},"Coding Week 3 Meeting"),(0,a.kt)("h3",{id:"attendees"},"Attendees"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Michael C. Jaeger ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/mcjaeger"},"https://github.com/mcjaeger")),(0,a.kt)("li",{parentName:"ul"},"Gaurav Mishra ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/GMishx"},"https://github.com/GMishx")),(0,a.kt)("li",{parentName:"ul"},"Sarita Singh ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"https://github.com/itssingh")),(0,a.kt)("li",{parentName:"ul"},"Avinal Kumar ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/avinal"},"https://github.com/avinal"))),(0,a.kt)("h3",{id:"week-2-progress"},"Week 2 Progress"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Version file Implementation"),(0,a.kt)("li",{parentName:"ol"},"Initial functions on obtaining commit and branch info"),(0,a.kt)("li",{parentName:"ol"},"To test the current progress, follow the instructions ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/avinal/FOSSology/wiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now"},"here"))),(0,a.kt)("h3",{id:"discussions"},"Discussions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"What is the regex expression used for obtaining version information?")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The regex has recently been modified to cover recent versions. The latest form is as below:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"([[:digit:]]+.[[:digit:]]+.[[:digit:]]+)(-?rc[[:digit:]]+)?-?([[:digit:]]*)-?[[:alnum:]]*\n"))),(0,a.kt)("li",{parentName:"ul"},"You can also try alternatives to regex if possible for CMake."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Should I use")," ",(0,a.kt)("inlineCode",{parentName:"p"},"git describe --tags")," ",(0,a.kt)("strong",{parentName:"p"},"or")," ",(0,a.kt)("inlineCode",{parentName:"p"},"git describe --always HEAD")," ",(0,a.kt)("strong",{parentName:"p"},"for obtaining version information?")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"In FOSSology we always use :code:",(0,a.kt)("inlineCode",{parentName:"li"},"git describe --tags"),", no exception whatsoever."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"CMake provides a preset configuration for the install path on GNU systems, you can see the description ",(0,a.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/v3.10/module/GNUInstallDirs.html"},"here")," based on the ",(0,a.kt)("a",{parentName:"p",href:"https://www.gnu.org/prep/standards/html_node/Directory-Variables.html"},"configuration")," suggested by the GNU. After comparing the variables defined in Makefile.conf with these, it seems directly taken from GNU standards.\nSo I wanted to ask if this would be okay to stick to the presets, instead of manually declaring the same paths? The former step will reduce the number of variables we are currently caching and will make it flexible for different installation scenarios."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Using the GNU standards is the ideal situation but FOSSology uses slightly different locations. For example, all agents end up under ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/share/fossology/")," with their individual folders instead of going to ",(0,a.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/"),"."),(0,a.kt)("li",{parentName:"ul"},"If the same results can be achieved by using the ",(0,a.kt)("inlineCode",{parentName:"li"},"CMAKE_INSTALL_<dir>")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"CMAKE_INSTALL_PREFIX")," then yeah, it will be preferred.")))),(0,a.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Try adding the version and commit hash info."),(0,a.kt)("li",{parentName:"ul"},"Implement writing version files for each build.")))}d.isMDXComponent=!0}}]);