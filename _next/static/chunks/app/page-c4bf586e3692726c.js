(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{599:(e,r,t)=>{Promise.resolve().then(t.bind(t,2330)),Promise.resolve().then(t.bind(t,3770))},2330:(e,r,t)=>{"use strict";t.d(r,{default:()=>i});var a=t(3787),s=t(5531),l=t(2150),o=t(249),n=t(9097);let i=(0,s.memo)(function(e){let{postInfoList:r}=e,{filteredFrontMatterList:t,ref:i,page:d}=function(e){let{postInfoList:r}=e,[t,a]=(0,s.useState)(1),{ref:o,inView:n}=(0,l.Wx)({rootMargin:"300px 0px",threshold:0}),i=(0,s.useMemo)(()=>r.slice(0,8*t),[t,r]);return(0,s.useEffect)(()=>{n&&a(e=>e+1)},[n]),{page:t,ref:o,filteredFrontMatterList:i}}({postInfoList:r});return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",children:t.map(e=>(0,a.jsx)(n.A,{...e},e.id))}),r.length/8>d&&(0,a.jsx)("div",{ref:i,className:"w-full",children:(0,a.jsx)(o.A,{className:"mx-auto mt-4 animate-spin text-primary"})})]})})},2888:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var a=t(3787),s=t(5531),l=t(2835),o=t(1884),n=t(7687);let i=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),d=s.forwardRef((e,r)=>{let{className:t,variant:s,size:o,asChild:d=!1,...c}=e,u=d?l.DX:"button";return(0,a.jsx)(u,{className:(0,n.cn)(i({variant:s,size:o,className:t})),ref:r,...c})});d.displayName="Button"},3770:(e,r,t)=>{"use strict";t.d(r,{default:()=>b});var a=t(3787),s=t(5531),l=t(9424),o=t(4958),n=t(2189),i=t(3737),d=t(7687),c=t(2888);let u=s.createContext(null);function p(){let e=s.useContext(u);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let f=s.forwardRef((e,r)=>{let{orientation:t="horizontal",opts:l,setApi:o,plugins:n,className:c,children:p,...f}=e,[g,h]=(0,i.A)({...l,axis:"horizontal"===t?"x":"y"},n),[m,x]=s.useState(!1),[v,b]=s.useState(!1),y=s.useCallback(e=>{e&&(x(e.canScrollPrev()),b(e.canScrollNext()))},[]),N=s.useCallback(()=>{null==h||h.scrollPrev()},[h]),w=s.useCallback(()=>{null==h||h.scrollNext()},[h]),j=s.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),N()):"ArrowRight"===e.key&&(e.preventDefault(),w())},[N,w]);return s.useEffect(()=>{h&&o&&o(h)},[h,o]),s.useEffect(()=>{if(h)return y(h),h.on("reInit",y),h.on("select",y),()=>{null==h||h.off("select",y)}},[h,y]),(0,a.jsx)(u.Provider,{value:s.useMemo(()=>({carouselRef:g,api:h,opts:l,orientation:t||((null==l?void 0:l.axis)==="y"?"vertical":"horizontal"),scrollPrev:N,scrollNext:w,canScrollPrev:m,canScrollNext:v}),[h,v,m,g,l,t,w,N]),children:(0,a.jsx)("div",{ref:r,onKeyDownCapture:j,className:(0,d.cn)("relative",c),role:"region","aria-roledescription":"carousel",...f,children:p})})});f.displayName="Carousel";let g=s.forwardRef((e,r)=>{let{className:t,...s}=e,{carouselRef:l,orientation:o}=p();return(0,a.jsx)("div",{ref:l,className:"overflow-hidden",children:(0,a.jsx)("div",{ref:r,className:(0,d.cn)("flex","horizontal"===o?"-ml-4":"-mt-4 flex-col",t),...s})})});g.displayName="CarouselContent";let h=s.forwardRef((e,r)=>{let{className:t,...s}=e,{orientation:l}=p();return(0,a.jsx)("div",{ref:r,role:"group","aria-roledescription":"slide",className:(0,d.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===l?"pl-4":"pt-4",t),...s})});h.displayName="CarouselItem";let m=s.forwardRef((e,r)=>{let{className:t,variant:s="outline",size:l="icon",...o}=e,{orientation:n,scrollPrev:i,canScrollPrev:u}=p();return(0,a.jsx)(c.$,{ref:r,variant:s,size:l,className:(0,d.cn)("absolute h-8 w-8 rounded-full","horizontal"===n?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:i,...o,children:(0,a.jsx)("span",{className:"sr-only",children:"Previous slide"})})});m.displayName="CarouselPrevious";let x=s.forwardRef((e,r)=>{let{className:t,variant:s="outline",size:l="icon",...o}=e,{orientation:n,scrollNext:i,canScrollNext:u}=p();return(0,a.jsx)(c.$,{ref:r,variant:s,size:l,className:(0,d.cn)("absolute h-8 w-8 rounded-full","horizontal"===n?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!u,onClick:i,...o,children:(0,a.jsx)("span",{className:"sr-only",children:"Next slide"})})});x.displayName="CarouselNext";var v=t(9097);function b(e){let{postInfoList:r,cardNumber:t}=e,i=(0,s.useRef)(null),d=(0,s.useRef)(null),c=(0,s.useMemo)(()=>r.slice(0,t),[r,t]);return(0,a.jsxs)(f,{plugins:[(0,l.A)({delay:5e3})],opts:{align:"start",loop:!0},className:"mx-auto rounded-xl border bg-primary/5 p-4 md:p-6 lg:p-8",children:[(0,a.jsx)(g,{children:c.map(e=>{let{categories:r,date:t,excerpt:s,header:l,id:o,title:n}=e;return(0,a.jsx)(h,{className:"pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3 lg:pl-8",children:(0,a.jsx)(v.A,{categories:r,date:t,excerpt:s,header:l,id:o,title:n})},o)})}),(0,a.jsxs)("div",{className:"group/next hover:cursor-pointer",children:[(0,a.jsx)(x,{ref:d,className:"right-0 h-full w-20 rounded-none border-none bg-transparent group-hover/next:bg-accent group-hover/next:text-accent-foreground"}),(0,a.jsx)(o.A,{className:"absolute -right-1 top-1/2 -translate-y-[50%] duration-300 group-hover/next:right-4 group-hover/next:opacity-50 group-hover/next:transition-opacity",height:80,width:40,onClick:()=>{var e;null==(e=d.current)||e.click()}})]}),(0,a.jsxs)("div",{className:"group/prev hover:cursor-pointer",children:[(0,a.jsx)(m,{ref:i,className:"left-0 h-full w-20 rounded-none border-none bg-transparent group-hover/prev:bg-accent group-hover/prev:text-accent-foreground"}),(0,a.jsx)(n.A,{className:"absolute -left-1 top-1/2 -translate-y-[50%] duration-300 group-hover/prev:left-4 group-hover/prev:opacity-50 group-hover/prev:transition-opacity",width:40,height:80,onClick:()=>{var e;null==(e=i.current)||e.click()}})]})]})}},7687:(e,r,t)=>{"use strict";t.d(r,{cn:()=>l});var a=t(8058);let s=(0,t(9123).zu)({extend:{classGroups:{"bg-color":["bg-quote-blue","bg-quote-green","bg-quote-yellow","bg-quote-orange","bg-quote-red","bg-quote-purple","bg-quote-gray","bg-quote-sky-blue"]}}});function l(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return s((0,a.$)(r))}},8680:(e,r,t)=>{"use strict";t.d(r,{$8:()=>a,Mn:()=>s});let a="/posts/",s="/posts"},9097:(e,r,t)=>{"use strict";t.d(r,{A:()=>d});var a=t(3787),s=t(8680),l=t(7687),o=t(2812),n=t(5531);let i=n.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",t),...s})});function d(e){let{categories:r,date:t,excerpt:d,header:c,title:u,id:p}=e,[f,g]=(0,n.useState)(!1),h=(0,n.useMemo)(()=>s.$8+p,[p]);return(0,a.jsx)("a",{href:h,onClick:e=>{e.preventDefault(),g(!0),window.location.href=h},"aria-label":"".concat(u," 포스트 읽기"),rel:"bookmark",className:(0,l.cn)(f?"pointer-events-none opacity-70":""),children:(0,a.jsxs)(i,{className:"group cursor-pointer overflow-hidden bg-white transition-all duration-300 hover:bg-gray-50 hover:shadow-xl dark:bg-gray-800 dark:hover:bg-gray-700",children:[(0,a.jsx)(o.default,{priority:!1,src:c.teaser,alt:u,height:208,width:208,sizes:"(max-width: 768px) 100vw, 50vw",placeholder:"blur",blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg==",className:(0,l.cn)("!h-52 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105")}),(0,a.jsxs)("div",{className:"p-5",children:[(0,a.jsxs)("div",{className:"mb-3 flex items-center justify-between",children:[(0,a.jsx)("span",{className:"rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700 dark:bg-blue-900/30 dark:text-white",children:r.map(e=>e)}),(0,a.jsx)("span",{className:"text-sm text-gray-500",children:t})]}),(0,a.jsx)("h3",{className:"mb-2 line-clamp-1 text-lg font-bold",children:u}),(0,a.jsx)("p",{className:"mb-4 line-clamp-3 min-h-[60px] text-sm text-gray-600 dark:text-gray-400",children:d})]})]})})}i.displayName="Card",n.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",t),...s})}).displayName="CardHeader",n.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("font-semibold leading-none tracking-tight",t),...s})}).displayName="CardTitle",n.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("text-sm text-muted-foreground",t),...s})}).displayName="CardDescription",n.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("p-6 pt-0",t),...s})}).displayName="CardContent",n.forwardRef((e,r)=>{let{className:t,...s}=e;return(0,a.jsx)("div",{ref:r,className:(0,l.cn)("flex items-center p-6 pt-0",t),...s})}).displayName="CardFooter"}},e=>{var r=r=>e(e.s=r);e.O(0,[261,464,766,386,696,358],()=>r(599)),_N_E=e.O()}]);