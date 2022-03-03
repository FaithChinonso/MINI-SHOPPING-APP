(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(t,e,i){t.exports={item:"CartItem_item__1zMOi",details:"CartItem_details__2_Z3n",quantity:"CartItem_quantity__DfEXm",price:"CartItem_price__2Nl0j",itemprice:"CartItem_itemprice__j9ZSt",actions:"CartItem_actions__UwVPJ"}},,function(t,e,i){t.exports={cart:"Cart_cart__3GqLz",total:"Cart_total__3pLin",actions:"Cart_actions__1GOmr"}},function(t,e,i){t.exports={item:"ProductItem_item__WYS0J",price:"ProductItem_price__1GiPR",actions:"ProductItem_actions__14Yr-",image:"ProductItem_image__11Jss"}},,,function(t,e,i){t.exports={notification:"Notification_notification__1C7Ma",error:"Notification_error__1RsiN",success:"Notification_success__2WaDl"}},,,function(t,e,i){t.exports={button:"CartButton_button__3nU_b",badge:"CartButton_badge__3njqM"}},,function(t,e,i){t.exports={card:"Card_card__1m44e"}},function(t,e,i){t.exports={header:"MainHeader_header__k5Wsz"}},function(t,e,i){t.exports={products:"Products_products__1PCvW"}},,,,,,,,function(t,e,i){},,,function(t,e,i){"use strict";i.r(e);var c=i(2),a=i(9),n=i.n(a),r=(i(25),i(1)),s=i(15),o=i.n(s),u=i(0),d=function(t){return Object(u.jsx)("section",{className:"".concat(o.a.card," ").concat(t.className?t.className:""),children:t.children})},l=i(6),p=i.n(l),m=i(4),j=i.n(m),h=i(5),b=Object(h.b)({name:"cart",initialState:{items:[],totalQuantity:0,changed:!1,totalAmount:0},reducers:{replaceCart:function(t,e){t.totalQuantity=e.payload.totalQuantity,t.items=e.payload.items,t.totalAmount=e.payload.totalAmount},addItemToCart:function(t,e){var i=e.payload,c=t.items.find((function(t){return t.id===i.id}));t.totalQuantity++,t.changed=!0,c?(c.quantity++,c.totalPrice=c.totalPrice+i.price,t.totalAmount=t.totalAmount+i.price):(t.items.push({id:i.id,price:i.price,quantity:1,totalPrice:i.price,name:i.title,img:i.img}),t.totalAmount=t.totalAmount+i.price)},removeItemFromCart:function(t,e){var i=e.payload,c=t.items.find((function(t){return t.id===i}));t.totalQuantity--,t.changed=!0,1===c.quantity?(t.items=t.items.filter((function(t){return t.id!==i})),t.totalAmount=t.totalAmount-c.price):(c.quantity--,c.totalPrice=c.totalPrice-c.price,t.totalAmount=t.totalAmount-c.price)}}}),f=b.actions,x=b,O=function(t){var e=Object(c.b)(),i=t.item,a=i.title,n=i.quantity,r=i.total,s=i.price,o=i.id,d=function(t){return Number(t).toLocaleString("en-US",{minimumFractionDigits:2})};return Object(u.jsxs)("li",{className:j.a.item,children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:a}),Object(u.jsxs)("div",{className:j.a.price,children:["\u20a6",d(r.toFixed(2)),Object(u.jsxs)("span",{className:j.a.itemprice,children:["(\u20a6",d(s.toFixed(2)),"/item)"]})]})]}),Object(u.jsxs)("div",{className:j.a.details,children:[Object(u.jsxs)("div",{className:j.a.quantity,children:["x ",Object(u.jsx)("span",{children:n})]}),Object(u.jsxs)("div",{className:j.a.actions,children:[Object(u.jsx)("button",{onClick:function(){e(f.removeItemFromCart(o))},children:"-"}),Object(u.jsx)("button",{onClick:function(){e(f.addItemToCart({id:o,price:s,title:a}))},children:"+"})]})]})]})},g=function(t){var e,i=Object(c.c)((function(t){return t.cart})),a=i.items,n=i.totalAmount;return Object(u.jsxs)(d,{className:p.a.cart,children:[Object(u.jsx)("h2",{children:"Your Shopping Cart"}),Object(u.jsx)("ul",{children:a.map((function(t){return Object(u.jsx)(O,{item:{id:t.id,title:t.name,quantity:t.quantity,total:t.totalPrice,price:t.price}},t.id)}))}),Object(u.jsxs)("div",{className:p.a.total,children:[Object(u.jsx)("span",{children:"Total Amount: "}),Object(u.jsxs)("span",{children:[" \u20a6",(e=n.toFixed(2),Number(e).toLocaleString("en-US",{minimumFractionDigits:2}))]})]}),Object(u.jsx)("div",{className:p.a.actions,children:a.length>0&&Object(u.jsx)("button",{className:p.a.button,children:"Order"})})]})},_=Object(h.b)({name:"ui",initialState:{cartIsVisible:!1,notification:{}},reducers:{toggle:function(t){t.cartIsVisible=!t.cartIsVisible},showNotification:function(t,e){t.notification={status:e.payload.status,title:e.payload.title,message:e.payload.message}}}}),w=_.actions,y=_,v=i(13),C=i.n(v),N=function(t){var e=Object(c.b)(),i=Object(c.c)((function(t){return t.cart.totalQuantity}));return Object(u.jsxs)("button",{className:C.a.button,onClick:function(){e(w.toggle())},children:[Object(u.jsx)("span",{children:"My Cart"}),Object(u.jsx)("span",{className:C.a.badge,children:i})]})},k=i(16),S=i.n(k),A=function(t){return Object(u.jsxs)("header",{className:S.a.header,children:[Object(u.jsx)("h1",{children:"ShopFay"}),Object(u.jsx)("nav",{children:Object(u.jsx)("ul",{children:Object(u.jsx)("li",{children:Object(u.jsx)(N,{})})})})]})},M=function(t){return Object(u.jsxs)(r.Fragment,{children:[Object(u.jsx)(A,{}),Object(u.jsx)("main",{children:t.children})]})},I=i(7),P=i.n(I),F=function(t){var e,i=t.title,a=t.price,n=t.description,r=t.id,s=t.img,o=Object(c.b)();return Object(u.jsx)("li",{className:P.a.item,children:Object(u.jsxs)(d,{children:[Object(u.jsxs)("header",{children:[Object(u.jsx)("h3",{children:i}),Object(u.jsxs)("div",{className:P.a.price,children:["\u20a6",(e=a.toFixed(2),Number(e).toLocaleString("en-US",{minimumFractionDigits:2}))]})]}),Object(u.jsx)("img",{src:s,className:P.a.image}),Object(u.jsx)("p",{children:n}),Object(u.jsx)("div",{className:P.a.actions,children:Object(u.jsx)("button",{onClick:function(){o(f.addItemToCart({id:r,price:a,title:i}))},children:"Add to Cart"})})]})})},T=i(17),q=i.n(T),L=[{id:"p1",price:16e3,title:"Yettie v-neck Gown",description:"Made with Lycra",src:i.p+"static/media/vneckGown.10338b99.png"},{id:"p2",price:15e3,title:"Oma Scrunch Gown",description:"Made with Challis ",src:i.p+"static/media/omaGown.fd24fe9a.png"},{id:"p3",price:5e3,title:"Fifi Vintage Shirt",description:"Made with Chiffon ",src:i.p+"static/media/fifi.7c6cb999.png"},{id:"p4",price:5e3,title:"LuluXX Turtle Neck",description:"Made with Fannel",src:i.p+"static/media/turtlenneck.f2997934.png"},{id:"p5",price:4e3,title:"Low-Key Crop Top",description:"Made with Spandex",src:i.p+"static/media/low-key.b4aef698.png"},{id:"p6",price:19e3,title:"La-Curve Two piece",description:"Made with Chiffon",src:i.p+"static/media/laCurve.da0559ff.png"},{id:"p7",price:15e3,title:"Awetu Fur Top",description:"Made with mink fur",src:i.p+"static/media/awetu.ea3527cb.png"},{id:"p8",price:15e3,title:"Charmz Leather Jacket",description:"Made with Leather",src:i.p+"static/media/charmz.141b07b6.png"},{id:"p9",price:8e3,title:"Preshy Gown",description:"Made with crepe and organza",src:i.p+"static/media/preshy.e7289403.png"},{id:"p10",price:8e3,title:"Mutula Body-con Gown ",description:"Made with crepe and elastane",src:i.p+"static/media/mutula.65d1bc10.png"},{id:"p11",price:12e3,title:"Bundy Jacket ",description:"Made with suede",src:i.p+"static/media/T.E.A.df794e06.png"},{id:"p12",price:1e4,title:"T.E.A Top ",description:"Made with organza",src:i.p+"static/media/ruffledTop.f9c85fbb.png"},{id:"p13",price:13e3,title:"Chisara Two Piece ",description:"Made with crepe",src:i.p+"static/media/chisara.b4aef698.png"},{id:"p14",price:12e3,title:"onChez Jumpsuit ",description:"Made with crepe",src:i.p+"static/media/onChez.8e30632b.png"},{id:"p15",price:2e4,title:"LuluPop Blazer",description:"Made with cashmere",src:i.p+"static/media/luluPop.73a5cd9e.png"}],z=function(t){return Object(u.jsxs)("section",{className:q.a.products,children:[Object(u.jsx)("h2",{children:"Buy your favorite products"}),Object(u.jsx)("ul",{children:L.map((function(t){return Object(u.jsx)(F,{id:t.id,title:t.title,price:t.price,description:t.description,img:t.src},t.id)}))})]})},E=i(8),Q=i(3),G=i.n(Q),J=i(10),B=i.n(J),U=function(t){var e="";"error"===t.status&&(e=B.a.error),"success"===t.status&&(e=B.a.success);var i="".concat(B.a.notification," ").concat(e);return Object(u.jsxs)("section",{className:i,children:[Object(u.jsx)("h2",{children:t.title}),Object(u.jsx)("p",{children:t.message})]})},V=!0;var D=function(){var t=Object(c.b)(),e=Object(c.c)((function(t){return t.ui.cartIsVisible})),i=Object(c.c)((function(t){return t.cart})),a=Object(c.c)((function(t){return t.ui.notification}));return Object(r.useEffect)((function(){t(function(){var t=Object(E.a)(G.a.mark((function t(e){var i,c;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=function(){var t=Object(E.a)(G.a.mark((function t(){var e,i;return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://react-http-99426-default-rtdb.firebaseio.com/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Could not fetch cart data!");case 5:return t.next=7,e.json();case 7:return i=t.sent,t.abrupt("return",i);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,i();case 4:c=t.sent,e(w.showNotification({status:"success",title:"Success!",message:"Fetch cart data successfully!"})),e(f.replaceCart({items:c.items||[],totalQuantity:c.totalQuantity,totalAmount:c.totalAmount})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(w.showNotification({status:"error",title:"Error!",message:"Fetching cart data failed!"}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[t]),Object(r.useEffect)((function(){V?V=!1:i.changed&&t(function(t){return function(){var e=Object(E.a)(G.a.mark((function e(i){var c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(w.showNotification({status:"pending",title:"Sending...",message:"Sending cart data!"})),c=function(){var e=Object(E.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://react-http-99426-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity,totalAmount:t.totalAmount})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("Sending cart data failed.");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,c();case 5:i(w.showNotification({status:"success",title:"Success!",message:"Sent cart data successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),i(w.showNotification({status:"error",title:"Error!",message:"Sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(i))}),[i.items]),Object(u.jsxs)(r.Fragment,{children:[a&&Object(u.jsx)(U,{status:a.status,title:a.title,message:a.message}),Object(u.jsxs)(M,{children:[e&&Object(u.jsx)(g,{}),Object(u.jsx)(z,{})]})]})},W=Object(h.a)({reducer:{ui:y.reducer,cart:x.reducer}});n.a.render(Object(u.jsx)(c.a,{store:W,children:Object(u.jsx)(D,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.3d207053.chunk.js.map