(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/brad.6ea5a92d.jpg"},18:function(e,t,a){e.exports=a(35)},24:function(e,t,a){},26:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),i=a.n(r),c=(a(24),a(6)),o=a(7),s=a(9),m=a(8),u=a(10),d=(a(26),a(29),a(31)),E=a(37),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"doHandle",value:function(){this.props.toggleDropdown()}},{key:"render",value:function(){var e=this,t=this.props.pageHandler;return l.a.createElement("div",{className:"site-head"},l.a.createElement("div",{className:"drop-menu"},l.a.createElement(d.a,{id:"home",className:"link",to:"/",onClick:function(){return t("/home")}},l.a.createElement("h1",null,"BRAD VATNE")),l.a.createElement("button",{onClick:function(){return e.doHandle()}},this.props.dropdown?l.a.createElement("i",{className:"fas fa-angle-up"}):l.a.createElement("i",{className:"fas fa-angle-down"}))),l.a.createElement("div",{className:"large-screen"},l.a.createElement("ul",{className:"navlist",id:"navlist"},l.a.createElement("li",{className:"right"},l.a.createElement(d.a,{id:"home",className:"link",to:"/",onClick:function(){return t("/home")}},l.a.createElement("h1",null,"BRAD VATNE"))),l.a.createElement("li",{className:"right"},l.a.createElement(E.a,{id:"profile",className:"link",to:"/profile",onClick:function(){return t("/profile")}},"PROFILE")),l.a.createElement("li",{className:"right"},l.a.createElement(E.a,{className:"link",to:"/education",onClick:function(){return t("/education")}},"EDUCATION")),l.a.createElement("li",{className:"right"},l.a.createElement(E.a,{className:"link",to:"/employment",onClick:function(){return t("/employment")}},"EMPLOYMENT")),l.a.createElement("li",{className:"right"},l.a.createElement(E.a,{className:"link",to:"/abilities",onClick:function(){return t("/abilities")}},"ABILITIES")),l.a.createElement("li",{className:"right"},l.a.createElement(E.a,{className:"link",to:"/contact",onClick:function(){return t("/contact")}},"SOCIAL")))))}}]),t}(n.Component),h=a(38),g=a(39),f=a(36),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={items:[],isLoaded:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/bradvatne/events/public").then(function(e){return e.json()}).then(function(t){e.setState({isLoaded:!0,items:t})})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;return t?l.a.createElement("div",null,l.a.createElement("p",null,"This is still under construction, but its basic purpose is to demonstrate I can make an API call.",l.a.createElement("br",null),"I performed a '",a[0].type,"' on '",a[0].repo.name,"' on the date '",a[0].created_at.slice(0,10),"'")):l.a.createElement("div",null,"Loading...")}}]),t}(n.Component),v=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"intro fadeIn"},l.a.createElement("hr",null),l.a.createElement("h3",null,"WELCOME TO MY INTERACTIVE RESUME",l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("p",null,"I designed and built this site myself with HTML, CSS, and React.js."," ",l.a.createElement("br",null),"If you're a prospective employer, I'm honored and thankful that you're taking the time to view my work. ",l.a.createElement("br",null),"This project has been an incredible learning experience and it is my absolute pleasure to share it with you!",l.a.createElement("br",null)),l.a.createElement("hr",null),l.a.createElement("h3",null,"Github Feed"),l.a.createElement("br",null),l.a.createElement(b,null),l.a.createElement("hr",null),l.a.createElement("h3",null,"AE Test"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("a",{href:"https://brad-dev.theappreciationengine.com/brand/wyld-stallyns/register/237?return=https://bradvatne.github.io/interactive-resume/"},"Click this redirect link")),l.a.createElement("hr",null),l.a.createElement("h3",null,"Social Login AE Test"),l.a.createElement("ul",null," ",l.a.createElement("li",null,l.a.createElement("a",{href:"#","data-ae-register-link":"facebook"},"Register with Facebook V2"))," ",l.a.createElement("li",null,l.a.createElement("a",{href:"#","data-ae-register-link":"twitter"},"Register with Twitter V2"))," ",l.a.createElement("li",null,l.a.createElement("a",{href:"#","data-ae-register-link":"spotify"},"Register with Spotify V2"))))}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).state={},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"doHandle",value:function(e){this.props.toggleDropdown(),void 0!==e&&this.props.pageHandler(e)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"dropped"},l.a.createElement("ul",{className:"navlist",id:"navlist"},l.a.createElement("li",{className:"right"},l.a.createElement(d.a,{id:"home",className:"link",to:"/",onClick:function(){return e.doHandle("/home")}},"HOME")),l.a.createElement("li",{className:"right"},l.a.createElement(d.a,{id:"profile",className:"link",to:"/profile",onClick:function(){return e.doHandle("/profile")}},"PROFILE")),l.a.createElement("li",{className:"right"},l.a.createElement(d.a,{className:"link",to:"/education",onClick:function(){return e.doHandle("/education")}},"EDUCATION")),l.a.createElement("li",{className:"right"},l.a.createElement(d.a,{className:"link",to:"/employment",onClick:function(){return e.doHandle("/employment")}},"EMPLOYMENT")),l.a.createElement("li",{className:"right"},l.a.createElement(d.a,{className:"link",to:"/abilities",onClick:function(){return e.doHandle("/abilities")}},"ABILITIES")),l.a.createElement("li",{className:"right"},l.a.createElement(d.a,{className:"link",to:"/contact",onClick:function(){return e.doHandle("/contact")}},"SOCIAL"))))}}]),t}(n.Component),N=a(5),w=function(e){var t="https://"+{url:e}+'target="_blank" rel="noopener noreferrer';return l.a.createElement("a",{href:t},l.a.createElement("i",{className:"fas fa-award",style:{fontSize:"3rem"}}))},k=function(e){return l.a.createElement(n.Fragment,null,l.a.createElement("div",{className:"experiences-box"},function(e){return l.a.createElement("div",{className:"experiences-title"},l.a.createElement("h3",null,e.name),void 0!==e.date?l.a.createElement("p",null,e.date):l.a.createElement("p",null,w(e.url)))}(e),function(e){return l.a.createElement("div",{className:"experiences-description"},l.a.createElement("h4",null,e.spec),l.a.createElement("p",null,e.description))}(e)),l.a.createElement("hr",null))},C=function(e){return l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h3",null,"TOOLS/CONCEPTS")),l.a.createElement("th",null," ")),l.a.createElement("tr",null,l.a.createElement("td",null,"Github/Git"),l.a.createElement("td",null,"NPM")),l.a.createElement("tr",null,l.a.createElement("td",null,"Axios"),l.a.createElement("td",null,"AJAX")),l.a.createElement("tr",null,l.a.createElement("td",null,"SQLlite"),l.a.createElement("td",null,"Django")),l.a.createElement("tr",null,l.a.createElement("td",null,"Redux"),l.a.createElement("td",null,"React-Router")),l.a.createElement("tr",null,l.a.createElement("td",null,"Component Lifecycle"),l.a.createElement("td",null,"Flexbox/Grid")),l.a.createElement("tr",null,l.a.createElement("td",null,"Functional Programs"),l.a.createElement("td",null,"OOP's"))))},I=N.education,O=I.uvic,A=I.fcc,T=I.tylerm,j=function(){return l.a.createElement("div",{className:"fadeIn"},l.a.createElement("hr",null),k(O),k(A),k(T))},S=N.employment,L=S.movement,R=S.independent,P=S.cov,D=function(){return l.a.createElement("div",{className:"fadeIn"},l.a.createElement("hr",null),k(L),k(R),k(P))},M=a(17),H=a.n(M),x=function(){return l.a.createElement("div",{className:"fadeIn"},l.a.createElement("hr",null),l.a.createElement("div",{className:"aboutme-boxes"},l.a.createElement("div",{className:"aboutme-box1"},l.a.createElement("br",null),l.a.createElement("p",null,"Brad Vatne is a full-time student at the University of Victoria, graduating in Fall of 2020 with a Bachelor of Science in Computer Science and Psychology as a combined major.",l.a.createElement("br",null),l.a.createElement("br",null)," In his spare time, he enjoys trying out new restaurants with his girlfriend, reading, running, hiking, practicing yoga, listening to podcasts, and writing code of all sorts. ",l.a.createElement("br",null),l.a.createElement("br",null),"Throughout his life, he has carried a strong passion for creative expression. He finds that software development combines an opportunity to release his creative energy while simultaneously challenging himself intellectually. Naturally, he has fallen in love with it. ",l.a.createElement("br",null),l.a.createElement("br",null),"He has chosen Javascript as his main language because of its versatility and wide range of libraries, especially React. In the future, he has plans to learn cross-platform libraries like React-Native and Electron.")),l.a.createElement("div",{className:"aboutme-box2"},l.a.createElement("img",{src:H.a,alt:"Brad's Portrait"}))))},F=N.social,V=[F.email,F.linkedin,F.github,F.youtube],B=function(){return l.a.createElement("div",{className:"fadeIn"},l.a.createElement("hr",null),l.a.createElement("div",{className:"contact-boxes"},V.map(function(e){return l.a.createElement("a",{href:e.url},l.a.createElement("i",{class:e.class}))})))},G=function(){return l.a.createElement("div",{className:"fadeIn"},l.a.createElement("hr",null),l.a.createElement("div",{className:"abilities-container"},function(){var e=Object.keys(N.knowledge.languages),t=Object.values(N.knowledge.languages).map(function(e){return Array.from({length:e},function(e){return l.a.createElement("i",{key:e,className:"fa fa-star","aria-hidden":"true"})})}),a=e.map(function(e,a){return l.a.createElement("tr",{key:"language"},l.a.createElement("td",null,e),l.a.createElement("td",null,t[a]))});return l.a.createElement("div",{className:"abilities-container"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("h3",null,"LANGUAGE")),l.a.createElement("th",null,l.a.createElement("h3",null,"LEVEL"))),a)),C,l.a.createElement("hr",null))}(N.knowledge.languages),C()))},J=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).pageHandler=function(e,t){a.setState({currentPage:e,nextPage:t})},a.toggleDropdown=function(){a.setState({dropdown:!a.state.dropdown})},a.state={currentPage:"/home",dropdown:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app"},l.a.createElement("div",{className:"layer"},l.a.createElement("div",{className:"component"},l.a.createElement(h.a,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",null,l.a.createElement(p,{pageHandler:this.pageHandler,toggleDropdown:this.toggleDropdown,dropdown:this.state.dropdown})),this.state.dropdown?l.a.createElement(y,{pageHandler:this.pageHandler,toggleDropdown:this.toggleDropdown,dropdown:this.state.dropdown}):null,l.a.createElement(g.a,null,l.a.createElement(f.a,{exact:!0,path:"/",component:v}),l.a.createElement(f.a,{exact:!0,path:"/interactive-resume",component:v}),l.a.createElement(f.a,{path:"/menu",component:y}),l.a.createElement(f.a,{path:"/profile",component:x}),l.a.createElement(f.a,{path:"/education",component:j}),l.a.createElement(f.a,{path:"/employment",component:D}),l.a.createElement(f.a,{path:"/abilities",component:G}),l.a.createElement(f.a,{path:"/contact",component:B})))))))}}]),t}(n.Component);i.a.render(l.a.createElement(h.a,null,l.a.createElement(J,null)),document.getElementById("root"))},5:function(e){e.exports={education:{uvic:{name:"University of Victoria",date:"Graduating Fall 2020",spec:"BACHELOR OF SCIENCE - COMPUTER SCIENCE AND PSYCHOLOGY (COMBINED)",description:"Excelled in classes such as: calculus, physics, organic chemistry, biology, computer science, and psychology."},fcc:{name:"FreeCodeCamp",date:"September 2018",url:"freecodecamp.org/certification/scradley/responsive-web-design",spec:"RESPONSIVE WEB DESIGN",description:"Basic HTML and HTML5, CSS, Applied Visual Design, Applied Accesibility, Responsive Web Design Principles, CSS Flexbox, CSS Grid, Responsive Web Design Projects."},tylerm:{name:"TYLERMCGINNIS.COM",date:"January 2019",url:"tylermcginnis.com/courses/react-fundamentals/",spec:"REACT FUNDAMENTALS",description:"NPM, Webpack4, Babel, Proptypes, Props and State Management, Stateless Functional Components, Component Life Cycle + AJAX, Axios,Promises, API"}},employment:{movement:{name:"MOVEMENT FOOD",date:"Jan 2017 - June 2018",spec:"DIGITAL MARKETER",description:"Handled digital marketing for a local eCommerce website generating over a million dollars yearly revenue. I handled the customer lifecycle with a strategic funnel of web applications. I performed AdWords keyword research and PPC optimization, employed retargeting campaigns with Facebook/Instagram advertising, used MailChimp to convert captured leads and retain customers, and provided general advice in all manners of marketing"},independent:{name:"INDEPENDENT",date:"Dec 2015 - Jun 2018",spec:"FREELANCE DIGITAL MARKETER",description:"Consulted a wide variety of eCommerce businesses with their Facebook advertising optimization. My ability to work independently, meet deadlines, communicate, and provide detailed reports of key-performance indicators were vital skills."},cov:{name:"CITY OF VANCOUVER",date:"April 2014 - Jan 2017",spec:"DIGITAL MARKETER",description:"Handled digital marketing for a local eCommerce website generating over a million dollars yearly revenue. I handled the customer lifecycle with a strategic funnel of web applications. I performed AdWords keyword research and PPC optimization, employed retargeting campaigns with Facebook/Instagram advertising, used MailChimp to convert captured leads and retain customers, and provided general advice in all manners of marketing"}},aboutme:"I'm currently a student at the University of Victoria in beautiful British Columbia. I took a gap in the middle of my degree to work, save money, travel the world, and soul search. During this time, I learned alot about myself and was inspired to head back to school to finish my degree.\\n In my spare time, I enjoy trying out new restaurants with my girlfriend, reading, running, hiking, listening to podcasts, and writing code of all sorts. \\nThroughout my life, I've carried a strong passion for creative expression. Programming combines an opportunity to release my creative energy while simultaneously challenging me intellectually. Naturally, I've fallen in love with it.\\nI have chosen Javascript as my main language because of its versatility and wide range of libraries. At the moment, I am having a lot of fun learning React. In the future I have plans to learn Electron and React Native, because the power of cross-platform code is very appealing to me.",social:{email:{url:"https://www.github.com/notbrad",class:"far fa-envelope"},linkedin:{url:"https://www.linkedin.com/in/bradvatne/",class:"fab fa-linkedin-in"},github:{url:"https://www.github.com/notbrad",class:"fab fa-github"},youtube:{url:"https://www.youtube.com/channel/UCNGyzxKD8MJATTBv_QPaTeg/featured",class:"fab fa-youtube"}},knowledge:{languages:{HTML:4,CSS:4,Javascript:3,React:2,Python:2,Django:2}}}}},[[18,2,1]]]);
//# sourceMappingURL=main.7005e6a3.chunk.js.map