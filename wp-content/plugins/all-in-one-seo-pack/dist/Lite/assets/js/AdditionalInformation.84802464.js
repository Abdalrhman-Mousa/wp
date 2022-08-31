var c=Object.defineProperty,p=Object.defineProperties;var g=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var l=(a,t,i)=>t in a?c(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,s=(a,t)=>{for(var i in t||(t={}))u.call(t,i)&&l(a,i,t[i]);if(r)for(var i of r(t))f.call(t,i)&&l(a,i,t[i]);return a},e=(a,t)=>p(a,g(t));import{W as v}from"./ToolsSettings.a9d9524e.js";import{U as _}from"./Image.c2ada86f.js";import{M as h}from"./MaxCounts.3eed5286.js";import{n as I}from"./vueComponentNormalizer.87056a83.js";import{a as m,d as C}from"./index.8900b7f9.js";import{B as b}from"./Img.2be756c0.js";import{B as z}from"./Phone.3d9368d6.js";import{B as y}from"./RadioToggle.98e1e7ec.js";import{C as S}from"./SocialProfiles.c8717b2c.js";import{S as k}from"./Plus.a9b9ba75.js";import{W as T,a as O,b as L}from"./Header.f9af4a65.js";import{W as N,a as P}from"./Steps.39febb57.js";import"./context.04ada340.js";import"./helpers.aa477dea.js";import"./index.652636d3.js";import"./client.94d919c5.js";import"./_commonjsHelpers.f40d732e.js";import"./default-i18n.abde8d59.js";import"./constants.7cd698f2.js";import"./isArrayLikeObject.a4a9229a.js";import"./cleanForSlug.f1163528.js";import"./Checkbox.5873a8d2.js";import"./Checkmark.e7547654.js";import"./Textarea.d161fc2e.js";import"./Index.476ddbfd.js";import"./SettingsRow.eb71f07b.js";import"./Row.13b6f3f1.js";import"./Logo.1a5e022a.js";var x=function(){var a=this,t=a.$createElement,i=a._self._c||t;return i("div",{staticClass:"aioseo-wizard-additional-information"},[i("wizard-header"),i("wizard-container",[i("wizard-body",{scopedSlots:a._u([{key:"footer",fn:function(){return[i("div",{staticClass:"go-back"},[i("router-link",{staticClass:"no-underline",attrs:{to:a.getPrevLink}},[a._v("\u2190")]),a._v(" \xA0 "),i("router-link",{attrs:{to:a.getPrevLink}},[a._v(a._s(a.strings.goBack))])],1),i("div",{staticClass:"spacer"}),i("base-button",{attrs:{type:"blue",loading:a.loading},on:{click:a.saveAndContinue}},[a._v(a._s(a.strings.saveAndContinue)+" \u2192")])]},proxy:!0}])},[i("wizard-steps"),i("div",{staticClass:"header"},[a._v(" "+a._s(a.strings.additionalSiteInformation)+" ")]),i("div",{staticClass:"person-or-organization aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.personOrOrganization))])]),i("base-radio-toggle",{attrs:{name:"siteRepresents",options:[{label:a.strings.person,value:"person"},{label:a.strings.organization,value:"organization"}]},model:{value:a.additionalInformation.siteRepresents,callback:function(o){a.$set(a.additionalInformation,"siteRepresents",o)},expression:"additionalInformation.siteRepresents"}}),i("div",{staticClass:"aioseo-description"},[a._v(" "+a._s(a.strings.personOrOrganizationDescription)+" ")])],1),a.additionalInformation.siteRepresents==="person"?i("div",{staticClass:"aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.choosePerson))])]),i("base-select",{staticClass:"person-chooser",attrs:{options:a.users,value:a.getPersonOptions(a.additionalInformation.person)},on:{input:function(o){return a.additionalInformation.person=o.value}},scopedSlots:a._u([{key:"singleLabel",fn:function(o){var n=o.option;return[i("div",{staticClass:"person-label"},[n.gravatar?i("div",{staticClass:"person-avatar"},[i("img",{attrs:{alt:"User Gravatar",src:n.gravatar}})]):a._e(),i("div",{staticClass:"person-name"},[a._v(" "+a._s(n.label)+" ")])])]}},{key:"option",fn:function(o){var n=o.option;return[i("div",{staticClass:"person-label"},[n.gravatar?i("div",{staticClass:"person-avatar"},[i("img",{attrs:{alt:"User Gravatar",src:n.gravatar}})]):a._e(),i("div",{staticClass:"person-name"},[a._v(" "+a._s(n.label)+" ")])])]}}],null,!1,48911446)})],1):a._e(),a.additionalInformation.siteRepresents==="organization"?i("div",{staticClass:"schema-graph-name aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.organizationName))])]),i("base-input",{attrs:{size:"medium"},model:{value:a.additionalInformation.organizationName,callback:function(o){a.$set(a.additionalInformation,"organizationName",o)},expression:"additionalInformation.organizationName"}})],1):a._e(),a.additionalInformation.siteRepresents!=="organization"&&a.additionalInformation.person==="manual"?i("div",{staticClass:"schema-graph-name aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.name))])]),i("base-input",{attrs:{size:"medium"},model:{value:a.additionalInformation.personName,callback:function(o){a.$set(a.additionalInformation,"personName",o)},expression:"additionalInformation.personName"}})],1):a._e(),a.additionalInformation.siteRepresents==="organization"?i("div",{staticClass:"schema-graph-phone aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.phone))])]),i("base-phone",{model:{value:a.additionalInformation.phone,callback:function(o){a.$set(a.additionalInformation,"phone",o)},expression:"additionalInformation.phone"}})],1):a._e(),a.additionalInformation.siteRepresents==="organization"?i("div",{staticClass:"schema-graph-contact-type aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.contactType))])]),i("base-select",{attrs:{size:"medium",options:a.$constants.CONTACT_TYPES,placeholder:a.strings.chooseContactType,value:a.getContactTypeOptions(a.additionalInformation.contactType)},on:{input:function(o){return a.additionalInformation.contactType=o.value}}}),i("div",{staticClass:"aioseo-description"},[a._v(" "+a._s(a.strings.contactTypeDescription)+" ")])],1):a._e(),a.additionalInformation.siteRepresents==="organization"&&a.additionalInformation.contactType==="manual"?i("div",{staticClass:"schema-graph-contact-type-manual aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.contactType))])]),i("base-input",{attrs:{size:"medium"},model:{value:a.additionalInformation.contactTypeManual,callback:function(o){a.$set(a.additionalInformation,"contactTypeManual",o)},expression:"additionalInformation.contactTypeManual"}})],1):a._e(),a.additionalInformation.siteRepresents==="organization"?i("div",{staticClass:"schema-graph-image aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.logo))])]),i("div",{staticClass:"image-upload"},[i("base-input",{attrs:{size:"medium",placeholder:a.strings.pasteYourImageUrl},model:{value:a.additionalInformation.organizationLogo,callback:function(o){a.$set(a.additionalInformation,"organizationLogo",o)},expression:"additionalInformation.organizationLogo"}}),i("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(o){a.openUploadModal("organizationLogo",function(n){return a.additionalInformation.organizationLogo=n})}}},[i("svg-circle-plus"),a._v(" "+a._s(a.strings.uploadOrSelectImage)+" ")],1),i("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(o){a.additionalInformation.organizationLogo=null}}},[a._v(" "+a._s(a.strings.remove)+" ")])],1),i("div",{staticClass:"aioseo-description"},[a._v(" "+a._s(a.strings.minimumSize)+" ")]),i("base-img",{attrs:{src:a.additionalInformation.organizationLogo}})],1):a._e(),a.additionalInformation.siteRepresents!=="organization"&&a.additionalInformation.person==="manual"?i("div",{staticClass:"schema-graph-image aioseo-settings-row no-border no-margin"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.logo))])]),i("div",{staticClass:"image-upload"},[i("base-input",{attrs:{size:"medium",placeholder:a.strings.pasteYourImageUrl},model:{value:a.additionalInformation.personLogo,callback:function(o){a.$set(a.additionalInformation,"personLogo",o)},expression:"additionalInformation.personLogo"}}),i("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(o){a.openUploadModal("personLogo",function(n){return a.additionalInformation.personLogo=n})}}},[i("svg-circle-plus"),a._v(" "+a._s(a.strings.uploadOrSelectImage)+" ")],1),i("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(o){a.additionalInformation.personLogo=null}}},[a._v(" "+a._s(a.strings.remove)+" ")])],1),i("div",{staticClass:"aioseo-description"},[a._v(" "+a._s(a.strings.minimumSize)+" ")]),i("base-img",{attrs:{src:a.additionalInformation.personLogo}})],1):a._e(),i("div",{staticClass:"schema-graph-image aioseo-settings-row"},[i("div",{staticClass:"settings-name"},[i("div",{staticClass:"name small-margin"},[a._v(a._s(a.strings.defaultSocialShareImage))])]),i("div",{staticClass:"image-upload"},[i("base-input",{attrs:{size:"medium",placeholder:a.strings.pasteYourImageUrl},model:{value:a.additionalInformation.socialShareImage,callback:function(o){a.$set(a.additionalInformation,"socialShareImage",o)},expression:"additionalInformation.socialShareImage"}}),i("base-button",{staticClass:"insert-image",attrs:{size:"medium",type:"black"},on:{click:function(o){a.openUploadModal("socialShareImage",function(n){return a.additionalInformation.socialShareImage=n})}}},[i("svg-circle-plus"),a._v(" "+a._s(a.strings.uploadOrSelectImage)+" ")],1),i("base-button",{staticClass:"remove-image",attrs:{size:"medium",type:"gray"},on:{click:function(o){a.additionalInformation.socialShareImage=null}}},[a._v(" "+a._s(a.strings.remove)+" ")])],1),i("div",{staticClass:"aioseo-description"},[a._v(" "+a._s(a.strings.minimumSize)+" ")]),i("base-img",{attrs:{src:a.additionalInformation.socialShareImage}})],1),i("div",{staticClass:"header social"},[a._v(" "+a._s(a.strings.yourSocialProfiles)+" ")]),a.loaded?i("div",{staticClass:"social-profiles"},[i("core-social-profiles",{attrs:{options:a.additionalInformation,leftSize:"4",rightSize:"8",sameUsernameWidth:"4",hideAdditionalProfiles:""}})],1):a._e()],1),i("wizard-close-and-exit")],1)],1)},w=[];const $={components:{BaseImg:b,BasePhone:z,BaseRadioToggle:y,CoreSocialProfiles:S,SvgCirclePlus:k,WizardBody:T,WizardCloseAndExit:N,WizardContainer:O,WizardHeader:L,WizardSteps:P},mixins:[h,_,v],data(){return{loaded:!1,loading:!1,stage:"additional-information",strings:{additionalSiteInformation:"Additional Site Information",personOrOrganization:"Person or Organization",choosePerson:"Choose a Person",person:"Person",organization:"Organization",personOrOrganizationDescription:"Choose whether the site represents a person or an organization.",name:"Name",organizationName:"Organization Name",phone:"Phone Number",chooseContactType:"Choose a Contact Type",contactType:"Contact Type",contactTypeDescription:"Select which team or department the phone number belongs to.",logo:"Logo",uploadOrSelectImage:"Upload or Select Image",pasteYourImageUrl:"Paste your image URL or select a new image",minimumSize:"Minimum size: 112px x 112px, The image must be in JPG, PNG, GIF, SVG, or WEBP format.",remove:"Remove",defaultSocialShareImage:"Default Social Share Image",yourSocialProfiles:"Your Social Profiles"}}},watch:{"options.social.profiles":{deep:!0,handler(a){this.additionalInformation.social.profiles=a}}},computed:e(s(s({},m(["options"])),m("wizard",["additionalInformation"])),{users(){return[{label:"Manually Enter Person",value:"manual"}].concat(this.$aioseo.users.map(a=>({label:`${a.displayName} (${a.email})`,gravatar:a.gravatar,value:a.id})))}}),methods:e(s({},C("wizard",["saveWizard"])),{getPersonOptions(a){return this.users.find(t=>t.value===a)},getContactTypeOptions(a){return this.$constants.CONTACT_TYPES.find(t=>t.value===a)},saveAndContinue(){this.loading=!0,this.saveWizard("additionalInformation").then(()=>{this.$router.push(this.getNextLink)})}}),mounted(){this.$nextTick(()=>{const a=JSON.parse(JSON.stringify(this.options.searchAppearance)),t=JSON.parse(JSON.stringify(this.options.social));this.additionalInformation.social.profiles=JSON.parse(JSON.stringify(t.profiles)),this.additionalInformation.socialShareImage=t.facebook.general.defaultImagePosts,this.additionalInformation.siteRepresents=a.global.schema.siteRepresents,this.additionalInformation.person=a.global.schema.person,this.additionalInformation.organizationName=a.global.schema.organizationName,this.additionalInformation.organizationLogo=a.global.schema.organizationLogo,this.additionalInformation.personName=a.global.schema.personName,this.additionalInformation.personLogo=a.global.schema.personLogo,this.additionalInformation.phone=a.global.schema.phone,this.additionalInformation.contactType=a.global.schema.contactType,this.additionalInformation.contactTypeManual=a.global.schema.contactTypeManual,this.loaded=!0})}},d={};var R=I($,x,w,!1,A,null,null,null);function A(a){for(let t in d)this[t]=d[t]}var ca=function(){return R.exports}();export{ca as default};