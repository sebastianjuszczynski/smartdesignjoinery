(this.webpackJsonpsmartdesignjoinery=this.webpackJsonpsmartdesignjoinery||[]).push([[0],{43:function(n,e,t){},50:function(n,e,t){},58:function(n,e,t){"use strict";t.r(e);var i,r,a,o,c,s=t(1),d=t.n(s),l=t(17),j=t.n(l),b=(t(43),t(11)),x=t(4),p=t(3),h=t(2),u=t.p+"static/media/menu-mobile.18808940.jpg",m=h.a.div(i||(i=Object(p.a)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    color: white;\n    height: 60px;\n    text-transform: uppercase;\n    z-index: 1;\n    background-color: ",";\n    \n    @media (max-width: 768px) {\n        height: 100px;\n        background-color: #693912;\n        background-image: url(",");\n        background-position: center;\n        background-size: cover;\n    }\n"])),(function(n){return"/home"===n.location?"rgba(0,0,0, 0.5)":"black"}),u),g=h.a.img(r||(r=Object(p.a)(["\n    margin-left: 100px;\n    height: 60px;\n    \n    \n    @media (max-width: 768px) {\n        margin: 0 auto;\n        z-index: 2;\n        height: 80px;\n    }\n"]))),f=t.p+"static/media/logo.143159ca.jpg",O=t(9),w="active",v=Object(h.a)(b.c).attrs((function(){return{activeClassName:w}}))(a||(a=Object(p.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    letter-spacing: 2px;\n    margin-right: 15px;\n    font-size: 20px;\n    text-decoration: none;\n    color: white;\n    &."," {\n        font-weight: bold;\n    }\n    @media (max-width: 768px) {\n        margin-right: 0;\n        font-size: 25px;\n        padding: 30px 180px;\n        text-align: center;\n    }\n"])),w),y=h.a.ul(o||(o=Object(p.a)(["\n    display: flex;\n    list-style: none;\n    padding: 0;\n    letter-spacing: 2px;\n    margin-right: 100px;\n    font-size: 20px;\n    \n\n    @media (max-width: 768px) {\n        flex-flow: column nowrap;\n        background-image: url(",");\n        background-position: center;\n        background-size: cover;\n        position: fixed;\n        transform: ",";\n        margin: 0;\n        top: 0;\n        right: 0;\n        height: 100vh;\n        width: 100vw;\n        padding-top: 3rem;\n        justify-content: space-evenly;\n        font-size: 32px;\n        transition: transform 0.3s ease-in-out;\n        z-index: -1;\n        align-items: center;\n    }\n"])),u,(function(n){return n.open?"translateX(0)":"translateX(150%)"})),k=t(0),z=function(n){var e=n.open;return Object(k.jsxs)(y,{open:e,children:[Object(k.jsx)(v,{to:"/home",children:"Home"}),Object(k.jsx)(v,{to:"/gallery",children:"Gallery"}),Object(k.jsx)(v,{to:"/information",children:"Information"}),Object(k.jsx)(v,{to:"/contact",children:"Contact"})]})},S=h.a.div(c||(c=Object(p.a)(["\n    width: 32px;\n    height: 32px;\n    position: fixed;\n    right: 20px;\n    top: 34px;\n    display: none;\n    z-index: 1;\n\n    @media (max-width: 768px) {\n        display: flex;\n        justify-content: space-around;\n        flex-flow: column nowrap;\n    }\n\n    div {\n    width: 32px;\n    height: 4px;\n    background-color: #fff;\n    border-radius: 10px;\n    transform-origin: 1px;\n    transition: all 0.3s linear;\n\n    &:nth-child(1) {\n        transform: ",";\n    }\n\n    &:nth-child(2) {\n        transform: ",";\n        opacity: ",";\n    }\n\n    &:nth-child(3) {\n        transform: ",";\n    }\n}\n"])),(function(n){return n.open?"rotate(45deg)":"rotate(0)"}),(function(n){return n.open?"translateX(100%)":"translateX(0)"}),(function(n){return n.open?0:1}),(function(n){return n.open?"rotate(-45deg)":"rotate(0)"})),C=function(){var n=Object(s.useState)(!1),e=Object(O.a)(n,2),t=e[0],i=e[1];return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(S,{open:t,onClick:function(){return i(!t)},children:[Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)("div",{}),Object(k.jsx)(z,{open:t})]}),Object(k.jsx)(z,{open:t})]})},F=Object(x.h)((function(n){return Object(k.jsxs)(m,{location:n.location.pathname,children:[Object(k.jsx)(g,{src:f}),Object(k.jsx)(C,{})]})})),q=function(){return Object(k.jsx)("div",{children:"Information"})};function E(n){var e={};return n.username.trim()||(e.username="Username required"),n.email?/\S+@\S+\.\S+/.test(n.email)||(e.email="Email address is invalid"):e.email="Email required",n.message?n.message.length<6&&(e.message="Message needs to be 6 characters or more"):e.message="Message is required",e}var W,I,V,Y,T,A,L,P,J,D,N,X,M,B,G,K,_,H,R,U,Z,Q,$,nn,en,tn,rn,an,on,cn,sn,dn,ln,jn,bn,xn,pn,hn,un,mn=t(18),gn=t(26),fn=function(n){var e=Object(s.useState)({username:"",email:"",message:""}),t=Object(O.a)(e,2),i=t[0],r=t[1],a=Object(s.useState)({}),o=Object(O.a)(a,2),c=o[0],d=o[1];return Object(s.useEffect)((function(){Object.keys(c).length,0}),[c,false,n]),{handleChange:function(n){var e=n.target,t=e.name,a=e.value;r(Object(gn.a)(Object(gn.a)({},i),{},Object(mn.a)({},t,a)))},values:i,errors:c,setValues:r,setErrors:d}},On=h.a.div(W||(W=Object(p.a)(["\n    margin-bottom: 8px;\n    width: 80%;\n    p {\n        font-size: 0.8rem;\n    margin-top: 0.5rem;\n    color: #f00e0e; \n    }\n"]))),wn=h.a.div(I||(I=Object(p.a)(["\n    display: inline-block;\n    font-size: 12.8px;\n    margin-bottom: 6px;\n    color: #000;\n"]))),vn=h.a.input(V||(V=Object(p.a)(["\n    display: block;\n    padding-left: 10px;\n    outline: none;\n    border-radius: 2px;\n    height: 40px;\n    width: 100%;\n    border: 1px solid black;\n    ::placeholder {\n        color: #595959;\n        font-size: 12px; \n    }\n"]))),yn=h.a.textarea(Y||(Y=Object(p.a)(["\n    display: block;\n    padding-left: 10px;\n    outline: none;\n    border-radius: 2px;\n    height: 80px;\n    width: 100%;\n    border: none;\n    font-size: 0.8rem;\n    border: 1px solid black; \n    ::placeholder {\n        color: #595959;\n        font-size: 12px; \n    }\n"]))),kn=h.a.button(T||(T=Object(p.a)(["\n    width: 80%;\n    height: 50px;\n    margin-top: 10px;\n    border-radius: 2px;\n    background: rgb(70, 26, 4);\n    outline: none;\n    border: none;\n    color: #fff;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    transition: 0.3s;\n    &:hover {\n        cursor: pointer;\n        background: rgb(114, 66, 43);    \n    }\n"]))),zn=t(38),Sn=(t(50),function(n){var e=n.submitForm,t=fn(e,E),i=t.handleChange,r=t.errors,a=t.values,o=t.setValues,c=t.setErrors,d=(t.setIsSubmitting,Object(s.useRef)());return Object(k.jsx)(k.Fragment,{children:Object(k.jsxs)("form",{className:"form",noValidate:!0,onSubmit:function(n){n.preventDefault(),c(E(a)),zn.a.sendForm("yahoo","template_lgc1ezc",n.target,"user_S84rE02uoYvJJVbKOZwK3").then((function(n){console.log(n.text)}),(function(n){console.log(n.text)})),n.target.reset(),o({username:"",email:"",message:""}),console.log(n.target)},ref:d,children:[Object(k.jsxs)(On,{children:[Object(k.jsx)(wn,{children:"Name"}),Object(k.jsx)(vn,{type:"text",name:"username",placeholder:"Enter your name",value:a.username,onChange:i}),r.username&&Object(k.jsx)("p",{children:r.username})]}),Object(k.jsxs)(On,{children:[Object(k.jsx)(wn,{children:"Email"}),Object(k.jsx)(vn,{type:"email",name:"email",placeholder:"Enter your email",value:a.email,onChange:i}),r.email&&Object(k.jsx)("p",{children:r.email})]}),Object(k.jsxs)(On,{children:[Object(k.jsx)(wn,{children:"Password"}),Object(k.jsx)(yn,{name:"message",rows:"7",placeholder:"Please type your request...",value:a.password,onChange:i}),r.message&&Object(k.jsx)("p",{children:r.message})]}),Object(k.jsx)(kn,{type:"submit",children:"Send"})]})})}),Cn=h.a.div(A||(A=Object(p.a)(["\n    margin: 10px auto;\n    width: 1140px;\n    position: relative;\n    height: 400px;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    @media (max-width: 768px) {\n        width: 100%;\n    }\n"]))),Fn=function(){var n=Object(s.useState)(!1),e=Object(O.a)(n,2),t=e[0],i=e[1];return Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(Cn,{children:t?window.location.reload(!1):Object(k.jsx)(Sn,{submitForm:function(){i(!0)}})})})},qn=h.a.h3(L||(L=Object(p.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    font-weight: 200;\n    font-size: 28px;\n    line-height: 1.5;\n    margin-top: 100px;\n    @media (max-width: 768px) {\n        font-size: 20px;\n        margin-top: 30px;\n    }\n"]))),En=h.a.span(P||(P=Object(p.a)(["\n    font-weight: bold;\n"]))),Wn=function(){return Object(k.jsxs)(qn,{children:["Contact ",Object(k.jsx)(En,{children:"with us"})," and check",Object(k.jsx)("br",{}),"what we can do ",Object(k.jsx)(En,{children:"together!"})]})},In=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Wn,{}),Object(k.jsx)(Fn,{})]})},Vn=function(){return Object(k.jsx)("div",{children:"Gallery"})},Yn=t.p+"static/media/background.3d2347f4.jpg",Tn=Object(h.b)(J||(J=Object(p.a)([" {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-30px);\n    }\n    60% {\n      transform: translateY(-15px);\n    }\n}\n"]))),An=h.a.div(D||(D=Object(p.a)(["\n    background-image: url(",");\n    background-size: cover;  \n    background-position: center;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n"])),Yn),Ln=h.a.div(N||(N=Object(p.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0,0,0, 0.4);\n    mix-blend-mode: overlay;\n"]))),Pn=h.a.div(X||(X=Object(p.a)(["\n    position: absolute;\n    top: 55%;\n    left: 0;\n    color: white;\n    margin-left: 100px;\n\n    @media (max-width: 768px) {\n        margin: 0 auto;\n        width: 100%;\n        text-align: center;\n    }\n"]))),Jn=h.a.h2(M||(M=Object(p.a)(["\n    font-size: 3em;\n    padding: 10px;\n    background: rgba(0,0,0, 0.6);\n    margin-bottom: 0;\n\n    @media (max-width: 768px) {\n        font-size: 1.8rem;\n\n    }\n"]))),Dn=h.a.h3(B||(B=Object(p.a)(["\n   font-size: 2em; \n   padding: 10px;\n   background: rgba(0,0,0, 0.6);\n   margin-top: 10px;\n\n   @media (max-width: 768px) {\n        font-size: 1.4rem;\n\n    }\n"]))),Nn=h.a.div(G||(G=Object(p.a)(["\n    position: absolute;\n    width: 50px;\n    left: calc(50% - 25px);\n    bottom: 0;\n    animation: "," 2s infinite;\n    overflow: hidden;\n"])),Tn),Xn=h.a.a(K||(K=Object(p.a)(["\n    color: white;\n    font-size: 3em;\n"]))),Mn=h.a.div(_||(_=Object(p.a)(["\n    height: calc(100vh - 60px);\n    @media (max-width: 768px) {\n        height: calc(100vh - 100px);\n    }\n"]))),Bn=t(36),Gn=function(){return Object(k.jsxs)(Mn,{children:[Object(k.jsx)(An,{}),Object(k.jsx)(Ln,{}),Object(k.jsxs)(Pn,{children:[Object(k.jsx)(Jn,{children:"Smart Design Joinery"}),Object(k.jsx)(Dn,{children:"Vision, Passion, Purpose"})]}),Object(k.jsx)(Nn,{class:"arrow bounce",children:Object(k.jsx)(Xn,{children:Object(k.jsx)(Bn.Link,{to:"motto",spy:!0,smooth:!0,children:Object(k.jsx)("i",{class:"fas fa-chevron-down"})})})})]})},Kn=h.a.h2(H||(H=Object(p.a)(["\n    text-align: center;\n    font-size: 48px;\n    text-transform: uppercase;\n    letter-spacing: 5px;\n    padding: 10px;\n\n    @media (max-width: 768px) {\n        font-size: 30px;\n    }\n"]))),_n=h.a.div(R||(R=Object(p.a)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]))),Hn=function(){return Object(k.jsx)(_n,{children:Object(k.jsx)(Kn,{children:"Our Service"})})},Rn=t.p+"static/media/doors.32621e39.jpg",Un=t.p+"static/media/stairs.3d13c6d6.jpg",Zn=t.p+"static/media/wardrobe.641dc227.jpg",Qn=Object(h.a)(b.b)(U||(U=Object(p.a)(["\n    text-decoration: none;\n    text-transform: uppercase;\n    font-size: 20px;\n    letter-spacing: 2px;\n    border: 2px solid #6C3A13;\n    padding: 10px 15px;\n    color: #6C3A13;\n    transition: 0.3s;\n    &:hover {\n        border: 2px solid #ffffff;\n        color: #ffffff;\n        background-color: #6C3A13;\n    };\n    @media (max-width: 768px) {\n        font-size: 18px;\n        padding: 5px 12px;\n        \n    }    \n"]))),$n=h.a.div(Z||(Z=Object(p.a)(["\n    display: flex;\n    width: 1140px;\n    height: 70vh;\n    margin: 0 auto;\n    @media (max-width: 768px) {\n        flex-direction: column;\n        width: 90vw;\n        align-items: center;\n        height: 100%;\n        \n    }\n"]))),ne=h.a.div(Q||(Q=Object(p.a)(["\n    width: 100%;\n    height: 100%;\n    margin: 15px;\n"]))),ee=h.a.img($||($=Object(p.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-bottom: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n    }\n"])),Un),te=h.a.img(nn||(nn=Object(p.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-top: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n    }\n"])),Zn),ie=h.a.img(en||(en=Object(p.a)(["\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    height: 50%;\n    width: 100%;\n    margin-bottom: 15px;\n    @media (max-width: 768px) {\n        height: 40vh;\n        margin-top: 50px;\n    }\n"])),Rn),re=h.a.h3(tn||(tn=Object(p.a)(["\n    text-align: center;\n    text-transform: uppercase;\n    letter-spacing: 4px;\n    font-size: 30px;\n    @media (max-width: 768px) {\n        font-size: 20px;\n    }\n"]))),ae=h.a.p(rn||(rn=Object(p.a)(["\n    text-align: center;\n    @media (max-width: 768px) {\n        font-size: 16px;\n    }\n"]))),oe=h.a.div(an||(an=Object(p.a)(["\n    display: flex;\n    flex-direction: column;\n    height: 50%;\n    background-color: #F4F5F6;\n    align-items: center;\n"]))),ce=function(){var n=Object(s.useState)(window.innerWidth),e=Object(O.a)(n,2),t=e[0],i=e[1];return Object(s.useEffect)((function(){var n=function(){return i(window.innerWidth)};return window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),Object(k.jsxs)($n,{children:[Object(k.jsxs)(ne,{children:[Object(k.jsx)(ee,{}),Object(k.jsxs)(oe,{children:[Object(k.jsx)(re,{children:"Stairs"}),Object(k.jsx)(ae,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(Qn,{to:"/gallery",children:"See gallery"})]})]}),Object(k.jsxs)(ne,{children:[t<768&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(te,{}),Object(k.jsxs)(oe,{children:[Object(k.jsx)(re,{children:"Wardrobe"}),Object(k.jsx)(ae,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(Qn,{to:"/gallery",children:"See gallery"})]})]}),t>768&&Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(oe,{children:[Object(k.jsx)(re,{children:"Wardrobe"}),Object(k.jsx)(ae,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(Qn,{to:"/gallery",children:"See gallery"})]}),Object(k.jsx)(te,{})]})]}),Object(k.jsxs)(ne,{children:[Object(k.jsx)(ie,{}),Object(k.jsxs)(oe,{children:[Object(k.jsx)(re,{children:"Doors"}),Object(k.jsx)(ae,{children:"Veritatis tempore labore, fugit quis nihil temporibus minima. Tenetur suscipit quibusdam ab necessitatibus aut libero hic eaque dolor a."}),Object(k.jsx)(Qn,{to:"/gallery",children:"See gallery"})]})]})]})},se=Object(h.b)(on||(on=Object(p.a)([" {\n    0%, 20%, 50%, 80%, 100% {\n      transform: translateY(0);\n    }\n    40% {\n      transform: translateY(-30px);\n    }\n    60% {\n      transform: translateY(-15px);\n    }\n}\n"]))),de=h.a.div(cn||(cn=Object(p.a)(["\n    position: fixed;\n    width: 40px;\n    right: 20px;\n    bottom: 30px;\n    animation: "," 2s infinite;\n    cursor: pointer;\n    overflow: hidden;\n"])),se),le=h.a.a(sn||(sn=Object(p.a)(["\n    color: rgba(108,58,19, 0.8);\n    font-size: 48px;\n"]))),je=function(){var n=Object(s.useState)(window.scrollY),e=Object(O.a)(n,2),t=e[0],i=e[1];Object(s.useEffect)((function(){var n=function(){return i(window.scrollY)};return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}),[]);return Object(k.jsx)(de,{onClick:function(){return window.scrollTo({top:0,behavior:"smooth"})},children:Object(k.jsx)(le,{children:t>650&&Object(k.jsx)("i",{className:"icon fas fa-chevron-up"})})})},be=t(37),xe=t.p+"static/media/carpenter.9891abc0.jpg",pe=h.a.div(dn||(dn=Object(p.a)(["\n    position: relative;\n    top: 100px;\n    left: 50%;\n    color: white;\n    @media (max-width: 768px) {\n        top: 10px;\n        left: 0;\n        padding: 0 10px;\n        text-align: center;\n    }\n"]))),he=h.a.h3(ln||(ln=Object(p.a)(["\n    font-size: 36px;\n    text-transform: uppercase;\n    @media (max-width: 768px) {\n        font-size: 24px;\n        margin-bottom: 50px;\n    }\n"]))),ue=h.a.p(jn||(jn=Object(p.a)(["\n    font-size: 20px;\n    line-height: 1.5;\n"]))),me=h.a.div(bn||(bn=Object(p.a)(["\n    background: rgba(0, 0, 0, 0.6);\n"]))),ge=function(){return Object(k.jsx)(me,{children:Object(k.jsx)(be.Parallax,{bgImage:xe,bgImageAlt:"carpenter",strength:150,style:{position:"relative"},bgImageStyle:{zIndex:"-1"},children:Object(k.jsxs)(pe,{style:{height:400},children:[Object(k.jsx)(he,{children:"Who we are? What we are doing?"}),Object(k.jsxs)(ue,{children:["We\u2019re your Furniture Company. With over 30 years experience in ",Object(k.jsx)("br",{}),"the industry, we know how to produce quality handmade furniture.",Object(k.jsx)("br",{})," We are making the latest traditional and modern furniture designs",Object(k.jsx)("br",{})," for your home.  "]})]})})})},fe=h.a.h2(xn||(xn=Object(p.a)(["\n    margin: 100px auto;\n    text-align: center;\n    text-transform: uppercase;\n    line-height: 1.3;\n    font-size: 40px;\n    font-weight: 400;\n    @media (max-width: 768px) {\n        margin: 50px auto;\n        font-size: 30px;\n    }\n"]))),Oe=h.a.span(pn||(pn=Object(p.a)(["\n    color: #6C3A13;\n    font-weight: bold;\n    font-size: 60px;\n    @media (max-width: 768px) {\n        font-size: 40px;\n    }\n"]))),we=h.a.span(hn||(hn=Object(p.a)(["\n    display: inline-block;\n    font-size: 70px;\n    font-weight: bold;\n    color: #6C3A13;\n    transform: skew(-15deg);\n    @media (max-width: 768px) {\n        font-size: 50px;\n    }\n"]))),ve=function(){return Object(k.jsxs)(fe,{id:"motto",children:["We are not just ",Object(k.jsx)(Oe,{children:"building"}),"...",Object(k.jsx)("br",{}),"...we ",Object(k.jsx)(Oe,{children:"create "}),Object(k.jsx)(we,{children:"!"})]})},ye=function(){return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(Gn,{}),Object(k.jsx)(ve,{}),Object(k.jsx)(ge,{}),Object(k.jsx)(Hn,{}),Object(k.jsx)(ce,{}),Object(k.jsx)(Wn,{}),Object(k.jsx)(Fn,{}),Object(k.jsx)(je,{})]})},ke=h.a.p(un||(un=Object(p.a)(["\n    position: ",";\n    bottom: 0;\n    left: 0;\n    right: 0;\n    color: white;\n    background-color: black;\n    padding: 15px;\n    margin: 0;\n    text-align: center;\n"])),(function(n){return"/home"===n.location?"relative":"fixed"})),ze=Object(x.h)((function(n){return Object(k.jsx)(ke,{location:n.location.pathname,children:"Smart Design Joinery\xa9. All rights reserved"})}));function Se(){var n=Object(x.g)().pathname;return Object(s.useEffect)((function(){window.scrollTo(0,0)}),[n]),null}var Ce=function(){return Object(k.jsxs)(b.a,{children:[Object(k.jsx)(Se,{}),Object(k.jsx)(F,{}),Object(k.jsxs)(x.d,{children:[Object(k.jsx)(x.b,{path:"/home",children:Object(k.jsx)(ye,{})}),Object(k.jsx)(x.b,{path:"/gallery",children:Object(k.jsx)(Vn,{})}),Object(k.jsx)(x.b,{path:"/information",children:Object(k.jsx)(q,{})}),Object(k.jsx)(x.b,{path:"/contact",children:Object(k.jsx)(In,{})}),Object(k.jsx)(x.b,{children:Object(k.jsx)(x.a,{to:"/home"})})]}),Object(k.jsx)(ze,{})]})},Fe=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,59)).then((function(e){var t=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,o=e.getTTFB;t(n),i(n),r(n),a(n),o(n)}))};j.a.render(Object(k.jsx)(d.a.StrictMode,{children:Object(k.jsx)(Ce,{})}),document.getElementById("root")),Fe()}},[[58,1,2]]]);
//# sourceMappingURL=main.8b0263e7.chunk.js.map