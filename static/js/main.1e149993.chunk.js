(this["webpackJsonpreact-lab"]=this["webpackJsonpreact-lab"]||[]).push([[0],{10:function(e,t,s){e.exports={post:"Post_post__AeL2Q",head:"Post_head__3Ifbq",content:"Post_content__Rx3QQ",imageFrame:"Post_imageFrame__2k86U",interactions:"Post_interactions__1E4qx",buttons:"Post_buttons__11q7V",likes:"Post_likes__1E7os",comments:"Post_comments__1DncM",ago:"Post_ago__1rXRs",addComment:"Post_addComment__3VFus"}},12:function(e,t,s){e.exports={container:"NewPost_container__13pUK",photo:"NewPost_photo__2OsKg",dropArea:"NewPost_dropArea__Zmx7q",dragging:"NewPost_dragging__QenB_",message:"NewPost_message__1z2Dz",image:"NewPost_image__2dguM",desc:"NewPost_desc__2H1n9",actions:"NewPost_actions__11A6g",error:"NewPost_error__3US16"}},15:function(e,t,s){e.exports={navbar:"Navbar_navbar__1gKEw",navItem:"Navbar_navItem__1xpur"}},17:function(e,t,s){e.exports={header:"Header_header__30JHg"}},18:function(e,t,s){e.exports={square:"PostThumbnail_square__Mss66",content:"PostThumbnail_content__1q-57",image:"PostThumbnail_image__G5EbL"}},23:function(e,t,s){e.exports={container:"App_container__2tU7E",content:"App_content__2LrRA"}},35:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),a=s(25),o=s.n(a),c=(s(35),s(4)),i=s(2),d=s(17),l=s.n(d),j=function(e){return(e.startsWith("data:image")?"":"/web-app-project")+e},u=s(0);var b=function(){return Object(u.jsxs)("div",{className:l.a.header,children:[Object(u.jsx)("div",{className:l.a.headerItem,children:Object(u.jsx)("button",{children:Object(u.jsx)("img",{src:j("/assets/camera.svg"),alt:"Home"})})}),Object(u.jsx)("div",{className:l.a.headerItem,children:Object(u.jsx)("button",{children:Object(u.jsx)("img",{src:j("/assets/logo.png"),alt:"Explore"})})}),Object(u.jsx)("div",{className:l.a.headerItem,children:Object(u.jsx)("button",{children:Object(u.jsx)("img",{src:j("/assets/message.svg"),alt:"Home"})})})]})},h=s(15),p=s.n(h);var m=function(){return Object(u.jsxs)("nav",{className:p.a.navbar,children:[Object(u.jsx)("div",{className:p.a.navItem,children:Object(u.jsx)(c.b,{to:"/",children:Object(u.jsx)("img",{src:j("/assets/home.svg"),alt:"Home"})})}),Object(u.jsx)("div",{className:p.a.navItem,children:Object(u.jsx)(c.b,{to:"/explore",children:Object(u.jsx)("img",{src:j("/assets/explore.svg"),alt:"Explore"})})}),Object(u.jsx)("div",{className:p.a.navItem,children:Object(u.jsx)(c.b,{to:"/newpost",children:Object(u.jsx)("img",{src:j("/assets/newpost.svg"),alt:"Newpost"})})}),Object(u.jsx)("div",{className:p.a.navItem,children:Object(u.jsx)(c.b,{to:"/activity",children:Object(u.jsx)("img",{src:j("/assets/activity.svg"),alt:"Activity"})})}),Object(u.jsx)("div",{className:p.a.navItem,children:Object(u.jsx)(c.b,{to:"/profile",children:Object(u.jsx)("img",{src:j("/assets/profile.svg"),alt:"Home"})})})]})},f=s(11);s(42);var O=function(e){var t=e.userId,s=e.desc,n=e.comments.map((function(e){return Object(u.jsxs)("li",{children:[Object(u.jsx)(c.b,{to:"/profile/".concat(e.userId),children:Object(u.jsx)("strong",{children:e.userId})},e.userId),Object(u.jsx)("p",{children:e.text})]})}));return Object(u.jsxs)("ul",{children:[Object(u.jsxs)("li",{children:[Object(u.jsx)(c.b,{to:"/profile/".concat(t),children:Object(u.jsx)("strong",{children:t})},t),Object(u.jsx)("p",{children:s})]}),n]})},x=s(10),g=s.n(x),v=function(e){var t=Math.floor((new Date-new Date(e))/1e3),s=Math.floor(t/31556926);return s>=1?s+" years":(s=Math.floor(t/2592e3))>=1?s+" months":(s=Math.floor(t/86400))>=1?s+" days":(s=Math.floor(t/3600))>=1?s+" hours":(s=Math.floor(t/60))>=1?s+" minutes":Math.floor(t)+" seconds"};var _=function(e){var t=Object(n.useState)(""),s=Object(f.a)(t,2),r=s[0],a=s[1],o=Object(n.useState)(!1),i=Object(f.a)(o,2),d=i[0],l=i[1];return Object(u.jsxs)("div",{className:g.a.post,children:[Object(u.jsxs)("div",{className:g.a.head,children:[Object(u.jsx)(c.b,{to:"/profile/".concat(e.post.userId),children:Object(u.jsx)("img",{src:j(e.user.photo),alt:"icon"})},e.post.userId),Object(u.jsx)(c.b,{to:"/profile/".concat(e.post.userId),children:Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:e.user.id})})},e.post.userId)]}),Object(u.jsxs)("div",{className:g.a.content,children:[Object(u.jsx)("div",{className:g.a.imageFrame,children:Object(u.jsx)("img",{src:j(e.post.photo),alt:"pic"})}),Object(u.jsxs)("div",{className:g.a.interactions,children:[Object(u.jsxs)("div",{className:g.a.buttons,children:[Object(u.jsx)("button",{children:e.likes.self?Object(u.jsx)("img",{src:j("/assets/unlike.svg"),onClick:function(){e.onUnlike(e.post.id)},alt:"Like"}):Object(u.jsx)("img",{src:j("/assets/like.svg"),onClick:function(){e.onLike(e.post.id)},alt:"unLike"})}),Object(u.jsx)("button",{onClick:function(e){return l(!d)},children:Object(u.jsx)("img",{src:j("/assets/comment.svg"),alt:"Comment"})})]}),Object(u.jsx)("div",{className:g.a.likes,children:Object(u.jsx)("p",{children:Object(u.jsxs)("strong",{children:[e.likes.count," likes"]})})}),Object(u.jsx)("div",{className:g.a.comments,children:Object(u.jsx)(O,{userId:e.post.userId,desc:e.post.desc,comments:e.comments})}),Object(u.jsxs)("p",{className:g.a.ago,children:[v(e.post.datetime)," ago"]}),d&&Object(u.jsxs)("form",{className:g.a.addComment,onSubmit:function(t){e.onComment(e.post.id,r),a(""),l(!1),t.preventDefault()},children:[Object(u.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:r,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"Post"})]})]})]})]})},I=s(5),w={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]};var N=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),s=0;s<1e7&&!((new Date).getTime()-t>e);s++);}(1),e?e+t:t},k=Object(n.createContext)();var D=function(e){var t=Object(n.useState)((function(){return JSON.parse(window.localStorage.getItem("store"))||w})),s=Object(f.a)(t,2),r=s[0],a=s[1];return Object(n.useEffect)((function(){window.localStorage.setItem("store",JSON.stringify(r))}),[r]),Object(u.jsx)(k.Provider,{value:Object(I.a)(Object(I.a)({},r),{},{addComment:function(e,t){var s={userId:r.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};a(Object(I.a)(Object(I.a)({},r),{},{comments:r.comments.concat(s)}))},addLike:function(e){var t={userId:r.currentUserId,postId:e,datetime:(new Date).toISOString()};a(Object(I.a)(Object(I.a)({},r),{},{likes:r.likes.concat(t)}))},removeLike:function(e){a(Object(I.a)(Object(I.a)({},r),{},{likes:r.likes.filter((function(t){return!(t.userId===r.currentUserId&&t.postId===e)}))}))},addPost:function(e,t){var s={id:N("post"),userId:r.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};a(Object(I.a)(Object(I.a)({},r),{},{posts:r.posts.concat(s)}))},addFollower:function(e,t){var s={userId:e,followerId:t};a(Object(I.a)(Object(I.a)({},r),{},{followers:r.followers.concat(s)}))},removeFollower:function(e,t){a(Object(I.a)(Object(I.a)({},r),{},{followers:r.followers.filter((function(s){return!(s.userId===e&&s.followerId===t)}))}))}}),children:e.children})};var y=function(){var e=Object(i.g)().postId,t=Object(n.useContext)(k),s=t.posts,r=t.users,a=t.comments,o=t.likes,c=t.currentUserId,d=t.addComment,l=t.addLike,j=t.removeLike;function b(e){return r.find((function(t){return t.id===e.userId}))}function h(e){return a.filter((function(t){return t.postId===e.id}))}function p(e){var t=o.filter((function(t){return t.postId===e.id}));return{self:t.some((function(e){return e.userId===c})),count:t.length}}return Object(u.jsx)("div",{children:s.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).filter(void 0===e?function(e){return e}:function(t){return t.id===e}).map((function(e){return Object(u.jsx)(_,{user:b(e),post:e,comments:h(e),likes:p(e),onLike:l,onUnlike:j,onComment:d},e.id)}))})};var P=function(){return Object(u.jsx)("div",{children:"Explore"})};var T=function(){return Object(u.jsx)("div",{children:"Activity"})},C=s(12),S=s.n(C),L=s(27),F=s(28),E=s(14),U=s(30),Z=s(29),M=function(e){Object(U.a)(s,e);var t=Object(Z.a)(s);function s(e){var n;return Object(L.a)(this,s),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(E.a)(n)),n.handleDrop=n.handleDrop.bind(Object(E.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(E.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(E.a)(n)),n}return Object(F.a)(s,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=r.a.Children.only(this.props.children);return r.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),s}(n.PureComponent);var A=function(){var e=Object(n.useState)(!1),t=Object(f.a)(e,2),s=t[0],r=t[1],a=Object(n.useState)(""),o=Object(f.a)(a,2),c=o[0],d=o[1],l=Object(n.useState)(null),j=Object(f.a)(l,2),b=j[0],h=j[1],p=Object(n.useState)(""),m=Object(f.a)(p,2),O=m[0],x=m[1],g=Object(i.f)(),v=Object(n.useContext)(k).addPost;return Object(u.jsxs)("div",{className:S.a.container,children:[Object(u.jsxs)("div",{className:S.a.photo,children:[b?Object(u.jsx)("img",{src:b,alt:"New Post"}):Object(u.jsx)("div",{className:S.a.message,children:"Drop your image"}),Object(u.jsx)(M,{onDragEnter:function(e){r(!0)},onDragLeave:function(e){r(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var s=new FileReader;s.onloadend=function(e){h(e.target.result)},s.readAsDataURL(t)}}r(!1)}},children:Object(u.jsx)("div",{className:[S.a.dropArea,s?S.a.dragging:null].join(" ")})})]}),Object(u.jsx)("div",{className:S.a.desc,children:Object(u.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:c,onChange:function(e){return function(e){d(e)}(e.target.value)}})}),Object(u.jsx)("div",{className:S.a.error,children:O}),Object(u.jsxs)("div",{className:S.a.actions,children:[Object(u.jsx)("button",{onClick:function(){g.push("/")},children:"Cancel"}),Object(u.jsx)("button",{onClick:function(e){e.preventDefault(),null!==b?(v(b,c),x(""),g.push("/")):x("Upload failed.")},children:"Share"})]})]})},B=s(18),H=s.n(B);var J=function(e){return Object(u.jsx)("div",{className:H.a.square,children:Object(u.jsx)("div",{className:H.a.content,children:Object(u.jsx)("img",{className:H.a.image,src:j(e.props.photo),alt:"Post Thumbnail"})})})},q=s(8),R=s.n(q);var z=function(){var e=Object(n.useContext)(k),t=e.users,s=e.posts,r=e.followers,a=e.currentUserId,o=e.addFollower,d=e.removeFollower,l=Object(i.g)().userId,h=t.find(void 0===l?function(e){return e.id===a}:function(e){return e.id===l});function p(){return s.filter((function(e){return e.userId===h.id}))}function m(){o(h.id,a)}function f(){d(h.id,a)}return Object(u.jsxs)("div",{children:[Object(u.jsx)(b,{}),Object(u.jsxs)("div",{className:R.a.upper,children:[Object(u.jsxs)("div",{className:R.a.prof,children:[Object(u.jsxs)("div",{className:R.a.head,children:[Object(u.jsx)("img",{src:j(h.photo),alt:"bigFace"}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:h.id}),function(){if(h.id!==a){var e=r.some((function(e){return e.userId===h.id&&e.followerId===a})),t=e?R.a.unfollowBtn:R.a.followBtn,s=e?"Unfollow":"Follow",n=e?f:m;return Object(u.jsx)("button",{className:t,onClick:n,children:s})}}()]})]}),Object(u.jsxs)("div",{className:R.a.intro,children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:h.name})}),Object(u.jsx)("p",{children:h.bio})]})]}),Object(u.jsxs)("div",{className:R.a.attributes,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:p().length})}),Object(u.jsx)("p",{className:R.a.weak,children:"posts"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:r.filter((function(e){return e.userId===h.id})).length})}),Object(u.jsx)("p",{className:R.a.weak,children:"followers"})]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("p",{children:Object(u.jsx)("strong",{children:r.filter((function(e){return e.followerId===h.id})).length})}),Object(u.jsx)("p",{className:R.a.weak,children:"following"})]})]})]}),Object(u.jsx)("div",{className:R.a.lower,children:Object(u.jsx)("div",{className:R.a.posts,children:p().map((function(e){return Object(u.jsx)(c.b,{to:"/".concat(e.id),children:Object(u.jsx)(J,{props:e})},e.id)}))})})]})},K=s(23),Q=s.n(K);var V=function(){return Object(u.jsx)(c.a,{basename:"/web-app-project",children:Object(u.jsx)(D,{children:Object(u.jsxs)("div",{className:Q.a.container,children:[Object(u.jsx)(b,{}),Object(u.jsx)("main",{className:Q.a.content,children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/explore",children:Object(u.jsx)(P,{})}),Object(u.jsx)(i.a,{path:"/newpost",children:Object(u.jsx)(A,{})}),Object(u.jsx)(i.a,{path:"/activity",children:Object(u.jsx)(T,{})}),Object(u.jsx)(i.a,{path:"/profile/:userId?",children:Object(u.jsx)(z,{})}),Object(u.jsx)(i.a,{path:"/:postId?",children:Object(u.jsx)(y,{})})]})}),Object(u.jsx)(m,{})]})})})},W=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),a(e),o(e)}))};o.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(V,{})}),document.getElementById("root")),W()},8:function(e,t,s){e.exports={prof:"Profile_prof__1rl_U",head:"Profile_head__3Mf-r",intro:"Profile_intro__2NiVd",attributes:"Profile_attributes__33bp6",weak:"Profile_weak__1P5LK",posts:"Profile_posts__1eFPv",followBtn:"Profile_followBtn__ONfj1",unfollowBtn:"Profile_unfollowBtn__2cFMN"}}},[[43,1,2]]]);
//# sourceMappingURL=main.1e149993.chunk.js.map