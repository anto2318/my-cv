(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{772:function(e,t,n){"use strict";n.r(t);var r=n(2),i=n.n(r),o=n(11),a=n.n(o),s=n(21),c=n.n(s),l=n(1),u=n.n(l),d=n(13),_=n(20),m=n(111),f=n.n(m),p=n(45),h=n.n(p),T=n(313),b=f.a.d8c4bfe8,E={anchorless:!0},N=function(e){return"string"==typeof e?i()({pathname:e},E):i()({},e,{},E)},C=function(e){var t=e.children,n=e.link,r=e.onClick,o=e.style,a=h()(e,["children","link","onClick","style"]);return d.createElement(T.a,i()({accessibilityLabel:b,link:N(n),onClick:r,style:o},a,{__source:{fileName:"/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/InnerTweetContainer/index.js",lineNumber:25},__self:this}),t)},y=n(614),g=n.n(y),I=n(76),v=function(e){function t(t){var n;return n=e.call(this,t)||this,u()(a()(n),"observer",null),u()(a()(n),"createObserver",(function(){var e=n.props,t=e.root,r=e.rootMargin,i=e.threshold;n.observer=new IntersectionObserver(n.handleChange,{root:t,rootMargin:r,threshold:i})})),u()(a()(n),"destroyObserver",(function(){n.observer&&n.node&&(n.observer.unobserve(n.node),n.observer=null)})),u()(a()(n),"handleChange",(function(e){(0,n.props.onChange)(e[0])})),n.props.disabled||n.createObserver(),n}c()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=Object(I.findDOMNode)(this);e instanceof HTMLElement&&(this.node=e,this.node&&this.observer&&this.observer.observe&&this.observer.observe(this.node))},n.componentDidUpdate=function(e){var t=this.props.disabled;!t&&e.disabled&&this.createObserver(),t&&!e.disabled&&this.destroyObserver()},n.componentWillUnmount=function(){this.destroyObserver()},n.render=function(){var e=this.props.children;return d.Children.only(e)},t}(d.Component);u()(v,"defaultProps",{disabled:!1,root:null,rootMargin:"0px"});var w=v,A=n(9),R=n(265),k=n.n(R),L=n(269),x=n(175),P=n(15),M=function(e){e.stopPropagation()},O=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.AUTHOR})},W=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.LIKE_ACTION})},S=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.LOGO})},U=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.NEWS_ACTION})},j=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.PHOTO})},K=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.PLACE})},Q=function(e){M(e),P.e.scribe(P.a.CLICK_EXTERNAL,{section:P.d.MAIN,component:P.b.PRIVACY_NOTICE})},D=function(){P.e.scribe(P.a.SEEN,{section:P.d.MAIN,component:P.b.PRIVACY_NOTICE})},H=function(){P.e.scribe(P.a.SEEN,{section:P.d.MAIN,component:P.b.MANIPULATED_MEDIA_LABEL})},V=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.TIMESTAMP})},G=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.TWEET_REPLY_CONTEXT})},X=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.VIDEO})},B=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.WHITESPACE})},F=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.MANIPULATED_MEDIA_LABEL})},q=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.AUTHOR})},z=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.LOGO})},Y=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.PHOTO})},J=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.TWEET_REPLY_CONTEXT})},Z=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.VIDEO})},$=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.WHITESPACE})},ee=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.MANIPULATED_MEDIA_LABEL})},te=function(){P.e.scribe(P.a.SEEN,{section:P.d.PARENT,component:P.b.MANIPULATED_MEDIA_LABEL})},ne=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT_QUOTE})},re=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT_QUOTE,component:P.b.PHOTO})},ie=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT_QUOTE,component:P.b.VIDEO})},oe=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.QUOTE})},ae=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.QUOTE,component:P.b.PHOTO})},se=function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.QUOTE,component:P.b.VIDEO})},ce="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ManipulatedMediaLabel/index.js",le=f.a.a767a8b9,ue=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,u()(a()(t),"state",{seen:!1}),u()(a()(t),"getClickHandler",(function(){switch(t.props.section){case A.f.MAIN:return F;case A.f.PARENT:return ee;default:return}})),u()(a()(t),"handleInViewport",(function(e){var n=e.isIntersecting,r=t.state.seen,i=t.props.section;n&&!r&&(i===A.f.MAIN?H():i===A.f.PARENT&&te(),t.setState({seen:!0}))})),t}return c()(t,e),t.prototype.render=function(){var e=this.state.seen,t=this.getClickHandler();return d.createElement(w,{disabled:e,onChange:this.handleInViewport,threshold:1,__source:{fileName:ce,lineNumber:37},__self:this},d.createElement(k.a,{style:de.label,__source:{fileName:ce,lineNumber:38},__self:this},d.createElement(L.b,{color:"red",link:this.props.link,onClick:t,weight:"bold",withInteractiveStyling:!0,__source:{fileName:ce,lineNumber:39},__self:this},d.createElement(g.a,{style:de.iconErrorCircle,__source:{fileName:ce,lineNumber:40},__self:this}),le)))},t}(d.Component),de=x.a.create((function(e){return{iconErrorCircle:{paddingRight:e.spaces.xSmall},label:{alignItems:"flex-start",flexDirection:"row",paddingTop:e.spaces.xSmall,paddingBottom:e.spaces.xSmall}}})),_e=n(346),me="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ParentTweetContainer/index.js",fe=function(e){var t=e.avatarUrl,n=e.children,r=e.screenName;return d.createElement(T.a,{interactiveStyles:null,style:pe.container,__source:{fileName:me,lineNumber:21},__self:this},d.createElement(k.a,{__source:{fileName:me,lineNumber:22},__self:this},d.createElement(_e.default,{onClick:q,screenName:r,size:"xxLarge",uri:t,withLink:!0,__source:{fileName:me,lineNumber:23},__self:this}),d.createElement(k.a,{style:pe.line,__source:{fileName:me,lineNumber:30},__self:this})),d.createElement(k.a,{style:pe.columnRight,__source:{fileName:me,lineNumber:32},__self:this},n))},pe=x.a.create((function(e){return{container:{flexDirection:"row"},columnRight:{flexBasis:0,flexGrow:7,justifyContent:"flex-start",marginLeft:e.spaces.xxSmall,marginBottom:e.spaces.xSmall},line:{backgroundColor:e.colors.lightGray,marginHorizontal:"auto",marginTop:e.spaces.xxSmall,marginBottom:e.spaces.xxSmall,minHeight:"10px",width:"2px",flexGrow:1}}})),he=n(457),Te=["2586390716:image_direct_message","2586390716:message_me","2586390716:video_direct_message"],be=["amplify","745291183405076480:broadcast","745291183405076480:live_event","3260518932:moment","poll2choice_image","poll2choice_text_only","poll2choice_video","poll3choice_text_only"],Ee=["promo_video_convo","promo_image_convo"],Ne=function(e){return Te.indexOf(e.name)>-1},Ce=function(e){return Ee.indexOf(e.name)>-1},ye=function(e){return-1!==be.indexOf(e.name)},ge=function(e){return!Ne(e)&&!Ce(e)&&!function(e){return"amplify"===e.name}(e)},Ie="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/Card/index.js",ve=function(e){var t=e.card,n=e.cardContext,r=e.section,i=e.style,o=we(r,t);return ge(t)?d.createElement(k.a,{style:i,__source:{fileName:Ie,lineNumber:36},__self:this},d.createElement(he.a,{card:t,cardContext:n,cardState:"static",isPromoted:!1,onScribeEvent:o,__source:{fileName:Ie,lineNumber:37},__self:this})):null},we=function(e,t){return function(n){if("open_link"===n.action){var r=ye(t);switch(e){case A.f.MAIN:return void(r?P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.CARD}):P.e.scribe(P.a.CLICK_EXTERNAL,{section:P.d.MAIN,component:P.b.CARD}));case A.f.PARENT:return void(r?P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.CARD}):P.e.scribe(P.a.CLICK_EXTERNAL,{section:P.d.PARENT,component:P.b.CARD}));default:return}}}},Ae=n(770),Re=n(437),ke="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/Photos/index.js",Le=f.a.d33241c5,xe=function(e){return e.map((function(e){return i()({accessibilityLabel:Le},e)}))},Pe=function(e){var t=e.images,n=e.section,r=e.style,i=n===A.f.MAIN||n===A.f.PARENT;return d.createElement(k.a,{style:[Oe.photoWrapper,i&&[Oe.nonQuotedTweetStyles,r]],__source:{fileName:ke,lineNumber:47},__self:this},d.createElement(Re.a,{cacheLocationKey:"embedded_tweet",images:xe(t),onClick:Me(n),onVariantSelection:Ae.a,previewMode:!1,singleImageMaxAspectRatio:10,singleImageMinAspectRatio:1,__source:{fileName:ke,lineNumber:48},__self:this}))},Me=function(e){switch(e){case A.f.PARENT_QUOTE:return re;case A.f.PARENT:return Y;case A.f.QUOTE:return ae;default:return j}},Oe=x.a.create((function(e){return{photoWrapper:{overflow:"hidden"},nonQuotedTweetStyles:{borderColor:e.colors.nestedBorderColor,borderRadius:e.borderRadii.large,borderStyle:"solid",borderWidth:"1px"}}})),We=function(e){var t=e.children,n=e.style,r=h()(e,["children","style"]);return d.createElement(k.a,i()({style:[Se.container,n]},r,{__source:{fileName:"/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetContainer/index.js",lineNumber:15},__self:this}),t)},Se=x.a.create((function(e){return{container:{borderWidth:e.borderWidths.small,borderColor:e.colors.lightGray,borderRadius:e.borderRadii.large,overflow:"hidden"}}})),Ue=n(314),je=n(438),Ke="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/QuotedTweet/index.js",Qe=function(e){var t=e.hideMedia,n=e.quotedTweet,r=e.onClick,i=e.section,o=e.style,a=n.user;return d.createElement(We,{style:[De.container,o],__source:{fileName:Ke,lineNumber:24},__self:this},d.createElement(C,{link:Object(_.d)(n),onClick:r,__source:{fileName:Ke,lineNumber:25},__self:this},d.createElement(k.a,{style:De.innerContainer,__source:{fileName:Ke,lineNumber:26},__self:this},d.createElement(Ue.a,{isVerified:a.verified,name:a.name,profileImageUrl:a.profile_image_url_https,screenName:a.screen_name,__source:{fileName:Ke,lineNumber:27},__self:this}),a.highlighted_label?d.createElement(je.a,{badgeUrl:a.highlighted_label.badge.url,description:a.highlighted_label.description,link:a.highlighted_label.url.url,shouldTruncate:!0,style:De.highlightedUserLabel,__source:{fileName:Ke,lineNumber:34},__self:this}):null),d.createElement(Nt,{hideMedia:t,section:i===A.f.PARENT?A.f.PARENT_QUOTE:A.f.QUOTE,tweet:n,__source:{fileName:Ke,lineNumber:43},__self:this})))},De=x.a.create((function(e){return{container:{borderRadius:e.borderRadii.large},innerContainer:{paddingTop:e.spaces.xSmall,paddingRight:e.spaces.xSmall,paddingLeft:e.spaces.xSmall},highlightedUserLabel:{marginTop:e.spaces.xxSmall}}})),He=n(42),Ve=n(439),Ge=x.a.create((function(e){return{tweetTextMain:{cursor:"text"},tweetTextQuoted:{cursor:"normal"}}})),Xe=Object.freeze({CASHTAG:"cashtag",EMOJI:"emoji",HASHTAG:"hashtag",MEDIA:"media",MENTION:"mention",TEXT:"text",URL:"url"}),Be=function(e){return function(t,n){var r=t.currentTarget,i=r.title&&He.a.isTwitterDotComLink(r.title),o=r.title&&He.a.isStatusUrl(r.title);if(e===P.d.MAIN)switch(n){case Xe.CASHTAG:return M(t),void P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.TWEET_TEXT_CASHTAG});case Xe.HASHTAG:return void function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.TWEET_TEXT_HASHTAG})}(t);case Xe.MEDIA:return void function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.TWEET_TEXT_MEDIA})}(t);case Xe.MENTION:return void function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.TWEET_TEXT_MENTION})}(t);case Xe.URL:return void(o?function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.TWEET_TEXT_QUOTE})}(t):i?function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.MAIN,component:P.b.TWEET_TEXT_URL})}(t):function(e){M(e),P.e.scribe(P.a.CLICK_EXTERNAL,{section:P.d.MAIN,component:P.b.TWEET_TEXT_URL})}(t));default:return}else if(e===P.d.PARENT)switch(n){case Xe.CASHTAG:return void function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.TWEET_TEXT_CASHTAG})}(t);case Xe.HASHTAG:return void function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.TWEET_TEXT_HASHTAG})}(t);case Xe.MEDIA:return void function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.TWEET_TEXT_MEDIA})}(t);case Xe.MENTION:return void function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.TWEET_TEXT_MENTION})}(t);case Xe.URL:return void(o?function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.TWEET_TEXT_QUOTE})}(t):i?function(e){M(e),P.e.scribe(P.a.CLICK_TWITTER,{section:P.d.PARENT,component:P.b.TWEET_TEXT_URL})}(t):function(e){M(e),P.e.scribe(P.a.CLICK_EXTERNAL,{section:P.d.PARENT,component:P.b.TWEET_TEXT_URL})}(t));default:return}}},Fe=function(e){var t=e.hideMedia,n=e.section,r=e.tweet,i=n===P.d.PARENT_QUOTE||n===P.d.QUOTE,o=n===P.d.PARENT_QUOTE||n===P.d.PARENT,a=Be(n);return d.createElement(Ve.a,{displayTextRange:r.display_text_range,entities:r.entities,entityBaseUrl:_.a,excludeCardUrl:r.card&&r.card.url,lang:r.lang,linkify:!i,onEntityClick:a,quotedTweetId:r.quoted_tweet&&r.quoted_tweet.id_str,size:i||o?"normal":"large",style:i?Ge.tweetTextQuoted:Ge.tweetTextMain,text:r.text,withCardLinks:t||i,withMediaLinks:t,withQuoteLinks:i,__source:{fileName:"/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetTextWrapper/index.js",lineNumber:23},__self:this})},qe=n(698),ze={dispatch:function(){return Promise.resolve()}},Ye=function(e){var t=!1,n={log:function(n){var r=n.category,i=n.namespace;if(!t&&r&&"client_event"===r&&i&&("video_player"===i.element||"gif_player"===i.element)&&"intent_to_play"===i.action)switch(e){case P.d.MAIN:t=!0,P.e.scribe(P.a.CLICK_INTERACTIVE,{section:P.d.MAIN,component:P.b.VIDEO});break;case P.d.PARENT:t=!0,P.e.scribe(P.a.CLICK_INTERACTIVE,{section:P.d.PARENT,component:P.b.VIDEO})}}};return new qe.a(n,n,ze,{scribeContext:{}})},Je=function(e){e.stopPropagation()},Ze=n(460),$e="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetVideo/index.js",et=function(e){if(2===e.length){var t=e[0]>0?e[0]:16,n=e[1]>0?e[1]:9;return Math.max(1,t/n)}return 16/9},tt=function(e){var t=e.section,n=e.style,r=e.video,o=r.aspectRatio,a=h()(r,["aspectRatio"]);return d.createElement(k.a,{onClick:Je,style:[nt.root,n],__source:{fileName:$e,lineNumber:31},__self:this},d.createElement(Ze.a,i()({analytics:Ye(t),aspectRatio:et(o),httpClient:ze,size:"fill"},a,{__source:{fileName:$e,lineNumber:32},__self:this})))},nt=x.a.create((function(e){return{root:{borderWidth:"1px",borderStyle:"solid",borderColor:e.colors.nestedBorderColor,borderRadius:e.borderRadii.large,overflow:"hidden"}}})),rt=n(286),it=n.n(rt),ot=n(283),at=n(280),st=n(331),ct="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetVideoPoster/index.js",lt=f.a.j67b44cd,ut=f.a.f130fadd,dt=function(e){if(2===e.length){var t=e[0]>0?e[0]:16,n=e[1]>0?e[1]:9;return Math.max(1,t/n)}return 16/9},_t=function(e){var t=e.aspectRatio,n=e.link,r=e.src,i=e.section,o=e.style,a=i===A.f.PARENT_QUOTE||i===A.f.QUOTE?void 0:[ft.nonQuotedTweetStyles,o],s=mt(i);return d.createElement(ot.a,{ratio:dt(t),style:a,__source:{fileName:ct,lineNumber:46},__self:this},d.createElement(at.a,{accessibilityLabel:ut,interactiveStyles:null,link:n,onPress:s,style:[x.a.absoluteFill,ft.wrapper],__source:{fileName:ct,lineNumber:47},__self:this},d.createElement(it.a,{accessibilityLabel:lt,source:r,style:x.a.absoluteFill,__source:{fileName:ct,lineNumber:54},__self:this}),d.createElement(st.a,{accessibilityLabel:ut,onPress:s,__source:{fileName:ct,lineNumber:55},__self:this})))},mt=function(e){switch(e){case A.f.MAIN:return X;case A.f.PARENT:return Z;case A.f.QUOTE:return se;case A.f.PARENT_QUOTE:return ie;default:return Ae.a}},ft=x.a.create((function(e){return{wrapper:{justifyContent:"center",alignItems:"center"},nonQuotedTweetStyles:{borderWidth:"1px",borderStyle:"solid",borderColor:e.colors.nestedBorderColor,borderRadius:e.borderRadii.large,overflow:"hidden"}}})),pt=function(e){var t=e&&e.photos&&e.photos.length?e.photos[0]:void 0;return t&&t.expandedUrl&&t.expandedUrl.includes("/video/")?t:void 0},ht=function(e){var t=e.video&&e.video.poster;if(t)return t;var n=pt(e);return n?n.url:void 0},Tt=function(e,t,n){var r=!t&&!!e.video&&n,i=!t&&!!ht(e);return r||i},bt=n(458),Et="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetContent/index.js",Nt=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,u()(a()(t),"_getDisplayProps",(function(){var e=t.props,n=e.hideMedia,r=e.hideThread,i=e.tweet,o=e.section,a=o===A.f.PARENT_QUOTE||o===A.f.QUOTE;return{showCard:!(!i.card||a||n),showPhotos:!(n||!i.photos||!i.photos.length),showQuotedTweet:!(!i.quoted_tweet||a),showReplyContext:!(!i.in_reply_to_status_id_str||!r&&o!==A.f.PARENT&&!a),showVideo:!(n||!i.video||!i.video.variants||a),showVideoPoster:Tt(i,n,a)}})),t}c()(t,e);var n=t.prototype;return n.render=function(){var e=this.props.section,t=e===A.f.PARENT_QUOTE||e===A.f.QUOTE;return d.createElement(d.Fragment,{__source:{fileName:Et,lineNumber:71},__self:this},d.createElement(k.a,{style:t&&Ct.textWrapperQuoted,__source:{fileName:Et,lineNumber:72},__self:this},this._renderReplyContext(),this._renderTweetText()),this._renderAttachment())},n._renderReplyContext=function(){var e=this.props,t=e.section,n=e.tweet,r=this._getDisplayProps().showReplyContext,i=function(e){switch(e){case A.f.MAIN:return G;case A.f.PARENT:return J;default:return}}(t),o=Object(_.c)(Object(_.d)(n)),a=t===A.f.PARENT_QUOTE||t===A.f.QUOTE?bt.a.ReplyContextLinkTypes.none:bt.a.ReplyContextLinkTypes.all;return r?d.createElement(bt.a,{displayTextRange:n.display_text_range,inReplyToName:n.in_reply_to_name,inReplyToScreenName:n.in_reply_to_screen_name,inReplyToStatusIdStr:n.in_reply_to_status_id_str,inReplyToUserIdStr:n.in_reply_to_user_id_str,linkColor:"deepGray",linkType:a,onClick:i,style:Ct.replyContext,tweetPermalink:o,userMentionsEntities:n.entities.user_mentions,__source:{fileName:Et,lineNumber:91},__self:this}):null},n._renderTweetText=function(){var e=this.props,t=e.hideMedia,n=e.section,r=e.tweet;return d.createElement(Fe,{hideMedia:t,section:n,tweet:r,__source:{fileName:Et,lineNumber:109},__self:this})},n._renderAttachment=function(){var e=this._getDisplayProps(),t=e.showCard,n=e.showPhotos,r=e.showQuotedTweet,i=e.showVideo,o=e.showVideoPoster;return i&&r?d.createElement(d.Fragment,{__source:{fileName:Et,lineNumber:116},__self:this},this._renderVideo(),this._renderQuotedTweet()):o&&r?d.createElement(d.Fragment,{__source:{fileName:Et,lineNumber:123},__self:this},this._renderVideoPoster(),this._renderQuotedTweet()):n&&r?d.createElement(d.Fragment,{__source:{fileName:Et,lineNumber:130},__self:this},this._renderPhotos(),this._renderQuotedTweet()):i?this._renderVideo():o?this._renderVideoPoster():n?this._renderPhotos():r?this._renderQuotedTweet():t?this._renderCard():null},n._renderCard=function(){var e=this.props,t=e.tweet,n=e.section,r={tweetId:t.id_str,tweetPermalink:Object(_.c)(Object(_.d)(t)),tweetUserId:t.user.id_str};return t.card?d.createElement(ve,{card:t.card,cardContext:r,section:n,style:Ct.attachment,__source:{fileName:Et,lineNumber:158},__self:this}):null},n._renderPhotos=function(){var e=this.props,t=e.tweet,n=e.section;return t.photos?d.createElement(Pe,{images:t.photos,section:n,style:Ct.attachment,__source:{fileName:Et,lineNumber:164},__self:this}):null},n._renderVideo=function(){var e=this.props,t=e.tweet,n=e.section;return t.video?d.createElement(tt,{section:n,style:Ct.attachment,video:t.video,__source:{fileName:Et,lineNumber:169},__self:this}):null},n._renderVideoPoster=function(){var e=this.props,t=e.tweet,n=e.section,r=Object(_.d)(t),i=ht(t),o=function(e){var t=e&&e.video&&e.video.aspectRatio;if(t)return t;var n=pt(e);return n?[n.width,n.height]:[16,9]}(t);return i?d.createElement(_t,{aspectRatio:o,link:r,section:n,src:i,style:Ct.attachment,__source:{fileName:Et,lineNumber:178},__self:this}):null},n._renderQuotedTweet=function(){var e=this.props,t=e.hideMedia,n=e.tweet,r=e.section,i=r===A.f.PARENT_QUOTE||r===A.f.QUOTE,o=r===A.f.PARENT?ne:oe;return n.quoted_tweet&&!i?d.createElement(Qe,{hideMedia:t,onClick:o,quotedTweet:n.quoted_tweet,section:r,style:Ct.attachment,__source:{fileName:Et,lineNumber:193},__self:this}):null},t}(d.Component);u()(Nt,"defaultProps",{hideMedia:!1,hideThread:!1});var Ct=x.a.create((function(e){return{attachment:{marginTop:e.spaces.xSmall},replyContext:{marginBottom:e.spaces.xxSmall},textWrapperQuoted:{marginBottom:e.spaces.xSmall,marginTop:e.spaces.xxSmall,paddingRight:e.spaces.xSmall,paddingLeft:e.spaces.xSmall}}})),yt=n(734),gt=n.n(yt),It=n(288),vt="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TwitterLogo/index.js",wt=f.a.efc5dd77,At=function(e){var t=e.link,n=e.section===A.f.PARENT?z:S,r=It.a.generate({backgroundColor:"transparent",color:x.a.theme.colors.blue}),o={backgroundColor:"transparent"},a={hoverStyle:o,pressedStyle:o};return d.createElement(at.a,{accessibilityLabel:wt,interactiveStyles:i()({},r,{},a),link:t,onPress:n,style:Rt.iconWrapper,__source:{fileName:vt,lineNumber:34},__self:this},d.createElement(gt.a,{style:Rt.icon,__source:{fileName:vt,lineNumber:41},__self:this}))},Rt=x.a.create((function(e){return{icon:{color:e.colors.badgeColor,margin:"0",width:"25px",height:"25px"},iconWrapper:{borderRadius:x.a.theme.borderRadii.infinite,marginLeft:"auto"}}})),kt=n(323),Lt="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/ParentTweet/index.js",xt=f.a.jade381b,Pt=function(e){var t=e.hideMedia,n=e.parentTweet,r=Object(_.d)(n);return d.createElement(C,{interactiveStyles:null,link:r,onClick:$,__source:{fileName:Lt,lineNumber:26},__self:this},d.createElement(fe,{avatarUrl:n.user.profile_image_url_https,permalink:r,screenName:n.user.screen_name,__source:{fileName:Lt,lineNumber:27},__self:this},d.createElement(k.a,{style:Mt.header,__source:{fileName:Lt,lineNumber:32},__self:this},d.createElement(k.a,{style:[Mt.usernameLabel,n.user.highlighted_label&&Mt.highlightedUserLabelWrapper],__source:{fileName:Lt,lineNumber:33},__self:this},d.createElement(k.a,{style:Mt.usernameTimestamp,__source:{fileName:Lt,lineNumber:36},__self:this},d.createElement(Ue.a,{isVerified:n.user.verified,name:n.user.name,onLinkClick:q,screenName:n.user.screen_name,withLink:!0,__source:{fileName:Lt,lineNumber:37},__self:this}),d.createElement(kt.a,{__source:{fileName:Lt,lineNumber:44},__self:this}),d.createElement(L.b,{color:"deepGray",link:r,style:Mt.timestamp,__source:{fileName:Lt,lineNumber:45},__self:this},xt(new Date(n.created_at)))),n.user.highlighted_label?d.createElement(je.a,{badgeUrl:n.user.highlighted_label.badge.url,description:n.user.highlighted_label.description,link:n.user.highlighted_label.url.url,onClick:q,shouldTruncate:!0,__source:{fileName:Lt,lineNumber:50},__self:this}):null),d.createElement(At,{link:Object(_.d)(n),section:A.f.PARENT,__source:{fileName:Lt,lineNumber:59},__self:this})),d.createElement(Nt,{hideMedia:t,section:A.f.PARENT,tweet:n,__source:{fileName:Lt,lineNumber:61},__self:this}),n.manipulated_media_label_url?d.createElement(ue,{link:n.manipulated_media_label_url,section:A.f.PARENT,__source:{fileName:Lt,lineNumber:63},__self:this}):null))},Mt=x.a.create((function(e){return{header:{flexDirection:"row"},usernameLabel:{flexDirection:"column",justifyContent:"center",maxWidth:"calc(100% - 25px)"},highlightedUserLabelWrapper:{height:46},usernameTimestamp:{flexDirection:"row"},timestamp:{flexShrink:0,marginRight:e.spaces.micro}}})),Ot=n(735),Wt=n.n(Ot),St="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/PrivacyNotice/index.js",Ut=f.a.ge1a6066,jt=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,u()(a()(t),"state",{seen:!1}),u()(a()(t),"handleInViewport",(function(e){var n=e.isIntersecting,r=t.state.seen;n&&!r&&(D(),t.setState({seen:!0}))})),t}return c()(t,e),t.prototype.render=function(){var e=this.props.style,t=this.state.seen,n=It.a.generate({backgroundColor:"transparent",color:x.a.theme.colors.blue});return d.createElement(w,{disabled:t,onChange:this.handleInViewport,threshold:1,__source:{fileName:St,lineNumber:44},__self:this},d.createElement(at.a,{accessibilityLabel:Ut,interactiveStyles:n,link:"https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy",onPress:Q,style:[Kt.iconWrapper,e],__source:{fileName:St,lineNumber:45},__self:this},(function(e){var t=e.hasFocusRing,n=e.isHovered,r=e.isPressed;return d.createElement(Wt.a,{style:[Kt.icon,(t||n||r)&&Kt.iconFocus],__source:{fileName:St,lineNumber:53},__self:this})})))},t}(d.Component),Kt=x.a.create((function(e){return{iconWrapper:{borderRadius:e.borderRadii.infinite,height:e.spaces.large,width:e.spaces.large,justifyContent:"center",marginRight:"-"+e.spaces.xxSmall},icon:{color:e.colors.deepGray},iconFocus:{color:e.colors.blue}}})),Qt="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/GenericAction/index.js",Dt=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,u()(a()(t),"handleClick",(function(e){var n=t.props.onClick;n&&n(e)})),t}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.accessibilityLabel,n=e.hoverColor,r=e.icon,o=e.link,a=e.pullLeft,s=e.shouldTruncate,c=e.text,l={color:x.a.theme.colors[n]},u=It.a.generate({backgroundColor:"transparent",color:x.a.theme.colors[n]}),_={backgroundColor:"transparent"},m={hoverStyle:_,pressedStyle:_};return d.createElement(at.a,{accessibilityLabel:t,accessibilityRole:"link",interactiveStyles:i()({},u,{},m),link:o,onClick:this.handleClick,style:[Ht.root,s&&Ht.truncate],__source:{fileName:Qt,lineNumber:42},__self:this},(function(e){var t=e.hasFocusRing,n=e.isHovered,i=e.isPressed;return d.createElement(d.Fragment,{__source:{fileName:Qt,lineNumber:51},__self:this},d.createElement(at.a,{accessible:!1,interactiveStyles:u,style:[Ht.iconWrapper,a&&Ht.pullLeft],__source:{fileName:Qt,lineNumber:52},__self:this},d.createElement(r,{style:[Ht.icon,t&&l,i&&l,n&&l],__source:{fileName:Qt,lineNumber:57},__self:this})),c?d.createElement(at.a,{accessible:!1,interactiveStyles:null,style:s&&Ht.truncate,__source:{fileName:Qt,lineNumber:62},__self:this},(function(e){var r=e.isHovered;return d.createElement(L.b,{numberOfLines:1,style:[Ht.text,t&&l,i&&l,n&&l,r&&Ht.textHover],__source:{fileName:Qt,lineNumber:64},__self:this},c)})):null)}))},t}(d.Component);u()(Dt,"defaultProps",{pullLeft:!1,shouldTruncate:!1});var Ht=x.a.create((function(e){return{root:{flexDirection:"row",alignItems:"center",marginRight:"20px"},iconWrapper:{borderRadius:e.borderRadii.infinite,height:e.spaces.large,width:e.spaces.large,justifyContent:"center"},icon:{color:e.colors.deepGray},pullLeft:{marginLeft:"-"+e.spaces.xxSmall},text:{color:e.colors.deepGray,marginLeft:e.spaces.xxSmall},textHover:{textDecorationLine:"underline"},truncate:{flexShrink:1}}})),Vt=n(736),Gt=n.n(Vt),Xt=n(8),Bt=f.a.f9e9679f,Ft=f.a.fd35b260,qt=f.a.e0e626ae,zt=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,u()(a()(t),"getAccessibilityLabel",(function(e){if(e>0){var t=Bt(e);return Ft({count:t})}return qt})),u()(a()(t),"getText",(function(){var e=t.props.likeCount;if(e>0)return Bt(e)})),u()(a()(t),"handleLikeActionClick",(function(e){W(e),Xt.c.send({key:Xt.b.TRIGGER,details:{region:Xt.a.INTENT,type:Xt.b.CLICK}}),Xt.c.send({key:Xt.b.TRIGGER,details:{region:Xt.a.INTENT,type:Xt.b.LIKE}})})),t}return c()(t,e),t.prototype.render=function(){var e=this.props,t=e.link,n=e.likeCount,r=this.getText(),i=this.getAccessibilityLabel(n);return d.createElement(Dt,{accessibilityLabel:i,hoverColor:"red",icon:Gt.a,link:t,onClick:this.handleLikeActionClick,pullLeft:!0,text:r,__source:{fileName:"/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/LikeAction/index.js",lineNumber:46},__self:this})},t}(d.Component),Yt=n(737),Jt=n.n(Yt),Zt=n(738),$t=n.n(Zt),en=n(739),tn=n.n(en),nn=n(32),rn=f.a.f9e9679f,on=f.a.f094164b,an=f.a.b96edab8,sn=f.a.a1cf8011,cn=function(e){var t=e.link,n=function(e){var t,n=e.conversationCount,r=e.newsActionType,i=e.profileName;switch(r){case nn.a.conversation:return t=on({count:rn(n)}),{icon:tn.a,text:t};case nn.a.covid19:return{icon:Jt.a,text:sn};default:return t=an({name:i}),{icon:$t.a,text:t}}}(h()(e,["link"])),r=n.icon,i=n.text;return d.createElement(Dt,{hoverColor:"blue",icon:r,link:t,onClick:U,shouldTruncate:!0,text:i,__source:{fileName:"/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/NewsAction/index.js",lineNumber:57},__self:this})},ln="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/TweetActions/index.js",un=function(e){var t=e.conversationCount,n=e.likeCount,r=e.likeLink,i=e.newsActionLink,o=e.newsActionType,a=e.profileName;return d.createElement(k.a,{style:dn.root,__source:{fileName:ln,lineNumber:22},__self:this},d.createElement(zt,{likeCount:n,link:r,__source:{fileName:ln,lineNumber:23},__self:this}),d.createElement(cn,{conversationCount:t,link:i,newsActionType:o,profileName:a,__source:{fileName:ln,lineNumber:24},__self:this}))},dn=x.a.create((function(e){return{root:{alignItems:"flex-start",borderTopWidth:e.borderWidths.small,borderColor:e.colors.lightGray,flexDirection:"row",marginTop:e.spaces.xxSmall,paddingTop:e.spaces.xxSmall}}})),_n=n(456);n.d(t,"default",(function(){return pn}));var mn="/data/jenkins/workspace/source_4/syndication/embed-iframe/src/components/Tweet/index.js",fn=f.a.de0bda86,pn=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,u()(a()(t),"state",{impressionHandled:!1}),u()(a()(t),"handleImpression",(function(e){var n=e.isIntersecting,r=t.state.impressionHandled;n&&!r&&(P.e.scribe(P.a.IMPRESSION,{section:P.d.MAIN}),t.setState({impressionHandled:!0}))})),t}c()(t,e);var n=t.prototype;return n.render=function(){var e=this.props,t=e.onLayout,n=e.permalink;return d.createElement(We,{onLayout:t,style:hn.outerContainer,__source:{fileName:mn,lineNumber:64},__self:this},d.createElement(C,{link:n,onClick:B,onLayout:t,style:hn.innerContainer,__source:{fileName:mn,lineNumber:65},__self:this},this._maybeRenderParentTweet(),this._renderHeader(),this._renderTweetContent(),this._maybeRenderManipulatedMediaLabel(),d.createElement(k.a,{style:hn.meta,__source:{fileName:mn,lineNumber:75},__self:this},this._renderTweetMeta(),this._renderPrivacyNotice()),this._renderTweetActions()))},n._renderHeader=function(){var e=this.props.tweet,t=this.state.impressionHandled;return d.createElement(w,{disabled:t,onChange:this.handleImpression,threshold:1,__source:{fileName:mn,lineNumber:90},__self:this},d.createElement(k.a,{style:hn.header,__source:{fileName:mn,lineNumber:91},__self:this},d.createElement(_e.default,{accessibilityLabel:fn,onClick:O,screenName:e.user.screen_name,size:"xxLarge",uri:e.user.profile_image_url_https,withLink:!0,__source:{fileName:mn,lineNumber:92},__self:this}),d.createElement(k.a,{style:hn.userNameAndLabel,__source:{fileName:mn,lineNumber:100},__self:this},d.createElement(Ue.a,{isVerified:e.user.verified,name:e.user.name,onLinkClick:O,screenName:e.user.screen_name,withLink:!0,withScreenName:!0,withStackedLayout:!e.user.highlighted_label,__source:{fileName:mn,lineNumber:101},__self:this}),this._maybeRenderHighlightedUserLabel()),this._maybeRenderTwitterLogo()))},n._maybeRenderTwitterLogo=function(){var e=this.props,t=e.hideThread,n=e.permalink,r=e.tweet;return t||!t&&!r.parent?d.createElement(At,{link:n,section:P.d.MAIN,__source:{fileName:mn,lineNumber:121},__self:this}):null},n._renderTweetContent=function(){var e=this.props,t=e.hideMedia,n=e.hideThread,r=e.tweet;return d.createElement(Nt,{hideMedia:t,hideThread:n,section:P.d.MAIN,tweet:r,__source:{fileName:mn,lineNumber:127},__self:this})},n._maybeRenderHighlightedUserLabel=function(){var e=this.props.tweet.user.highlighted_label;return e?d.createElement(je.a,{badgeUrl:e.badge.url,description:e.description,link:e.url.url,shouldTruncate:!0,__source:{fileName:mn,lineNumber:134},__self:this}):null},n._maybeRenderManipulatedMediaLabel=function(){var e=this.props.tweet.manipulated_media_label_url;return e?d.createElement(ue,{link:e,section:P.d.MAIN,__source:{fileName:mn,lineNumber:146},__self:this}):null},n._maybeRenderParentTweet=function(){var e=this.props,t=e.hideMedia,n=e.hideThread,r=e.tweet;return r.parent&&!n?d.createElement(Pt,{hideMedia:t,parentTweet:r.parent,__source:{fileName:mn,lineNumber:152},__self:this}):null},n._renderTweetMeta=function(){var e=this.props,t=e.permalink,n=e.tweet,r=n.place,o=r?{onPlaceClick:K,place:r&&r.full_name,placeLink:Object(_.e)(r)}:{},a={onTimestampClick:V,timestamp:n.created_at,timestampLink:t};return d.createElement(_n.a,i()({linkColor:"deepGray"},o,a,{__source:{fileName:mn,lineNumber:166},__self:this}))},n._renderPrivacyNotice=function(){return d.createElement(jt,{style:hn.privacy,__source:{fileName:mn,lineNumber:170},__self:this})},n._renderTweetActions=function(){var e=this.props,t=e.likeActionLink,n=e.newsActionLink,r=e.newsActionType,i=e.tweet;return void 0!==i.conversation_count&&void 0!==i.favorite_count?d.createElement(un,{conversationCount:i.conversation_count,likeCount:i.favorite_count,likeLink:t,newsActionLink:n,newsActionType:r,profileName:i.user.name,__source:{fileName:mn,lineNumber:176},__self:this}):null},t}(d.Component);u()(pn,"defaultProps",{hideThread:!1});var hn=x.a.create((function(e){return{outerContainer:{maxWidth:550,minWidth:280},innerContainer:{backgroundColor:e.colors.cellBackground,paddingTop:e.spaces.xSmall,paddingRight:e.spaces.small,paddingBottom:e.spaces.xxSmall,paddingLeft:e.spaces.small},header:{flexDirection:"row",paddingBottom:e.spaces.xSmall},userNameAndLabel:{flexDirection:"column",justifyContent:"center",marginHorizontal:e.spaces.xxSmall,maxWidth:"calc(100% - 84px)"},logo:{marginLeft:"auto"},meta:{flexDirection:"row",alignItems:"center",marginTop:e.spaces.micro},privacy:{marginLeft:"auto"}}}))}}]);