"use strict";(self.webpackChunkfeatures=self.webpackChunkfeatures||[]).push([[190],{1550:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var o=n(4848),i=n(8453);const a={},s=void 0,r={permalink:"/features/planetsandmoons",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/planetsandmoons.md",source:"@site/blog/planetsandmoons.md",title:"planetsandmoons",description:"---",date:"2024-06-28T06:25:29.991Z",tags:[],readingTime:6.23,hasTruncateMarker:!1,authors:[],frontMatter:{},unlisted:!1,prevItem:{title:"whypal",permalink:"/features/whypal"},nextItem:{title:"phrasing",permalink:"/features/phrasing"}},h={authorsImageUrls:[]},l=[{value:"slug: mdx-blog-post\ntitle: planets &amp; moons\nauthors: [slorber]\ntags: [docusaurus]",id:"slug-mdx-blog-posttitle-planets--moonsauthors-slorbertags-docusaurus",level:2}];function c(e){const t={h2:"h2",hr:"hr",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.h2,{id:"slug-mdx-blog-posttitle-planets--moonsauthors-slorbertags-docusaurus",children:"slug: mdx-blog-post\ntitle: planets & moons\nauthors: [slorber]\ntags: [docusaurus]"}),"\n",(0,o.jsx)(t.p,{children:"Introduction"}),"\n",(0,o.jsx)(t.p,{children:"In software development the term design pattern is a useful appellation for a reoccurring issue that was dealt with haphazardly (often by boiler-plate machinations) but is now understood well enough to get a systematized solution and label."}),"\n",(0,o.jsx)(t.p,{children:"Planet & moons is a design pattern unique to PAL; no coding language has ever conceived of this feature let alone implemented it."}),"\n",(0,o.jsx)(t.p,{children:"What they are"}),"\n",(0,o.jsx)(t.p,{children:"The planet is the main function which takes some input arguments and produces some outputs. When the input arguments need to be managed (often to increase invocation clarity) or when the function needs to be modified, then moons are used. Whenever a planet is created, all its moons are defined with it at the same time."}),"\n",(0,o.jsx)(t.p,{children:"The moons are specialized local functions, which act as either adverbs, or as adjectives. When used as adjectives, they qualify the inputs to their planet; they group, categorize, and describe their planet function\u2019s argument list. Moons only become visible when their planet is invoked, since they are proximity based."}),"\n",(0,o.jsx)(t.p,{children:"The reason for the specific terms \u2018planet\u2019 and \u2018moons\u2019 are:"}),"\n",(0,o.jsx)(t.p,{children:"Moons are local to the planet they orbit; their names only come into scope through proximity of the planet they are nearest to. Outside of the orbit of their planet, moons are invisible."}),"\n",(0,o.jsx)(t.p,{children:"The planet is big because moons orbit it, not the other way around; it is the influencer, and dictates the meanings of the local moons around it."}),"\n",(0,o.jsx)(t.p,{children:"Moons are small because there can be many of them, and they all get their prescribed meaning from the planet they orbit."}),"\n",(0,o.jsx)(t.p,{children:"The scope of the moons lie in \u201cthe shadow\u2019\u2019 of their planet; if their planet function isn\u2019t nearby, the moons become invisible to the current scope. If a moon so happens to have the same name as some other entity in a wider contextual scope, then its locally (planetary proximity dictated) prescribed meaning takes precedence, and over-rides the outer scope meaning."}),"\n",(0,o.jsx)(t.p,{children:"Why we need them"}),"\n",(0,o.jsx)(t.p,{children:"To aid comprehension, we need to appreciate the need that planet & moons fill. This is best achieved with a concrete example."}),"\n",(0,o.jsx)(t.p,{children:"Imagine a function called rotate, that takes 8 arguments for its input, and outputs a tuple of 3 values, and all 8 inputs are of the same data type; which is the default numeric Real. Invoking would look like this in source-code:"}),"\n",(0,o.jsx)(t.p,{children:"x, y, z \u2190 rotate(x, y, z, X, Y, Z, theta, phi)"}),"\n",(0,o.jsx)(t.p,{children:"We will now zoom in on the actual function call; no longer showing its output being captured by the assignment statement. So now we simply have:"}),"\n",(0,o.jsx)(t.p,{children:"rotate(x, y, z, X, Y, Z, theta, phi)"}),"\n",(0,o.jsx)(t.p,{children:"Excluding the fact it outputs a tuple, this could be done in almost any coding language."}),"\n",(0,o.jsx)(t.p,{children:"The question is: how far can we improve our code to explicate the meaning (purpose and intent) of this function invocation?"}),"\n",(0,o.jsx)(t.p,{children:"We can use white space to meaningfully segregate the various function arguments:"}),"\n",(0,o.jsx)(t.p,{children:"rotate(x, y, z, X,Y,Z, theta, phi)"}),"\n",(0,o.jsx)(t.p,{children:"which helps a bit."}),"\n",(0,o.jsx)(t.p,{children:"More significantly we can replace the tacit arguments with meaningful names. Something like:"}),"\n",(0,o.jsx)(t.p,{children:"rotate(x, y, z, X_origin, Y_origin, Z_origin, theta, phi)"}),"\n",(0,o.jsx)(t.p,{children:"In any other language we would have now reached the end of the road; since no more improvements to readability can be done."}),"\n",(0,o.jsx)(t.p,{children:"But not for us; with PAL we can employ source\u2013hinting to take us further, like a Sherpa guide, up the mountain of clarity. We can insert explanatory words (in this case, round and by) to give us:"}),"\n",(0,o.jsx)(t.p,{children:"rotate(x, y, z, \u2039round\u203a X_origin, Y_origin, Z_origin, \u2039by\u203a theta, phi)"}),"\n",(0,o.jsx)(t.p,{children:"In fact, we can now increase clarity by reverting back to using the shorter tacit argument names again:"}),"\n",(0,o.jsx)(t.p,{children:"rotate(x, y, z, \u2039round\u203a X, Y, Z, \u2039by\u203a theta, phi)"}),"\n",(0,o.jsx)(t.p,{children:"We are not done yet, because PAL also provides us with an extended (and extensible) glyph range for symbol names, so we can replace the \u2018\u2018theta\u2019\u2019 and \u2018\u2018phi\u2019\u2019 with shorter names while boosting clarity. Heck while we are at it, we can also come up with better names for the \u2018X\u2019, \u2018Y\u2019, and \u2018Z\u2019 too:"}),"\n",(0,o.jsx)(t.p,{children:"rotate(x, y, z, \u2039round\u203a \u03c7, \u01b4, \u0225, \u2039by\u203a \u03b8, \u03d5)"}),"\n",(0,o.jsx)(t.p,{children:"Lastly, since we are permitted relaxed\u2013functions, we can ditch the function parenthesis, since they aren\u2019t really earning their keep. Which brings us to:"}),"\n",(0,o.jsx)(t.p,{children:"rotate x, y, z, \u2039round\u203a \u03c7, \u01b4, \u0225, \u2039by\u203a \u03b8, \u03d5"}),"\n",(0,o.jsx)(t.p,{children:"We could go further and omit all those comas too, but we will stop here."}),"\n",(0,o.jsx)(t.p,{children:"So in the journey of elucidating our use of this rotate function, it would seem no more can be done to enhance readability."}),"\n",(0,o.jsx)(t.p,{children:"But we have not reached the summit; there remain some arbitrary limitations to what we have achieved:"}),"\n",(0,o.jsx)(t.p,{children:"What if we want to be able to omit more than one argument by being able to rely on some default values being provided to this function? (Remember that it was stated earlier that ALL the input arguments to this function are of the SAME data type; this would normally mean that only the last function argument can be specified to be an optional parameter.)"}),"\n",(0,o.jsx)(t.p,{children:"Why not be able to change the invocation order of the arguments? For example, maybe it would look nicer to specify the rotation angles: (\u03b8 \u03d5) prior to specifying the pivot coordinate: (\u03c7 \u01b4 \u0225)."}),"\n",(0,o.jsx)(t.p,{children:"The only way forward now, is through use of the planet & moons facility."}),"\n",(0,o.jsx)(t.p,{children:"How to make them"}),"\n",(0,o.jsx)(t.p,{children:"We will now define or extend our function to be a planet, with associated moon functions."}),"\n",(0,o.jsx)(t.p,{children:"This is easily done, like so:"}),"\n",(0,o.jsx)(t.p,{children:"\u25aa rotate (x y z) round (\u03c7 \u01b4 \u0225) by (\u03b8 \u03d5) \u2500\u2500\u2500\u2023 (x y z) \u25cc \u25cc \u25cc"}),"\n",(0,o.jsx)(t.p,{children:"In the above definition, the planet function is rotate, and it has 2 moons: by and around; which both gather and label the parameters. (The dotted\u2013circle glyph represents folded code from the IDE editor.)"}),"\n",(0,o.jsx)(t.p,{children:"This now gifts us a choice of calling our rotate function with two alternative orderings of its arguments."}),"\n",(0,o.jsx)(t.p,{children:"We can still invoke the way we did before, with the rotation angles supplied as the last arguments:"}),"\n",(0,o.jsx)(t.p,{children:"rotate x, y, z round \u03c7, \u01b4, \u0225 by \u03b8, \u03d5"}),"\n",(0,o.jsx)(t.p,{children:"Or we can now choose to invoke by specifying the rotation angles ahead of the pivot coordinate point:"}),"\n",(0,o.jsx)(t.p,{children:"rotate x, y, z by \u03b8, \u03d5 round \u03c7, \u01b4, \u0225"}),"\n",(0,o.jsx)(t.p,{children:"We can still proceed further by adding another moon to gather the arguments that we were giving directly to the planet itself, by minting the signature this way:"}),"\n",(0,o.jsx)(t.p,{children:"\u25aa rotate point(x y z) round (\u03c7 \u01b4 \u0225) by (\u03b8 \u03d5) \u2500\u2500\u2500\u2023 (x y z) \u25cc \u25cc \u25cc"}),"\n",(0,o.jsx)(t.p,{children:"So we can now re-order THREE groups of arguments instead of simply two. For example, we now have the freedom to invoke it this way:"}),"\n",(0,o.jsx)(t.p,{children:"rotate by \u03b8, \u03d5 point x, y, z round \u03c7, \u01b4, \u0225"}),"\n",(0,o.jsx)(t.p,{children:"with the rotation angles being specified first, followed by the point we want to rotate, with the pivot point being specified last."}),"\n",(0,o.jsx)(t.p,{children:"Or we can invoke this way:"}),"\n",(0,o.jsx)(t.p,{children:"rotate by \u03b8, \u03d5 round \u03c7, \u01b4, \u0225 point x, y, z"}),"\n",(0,o.jsx)(t.p,{children:"With the coordinate point we intend to rotate coming dead last in the argument list. Etc."}),"\n",(0,o.jsx)(t.p,{children:"Not that all of these options are equally good, but the point is that we DO have a choice!"}),"\n",(0,o.jsx)(t.p,{children:"Now, how about being able to use our rotate function with omitted arguments? This is easily achieved by specifying which arguments can be omitted. We can do this on a moon by moon basis:"}),"\n",(0,o.jsx)(t.p,{children:"To Be Continued \u2026"})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(6540);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);