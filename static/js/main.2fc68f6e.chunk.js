(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),r=n.n(a),i=(n(11),n(2)),o=n(5),j=n.n(o),l=n(0),b=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,a=e.positivePercentage;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("ul",{className:j.a.ulStyle,children:[Object(l.jsxs)("li",{children:["Good ",Object(l.jsxs)("span",{children:[" ",t]})]}),Object(l.jsxs)("li",{children:["Neutral",Object(l.jsxs)("span",{children:[" ",n]})]}),Object(l.jsxs)("li",{children:["Bad ",Object(l.jsx)("span",{children:c})]}),Object(l.jsxs)("li",{children:["Total",Object(l.jsxs)("span",{children:[" ",s]})]}),Object(l.jsxs)("li",{children:["Positive",Object(l.jsxs)("span",{children:[" ",a]}),"%"]})]})})},d=function(e){var t=e.title,n=e.children;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{children:t}),n]})},u=n(6),h=n.n(u),O=function(e){var t=e.options,n=e.onLeaveFeedback;return t.map((function(e,t){return Object(l.jsx)("button",{className:h.a.button,onClick:n,name:e,children:e},t)}))},x=function(e){var t=e.message;return Object(l.jsx)("p",{children:t})},p=function(){var e=Object(c.useState)(0),t=Object(i.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),r=Object(i.a)(a,2),o=r[0],j=r[1],u=Object(c.useState)(0),h=Object(i.a)(u,2),p=h[0],f=h[1],v=function(){return n+o+p};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(d,{title:"Please leave feedback",children:Object(l.jsx)(O,{options:["good","neutral","bad"],onLeaveFeedback:function(e){switch(e.target.name){case"good":return void s(n+1);case"bad":return void f(p+1);case"neutral":return void j(o+1)}}})}),Object(l.jsx)(d,{title:"Statistics",children:0!==v()?Object(l.jsx)(b,{good:n,neutral:o,bad:p,total:v(),positivePercentage:Math.round(n/v()*100)}):Object(l.jsx)(x,{message:"No feedback given"})})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))},5:function(e,t,n){e.exports={ulStyle:"Statistics_ulStyle__1CUEq"}},6:function(e,t,n){e.exports={button:"FeedbackOptions_button__1CJ8f"}}},[[13,1,2]]]);
//# sourceMappingURL=main.2fc68f6e.chunk.js.map