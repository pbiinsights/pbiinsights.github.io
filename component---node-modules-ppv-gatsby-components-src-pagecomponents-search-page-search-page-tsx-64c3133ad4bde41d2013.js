(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6rV+":function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));r("VRzm"),r("Btvt");var a=r("o0o1"),n=r.n(a),s=(r("ls82"),r("q1tI")),o=r("Lasv"),c=r("1BJh"),i=r("biaj"),u=r("7s2E"),p=r("pzYN");function l(t,e,r,a,n,s,o){try{var c=t[s](o),i=c.value}catch(u){return void r(u)}c.done?e(i):Promise.resolve(i).then(a,n)}function h(t){return function(){var e=this,r=arguments;return new Promise((function(a,n){var s=t.apply(e,r);function o(t){l(s,a,n,o,c,"next",t)}function c(t){l(s,a,n,o,c,"throw",t)}o(void 0)}))}}var d=function(t){var e,r;function a(e){var r;return(r=t.call(this,e)||this).searchChangedHandler=function(){var t=h(n.a.mark((function t(e){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.updateSearch(e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),r.state={posts:[],cnt:0,finished:!1,query:""},p.a.registerHandler(r.searchChangedHandler),r}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var l=a.prototype;return l.updateSearch=function(){var t=h(n.a.mark((function t(e){var r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,this.setState({query:e,finished:!1}),null==e||""==e.trim()){t.next=7;break}return t.next=5,Object(o.i)(c.a.elasticSearchUri+"/docs/_search?pretty=true",{_source:["slug","abstract","title","subtitle","updatedate","date","author","image","categories","commentCnt"],query:{multi_match:{query:e,fields:["tags","title","subtitle","abstract","author","text"]}},size:c.a.elasticSearchResultLimit},{headers:{"Content-Type":"application/json",Authorization:"Basic "+c.a.elsaticBasicAuth}});case 5:(r=t.sent)&&r.hits&&r.hits.hits&&this.setState({posts:r.hits.hits.map((function(t){var e=t._source;return{frontmatter:{title:e.title,date:e.date,updatedate:e.updatedate,image:e.image,subtitle:e.subtitle,slug:e.slug,author:e.author,categories:e.categories},fields:{abstract:e.abstract,commentCnt:e.commentCnt}}})),cnt:r.hits.hits.length,finished:!0});case 7:t.next=11;break;case 9:t.prev=9,t.t0=t.catch(0);case 11:return t.prev=11,this.setState({finished:!0}),t.finish(11);case 14:case"end":return t.stop()}}),t,this,[[0,9,11,14]])})));return function(e){return t.apply(this,arguments)}}(),l.componentDidMount=function(){var t=h(n.a.mark((function t(){var e,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:void 0!==typeof window&&(e=Object(o.d)(),r=decodeURIComponent(e.query),this.updateSearch(r));case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),l.componentWillUnmount=function(){p.a.unregisterHandler(this.searchChangedHandler)},l.render=function(){var t=Object(o.h)(this.props.data.categories.edges.map((function(t){return t.node}))),e=this.props.data.authors.edges.map((function(t){return t.node}));return s.createElement("div",{className:"search-results-container"},1==this.state.finished?s.createElement(s.Fragment,null,s.createElement(u.a,{title:this.state.cnt+" Suchergebnisse für '"+this.state.query+"'"}),s.createElement(i.a,{posts:this.state.posts,categories:t,authors:e})):s.createElement(u.a,{title:"Lade Ergebnisse..."}))},a}(s.Component)},IFcu:function(t,e,r){"use strict";r.r(e),r.d(e,"Search",(function(){return h})),r.d(e,"pageQuery",(function(){return d}));var a=r("q1tI"),n=r.n(a),s=r("b36i"),o=r("nq06"),c=r("1Czm"),i=r("B9z/"),u=r("zYU4"),p=r("EYOX"),l=r("6rV+");var h=function(t){var e,r;function a(e){return t.call(this,e)||this}return r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,a.prototype.render=function(){return n.a.createElement(s.b,{header:{url:"search",description:"Sucherergebnisse",type:"object",title:"Suchergebnisse",tags:["search"]},sidebar:n.a.createElement(o.a,{isFixed:!0},n.a.createElement(c.a,null),n.a.createElement(i.a,null),n.a.createElement(u.a,null),n.a.createElement(p.a,null))},n.a.createElement(l.a,{data:this.props.data}))},a}(n.a.Component);e.default=function(t){var e=t.pageContext,r=t.data,a=t.location;return n.a.createElement(h,{data:r,location:a,context:e})};var d="2720909686"},zYU4:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("q1tI"),n=r.n(a);r("XdKL");var s=function(t){var e,r;function a(){return t.apply(this,arguments)||this}return r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,a.prototype.render=function(){return n.a.createElement("div",{className:"sidebar-component"},n.a.createElement("div",{className:"sidebar-header"},"Artikel mit Google durchsuchen"),n.a.createElement("div",{className:"sidebar-content"},n.a.createElement("div",{className:"sidebar-content-pad"},n.a.createElement("div",{style:{marginBottom:"5px"}},n.a.createElement("form",{action:"https://www.google.com/search",className:"searchform",method:"get",name:"searchform",target:"_blank"},n.a.createElement("input",{name:"sitesearch",type:"hidden",value:"powerpivotinsights.de"}),n.a.createElement("div",{style:{textAlign:"center",marginTop:"5px"}},n.a.createElement("input",{autoComplete:"on",className:"form-control search",name:"q",placeholder:"",required:!0,type:"text"})),n.a.createElement("div",{style:{textAlign:"center",marginTop:"5px"}},n.a.createElement("button",{className:"button action-button",type:"submit"},"Suchen")))))))},a}(n.a.Component)}}]);
//# sourceMappingURL=component---node-modules-ppv-gatsby-components-src-pagecomponents-search-page-search-page-tsx-64c3133ad4bde41d2013.js.map