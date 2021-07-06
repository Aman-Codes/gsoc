(self.webpackChunkgosc_2021=self.webpackChunkgosc_2021||[]).push([[16],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2601:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=["components"],l={slug:"/cmake-cweek3",title:"New build system - Week 3",author:"Avinal",author_title:"Build system",author_url:"https://github.com/avinal/",author_image_url:"https://avatars.githubusercontent.com/u/74113200?v=4",tags:["coding-week","cmake"]},s=void 0,c={permalink:"/gsoc/blog/cmake-cweek3",editUrl:"https://github.com/fossology/gsoc-2021/edit/master/blog/blog/2021-06-23-cmake-w3.md",source:"@site/blog/2021-06-23-cmake-w3.md",title:"New build system - Week 3",description:"\x3c!--",date:"2021-06-23T00:00:00.000Z",formattedDate:"June 23, 2021",tags:[{label:"coding-week",permalink:"/gsoc/blog/tags/coding-week"},{label:"cmake",permalink:"/gsoc/blog/tags/cmake"}],readingTime:1.475,truncated:!0},u=[{value:"Attendees",id:"attendees",children:[]},{value:"Week 2 Progress",id:"week-2-progress",children:[]},{value:"Discussions",id:"discussions",children:[]},{value:"Conclusion and Further Plans",id:"conclusion-and-further-plans",children:[]}],p={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"coding-week-3-meeting"},"Coding Week 3 Meeting"),(0,i.kt)("h3",{id:"attendees"},"Attendees"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Michael C. Jaeger ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mcjaeger"},"https://github.com/mcjaeger")),(0,i.kt)("li",{parentName:"ul"},"Gaurav Mishra ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/GMishx"},"https://github.com/GMishx")),(0,i.kt)("li",{parentName:"ul"},"Sarita Singh ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/itssingh"},"https://github.com/itssingh")),(0,i.kt)("li",{parentName:"ul"},"Avinal Kumar ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/avinal"},"https://github.com/avinal"))),(0,i.kt)("h3",{id:"week-2-progress"},"Week 2 Progress"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Version file Implementation"),(0,i.kt)("li",{parentName:"ol"},"Initial functions on obtaining commit and branch info"),(0,i.kt)("li",{parentName:"ol"},"To test the current progress, follow the instructions ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/avinal/FOSSology/wiki#test-the-new-system-only-gcc-with-make-and-ninja-tested-for-now"},"here"))),(0,i.kt)("h3",{id:"discussions"},"Discussions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"What is the regex expression used for obtaining version information?")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The regex has recently been modified to cover recent versions. The latest form is as below:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"([[:digit:]]+.[[:digit:]]+.[[:digit:]]+)(-?rc[[:digit:]]+)?-?([[:digit:]]*)-?[[:alnum:]]*\n"))),(0,i.kt)("li",{parentName:"ul"},"You can also try alternatives to regex if possible for CMake."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Should I use")," ",(0,i.kt)("inlineCode",{parentName:"p"},"git describe --tags")," ",(0,i.kt)("strong",{parentName:"p"},"or")," ",(0,i.kt)("inlineCode",{parentName:"p"},"git describe --always HEAD")," ",(0,i.kt)("strong",{parentName:"p"},"for obtaining version information?")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"In FOSSology we always use :code:",(0,i.kt)("inlineCode",{parentName:"li"},"git describe --tags"),", no exception whatsoever."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"CMake provides a preset configuration for the install path on GNU systems, you can see the description ",(0,i.kt)("a",{parentName:"p",href:"https://cmake.org/cmake/help/v3.10/module/GNUInstallDirs.html"},"here")," based on the ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/prep/standards/html_node/Directory-Variables.html"},"configuration")," suggested by the GNU. After comparing the variables defined in Makefile.conf with these, it seems directly taken from GNU standards.\nSo I wanted to ask if this would be okay to stick to the presets, instead of manually declaring the same paths? The former step will reduce the number of variables we are currently caching and will make it flexible for different installation scenarios."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Using the GNU standards is the ideal situation but FOSSology uses slightly different locations. For example, all agents end up under ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/share/fossology/")," with their individual folders instead of going to ",(0,i.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/"),"."),(0,i.kt)("li",{parentName:"ul"},"If the same results can be achieved by using the ",(0,i.kt)("inlineCode",{parentName:"li"},"CMAKE_INSTALL_<dir>")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"CMAKE_INSTALL_PREFIX")," then yeah, it will be preferred.")))),(0,i.kt)("h3",{id:"conclusion-and-further-plans"},"Conclusion and Further Plans"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try adding the version and commit hash info."),(0,i.kt)("li",{parentName:"ul"},"Implement writing version files for each build.")))}m.isMDXComponent=!0}}]);