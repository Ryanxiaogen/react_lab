(this["webpackJsonpreact-lab"]=this["webpackJsonpreact-lab"]||[]).push([[0],{11:function(e,t,s){e.exports={post:"Post_post__1olYH",head:"Post_head__3LXQP",content:"Post_content__2Nwn6",imageFrame:"Post_imageFrame__1vwzN",interactions:"Post_interactions__1Qf87",buttons:"Post_buttons__3Ixt9",likes:"Post_likes__ejKip",comments:"Post_comments__1qeR8",ago:"Post_ago___-3Qk",addComment:"Post_addComment__1HplA"}},12:function(e,t,s){e.exports={container:"NewPost_container__1SAOT",photo:"NewPost_photo__2uYWs",dropArea:"NewPost_dropArea__2BBl7",dragging:"NewPost_dragging__3kMjq",message:"NewPost_message__2ddgH",image:"NewPost_image__1_qQD",desc:"NewPost_desc__1EWxR",actions:"NewPost_actions__1HfR3",error:"NewPost_error__2eM80"}},15:function(e,t,s){e.exports={navbar:"Navbar_navbar__3RAUe",navItem:"Navbar_navItem__ojOCd"}},17:function(e,t,s){e.exports={header:"Header_header__2FjtG"}},18:function(e,t,s){e.exports={square:"PostThumbnail_square__1pObp",content:"PostThumbnail_content__CZEiK",image:"PostThumbnail_image__1vEVr"}},23:function(e,t,s){e.exports={container:"App_container__1_sBf",content:"App_content__2VDeW"}},35:function(e,t,s){},42:function(e,t,s){},43:function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),o=s(25),a=s.n(o),c=(s(35),s(8)),i=s(10),d=s(4),l=s(2),j=s(17),u=s.n(j),h=function(e){return(e.startsWith("data:image")?"":"/react_lab")+e},b=s(0);var p=function(){return Object(b.jsxs)("div",{className:u.a.header,children:[Object(b.jsx)("div",{className:u.a.headerItem,children:Object(b.jsx)("button",{children:Object(b.jsx)("img",{src:h("/assets/camera.svg"),alt:"Home"})})}),Object(b.jsx)("div",{className:u.a.headerItem,children:Object(b.jsx)("button",{children:Object(b.jsx)("img",{src:h("/assets/logo.png"),alt:"Explore"})})}),Object(b.jsx)("div",{className:u.a.headerItem,children:Object(b.jsx)("button",{children:Object(b.jsx)("img",{src:h("/assets/message.svg"),alt:"Home"})})})]})},m=s(15),f=s.n(m);var O=function(){return Object(b.jsxs)("nav",{className:f.a.navbar,children:[Object(b.jsx)("div",{className:f.a.navItem,children:Object(b.jsx)(d.b,{to:"/",children:Object(b.jsx)("img",{src:h("/assets/home.svg"),alt:"Home"})})}),Object(b.jsx)("div",{className:f.a.navItem,children:Object(b.jsx)(d.b,{to:"/explore",children:Object(b.jsx)("img",{src:h("/assets/explore.svg"),alt:"Explore"})})}),Object(b.jsx)("div",{className:f.a.navItem,children:Object(b.jsx)(d.b,{to:"/newpost",children:Object(b.jsx)("img",{src:h("/assets/newpost.svg"),alt:"Newpost"})})}),Object(b.jsx)("div",{className:f.a.navItem,children:Object(b.jsx)(d.b,{to:"/activity",children:Object(b.jsx)("img",{src:h("/assets/activity.svg"),alt:"Activity"})})}),Object(b.jsx)("div",{className:f.a.navItem,children:Object(b.jsx)(d.b,{to:"/profile",children:Object(b.jsx)("img",{src:h("/assets/profile.svg"),alt:"Home"})})})]})};s(42);var x=function(e){var t=e.userId,s=e.desc,n=e.comments.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsx)(d.b,{to:"/profile/".concat(e.userId),children:Object(b.jsx)("strong",{children:e.userId})},e.userId),Object(b.jsx)("p",{children:e.text})]})}));return Object(b.jsxs)("ul",{children:[Object(b.jsxs)("li",{children:[Object(b.jsx)(d.b,{to:"/profile/".concat(t),children:Object(b.jsx)("strong",{children:t})},t),Object(b.jsx)("p",{children:s})]}),n]})},g=s(11),v=s.n(g),_=function(e){var t=Math.floor((new Date-new Date(e))/1e3),s=Math.floor(t/31556926);return s>=1?s+" years":(s=Math.floor(t/2592e3))>=1?s+" months":(s=Math.floor(t/86400))>=1?s+" days":(s=Math.floor(t/3600))>=1?s+" hours":(s=Math.floor(t/60))>=1?s+" minutes":Math.floor(t)+" seconds"};var I=function(e){var t=Object(n.useState)(""),s=Object(i.a)(t,2),r=s[0],o=s[1],a=Object(n.useState)(!1),c=Object(i.a)(a,2),l=c[0],j=c[1];return Object(b.jsxs)("div",{className:v.a.post,children:[Object(b.jsxs)("div",{className:v.a.head,children:[Object(b.jsx)(d.b,{to:"/profile/".concat(e.post.userId),children:Object(b.jsx)("img",{src:h(e.user.photo),alt:"icon"})},e.post.userId),Object(b.jsx)(d.b,{to:"/profile/".concat(e.post.userId),children:Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:e.user.id})})},e.post.userId)]}),Object(b.jsxs)("div",{className:v.a.content,children:[Object(b.jsx)("div",{className:v.a.imageFrame,children:Object(b.jsx)("img",{src:h(e.post.photo),alt:"pic"})}),Object(b.jsxs)("div",{className:v.a.interactions,children:[Object(b.jsxs)("div",{className:v.a.buttons,children:[Object(b.jsx)("button",{children:e.likes.self?Object(b.jsx)("img",{src:h("/assets/unlike.svg"),onClick:function(){e.onUnlike(e.post.id)},alt:"Like"}):Object(b.jsx)("img",{src:h("/assets/like.svg"),onClick:function(){e.onLike(e.post.id)},alt:"unLike"})}),Object(b.jsx)("button",{onClick:function(e){return j(!l)},children:Object(b.jsx)("img",{src:h("/assets/comment.svg"),alt:"Comment"})})]}),Object(b.jsx)("div",{className:v.a.likes,children:Object(b.jsx)("p",{children:Object(b.jsxs)("strong",{children:[e.likes.count," likes"]})})}),Object(b.jsx)("div",{className:v.a.comments,children:Object(b.jsx)(x,{userId:e.post.userId,desc:e.post.desc,comments:e.comments})}),Object(b.jsxs)("p",{className:v.a.ago,children:[_(e.post.datetime)," ago"]}),l&&Object(b.jsxs)("form",{className:v.a.addComment,onSubmit:function(t){e.onComment(e.post.id,r),o(""),j(!1),t.preventDefault()},children:[Object(b.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:r,onChange:function(e){return o(e.target.value)}}),Object(b.jsx)("button",{type:"submit",children:"Post"})]})]})]})]})};var w=function(e){var t=e.store,s=Object(l.g)().postId;function n(e,t){return t.users.find((function(t){return t.id===e.userId}))}function r(e,t){return t.comments.filter((function(t){return t.postId===e.id}))}function o(e,t){var s=t.likes.filter((function(t){return t.postId===e.id}));return{self:s.some((function(e){return e.userId===t.currentUserId})),count:s.length}}return Object(b.jsx)("div",{children:t.posts.sort((function(e,t){return new Date(t.datetime)-new Date(e.datetime)})).filter(void 0===s?function(e){return e}:function(e){return e.id===s}).map((function(s){return Object(b.jsx)(I,{user:n(s,t),post:s,comments:r(s,t),likes:o(s,t),onLike:e.onLike,onUnlike:e.onUnlike,onComment:e.onComment},s.id)}))})};var k=function(){return Object(b.jsx)("div",{children:"Explore"})};var N=function(){return Object(b.jsx)("div",{children:"Activity"})},D=s(12),y=s.n(D),P=s(27),T=s(28),C=s(14),S=s(30),U=s(29),L=function(e){Object(S.a)(s,e);var t=Object(U.a)(s);function s(e){var n;return Object(P.a)(this,s),(n=t.call(this,e)).handleDragEnter=n.handleDragEnter.bind(Object(C.a)(n)),n.handleDrop=n.handleDrop.bind(Object(C.a)(n)),n.handleDragOver=n.handleDragOver.bind(Object(C.a)(n)),n.handleDragLeave=n.handleDragLeave.bind(Object(C.a)(n)),n}return Object(T.a)(s,[{key:"handleDrop",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDrop&&this.props.onDrop(e)}},{key:"handleDragEnter",value:function(e){e.preventDefault(),e.stopPropagation(),this.dragTargetSaved=e.target,this.props.onDragEnter&&this.props.onDragEnter(e)}},{key:"handleDragOver",value:function(e){!1!==e.dataTransfer.types.includes("Files")&&(e.preventDefault(),e.stopPropagation(),this.props.onDragOver&&this.props.onDragOver(e))}},{key:"handleDragLeave",value:function(e){e.preventDefault(),e.stopPropagation(),this.props.onDragLeave&&this.dragTargetSaved===e.target&&this.props.onDragLeave(e)}},{key:"render",value:function(){var e=r.a.Children.only(this.props.children);return r.a.cloneElement(e,{onDragEnter:this.handleDragEnter,onDragOver:this.handleDragOver,onDragLeave:this.handleDragLeave,onDrop:this.handleDrop})}}]),s}(n.PureComponent);var F=function(e){var t=Object(n.useState)(!1),s=Object(i.a)(t,2),r=s[0],o=s[1],a=Object(n.useState)(""),c=Object(i.a)(a,2),d=c[0],j=c[1],u=Object(n.useState)(null),h=Object(i.a)(u,2),p=h[0],m=h[1],f=Object(n.useState)(""),O=Object(i.a)(f,2),x=O[0],g=O[1],v=Object(l.f)();return Object(b.jsxs)("div",{className:y.a.container,children:[Object(b.jsxs)("div",{className:y.a.photo,children:[p?Object(b.jsx)("img",{src:p,alt:"New Post"}):Object(b.jsx)("div",{className:y.a.message,children:"Drop your image"}),Object(b.jsx)(L,{onDragEnter:function(e){o(!0)},onDragLeave:function(e){o(!1)},onDrop:function(e){if(!1!==e.dataTransfer.types.includes("Files")){if(e.dataTransfer.files.length>=1){var t=e.dataTransfer.files[0];if(t.size>1e6)return;if(t.type.match(/image.*/)){var s=new FileReader;s.onloadend=function(e){m(e.target.result)},s.readAsDataURL(t)}}o(!1)}},children:Object(b.jsx)("div",{className:[y.a.dropArea,r?y.a.dragging:null].join(" ")})})]}),Object(b.jsx)("div",{className:y.a.desc,children:Object(b.jsx)("input",{type:"text",placeholder:"Add a comment\u2026",value:d,onChange:function(e){return function(e){j(e)}(e.target.value)}})}),Object(b.jsx)("div",{className:y.a.error,children:x}),Object(b.jsxs)("div",{className:y.a.actions,children:[Object(b.jsx)("button",{onClick:function(){v.push("/")},children:"Cancel"}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),null!==p?(e.addPost(p,d),g(""),v.push("/")):g("Upload failed.")},children:"Share"})]})]})},Z=s(18),E=s.n(Z);var A=function(e){return Object(b.jsx)("div",{className:E.a.square,children:Object(b.jsx)("div",{className:E.a.content,children:Object(b.jsx)("img",{className:E.a.image,src:h(e.props.photo),alt:"Post Thumbnail"})})})},H=s(7),M=s.n(H);var B=function(e){var t=e.store,s=Object(l.g)().userId,n=t.users.find(void 0===s?function(e){return e.id===t.currentUserId}:function(e){return e.id===s});function r(){return t.posts.filter((function(e){return e.userId===n.id}))}function o(){e.onFollow(n.id,t.currentUserId)}function a(){e.onUnfollow(n.id,t.currentUserId)}return Object(b.jsxs)("div",{children:[Object(b.jsx)(p,{}),Object(b.jsxs)("div",{className:M.a.upper,children:[Object(b.jsxs)("div",{className:M.a.prof,children:[Object(b.jsxs)("div",{className:M.a.head,children:[Object(b.jsx)("img",{src:h(n.photo),alt:"bigFace"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:n.id}),function(){if(n.id!==t.currentUserId){var e=t.followers.some((function(e){return e.userId===n.id&&e.followerId===t.currentUserId})),s=e?M.a.unfollowBtn:M.a.followBtn,r=e?"Unfollow":"Follow",c=e?a:o;return Object(b.jsx)("button",{className:s,onClick:c,children:r})}}()]})]}),Object(b.jsxs)("div",{className:M.a.intro,children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:n.name})}),Object(b.jsx)("p",{children:n.bio})]})]}),Object(b.jsxs)("div",{className:M.a.attributes,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:r().length})}),Object(b.jsx)("p",{className:M.a.weak,children:"posts"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:t.followers.filter((function(e){return e.userId===n.id})).length})}),Object(b.jsx)("p",{className:M.a.weak,children:"followers"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:Object(b.jsx)("strong",{children:t.followers.filter((function(e){return e.followerId===n.id})).length})}),Object(b.jsx)("p",{className:M.a.weak,children:"following"})]})]})]}),Object(b.jsx)("div",{className:M.a.lower,children:Object(b.jsx)("div",{className:M.a.posts,children:r().map((function(e){return Object(b.jsx)(d.b,{to:"/".concat(e.id),children:Object(b.jsx)(A,{props:e})},e.id)}))})})]})},J={currentUserId:"judy",users:[{id:"judy",email:"judy@bc.edu",photo:"/assets/user1.png",name:"Judy Hopps",bio:"The first rabbit officer of the Zootopia Police Department. Judy is determined to make the world a better place while breaking preconceptions about other species."},{id:"nick",email:"nick@bc.edu",photo:"/assets/user2.png",name:"Nick Wilde",bio:"Nick is a charming, small-time, con artist fox with a big mouth and a lot of opinions. But when a rabbit cop outsmarts him, he finds himself actually helping her solve a mystery."},{id:"flash",email:"flash@bc.edu",photo:"/assets/user3.png",name:"Flash Slothmore",bio:"Flash is a male three-toed sloth and a supporting character in Zootopia. He works at the Department of Mammal Vehicles."}],followers:[{userId:"nick",followerId:"judy"},{userId:"judy",followerId:"nick"},{userId:"judy",followerId:"flash"}],posts:[{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},{id:"post-2",userId:"nick",photo:"/assets/post2.png",desc:"#happy #selfie with Judy",datetime:"2020-02-06T22:45:28Z"},{id:"post-3",userId:"flash",photo:"/assets/post3.png",desc:"Don't worry I got this",datetime:"2020-02-03T22:45:28Z"},{id:"post-4",userId:"judy",photo:"/assets/post4.png",desc:"Just trying to make a #friend",datetime:"2020-02-06T22:45:28Z"},{id:"post-5",userId:"judy",photo:"/assets/post5.png",desc:"I am now the first rabbit officer!",datetime:"2020-02-06T22:45:28Z"},{id:"post-6",userId:"judy",photo:"/assets/post6.png",desc:"Having #goodtimes with folks here",datetime:"2020-02-06T22:45:28Z"}],comments:[{userId:"nick",postId:"post-1",text:"Welcome to Zootopia!",datetime:"2020-02-09T22:51:40Z"},{userId:"judy",postId:"post-1",text:"Thanks!\ud83d\ude01Looking forward to meeting you!",datetime:"2020-02-09T22:52:01Z"},{userId:"flash",postId:"post-2",text:"Looking good you two! \ud83d\udc30\ud83e\udd8a",datetime:"2020-02-09T22:54:20Z"}],likes:[{userId:"judy",postId:"post-1",datetime:"2020-02-09T22:50:40Z"},{userId:"nick",postId:"post-2",datetime:"2020-02-09T22:51:40Z"},{userId:"flash",postId:"post-2",datetime:"2020-02-09T22:54:20Z"},{userId:"judy",postId:"post-3",datetime:"2020-02-09T22:53:40Z"}]},q=s(23),R=s.n(q);var W=function(e){var t=(new Date).valueOf().toString(36);return function(e){for(var t=(new Date).getTime(),s=0;s<1e7&&!((new Date).getTime()-t>e);s++);}(1),e?e+t:t};var Q=function(e){var t=Object(n.useState)("home"),s=Object(i.a)(t,2),r=(s[0],s[1],Object(n.useState)(J)),o=Object(i.a)(r,2),a=o[0],j=o[1];return Object(b.jsx)(d.a,{basename:"/react_lab",children:Object(b.jsxs)("div",{className:R.a.container,children:[Object(b.jsx)(p,{}),Object(b.jsx)("main",{className:R.a.content,children:Object(b.jsxs)(l.c,{children:[Object(b.jsx)(l.a,{path:"/explore",children:Object(b.jsx)(k,{})}),Object(b.jsx)(l.a,{path:"/newpost",children:Object(b.jsx)(F,{store:a,addPost:function(e,t){var s={id:W("post"),userId:a.currentUserId,photo:e,desc:t,datetime:(new Date).toISOString()};j(Object(c.a)(Object(c.a)({},a),{},{posts:a.posts.concat(s)}))}})}),Object(b.jsx)(l.a,{path:"/activity",children:Object(b.jsx)(N,{})}),Object(b.jsx)(l.a,{path:"/profile/:userId?",children:Object(b.jsx)(B,{store:a,onFollow:function(e,t){var s={userId:e,followerId:t};j(Object(c.a)(Object(c.a)({},a),{},{followers:a.followers.concat(s)}))},onUnfollow:function(e,t){j(Object(c.a)(Object(c.a)({},a),{},{followers:a.followers.filter((function(s){return!(s.userId===e&&s.followerId===t)}))}))}})}),Object(b.jsx)(l.a,{path:"/:postId?",children:Object(b.jsx)(w,{store:a,onLike:function(e){var t={userId:a.currentUserId,postId:e,datetime:(new Date).toISOString()};j(Object(c.a)(Object(c.a)({},a),{},{likes:a.likes.concat(t)}))},onUnlike:function(e){j(Object(c.a)(Object(c.a)({},a),{},{likes:a.likes.filter((function(t){return!(t.userId===a.currentUserId&&t.postId===e)}))}))},onComment:function(e,t){var s={userId:a.currentUserId,postId:e,text:t,datetime:(new Date).toISOString()};j(Object(c.a)(Object(c.a)({},a),{},{comments:a.comments.concat(s)}))}})})]})}),Object(b.jsx)(O,{})]})})},z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,44)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),o(e),a(e)}))};a.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(Q,{})}),document.getElementById("root")),z()},7:function(e,t,s){e.exports={prof:"Profile_prof__bUULo",head:"Profile_head__1hecu",intro:"Profile_intro__31cFZ",attributes:"Profile_attributes__3Q5wH",weak:"Profile_weak__17IM6",posts:"Profile_posts__3c7MA",followBtn:"Profile_followBtn__2bJp1",unfollowBtn:"Profile_unfollowBtn__-JXN9"}}},[[43,1,2]]]);
//# sourceMappingURL=main.515fec41.chunk.js.map