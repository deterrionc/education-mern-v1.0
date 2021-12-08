(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{79:function(e,t,c){},80:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(20),r=c.n(n),i=c(7),l=c(5),o=c(6),d=c.n(o),A=c(13),j=c(15),h=c(4),u=c(23),b=c(2),m=c(82),g="SET_ALERT",x="REMOVE_ALERT",O="REGISTER_SUCCESS",p="USER_LOADED",f="AUTH_ERROR",B="LOGIN_SUCCESS",E="LOGOUT",C="ACCOUNT_DELETED",N="CURRENT_PAGE_SET",w="SET_PAGE_LOADING",v=function(e,t){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5e3;return function(s){var a=Object(m.a)();s({type:g,payload:{msg:e,alertType:t,id:a}}),setTimeout((function(){return s({type:x,payload:a})}),c)}},I=c(39),Q=c.n(I),y=c(16),F=c(40),S=c(41),G=c(45),k=[];var D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case g:return[].concat(Object(G.a)(e),[s]);case x:return e.filter((function(e){return e.id!==s}));default:return e}},U={currentPage:"dashboard",pageIsLoading:!1,token:localStorage.getItem("token"),isAuthenticated:null,loading:!0,user:null};var R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,c=t.type,s=t.payload;switch(c){case N:return Object(h.a)(Object(h.a)({},e),{},{currentPage:s});case w:return Object(h.a)(Object(h.a)({},e),{},{pageIsLoading:s});case p:return Object(h.a)(Object(h.a)({},e),{},{isAuthenticated:!0,loading:!1,user:s});case O:case B:return Object(h.a)(Object(h.a)(Object(h.a)({},e),s),{},{isAuthenticated:!0,loading:!1});case C:case f:case E:return Object(h.a)(Object(h.a)({},e),{},{token:null,isAuthenticated:!1,loading:!1,user:null});default:return e}},Y=Object(y.combineReducers)({alert:D,auth:R}),M=function(e){e?(P.defaults.headers.common["x-auth-token"]=e,localStorage.setItem("token",e)):(delete P.defaults.headers.common["x-auth-token"],localStorage.removeItem("token"))},H=[S.a],W=Object(y.createStore)(Y,{},Object(F.composeWithDevTools)(y.applyMiddleware.apply(void 0,H))),L=W.getState();W.subscribe((function(){var e=L;if(L=W.getState(),e.auth.token!==L.auth.token){var t=L.auth.token;M(t)}}));var T=W,J=Q.a.create({baseURL:"/api",headers:{"Content-Type":"application/json"}});J.interceptors.response.use((function(e){return e}),(function(e){return 401===e.response.status&&T.dispatch({type:E}),Promise.reject(e)}));var P=J,K=function(e){return function(){var t=Object(A.a)(d.a.mark((function t(c){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:c({type:N,payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},Z=function(){return function(){var e=Object(A.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.get("/auth");case 3:c=e.sent,t({type:p,payload:c.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),t({type:f});case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},q=function(){return{type:E}},V=c(0),z=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{setAlert:v,register:function(e){return function(){var t=Object(A.a)(d.a.mark((function t(c){var s,a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.post("/users",e);case 3:s=t.sent,c({type:O,payload:s.data}),c(Z()),t.next=13;break;case 8:t.prev=8,t.t0=t.catch(0),(a=t.t0.response.data.errors)&&a.forEach((function(e){return c(v(e.msg,"danger"))})),c({type:"REGISTER_FAIL"});case 13:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.setAlert,c=e.register,a=e.isAuthenticated,n=Object(s.useState)({name:"",email:"",password:"",password2:""}),r=Object(u.a)(n,2),o=r[0],b=r[1],m=o.name,g=o.email,x=o.password,O=o.password2,p=function(e){return b(Object(h.a)(Object(h.a)({},o),{},Object(j.a)({},e.target.name,e.target.value)))},f=function(){var e=Object(A.a)(d.a.mark((function e(s){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s.preventDefault(),x!==O?t("Passwords do not match","danger"):c({name:m,email:g,password:x});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return a?Object(V.jsx)(l.a,{to:"/dashboard"}):Object(V.jsxs)(s.Fragment,{children:[Object(V.jsx)("h1",{className:"large text-primary",children:"Sign Up"}),Object(V.jsxs)("p",{className:"lead",children:[Object(V.jsx)("i",{className:"fas fa-user"})," Create Your Account"]}),Object(V.jsxs)("form",{className:"form",onSubmit:f,children:[Object(V.jsx)("div",{className:"form-group",children:Object(V.jsx)("input",{type:"text",placeholder:"Name",name:"name",value:m,onChange:p})}),Object(V.jsxs)("div",{className:"form-group",children:[Object(V.jsx)("input",{type:"email",placeholder:"Email Address",name:"email",value:g,onChange:p}),Object(V.jsx)("small",{className:"form-text",children:"This site uses Gravatar so if you want a profile image, use a Gravatar email"})]}),Object(V.jsx)("div",{className:"form-group",children:Object(V.jsx)("input",{type:"password",placeholder:"Password",name:"password",value:x,onChange:p})}),Object(V.jsx)("div",{className:"form-group",children:Object(V.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",value:O,onChange:p})}),Object(V.jsx)("input",{type:"submit",className:"btn btn-primary",value:"Register"})]}),Object(V.jsxs)("p",{className:"my-1",children:["Already have an account? ",Object(V.jsx)(i.b,{to:"/login",children:"Sign In"})]})]})})),X=c.p+"static/media/logo.d6117b74.PNG",_=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated}}),{login:function(e,t){return function(){var c=Object(A.a)(d.a.mark((function c(s){var a,n,r;return d.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return a={email:e,password:t},c.prev=1,c.next=4,P.post("/auth",a);case 4:n=c.sent,s({type:B,payload:n.data}),s(Z()),c.next=14;break;case 9:c.prev=9,c.t0=c.catch(1),(r=c.t0.response.data.errors)&&r.forEach((function(e){return s(v(e.msg,"danger"))})),s({type:"LOGIN_FAIL"});case 14:case"end":return c.stop()}}),c,null,[[1,9]])})));return function(e){return c.apply(this,arguments)}}()}})((function(e){var t=e.login,c=e.isAuthenticated,s=a.a.useState({email:"",password:""}),n=Object(u.a)(s,2),r=n[0],o=n[1],d=r.email,A=r.password,b=function(e){return o(Object(h.a)(Object(h.a)({},r),{},Object(j.a)({},e.target.name,e.target.value)))};return c?Object(V.jsx)(l.a,{to:"/dashboard"}):Object(V.jsxs)("div",{className:"container-fluid bg-login",children:[Object(V.jsxs)("div",{className:"row",children:[Object(V.jsx)("div",{className:"col-md-2"}),Object(V.jsxs)("div",{className:"col-md-8",children:[Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)("br",{}),Object(V.jsx)("div",{className:"text-center",children:Object(V.jsx)("img",{alt:"SETIMG",src:X,className:"img-fluid"})})]}),Object(V.jsx)("div",{className:"col-md-2"})]}),Object(V.jsxs)("div",{className:"row",children:[Object(V.jsx)("div",{className:"col-lg-4 col-md-3"}),Object(V.jsx)("div",{className:"col-lg-4 col-md-6",children:Object(V.jsxs)("div",{className:"row",children:[Object(V.jsx)("div",{className:"col-1"}),Object(V.jsxs)("div",{className:"col-10",children:[Object(V.jsx)("div",{className:"row",style:{height:"5%"}}),Object(V.jsx)("div",{className:"row height-center",children:Object(V.jsx)("div",{className:"col",children:Object(V.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(d,A)},children:[Object(V.jsx)("div",{className:"form-group",children:Object(V.jsx)("input",{type:"email",placeholder:"email",name:"email",className:"form-control",value:d,onChange:b,required:!0})}),Object(V.jsx)("div",{className:"form-group",children:Object(V.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"form-control",value:A,onChange:b,minLength:"6"})}),Object(V.jsx)(i.b,{to:"/forgotPassword",className:"form-label pb-2",children:"Forgot password?"}),Object(V.jsx)("div",{className:"form-group",children:Object(V.jsx)("input",{type:"submit",className:"form-control btn",style:{backgroundColor:"rgba(255, 255, 255, 0.7)"},value:"Login"})})]})})})]}),Object(V.jsx)("div",{className:"col-1"})]})}),Object(V.jsx)("div",{className:"col-lg-4 col-md-3"})]})]})})),$=Object(b.b)((function(e){return{alerts:e.alert}}))((function(e){return e.alerts.map((function(e){return Object(V.jsx)("div",{className:"alert alert-".concat(e.alertType),children:e.msg},e.id)}))})),ee=c(46),te=function(){return Object(V.jsx)(s.Fragment,{children:Object(V.jsx)("img",{src:"data:image/gif;base64,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",style:{width:"200px",margin:"auto",display:"block"},alt:"Loading..."})})},ce=["component","auth"],se=Object(b.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,c=e.auth,s=c.isAuthenticated,a=c.loading,n=Object(ee.a)(e,ce);return Object(V.jsx)(l.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return a?Object(V.jsx)(te,{}):s?Object(V.jsx)(t,Object(h.a)({},e)):Object(V.jsx)(l.a,{to:"/login"})}}))})),ae=Object(b.b)((function(e){return{user:e.auth.user,currentPage:e.auth.currentPage}}),{logout:q,setCurrentPage:K})((function(e){e.user;var t=e.logout,c=e.setCurrentPage,s=e.currentPage,a=Object(l.g)(),n=function(){var e=Object(A.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(t),e.next=3,a.push("/");case 3:return e.next=5,a.push("/dashboard");case 5:if("dashboard"!==t){e.next=9;break}return e.next=8,a.push("/dashboard/");case 8:return e.abrupt("return");case 9:return e.next=11,a.push("/dashboard/".concat(t));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsx)("div",{className:"col-lg-2 col-md-3 sidebar p-0",children:Object(V.jsxs)("div",{className:"container-fluid p-0",children:[Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded mt-5 p-1 pl-3 "+("dashboard"===s?"selected":""),onClick:function(){return n("dashboard")},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"material-icons mr-3",children:"dashboard"})}),Object(V.jsx)("div",{children:"Dashboard"})]})}),Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded p-1 pl-3 "+("customers"===s?"selected":""),onClick:function(){return n("customers")},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"mr-3 fas fa-user-friends"})}),Object(V.jsx)("div",{children:"Customers"})]})}),Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded p-1 pl-3 "+("academy"===s?"selected":""),onClick:function(){return n("academy")},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"fas fa-book mr-3"})}),Object(V.jsx)("div",{children:"Academy"})]})}),Object(V.jsxs)("div",{className:"signoutLink pb-2",children:[Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded p-1 pl-3 "+("profile"===s?"selected":""),onClick:function(){return n("profile")},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"mr-3 fa fa-user"})}),Object(V.jsx)("div",{children:"Profile"})]})}),Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded p-1 pl-3 "+("settings"===s?"selected":""),onClick:function(){return n("settings")},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"mr-3 fa fa-sliders"})}),Object(V.jsx)("div",{children:"Settings"})]})}),Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded p-1 pl-3",onClick:function(){c("dashboard"),t()},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"mr-3 fa fa-user"})}),Object(V.jsx)("div",{children:"Logout"})]})})]})]})})})),ne=c(43),re=c.n(ne),ie=Object(b.b)((function(e){return{}}),{})((function(){var e=function(){return Object(V.jsx)("div",{children:Object(V.jsx)(re.a,{options:{dataLabels:{enabled:!0},xaxis:{type:"date",categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]},tooltip:{x:{format:"dd/MM/yy"}}},series:[{name:"Monthly Sales",data:[200,500,400,450,300,600,300,500,100,400,200,300]}],type:"bar",height:"250px"})})};return Object(V.jsxs)("div",{className:"row admin-dashboard bg-pure-gold-grey py-4",children:[Object(V.jsxs)("div",{className:"col-lg-7",children:[Object(V.jsxs)("div",{className:"bg-white pure-gold-rounded-lg p-3 mb-3",children:[Object(V.jsx)("div",{className:"font-14 text-pure-gold-grey",children:"Total Income"}),Object(V.jsx)("div",{className:"font-34 font-bold",children:"$682.5"}),Object(V.jsx)(e,{})]}),Object(V.jsxs)("div",{className:"bg-white pure-gold-rounded-lg p-3 mb-3",children:[Object(V.jsx)("div",{className:"font-24 font-bold",children:"Latest Customer"}),Object(V.jsx)("div",{className:"row mt-3",children:[1,2,3,4,5,6,7,8,9].map((function(e,t){return Object(V.jsx)("div",{className:"col-md-6",children:Object(V.jsxs)("div",{className:"latest-customer pl-2 mb-3",children:[Object(V.jsx)("div",{className:"font-16 font-bold",children:"Tony Harman"}),Object(V.jsx)("div",{className:"font-12 text-pure-gold-grey",children:"10/19/2021"})]})},t)}))})]})]}),Object(V.jsx)("div",{className:"col-lg-5",children:Object(V.jsxs)("div",{className:"bg-white pure-gold-rounded-lg p-3 mb-3",children:[Object(V.jsx)("div",{className:"font-24 font-bold",children:"Track Sales"}),[1,2,3,4,5].map((function(e,t){return Object(V.jsx)("table",{className:"my-3",children:Object(V.jsxs)("tbody",{children:[Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"font-bold font-14 pr-3",children:"PRODUCT NAME:"}),Object(V.jsx)("td",{className:"font-13",children:"MASTER MIND PACKAGE"})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"font-bold font-14 pr-3",children:"TRNASFER ID:"}),Object(V.jsx)("td",{className:"font-13",children:"tr_1JeiVvAQ1wHtJVmkSQWEcBsA"})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"font-bold font-14 pr-3",children:"AMOUNT:"}),Object(V.jsx)("td",{className:"font-13",children:"49.7$"})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"font-bold font-14 pr-3",children:"CUSTOMER:"}),Object(V.jsx)("td",{className:"font-13",children:"Tony Harman"})]}),Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{className:"font-bold font-14 pr-3",children:"DATE:"}),Object(V.jsx)("td",{className:"font-13",children:"09/28/2021 09:46:40"})]})]})},t)}))]})})]})})),le=Object(b.b)((function(e){return{}}),{})((function(){return Object(V.jsx)("div",{children:"Admin Settings"})})),oe=c(22),de=Object(b.b)((function(e){return{}}),{})((function(){return Object(V.jsx)("div",{className:"row admin-academy bg-pure-gold-grey py-4",children:Object(V.jsx)("div",{className:"col-lg-12",children:Object(V.jsxs)("div",{className:"bg-white pure-gold-rounded-lg p-3 mb-3",children:[Object(V.jsxs)("div",{className:"font-24 font-bold",children:["Academy ",Object(V.jsx)("i",{className:"fa fa-plus-circle text-pure-gold-grey"})]}),Object(V.jsxs)("div",{className:"row pt-4",children:[Object(V.jsx)("div",{className:"col-lg-3 col-md-5 border-right",children:["READY","SET","LAUNCH"].map((function(e,t){return Object(V.jsxs)("div",{className:"pb-4",children:[Object(V.jsxs)("div",{className:"font-18 font-bold",children:[e," ",Object(V.jsx)("i",{className:"fa fa-plus-circle text-pure-gold-grey cursor-pointer"})]}),[1,2,3,4,5,6,7,8,9,10].map((function(e,c){return Object(V.jsxs)("div",{className:"rounded-lg cursor-pointer font-16 pl-1 "+(0===t&&0===c?"bg-pure-gold-brown":""),children:[Object(V.jsx)("i",{className:"fa fa-caret-right"})," Chapter ",e]},c)}))]},t)}))}),Object(V.jsxs)("div",{className:"col-lg-9 col-md-7",children:[Object(V.jsx)("div",{className:"font-18 font-bold",children:"Module 1: How To Setup An Online Wal-Mart Store"}),Object(V.jsx)("div",{className:"font-18 pt-3 text-justify",children:"The Walmart Marketplace is a platform that allows third-party sellers to list their items on Walmart.com, just like you would on Amazon or eBay. Follow the unique link in your approval email (subject line: \u201cYour Account has been created in Walmart Marketplace\u201d) to create your Partner Profile."}),Object(V.jsx)("div",{className:"font-18 pt-3 text-justify",children:"The Registration Wizard will walk you through five main sections: Account Creation, Partner Registration, Taxes (W-9),  and Shipping Info. Now that you have created your Partner Profile, you will have access to the Seller Center. Here, you\u2019ll find a \u201cLaunch Checklist\u201d that outlines the next several requirements before you can launch your account."}),Object(V.jsx)("div",{className:"font-18 pt-3 text-justify",children:"The final step for selling on Walmart Marketplace is launching your account. When you \u201cmark as done\u201d all the items on your Walmart Launch Checklist in Seller Center, a pop-up message will ask you to confirm that you\u2019re ready to launch. When you select \u201cconfirm\u201d, this will trigger a launch request."}),Object(V.jsx)("div",{className:"text-center p-1 pt-3",children:Object(V.jsx)(oe.a,{video:354682480,responsive:!0})})]})]})]})})})})),Ae=Object(b.b)((function(e){return{}}),{})((function(){return Object(V.jsx)("div",{className:"row admin-customers bg-pure-gold-grey py-4",children:Object(V.jsx)("div",{className:"col-lg-12",children:Object(V.jsxs)("div",{className:"bg-white pure-gold-rounded-lg p-3 mb-3",children:[Object(V.jsxs)("div",{className:"row",children:[Object(V.jsx)("div",{className:"col-lg-6",children:Object(V.jsx)("div",{className:"font-24 font-bold",children:"Customers"})}),Object(V.jsx)("div",{className:"col-lg-6",children:Object(V.jsxs)("div",{className:"text-right",children:[Object(V.jsxs)("select",{type:"text",className:"search-filter",children:[Object(V.jsx)("option",{children:"All"}),Object(V.jsx)("option",{children:"Active"}),Object(V.jsx)("option",{children:"Inactive"})]}),Object(V.jsx)("input",{type:"text",className:"search-filter",placeholder:"Search"})]})})]}),Object(V.jsx)("div",{className:"table-responsive",children:Object(V.jsxs)("table",{className:"table table-borderless",children:[Object(V.jsx)("thead",{children:Object(V.jsxs)("tr",{children:[Object(V.jsx)("th",{children:"NO"}),Object(V.jsx)("th",{children:"USERNAME"}),Object(V.jsx)("th",{children:"AVATAR"}),Object(V.jsx)("th",{children:"NAME"}),Object(V.jsx)("th",{children:"STATE"}),Object(V.jsx)("th",{children:"PARTNER"}),Object(V.jsx)("th",{children:"EMAIL"}),Object(V.jsx)("th",{children:"PHONE"}),Object(V.jsx)("th",{children:"PURCHASED SUBSCRIPTION"}),Object(V.jsx)("th",{children:"CURRENT PERIOD START"}),Object(V.jsx)("th",{children:"CURRENT PERIOD END"}),Object(V.jsx)("th",{children:"ACTIONS"})]})}),Object(V.jsx)("tbody",{children:[1,2,3,4,5,6,7,8,9,10].map((function(e,t){return Object(V.jsxs)("tr",{children:[Object(V.jsx)("td",{children:t+1}),Object(V.jsx)("td",{children:"sbhooley"}),Object(V.jsx)("td",{className:"font-34 text-center",children:Object(V.jsx)("i",{className:"fa fa-user-secret"})}),Object(V.jsx)("td",{children:"Steven Hooley"}),t%2===0?Object(V.jsx)("td",{children:Object(V.jsx)("span",{className:"badge bg-pure-gold-primary",children:"ACTIVE"})}):Object(V.jsx)("td",{children:Object(V.jsx)("span",{className:"badge bg-pure-gold-danger",children:"INACTIVE"})}),Object(V.jsx)("td",{children:"Willette Whitted"}),Object(V.jsx)("td",{children:"sbhooley@gmail.com"}),Object(V.jsx)("td",{children:"4435184158"}),Object(V.jsx)("td",{children:"Master Mind Package"}),Object(V.jsx)("td",{children:"10/02/2021 11:56:42"}),Object(V.jsx)("td",{children:"11/02/2021 11:56:42"}),Object(V.jsxs)("td",{children:[Object(V.jsx)("i",{className:"fa fa-pause font-16 mr-2 cursor-pointer"}),Object(V.jsx)("i",{className:"fa fa-play font-16 mr-2 cursor-pointer"}),Object(V.jsx)("i",{className:"fa fa-trash font-16 mr-2 cursor-pointer"})]})]},t)}))})]})})]})})})})),je=Object(b.b)((function(e){return{}}),{})((function(){return Object(V.jsx)("div",{children:"Admin Profile"})})),he=Object(b.b)((function(e){return{}}),{})((function(){return Object(V.jsx)("div",{className:"container-fluid bg-admin",children:Object(V.jsxs)("div",{className:"row",children:[Object(V.jsx)(ae,{}),Object(V.jsx)("div",{className:"col-lg-10 col-md-9",children:Object(V.jsxs)(i.a,{basename:"/dashboard",children:[Object(V.jsx)(se,{exact:!0,path:"/",component:ie}),Object(V.jsx)(se,{exact:!0,path:"/customers",component:Ae}),Object(V.jsx)(se,{exact:!0,path:"/academy",component:de}),Object(V.jsx)(se,{exact:!0,path:"/profile",component:je}),Object(V.jsx)(se,{exact:!0,path:"/settings",component:le})]})})]})})})),ue=Object(b.b)((function(e){return{user:e.auth.user,currentPage:e.auth.currentPage}}),{logout:q,setCurrentPage:K})((function(e){e.user;var t=e.logout,c=e.setCurrentPage,s=e.currentPage,a=Object(l.g)(),n=function(){var e=Object(A.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(t),e.next=3,a.push("/");case 3:return e.next=5,a.push("/dashboard");case 5:if("dashboard"!==t){e.next=9;break}return e.next=8,a.push("/dashboard/");case 8:return e.abrupt("return");case 9:return e.next=11,a.push("/dashboard/".concat(t));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(V.jsx)("div",{className:"col-lg-2 col-md-3 sidebar p-0",children:Object(V.jsxs)("div",{className:"container-fluid p-0",children:[Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded mt-5 p-1 pl-3 "+("dashboard"===s?"selected":""),onClick:function(){return n("dashboard")},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"fas fa-book mr-3"})}),Object(V.jsx)("div",{children:"Academy"})]})}),Object(V.jsxs)("div",{className:"signoutLink pb-2",children:[Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded p-1 pl-3 "+("profile"===s?"selected":""),onClick:function(){return n("profile")},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"mr-3 fa fa-user"})}),Object(V.jsx)("div",{children:"Profile"})]})}),Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded p-1 pl-3 "+("settings"===s?"selected":""),onClick:function(){return n("settings")},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"mr-3 fa fa-sliders"})}),Object(V.jsx)("div",{children:"Settings"})]})}),Object(V.jsx)("div",{className:"row mx-0 h5 menuItem rounded p-1 pl-3",onClick:function(){c("dashboard"),t()},children:Object(V.jsxs)("div",{className:"d-flex align-items-center",children:[Object(V.jsx)("div",{children:Object(V.jsx)("i",{className:"mr-3 fa fa-user"})}),Object(V.jsx)("div",{children:"Logout"})]})})]})]})})})),be=Object(b.b)((function(e){return{}}),{})((function(){return Object(V.jsx)("div",{className:"row Customer-academy bg-pure-gold-grey py-4",children:Object(V.jsx)("div",{className:"col-lg-12",children:Object(V.jsxs)("div",{className:"bg-white pure-gold-rounded-lg p-3 mb-3",children:[Object(V.jsxs)("div",{className:"font-24 font-bold",children:["Academy ",Object(V.jsx)("i",{className:"fa fa-plus-circle text-pure-gold-grey"})]}),Object(V.jsxs)("div",{className:"row pt-4",children:[Object(V.jsx)("div",{className:"col-lg-3 col-md-5 border-right",children:["READY","SET","LAUNCH"].map((function(e,t){return Object(V.jsxs)("div",{className:"pb-4",children:[Object(V.jsxs)("div",{className:"font-18 font-bold",children:[e," ",Object(V.jsx)("i",{className:"fa fa-plus-circle text-pure-gold-grey cursor-pointer"})]}),[1,2,3,4,5,6,7,8,9,10].map((function(e,c){return Object(V.jsxs)("div",{className:"rounded-lg cursor-pointer font-16 pl-1 "+(0===t&&0===c?"bg-pure-gold-brown":""),children:[Object(V.jsx)("i",{className:"fa fa-caret-right"})," Chapter ",e]},c)}))]},t)}))}),Object(V.jsxs)("div",{className:"col-lg-9 col-md-7",children:[Object(V.jsx)("div",{className:"font-18 font-bold",children:"Module 1: How To Setup An Online Wal-Mart Store"}),Object(V.jsx)("div",{className:"font-18 pt-3 text-justify",children:"The Walmart Marketplace is a platform that allows third-party sellers to list their items on Walmart.com, just like you would on Amazon or eBay. Follow the unique link in your approval email (subject line: \u201cYour Account has been created in Walmart Marketplace\u201d) to create your Partner Profile."}),Object(V.jsx)("div",{className:"font-18 pt-3 text-justify",children:"The Registration Wizard will walk you through five main sections: Account Creation, Partner Registration, Taxes (W-9),  and Shipping Info. Now that you have created your Partner Profile, you will have access to the Seller Center. Here, you\u2019ll find a \u201cLaunch Checklist\u201d that outlines the next several requirements before you can launch your account."}),Object(V.jsx)("div",{className:"font-18 pt-3 text-justify",children:"The final step for selling on Walmart Marketplace is launching your account. When you \u201cmark as done\u201d all the items on your Walmart Launch Checklist in Seller Center, a pop-up message will ask you to confirm that you\u2019re ready to launch. When you select \u201cconfirm\u201d, this will trigger a launch request."}),Object(V.jsx)("div",{className:"text-center p-1 pt-3",children:Object(V.jsx)(oe.a,{video:354682480,responsive:!0})})]})]})]})})})})),me=Object(b.b)((function(e){return{}}),{})((function(){return Object(V.jsx)("div",{className:"container-fluid bg-admin",children:Object(V.jsxs)("div",{className:"row",children:[Object(V.jsx)(ue,{}),Object(V.jsx)("div",{className:"col-lg-10 col-md-9",children:Object(V.jsx)(i.a,{basename:"/dashboard",children:Object(V.jsx)(se,{exact:!0,path:"/",component:be})})})]})})})),ge=Object(b.b)((function(e){return{isAuthenticated:e.auth.isAuthenticated,user:e.auth.user}}),{logout:q})((function(e){var t=e.isAuthenticated,c=e.user,s=e.logout;return t&&c&&"admin"===c.type?Object(V.jsx)(he,{}):t&&c&&"customer"===c.type?Object(V.jsx)(me,{}):!0!==t?Object(V.jsx)(l.a,{to:"/"}):Object(V.jsxs)("div",{children:[Object(V.jsx)("h5",{children:"It will be redirected soon."}),Object(V.jsx)("button",{className:"btn btn-danger",onClick:function(){return s()},children:"Logout"})]})})),xe=function(){return Object(V.jsxs)(s.Fragment,{children:[Object(V.jsxs)("h1",{className:"x-large text-primary",children:[Object(V.jsx)("i",{className:"fas fa-exclamation-triangle"})," Page Not Found"]}),Object(V.jsx)("p",{className:"large",children:"Sorry, this page does not exist"})]})},Oe=function(e){return Object(V.jsxs)("section",{children:[Object(V.jsx)($,{}),Object(V.jsxs)(l.d,{children:[Object(V.jsx)(l.b,{exact:!0,path:"/register",component:z}),Object(V.jsx)(l.b,{exact:!0,path:"/login",component:_}),Object(V.jsx)(se,{exact:!0,path:"/dashboard",component:ge}),Object(V.jsx)(l.b,{path:"/dashboard",component:ge}),Object(V.jsx)(l.b,{component:xe})]})]})},pe=(c(79),function(){return Object(s.useEffect)((function(){localStorage.token&&M(localStorage.token),T.dispatch(Z()),window.addEventListener("storage",(function(){localStorage.token||T.dispatch({type:E})}))}),[]),Object(V.jsx)(b.a,{store:T,children:Object(V.jsx)(i.a,{children:Object(V.jsx)(s.Fragment,{children:Object(V.jsxs)(l.d,{children:[Object(V.jsx)(l.b,{exact:!0,path:"/",children:Object(V.jsx)(l.a,{to:"/login"})}),Object(V.jsx)(l.b,{component:Oe})]})})})})});r.a.render(Object(V.jsx)(pe,{}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.57b4b298.chunk.js.map