(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{15:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},46:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(16),i=c.n(s),o=(c(26),c(27),c(17));var r=c.n(o).a.create({baseURL:"https://api.themoviedb.org/3"}),l=(c(46),c(15),c(18)),d=c(21),h=c.n(d),b=c(0);var j=function(e){let{title:t,fetchUrl:c,isLargeRow:n}=e;const[s,i]=Object(a.useState)([]),[o,d]=Object(a.useState)(""),[j,v]=Object(a.useState)(""),[m,u]=Object(a.useState)("");return Object(a.useEffect)((()=>{!async function(){const e=await r.get(c);i(e.data.results)}()}),[c]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"row_posters",children:s.map((e=>Object(b.jsx)("img",{className:"row_poster ".concat(n&&"row_poster_large"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(n?e.poster_path:e.backdrop_path),alt:e.name,onClick:()=>(e=>{o?d(""):(h()((null===e||void 0===e?void 0:e.name)||(null===e||void 0===e?void 0:e.title)).then((e=>{const t=new URLSearchParams(new URL(e).search);d(t.get("v"))})).catch((e=>console.log(e))),u(e.title||e.name||e.original_name),v(e.overview))})(e)},e.id)))}),o&&Object(b.jsx)(l.a,{videoId:o,opts:{height:"400",width:"100%",playerVars:{autoplay:1}}}),o&&Object(b.jsxs)("h1",{className:"banner_title",children:[" ",m," "]}),o&&Object(b.jsx)("h2",{className:"banner_overview",children:j})]})};const v="499101ab7094cf73b6ba5dc757ef6de0";var m={fetchTrending:"/trending/all/week?api_key=".concat(v,"&language=en-us"),fetchNetflixOriginals:"discover/tv?api_key=".concat(v,"&with_networks=213"),fetchTopRated:"movie/top_rated?api_key=".concat(v,"&language=en-us"),fetchActionMovies:"discover/movie?api_key=".concat(v,"&with_genres=28"),fetchComedyMovies:"discover/movie?api_key=".concat(v,"&with_genres=35"),fetchHorrorMovies:"discover/movie?api_key=".concat(v,"&with_genres=27"),fetchRomanticMovies:"discover/movie?api_key=".concat(v,"&with_genres=10749"),fetchDocumentaries:"discover/movie?api_key=".concat(v,"&with_genres=99")};var u=function(){const[e,t]=Object(a.useState)([]);return Object(a.useEffect)((()=>{!async function(){const e=await r.get(m.fetchNetflixOriginals);t(e.data.results[Math.floor(Math.random()*e.data.results.length-1)])}()}),[]),console.log(e),Object(b.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:"url(".concat("https://image.tmdb.org/t/p/original/").concat(e.backdrop_path,")"),backgroundPosition:"center center"},children:[Object(b.jsxs)("div",{className:"banner_contents",children:[Object(b.jsxs)("h1",{className:"banner_title",children:[" ",e.title||e.name||e.original_name," "]}),Object(b.jsxs)("div",{className:"banner_buttons",children:[Object(b.jsx)("button",{className:"banner_button",children:"Play"}),Object(b.jsx)("button",{className:"banner_button",children:"Add To My List"})]}),Object(b.jsxs)("h2",{className:"banner_overview",children:[(c=e.overview,n=150,(null===c||void 0===c?void 0:c.length)>n?c.substr(0,n-1)+"...":c)," "]})]}),Object(b.jsx)("div",{className:"banner--fadebottom"})]});var c,n};c(64);var f=function(){const[e,t]=Object(a.useState)(!1);return Object(a.useEffect)((()=>(window.addEventListener("scroll",(()=>{window.scrollY>200?t(!0):t(!1)})),()=>{window.removeEventListener("scroll")})),[]),Object(b.jsxs)("div",{className:"navbar ".concat(e&&"nav_black"," "),children:[Object(b.jsx)("img",{className:"navbar_logo",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",alt:"netflix"}),Object(b.jsx)("img",{className:"navbar_avatar",src:"https://img.icons8.com/color/48/000000/boruto-uzumaki.png",alt:"avatar"})]})};var g=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(f,{}),Object(b.jsx)(u,{}),Object(b.jsx)(j,{title:"TRENDING NOW",fetchUrl:m.fetchTrending,isLargeRow:!0}),Object(b.jsx)(j,{title:"Top Rated",fetchUrl:m.fetchTopRated}),Object(b.jsx)(j,{title:"Netflix Originals",fetchUrl:m.fetchNetflixOriginals}),Object(b.jsx)(j,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(b.jsx)(j,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(b.jsx)(j,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(b.jsx)(j,{title:"Romantic Movies",fetchUrl:m.fetchRomanticMovies}),Object(b.jsx)(j,{title:"Documentaries",fetchUrl:m.fetchDocumentaries})]})};var O=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,66)).then((t=>{let{getCLS:c,getFID:a,getFCP:n,getLCP:s,getTTFB:i}=t;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(g,{})}),document.getElementById("root")),O()}},[[65,1,2]]]);
//# sourceMappingURL=main.eee26576.chunk.js.map