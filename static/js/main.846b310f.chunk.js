(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{20:function(e,t,s){},22:function(e,t,s){},30:function(e,t,s){"use strict";s.r(t);var c=s(0),a=s(1),n=s(11),i=s.n(n),r=(s(20),s(8)),l=s.n(r),o=s(12),j=s(2),d=s(3),h=s(5),b=s(4),m=s(13),u=s.n(m),O=(s(22),function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){if(this.props.data){this.props.data.name;var e=this.props.data.occupation,t=this.props.data.description,s=this.props.data.address.city,a=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}))}return Object(c.jsxs)("header",{id:"home",children:[Object(c.jsxs)("nav",{id:"nav-wrap",children:[Object(c.jsx)("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation",children:"Show navigation"}),Object(c.jsx)("a",{className:"mobile-btn",href:"#home",title:"Hide navigation",children:"Hide navigation"}),Object(c.jsxs)("ul",{id:"nav",className:"nav",children:[Object(c.jsx)("li",{className:"current",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#home",children:"Home"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:"About"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#resume",children:"Resume"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#portfolio",children:"Projects"})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{className:"smoothscroll",href:"#contact",children:"Contact"})})]})]}),Object(c.jsx)("div",{className:"row banner",children:Object(c.jsxs)("div",{className:"banner-text",children:[Object(c.jsx)("h1",{className:"responsive-headline",children:"Hi, I'm Zack Beucler"}),Object(c.jsxs)("h3",{children:["I'm a ",s," based ",Object(c.jsx)("span",{children:e}),". ",t,"."]}),Object(c.jsx)("hr",{}),Object(c.jsx)("ul",{className:"social",children:a})]})}),Object(c.jsx)("p",{className:"scrolldown",children:Object(c.jsx)("a",{className:"smoothscroll",href:"#about",children:Object(c.jsx)("i",{className:"icon-down-circle"})})})]})}}]),s}(a.Component)),p=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.social.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.url,children:Object(c.jsx)("i",{className:e.className})})},e.name)}));return Object(c.jsxs)("footer",{children:[Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"twelve columns",children:Object(c.jsx)("ul",{className:"social-links",children:e})}),Object(c.jsx)("div",{id:"go-top",children:Object(c.jsx)("a",{className:"smoothscroll",title:"Back to Top",href:"#home",children:Object(c.jsx)("i",{className:"icon-up-open"})})})]}),Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("p",{onClick:function(){return navigator.clipboard.writeText("0x4c91498Cfc2449709999b6d0b149f45BC7830563")&&alert("My MetaMask wallet address has been saved to your keyboard! Thanks for the Crypto!")},children:["Send me Crypto! ",Object(c.jsx)("i",{className:"fab fa-ethereum"})]})})]})}}]),s}(a.Component),x=s.p+"static/media/zbeucler-resume.42cd147d.pdf",f=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t="images/"+this.props.data.image,s=this.props.data.bio,a=this.props.data.address.city,n=this.props.data.address.state,i=this.props.data.phone,r=this.props.data.email;return Object(c.jsx)("section",{id:"about",children:Object(c.jsxs)("div",{className:"row",children:[Object(c.jsx)("div",{className:"three columns",children:Object(c.jsx)("img",{className:"profile-pic",src:t,alt:"Zack Beucler Profile Pic"})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("h2",{children:"About Me"}),Object(c.jsx)("p",{children:s}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"columns contact-details",children:[Object(c.jsx)("h2",{children:"Contact Details"}),Object(c.jsxs)("p",{className:"address",children:[Object(c.jsx)("span",{children:e}),Object(c.jsx)("br",{}),Object(c.jsxs)("span",{children:[a," ",n]}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:i}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:r})]})]}),Object(c.jsx)("div",{className:"columns download",children:Object(c.jsx)("p",{children:Object(c.jsxs)("a",{href:x,target:"_blank",rel:"noreferrer",className:"button",children:[Object(c.jsx)("i",{className:"far fa-file-alt"}),"View Resume"]})})})]})]})]})})}}]),s}(a.Component);s(23).config();var v=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.skillmessage,t=this.props.data.education.map((function(e){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.school}),Object(c.jsxs)("p",{className:"info",children:[e.degree," ",Object(c.jsx)("span",{children:"\u2022"}),Object(c.jsx)("em",{className:"date",children:e.graduated})]}),Object(c.jsx)("p",{children:e.description})]},e.school)})),s=this.props.data.work.map((function(e){return""===e.companyURL?Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:e.company}),Object(c.jsxs)("p",{className:"info",children:[e.title,Object(c.jsx)("span",{children:"\u2022"})," ",Object(c.jsx)("em",{className:"date",children:e.years})]}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:"Technologies and languages utilized"})}),Object(c.jsx)("p",{children:e.techUsed})]},e.company):Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:Object(c.jsx)("a",{href:e.companyURL,target:"_blank",rel:"noreferrer",children:e.company})}),Object(c.jsxs)("p",{className:"info",children:[e.title,Object(c.jsx)("span",{children:"\u2022"})," ",Object(c.jsx)("em",{className:"date",children:e.years})]}),Object(c.jsx)("p",{children:e.description}),Object(c.jsx)("p",{className:"info",children:Object(c.jsx)("strong",{children:"Technologies and languages utilized"})}),Object(c.jsx)("p",{children:e.techUsed})]},e.company)})),a=this.props.data.skills.map((function(e){var t="bar-expand "+e.name.toLowerCase();return""===e.framework?Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{width:e.level},className:t}),Object(c.jsx)("em",{children:e.name})]},e.name):Object(c.jsxs)("li",{children:[Object(c.jsx)("span",{style:{width:e.level,backgroundColor:"rgb(102, 51, 153)"},className:t}),Object(c.jsx)("em",{children:e.name})]},e.name)}));return Object(c.jsxs)("section",{id:"resume",children:[Object(c.jsxs)("div",{className:"row education",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Education"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:Object(c.jsx)("div",{className:"row item",children:Object(c.jsx)("div",{className:"twelve columns",children:t})})})]}),Object(c.jsxs)("div",{className:"row work",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Work"})})}),Object(c.jsx)("div",{className:"nine columns main-col",children:s})]}),Object(c.jsxs)("div",{className:"row skill",children:[Object(c.jsx)("div",{className:"three columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Skills"})})}),Object(c.jsxs)("div",{className:"nine columns main-col",children:[Object(c.jsx)("p",{children:e}),Object(c.jsx)("div",{className:"bars",children:Object(c.jsx)("ul",{className:"skills",children:a})})]})]})]})}}]),s}(a.Component),N=s(14),g=s.n(N),w=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.name,t=this.props.data.address.city,s=this.props.data.address.state,a=this.props.data.phone,n=this.props.data.email,i=this.props.data.contactmessage;function r(){document.getElementById("contactForm").reset()}return Object(c.jsxs)("section",{id:"contact",children:[Object(c.jsxs)("div",{className:"row section-head",children:[Object(c.jsx)("div",{className:"two columns header-col",children:Object(c.jsx)("h1",{children:Object(c.jsx)("span",{children:"Get In Touch."})})}),Object(c.jsx)("div",{className:"ten columns",children:Object(c.jsx)("p",{className:"lead",children:i})})]}),Object(c.jsxs)("div",{className:"row",children:[Object(c.jsxs)("div",{className:"eight columns",children:[Object(c.jsx)("form",{action:"",method:"post",id:"contactForm",name:"contactForm",onSubmit:function(e){e.preventDefault(),g.a.sendForm(window.env.REACT_APP_EMAILJS_SERVICE_ID,window.env.REACT_APP_EMAILJS_TEMPLATE_ID,e.target,window.env.REACT_APP_EMAILJS_USER_ID).then((function(e){alert("Message sent! Thank you!"),console.log(e.text),console.log(window.env.REACT_APP_EMAILJS_SERVICE_ID+" "+window.env.REACT_APP_EMAILJS_TEMPLATE_ID+" "+window.env.REACT_APP_EMAILJS_USER_ID),r()}),(function(e){alert("Something went wrong! Please email me at zbeucler@conncoll.edu to let me know. Thank you!"),console.log(e.text),r()}))},children:Object(c.jsxs)("fieldset",{children:[Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactName",children:["Name ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactName",name:"contactName",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"contactEmail",children:["Email ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactEmail",name:"contactEmail",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("label",{htmlFor:"contactSubject",children:"Subject"}),Object(c.jsx)("input",{type:"text",defaultValue:"",size:"35",id:"contactSubject",name:"contactSubject",onChange:this.handleChange})]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("label",{htmlFor:"message",children:["Message ",Object(c.jsx)("span",{className:"required",children:"*"})]}),Object(c.jsx)("textarea",{cols:"50",rows:"15",id:"contactMessage",name:"message"})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"submit",children:"Submit"}),Object(c.jsx)("span",{id:"image-loader",children:Object(c.jsx)("img",{alt:"",src:"images/loader.gif"})})]})]})}),Object(c.jsx)("div",{id:"message-warning",children:"Error!"}),Object(c.jsxs)("div",{id:"message-success",children:[Object(c.jsx)("i",{className:"fa fa-check"}),"Your message was sent, thank you!",Object(c.jsx)("br",{})]})]}),Object(c.jsx)("aside",{className:"four columns footer-widgets",children:Object(c.jsxs)("div",{className:"widget widget_contact",children:[Object(c.jsx)("h4",{children:"Contact Information"}),Object(c.jsxs)("p",{className:"address",children:[e,Object(c.jsx)("br",{}),t,", ",s,Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:a}),Object(c.jsx)("br",{}),Object(c.jsx)("span",{children:n})]})]})})]})]})}}]),s}(a.Component),k=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(){return Object(j.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"render",value:function(){if(this.props.data)var e=this.props.data.projects.map((function(e){var t="images/portfolio/"+e.image;return Object(c.jsx)("div",{className:"columns portfolio-item",children:Object(c.jsx)("div",{className:"item-wrap",children:Object(c.jsxs)("a",{target:"_blank",href:e.url,title:e.category,rel:"noreferrer",children:[Object(c.jsx)("img",{alt:e.title,src:t}),Object(c.jsx)("div",{className:"overlay",children:Object(c.jsx)("div",{className:"portfolio-item-meta",children:Object(c.jsx)("h5",{children:e.title})})})]})})},e.title)}));return Object(c.jsx)("section",{id:"portfolio",children:Object(c.jsx)("div",{className:"row",children:Object(c.jsxs)("div",{className:"twelve columns collapsed",children:[Object(c.jsx)("h1",{children:"Check Out Some of My Projects."}),Object(c.jsx)("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf",children:e})]})})})}}]),s}(a.Component),y=s(9),C=function(e){Object(h.a)(s,e);var t=Object(b.a)(s);function s(e){var c;return Object(j.a)(this,s),(c=t.call(this,e)).callBackendAPI=Object(o.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/express_backend");case 2:return t=e.sent,e.next=5,t.json();case 5:if(s=e.sent,200===t.status){e.next=8;break}throw Error(s.message);case 8:return e.abrupt("return",s);case 9:case"end":return e.stop()}}),e)}))),c.state={foo:"bar",resumeData:{},data:"idk"},c}return Object(d.a)(s,[{key:"getResumeData",value:function(){u.a.ajax({url:"/resumeData.json",dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,s){console.log(s),alert(s)}})}},{key:"componentDidMount",value:function(){var e;this.getResumeData(),e="UA-188784392-1",y.a.initialize(e),y.a.pageview(window.location.pathname+window.location.search)}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(O,{data:this.state.resumeData.main}),Object(c.jsx)(f,{data:this.state.resumeData.main}),Object(c.jsx)(v,{data:this.state.resumeData.resume}),Object(c.jsx)(k,{data:this.state.resumeData.portfolio}),Object(c.jsx)(w,{data:this.state.resumeData.main}),Object(c.jsx)(p,{data:this.state.resumeData.main})]})}}]),s}(a.Component),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function _(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(Object(c.jsx)(C,{}),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/portfolio",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/portfolio","/service-worker.js");E?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):_(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):_(e)}))}}()}},[[30,1,2]]]);
//# sourceMappingURL=main.846b310f.chunk.js.map