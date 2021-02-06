/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function t(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const e="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},r=`{{lit-${String(Math.random()).slice(2)}}}`,i=`\x3c!--${r}--\x3e`,o=new RegExp(`${r}|${i}`);class s{constructor(t,e){this.parts=[],this.element=e;const n=[],i=[],s=document.createTreeWalker(e.content,133,null,!1);let l=0,u=-1,p=0;const{strings:h,values:{length:f}}=t;for(;p<f;){const t=s.nextNode();if(null!==t){if(u++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)a(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=h[p],n=d.exec(e)[2],r=n.toLowerCase()+"$lit$",i=t.getAttribute(r);t.removeAttribute(r);const s=i.split(o);this.parts.push({type:"attribute",index:u,name:n,strings:s}),p+=s.length-1}}"TEMPLATE"===t.tagName&&(i.push(t),s.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(r)>=0){const r=t.parentNode,i=e.split(o),s=i.length-1;for(let e=0;e<s;e++){let n,o=i[e];if(""===o)n=c();else{const t=d.exec(o);null!==t&&a(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(o)}r.insertBefore(n,t),this.parts.push({type:"node",index:++u})}""===i[s]?(r.insertBefore(c(),t),n.push(t)):t.data=i[s],p+=s}}else if(8===t.nodeType)if(t.data===r){const e=t.parentNode;null!==t.previousSibling&&u!==l||(u++,e.insertBefore(c(),t)),l=u,this.parts.push({type:"node",index:u}),null===t.nextSibling?t.data="":(n.push(t),u--),p++}else{let e=-1;for(;-1!==(e=t.data.indexOf(r,e+1));)this.parts.push({type:"node",index:-1}),p++}}else s.currentNode=i.pop()}for(const t of n)t.parentNode.removeChild(t)}}const a=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},l=t=>-1!==t.index,c=()=>document.createComment(""),d=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,133,null,!1);let o=h(r),s=r[o],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,o=h(r,o),s=r[o]}c.forEach(t=>t.parentNode.removeChild(t))}const p=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},h=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(l(e))return n}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const f=new WeakMap,m=t=>"function"==typeof t&&f.has(t),y={},g={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=e?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),n=[],r=this.template.parts,i=document.createTreeWalker(t,133,null,!1);let o,s=0,a=0,c=i.nextNode();for(;s<r.length;)if(o=r[s],l(o)){for(;a<o.index;)a++,"TEMPLATE"===c.nodeName&&(n.push(c),i.currentNode=c.content),null===(c=i.nextNode())&&(i.currentNode=n.pop(),c=i.nextNode());if("node"===o.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(c.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,o.name,o.strings,this.options));s++}else this.__parts.push(void 0),s++;return e&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const b=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),w=` ${r} `;class _{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let o=0;o<t;o++){const t=this.strings[o],s=t.lastIndexOf("\x3c!--");n=(s>-1||n)&&-1===t.indexOf("--\x3e",s+1);const a=d.exec(t);e+=null===a?t+(n?w:i):t.substr(0,a.index)+a[1]+a[2]+"$lit$"+a[3]+r}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==b&&(e=b.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const x=t=>null===t||!("object"==typeof t||"function"==typeof t),S=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class P{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new C(this)}_getValue(){const t=this.strings,e=t.length-1,n=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=n[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!S(t))return t}let r="";for(let i=0;i<e;i++){r+=t[i];const e=n[i];if(void 0!==e){const t=e.value;if(x(t)||!S(t))r+="string"==typeof t?t:String(t);else for(const e of t)r+="string"==typeof e?e:String(e)}}return r+=t[e],r}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class C{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===y||x(t)&&t===this.value||(this.value=t,m(t)||(this.committer.dirty=!0))}commit(){for(;m(this.value);){const t=this.value;this.value=y,t(this)}this.value!==y&&this.committer.commit()}}class O{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(c()),this.endNode=t.appendChild(c())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=c()),t.__insert(this.endNode=c())}insertAfterPart(t){t.__insert(this.startNode=c()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}const t=this.__pendingValue;t!==y&&(x(t)?t!==this.value&&this.__commitText(t):t instanceof _?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):S(t)?this.__commitIterable(t):t===g?(this.value=g,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof v&&this.value.template===e)this.value.update(t.values);else{const n=new v(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)n=e[r],void 0===n&&(n=new O(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){n(this.startNode.parentNode,t.nextSibling,this.endNode)}}class E{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=y}}class k extends P{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new A(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class A extends C{}let N=!1;(()=>{try{const t={get capture(){return N=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class T{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;m(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=y,t(this)}if(this.__pendingValue===y)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=j(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=y}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const j=t=>t&&(N?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function R(t){let e=I.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},I.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const i=t.strings.join(r);return n=e.keyString.get(i),void 0===n&&(n=new s(t,t.getTemplateElement()),e.keyString.set(i,n)),e.stringsArray.set(t.strings,n),n}const I=new Map,V=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const M=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,r){const i=e[0];if("."===i){return new k(t,e.slice(1),n).parts}if("@"===i)return[new T(t,e.slice(1),r.eventContext)];if("?"===i)return[new E(t,e.slice(1),n)];return new P(t,e,n).parts}handleTextExpression(t){return new O(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const $=(t,...e)=>new _(t,e,"html",M)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,U=(t,e)=>`${t}--${e}`;let B=!0;void 0===window.ShadyCSS?B=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),B=!1);const D=t=>e=>{const n=U(e.type,t);let i=I.get(n);void 0===i&&(i={stringsArray:new WeakMap,keyString:new Map},I.set(n,i));let o=i.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(r);if(o=i.keyString.get(a),void 0===o){const n=e.getTemplateElement();B&&window.ShadyCSS.prepareTemplateDom(n,t),o=new s(e,n),i.keyString.set(a,o)}return i.stringsArray.set(e.strings,o),o},z=["html","svg"],L=new Set,F=(t,e,n)=>{L.add(t);const r=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,t);const s=document.createElement("style");for(let t=0;t<o;t++){const e=i[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{z.forEach(e=>{const n=I.get(U(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),u(t,n)})})})(t);const a=r.content;n?function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null==n)return void r.appendChild(e);const o=document.createTreeWalker(r,133,null,!1);let s=h(i),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(a=p(e),n.parentNode.insertBefore(e,n));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=h(i,s);return}s=h(i,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),u(n,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const q={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},W=(t,e)=>e!==t&&(e==e||t==t),H={attribute:!0,type:String,converter:q,reflect:!1,hasChanged:W};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=H){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(r){const i=this[t];this[e]=r,this.requestUpdateInternal(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||H}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=W){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||q,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||q.toAttribute)(t,n)}initialize(){this._updateState=0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=H){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,n){let r=!0;if(void 0!==t){const i=this.constructor;n=n||i.getPropertyOptions(t),i._valueHasChanged(this[t],e,n.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==n.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,n))):r=!1}!this._hasRequestedUpdate&&r&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const K=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(e){window.customElements.define(t,e)}}})(t,e),Y=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function X(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Y(t,e)}const G=(t,e,n)=>{Object.defineProperty(e,n,t)},Z=(t,e)=>({kind:"method",placement:"prototype",key:e.key,descriptor:t})
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/,Q=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,tt=Symbol();class et{constructor(t,e){if(e!==tt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Q?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const nt=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof et)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new et(n,tt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const rt={};class it extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),r=[];n.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map(t=>{if(t instanceof CSSStyleSheet&&!Q){const e=Array.prototype.slice.call(t.cssRules).reduce((t,e)=>t+e.cssText,"");return new et(String(e),tt)}return t})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Q?this.renderRoot.adoptedStyleSheets=t.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==rt&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return rt}}it.finalized=!0,it.render=(t,e,r)=>{if(!r||"object"!=typeof r||!r.scopeName)throw new Error("The `scopeName` option is required.");const i=r.scopeName,o=V.has(e),s=B&&11===e.nodeType&&!!e.host,a=s&&!L.has(i),l=a?document.createDocumentFragment():e;if(((t,e,r)=>{let i=V.get(e);void 0===i&&(n(e,e.firstChild),V.set(e,i=new O(Object.assign({templateFactory:R},r))),i.appendInto(e)),i.setValue(t),i.commit()})(t,l,Object.assign({templateFactory:D(i)},r)),a){const t=V.get(l);V.delete(l);const r=t.value instanceof v?t.value.template:void 0;F(i,l,r),n(e,e.firstChild),e.appendChild(l),V.set(e,t)}!o&&s&&window.ShadyCSS.styleElement(e.host)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const ot="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,st=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},at=`{{lit-${String(Math.random()).slice(2)}}}`,lt=`\x3c!--${at}--\x3e`,ct=new RegExp(`${at}|${lt}`);class dt{constructor(t,e){this.parts=[],this.element=e;const n=[],r=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,s=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=i.nextNode();if(null!==t){if(s++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let r=0;for(let t=0;t<n;t++)ut(e[t].name,"$lit$")&&r++;for(;r-- >0;){const e=l[a],n=ft.exec(e)[2],r=n.toLowerCase()+"$lit$",i=t.getAttribute(r);t.removeAttribute(r);const o=i.split(ct);this.parts.push({type:"attribute",index:s,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(r.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(at)>=0){const r=t.parentNode,i=e.split(ct),o=i.length-1;for(let e=0;e<o;e++){let n,o=i[e];if(""===o)n=ht();else{const t=ft.exec(o);null!==t&&ut(t[2],"$lit$")&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-"$lit$".length)+t[3]),n=document.createTextNode(o)}r.insertBefore(n,t),this.parts.push({type:"node",index:++s})}""===i[o]?(r.insertBefore(ht(),t),n.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===at){const e=t.parentNode;null!==t.previousSibling&&s!==o||(s++,e.insertBefore(ht(),t)),o=s,this.parts.push({type:"node",index:s}),null===t.nextSibling?t.data="":(n.push(t),s--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(at,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=r.pop()}for(const t of n)t.parentNode.removeChild(t)}}const ut=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},pt=t=>-1!==t.index,ht=()=>document.createComment(""),ft=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function mt(t,e){const{element:{content:n},parts:r}=t,i=document.createTreeWalker(n,133,null,!1);let o=gt(r),s=r[o],a=-1,l=0;const c=[];let d=null;for(;i.nextNode();){a++;const t=i.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==s&&s.index===a;)s.index=null!==d?-1:s.index-l,o=gt(r,o),s=r[o]}c.forEach(t=>t.parentNode.removeChild(t))}const yt=t=>{let e=11===t.nodeType?0:1;const n=document.createTreeWalker(t,133,null,!1);for(;n.nextNode();)e++;return e},gt=(t,e=-1)=>{for(let n=e+1;n<t.length;n++){const e=t[n];if(pt(e))return n}return-1},vt=new WeakMap,bt=t=>"function"==typeof t&&vt.has(t),wt={},_t={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class xt{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=ot?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,r=document.createTreeWalker(t,133,null,!1);let i,o=0,s=0,a=r.nextNode();for(;o<n.length;)if(i=n[o],pt(i)){for(;s<i.index;)s++,"TEMPLATE"===a.nodeName&&(e.push(a),r.currentNode=a.content),null===(a=r.nextNode())&&(r.currentNode=e.pop(),a=r.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return ot&&(document.adoptNode(t),customElements.upgrade(t)),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const St=` ${at} `;class Pt{constructor(t,e,n,r){this.strings=t,this.values=e,this.type=n,this.processor=r}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let r=0;r<t;r++){const t=this.strings[r],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const o=ft.exec(t);e+=null===o?t+(n?St:lt):t.substr(0,o.index)+o[1]+o[2]+"$lit$"+o[3]+at}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}}const Ct=t=>null===t||!("object"==typeof t||"function"==typeof t),Ot=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class Et{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new kt(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let r=0;r<e;r++){n+=t[r];const e=this.parts[r];if(void 0!==e){const t=e.value;if(Ct(t)||!Ot(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e],n}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class kt{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===wt||Ct(t)&&t===this.value||(this.value=t,bt(t)||(this.committer.dirty=!0))}commit(){for(;bt(this.value);){const t=this.value;this.value=wt,t(this)}this.value!==wt&&this.committer.commit()}}class At{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(ht()),this.endNode=t.appendChild(ht())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=ht()),t.__insert(this.endNode=ht())}insertAfterPart(t){t.__insert(this.startNode=ht()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;bt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=wt,t(this)}const t=this.__pendingValue;t!==wt&&(Ct(t)?t!==this.value&&this.__commitText(t):t instanceof Pt?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Ot(t)?this.__commitIterable(t):t===_t?(this.value=_t,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof xt&&this.value.template===e)this.value.update(t.values);else{const n=new xt(e,t.processor,this.options),r=n._clone();n.update(t.values),this.__commitNode(r),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,r=0;for(const i of t)n=e[r],void 0===n&&(n=new At(this.options),e.push(n),0===r?n.appendIntoPart(this):n.insertAfterPart(e[r-1])),n.setValue(i),n.commit(),r++;r<e.length&&(e.length=r,this.clear(n&&n.endNode))}clear(t=this.startNode){st(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Nt{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;bt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=wt,t(this)}if(this.__pendingValue===wt)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=wt}}class Tt extends Et{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new jt(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class jt extends kt{}let Rt=!1;(()=>{try{const t={get capture(){return Rt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class It{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;bt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=wt,t(this)}if(this.__pendingValue===wt)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),r=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),r&&(this.__options=Vt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=wt}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Vt=t=>t&&(Rt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */);function Mt(t){let e=$t.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},$t.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const r=t.strings.join(at);return n=e.keyString.get(r),void 0===n&&(n=new dt(t,t.getTemplateElement()),e.keyString.set(r,n)),e.stringsArray.set(t.strings,n),n}const $t=new Map,Ut=new WeakMap,Bt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,n,r){const i=e[0];return"."===i?new Tt(t,e.slice(1),n).parts:"@"===i?[new It(t,e.slice(1),r.eventContext)]:"?"===i?[new Nt(t,e.slice(1),n)]:new Et(t,e,n).parts}handleTextExpression(t){return new At(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.2.1");const Dt=(t,...e)=>new Pt(t,e,"html",Bt)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,zt=(t,e)=>`${t}--${e}`;let Lt=!0;void 0===window.ShadyCSS?Lt=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),Lt=!1);const Ft=t=>e=>{const n=zt(e.type,t);let r=$t.get(n);void 0===r&&(r={stringsArray:new WeakMap,keyString:new Map},$t.set(n,r));let i=r.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(at);if(i=r.keyString.get(o),void 0===i){const n=e.getTemplateElement();Lt&&window.ShadyCSS.prepareTemplateDom(n,t),i=new dt(e,n),r.keyString.set(o,i)}return r.stringsArray.set(e.strings,i),i},qt=["html","svg"],Wt=new Set;window.JSCompiler_renameProperty=(t,e)=>t;const Ht={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},Jt=(t,e)=>e!==t&&(e==e||t==t),Kt={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:Jt};class Yt extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=new Promise(t=>this._enableUpdatingResolver=t),this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach((e,n)=>{const r=this._attributeNameForProperty(n,e);void 0!==r&&(this._attributeToPropertyMap.set(r,n),t.push(r))}),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach((t,e)=>this._classProperties.set(e,t))}}static createProperty(t,e=Kt){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const n="symbol"==typeof t?Symbol():"__"+t,r=this.getPropertyDescriptor(t,n,e);void 0!==r&&Object.defineProperty(this.prototype,t,r)}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this._requestUpdate(t,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||Kt}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty("finalized")||t.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const n of e)this.createProperty(n,t[n])}}static _attributeNameForProperty(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,n=Jt){return n(t,e)}static _propertyValueFromAttribute(t,e){const n=e.type,r=e.converter||Ht,i="function"==typeof r?r:r.fromAttribute;return i?i(t,n):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const n=e.type,r=e.converter;return(r&&r.toAttribute||Ht.toAttribute)(t,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}})}_applyInstanceProperties(){this._instanceProperties.forEach((t,e)=>this[e]=t),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,n){e!==n&&this._attributeToProperty(t,n)}_propertyToAttribute(t,e,n=Kt){const r=this.constructor,i=r._attributeNameForProperty(t,n);if(void 0!==i){const t=r._propertyValueToAttribute(e,n);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(i):this.setAttribute(i,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const n=this.constructor,r=n._attributeToPropertyMap.get(t);if(void 0!==r){const t=n.getPropertyOptions(r);this._updateState=16|this._updateState,this[r]=n._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}_requestUpdate(t,e){let n=!0;if(void 0!==t){const r=this.constructor,i=r.getPropertyOptions(t);r._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):n=!1}!this._hasRequestedUpdate&&n&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this._requestUpdate(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((t,e)=>this._propertyToAttribute(e,this[e],t)),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}Yt.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Xt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(n){n.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Gt(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Xt(t,e)
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/}const Zt="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol();class te{constructor(t,e){if(e!==Qt)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(Zt?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const ee=(t,...e)=>{const n=e.reduce((e,n,r)=>e+(t=>{if(t instanceof te)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+t[r+1],t[0]);return new te(n,Qt)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */(window.litElementVersions||(window.litElementVersions=[])).push("2.3.1");const ne={};class re extends Yt{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(void 0===t)this._styles=[];else if(Array.isArray(t)){const e=(t,n)=>t.reduceRight((t,n)=>Array.isArray(n)?e(n,t):(t.add(n),t),n),n=e(t,new Set),r=[];n.forEach(t=>r.unshift(t)),this._styles=r}else this._styles=[t]}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Zt?this.renderRoot.adoptedStyleSheets=t.map(t=>t.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map(t=>t.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==ne&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)}))}render(){return ne}}re.finalized=!0,re.render=(t,e,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=Ut.has(e),o=Lt&&11===e.nodeType&&!!e.host,s=o&&!Wt.has(r),a=s?document.createDocumentFragment():e;if(((t,e,n)=>{let r=Ut.get(e);void 0===r&&(st(e,e.firstChild),Ut.set(e,r=new At(Object.assign({templateFactory:Mt},n))),r.appendInto(e)),r.setValue(t),r.commit()})(t,a,Object.assign({templateFactory:Ft(r)},n)),s){const t=Ut.get(a);Ut.delete(a);((t,e,n)=>{Wt.add(t);const r=n?n.element:document.createElement("template"),i=e.querySelectorAll("style"),{length:o}=i;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(r,t);const s=document.createElement("style");for(let t=0;t<o;t++){const e=i[t];e.parentNode.removeChild(e),s.textContent+=e.textContent}(t=>{qt.forEach(e=>{const n=$t.get(zt(e,t));void 0!==n&&n.keyString.forEach(t=>{const{element:{content:e}}=t,n=new Set;Array.from(e.querySelectorAll("style")).forEach(t=>{n.add(t)}),mt(t,n)})})})(t);const a=r.content;n?function(t,e,n=null){const{element:{content:r},parts:i}=t;if(null==n)return void r.appendChild(e);const o=document.createTreeWalker(r,133,null,!1);let s=gt(i),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===n&&(a=yt(e),n.parentNode.insertBefore(e,n));-1!==s&&i[s].index===l;){if(a>0){for(;-1!==s;)i[s].index+=a,s=gt(i,s);return}s=gt(i,s)}}(n,s,a.firstChild):a.insertBefore(s,a.firstChild),window.ShadyCSS.prepareTemplateStyles(r,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(n){a.insertBefore(s,a.firstChild);const t=new Set;t.add(s),mt(n,t)}})(r,a,t.value instanceof xt?t.value.template:void 0),st(e,e.firstChild),e.appendChild(a),Ut.set(e,t)}!i&&o&&window.ShadyCSS.styleElement(e.host)};var ie=function(t,e,n,r){var i,o=arguments.length,s=o<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,r);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(s=(o<3?i(s):o>3?i(e,n,s):i(e,n))||s);return o>3&&s&&Object.defineProperty(e,n,s),s};let oe=class extends re{constructor(){super(),this.manifestpath="manifest.json",this.openmodal=!1,this.hasprompt=!1,this.relatedApps=[],this.explainer="This app can be installed on your PC or mobile device.  This will allow this web app to look and behave like any other installed app.  You will find it in your app lists and be able to pin it to your home screen, start menus or task bars.  This installed web app will also be able to safely interact with other apps and your operating system. ",this.featuresheader="Key Features",this.descriptionheader="Description",this.installbuttontext="Install",this.cancelbuttontext="Cancel",this.iosinstallinfotext="Tap the share button and then 'Add to Homescreen'",this.isSupportingBrowser=window.hasOwnProperty("BeforeInstallPromptEvent"),this.isIOS=navigator.userAgent.includes("iPhone")||navigator.userAgent.includes("iPad")||navigator.userAgent.includes("Macintosh")&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,this.installed=!1,window.addEventListener("beforeinstallprompt",t=>this.handleInstallPromptEvent(t)),document.addEventListener("keyup",t=>{"Escape"===t.key&&this.cancel()})}static get styles(){return ee`:host{--install-focus-color:#919c9c;--install-button-color:#0078d4;--modal-z-index:9999;--background-z-index:9998;--modal-background-color:white}button{outline:0}#installModalWrapper{height:100vh;width:100vw;overflow:auto;position:fixed;bottom:0;top:0;left:0;right:0;z-index:var(--modal-z-index);display:flex;justify-content:center;align-items:center}#descriptionWrapper{margin-bottom:3em}#installModal{position:absolute;background:var(--modal-background-color);font-family:sans-serif;box-shadow:0 25px 26px rgba(32,36,50,.25),0 5px 9px rgba(51,58,83,.53);border-radius:10px;display:flex;flex-direction:column;padding:0;animation-name:opened;animation-duration:150ms;z-index:var(--modal-z-index);max-width:56em}@keyframes opened{from{transform:scale(.8,.8);opacity:.4}to{transform:scale(1,1);opacity:1}}@keyframes mobile{from{opacity:.6}to{opacity:1}}@keyframes fadein{from{opacity:.2}to{opacity:1}}#background{position:fixed;top:0;bottom:0;left:0;right:0;background:#e3e3e3b0;backdrop-filter:blur(5px);z-index:var(--background-z-index);animation-name:fadein;animation-duration:250ms}#headerContainer{display:flex;justify-content:space-between;margin:40px;margin-bottom:32px}#headerContainer h1{font-size:34px;color:#3c3c3c;margin-top:20px;margin-bottom:7px}#headerContainer img{height:122px;width:122px;background:#d3d3d3;border-radius:10px;padding:12px;border-radius:24px;margin-right:24px}#buttonsContainer{display:flex;justify-content:flex-end;position:relative;height:100px;background:#dedede75;width:100%;right:0;border-radius:0 0 12px 12px}#installButton,#installCancelButton,#openButton{text-align:center;align-content:center;align-self:center;vertical-align:middle;justify-self:flex-end;line-height:200%;flex:0 0 auto;display:inline-block;background:#0078d4;color:#fff;cursor:pointer;border:solid 1px transparent;outline:0}#openButton{background:var(--install-button-color)}#installButton,#installCancelButton{min-width:130px;margin-right:30px;background:var(--install-button-color);border-radius:20px;font-weight:600;font-size:14px;line-height:21px;padding-top:10px;padding-bottom:9px;padding-left:20px;padding-right:20px;outline:0;color:#fff}#closeButton{background:0 0;border:none;color:#000;padding-left:12px;padding-right:12px;padding-top:4px;padding-bottom:4px;border-radius:20px;font-weight:600;outline:0;cursor:pointer;align-self:self-end}#closeButton:focus,#installButton:focus,#installCancelButton:focus{box-shadow:0 0 0 3px var(--install-focus-color)}#contentContainer{margin-left:40px;margin-right:40px;flex:1}#contentContainer h3{font-size:22px;color:#3c3c3c;margin-bottom:12px}#contentContainer p{font-size:14px;color:#3c3c3c}#featuresScreenDiv{display:flex;justify-content:space-around;align-items:center;margin-right:20px}#featuresScreenDiv h3{font-style:normal;font-weight:600;font-size:22px;line-height:225%;margin-top:0}#keyFeatures{overflow:hidden;padding-right:2em}#keyFeatures ul{padding-inline-start:22px;margin-block-start:12px}#featuresScreenDiv #keyFeatures li{font-style:normal;font-weight:600;font-size:16px;line-height:29px;color:rgba(51,51,51,.72)}#screenshotsContainer{max-height:220px;display:flex;max-width:30em}#screenshotsContainer button{border:none;width:4em;transition:background-color .2s}#screenshotsContainer button:focus,#screenshotsContainer button:hover{background-color:#bbb}#screenshotsContainer button svg{width:28px;fill:#6b6969}#screenshots{display:flex;scroll-snap-type:x mandatory;flex-wrap:wrap;flex-direction:column;overflow-x:scroll;width:22em;max-height:220px;-webkit-overflow-scrolling:touch}#screenshots div{display:flex;align-items:center;justify-content:center;scroll-snap-align:start;height:14em;width:100%;background:#efefef}#screenshots img{height:100%;object-fit:contain}#screenshots::-webkit-scrollbar{display:none}#tagsDiv{margin-top:1em;margin-bottom:1em}#desc{width:100%;max-width:40em;font-size:14px;color:#7e7e7e;text-overflow:ellipsis;overflow:hidden}#logoContainer{display:flex}#tagsDiv span{background:grey;color:#fff;padding-left:12px;padding-right:12px;padding-bottom:4px;font-weight:700;border-radius:24px;margin-right:12px;padding-top:1px}#iosText{color:var(--install-button-color);text-align:center;font-weight:700;position:fixed;bottom:0;left:0;right:0;backdrop-filter:blur(10px);background:rgba(239,239,239,.17);margin:0;padding:2em}#manifest-description{white-space:pre-wrap}@media (max-height:780px){#buttonsContainer{height:70px;background:0 0}}@media (max-width:1220px){#installModal{margin:0;border-radius:0;min-height:100%;width:100%;animation-name:mobile;animation-duration:250ms}#screenshots{justify-content:center}}@media (max-width:962px){#headerContainer h1{margin-top:0;margin-bottom:0}#logoContainer{align-items:center}#desc{display:none}#headerContainer{margin-bottom:24px}#headerContainer img{height:42px;width:42px}}@media (max-width:800px){#background{display:none}#installModal{overflow:scroll;box-shadow:none;max-width:100%;height:100%}#screenshotsContainer{width:100%}#screenshots img{height:180px}#buttonsContainer{display:flex;justify-content:center;bottom:0;margin-bottom:0;border-radius:0;padding-top:1em;padding-bottom:1em}#buttonsContainer #installButton{margin-right:0}#featuresScreenDiv{flex-direction:column;align-items:flex-start;margin-right:0}#headerContainer{margin:20px}#desc{display:none}#contentContainer{margin-left:20px;margin-right:20px;margin-bottom:5em}#headerContainer img{height:60px;width:60px;margin-right:12px}#buttonsContainer{position:fixed;bottom:0;background:#efefef2b;backdrop-filter:blur(10px)}}@media (max-width:400px){#headerContainer h1{font-size:26px}#headerContainer img{height:40px;width:40px}#featuresScreenDiv h3{font-size:18px;margin-bottom:0}#keyFeatures ul{margin-top:0}}@media all and (display-mode:standalone){button{display:none}}@media (prefers-color-scheme:dark){:host{--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}@media (inverted-colors:inverted){:host{--install-focus-color:#6e6363;--install-button-color:#ff872b;--modal-background-color:black}#featuresScreenDiv #keyFeatures li,#installModal h1,#installModal h2,#installModal h3,#installModal p{color:#fff}#closeButton svg path{fill:#fff;opacity:1}#buttonsContainer{background:rgb(36 36 36)}}`}async firstUpdated(){if(this.manifestpath)try{await this.getManifestData()}catch(t){console.error("Error getting manifest, check that you have a valid web manifest")}"getInstalledRelatedApps"in navigator&&(this.relatedApps=await navigator.getInstalledRelatedApps())}handleInstallPromptEvent(t){this.deferredprompt=t,this.hasprompt=!0,t.preventDefault()}checkManifest(t){t.icons&&t.icons[0]?t.name?t.description||console.error("Your web manifest must have a description listed"):console.error("Your web manifest must have a name listed"):console.error("Your web manifest must have atleast one icon listed")}async getManifestData(){try{const t=await fetch(this.manifestpath),e=await t.json();if(this.manifestdata=e,this.manifestdata)return this.checkManifest(this.manifestdata),e}catch(t){return null}}scrollToLeft(){const t=this.shadowRoot.querySelector("#screenshots");t.scrollBy({left:-t.clientWidth,top:0,behavior:"smooth"})}scrollToRight(){const t=this.shadowRoot.querySelector("#screenshots");t.scrollBy({left:t.clientWidth,top:0,behavior:"smooth"})}openPrompt(){this.openmodal=!0;let t=new CustomEvent("show");this.dispatchEvent(t)}closePrompt(){this.openmodal=!1;let t=new CustomEvent("hide");this.dispatchEvent(t)}shouldShowInstall(){return this.isSupportingBrowser&&this.relatedApps.length<1&&(this.hasprompt||this.isIOS)}async install(){if(this.deferredprompt){this.deferredprompt.prompt();let t=new CustomEvent("show");if(this.dispatchEvent(t),"accepted"===(await this.deferredprompt.userChoice).outcome){await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!0}{await this.cancel(),this.installed=!0;let t=new CustomEvent("hide");return this.dispatchEvent(t),!1}}}getInstalledStatus(){return navigator.standalone?navigator.standalone:!!matchMedia("(display-mode: standalone)").matches}cancel(){return new Promise((t,e)=>{this.openmodal=!1,this.hasAttribute("openmodal")&&this.removeAttribute("openmodal");let n=new CustomEvent("hide");this.dispatchEvent(n),t()})}render(){return Dt`${"standalone"in navigator&&!1===navigator.standalone||!0!==this.usecustom&&this.shouldShowInstall()&&!1===this.installed?Dt`<button part="openButton" id="openButton" @click="${()=>this.openPrompt()}"><slot>${this.installbuttontext}</slot></button>`:null} ${!0===this.openmodal?Dt`<div id="installModalWrapper">${this.openmodal?Dt`<div id="background" @click="${()=>this.cancel()}"></div>`:null}<div id="installModal" part="installModal"><div id="headerContainer"><div id="logoContainer"><img src="${this.iconpath?this.iconpath:this.manifestdata.icons[0].src}" alt="App Logo"><div id="installTitle"><h1>${this.manifestdata.short_name||this.manifestdata.name}</h1><p id="desc">${this.explainer}</p></div></div><button id="closeButton" @click="${()=>this.cancel()}" aria-label="Close"><svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.33" fill-rule="evenodd" clip-rule="evenodd" d="M1.11932 0.357981C1.59693 -0.119327 2.37129 -0.119327 2.8489 0.357981L11.7681 9.27152L20.6873 0.357981C21.165 -0.119327 21.9393 -0.119327 22.4169 0.357981C22.8945 0.835288 22.8945 1.60916 22.4169 2.08646L13.4977 11L22.4169 19.9135C22.8945 20.3908 22.8945 21.1647 22.4169 21.642C21.9393 22.1193 21.165 22.1193 20.6873 21.642L11.7681 12.7285L2.8489 21.642C2.37129 22.1193 1.59693 22.1193 1.11932 21.642C0.641705 21.1647 0.641705 20.3908 1.11932 19.9135L10.0385 11L1.11932 2.08646C0.641705 1.60916 0.641705 0.835288 1.11932 0.357981Z" fill="#60656D"/></svg></button></div><div id="contentContainer"><div id="featuresScreenDiv">${this.manifestdata.features?Dt`<div id="keyFeatures"><h3>${this.featuresheader}</h3><ul>${this.manifestdata.features?this.manifestdata.features.map(t=>Dt`<li>${t}</li>`):null}</ul></div>`:null} ${this.manifestdata.screenshots?Dt`<div id="screenshotsContainer"><button @click="${()=>this.scrollToLeft()}" aria-label="previous image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M401.4 224h-214l83-79.4c11.9-12.5 11.9-32.7 0-45.2s-31.2-12.5-43.2 0L89 233.4c-6 5.8-9 13.7-9 22.4v.4c0 8.7 3 16.6 9 22.4l138.1 134c12 12.5 31.3 12.5 43.2 0 11.9-12.5 11.9-32.7 0-45.2l-83-79.4h214c16.9 0 30.6-14.3 30.6-32 .1-18-13.6-32-30.5-32z"/></svg></button><section id="screenshots">${this.manifestdata.screenshots.map(t=>Dt`<div><img alt="App Screenshot" src="${t.src}"></div>`)}</section><button @click="${()=>this.scrollToRight()}" aria-label="next image"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M284.9 412.6l138.1-134c6-5.8 9-13.7 9-22.4v-.4c0-8.7-3-16.6-9-22.4l-138.1-134c-12-12.5-31.3-12.5-43.2 0-11.9 12.5-11.9 32.7 0 45.2l83 79.4h-214c-17 0-30.7 14.3-30.7 32 0 18 13.7 32 30.6 32h214l-83 79.4c-11.9 12.5-11.9 32.7 0 45.2 12 12.5 31.3 12.5 43.3 0z"/></svg></button></div>`:null}</div><div id="descriptionWrapper"><h3>${this.descriptionheader}</h3><p id="manifest-description">${this.manifestdata.description}</p></div></div>${this.isIOS?Dt`<p id="iosText">${this.iosinstallinfotext}</p>`:Dt`<div id="buttonsContainer">${this.deferredprompt?Dt`<button id="installButton" @click="${()=>this.install()}">${this.installbuttontext} ${this.manifestdata.short_name}</button>`:Dt`<button @click="${()=>this.cancel()}" id="installCancelButton">${this.cancelbuttontext}</button>`}</div>`}</div></div>`:null}`}};function se(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+t+(n.length?" "+n.map((function(t){return"'"+t+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function ae(t){return!!t&&!!t[Je]}function le(t){return!!t&&(function(t){if(!t||"object"!=typeof t)return!1;var e=Object.getPrototypeOf(t);return!e||e===Object.prototype}(t)||Array.isArray(t)||!!t[He]||!!t.constructor[He]||fe(t)||me(t))}function ce(t,e,n){void 0===n&&(n=!1),0===de(t)?(n?Object.keys:Ke)(t).forEach((function(r){n&&"symbol"==typeof r||e(r,t[r],t)})):t.forEach((function(n,r){return e(r,n,t)}))}function de(t){var e=t[Je];return e?e.i>3?e.i-4:e.i:Array.isArray(t)?1:fe(t)?2:me(t)?3:0}function ue(t,e){return 2===de(t)?t.has(e):Object.prototype.hasOwnProperty.call(t,e)}function pe(t,e,n){var r=de(t);2===r?t.set(e,n):3===r?(t.delete(e),t.add(n)):t[e]=n}function he(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function fe(t){return Le&&t instanceof Map}function me(t){return Fe&&t instanceof Set}function ye(t){return t.o||t.t}function ge(t){if(Array.isArray(t))return Array.prototype.slice.call(t);var e=Ye(t);delete e[Je];for(var n=Ke(e),r=0;r<n.length;r++){var i=n[r],o=e[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(e[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:t[i]})}return Object.create(Object.getPrototypeOf(t),e)}function ve(t,e){return void 0===e&&(e=!1),we(t)||ae(t)||!le(t)||(de(t)>1&&(t.set=t.add=t.clear=t.delete=be),Object.freeze(t),e&&ce(t,(function(t,e){return ve(e,!0)}),!0)),t}function be(){se(2)}function we(t){return null==t||"object"!=typeof t||Object.isFrozen(t)}function _e(t){var e=Xe[t];return e||se(18,t),e}function xe(){return De}function Se(t,e){e&&(_e("Patches"),t.u=[],t.s=[],t.v=e)}function Pe(t){Ce(t),t.p.forEach(Ee),t.p=null}function Ce(t){t===De&&(De=t.l)}function Oe(t){return De={p:[],l:De,h:t,m:!0,_:0}}function Ee(t){var e=t[Je];0===e.i||1===e.i?e.j():e.g=!0}function ke(t,e){e._=e.p.length;var n=e.p[0],r=void 0!==t&&t!==n;return e.h.O||_e("ES5").S(e,t,r),r?(n[Je].P&&(Pe(e),se(4)),le(t)&&(t=Ae(e,t),e.l||Te(e,t)),e.u&&_e("Patches").M(n[Je],t,e.u,e.s)):t=Ae(e,n,[]),Pe(e),e.u&&e.v(e.u,e.s),t!==We?t:void 0}function Ae(t,e,n){if(we(e))return e;var r=e[Je];if(!r)return ce(e,(function(i,o){return Ne(t,r,e,i,o,n)}),!0),e;if(r.A!==t)return e;if(!r.P)return Te(t,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=ge(r.k):r.o;ce(3===r.i?new Set(i):i,(function(e,o){return Ne(t,r,i,e,o,n)})),Te(t,i,!1),n&&t.u&&_e("Patches").R(r,n,t.u,t.s)}return r.o}function Ne(t,e,n,r,i,o){if(ae(i)){var s=Ae(t,i,o&&e&&3!==e.i&&!ue(e.D,r)?o.concat(r):void 0);if(pe(n,r,s),!ae(s))return;t.m=!1}if(le(i)&&!we(i)){if(!t.h.N&&t._<1)return;Ae(t,i),e&&e.A.l||Te(t,i)}}function Te(t,e,n){void 0===n&&(n=!1),t.h.N&&t.m&&ve(e,n)}function je(t,e){var n=t[Je];return(n?ye(n):t)[e]}function Re(t,e){if(e in t)for(var n=Object.getPrototypeOf(t);n;){var r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Object.getPrototypeOf(n)}}function Ie(t){t.P||(t.P=!0,t.l&&Ie(t.l))}function Ve(t){t.o||(t.o=ge(t.t))}function Me(t,e,n){var r=fe(e)?_e("MapSet").T(e,n):me(e)?_e("MapSet").F(e,n):t.O?function(t,e){var n=Array.isArray(t),r={i:n?1:0,A:e?e.A:xe(),P:!1,I:!1,D:{},l:e,t:t,k:null,o:null,j:null,C:!1},i=r,o=Ge;n&&(i=[r],o=Ze);var s=Proxy.revocable(i,o),a=s.revoke,l=s.proxy;return r.k=l,r.j=a,l}(e,n):_e("ES5").J(e,n);return(n?n.A:xe()).p.push(r),r}function $e(t){return ae(t)||se(22,t),function t(e){if(!le(e))return e;var n,r=e[Je],i=de(e);if(r){if(!r.P&&(r.i<4||!_e("ES5").K(r)))return r.t;r.I=!0,n=Ue(e,i),r.I=!1}else n=Ue(e,i);return ce(n,(function(e,i){r&&function(t,e){return 2===de(t)?t.get(e):t[e]}(r.t,e)===i||pe(n,e,t(i))})),3===i?new Set(n):n}(t)}function Ue(t,e){switch(e){case 2:return new Map(t);case 3:return Array.from(t)}return ge(t)}ie([Gt({type:String})],oe.prototype,"manifestpath",void 0),ie([Gt({type:String})],oe.prototype,"iconpath",void 0),ie([Gt({type:Object})],oe.prototype,"manifestdata",void 0),ie([Gt({type:Boolean})],oe.prototype,"openmodal",void 0),ie([Gt({type:Boolean})],oe.prototype,"showopen",void 0),ie([Gt({type:Boolean})],oe.prototype,"isSupportingBrowser",void 0),ie([Gt({type:Boolean})],oe.prototype,"isIOS",void 0),ie([Gt({type:Boolean})],oe.prototype,"installed",void 0),ie([Gt({type:Boolean})],oe.prototype,"hasprompt",void 0),ie([Gt({type:Boolean})],oe.prototype,"usecustom",void 0),ie([Gt({type:Array})],oe.prototype,"relatedApps",void 0),ie([Gt({type:String})],oe.prototype,"explainer",void 0),ie([Gt({type:String})],oe.prototype,"featuresheader",void 0),ie([Gt({type:String})],oe.prototype,"descriptionheader",void 0),ie([Gt({type:String})],oe.prototype,"installbuttontext",void 0),ie([Gt({type:String})],oe.prototype,"cancelbuttontext",void 0),ie([Gt({type:String})],oe.prototype,"iosinstallinfotext",void 0),ie([Gt()],oe.prototype,"deferredprompt",void 0),oe=ie([("pwa-install",t=>"function"==typeof t?((t,e)=>(window.customElements.define("pwa-install",e),e))(0,t):((t,e)=>{const{kind:n,elements:r}=e;return{kind:n,elements:r,finisher(t){window.customElements.define("pwa-install",t)}}})(0,t))],oe);var Be,De,ze="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),Le="undefined"!=typeof Map,Fe="undefined"!=typeof Set,qe="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,We=ze?Symbol.for("immer-nothing"):((Be={})["immer-nothing"]=!0,Be),He=ze?Symbol.for("immer-draftable"):"__$immer_draftable",Je=ze?Symbol.for("immer-state"):"__$immer_state",Ke="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Object.getOwnPropertyNames,Ye=Object.getOwnPropertyDescriptors||function(t){var e={};return Ke(t).forEach((function(n){e[n]=Object.getOwnPropertyDescriptor(t,n)})),e},Xe={},Ge={get:function(t,e){if(e===Je)return t;var n=ye(t);if(!ue(n,e))return function(t,e,n){var r,i=Re(e,n);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(t.k):void 0}(t,n,e);var r=n[e];return t.I||!le(r)?r:r===je(t.t,e)?(Ve(t),t.o[e]=Me(t.A.h,r,t)):r},has:function(t,e){return e in ye(t)},ownKeys:function(t){return Reflect.ownKeys(ye(t))},set:function(t,e,n){var r=Re(ye(t),e);if(null==r?void 0:r.set)return r.set.call(t.k,n),!0;if(!t.P){var i=je(ye(t),e),o=null==i?void 0:i[Je];if(o&&o.t===n)return t.o[e]=n,t.D[e]=!1,!0;if(he(n,i)&&(void 0!==n||ue(t.t,e)))return!0;Ve(t),Ie(t)}return t.o[e]=n,t.D[e]=!0,!0},deleteProperty:function(t,e){return void 0!==je(t.t,e)||e in t.t?(t.D[e]=!1,Ve(t),Ie(t)):delete t.D[e],t.o&&delete t.o[e],!0},getOwnPropertyDescriptor:function(t,e){var n=ye(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r?{writable:!0,configurable:1!==t.i||"length"!==e,enumerable:r.enumerable,value:n[e]}:r},defineProperty:function(){se(11)},getPrototypeOf:function(t){return Object.getPrototypeOf(t.t)},setPrototypeOf:function(){se(12)}},Ze={};ce(Ge,(function(t,e){Ze[t]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}})),Ze.deleteProperty=function(t,e){return Ge.deleteProperty.call(this,t[0],e)},Ze.set=function(t,e,n){return Ge.set.call(this,t[0],e,n,t[0])};var Qe=new(function(){function t(t){this.O=qe,this.N=!0,"boolean"==typeof(null==t?void 0:t.useProxies)&&this.setUseProxies(t.useProxies),"boolean"==typeof(null==t?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var e=t.prototype;return e.produce=function(t,e,n){if("function"==typeof t&&"function"!=typeof e){var r=e;e=t;var i=this;return function(t){var n=this;void 0===t&&(t=r);for(var o=arguments.length,s=Array(o>1?o-1:0),a=1;a<o;a++)s[a-1]=arguments[a];return i.produce(t,(function(t){var r;return(r=e).call.apply(r,[n,t].concat(s))}))}}var o;if("function"!=typeof e&&se(6),void 0!==n&&"function"!=typeof n&&se(7),le(t)){var s=Oe(this),a=Me(this,t,void 0),l=!0;try{o=e(a),l=!1}finally{l?Pe(s):Ce(s)}return"undefined"!=typeof Promise&&o instanceof Promise?o.then((function(t){return Se(s,n),ke(t,s)}),(function(t){throw Pe(s),t})):(Se(s,n),ke(o,s))}if(!t||"object"!=typeof t){if((o=e(t))===We)return;return void 0===o&&(o=t),this.N&&ve(o,!0),o}se(21,t)},e.produceWithPatches=function(t,e){var n,r,i=this;return"function"==typeof t?function(e){for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return i.produceWithPatches(e,(function(e){return t.apply(void 0,[e].concat(r))}))}:[this.produce(t,e,(function(t,e){n=t,r=e})),n,r]},e.createDraft=function(t){le(t)||se(8),ae(t)&&(t=$e(t));var e=Oe(this),n=Me(this,t,void 0);return n[Je].C=!0,Ce(e),n},e.finishDraft=function(t,e){var n=(t&&t[Je]).A;return Se(n,e),ke(void 0,n)},e.setAutoFreeze=function(t){this.N=t},e.setUseProxies=function(t){t&&!qe&&se(20),this.O=t},e.applyPatches=function(t,e){var n;for(n=e.length-1;n>=0;n--){var r=e[n];if(0===r.path.length&&"replace"===r.op){t=r.value;break}}var i=_e("Patches").$;return ae(t)?i(t,e):this.produce(t,(function(t){return i(t,e.slice(n+1))}))},t}()),tn=Qe.produce;Qe.produceWithPatches.bind(Qe),Qe.setAutoFreeze.bind(Qe),Qe.setUseProxies.bind(Qe),Qe.applyPatches.bind(Qe),Qe.createDraft.bind(Qe),Qe.finishDraft.bind(Qe);var en=function(t){var e,n=t.Symbol;return"function"==typeof n?n.observable?e=n.observable:(e=n("observable"),n.observable=e):e="@@observable",e}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),nn=function(){return Math.random().toString(36).substring(7).split("").join(".")},rn={INIT:"@@redux/INIT"+nn(),REPLACE:"@@redux/REPLACE"+nn(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+nn()}};function on(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function sn(t,e,n){var r;if("function"==typeof e&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof e&&void 0===n&&(n=e,e=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(sn)(t,e)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,o=e,s=[],a=s,l=!1;function c(){a===s&&(a=s.slice())}function d(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return o}function u(t){if("function"!=typeof t)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribelistener for more details.");var e=!0;return c(),a.push(t),function(){if(e){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribelistener for more details.");e=!1,c();var n=a.indexOf(t);a.splice(n,1),s=null}}}function p(t){if(!on(t))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===t.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,o=i(o,t)}finally{l=!1}for(var e=s=a,n=0;n<e.length;n++){(0,e[n])()}return t}function h(t){if("function"!=typeof t)throw new Error("Expected the nextReducer to be a function.");i=t,p({type:rn.REPLACE})}function f(){var t,e=u;return(t={subscribe:function(t){if("object"!=typeof t||null===t)throw new TypeError("Expected the observer to be an object.");function n(){t.next&&t.next(d())}return n(),{unsubscribe:e(n)}}})[en]=function(){return this},t}return p({type:rn.INIT}),(r={dispatch:p,subscribe:u,getState:d,replaceReducer:h})[en]=f,r}function an(t,e){var n=e&&e.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+t+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function ln(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];"function"==typeof t[i]&&(n[i]=t[i])}var o,s=Object.keys(n);try{!function(t){Object.keys(t).forEach((function(e){var n=t[e];if(void 0===n(void 0,{type:rn.INIT}))throw new Error('Reducer "'+e+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:rn.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+e+"\" returned undefined when probed with a random type. Don't try to handle "+rn.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(n)}catch(t){o=t}return function(t,e){if(void 0===t&&(t={}),o)throw o;for(var r=!1,i={},a=0;a<s.length;a++){var l=s[a],c=n[l],d=t[l],u=c(d,e);if(void 0===u){var p=an(l,e);throw new Error(p)}i[l]=u,r=r||u!==d}return(r=r||s.length!==Object.keys(t).length)?i:t}}function cn(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dn(t,e){var n=Object.keys(t);return Object.getOwnPropertySymbols&&n.push.apply(n,Object.getOwnPropertySymbols(t)),e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n}function un(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?dn(n,!0).forEach((function(e){cn(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):dn(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function pn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 0===e.length?function(t){return t}:1===e.length?e[0]:e.reduce((function(t,e){return function(){return t(e.apply(void 0,arguments))}}))}function hn(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(t){return function(){var n=t.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},i={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},o=e.map((function(t){return t(i)}));return un({},n,{dispatch:r=pn.apply(void 0,o)(n.dispatch)})}}}function fn(t,e){return t===e}function mn(t,e,n){if(null===e||null===n||e.length!==n.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!t(e[i],n[i]))return!1;return!0}function yn(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every((function(t){return"function"==typeof t}))){var n=e.map((function(t){return typeof t})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return e}!function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r]}((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:fn,n=null,r=null;return function(){return mn(e,n,arguments)||(r=t.apply(null,arguments)),n=arguments,r}}));function gn(t){return function(e){var n=e.dispatch,r=e.getState;return function(e){return function(i){return"function"==typeof i?i(n,r,t):e(i)}}}}var vn=gn();function bn(){return(bn=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function wn(t){return(wn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _n(t,e){return(_n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function xn(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function Sn(t,e,n){return(Sn=xn()?Reflect.construct:function(t,e,n){var r=[null];r.push.apply(r,e);var i=new(Function.bind.apply(t,r));return n&&_n(i,n.prototype),i}).apply(null,arguments)}function Pn(t){var e="function"==typeof Map?new Map:void 0;return(Pn=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,r)}function r(){return Sn(t,arguments,wn(this).constructor)}return r.prototype=Object.create(t.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),_n(r,t)})(t)}vn.withExtraArgument=gn;var Cn="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?pn:pn.apply(null,arguments)};var On=function(t){var e,n;function r(){return t.apply(this,arguments)||this}n=t,(e=r).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var i=r.prototype;return i.concat=function(){for(var e,n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return Sn(r,(e=t.prototype.concat).call.apply(e,[this].concat(i)))},i.prepend=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return 1===e.length&&Array.isArray(e[0])?Sn(r,e[0].concat(this)):Sn(r,e.concat(this))},r}(Pn(Array));function En(){return function(t){return function(t){void 0===t&&(t={});var e=t,n=e.thunk,r=void 0===n||n,i=(e.immutableCheck,e.serializableCheck,new On);r&&(!function(t){return"boolean"==typeof t}(r)?i.push(vn.withExtraArgument(r.extraArgument)):i.push(vn));return i}(t)}}function kn(t,e){function n(){if(e){var n=e.apply(void 0,arguments);if(!n)throw new Error("prepareAction did not return an object");return bn({type:t,payload:n.payload},"meta"in n&&{meta:n.meta},{},"error"in n&&{error:n.error})}return{type:t,payload:arguments.length<=0?void 0:arguments[0]}}return n.toString=function(){return""+t},n.type=t,n.match=function(e){return e.type===t},n}function An(t){var e,n={},r=[],i={addCase:function(t,e){var r="string"==typeof t?t:t.type;if(r in n)throw new Error("addCase cannot be called with two reducers for the same action type");return n[r]=e,i},addMatcher:function(t,e){return r.push({matcher:t,reducer:e}),i},addDefaultCase:function(t){return e=t,i}};return t(i),[n,r,e]}"undefined"!=typeof Symbol&&(Symbol.iterator||(Symbol.iterator=Symbol("Symbol.iterator"))),"undefined"!=typeof Symbol&&(Symbol.asyncIterator||(Symbol.asyncIterator=Symbol("Symbol.asyncIterator")));var Nn;!function(){function t(t,e){var n=i[t];return n?n.enumerable=e:i[t]=n={configurable:!0,enumerable:e,get:function(){var e=this[Je];return Ge.get(e,t)},set:function(e){var n=this[Je];Ge.set(n,t,e)}},n}function e(t){for(var e=t.length-1;e>=0;e--){var i=t[e][Je];if(!i.P)switch(i.i){case 5:r(i)&&Ie(i);break;case 4:n(i)&&Ie(i)}}}function n(t){for(var e=t.t,n=t.k,r=Ke(n),i=r.length-1;i>=0;i--){var o=r[i];if(o!==Je){var s=e[o];if(void 0===s&&!ue(e,o))return!0;var a=n[o],l=a&&a[Je];if(l?l.t!==s:!he(a,s))return!0}}var c=!!e[Je];return r.length!==Ke(e).length+(c?0:1)}function r(t){var e=t.k;if(e.length!==t.t.length)return!0;var n=Object.getOwnPropertyDescriptor(e,e.length-1);return!(!n||n.get)}var i={};!function(t,e){Xe[t]||(Xe[t]=e)}("ES5",{J:function(e,n){var r=Array.isArray(e),i=function(e,n){if(e){for(var r=Array(n.length),i=0;i<n.length;i++)Object.defineProperty(r,""+i,t(i,!0));return r}var o=Ye(n);delete o[Je];for(var s=Ke(o),a=0;a<s.length;a++){var l=s[a];o[l]=t(l,e||!!o[l].enumerable)}return Object.create(Object.getPrototypeOf(n),o)}(r,e),o={i:r?5:4,A:n?n.A:xe(),P:!1,I:!1,D:{},l:n,t:e,k:i,o:null,g:!1,C:!1};return Object.defineProperty(i,Je,{value:o,writable:!0}),i},S:function(t,n,i){i?ae(n)&&n[Je].A===t&&e(t.p):(t.u&&function t(e){if(e&&"object"==typeof e){var n=e[Je];if(n){var i=n.t,o=n.k,s=n.D,a=n.i;if(4===a)ce(o,(function(e){e!==Je&&(void 0!==i[e]||ue(i,e)?s[e]||t(o[e]):(s[e]=!0,Ie(n)))})),ce(i,(function(t){void 0!==o[t]||ue(o,t)||(s[t]=!1,Ie(n))}));else if(5===a){if(r(n)&&(Ie(n),s.length=!0),o.length<i.length)for(var l=o.length;l<i.length;l++)s[l]=!1;else for(var c=i.length;c<o.length;c++)s[c]=!0;for(var d=Math.min(o.length,i.length),u=0;u<d;u++)void 0===s[u]&&t(o[u])}}}}(t.p[0]),e(t.p))},K:function(t){return 4===t.i?n(t):r(t)}})}(),function(t){t.add="ADD",t.delete="DELETE",t.check="CHECK_TOGGLE"}(Nn||(Nn={}));const Tn=function(t){var e=t.name,n=t.initialState;if(!e)throw new Error("`name` is a required option for createSlice");var r=t.reducers||{},i=void 0===t.extraReducers?[]:"function"==typeof t.extraReducers?An(t.extraReducers):[t.extraReducers],o=i[0],s=void 0===o?{}:o,a=i[1],l=void 0===a?[]:a,c=i[2],d=void 0===c?void 0:c,u=Object.keys(r),p={},h={},f={};u.forEach((function(t){var n,i,o=r[t],s=e+"/"+t;"reducer"in o?(n=o.reducer,i=o.prepare):n=o,p[t]=n,h[s]=n,f[t]=i?kn(s,i):kn(s)}));var m=function(t,e,n,r){void 0===n&&(n=[]);var i="function"==typeof e?An(e):[e,n,r],o=i[0],s=i[1],a=i[2];return function(e,n){void 0===e&&(e=t);var r=[o[n.type]].concat(s.filter((function(t){return(0,t.matcher)(n)})).map((function(t){return t.reducer})));return 0===r.filter((function(t){return!!t})).length&&(r=[a]),r.reduce((function(t,e){if(e){if(ae(t)){var r=e(t,n);return void 0===r?t:r}if(le(t))return tn(t,(function(t){return e(t,n)}));var i=e(t,n);if(void 0===i){if(null===t)return t;throw Error("A case reducer on a non-draftable value must not return undefined")}return i}return t}),e)}}(n,bn({},s,{},h),l,d);return{name:e,reducer:m,actions:f,caseReducers:p}}({name:"todos",initialState:{todos:[{text:"example 1",checked:!1}]},reducers:{add:(t,e)=>{t.todos.push(e.payload)},delete:(t,e)=>{t.todos=t.todos.filter((t,n)=>n!==e.payload.index)},toggle:(t,e)=>{const{index:n}=e.payload;t.todos[n].checked=!t.todos[n].checked}}}),jn=Tn.actions,Rn=function(t){var e,n=En(),r=t||{},i=r.reducer,o=void 0===i?void 0:i,s=r.middleware,a=void 0===s?n():s,l=r.devTools,c=void 0===l||l,d=r.preloadedState,u=void 0===d?void 0:d,p=r.enhancers,h=void 0===p?void 0:p;if("function"==typeof o)e=o;else{if(!function(t){if("object"!=typeof t||null===t)return!1;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}(o))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');e=ln(o)}var f=hn.apply(void 0,"function"==typeof a?a(n):a),m=pn;c&&(m=Cn(bn({trace:!1},"object"==typeof c&&c)));var y=[f];return Array.isArray(h)?y=[f].concat(h):"function"==typeof h&&(y=h(y)),sn(e,u,m.apply(void 0,y))}({reducer:Tn.reducer});let In=class extends it{constructor(){super(),this.todos=Rn.getState().todos,Rn.subscribe(()=>{this.todos=Rn.getState().todos,this.requestUpdate()})}static get styles(){return nt`
      ion-icon {
        vertical-align: middle;
      }

      #todo-list {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;
        flex-direction: column;
      }

      #todo-list fast-card {
        margin-bottom: 12px;
      }

      #welcomeCard,
      #infoCard {
        padding: 18px;
        padding-top: 0px;
      }

      #add {
        display: flex;
        margin: 16px;
        width: 40%;
        justify-content: space-between;
      }

      .add-input {
        flex-grow: 1;
      }

      .add-button {
        margin-left: 8px;
      }

      pwa-install {
        position: absolute;
        bottom: 16px;
        right: 16px;
      }

      .layout {
        display: flex;
        flex-direction: column;
        max-width: 1200px;
        align-items: center;
        justify-content: center;
      }

      button {
        cursor: pointer;
      }

      fast-card {
        width: 40%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        vertical-align: middle;

        padding: 8px;
      }

      @media (min-width: 1200px) {
        #welcomeCard,
        #infoCard {
          width: 40%;
        }
      }

      @media (screen-spanning: single-fold-vertical) {
        #todo-list {
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
        }

        #welcomeCard {
          margin-right: 64px;
        }
      }

      @media (prefers-color-scheme: light) {
        fast-card {
          --background-color: white;
        }
      }
    `}share(){navigator.share&&navigator.share({title:"PWABuilder pwa-starter",text:"Check out the PWABuilder pwa-starter!",url:"https://github.com/pwa-builder/pwa-starter"})}render(){return $`
      <div class="layout">
        <h1>todos</h2>
        <div id="add">
          <fast-text-field id="addInput" class="add-input" placeholder="What needs to be done?" @keyup=${this.handleAddInput}></fast-text-field>
          <fast-button
            class="add-button"
            @click=${this.addTodoItem}
            .disabled=${!this.inputEnabled}>
            <ion-icon name="add-circle-outline"></ion-icon>
          </fast-button>
        </div>

        <div id="todo-list">${this.todos.map((t,e)=>this.renderTodoItem(t,e))}</div>

        <pwa-install>Install PWA Starter</pwa-install>
      </div>
    `}renderTodoItem(t,e){return $`
      <fast-card>
        <fast-checkbox
          .checked=${t.checked}
          data-index=${e}
          @change=${this.handleCheckBoxClick}
          >${t.text}</fast-checkbox
        >
        <fast-button
          appearance="stealth"
          @click=${()=>this.deleteTodoItemAt(e)}
        >
          <ion-icon name="close-circle-outline"></ion-icon>
        </fast-button>

        <!-- ${t.tags&&t.tags.length>0?this.renderTagList(t.tags):void 0} -->
      </fast-card>
    `}renderTagList(t){return t.map(t=>$`<fast-badge> ${t} </fast-badge>`)}handleAddInput(t){var e,n;"Enter"===t.key&&(null===(e=this.addInput)||void 0===e?void 0:e.value)&&this.addTodoItem(),this.inputEnabled=(null===(n=this.addInput)||void 0===n?void 0:n.value.length)>0}handleCheckBoxClick(t){const e=Number(t.target.dataset.index);Rn.dispatch(jn.toggle({index:e}))}addTodoItem(){var t;const e={text:null===(t=this.addInput)||void 0===t?void 0:t.value,checked:!1,index:this.todos.length};this.addInput.value="",Rn.dispatch(jn.add(e))}deleteTodoItemAt(t){Rn.dispatch(jn.delete({index:t}))}};var Vn,Mn,$n;t([X({type:Array})],In.prototype,"todos",void 0),t([(Vn="#addInput",(t,e)=>{const n={get(){return this.renderRoot.querySelector(Vn)},enumerable:!0,configurable:!0};if(Mn){const t="symbol"==typeof e?Symbol():"__"+e;n.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(Vn)),this[t]}}return void 0!==e?G(n,t,e):Z(n,t)})],In.prototype,"addInput",void 0),t([X({attribute:!1,hasChanged:null==$n?void 0:$n.hasChanged})],In.prototype,"inputEnabled",void 0),In=t([K("app-home")],In);let Un=class extends it{constructor(){super(),this.title="PWA Starter"}static get styles(){return nt`
      header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 16px;
        padding-right: 16px;
        background: var(--app-color-primary);
        color: white;
        height: 4em;
      }

      header h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: bold;
      }

      nav {
        width: 9em;
        display: flex;
        justify-content: space-between;
      }

      nav fast-anchor {
        margin-left: 10px;
      }

      @media (prefers-color-scheme: light) {
        header {
          color: black;
        }
      }
    `}render(){return $`
      <header>
        <h1>${this.title}</h1>

        <nav>
          <fast-anchor href="./" appearance="button">Home</fast-anchor>
        </nav>
      </header>
    `}};t([X({type:String})],Un.prototype,"title",void 0),Un=t([K("app-header")],Un);let Bn=class extends it{static get styles(){return nt`
      main {
        padding: 16px;
      }

      #routerOutlet > * {
        width: 100% !important;
      }

      #routerOutlet > .leaving {
        animation: 160ms fadeOut ease-in-out;
      }

      #routerOutlet > .entering {
        animation: 160ms fadeIn linear;
      }

      @keyframes fadeOut {
        from {
          opacity: 1;
        }

        to {
          opacity: 0;
        }
      }

      @keyframes fadeIn {
        from {
          opacity: 0.2;
        }

        to {
          opacity: 1;
        }
      }
    `}constructor(){super()}render(){return $`
      <div>
        <app-header></app-header>

        <main>
          <app-home></app-home>
        </main>
      </div>
    `}};Bn=t([K("app-index")],Bn);export{Bn as AppIndex};
