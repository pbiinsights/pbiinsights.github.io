(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"6rV+":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));n("VRzm"),n("Btvt");var a=n("o0o1"),r=n.n(a),s=(n("ls82"),n("q1tI")),i=n("Lasv"),o=n("1BJh"),c=n("biaj"),l=n("7s2E"),u=n("pzYN");function m(e,t,n,a,r,s,i){try{var o=e[s](i),c=o.value}catch(l){return void n(l)}o.done?t(c):Promise.resolve(c).then(a,r)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var s=e.apply(t,n);function i(e){m(s,a,r,i,o,"next",e)}function o(e){m(s,a,r,i,o,"throw",e)}i(void 0)}))}}var h=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).searchChangedHandler=function(){var e=p(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.updateSearch(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={posts:[],cnt:0,finished:!1,query:""},u.a.registerHandler(n.searchChangedHandler),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var m=a.prototype;return m.updateSearch=function(){var e=p(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.setState({query:t,finished:!1}),null==t||""==t.trim()){e.next=7;break}return e.next=5,Object(i.i)(o.a.elasticSearchUri+"/docs/_search?pretty=true",{_source:["slug","abstract","title","subtitle","updatedate","date","author","image","categories","commentCnt"],query:{multi_match:{query:t,fields:["tags","title","subtitle","abstract","author","text"]}},size:o.a.elasticSearchResultLimit},{headers:{"Content-Type":"application/json",Authorization:"Basic "+o.a.elsaticBasicAuth}});case 5:(n=e.sent)&&n.hits&&n.hits.hits&&this.setState({posts:n.hits.hits.map((function(e){var t=e._source;return{frontmatter:{title:t.title,date:t.date,updatedate:t.updatedate,image:t.image,subtitle:t.subtitle,slug:t.slug,author:t.author,categories:t.categories},fields:{abstract:t.abstract,commentCnt:t.commentCnt}}})),cnt:n.hits.hits.length,finished:!0});case 7:e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:return e.prev=11,this.setState({finished:!0}),e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[0,9,11,14]])})));return function(t){return e.apply(this,arguments)}}(),m.componentDidMount=function(){var e=p(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:void 0!==typeof window&&(t=Object(i.d)(),n=decodeURIComponent(t.query),this.updateSearch(n));case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),m.componentWillUnmount=function(){u.a.unregisterHandler(this.searchChangedHandler)},m.render=function(){var e=Object(i.h)(this.props.data.categories.edges.map((function(e){return e.node}))),t=this.props.data.authors.edges.map((function(e){return e.node}));return s.createElement("div",{className:"search-results-container"},1==this.state.finished?s.createElement(s.Fragment,null,s.createElement(l.a,{title:this.state.cnt+" Suchergebnisse für '"+this.state.query+"'"}),s.createElement(c.a,{posts:this.state.posts,categories:e,authors:t})):s.createElement(l.a,{title:"Lade Ergebnisse..."}))},a}(s.Component)},ANhw:function(e,t,n){var a,r;n("pIFo"),n("a1Th"),n("h7Nl"),n("Btvt"),n("xfY5"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",r={rotl:function(e,t){return e<<t|e>>>32-t},rotr:function(e,t){return e<<32-t|e>>>t},endian:function(e){if(e.constructor==Number)return 16711935&r.rotl(e,8)|4278255360&r.rotl(e,24);for(var t=0;t<e.length;t++)e[t]=r.endian(e[t]);return e},randomBytes:function(e){for(var t=[];e>0;e--)t.push(Math.floor(256*Math.random()));return t},bytesToWords:function(e){for(var t=[],n=0,a=0;n<e.length;n++,a+=8)t[a>>>5]|=e[n]<<24-a%32;return t},wordsToBytes:function(e){for(var t=[],n=0;n<32*e.length;n+=8)t.push(e[n>>>5]>>>24-n%32&255);return t},bytesToHex:function(e){for(var t=[],n=0;n<e.length;n++)t.push((e[n]>>>4).toString(16)),t.push((15&e[n]).toString(16));return t.join("")},hexToBytes:function(e){for(var t=[],n=0;n<e.length;n+=2)t.push(parseInt(e.substr(n,2),16));return t},bytesToBase64:function(e){for(var t=[],n=0;n<e.length;n+=3)for(var r=e[n]<<16|e[n+1]<<8|e[n+2],s=0;s<4;s++)8*n+6*s<=8*e.length?t.push(a.charAt(r>>>6*(3-s)&63)):t.push("=");return t.join("")},base64ToBytes:function(e){e=e.replace(/[^A-Z0-9+\/]/gi,"");for(var t=[],n=0,r=0;n<e.length;r=++n%4)0!=r&&t.push((a.indexOf(e.charAt(n-1))&Math.pow(2,-2*r+8)-1)<<2*r|a.indexOf(e.charAt(n))>>>6-2*r);return t}},e.exports=r},BEtg:function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},G00U:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=new(function(){function e(){"undefined"!=typeof window&&(this.obj=window.captcha)}return e.prototype.captcha=function(e){1==this.obj.captchaLoaded?e():this.obj.captchaHandlers.push(e)},e}())},QgLm:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("q1tI"),r=n.n(a),s=n("ma3e"),i=(n("WsyM"),n("Wbzz"));var o=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"next-prev-container"},r.a.createElement("div",{style:{flexBasis:"content"}},null==this.props.previousPost?"":r.a.createElement(i.Link,{to:"/"+this.props.previousPost.route,title:this.props.previousPost.title},r.a.createElement("span",{style:{verticalAlign:"middle",marginRight:"10px"}},r.a.createElement(s.a,null)),r.a.createElement("span",null,this.props.previousPost.title.length<=28?this.props.previousPost.title:this.props.previousPost.title.substr(0,25)+"..."))),r.a.createElement("div",{style:{flexBasis:"content"}},null==this.props.nextPost?"":r.a.createElement(i.Link,{to:"/"+this.props.nextPost.route,title:this.props.nextPost.title},r.a.createElement("span",null,this.props.nextPost.title.length<=28?this.props.nextPost.title:this.props.nextPost.title.substr(0,25)+"..."),r.a.createElement("span",{className:"next-prev-icon"},r.a.createElement(s.b,null))))))},a}(r.a.Component)},TkXe:function(e,t,n){"use strict";n.r(t);n("dRSK");var a=n("q1tI"),r=n.n(a),s=(n("5tzQ"),n("Wbzz")),i=n("ma3e"),o=(n("/BVY"),n("My3O"),n("7s2E"),n("tKxY"),n("cUxJ")),c=(n("Vvek"),n("Wfyk"),n("QP0j"),n("V7/L"),n("mx8q"),n("qTfJ"),n("grpQ"),n("QgLm"),n("Bi/K"),n("0G2m"),n("sDiU"),n("TJ1f"),n("Z9Z0"),n("0mN4"),n("rSK1"),n("9eSz")),l=n.n(c),u=n("Kfvu");var m=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"home-customerstory"},this.props.stories.map((function(e,t){return r.a.createElement("div",{key:t,className:"customerstory-container "+(t%2==0?"story-1":"story-2")},r.a.createElement("div",{className:"customerstory-icon"},r.a.createElement(u.OutboundLink,{href:e.fields.story.url,rel:"nofollow",className:"customerstory-company",target:"_blank"},r.a.createElement(l.a,{fixed:e.childImageSharp.fixed,className:e.fields.story.className}))),r.a.createElement("div",{className:"customerstory-text"},r.a.createElement("span",null,r.a.createElement("h3",null,r.a.createElement(u.OutboundLink,{href:e.fields.story.url,rel:"nofollow",className:"customerstory-company",target:"_blank"},e.fields.story.company)),r.a.createElement("p",null,e.fields.story.text)),r.a.createElement("span",null,r.a.createElement("span",{className:"customerstory-author"},e.fields.story.author),r.a.createElement("span",{className:"customerstory-position"}," (",e.fields.story.position),null!=e.fields.story.country?r.a.createElement("span",{className:"customerstory-country"},", ",e.fields.story.country):"",r.a.createElement("span",{className:"customerstory-author"},")"))))}))),r.a.createElement("div",{className:"home-customerstory-button-container"},r.a.createElement(s.Link,{to:"/kundenmeinungen"},r.a.createElement(i.k,null),"mehr Kundenmeinungen")))},a}(r.a.Component),p=(n("CyoR"),n("b36i")),h=(n("gmaP"),n("UYgy"),n("Wc3t"),n("BZuh"),n("6rV+"),n("nq06"),n("EYOX"),n("Wlfx"),n("B9z/"),n("1Czm"),n("zYU4"),n("SuRf"),n("PspG")),d=n("Lasv");r.a.Component,n("biaj"),n("808z"),n("G00U"),n("h5yz"),n("pzYN"),n("yuLm");n.d(t,"Home",(function(){return f})),n.d(t,"pageQuery",(function(){return g}));var f=function(e){var t,n;function a(t){return e.call(this,t)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.stories,t={kom4tec:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("kom4tec")>=0})),endress:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("endress")>=0})),flexsec:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("flex")>=0})),theobald:e.find((function(e){return e.fields.story.company.toLowerCase().indexOf("theobald")>=0}))};return r.a.createElement(p.a,{header:{description:"Artikel, Tipps&Tricks, Online Kurse zu Excel Power Pivot, Power BI und Power Query | Trainings, Workshops und Implementierungsunterstützung durch Macher",title:"Home | Power BI Insights | Durchblick durch Daten",type:"website",url:"/"}},r.a.createElement("div",{className:"container-nosidebar"},r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Power BI Insights – der BI-Blog für den Durchblick durch Daten"),r.a.createElement("p",null,"Hier teilen wir unsere Leidenschaft für Datenauswertungen.")),r.a.createElement("div",{className:"section"},r.a.createElement(m,{stories:[t.endress,t.kom4tec]})),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Neueinsteiger?"),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(s.Link,{to:"/was-ist-power-bi"},"Was ist Power BI?")),r.a.createElement("li",null,"Artikel zu Power Query auf ",r.a.createElement("a",{href:"https://powerpivotinsights.de/category/power-query"},"www.powerpivotinsights.de")),r.a.createElement("li",null,"Artikel zu Excel Power Pivot auf ",r.a.createElement("a",{href:"https://powerpivotinsights.de/category/power-pivot"},"www.powerpivotinsights.de")))),r.a.createElement("div",{className:"section"},r.a.createElement(m,{stories:[t.flexsec,t.theobald]})),r.a.createElement("div",{className:"section"},r.a.createElement("h1",null,"Unsere Angebote"),r.a.createElement("div",{className:"columns"},r.a.createElement("div",{className:"column homepage-offer"},r.a.createElement(s.Link,{to:"/trainings"},r.a.createElement("div",null,r.a.createElement(i.c,null)),r.a.createElement("div",null,"Trainings"))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"column homepage-offer"},r.a.createElement(s.Link,{to:"/trainings"},r.a.createElement("div",null,r.a.createElement(i.d,null)),r.a.createElement("div",null,"Umsetzung")))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"column homepage-offer"},r.a.createElement(s.Link,{to:"/trainings"}," ",r.a.createElement("div",null,r.a.createElement(i.o,null)),r.a.createElement("div",null,"Schnelle Unterstützung")))))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{style:{textAlign:"center",fontSize:"32pt"}},r.a.createElement("a",{href:"tel:+49(0)711/2172878-0"},r.a.createElement("span",{className:"text-primary"},r.a.createElement(i.l,null)),r.a.createElement("span",{className:"text-black",style:{fontWeight:"bold"}}," +49 (0) 711/2172878-0 "))))))},a}(r.a.Component),g=(t.default=function(e){var t=e.data,n=(e.pageContext,e.location);return r.a.createElement(f,{stories:t.stories.edges.map((function(e){return e.node})),location:n})},"3095346891")},"V7/L":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("a1Th"),n("Btvt"),n("f3/d");var a=n("q1tI"),r=n.n(a),s=n("ma3e"),i=(n("WsyM"),n("G00U")),o=n("wd/R"),c=n("aCH8"),l=n("1BJh");function u(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var m="6Lej97IUAAAAAHjKV4e2jG_WDj-l8_HyO67I4YVY",p=function(e){function t(t){var n;return(n=e.call(this,t)||this).id=n.createGuid(),n.recaptchaId="recaptcha-"+n.id,n.grecaptchaId=null,n.inputId="input-"+n.id,n.captchaRef=r.a.createRef(),n.updateCb=null,n.captchaCallback=function(e){n.setState({captchaChecked:!0,captchaResponse:e})},n.expiredCallback=function(){n.setState({captchaChecked:!1}),grecaptcha.reset(n.grecaptchaId)},n.onReset=function(){n.reset()},n.errorCallback=function(){n.setState({success:!1})},n.onSubmit=function(e){if(e.preventDefault(),n.setState({triggered:!0}),n.state.email&&n.state.content&&n.state.name&&1==n.state.captchaChecked){n.setState({submitting:!0});var t,a,r={__site:l.a.site,fields:{website:n.state.website,name:n.state.name,guid:n.createGuid(),email:n.state.email,content:n.state.content,parent:n.props.parent,postSlug:n.props.slug},options:{slug:n.props.slug,reCaptcha:{siteKey:m,secret:"i7uGSSt2Df0i6FocOCCmVl5VIbc3FUexNa/CTmZbVGCbLdZpoib1CZVRWIzVIO0MkNeTwn2sp2z5zlI8V7tsN91gKS+JlIX4XNXampUXde0iKusb1H1LA2TGCsUJf5UqbLMlIqPk/tcwXjSvHONFUXf6tcercDnteylYsqGcJ5NxmG4FuR4Nscj7lrpvOpFmQitKH8PRbYAtxotmzu3NbxJsYF7N0Qusxq7VynuLGvn3VI8vdpImpoROxnWbBycRuHygEd/9IAelCWPIHuwcwVuq6hwGQxRueWN/4x2mvOrlak6dLeiLyZ/fuVrEPzfucL7BET+J0MstmQddRfpSPA=="}},"g-recaptcha-response":n.state.captchaResponse};(t="https://ppv-staticman-fn.azurewebsites.net/api/HttpTrigger",a=r,fetch(t,{method:"POST",mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-functions-key":"hDpQcHz5YTGbcTkzmLAUTJnwu8GS0Tr7VaMHCFnIGkn4Qy6f5lYsTw=="},redirect:"follow",referrer:"no-referrer",body:JSON.stringify(a)}).then((function(e){return e.json()}))).then((function(e){n.setState({success:e.success,submitting:!1})}),(function(){n.setState({submitting:!1,success:!1})}))}},n.handleChange=function(e){var t={};t[e.target.name]=e.target.value,n.setState(t)},n.state={email:null,name:null,content:null,website:null,success:null,submitting:!1,triggered:!1,captchaChecked:!1,captchaResponse:null},n}u(t,e);var n=t.prototype;return n.reset=function(){var e=this;this.setState({email:null,name:null,content:null,website:null,success:null,submitting:!1,triggered:!1,captchaChecked:!1}),document.getElementsByName(this.inputId).forEach((function(e){e.value=""})),this.updateCb=function(){e.renderCaptcha()}},n.componentDidUpdate=function(){this.updateCb&&(this.updateCb(),this.updateCb=null)},n.renderCaptcha=function(){var e=this;i.a.captcha((function(){e.grecaptchaId=grecaptcha.render(e.captchaRef.current,{sitekey:m,callback:e.captchaCallback,"expired-callback":e.expiredCallback,"error-callback":e.errorCallback})}))},n.componentDidMount=function(){this.setState({submitting:!1}),this.renderCaptcha()},n.createGuid=function(){function e(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)}return e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e()},n.render=function(){return r.a.createElement("div",{id:"comments",className:"comment-input-container"},r.a.createElement("div",null,r.a.createElement("h3",null,"Kommentar hinterlassen")),0==this.state.success||null==this.state.success?r.a.createElement("form",{onSubmit:this.onSubmit.bind(this)},r.a.createElement("div",{className:"comment-input-label"},r.a.createElement("label",null,"Kommentar",1!=this.state.triggered||this.state.content?"":r.a.createElement("span",{className:"error-string"},"Bitte geben Sie einen Kommentar ein"),r.a.createElement("textarea",{id:this.inputId,onChange:this.handleChange,name:"content",className:"textarea",rows:3}))),r.a.createElement("div",{className:"meta-input-container"},r.a.createElement("div",{className:"comment-input-label"},r.a.createElement("label",null,"Name *",1!=this.state.triggered||this.state.name?"":r.a.createElement("span",{className:"error-string"},"Bitte geben Sie einen Namen an"),r.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"name",className:"input",type:"text"}))),r.a.createElement("div",{className:"comment-input-label"},r.a.createElement("label",null,"E-Mail (nicht öffentlich) *",1!=this.state.triggered||this.state.email?"":r.a.createElement("span",{className:"error-string"},"Bitte geben Sie eine E-Mail Adresse an"),r.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"email",className:"input",type:"text"}))),r.a.createElement("div",{className:"comment-input-label"},r.a.createElement("label",null,"Website",r.a.createElement("input",{id:this.inputId,onChange:this.handleChange,name:"website",className:"input",type:"text"})))),r.a.createElement("div",null,r.a.createElement("span",{className:"comment-input-label"},r.a.createElement("label",null,"Captcha *",1==this.state.triggered&&0==this.state.captchaChecked?r.a.createElement("span",{className:"error-string"},"Bitte lösen Sie das Captcha"):"",r.a.createElement("div",{ref:this.captchaRef,style:{marginBottom:"5px"},id:this.recaptchaId,className:"g-recaptcha","data-sitekey":m})),r.a.createElement("button",{type:"submit",className:"button is-small "+(1==this.state.submitting?" is-loading":"")},"Absenden"))),null==this.state.success?"":r.a.createElement("div",{style:{marginTop:"5px"}},0==this.state.success?r.a.createElement("span",{className:"error-string"},r.a.createElement(s.r,{style:{position:"relative",top:"1px",marginRight:"10px"}}),r.a.createElement("span",null,"Oops, etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut!")):"")):r.a.createElement("div",null,r.a.createElement("span",{className:"success-string"},r.a.createElement(s.e,{style:{position:"relative",top:"1px",marginRight:"10px"}}),"Vielen Dank! Wir bitten Sie um Verständnis, dass wir Ihren Beitrag erst überprüfen, bevor wir ihn live stellen."),r.a.createElement("div",null,r.a.createElement("button",{className:"button is-small",onClick:this.onReset},"Neuen Kommentar erstellen"))))},t}(r.a.Component),h=function(e){function t(t){var n;return(n=e.call(this,t)||this).toggleInputMask=function(){n.setState({displayForm:!n.state.displayForm})},n.state={displayForm:!1},n}return u(t,e),t.prototype.render=function(){var e=this,n="number"==typeof this.props.comment.timestamp?o.unix(this.props.comment.timestamp).format("DD MMMM, YYYY - HH:mm"):o(this.props.comment.timestamp).format("DD MMMM, YYYY - HH:mm");return r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",{className:"comment-hr"}),r.a.createElement("div",{className:"columns comment-element-container",id:"comment-"+this.props.comment.guid},r.a.createElement("div",{className:"column is-1"},r.a.createElement("div",null,r.a.createElement("img",{className:"comment-avatar",src:"https://www.gravatar.com/avatar/"+c(this.props.comment.email)+"?s=60&d=mp"}))),r.a.createElement("div",{className:"column"},r.a.createElement("div",{className:"comment-header"},r.a.createElement("span",null,this.props.comment.name),r.a.createElement("span",null,r.a.createElement(s.f,null),n)),r.a.createElement("div",null,this.props.comment.content),r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggleInputMask.bind(this),className:"button comment-answer-button"},"Antworten")))),r.a.createElement("div",null,1==this.state.displayForm?r.a.createElement(p,{parent:this.props.comment.guid,slug:this.props.slug}):""),r.a.createElement("div",{className:"comment-children-container"},null!=this.props.comment.children?this.props.comment.children.map((function(n,a){return r.a.createElement("div",{key:a},r.a.createElement(t,{slug:e.props.slug,comment:n}))})):""))},t}(r.a.Component),d=function(e){function t(){return e.apply(this,arguments)||this}return u(t,e),t.prototype.render=function(){var e=this;return this.props.comments.forEach((function(e){(function e(t){var n=1;return null!=t.children&&t.children.forEach((function(t){n+=e(t)})),n})(e)})),r.a.createElement("div",{className:"comment-container"},r.a.createElement("div",{className:"comment-headline"}),r.a.createElement("div",null,r.a.createElement(p,{slug:this.props.slug,parent:null})),r.a.createElement("div",null,this.props.comments.map((function(t,n){return r.a.createElement("div",{key:n},r.a.createElement(h,{slug:e.props.slug,comment:t}))}))))},t}(r.a.Component)},aCH8:function(e,t,n){var a,r,s,i,o;n("a1Th"),n("h7Nl"),n("Btvt"),n("LK8F"),a=n("ANhw"),r=n("mmNF").utf8,s=n("BEtg"),i=n("mmNF").bin,(o=function e(t,n){t.constructor==String?t=n&&"binary"===n.encoding?i.stringToBytes(t):r.stringToBytes(t):s(t)?t=Array.prototype.slice.call(t,0):Array.isArray(t)||(t=t.toString());for(var o=a.bytesToWords(t),c=8*t.length,l=1732584193,u=-271733879,m=-1732584194,p=271733878,h=0;h<o.length;h++)o[h]=16711935&(o[h]<<8|o[h]>>>24)|4278255360&(o[h]<<24|o[h]>>>8);o[c>>>5]|=128<<c%32,o[14+(c+64>>>9<<4)]=c;var d=e._ff,f=e._gg,g=e._hh,v=e._ii;for(h=0;h<o.length;h+=16){var E=l,y=u,b=m,N=p;l=d(l,u,m,p,o[h+0],7,-680876936),p=d(p,l,u,m,o[h+1],12,-389564586),m=d(m,p,l,u,o[h+2],17,606105819),u=d(u,m,p,l,o[h+3],22,-1044525330),l=d(l,u,m,p,o[h+4],7,-176418897),p=d(p,l,u,m,o[h+5],12,1200080426),m=d(m,p,l,u,o[h+6],17,-1473231341),u=d(u,m,p,l,o[h+7],22,-45705983),l=d(l,u,m,p,o[h+8],7,1770035416),p=d(p,l,u,m,o[h+9],12,-1958414417),m=d(m,p,l,u,o[h+10],17,-42063),u=d(u,m,p,l,o[h+11],22,-1990404162),l=d(l,u,m,p,o[h+12],7,1804603682),p=d(p,l,u,m,o[h+13],12,-40341101),m=d(m,p,l,u,o[h+14],17,-1502002290),l=f(l,u=d(u,m,p,l,o[h+15],22,1236535329),m,p,o[h+1],5,-165796510),p=f(p,l,u,m,o[h+6],9,-1069501632),m=f(m,p,l,u,o[h+11],14,643717713),u=f(u,m,p,l,o[h+0],20,-373897302),l=f(l,u,m,p,o[h+5],5,-701558691),p=f(p,l,u,m,o[h+10],9,38016083),m=f(m,p,l,u,o[h+15],14,-660478335),u=f(u,m,p,l,o[h+4],20,-405537848),l=f(l,u,m,p,o[h+9],5,568446438),p=f(p,l,u,m,o[h+14],9,-1019803690),m=f(m,p,l,u,o[h+3],14,-187363961),u=f(u,m,p,l,o[h+8],20,1163531501),l=f(l,u,m,p,o[h+13],5,-1444681467),p=f(p,l,u,m,o[h+2],9,-51403784),m=f(m,p,l,u,o[h+7],14,1735328473),l=g(l,u=f(u,m,p,l,o[h+12],20,-1926607734),m,p,o[h+5],4,-378558),p=g(p,l,u,m,o[h+8],11,-2022574463),m=g(m,p,l,u,o[h+11],16,1839030562),u=g(u,m,p,l,o[h+14],23,-35309556),l=g(l,u,m,p,o[h+1],4,-1530992060),p=g(p,l,u,m,o[h+4],11,1272893353),m=g(m,p,l,u,o[h+7],16,-155497632),u=g(u,m,p,l,o[h+10],23,-1094730640),l=g(l,u,m,p,o[h+13],4,681279174),p=g(p,l,u,m,o[h+0],11,-358537222),m=g(m,p,l,u,o[h+3],16,-722521979),u=g(u,m,p,l,o[h+6],23,76029189),l=g(l,u,m,p,o[h+9],4,-640364487),p=g(p,l,u,m,o[h+12],11,-421815835),m=g(m,p,l,u,o[h+15],16,530742520),l=v(l,u=g(u,m,p,l,o[h+2],23,-995338651),m,p,o[h+0],6,-198630844),p=v(p,l,u,m,o[h+7],10,1126891415),m=v(m,p,l,u,o[h+14],15,-1416354905),u=v(u,m,p,l,o[h+5],21,-57434055),l=v(l,u,m,p,o[h+12],6,1700485571),p=v(p,l,u,m,o[h+3],10,-1894986606),m=v(m,p,l,u,o[h+10],15,-1051523),u=v(u,m,p,l,o[h+1],21,-2054922799),l=v(l,u,m,p,o[h+8],6,1873313359),p=v(p,l,u,m,o[h+15],10,-30611744),m=v(m,p,l,u,o[h+6],15,-1560198380),u=v(u,m,p,l,o[h+13],21,1309151649),l=v(l,u,m,p,o[h+4],6,-145523070),p=v(p,l,u,m,o[h+11],10,-1120210379),m=v(m,p,l,u,o[h+2],15,718787259),u=v(u,m,p,l,o[h+9],21,-343485551),l=l+E>>>0,u=u+y>>>0,m=m+b>>>0,p=p+N>>>0}return a.endian([l,u,m,p])})._ff=function(e,t,n,a,r,s,i){var o=e+(t&n|~t&a)+(r>>>0)+i;return(o<<s|o>>>32-s)+t},o._gg=function(e,t,n,a,r,s,i){var o=e+(t&a|n&~a)+(r>>>0)+i;return(o<<s|o>>>32-s)+t},o._hh=function(e,t,n,a,r,s,i){var o=e+(t^n^a)+(r>>>0)+i;return(o<<s|o>>>32-s)+t},o._ii=function(e,t,n,a,r,s,i){var o=e+(n^(t|~a))+(r>>>0)+i;return(o<<s|o>>>32-s)+t},o._blocksize=16,o._digestsize=16,e.exports=function(e,t){if(null==e)throw new Error("Illegal argument "+e);var n=a.wordsToBytes(o(e,t));return t&&t.asBytes?n:t&&t.asString?i.bytesToString(n):a.bytesToHex(n)}},mmNF:function(e,t){var n={utf8:{stringToBytes:function(e){return n.bin.stringToBytes(unescape(encodeURIComponent(e)))},bytesToString:function(e){return decodeURIComponent(escape(n.bin.bytesToString(e)))}},bin:{stringToBytes:function(e){for(var t=[],n=0;n<e.length;n++)t.push(255&e.charCodeAt(n));return t},bytesToString:function(e){for(var t=[],n=0;n<e.length;n++)t.push(String.fromCharCode(e[n]));return t.join("")}}};e.exports=n},qTfJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a);n("WsyM");var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"contentfooter-container"},r.a.createElement("hr",null),this.props.children))},a}(r.a.Component)},sDiU:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("q1tI"),r=n.n(a),s=n("yuLm"),i=n("cUxJ"),o=n("ma3e");function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var l=function(e){function t(){return e.apply(this,arguments)||this}return c(t,e),t.prototype.render=function(){return r.a.createElement("div",{className:"subscriber-content-container"},r.a.createElement(i.a,{content:this.props.content}))},t}(r.a.Component),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).handler=function(e){n.setState({subscribed:e})},n.onClick=function(){s.a.openForm("subscriber-section")},n.state={subscribed:!1},n}c(t,e);var n=t.prototype;return n.componentDidMount=function(){s.a.registerSubscriptionHandler(this.handler)},n.componentWillUnmount=function(){s.a.unregisterSubscriptionHandler(this.handler)},n.render=function(){return r.a.createElement("div",{className:"subscribe-component-container"},r.a.createElement("div",{id:"sub"},r.a.createElement("a",{onClick:this.onClick},"Bitte melden Sie sich für den Newsletter an, um die Downloads zu sehen.")))},t}(r.a.Component),m=function(e){function t(t){var n;return(n=e.call(this,t)||this).handler=function(e,t){n.setState({subscribed:e}),t&&document.getElementById(t).focus()},n.state={subscribed:s.a.subscribed},n}c(t,e);var n=t.prototype;return n.componentDidMount=function(){s.a.registerSubscriptionHandler(this.handler)},n.componentWillUnmount=function(){s.a.unregisterSubscriptionHandler(this.handler)},n.render=function(){return r.a.createElement("div",{id:"subscriber-section",className:"subscriber-footer-container"},r.a.createElement("h2",null,r.a.createElement(o.g,null)," Downloads "),r.a.createElement("div",null,1==this.state.subscribed?r.a.createElement(l,{content:this.props.content}):r.a.createElement(u,null)))},t}(r.a.Component)},zYU4:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n.n(a);n("XdKL");var s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",{className:"sidebar-component"},r.a.createElement("div",{className:"sidebar-header"},"Artikel mit Google durchsuchen"),r.a.createElement("div",{className:"sidebar-content"},r.a.createElement("div",{className:"sidebar-content-pad"},r.a.createElement("div",{style:{marginBottom:"5px"}},r.a.createElement("form",{action:"https://www.google.com/search",className:"searchform",method:"get",name:"searchform",target:"_blank"},r.a.createElement("input",{name:"sitesearch",type:"hidden",value:"powerpivotinsights.de"}),r.a.createElement("div",{style:{textAlign:"center",marginTop:"5px"}},r.a.createElement("input",{autoComplete:"on",className:"form-control search",name:"q",placeholder:"",required:!0,type:"text"})),r.a.createElement("div",{style:{textAlign:"center",marginTop:"5px"}},r.a.createElement("button",{className:"button action-button",type:"submit"},"Suchen")))))))},a}(r.a.Component)}}]);
//# sourceMappingURL=component---src-pagecomponents-home-home-tsx-d3ed5eb3710de610aa3b.js.map