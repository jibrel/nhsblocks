!function(e){var t={};function n(l){if(t[l])return t[l].exports;var a=t[l]={i:l,l:!1,exports:{}};return e[l].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:l})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t,n){"use strict";n.r(t);var l=n(0),a=wp.i18n.__,s=wp.blocks.registerBlockType,c=wp.editor,r=c.RichText,o=c.InnerBlocks;s("nhsblocks/dodont",{title:a("Do and Don't List","nhsblocks"),category:"nhsblocks",attributes:{panelTitle:{type:"string",source:"html",selector:"h3"}},edit:function(e){var t=e.attributes.panelTitle,n=(e.className,e.setAttributes);return Object(l.createElement)("div",{className:"nhsuk-do-dont-list"},Object(l.createElement)("h3",{className:"nhsuk-do-dont-list__label"},Object(l.createElement)(r,{placeholder:a("Panel Title","nhsblocks"),value:t,onChange:function(e){n({panelTitle:e})}})),Object(l.createElement)("ul",{className:"nhsuk-list"},Object(l.createElement)(o,{allowedBlocks:[]})))},save:function(e){var t=e.attributes,n=t.panelTitle;t.panelText;return Object(l.createElement)("div",{className:"nhsuk-do-dont-list"},Object(l.createElement)("h3",{className:"nhsuk-do-dont-list__label"},Object(l.createElement)(r.Content,{value:n})),Object(l.createElement)("ul",{className:"nhsuk-list"},Object(l.createElement)(o.Content,null)))}}),s("nhsblocks/dodontitem",{title:a("List Item","nhsblocks"),category:"nhsblocks",parent:["nhsblocks/dodont"],attributes:{panelText:{type:"string",source:"html",selector:"h3"}},edit:function(e){var t=e.attributes.panelText,n=e.className,s=e.setAttributes;return Object(l.createElement)("li",{className:"".concat(n)},Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"}),Object(l.createElement)(r,{placeholder:a("Text","nhsblocks"),value:t,onChange:function(e){s({panelText:e})}}))},save:function(e){var t=e.attributes,n=(t.panelTitle,t.panelText);return Object(l.createElement)("li",{className:""},Object(l.createElement)("svg",{class:"nhsuk-icon nhsuk-icon__",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none","aria-hidden":"true"}),Object(l.createElement)(r.Content,{value:n}))}}),wp.blocks.registerBlockStyle("nhsblocks/dodontitem",{name:"default",label:"do",isDefault:!0}),wp.blocks.registerBlockStyle("nhsblocks/dodontitem",{name:"dont",label:"Cross"});var i=wp.i18n.__,u=wp.blocks.registerBlockType,m=wp.editor,b=m.RichText,h=m.URLInputButton;u("nhsblocks/nhsbutton",{title:i("Button","nhsblocks"),category:"nhsblocks",attributes:{buttonLabel:{type:"string",source:"html",selector:".nhsuk-button"},buttonLink:{type:"string",source:"attribute",selector:"a.nhsuk-button",attribute:"href"}},edit:function(e){var t=e.attributes,n=t.buttonLabel,a=t.buttonLink,s=e.className,c=e.setAttributes;return Object(l.createElement)("a",{href:"#0",className:"".concat(s," nhsuk-button")},Object(l.createElement)(b,{placeholder:i("Button Label","nhsblocks"),value:n,onChange:function(e){c({buttonLabel:e})}}),Object(l.createElement)(h,{className:"nhsblocks-dropdown__input",label:i("Button URL","nhsblocks"),onChange:function(e){c({buttonLink:e})},url:a}))},save:function(e){var t=e.attributes,n=t.buttonLabel,a=t.buttonLink;return Object(l.createElement)("a",{href:a,className:"nhsuk-button"},Object(l.createElement)(b.Content,{value:n}))}}),wp.blocks.registerBlockStyle("nhsblocks/nhsbutton",{name:"default",label:"Standard",isDefault:!0}),wp.blocks.registerBlockStyle("nhsblocks/nhsbutton",{name:"secondary",label:"Secondary"}),wp.blocks.registerBlockStyle("nhsblocks/nhsbutton",{name:"reverse",label:"Reverse"});var p=wp.i18n.__,d=wp.blocks.registerBlockType,k=wp.editor.RichText;d("nhsblocks/reveal1",{title:p("Simple Reveal","nhsblocks"),category:"nhsblocks",attributes:{revealTitle:{type:"string",source:"html",selector:".nhsuk-details__summary-text"},revealText:{type:"string",source:"html",selector:".nhsuk-details__text"},expanderBox:{type:"string"}},edit:function(e){var t=e.attributes,n=t.revealTitle,a=t.revealText,s=e.className,c=e.setAttributes;return Object(l.createElement)("details",{className:"".concat(s," nhsuk-details newstyle"),open:!0},Object(l.createElement)("summary",{className:"nhsuk-details__summary",role:"button","aria-controls":"details-content-","aria-expanded":"true"},Object(l.createElement)("span",{className:"nhsuk-details__summary-text"},Object(l.createElement)(k,{placeholder:p("Reveal Title","nhsblocks"),value:n,onChange:function(e){c({revealTitle:e})}}))),Object(l.createElement)("div",{className:"nhsuk-details__text",id:"details-content-","aria-hidden":"false"},Object(l.createElement)(k,{multiline:"p",placeholder:p("Reveal Contents","nhsblocks"),onChange:function(e){c({revealText:e})},value:a})))},save:function(e){var t=e.attributes,n=t.revealTitle,a=t.revealText;return Object(l.createElement)("details",{className:"nhsuk-details"},Object(l.createElement)("summary",{className:"nhsuk-details__summary",role:"button","aria-controls":"details-content-","aria-expanded":"false"},Object(l.createElement)("span",{className:"nhsuk-details__summary-text"},Object(l.createElement)(k.Content,{value:n}))),Object(l.createElement)("div",{className:"nhsuk-details__text",id:"details-content-","aria-hidden":"false"},Object(l.createElement)(k.Content,{multiline:"p",value:a})))}}),wp.blocks.registerBlockStyle("nhsblocks/reveal1",{name:"default",label:"Down Arrow",isDefault:!0}),wp.blocks.registerBlockStyle("nhsblocks/reveal1",{name:"expander",label:"Plus Icon"});var g=wp.i18n.__,v=wp.blocks.registerBlockType,O=wp.editor.RichText;v("nhsblocks/panel1",{title:g("Panel Region","nhsblocks"),category:"nhsblocks",attributes:{panelTitle:{type:"string",source:"html",selector:"h3"},panelText:{type:"array",source:"children",multiline:"p",selector:".paneltext"}},edit:function(e){var t=e.attributes,n=t.panelTitle,a=t.panelText,s=e.className,c=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(s)},Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(O,{placeholder:g("Panel Title","nhsblocks"),value:n,onChange:function(e){c({panelTitle:e})}})),Object(l.createElement)("div",{className:"paneltext"},Object(l.createElement)(O,{multiline:"p",placeholder:g("Panel Contents","nhsblocks"),onChange:function(e){c({panelText:e})},value:a}))))},save:function(e){var t=e.attributes,n=t.panelTitle,a=t.panelText;return Object(l.createElement)("div",{className:"nhsuk-grid-column-size"},Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(O.Content,{value:n})),Object(l.createElement)("div",{className:"paneltext"},Object(l.createElement)(O.Content,{multiline:"p",value:a}))))}}),wp.blocks.registerBlockStyle("nhsblocks/panel1",{name:"default",label:"Plain white panel",isDefault:!0}),wp.blocks.registerBlockStyle("nhsblocks/panel1",{name:"panel-grey",label:"Grey"}),wp.blocks.registerBlockStyle("nhsblocks/panel1",{name:"panel-with-label",label:"With Label"});var j=wp.i18n.__,E=wp.blocks.registerBlockType,_=wp.editor,f=(_.RichText,_.InnerBlocks);E("nhsblocks/panelgroup",{title:j("Panel Group","nhsblocks"),category:"nhsblocks",edit:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(f,{allowedBlocks:["nhsblocks/panel1","nhsblocks/grid-width"]})))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-panel-group nhsuk-grid-column-full"},Object(l.createElement)(f.Content,null)))}});var N=wp.i18n.__,w=wp.blocks.registerBlockType,y=wp.editor.RichText,T=wp.data.withSelect;w("nhsblocks/latestnews",{title:N("Latest Posts / News","nhsblocks"),category:"nhsblocks",edit:T(function(e){return{posts:e("core").getEntityRecords("postType","post",{per_page:6})}})(function(e){var t=e.posts;e.className;if(!t)return"Loading...";if(t&&0===t.length)return"No posts";var n=t[0];console.info(n);return Object(l.createElement)("div",{className:"nhsuk-grid-column-one-'.$width.' nhsuk-panel-group__item"},Object(l.createElement)("div",{className:"nhsuk-panel"},Object(l.createElement)("h3",null,Object(l.createElement)(y.Content,{value:n.title.rendered})),Object(l.createElement)("img",{src:function(e){return e||""}(n.featured_image_nhsblocksFeatImg_url),alt:"{post.title.rendered}"}),Object(l.createElement)(y.Content,{value:n.excerpt.rendered}),Object(l.createElement)("a",{href:n.link},"Read More Link")))}),save:function(e){return null}});var x=wp.i18n.__,C=wp.blocks.registerBlockType,B=wp.editor,L=B.URLInputButton,R=B.RichText,S=B.InnerBlocks,P=B.MediaUpload,I=B.InspectorControls;C("nhsblocks/promo1",{title:x("Promo Region","nhsblocks"),category:"nhsblocks",attributes:{promoTitle:{type:"string",source:"html",selector:".nhsuk-promo__heading"},promoText:{type:"string",source:"html",selector:".nhsuk-promo__description"},promoLink:{type:"string",source:"attribute",selector:".nhsuk-promo a",attribute:"href"}},edit:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,s=t.promoLink,c=(e.className,e.setAttributes);return Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(L,{className:"nhsblocks-dropdown__input",label:x("Panel Link","nhsblocks"),onChange:function(e){c({promoLink:e})},url:s}),Object(l.createElement)(S,{allowedBlocks:[]}),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(R,{placeholder:x("Promo Title","nhsblocks"),value:n,onChange:function(e){c({promoTitle:e})}})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(R,{multiline:"p",placeholder:x("Promo Contents","nhsblocks"),onChange:function(e){c({promoText:e})},value:a}))))},save:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,s=t.promoLink;return Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("a",{href:s,className:"nhsuk-promo__link-wrapper"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(S.Content,null),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(R.Content,{value:n})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(R.Content,{multiline:"p",value:a})))))}}),C("nhsblocks/promoimage",{title:x("Promo Image","nhsblocks"),parent:["nhsblocks/promo1"],category:"nhsblocks",attributes:{imgUrl:{type:"string",default:null}},edit:function(e){var t=e.attributes.imgUrl,n=(e.className,e.setAttributes);return[Object(l.createElement)(I,null,Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a panel image:"),Object(l.createElement)("br",null),Object(l.createElement)(P,{onSelect:function(e){n({imgUrl:e.sizes.full.url})},type:"image",value:t,render:function(e){var t=e.open;return Object(l.createElement)("button",{className:"nhsuk-button",onClick:t},"Upload Image!")}}))),Object(l.createElement)("div",{className:"imagewrapper"},Object(l.createElement)("img",{className:"nhsuk-promo__img",src:t}))]},save:function(e){var t=e.attributes.imgUrl;e.className,e.setAttributes;return Object(l.createElement)("img",{className:"nhsuk-promo__img",src:t})}});var U=wp.i18n.__,A=wp.blocks.registerBlockType,q=wp.editor,W=q.URLInputButton,D=q.RichText,z=q.InnerBlocks,M=q.MediaUpload,Q=q.InspectorControls,G=(q.BlockControls,wp.components),F=G.SelectControl,H=G.PanelBody;A("nhsblocks/promogroup",{title:U("Promo Group","nhsblocks"),description:U("Add your promo items in here - as many as you like. Just remember if you set widths on them, the total of each row should add up to a full width","nhsblocks"),category:"nhsblocks",edit:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-grid-column-full"},Object(l.createElement)("div",{className:"nhsuk-grid-row nhsuk-promo-group"},Object(l.createElement)(z,{allowedBlocks:[]}))))},save:function(e){return Object(l.createElement)("div",{className:"nhsuk-grid-row"},Object(l.createElement)("div",{className:"nhsuk-grid-column-full"},Object(l.createElement)("div",{className:"nhsuk-grid-row nhsuk-promo-group"},Object(l.createElement)(z.Content,null))))}}),A("nhsblocks/promo2",{title:U("Promo Region","nhsblocks"),category:"nhsblocks",parent:["nhsblocks/promogroup"],attributes:{promoTitle:{type:"string",source:"html",selector:".nhsuk-promo__heading"},promoText:{type:"string",source:"html",selector:".nhsuk-promo__description"},promoLink:{type:"string",source:"attribute",selector:".nhsuk-promo a",attribute:"href"},promoImg:{type:"string",source:"html",selector:".nhsuk-promo-img"},columnWidth:{type:"string",default:"nhsuk-grid-column-full nhsuk-promo-group__item"}},edit:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,s=t.promoLink,c=t.columnWidth,r=e.className,o=e.setAttributes;return[Object(l.createElement)(Q,null,Object(l.createElement)(H,{title:"Column Width",icon:"welcome-widgets-menus",initialOpen:!0},Object(l.createElement)(F,{label:"Column Width",value:c,options:[{label:"Full Width",value:"nhsuk-grid-column-full nhsuk-promo-group__item"},{label:"Half Width",value:"nhsuk-grid-column-one-half nhsuk-promo-group__item"},{label:"One Third Width",value:"nhsuk-grid-column-one-third nhsuk-promo-group__item"},{label:"Two Thirds Width",value:"nhsuk-grid-column-two-thirds nhsuk-promo-group__item"}],onChange:function(e){o({columnWidth:e})}}))),Object(l.createElement)("div",{className:"".concat(r," ").concat(c),style:{float:"inherit",display:"inline-block"}},Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(W,{className:"nhsblocks-dropdown__input",label:U("Panel Link","nhsblocks"),onChange:function(e){o({promoLink:e})},url:s}),Object(l.createElement)(z,{allowedBlocks:[]}),Object(l.createElement)("h3",{class:"nhsuk-promo__heading"},Object(l.createElement)(D,{placeholder:U("Promo Title","nhsblocks"),value:n,onChange:function(e){o({promoTitle:e})}})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(D,{multiline:"p",placeholder:U("Promo Contents","nhsblocks"),onChange:function(e){o({promoText:e})},value:a})))))]},save:function(e){var t=e.attributes,n=t.promoTitle,a=t.promoText,s=t.promoLink,c=t.columnWidth,r=e.className;e.setAttributes;return Object(l.createElement)("div",{className:"".concat(r," ").concat(c)},Object(l.createElement)("div",{className:"nhsuk-promo"},Object(l.createElement)("a",{href:s,className:"nhsuk-promo__link-wrapper"},Object(l.createElement)("div",{class:"nhsuk-promo__content"},Object(l.createElement)(z.Content,null),Object(l.createElement)("h3",{className:"nhsuk-promo__heading"},Object(l.createElement)(D.Content,{value:n})),Object(l.createElement)("div",{className:"nhsuk-promo__description"},Object(l.createElement)(D.Content,{multiline:"p",value:a}))))))}}),A("nhsblocks/promoimage2",{title:U("Promo Image","nhsblocks"),parent:["nhsblocks/promo2"],category:"nhsblocks",attributes:{imgUrl:{type:"string",default:null}},edit:function(e){var t=e.attributes.imgUrl,n=(e.className,e.setAttributes);return[Object(l.createElement)(Q,null,Object(l.createElement)("div",null,Object(l.createElement)("strong",null,"Select a panel image:"),Object(l.createElement)("br",null),Object(l.createElement)(M,{onSelect:function(e){n({imgUrl:e.sizes.full.url})},type:"image",value:t,render:function(e){var t=e.open;return Object(l.createElement)("button",{className:"nhsuk-button",onClick:t},"Upload Image!")}}))),Object(l.createElement)("div",{className:"imagewrapper"},Object(l.createElement)("img",{className:"nhsuk-promo__img",src:t}))]},save:function(e){var t=e.attributes.imgUrl;e.className,e.setAttributes;return Object(l.createElement)("img",{className:"nhsuk-promo__img",src:t})}});var J=wp.i18n.__,$=wp.blocks.registerBlockType,K=wp.editor.RichText;$("nhsblocks/quote1",{title:J("Simple Quote","nhsblocks"),category:"nhsblocks",attributes:{quoteName:{type:"string",source:"html",selector:".nhsuk-inset-text__quote-attribution"},quoteText:{type:"array",source:"children",multiline:"p",selector:".nhsuk-inset-text__quote"}},edit:function(e){var t=e.attributes,n=t.quoteName,a=t.quoteText,s=(e.className,e.setAttributes);return Object(l.createElement)("div",{className:"nhsuk-grid-column-size nhsuk-promo-group__item"},Object(l.createElement)("div",{className:"nhsuk-inset-text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Quote / Testimonial: "),Object(l.createElement)("div",{className:"nhsuk-inset-text__quote"},Object(l.createElement)(K,{multiline:"p",placeholder:J("Quote","nhsblocks"),onChange:function(e){s({quoteText:e})},value:a})),Object(l.createElement)("span",{className:"nhsuk-inset-text__quote-attribution"},Object(l.createElement)(K,{placeholder:J("Quote Name","nhsblocks"),value:n,onChange:function(e){s({quoteName:e})}}))))},save:function(e){var t=e.attributes,n=t.quoteName,a=t.quoteText;return Object(l.createElement)("div",{className:"nhsuk-grid-column-size nhsuk-promo-group__item"},Object(l.createElement)("div",{className:"nhsuk-inset-text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Quote / Testimonial: "),Object(l.createElement)("div",{className:"nhsuk-inset-text__quote"},Object(l.createElement)(K.Content,{multiline:"p",value:a})),Object(l.createElement)("span",{className:"nhsuk-inset-text__quote-attribution"},Object(l.createElement)(K.Content,{value:n}))))}});var V=wp.i18n.__,X=wp.blocks.registerBlockType,Y=wp.editor.RichText;X("nhsblocks/card1",{title:V("Card Region","nhsblocks"),category:"nhsblocks",attributes:{cardTitle:{type:"string",source:"html",selector:".nhsuk-care-card__heading-text"},cardText:{type:"array",source:"children",multiline:"p",selector:".nhsuk-care-card__content"}},edit:function(e){var t=e.attributes,n=t.cardTitle,a=t.cardText,s=e.className,c=e.setAttributes;return Object(l.createElement)("div",{className:"".concat(s," nhsuk-care-card")},Object(l.createElement)("div",{className:"nhsuk-care-card__heading-container"},Object(l.createElement)("h3",{className:"nhsuk-care-card__heading"},Object(l.createElement)("span",{role:"text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Non-urgent advice: "),Object(l.createElement)("span",{className:"nhsuk-care-card__heading-text"},Object(l.createElement)(Y,{placeholder:V("Card Title","nhsblocks"),value:n,onChange:function(e){c({cardTitle:e})}})))),Object(l.createElement)("span",{className:"nhsuk-care-card__arrow","aria-hidden":"true"})),Object(l.createElement)("div",{className:"nhsuk-care-card__content"},Object(l.createElement)(Y,{multiline:"p",placeholder:V("Card Contents","nhsblocks"),onChange:function(e){c({cardText:e})},value:a})))},save:function(e){var t=e.attributes,n=t.cardTitle,a=t.cardText;return Object(l.createElement)("div",{className:"nhsuk-grid-column-width nhsuk-care-card nhsuk-care-card--type"},Object(l.createElement)("div",{className:"nhsuk-care-card__heading-container"},Object(l.createElement)("h3",{className:"nhsuk-care-card__heading"},Object(l.createElement)("span",{role:"text"},Object(l.createElement)("span",{className:"nhsuk-u-visually-hidden"},"Non-urgent advice: "),Object(l.createElement)("span",{className:"nhsuk-care-card__heading-text"},Object(l.createElement)(Y.Content,{value:n})))),Object(l.createElement)("span",{className:"nhsuk-care-card__arrow","aria-hidden":"true"})),Object(l.createElement)("div",{className:"nhsuk-care-card__content"},Object(l.createElement)(Y.Content,{multiline:"p",value:a})))}}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"default",label:"Standard Blue",isDefault:!0}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"urgent",label:"Urgent (Red)"}),wp.blocks.registerBlockStyle("nhsblocks/card1",{name:"immediate",label:"Immediate (Red and Black)"})}]);