(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Js="160",Ro=0,fr=1,Co=2,Ha=1,za=2,Je=3,dn=0,Te=1,de=2,cn=0,Zn=1,pr=2,mr=3,gr=4,Po=5,yn=100,Lo=101,Do=102,Br=103,_r=104,Uo=200,Io=201,No=202,Fo=203,zs=204,Gs=205,Oo=206,ko=207,Ho=208,zo=209,Go=210,Vo=211,Wo=212,Xo=213,Yo=214,qo=0,$o=1,Ko=2,$i=3,jo=4,Zo=5,Jo=6,Qo=7,Ga=0,tl=1,el=2,hn=0,nl=1,il=2,sl=3,rl=4,al=5,ol=6,Va=300,Qn=301,ti=302,Vs=303,Ws=304,ts=306,Xs=1e3,He=1001,Ys=1002,he=1003,vr=1004,cs=1005,De=1006,ll=1007,mi=1008,un=1009,cl=1010,hl=1011,Qs=1012,Wa=1013,on=1014,ln=1015,gi=1016,Xa=1017,Ya=1018,bn=1020,ul=1021,ze=1023,dl=1024,fl=1025,An=1026,ei=1027,pl=1028,qa=1029,ml=1030,$a=1031,Ka=1033,hs=33776,us=33777,ds=33778,fs=33779,xr=35840,Mr=35841,Sr=35842,yr=35843,ja=36196,Er=37492,Tr=37496,br=37808,Ar=37809,wr=37810,Rr=37811,Cr=37812,Pr=37813,Lr=37814,Dr=37815,Ur=37816,Ir=37817,Nr=37818,Fr=37819,Or=37820,kr=37821,ps=36492,Hr=36494,zr=36495,gl=36283,Gr=36284,Vr=36285,Wr=36286,Za=3e3,wn=3001,Bl=3200,_l=3201,Ja=0,vl=1,Ue="",ue="srgb",tn="srgb-linear",tr="display-p3",es="display-p3-linear",Ki="linear",$t="srgb",ji="rec709",Zi="p3",Dn=7680,Xr=519,xl=512,Ml=513,Sl=514,Qa=515,yl=516,El=517,Tl=518,bl=519,Yr=35044,qr="300 es",qs=1035,Qe=2e3,Ji=2001;class ii{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ms=Math.PI/180,$s=180/Math.PI;function _i(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pe[s&255]+pe[s>>8&255]+pe[s>>16&255]+pe[s>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]).toLowerCase()}function Ee(s,t,e){return Math.max(t,Math.min(e,s))}function Al(s,t){return(s%t+t)%t}function gs(s,t,e){return(1-e)*s+e*t}function $r(s){return(s&s-1)===0&&s!==0}function Ks(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ci(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function ye(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ft{constructor(t,e,n,i,r,o,a,l,c){Ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],m=n[5],g=n[8],B=i[0],p=i[3],d=i[6],y=i[1],M=i[4],T=i[7],C=i[2],A=i[5],b=i[8];return r[0]=o*B+a*y+l*C,r[3]=o*p+a*M+l*A,r[6]=o*d+a*T+l*b,r[1]=c*B+h*y+u*C,r[4]=c*p+h*M+u*A,r[7]=c*d+h*T+u*b,r[2]=f*B+m*y+g*C,r[5]=f*p+m*M+g*A,r[8]=f*d+m*T+g*b,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,m=c*r-o*l,g=e*u+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const B=1/g;return t[0]=u*B,t[1]=(i*c-h*n)*B,t[2]=(a*n-i*o)*B,t[3]=f*B,t[4]=(h*e-i*l)*B,t[5]=(i*r-a*e)*B,t[6]=m*B,t[7]=(n*l-c*e)*B,t[8]=(o*e-n*r)*B,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Bs.makeScale(t,e)),this}rotate(t){return this.premultiply(Bs.makeRotation(-t)),this}translate(t,e){return this.premultiply(Bs.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Bs=new Ft;function to(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Bi(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function wl(){const s=Bi("canvas");return s.style.display="block",s}const Kr={};function pi(s){s in Kr||(Kr[s]=!0,console.warn(s))}const jr=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Zr=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Si={[tn]:{transfer:Ki,primaries:ji,toReference:s=>s,fromReference:s=>s},[ue]:{transfer:$t,primaries:ji,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[es]:{transfer:Ki,primaries:Zi,toReference:s=>s.applyMatrix3(Zr),fromReference:s=>s.applyMatrix3(jr)},[tr]:{transfer:$t,primaries:Zi,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Zr),fromReference:s=>s.applyMatrix3(jr).convertLinearToSRGB()}},Rl=new Set([tn,es]),Wt={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Rl.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,t,e){if(this.enabled===!1||t===e||!t||!e)return s;const n=Si[t].toReference,i=Si[e].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,t){return this.convert(s,this._workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this._workingColorSpace)},getPrimaries:function(s){return Si[s].primaries},getTransfer:function(s){return s===Ue?Ki:Si[s].transfer}};function Jn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Un;class eo{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Un===void 0&&(Un=Bi("canvas")),Un.width=t.width,Un.height=t.height;const n=Un.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Un}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Jn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Jn(e[n]/255)*255):e[n]=Jn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Cl=0;class no{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cl++}),this.uuid=_i(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(vs(i[o].image)):r.push(vs(i[o]))}else r=vs(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function vs(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?eo.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pl=0;class Se extends ii{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=He,i=He,r=De,o=mi,a=ze,l=un,c=Se.DEFAULT_ANISOTROPY,h=Ue){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pl++}),this.uuid=_i(),this.name="",this.source=new no(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===wn?ue:Ue),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Va)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Xs:t.x=t.x-Math.floor(t.x);break;case He:t.x=t.x<0?0:1;break;case Ys:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Xs:t.y=t.y-Math.floor(t.y);break;case He:t.y=t.y<0?0:1;break;case Ys:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?wn:Za}set encoding(t){pi("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===wn?ue:Ue}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=Va;Se.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],m=l[5],g=l[9],B=l[2],p=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-B)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+B)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,T=(m+1)/2,C=(d+1)/2,A=(h+f)/4,b=(u+B)/4,W=(g+p)/4;return M>T&&M>C?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=A/n,r=b/n):T>C?T<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(T),n=A/i,r=W/i):C<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(C),n=b/r,i=W/r),this.set(n,i,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(u-B)*(u-B)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(u-B)/y,this.z=(f-h)/y,this.w=Math.acos((c+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ll extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};n.encoding!==void 0&&(pi("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===wn?ue:Ue),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:De,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Se(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new no(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends Ll{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class io extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Dl extends Se{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=he,this.minFilter=he,this.wrapR=He,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class si{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const f=r[o+0],m=r[o+1],g=r[o+2],B=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=g,t[e+3]=B;return}if(u!==B||l!==f||c!==m||h!==g){let p=1-a;const d=l*f+c*m+h*g+u*B,y=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const C=Math.sqrt(M),A=Math.atan2(C,d*y);p=Math.sin(p*A)/C,a=Math.sin(a*A)/C}const T=a*y;if(l=l*p+f*T,c=c*p+m*T,h=h*p+g*T,u=u*p+B*T,p===1-a){const C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],f=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*m-c*f,t[e+1]=l*g+h*f+c*u-a*m,t[e+2]=c*g+h*m+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),f=l(n/2),m=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"YXZ":this._x=f*h*u+c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"ZXY":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u-f*m*g;break;case"ZYX":this._x=f*h*u-c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u+f*m*g;break;case"YZX":this._x=f*h*u+c*m*g,this._y=c*m*u+f*h*g,this._z=c*h*g-f*m*u,this._w=c*h*u-f*m*g;break;case"XZY":this._x=f*h*u-c*m*g,this._y=c*m*u-f*h*g,this._z=c*h*g+f*m*u,this._w=c*h*u+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-c)*m,this._z=(o-i)*m}else if(n>a&&n>u){const m=2*Math.sqrt(1+n-a-u);this._w=(h-l)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+c)/m}else if(a>u){const m=2*Math.sqrt(1+a-n-u);this._w=(r-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+u-n-a);this._w=(o-i)/m,this._x=(r+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ee(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*i+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Jr.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Jr.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xs.copy(this).projectOnVector(t),this.sub(xs)}reflect(t){return this.sub(xs.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ee(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xs=new L,Jr=new si;class Ln{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ie.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ie.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ie.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ie):Ie.fromBufferAttribute(r,o),Ie.applyMatrix4(t.matrixWorld),this.expandByPoint(Ie);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),yi.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yi.copy(n.boundingBox)),yi.applyMatrix4(t.matrixWorld),this.union(yi)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ie),Ie.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(hi),Ei.subVectors(this.max,hi),In.subVectors(t.a,hi),Nn.subVectors(t.b,hi),Fn.subVectors(t.c,hi),en.subVectors(Nn,In),nn.subVectors(Fn,Nn),mn.subVectors(In,Fn);let e=[0,-en.z,en.y,0,-nn.z,nn.y,0,-mn.z,mn.y,en.z,0,-en.x,nn.z,0,-nn.x,mn.z,0,-mn.x,-en.y,en.x,0,-nn.y,nn.x,0,-mn.y,mn.x,0];return!Ms(e,In,Nn,Fn,Ei)||(e=[1,0,0,0,1,0,0,0,1],!Ms(e,In,Nn,Fn,Ei))?!1:(Ti.crossVectors(en,nn),e=[Ti.x,Ti.y,Ti.z],Ms(e,In,Nn,Fn,Ei))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ie).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ie).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ye=[new L,new L,new L,new L,new L,new L,new L,new L],Ie=new L,yi=new Ln,In=new L,Nn=new L,Fn=new L,en=new L,nn=new L,mn=new L,hi=new L,Ei=new L,Ti=new L,gn=new L;function Ms(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){gn.fromArray(s,r);const a=i.x*Math.abs(gn.x)+i.y*Math.abs(gn.y)+i.z*Math.abs(gn.z),l=t.dot(gn),c=e.dot(gn),h=n.dot(gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Ul=new Ln,ui=new L,Ss=new L;class ns{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ul.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ui.subVectors(t,this.center);const e=ui.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ui,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ss.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ui.copy(t.center).add(Ss)),this.expandByPoint(ui.copy(t.center).sub(Ss))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const qe=new L,ys=new L,bi=new L,sn=new L,Es=new L,Ai=new L,Ts=new L;class so{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=qe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qe.copy(this.origin).addScaledVector(this.direction,e),qe.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ys.copy(t).add(e).multiplyScalar(.5),bi.copy(e).sub(t).normalize(),sn.copy(this.origin).sub(ys);const r=t.distanceTo(e)*.5,o=-this.direction.dot(bi),a=sn.dot(this.direction),l=-sn.dot(bi),c=sn.lengthSq(),h=Math.abs(1-o*o);let u,f,m,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const B=1/h;u*=B,f*=B,m=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),m=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ys).addScaledVector(bi,f),m}intersectSphere(t,e){qe.subVectors(t.center,this.origin);const n=qe.dot(this.direction),i=qe.dot(qe)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qe)!==null}intersectTriangle(t,e,n,i,r){Es.subVectors(e,t),Ai.subVectors(n,t),Ts.crossVectors(Es,Ai);let o=this.direction.dot(Ts),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sn.subVectors(this.origin,t);const l=a*this.direction.dot(Ai.crossVectors(sn,Ai));if(l<0)return null;const c=a*this.direction.dot(Es.cross(sn));if(c<0||l+c>o)return null;const h=-a*sn.dot(Ts);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ne{constructor(t,e,n,i,r,o,a,l,c,h,u,f,m,g,B,p){ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,u,f,m,g,B,p)}set(t,e,n,i,r,o,a,l,c,h,u,f,m,g,B,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=m,d[7]=g,d[11]=B,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ne().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/On.setFromMatrixColumn(t,0).length(),r=1/On.setFromMatrixColumn(t,1).length(),o=1/On.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,m=o*u,g=a*h,B=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=m+g*c,e[5]=f-B*c,e[9]=-a*l,e[2]=B-f*c,e[6]=g+m*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,m=l*u,g=c*h,B=c*u;e[0]=f+B*a,e[4]=g*a-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=B+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,m=l*u,g=c*h,B=c*u;e[0]=f-B*a,e[4]=-o*u,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=B-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,m=o*u,g=a*h,B=a*u;e[0]=l*h,e[4]=g*c-m,e[8]=f*c+B,e[1]=l*u,e[5]=B*c+f,e[9]=m*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*c,g=a*l,B=a*c;e[0]=l*h,e[4]=B-f*u,e[8]=g*u+m,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=m*u+g,e[10]=f-B*u}else if(t.order==="XZY"){const f=o*l,m=o*c,g=a*l,B=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+B,e[5]=o*h,e[9]=m*u-g,e[2]=g*u-m,e[6]=a*h,e[10]=B*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Il,t,Nl)}lookAt(t,e,n){const i=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),rn.crossVectors(n,Ae),rn.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),rn.crossVectors(n,Ae)),rn.normalize(),wi.crossVectors(Ae,rn),i[0]=rn.x,i[4]=wi.x,i[8]=Ae.x,i[1]=rn.y,i[5]=wi.y,i[9]=Ae.y,i[2]=rn.z,i[6]=wi.z,i[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],m=n[13],g=n[2],B=n[6],p=n[10],d=n[14],y=n[3],M=n[7],T=n[11],C=n[15],A=i[0],b=i[4],W=i[8],x=i[12],E=i[1],H=i[5],G=i[9],tt=i[13],R=i[2],O=i[6],z=i[10],Y=i[14],V=i[3],X=i[7],q=i[11],Q=i[15];return r[0]=o*A+a*E+l*R+c*V,r[4]=o*b+a*H+l*O+c*X,r[8]=o*W+a*G+l*z+c*q,r[12]=o*x+a*tt+l*Y+c*Q,r[1]=h*A+u*E+f*R+m*V,r[5]=h*b+u*H+f*O+m*X,r[9]=h*W+u*G+f*z+m*q,r[13]=h*x+u*tt+f*Y+m*Q,r[2]=g*A+B*E+p*R+d*V,r[6]=g*b+B*H+p*O+d*X,r[10]=g*W+B*G+p*z+d*q,r[14]=g*x+B*tt+p*Y+d*Q,r[3]=y*A+M*E+T*R+C*V,r[7]=y*b+M*H+T*O+C*X,r[11]=y*W+M*G+T*z+C*q,r[15]=y*x+M*tt+T*Y+C*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],m=t[14],g=t[3],B=t[7],p=t[11],d=t[15];return g*(+r*l*u-i*c*u-r*a*f+n*c*f+i*a*m-n*l*m)+B*(+e*l*m-e*c*f+r*o*f-i*o*m+i*c*h-r*l*h)+p*(+e*c*u-e*a*m-r*o*u+n*o*m+r*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],m=t[11],g=t[12],B=t[13],p=t[14],d=t[15],y=u*p*c-B*f*c+B*l*m-a*p*m-u*l*d+a*f*d,M=g*f*c-h*p*c-g*l*m+o*p*m+h*l*d-o*f*d,T=h*B*c-g*u*c+g*a*m-o*B*m-h*a*d+o*u*d,C=g*u*l-h*B*l-g*a*f+o*B*f+h*a*p-o*u*p,A=e*y+n*M+i*T+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return t[0]=y*b,t[1]=(B*f*r-u*p*r-B*i*m+n*p*m+u*i*d-n*f*d)*b,t[2]=(a*p*r-B*l*r+B*i*c-n*p*c-a*i*d+n*l*d)*b,t[3]=(u*l*r-a*f*r-u*i*c+n*f*c+a*i*m-n*l*m)*b,t[4]=M*b,t[5]=(h*p*r-g*f*r+g*i*m-e*p*m-h*i*d+e*f*d)*b,t[6]=(g*l*r-o*p*r-g*i*c+e*p*c+o*i*d-e*l*d)*b,t[7]=(o*f*r-h*l*r+h*i*c-e*f*c-o*i*m+e*l*m)*b,t[8]=T*b,t[9]=(g*u*r-h*B*r-g*n*m+e*B*m+h*n*d-e*u*d)*b,t[10]=(o*B*r-g*a*r+g*n*c-e*B*c-o*n*d+e*a*d)*b,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*m-e*a*m)*b,t[12]=C*b,t[13]=(h*B*i-g*u*i+g*n*f-e*B*f-h*n*p+e*u*p)*b,t[14]=(g*a*i-o*B*i-g*n*l+e*B*l+o*n*p-e*a*p)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*b,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,m=r*h,g=r*u,B=o*h,p=o*u,d=a*u,y=l*c,M=l*h,T=l*u,C=n.x,A=n.y,b=n.z;return i[0]=(1-(B+d))*C,i[1]=(m+T)*C,i[2]=(g-M)*C,i[3]=0,i[4]=(m-T)*A,i[5]=(1-(f+d))*A,i[6]=(p+y)*A,i[7]=0,i[8]=(g+M)*b,i[9]=(p-y)*b,i[10]=(1-(f+B))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=On.set(i[0],i[1],i[2]).length();const o=On.set(i[4],i[5],i[6]).length(),a=On.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ne.copy(this);const c=1/r,h=1/o,u=1/a;return Ne.elements[0]*=c,Ne.elements[1]*=c,Ne.elements[2]*=c,Ne.elements[4]*=h,Ne.elements[5]*=h,Ne.elements[6]*=h,Ne.elements[8]*=u,Ne.elements[9]*=u,Ne.elements[10]*=u,e.setFromRotationMatrix(Ne),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Qe){const l=this.elements,c=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i);let m,g;if(a===Qe)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ji)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Qe){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-r),f=(e+t)*c,m=(n+i)*h;let g,B;if(a===Qe)g=(o+r)*u,B=-2*u;else if(a===Ji)g=r*u,B=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=B,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const On=new L,Ne=new ne,Il=new L(0,0,0),Nl=new L(1,1,1),rn=new L,wi=new L,Ae=new L,Qr=new ne,ta=new si;class is{constructor(t=0,e=0,n=0,i=is.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],m=i[10];switch(e){case"XYZ":this._y=Math.asin(Ee(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ee(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ee(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ee(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ee(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ee(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Qr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Qr,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ta.setFromEuler(this),this.setFromQuaternion(ta,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}is.DEFAULT_ORDER="XYZ";class ro{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Fl=0;const ea=new L,kn=new si,$e=new ne,Ri=new L,di=new L,Ol=new L,kl=new si,na=new L(1,0,0),ia=new L(0,1,0),sa=new L(0,0,1),Hl={type:"added"},zl={type:"removed"};class ie extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fl++}),this.uuid=_i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ie.DEFAULT_UP.clone();const t=new L,e=new is,n=new si,i=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new Ft}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=ie.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ro,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.multiply(kn),this}rotateOnWorldAxis(t,e){return kn.setFromAxisAngle(t,e),this.quaternion.premultiply(kn),this}rotateX(t){return this.rotateOnAxis(na,t)}rotateY(t){return this.rotateOnAxis(ia,t)}rotateZ(t){return this.rotateOnAxis(sa,t)}translateOnAxis(t,e){return ea.copy(t).applyQuaternion(this.quaternion),this.position.add(ea.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(na,t)}translateY(t){return this.translateOnAxis(ia,t)}translateZ(t){return this.translateOnAxis(sa,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4($e.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ri.copy(t):Ri.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$e.lookAt(di,Ri,this.up):$e.lookAt(Ri,di,this.up),this.quaternion.setFromRotationMatrix($e),i&&($e.extractRotation(i.matrixWorld),kn.setFromRotationMatrix($e),this.quaternion.premultiply(kn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Hl)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(zl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),$e.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),$e.multiply(t.parent.matrixWorld)),t.applyMatrix4($e),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,t,Ol),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(di,kl,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ie.DEFAULT_UP=new L(0,1,0);ie.DEFAULT_MATRIX_AUTO_UPDATE=!0;ie.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fe=new L,Ke=new L,bs=new L,je=new L,Hn=new L,zn=new L,ra=new L,As=new L,ws=new L,Rs=new L;let Ci=!1;class Oe{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Fe.subVectors(t,e),i.cross(Fe);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Fe.subVectors(i,e),Ke.subVectors(n,e),bs.subVectors(t,e);const o=Fe.dot(Fe),a=Fe.dot(Ke),l=Fe.dot(bs),c=Ke.dot(Ke),h=Ke.dot(bs),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,m=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,je)===null?!1:je.x>=0&&je.y>=0&&je.x+je.y<=1}static getUV(t,e,n,i,r,o,a,l){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),this.getInterpolation(t,e,n,i,r,o,a,l)}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,je)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,je.x),l.addScaledVector(o,je.y),l.addScaledVector(a,je.z),l)}static isFrontFacing(t,e,n,i){return Fe.subVectors(n,e),Ke.subVectors(t,e),Fe.cross(Ke).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Fe.subVectors(this.c,this.b),Ke.subVectors(this.a,this.b),Fe.cross(Ke).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Oe.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Oe.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return Ci===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ci=!0),Oe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}getInterpolation(t,e,n,i,r){return Oe.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return Oe.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Oe.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Hn.subVectors(i,n),zn.subVectors(r,n),As.subVectors(t,n);const l=Hn.dot(As),c=zn.dot(As);if(l<=0&&c<=0)return e.copy(n);ws.subVectors(t,i);const h=Hn.dot(ws),u=zn.dot(ws);if(h>=0&&u<=h)return e.copy(i);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Hn,o);Rs.subVectors(t,r);const m=Hn.dot(Rs),g=zn.dot(Rs);if(g>=0&&m<=g)return e.copy(r);const B=m*c-l*g;if(B<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(zn,a);const p=h*g-m*u;if(p<=0&&u-h>=0&&m-g>=0)return ra.subVectors(r,i),a=(u-h)/(u-h+(m-g)),e.copy(i).addScaledVector(ra,a);const d=1/(p+B+f);return o=B*d,a=f*d,e.copy(n).addScaledVector(Hn,o).addScaledVector(zn,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ao={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},an={h:0,s:0,l:0},Pi={h:0,s:0,l:0};function Cs(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Ht{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Wt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=Wt.workingColorSpace){if(t=Al(t,1),e=Ee(e,0,1),n=Ee(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Cs(o,r,t+1/3),this.g=Cs(o,r,t),this.b=Cs(o,r,t-1/3)}return Wt.toWorkingColorSpace(this,i),this}setStyle(t,e=ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){const n=ao[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Jn(t.r),this.g=Jn(t.g),this.b=Jn(t.b),this}copyLinearToSRGB(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return Wt.fromWorkingColorSpace(me.copy(this),t),Math.round(Ee(me.r*255,0,255))*65536+Math.round(Ee(me.g*255,0,255))*256+Math.round(Ee(me.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.fromWorkingColorSpace(me.copy(this),e);const n=me.r,i=me.g,r=me.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Wt.workingColorSpace){return Wt.fromWorkingColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=ue){Wt.fromWorkingColorSpace(me.copy(this),t);const e=me.r,n=me.g,i=me.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(an),this.setHSL(an.h+t,an.s+e,an.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(an),t.getHSL(Pi);const n=gs(an.h,Pi.h,e),i=gs(an.s,Pi.s,e),r=gs(an.l,Pi.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new Ht;Ht.NAMES=ao;let Gl=0;class ri extends ii{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gl++}),this.uuid=_i(),this.name="",this.type="Material",this.blending=Zn,this.side=dn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zs,this.blendDst=Gs,this.blendEquation=yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ht(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dn,this.stencilZFail=Dn,this.stencilZPass=Dn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==dn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zs&&(n.blendSrc=this.blendSrc),this.blendDst!==Gs&&(n.blendDst=this.blendDst),this.blendEquation!==yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Dn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Dn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Cn extends ri{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ga,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ee=new L,Li=new zt;class Re{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Yr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Li.fromBufferAttribute(this,e),Li.applyMatrix3(t),this.setXY(e,Li.x,Li.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix3(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyMatrix4(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.applyNormalMatrix(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ee.fromBufferAttribute(this,e),ee.transformDirection(t),this.setXYZ(e,ee.x,ee.y,ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ci(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ci(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ci(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ci(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ci(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),i=ye(i,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Yr&&(t.usage=this.usage),t}}class oo extends Re{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lo extends Re{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends Re{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Vl=0;const Le=new ne,Ps=new ie,Gn=new L,we=new Ln,fi=new Ln,le=new L;class Ce extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Vl++}),this.uuid=_i(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(to(t)?lo:oo)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Le.makeRotationFromQuaternion(t),this.applyMatrix4(Le),this}rotateX(t){return Le.makeRotationX(t),this.applyMatrix4(Le),this}rotateY(t){return Le.makeRotationY(t),this.applyMatrix4(Le),this}rotateZ(t){return Le.makeRotationZ(t),this.applyMatrix4(Le),this}translate(t,e,n){return Le.makeTranslation(t,e,n),this.applyMatrix4(Le),this}scale(t,e,n){return Le.makeScale(t,e,n),this.applyMatrix4(Le),this}lookAt(t){return Ps.lookAt(t),Ps.updateMatrix(),this.applyMatrix4(Ps.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gn).negate(),this.translate(Gn.x,Gn.y,Gn.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ge(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];we.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,we.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,we.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(we.min),this.boundingBox.expandByPoint(we.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(we.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];fi.setFromBufferAttribute(a),this.morphTargetsRelative?(le.addVectors(we.min,fi.min),we.expandByPoint(le),le.addVectors(we.max,fi.max),we.expandByPoint(le)):(we.expandByPoint(fi.min),we.expandByPoint(fi.max))}we.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)le.fromBufferAttribute(a,c),l&&(Gn.fromBufferAttribute(t,c),le.add(Gn)),i=Math.max(i,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Re(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let E=0;E<a;E++)c[E]=new L,h[E]=new L;const u=new L,f=new L,m=new L,g=new zt,B=new zt,p=new zt,d=new L,y=new L;function M(E,H,G){u.fromArray(i,E*3),f.fromArray(i,H*3),m.fromArray(i,G*3),g.fromArray(o,E*2),B.fromArray(o,H*2),p.fromArray(o,G*2),f.sub(u),m.sub(u),B.sub(g),p.sub(g);const tt=1/(B.x*p.y-p.x*B.y);isFinite(tt)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-B.y).multiplyScalar(tt),y.copy(m).multiplyScalar(B.x).addScaledVector(f,-p.x).multiplyScalar(tt),c[E].add(d),c[H].add(d),c[G].add(d),h[E].add(y),h[H].add(y),h[G].add(y))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let E=0,H=T.length;E<H;++E){const G=T[E],tt=G.start,R=G.count;for(let O=tt,z=tt+R;O<z;O+=3)M(n[O+0],n[O+1],n[O+2])}const C=new L,A=new L,b=new L,W=new L;function x(E){b.fromArray(r,E*3),W.copy(b);const H=c[E];C.copy(H),C.sub(b.multiplyScalar(b.dot(H))).normalize(),A.crossVectors(W,H);const tt=A.dot(h[E])<0?-1:1;l[E*4]=C.x,l[E*4+1]=C.y,l[E*4+2]=C.z,l[E*4+3]=tt}for(let E=0,H=T.length;E<H;++E){const G=T[E],tt=G.start,R=G.count;for(let O=tt,z=tt+R;O<z;O+=3)x(n[O+0]),x(n[O+1]),x(n[O+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Re(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,m=t.count;f<m;f+=3){const g=t.getX(f+0),B=t.getX(f+1),p=t.getX(f+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,B),o.fromBufferAttribute(e,p),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,B),c.fromBufferAttribute(n,p),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(B,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=e.count;f<m;f+=3)i.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let m=0,g=0;for(let B=0,p=l.length;B<p;B++){a.isInterleavedBufferAttribute?m=l[B]*a.data.stride+a.offset:m=l[B]*h;for(let d=0;d<h;d++)f[g++]=c[m++]}return new Re(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],m=t(f,n);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,m=u.length;f<m;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const aa=new ne,Bn=new so,Di=new ns,oa=new L,Vn=new L,Wn=new L,Xn=new L,Ls=new L,Ui=new L,Ii=new zt,Ni=new zt,Fi=new zt,la=new L,ca=new L,ha=new L,Oi=new L,ki=new L;class Zt extends ie{constructor(t=new Ce,e=new Cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Ui.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Ls.fromBufferAttribute(u,t),o?Ui.addScaledVector(Ls,h):Ui.addScaledVector(Ls.sub(e),h))}e.add(Ui)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Di.copy(n.boundingSphere),Di.applyMatrix4(r),Bn.copy(t.ray).recast(t.near),!(Di.containsPoint(Bn.origin)===!1&&(Bn.intersectSphere(Di,oa)===null||Bn.origin.distanceToSquared(oa)>(t.far-t.near)**2))&&(aa.copy(r).invert(),Bn.copy(t.ray).applyMatrix4(aa),!(n.boundingBox!==null&&Bn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bn)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,B=f.length;g<B;g++){const p=f[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,C=M;T<C;T+=3){const A=a.getX(T),b=a.getX(T+1),W=a.getX(T+2);i=Hi(this,d,t,n,c,h,u,A,b,W),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),B=Math.min(a.count,m.start+m.count);for(let p=g,d=B;p<d;p+=3){const y=a.getX(p),M=a.getX(p+1),T=a.getX(p+2);i=Hi(this,o,t,n,c,h,u,y,M,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,B=f.length;g<B;g++){const p=f[g],d=o[p.materialIndex],y=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let T=y,C=M;T<C;T+=3){const A=T,b=T+1,W=T+2;i=Hi(this,d,t,n,c,h,u,A,b,W),i&&(i.faceIndex=Math.floor(T/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const g=Math.max(0,m.start),B=Math.min(l.count,m.start+m.count);for(let p=g,d=B;p<d;p+=3){const y=p,M=p+1,T=p+2;i=Hi(this,o,t,n,c,h,u,y,M,T),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Wl(s,t,e,n,i,r,o,a){let l;if(t.side===Te?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===dn,a),l===null)return null;ki.copy(a),ki.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ki);return c<e.near||c>e.far?null:{distance:c,point:ki.clone(),object:s}}function Hi(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Vn),s.getVertexPosition(l,Wn),s.getVertexPosition(c,Xn);const h=Wl(s,t,e,n,Vn,Wn,Xn,Oi);if(h){i&&(Ii.fromBufferAttribute(i,a),Ni.fromBufferAttribute(i,l),Fi.fromBufferAttribute(i,c),h.uv=Oe.getInterpolation(Oi,Vn,Wn,Xn,Ii,Ni,Fi,new zt)),r&&(Ii.fromBufferAttribute(r,a),Ni.fromBufferAttribute(r,l),Fi.fromBufferAttribute(r,c),h.uv1=Oe.getInterpolation(Oi,Vn,Wn,Xn,Ii,Ni,Fi,new zt),h.uv2=h.uv1),o&&(la.fromBufferAttribute(o,a),ca.fromBufferAttribute(o,l),ha.fromBufferAttribute(o,c),h.normal=Oe.getInterpolation(Oi,Vn,Wn,Xn,la,ca,ha,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Oe.getNormal(Vn,Wn,Xn,u.normal),h.face=u}return h}class ai extends Ce{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,m=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(u,2));function g(B,p,d,y,M,T,C,A,b,W,x){const E=T/b,H=C/W,G=T/2,tt=C/2,R=A/2,O=b+1,z=W+1;let Y=0,V=0;const X=new L;for(let q=0;q<z;q++){const Q=q*H-tt;for(let et=0;et<O;et++){const k=et*E-G;X[B]=k*y,X[p]=Q*M,X[d]=R,c.push(X.x,X.y,X.z),X[B]=0,X[p]=0,X[d]=A>0?1:-1,h.push(X.x,X.y,X.z),u.push(et/b),u.push(1-q/W),Y+=1}}for(let q=0;q<W;q++)for(let Q=0;Q<b;Q++){const et=f+Q+O*q,k=f+Q+O*(q+1),$=f+(Q+1)+O*(q+1),ot=f+(Q+1)+O*q;l.push(et,k,ot),l.push(k,$,ot),V+=6}a.addGroup(m,V,x),m+=V,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ai(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ni(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function xe(s){const t={};for(let e=0;e<s.length;e++){const n=ni(s[e]);for(const i in n)t[i]=n[i]}return t}function Xl(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function co(s){return s.getRenderTarget()===null?s.outputColorSpace:Wt.workingColorSpace}const Yl={clone:ni,merge:xe};var ql=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$l=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pn extends ri{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ql,this.fragmentShader=$l,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ni(t.uniforms),this.uniformsGroups=Xl(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ho extends ie{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Qe}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ke extends ho{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $s*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ms*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yn=-90,qn=1;class Kl extends ie{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ke(Yn,qn,t,e);i.layers=this.layers,this.add(i);const r=new ke(Yn,qn,t,e);r.layers=this.layers,this.add(r);const o=new ke(Yn,qn,t,e);o.layers=this.layers,this.add(o);const a=new ke(Yn,qn,t,e);a.layers=this.layers,this.add(a);const l=new ke(Yn,qn,t,e);l.layers=this.layers,this.add(l);const c=new ke(Yn,qn,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Qe)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const B=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=B,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uo extends Se{constructor(t,e,n,i,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Qn,super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class jl extends Rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];e.encoding!==void 0&&(pi("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===wn?ue:Ue),this.texture=new uo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:De}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ai(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Te,blending:cn});r.uniforms.tEquirect.value=e;const o=new Zt(i,r),a=e.minFilter;return e.minFilter===mi&&(e.minFilter=De),new Kl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Ds=new L,Zl=new L,Jl=new Ft;class Mn{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Ds.subVectors(n,e).cross(Zl.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ds),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Jl.getNormalMatrix(t),i=this.coplanarPoint(Ds).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _n=new ns,zi=new L;class er{constructor(t=new Mn,e=new Mn,n=new Mn,i=new Mn,r=new Mn,o=new Mn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Qe){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],m=i[8],g=i[9],B=i[10],p=i[11],d=i[12],y=i[13],M=i[14],T=i[15];if(n[0].setComponents(l-r,f-c,p-m,T-d).normalize(),n[1].setComponents(l+r,f+c,p+m,T+d).normalize(),n[2].setComponents(l+o,f+h,p+g,T+y).normalize(),n[3].setComponents(l-o,f-h,p-g,T-y).normalize(),n[4].setComponents(l-a,f-u,p-B,T-M).normalize(),e===Qe)n[5].setComponents(l+a,f+u,p+B,T+M).normalize();else if(e===Ji)n[5].setComponents(a,u,B,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_n.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),_n.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_n)}intersectsSprite(t){return _n.center.set(0,0,0),_n.radius=.7071067811865476,_n.applyMatrix4(t.matrixWorld),this.intersectsSphere(_n)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(zi.x=i.normal.x>0?t.max.x:t.min.x,zi.y=i.normal.y>0?t.max.y:t.min.y,zi.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(zi)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function fo(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ql(s,t){const e=t.isWebGL2,n=new WeakMap;function i(c,h){const u=c.array,f=c.usage,m=u.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,u,f),c.onUploadCallback();let B;if(u instanceof Float32Array)B=s.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)B=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else B=s.UNSIGNED_SHORT;else if(u instanceof Int16Array)B=s.SHORT;else if(u instanceof Uint32Array)B=s.UNSIGNED_INT;else if(u instanceof Int32Array)B=s.INT;else if(u instanceof Int8Array)B=s.BYTE;else if(u instanceof Uint8Array)B=s.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)B=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:B,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,h,u){const f=h.array,m=h._updateRange,g=h.updateRanges;if(s.bindBuffer(u,c),m.count===-1&&g.length===0&&s.bufferSubData(u,0,f),g.length!==0){for(let B=0,p=g.length;B<p;B++){const d=g[B];e?s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):s.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}m.count!==-1&&(e?s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):s.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(s.deleteBuffer(h.buffer),n.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);if(u===void 0)n.set(c,i(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:o,remove:a,update:l}}class Me extends Ce{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,m=[],g=[],B=[],p=[];for(let d=0;d<h;d++){const y=d*f-o;for(let M=0;M<c;M++){const T=M*u-r;g.push(T,-y,0),B.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let y=0;y<a;y++){const M=y+c*d,T=y+c*(d+1),C=y+1+c*(d+1),A=y+1+c*d;m.push(M,T,A),m.push(T,C,A)}this.setIndex(m),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(B,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.widthSegments,t.heightSegments)}}var tc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ec=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,nc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ic=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sc=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,rc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ac=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,oc=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,lc=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,hc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,fc=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,pc=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,mc=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,gc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Bc=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_c=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vc=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mc=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Sc=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,yc=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ec=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tc=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bc=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ac=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wc=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rc=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cc="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pc=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Lc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Dc=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Uc=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ic=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Nc=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Fc=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Oc=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kc=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hc=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zc=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Gc=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Vc=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Wc=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Xc=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yc=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,qc=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$c=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Kc=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jc=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Zc=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jc=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Qc=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,th=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eh=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,nh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ih=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ah=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,oh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ch=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ph=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,mh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,gh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Bh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_h=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Sh=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,yh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Eh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Th=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bh=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ah=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wh=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ch=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ph=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Lh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Uh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ih=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Nh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Fh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Oh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,zh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Yh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$h=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Kh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Zh=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Jh=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Qh=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,tu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,eu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,su=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ru=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,au=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ou=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,du=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pu=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_u=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xu=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Mu=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Su=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Eu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tu=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Au=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,wu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ru=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cu=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pt={alphahash_fragment:tc,alphahash_pars_fragment:ec,alphamap_fragment:nc,alphamap_pars_fragment:ic,alphatest_fragment:sc,alphatest_pars_fragment:rc,aomap_fragment:ac,aomap_pars_fragment:oc,batching_pars_vertex:lc,batching_vertex:cc,begin_vertex:hc,beginnormal_vertex:uc,bsdfs:dc,iridescence_fragment:fc,bumpmap_pars_fragment:pc,clipping_planes_fragment:mc,clipping_planes_pars_fragment:gc,clipping_planes_pars_vertex:Bc,clipping_planes_vertex:_c,color_fragment:vc,color_pars_fragment:xc,color_pars_vertex:Mc,color_vertex:Sc,common:yc,cube_uv_reflection_fragment:Ec,defaultnormal_vertex:Tc,displacementmap_pars_vertex:bc,displacementmap_vertex:Ac,emissivemap_fragment:wc,emissivemap_pars_fragment:Rc,colorspace_fragment:Cc,colorspace_pars_fragment:Pc,envmap_fragment:Lc,envmap_common_pars_fragment:Dc,envmap_pars_fragment:Uc,envmap_pars_vertex:Ic,envmap_physical_pars_fragment:qc,envmap_vertex:Nc,fog_vertex:Fc,fog_pars_vertex:Oc,fog_fragment:kc,fog_pars_fragment:Hc,gradientmap_pars_fragment:zc,lightmap_fragment:Gc,lightmap_pars_fragment:Vc,lights_lambert_fragment:Wc,lights_lambert_pars_fragment:Xc,lights_pars_begin:Yc,lights_toon_fragment:$c,lights_toon_pars_fragment:Kc,lights_phong_fragment:jc,lights_phong_pars_fragment:Zc,lights_physical_fragment:Jc,lights_physical_pars_fragment:Qc,lights_fragment_begin:th,lights_fragment_maps:eh,lights_fragment_end:nh,logdepthbuf_fragment:ih,logdepthbuf_pars_fragment:sh,logdepthbuf_pars_vertex:rh,logdepthbuf_vertex:ah,map_fragment:oh,map_pars_fragment:lh,map_particle_fragment:ch,map_particle_pars_fragment:hh,metalnessmap_fragment:uh,metalnessmap_pars_fragment:dh,morphcolor_vertex:fh,morphnormal_vertex:ph,morphtarget_pars_vertex:mh,morphtarget_vertex:gh,normal_fragment_begin:Bh,normal_fragment_maps:_h,normal_pars_fragment:vh,normal_pars_vertex:xh,normal_vertex:Mh,normalmap_pars_fragment:Sh,clearcoat_normal_fragment_begin:yh,clearcoat_normal_fragment_maps:Eh,clearcoat_pars_fragment:Th,iridescence_pars_fragment:bh,opaque_fragment:Ah,packing:wh,premultiplied_alpha_fragment:Rh,project_vertex:Ch,dithering_fragment:Ph,dithering_pars_fragment:Lh,roughnessmap_fragment:Dh,roughnessmap_pars_fragment:Uh,shadowmap_pars_fragment:Ih,shadowmap_pars_vertex:Nh,shadowmap_vertex:Fh,shadowmask_pars_fragment:Oh,skinbase_vertex:kh,skinning_pars_vertex:Hh,skinning_vertex:zh,skinnormal_vertex:Gh,specularmap_fragment:Vh,specularmap_pars_fragment:Wh,tonemapping_fragment:Xh,tonemapping_pars_fragment:Yh,transmission_fragment:qh,transmission_pars_fragment:$h,uv_pars_fragment:Kh,uv_pars_vertex:jh,uv_vertex:Zh,worldpos_vertex:Jh,background_vert:Qh,background_frag:tu,backgroundCube_vert:eu,backgroundCube_frag:nu,cube_vert:iu,cube_frag:su,depth_vert:ru,depth_frag:au,distanceRGBA_vert:ou,distanceRGBA_frag:lu,equirect_vert:cu,equirect_frag:hu,linedashed_vert:uu,linedashed_frag:du,meshbasic_vert:fu,meshbasic_frag:pu,meshlambert_vert:mu,meshlambert_frag:gu,meshmatcap_vert:Bu,meshmatcap_frag:_u,meshnormal_vert:vu,meshnormal_frag:xu,meshphong_vert:Mu,meshphong_frag:Su,meshphysical_vert:yu,meshphysical_frag:Eu,meshtoon_vert:Tu,meshtoon_frag:bu,points_vert:Au,points_frag:wu,shadow_vert:Ru,shadow_frag:Cu,sprite_vert:Pu,sprite_frag:Lu},it={common:{diffuse:{value:new Ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Ht(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},Ve={basic:{uniforms:xe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Pt.meshbasic_vert,fragmentShader:Pt.meshbasic_frag},lambert:{uniforms:xe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Pt.meshlambert_vert,fragmentShader:Pt.meshlambert_frag},phong:{uniforms:xe([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new Ht(0)},specular:{value:new Ht(1118481)},shininess:{value:30}}]),vertexShader:Pt.meshphong_vert,fragmentShader:Pt.meshphong_frag},standard:{uniforms:xe([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new Ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag},toon:{uniforms:xe([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new Ht(0)}}]),vertexShader:Pt.meshtoon_vert,fragmentShader:Pt.meshtoon_frag},matcap:{uniforms:xe([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Pt.meshmatcap_vert,fragmentShader:Pt.meshmatcap_frag},points:{uniforms:xe([it.points,it.fog]),vertexShader:Pt.points_vert,fragmentShader:Pt.points_frag},dashed:{uniforms:xe([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Pt.linedashed_vert,fragmentShader:Pt.linedashed_frag},depth:{uniforms:xe([it.common,it.displacementmap]),vertexShader:Pt.depth_vert,fragmentShader:Pt.depth_frag},normal:{uniforms:xe([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Pt.meshnormal_vert,fragmentShader:Pt.meshnormal_frag},sprite:{uniforms:xe([it.sprite,it.fog]),vertexShader:Pt.sprite_vert,fragmentShader:Pt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Pt.background_vert,fragmentShader:Pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Pt.backgroundCube_vert,fragmentShader:Pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Pt.cube_vert,fragmentShader:Pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Pt.equirect_vert,fragmentShader:Pt.equirect_frag},distanceRGBA:{uniforms:xe([it.common,it.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Pt.distanceRGBA_vert,fragmentShader:Pt.distanceRGBA_frag},shadow:{uniforms:xe([it.lights,it.fog,{color:{value:new Ht(0)},opacity:{value:1}}]),vertexShader:Pt.shadow_vert,fragmentShader:Pt.shadow_frag}};Ve.physical={uniforms:xe([Ve.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Ht(0)},specularColor:{value:new Ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:Pt.meshphysical_vert,fragmentShader:Pt.meshphysical_frag};const Gi={r:0,b:0,g:0};function Du(s,t,e,n,i,r,o){const a=new Ht(0);let l=r===!0?0:1,c,h,u=null,f=0,m=null;function g(p,d){let y=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?B(a,l):M&&M.isColor&&(B(M,1),y=!0);const T=s.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ts)?(h===void 0&&(h=new Zt(new ai(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:ni(Ve.backgroundCube.uniforms),vertexShader:Ve.backgroundCube.vertexShader,fragmentShader:Ve.backgroundCube.fragmentShader,side:Te,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Wt.getTransfer(M.colorSpace)!==$t,(u!==M||f!==M.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Zt(new Me(2,2),new Pn({name:"BackgroundMaterial",uniforms:ni(Ve.background.uniforms),vertexShader:Ve.background.vertexShader,fragmentShader:Ve.background.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Wt.getTransfer(M.colorSpace)!==$t,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||m!==s.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,m=s.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function B(p,d){p.getRGB(Gi,co(s)),n.buffers.color.setClear(Gi.r,Gi.g,Gi.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,B(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,B(a,l)},render:g}}function Uu(s,t,e,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},l=p(null);let c=l,h=!1;function u(R,O,z,Y,V){let X=!1;if(o){const q=B(Y,z,O);c!==q&&(c=q,m(c.object)),X=d(R,Y,z,V),X&&y(R,Y,z,V)}else{const q=O.wireframe===!0;(c.geometry!==Y.id||c.program!==z.id||c.wireframe!==q)&&(c.geometry=Y.id,c.program=z.id,c.wireframe=q,X=!0)}V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,W(R,O,z,Y),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(R){return n.isWebGL2?s.bindVertexArray(R):r.bindVertexArrayOES(R)}function g(R){return n.isWebGL2?s.deleteVertexArray(R):r.deleteVertexArrayOES(R)}function B(R,O,z){const Y=z.wireframe===!0;let V=a[R.id];V===void 0&&(V={},a[R.id]=V);let X=V[O.id];X===void 0&&(X={},V[O.id]=X);let q=X[Y];return q===void 0&&(q=p(f()),X[Y]=q),q}function p(R){const O=[],z=[],Y=[];for(let V=0;V<i;V++)O[V]=0,z[V]=0,Y[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:Y,object:R,attributes:{},index:null}}function d(R,O,z,Y){const V=c.attributes,X=O.attributes;let q=0;const Q=z.getAttributes();for(const et in Q)if(Q[et].location>=0){const $=V[et];let ot=X[et];if(ot===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&(ot=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&(ot=R.instanceColor)),$===void 0||$.attribute!==ot||ot&&$.data!==ot.data)return!0;q++}return c.attributesNum!==q||c.index!==Y}function y(R,O,z,Y){const V={},X=O.attributes;let q=0;const Q=z.getAttributes();for(const et in Q)if(Q[et].location>=0){let $=X[et];$===void 0&&(et==="instanceMatrix"&&R.instanceMatrix&&($=R.instanceMatrix),et==="instanceColor"&&R.instanceColor&&($=R.instanceColor));const ot={};ot.attribute=$,$&&$.data&&(ot.data=$.data),V[et]=ot,q++}c.attributes=V,c.attributesNum=q,c.index=Y}function M(){const R=c.newAttributes;for(let O=0,z=R.length;O<z;O++)R[O]=0}function T(R){C(R,0)}function C(R,O){const z=c.newAttributes,Y=c.enabledAttributes,V=c.attributeDivisors;z[R]=1,Y[R]===0&&(s.enableVertexAttribArray(R),Y[R]=1),V[R]!==O&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](R,O),V[R]=O)}function A(){const R=c.newAttributes,O=c.enabledAttributes;for(let z=0,Y=O.length;z<Y;z++)O[z]!==R[z]&&(s.disableVertexAttribArray(z),O[z]=0)}function b(R,O,z,Y,V,X,q){q===!0?s.vertexAttribIPointer(R,O,z,V,X):s.vertexAttribPointer(R,O,z,Y,V,X)}function W(R,O,z,Y){if(n.isWebGL2===!1&&(R.isInstancedMesh||Y.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const V=Y.attributes,X=z.getAttributes(),q=O.defaultAttributeValues;for(const Q in X){const et=X[Q];if(et.location>=0){let k=V[Q];if(k===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(k=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(k=R.instanceColor)),k!==void 0){const $=k.normalized,ot=k.itemSize,mt=e.get(k);if(mt===void 0)continue;const pt=mt.buffer,At=mt.type,Rt=mt.bytesPerElement,Mt=n.isWebGL2===!0&&(At===s.INT||At===s.UNSIGNED_INT||k.gpuType===Wa);if(k.isInterleavedBufferAttribute){const kt=k.data,D=kt.stride,Be=k.offset;if(kt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<et.locationSize;Bt++)C(et.location+Bt,kt.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let Bt=0;Bt<et.locationSize;Bt++)T(et.location+Bt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let Bt=0;Bt<et.locationSize;Bt++)b(et.location+Bt,ot/et.locationSize,At,$,D*Rt,(Be+ot/et.locationSize*Bt)*Rt,Mt)}else{if(k.isInstancedBufferAttribute){for(let kt=0;kt<et.locationSize;kt++)C(et.location+kt,k.meshPerAttribute);R.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let kt=0;kt<et.locationSize;kt++)T(et.location+kt);s.bindBuffer(s.ARRAY_BUFFER,pt);for(let kt=0;kt<et.locationSize;kt++)b(et.location+kt,ot/et.locationSize,At,$,ot*Rt,ot/et.locationSize*kt*Rt,Mt)}}else if(q!==void 0){const $=q[Q];if($!==void 0)switch($.length){case 2:s.vertexAttrib2fv(et.location,$);break;case 3:s.vertexAttrib3fv(et.location,$);break;case 4:s.vertexAttrib4fv(et.location,$);break;default:s.vertexAttrib1fv(et.location,$)}}}}A()}function x(){G();for(const R in a){const O=a[R];for(const z in O){const Y=O[z];for(const V in Y)g(Y[V].object),delete Y[V];delete O[z]}delete a[R]}}function E(R){if(a[R.id]===void 0)return;const O=a[R.id];for(const z in O){const Y=O[z];for(const V in Y)g(Y[V].object),delete Y[V];delete O[z]}delete a[R.id]}function H(R){for(const O in a){const z=a[O];if(z[R.id]===void 0)continue;const Y=z[R.id];for(const V in Y)g(Y[V].object),delete Y[V];delete z[R.id]}}function G(){tt(),h=!0,c!==l&&(c=l,m(c.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:G,resetDefaultState:tt,dispose:x,releaseStatesOfGeometry:E,releaseStatesOfProgram:H,initAttributes:M,enableAttribute:T,disableUnusedAttributes:A}}function Iu(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,u){s.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let m,g;if(i)m=s,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{m.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let B=0;B<f;B++)g+=u[B];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=c}function Nu(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const b=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),B=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),d=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,T=o||t.has("OES_texture_float"),C=M&&T,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:B,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:y,vertexTextures:M,floatFragmentTextures:T,floatVertexTextures:C,maxSamples:A}}function Fu(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Mn,a=new Ft,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||n!==0||i;return i=f,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,m){const g=u.clippingPlanes,B=u.clipIntersection,p=u.clipShadows,d=s.get(u);if(!i||g===null||g.length===0||r&&!p)r?h(null):c();else{const y=r?0:n,M=y*4;let T=d.clippingState||null;l.value=T,T=h(g,f,M,m);for(let C=0;C!==M;++C)T[C]=e[C];d.clippingState=T,this.numIntersection=B?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,m,g){const B=u!==null?u.length:0;let p=null;if(B!==0){if(p=l.value,g!==!0||p===null){const d=m+B*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,T=m;M!==B;++M,T+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(p,T),p[T+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=B,t.numIntersection=0,p}}function Ou(s){let t=new WeakMap;function e(o,a){return a===Vs?o.mapping=Qn:a===Ws&&(o.mapping=ti),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Vs||a===Ws)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new jl(l.height/2);return c.fromEquirectangularTexture(s,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class nr extends ho{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Kn=4,ua=[.125,.215,.35,.446,.526,.582],En=20,Us=new nr,da=new Ht;let Is=null,Ns=0,Fs=0;const Sn=(1+Math.sqrt(5))/2,$n=1/Sn,fa=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Sn,$n),new L(0,Sn,-$n),new L($n,0,Sn),new L(-$n,0,Sn),new L(Sn,$n,0),new L(-Sn,$n,0)];class pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Is=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ba(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ga(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Is,Ns,Fs),t.scissorTest=!1,Vi(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qn||t.mapping===ti?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Is=this._renderer.getRenderTarget(),Ns=this._renderer.getActiveCubeFace(),Fs=this._renderer.getActiveMipmapLevel();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:De,minFilter:De,generateMipmaps:!1,type:gi,format:ze,colorSpace:tn,depthBuffer:!1},i=ma(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ma(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ku(r)),this._blurMaterial=Hu(r,t,e)}return i}_compileMaterial(t){const e=new Zt(this._lodPlanes[0],t);this._renderer.compile(e,Us)}_sceneToCubeUV(t,e,n,i){const a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(da),h.toneMapping=hn,h.autoClear=!1;const m=new Cn({name:"PMREM.Background",side:Te,depthWrite:!1,depthTest:!1}),g=new Zt(new ai,m);let B=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,B=!0):(m.color.copy(da),B=!0);for(let d=0;d<6;d++){const y=d%3;y===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):y===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const M=this._cubeSize;Vi(i,y*M,d>2?M:0,M,M),h.setRenderTarget(i),B&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Qn||t.mapping===ti;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ba()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ga());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Zt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Vi(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Us)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=fa[(i-1)%fa.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Zt(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*En-1),B=r/g,p=isFinite(r)?1+Math.floor(h*B):En;p>En&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${En}`);const d=[];let y=0;for(let b=0;b<En;++b){const W=b/B,x=Math.exp(-W*W/2);d.push(x),b===0?y+=x:b<p&&(y+=2*x)}for(let b=0;b<d.length;b++)d[b]=d[b]/y;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=g,f.mipInt.value=M-n;const T=this._sizeLods[i],C=3*T*(i>M-Kn?i-M+Kn:0),A=4*(this._cubeSize-T);Vi(e,C,A,3*T,2*T),l.setRenderTarget(e),l.render(u,Us)}}function ku(s){const t=[],e=[],n=[];let i=s;const r=s-Kn+1+ua.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>s-Kn?l=ua[o-s+Kn-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,g=6,B=3,p=2,d=1,y=new Float32Array(B*g*m),M=new Float32Array(p*g*m),T=new Float32Array(d*g*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,W=A>2?0:-1,x=[b,W,0,b+2/3,W,0,b+2/3,W+1,0,b,W,0,b+2/3,W+1,0,b,W+1,0];y.set(x,B*g*A),M.set(f,p*g*A);const E=[A,A,A,A,A,A];T.set(E,d*g*A)}const C=new Ce;C.setAttribute("position",new Re(y,B)),C.setAttribute("uv",new Re(M,p)),C.setAttribute("faceIndex",new Re(T,d)),t.push(C),i>Kn&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ma(s,t,e){const n=new Rn(s,t,e);return n.texture.mapping=ts,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vi(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Hu(s,t,e){const n=new Float32Array(En),i=new L(0,1,0);return new Pn({name:"SphericalGaussianBlur",defines:{n:En,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ga(){return new Pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function Ba(){return new Pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ir(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:cn,depthTest:!1,depthWrite:!1})}function ir(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function zu(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Vs||l===Ws,h=l===Qn||l===ti;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new pa(s)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&i(u)){e===null&&(e=new pa(s));const f=c?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Gu(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Vu(s,t,e,n){const i={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const B=f.morphAttributes[g];for(let p=0,d=B.length;p<d;p++)t.remove(B[p])}f.removeEventListener("dispose",o),delete i[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],s.ARRAY_BUFFER);const m=u.morphAttributes;for(const g in m){const B=m[g];for(let p=0,d=B.length;p<d;p++)t.update(B[p],s.ARRAY_BUFFER)}}function c(u){const f=[],m=u.index,g=u.attributes.position;let B=0;if(m!==null){const y=m.array;B=m.version;for(let M=0,T=y.length;M<T;M+=3){const C=y[M+0],A=y[M+1],b=y[M+2];f.push(C,A,A,b,b,C)}}else if(g!==void 0){const y=g.array;B=g.version;for(let M=0,T=y.length/3-1;M<T;M+=3){const C=M+0,A=M+1,b=M+2;f.push(C,A,A,b,b,C)}}else return;const p=new(to(f)?lo:oo)(f,1);p.version=B;const d=r.get(u);d&&t.remove(d),r.set(u,p)}function h(u){const f=r.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Wu(s,t,e,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,l;function c(m){a=m.type,l=m.bytesPerElement}function h(m,g){s.drawElements(r,g,a,m*l),e.update(g,r,1)}function u(m,g,B){if(B===0)return;let p,d;if(i)p=s,d="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[d](r,g,a,m*l,B),e.update(g,r,B)}function f(m,g,B){if(B===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<B;d++)this.render(m[d]/l,g[d]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,B);let d=0;for(let y=0;y<B;y++)d+=g[y];e.update(d,r,1)}}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Xu(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Yu(s,t){return s[0]-t[0]}function qu(s,t){return Math.abs(t[1])-Math.abs(s[1])}function $u(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u){const f=c.morphTargetInfluences;if(t.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,B=g!==void 0?g.length:0;let p=r.get(h);if(p===void 0||p.count!==B){let O=function(){tt.dispose(),r.delete(h),h.removeEventListener("dispose",O)};var m=O;p!==void 0&&p.texture.dispose();const M=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],W=h.morphAttributes.color||[];let x=0;M===!0&&(x=1),T===!0&&(x=2),C===!0&&(x=3);let E=h.attributes.position.count*x,H=1;E>t.maxTextureSize&&(H=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const G=new Float32Array(E*H*4*B),tt=new io(G,E,H,B);tt.type=ln,tt.needsUpdate=!0;const R=x*4;for(let z=0;z<B;z++){const Y=A[z],V=b[z],X=W[z],q=E*H*4*z;for(let Q=0;Q<Y.count;Q++){const et=Q*R;M===!0&&(o.fromBufferAttribute(Y,Q),G[q+et+0]=o.x,G[q+et+1]=o.y,G[q+et+2]=o.z,G[q+et+3]=0),T===!0&&(o.fromBufferAttribute(V,Q),G[q+et+4]=o.x,G[q+et+5]=o.y,G[q+et+6]=o.z,G[q+et+7]=0),C===!0&&(o.fromBufferAttribute(X,Q),G[q+et+8]=o.x,G[q+et+9]=o.y,G[q+et+10]=o.z,G[q+et+11]=X.itemSize===4?o.w:1)}}p={count:B,texture:tt,size:new zt(E,H)},r.set(h,p),h.addEventListener("dispose",O)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const y=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(s,"morphTargetBaseInfluence",y),u.getUniforms().setValue(s,"morphTargetInfluences",f),u.getUniforms().setValue(s,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let B=n[h.id];if(B===void 0||B.length!==g){B=[];for(let T=0;T<g;T++)B[T]=[T,0];n[h.id]=B}for(let T=0;T<g;T++){const C=B[T];C[0]=T,C[1]=f[T]}B.sort(qu);for(let T=0;T<8;T++)T<g&&B[T][1]?(a[T][0]=B[T][0],a[T][1]=B[T][1]):(a[T][0]=Number.MAX_SAFE_INTEGER,a[T][1]=0);a.sort(Yu);const p=h.morphAttributes.position,d=h.morphAttributes.normal;let y=0;for(let T=0;T<8;T++){const C=a[T],A=C[0],b=C[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+T)!==p[A]&&h.setAttribute("morphTarget"+T,p[A]),d&&h.getAttribute("morphNormal"+T)!==d[A]&&h.setAttribute("morphNormal"+T,d[A]),i[T]=b,y+=b):(p&&h.hasAttribute("morphTarget"+T)===!0&&h.deleteAttribute("morphTarget"+T),d&&h.hasAttribute("morphNormal"+T)===!0&&h.deleteAttribute("morphNormal"+T),i[T]=0)}const M=h.morphTargetsRelative?1:1-y;u.getUniforms().setValue(s,"morphTargetBaseInfluence",M),u.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:l}}function Ku(s,t,e,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class po extends Se{constructor(t,e,n,i,r,o,a,l,c,h){if(h=h!==void 0?h:An,h!==An&&h!==ei)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===An&&(n=on),n===void 0&&h===ei&&(n=bn),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:he,this.minFilter=l!==void 0?l:he,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mo=new Se,go=new po(1,1);go.compareFunction=Qa;const Bo=new io,_o=new Dl,vo=new uo,_a=[],va=[],xa=new Float32Array(16),Ma=new Float32Array(9),Sa=new Float32Array(4);function oi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=_a[i];if(r===void 0&&(r=new Float32Array(i),_a[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function ss(s,t){let e=va[t];e===void 0&&(e=new Int32Array(t),va[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function ju(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Zu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2fv(this.addr,t),re(e,t)}}function Ju(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;s.uniform3fv(this.addr,t),re(e,t)}}function Qu(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4fv(this.addr,t),re(e,t)}}function td(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Sa.set(n),s.uniformMatrix2fv(this.addr,!1,Sa),re(e,n)}}function ed(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Ma.set(n),s.uniformMatrix3fv(this.addr,!1,Ma),re(e,n)}}function nd(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;xa.set(n),s.uniformMatrix4fv(this.addr,!1,xa),re(e,n)}}function id(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function sd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2iv(this.addr,t),re(e,t)}}function rd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;s.uniform3iv(this.addr,t),re(e,t)}}function ad(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4iv(this.addr,t),re(e,t)}}function od(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function ld(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2uiv(this.addr,t),re(e,t)}}function cd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;s.uniform3uiv(this.addr,t),re(e,t)}}function hd(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4uiv(this.addr,t),re(e,t)}}function ud(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?go:mo;e.setTexture2D(t||r,i)}function dd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||_o,i)}function fd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vo,i)}function pd(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Bo,i)}function md(s){switch(s){case 5126:return ju;case 35664:return Zu;case 35665:return Ju;case 35666:return Qu;case 35674:return td;case 35675:return ed;case 35676:return nd;case 5124:case 35670:return id;case 35667:case 35671:return sd;case 35668:case 35672:return rd;case 35669:case 35673:return ad;case 5125:return od;case 36294:return ld;case 36295:return cd;case 36296:return hd;case 35678:case 36198:case 36298:case 36306:case 35682:return ud;case 35679:case 36299:case 36307:return dd;case 35680:case 36300:case 36308:case 36293:return fd;case 36289:case 36303:case 36311:case 36292:return pd}}function gd(s,t){s.uniform1fv(this.addr,t)}function Bd(s,t){const e=oi(t,this.size,2);s.uniform2fv(this.addr,e)}function _d(s,t){const e=oi(t,this.size,3);s.uniform3fv(this.addr,e)}function vd(s,t){const e=oi(t,this.size,4);s.uniform4fv(this.addr,e)}function xd(s,t){const e=oi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Md(s,t){const e=oi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function Sd(s,t){const e=oi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function yd(s,t){s.uniform1iv(this.addr,t)}function Ed(s,t){s.uniform2iv(this.addr,t)}function Td(s,t){s.uniform3iv(this.addr,t)}function bd(s,t){s.uniform4iv(this.addr,t)}function Ad(s,t){s.uniform1uiv(this.addr,t)}function wd(s,t){s.uniform2uiv(this.addr,t)}function Rd(s,t){s.uniform3uiv(this.addr,t)}function Cd(s,t){s.uniform4uiv(this.addr,t)}function Pd(s,t,e){const n=this.cache,i=t.length,r=ss(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||mo,r[o])}function Ld(s,t,e){const n=this.cache,i=t.length,r=ss(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||_o,r[o])}function Dd(s,t,e){const n=this.cache,i=t.length,r=ss(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||vo,r[o])}function Ud(s,t,e){const n=this.cache,i=t.length,r=ss(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Bo,r[o])}function Id(s){switch(s){case 5126:return gd;case 35664:return Bd;case 35665:return _d;case 35666:return vd;case 35674:return xd;case 35675:return Md;case 35676:return Sd;case 5124:case 35670:return yd;case 35667:case 35671:return Ed;case 35668:case 35672:return Td;case 35669:case 35673:return bd;case 5125:return Ad;case 36294:return wd;case 36295:return Rd;case 36296:return Cd;case 35678:case 36198:case 36298:case 36306:case 35682:return Pd;case 35679:case 36299:case 36307:return Ld;case 35680:case 36300:case 36308:case 36293:return Dd;case 36289:case 36303:case 36311:case 36292:return Ud}}class Nd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=md(e.type)}}class Fd{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Id(e.type)}}class Od{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const Os=/(\w+)(\])?(\[|\.)?/g;function ya(s,t){s.seq.push(t),s.map[t.id]=t}function kd(s,t,e){const n=s.name,i=n.length;for(Os.lastIndex=0;;){const r=Os.exec(n),o=Os.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ya(e,c===void 0?new Nd(a,s,t):new Fd(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Od(a),ya(e,u)),e=u}}}class qi{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);kd(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Ea(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Hd=37297;let zd=0;function Gd(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function Vd(s){const t=Wt.getPrimaries(Wt.workingColorSpace),e=Wt.getPrimaries(s);let n;switch(t===e?n="":t===Zi&&e===ji?n="LinearDisplayP3ToLinearSRGB":t===ji&&e===Zi&&(n="LinearSRGBToLinearDisplayP3"),s){case tn:case es:return[n,"LinearTransferOETF"];case ue:case tr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ta(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Gd(s.getShaderSource(t),o)}else return i}function Wd(s,t){const e=Vd(t);return`vec4 ${s}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xd(s,t){let e;switch(t){case nl:e="Linear";break;case il:e="Reinhard";break;case sl:e="OptimizedCineon";break;case rl:e="ACESFilmic";break;case ol:e="AgX";break;case al:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Yd(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(jn).join(`
`)}function qd(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(jn).join(`
`)}function $d(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Kd(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function jn(s){return s!==""}function ba(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Aa(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const jd=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(s){return s.replace(jd,Jd)}const Zd=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Jd(s,t){let e=Pt[t];if(e===void 0){const n=Zd.get(t);if(n!==void 0)e=Pt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return js(e)}const Qd=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wa(s){return s.replace(Qd,tf)}function tf(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ra(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function ef(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Ha?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===za?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Je&&(t="SHADOWMAP_TYPE_VSM"),t}function nf(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Qn:case ti:t="ENVMAP_TYPE_CUBE";break;case ts:t="ENVMAP_TYPE_CUBE_UV";break}return t}function sf(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ti:t="ENVMAP_MODE_REFRACTION";break}return t}function rf(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ga:t="ENVMAP_BLENDING_MULTIPLY";break;case tl:t="ENVMAP_BLENDING_MIX";break;case el:t="ENVMAP_BLENDING_ADD";break}return t}function af(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function of(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=ef(e),c=nf(e),h=sf(e),u=rf(e),f=af(e),m=e.isWebGL2?"":Yd(e),g=qd(e),B=$d(r),p=i.createProgram();let d,y,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,B].filter(jn).join(`
`),d.length>0&&(d+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,B].filter(jn).join(`
`),y.length>0&&(y+=`
`)):(d=[Ra(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,B,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jn).join(`
`),y=[m,Ra(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,B,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hn?"#define TONE_MAPPING":"",e.toneMapping!==hn?Pt.tonemapping_pars_fragment:"",e.toneMapping!==hn?Xd("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Pt.colorspace_pars_fragment,Wd("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(jn).join(`
`)),o=js(o),o=ba(o,e),o=Aa(o,e),a=js(a),a=ba(a,e),a=Aa(a,e),o=wa(o),a=wa(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===qr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===qr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const T=M+d+o,C=M+y+a,A=Ea(i,i.VERTEX_SHADER,T),b=Ea(i,i.FRAGMENT_SHADER,C);i.attachShader(p,A),i.attachShader(p,b),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function W(G){if(s.debug.checkShaderErrors){const tt=i.getProgramInfoLog(p).trim(),R=i.getShaderInfoLog(A).trim(),O=i.getShaderInfoLog(b).trim();let z=!0,Y=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(z=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,A,b);else{const V=Ta(i,A,"vertex"),X=Ta(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+tt+`
`+V+`
`+X)}else tt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",tt):(R===""||O==="")&&(Y=!1);Y&&(G.diagnostics={runnable:z,programLog:tt,vertexShader:{log:R,prefix:d},fragmentShader:{log:O,prefix:y}})}i.deleteShader(A),i.deleteShader(b),x=new qi(i,p),E=Kd(i,p)}let x;this.getUniforms=function(){return x===void 0&&W(this),x};let E;this.getAttributes=function(){return E===void 0&&W(this),E};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=i.getProgramParameter(p,Hd)),H},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=zd++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=b,this}let lf=0;class cf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new hf(t),e.set(t,n)),n}}class hf{constructor(t){this.id=lf++,this.code=t,this.usedTimes=0}}function uf(s,t,e,n,i,r,o){const a=new ro,l=new cf,c=[],h=i.isWebGL2,u=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function B(x){return x===0?"uv":`uv${x}`}function p(x,E,H,G,tt){const R=G.fog,O=tt.geometry,z=x.isMeshStandardMaterial?G.environment:null,Y=(x.isMeshStandardMaterial?e:t).get(x.envMap||z),V=Y&&Y.mapping===ts?Y.image.height:null,X=g[x.type];x.precision!==null&&(m=i.getMaxPrecision(x.precision),m!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",m,"instead."));const q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Q=q!==void 0?q.length:0;let et=0;O.morphAttributes.position!==void 0&&(et=1),O.morphAttributes.normal!==void 0&&(et=2),O.morphAttributes.color!==void 0&&(et=3);let k,$,ot,mt;if(X){const _e=Ve[X];k=_e.vertexShader,$=_e.fragmentShader}else k=x.vertexShader,$=x.fragmentShader,l.update(x),ot=l.getVertexShaderID(x),mt=l.getFragmentShaderID(x);const pt=s.getRenderTarget(),At=tt.isInstancedMesh===!0,Rt=tt.isBatchedMesh===!0,Mt=!!x.map,kt=!!x.matcap,D=!!Y,Be=!!x.aoMap,Bt=!!x.lightMap,Tt=!!x.bumpMap,ut=!!x.normalMap,Kt=!!x.displacementMap,Lt=!!x.emissiveMap,S=!!x.metalnessMap,_=!!x.roughnessMap,I=x.anisotropy>0,Z=x.clearcoat>0,j=x.iridescence>0,J=x.sheen>0,dt=x.transmission>0,at=I&&!!x.anisotropyMap,ct=Z&&!!x.clearcoatMap,xt=Z&&!!x.clearcoatNormalMap,Dt=Z&&!!x.clearcoatRoughnessMap,K=j&&!!x.iridescenceMap,Vt=j&&!!x.iridescenceThicknessMap,Ot=J&&!!x.sheenColorMap,Et=J&&!!x.sheenRoughnessMap,gt=!!x.specularMap,ht=!!x.specularColorMap,Ct=!!x.specularIntensityMap,Gt=dt&&!!x.transmissionMap,Jt=dt&&!!x.thicknessMap,It=!!x.gradientMap,nt=!!x.alphaMap,w=x.alphaTest>0,st=!!x.alphaHash,rt=!!x.extensions,St=!!O.attributes.uv1,_t=!!O.attributes.uv2,Xt=!!O.attributes.uv3;let Yt=hn;return x.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Yt=s.toneMapping),{isWebGL2:h,shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:k,fragmentShader:$,defines:x.defines,customVertexShaderID:ot,customFragmentShaderID:mt,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:m,batching:Rt,instancing:At,instancingColor:At&&tt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pt===null?s.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:tn,map:Mt,matcap:kt,envMap:D,envMapMode:D&&Y.mapping,envMapCubeUVHeight:V,aoMap:Be,lightMap:Bt,bumpMap:Tt,normalMap:ut,displacementMap:f&&Kt,emissiveMap:Lt,normalMapObjectSpace:ut&&x.normalMapType===vl,normalMapTangentSpace:ut&&x.normalMapType===Ja,metalnessMap:S,roughnessMap:_,anisotropy:I,anisotropyMap:at,clearcoat:Z,clearcoatMap:ct,clearcoatNormalMap:xt,clearcoatRoughnessMap:Dt,iridescence:j,iridescenceMap:K,iridescenceThicknessMap:Vt,sheen:J,sheenColorMap:Ot,sheenRoughnessMap:Et,specularMap:gt,specularColorMap:ht,specularIntensityMap:Ct,transmission:dt,transmissionMap:Gt,thicknessMap:Jt,gradientMap:It,opaque:x.transparent===!1&&x.blending===Zn,alphaMap:nt,alphaTest:w,alphaHash:st,combine:x.combine,mapUv:Mt&&B(x.map.channel),aoMapUv:Be&&B(x.aoMap.channel),lightMapUv:Bt&&B(x.lightMap.channel),bumpMapUv:Tt&&B(x.bumpMap.channel),normalMapUv:ut&&B(x.normalMap.channel),displacementMapUv:Kt&&B(x.displacementMap.channel),emissiveMapUv:Lt&&B(x.emissiveMap.channel),metalnessMapUv:S&&B(x.metalnessMap.channel),roughnessMapUv:_&&B(x.roughnessMap.channel),anisotropyMapUv:at&&B(x.anisotropyMap.channel),clearcoatMapUv:ct&&B(x.clearcoatMap.channel),clearcoatNormalMapUv:xt&&B(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Dt&&B(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&B(x.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&B(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&B(x.sheenColorMap.channel),sheenRoughnessMapUv:Et&&B(x.sheenRoughnessMap.channel),specularMapUv:gt&&B(x.specularMap.channel),specularColorMapUv:ht&&B(x.specularColorMap.channel),specularIntensityMapUv:Ct&&B(x.specularIntensityMap.channel),transmissionMapUv:Gt&&B(x.transmissionMap.channel),thicknessMapUv:Jt&&B(x.thicknessMap.channel),alphaMapUv:nt&&B(x.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(ut||I),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUv1s:St,vertexUv2s:_t,vertexUv3s:Xt,pointsUvs:tt.isPoints===!0&&!!O.attributes.uv&&(Mt||nt),fog:!!R,useFog:x.fog===!0,fogExp2:R&&R.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:tt.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:et,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Yt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Mt&&x.map.isVideoTexture===!0&&Wt.getTransfer(x.map.colorSpace)===$t,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===de,flipSided:x.side===Te,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:rt&&x.extensions.derivatives===!0,extensionFragDepth:rt&&x.extensions.fragDepth===!0,extensionDrawBuffers:rt&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&x.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&x.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const H in x.defines)E.push(H),E.push(x.defines[H]);return x.isRawShaderMaterial===!1&&(y(E,x),M(E,x),E.push(s.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function y(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function M(x,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),x.push(a.mask)}function T(x){const E=g[x.type];let H;if(E){const G=Ve[E];H=Yl.clone(G.uniforms)}else H=x.uniforms;return H}function C(x,E){let H;for(let G=0,tt=c.length;G<tt;G++){const R=c[G];if(R.cacheKey===E){H=R,++H.usedTimes;break}}return H===void 0&&(H=new of(s,E,x,r),c.push(H)),H}function A(x){if(--x.usedTimes===0){const E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function W(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:T,acquireProgram:C,releaseProgram:A,releaseShaderCache:b,programs:c,dispose:W}}function df(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function ff(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Ca(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Pa(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,m,g,B,p){let d=s[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:g,renderOrder:u.renderOrder,z:B,group:p},s[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=B,d.group=p),t++,d}function a(u,f,m,g,B,p){const d=o(u,f,m,g,B,p);m.transmission>0?n.push(d):m.transparent===!0?i.push(d):e.push(d)}function l(u,f,m,g,B,p){const d=o(u,f,m,g,B,p);m.transmission>0?n.unshift(d):m.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||ff),n.length>1&&n.sort(f||Ca),i.length>1&&i.sort(f||Ca)}function h(){for(let u=t,f=s.length;u<f;u++){const m=s[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function pf(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Pa,s.set(n,[o])):i>=r.length?(o=new Pa,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function mf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Ht};break;case"SpotLight":e={position:new L,direction:new L,color:new Ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Ht,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Ht,groundColor:new Ht};break;case"RectAreaLight":e={color:new Ht,position:new L,halfWidth:new L,halfHeight:new L};break}return s[t.id]=e,e}}}function gf(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let Bf=0;function _f(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function vf(s,t){const e=new mf,n=gf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const r=new L,o=new ne,a=new ne;function l(h,u){let f=0,m=0,g=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let B=0,p=0,d=0,y=0,M=0,T=0,C=0,A=0,b=0,W=0,x=0;h.sort(_f);const E=u===!0?Math.PI:1;for(let G=0,tt=h.length;G<tt;G++){const R=h[G],O=R.color,z=R.intensity,Y=R.distance,V=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=O.r*z*E,m+=O.g*z*E,g+=O.b*z*E;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],z);x++}else if(R.isDirectionalLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*E),R.castShadow){const q=R.shadow,Q=n.get(R);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,i.directionalShadow[B]=Q,i.directionalShadowMap[B]=V,i.directionalShadowMatrix[B]=R.shadow.matrix,T++}i.directional[B]=X,B++}else if(R.isSpotLight){const X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(O).multiplyScalar(z*E),X.distance=Y,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[d]=X;const q=R.shadow;if(R.map&&(i.spotLightMap[b]=R.map,b++,q.updateMatrices(R),R.castShadow&&W++),i.spotLightMatrix[d]=q.matrix,R.castShadow){const Q=n.get(R);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,i.spotShadow[d]=Q,i.spotShadowMap[d]=V,A++}d++}else if(R.isRectAreaLight){const X=e.get(R);X.color.copy(O).multiplyScalar(z),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=X,y++}else if(R.isPointLight){const X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity*E),X.distance=R.distance,X.decay=R.decay,R.castShadow){const q=R.shadow,Q=n.get(R);Q.shadowBias=q.bias,Q.shadowNormalBias=q.normalBias,Q.shadowRadius=q.radius,Q.shadowMapSize=q.mapSize,Q.shadowCameraNear=q.camera.near,Q.shadowCameraFar=q.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=V,i.pointShadowMatrix[p]=R.shadow.matrix,C++}i.point[p]=X,p++}else if(R.isHemisphereLight){const X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(z*E),X.groundColor.copy(R.groundColor).multiplyScalar(z*E),i.hemi[M]=X,M++}}y>0&&(t.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=it.LTC_FLOAT_1,i.rectAreaLTC2=it.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=it.LTC_HALF_1,i.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const H=i.hash;(H.directionalLength!==B||H.pointLength!==p||H.spotLength!==d||H.rectAreaLength!==y||H.hemiLength!==M||H.numDirectionalShadows!==T||H.numPointShadows!==C||H.numSpotShadows!==A||H.numSpotMaps!==b||H.numLightProbes!==x)&&(i.directional.length=B,i.spot.length=d,i.rectArea.length=y,i.point.length=p,i.hemi.length=M,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.pointShadow.length=C,i.pointShadowMap.length=C,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=T,i.pointShadowMatrix.length=C,i.spotLightMatrix.length=A+b-W,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=W,i.numLightProbes=x,H.directionalLength=B,H.pointLength=p,H.spotLength=d,H.rectAreaLength=y,H.hemiLength=M,H.numDirectionalShadows=T,H.numPointShadows=C,H.numSpotShadows=A,H.numSpotMaps=b,H.numLightProbes=x,i.version=Bf++)}function c(h,u){let f=0,m=0,g=0,B=0,p=0;const d=u.matrixWorldInverse;for(let y=0,M=h.length;y<M;y++){const T=h[y];if(T.isDirectionalLight){const C=i.directional[f];C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),f++}else if(T.isSpotLight){const C=i.spot[g];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),C.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),C.direction.sub(r),C.direction.transformDirection(d),g++}else if(T.isRectAreaLight){const C=i.rectArea[B];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),a.identity(),o.copy(T.matrixWorld),o.premultiply(d),a.extractRotation(o),C.halfWidth.set(T.width*.5,0,0),C.halfHeight.set(0,T.height*.5,0),C.halfWidth.applyMatrix4(a),C.halfHeight.applyMatrix4(a),B++}else if(T.isPointLight){const C=i.point[m];C.position.setFromMatrixPosition(T.matrixWorld),C.position.applyMatrix4(d),m++}else if(T.isHemisphereLight){const C=i.hemi[p];C.direction.setFromMatrixPosition(T.matrixWorld),C.direction.transformDirection(d),p++}}}return{setup:l,setupView:c,state:i}}function La(s,t){const e=new vf(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(u){n.push(u)}function a(u){i.push(u)}function l(u){e.setup(n,u)}function c(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function xf(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new La(s,t),e.set(r,[l])):o>=a.length?(l=new La(s,t),a.push(l)):l=a[o],l}function i(){e=new WeakMap}return{get:n,dispose:i}}class Mf extends ri{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Sf extends ri{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const yf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ef=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tf(s,t,e){let n=new er;const i=new zt,r=new zt,o=new ce,a=new Mf({depthPacking:_l}),l=new Sf,c={},h=e.maxTextureSize,u={[dn]:Te,[Te]:dn,[de]:de},f=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:yf,fragmentShader:Ef}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ce;g.setAttribute("position",new Re(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const B=new Zt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let d=this.type;this.render=function(A,b,W){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const x=s.getRenderTarget(),E=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),G=s.state;G.setBlending(cn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const tt=d!==Je&&this.type===Je,R=d===Je&&this.type!==Je;for(let O=0,z=A.length;O<z;O++){const Y=A[O],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);const X=V.getFrameExtents();if(i.multiply(X),r.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/X.x),i.x=r.x*X.x,V.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/X.y),i.y=r.y*X.y,V.mapSize.y=r.y)),V.map===null||tt===!0||R===!0){const Q=this.type!==Je?{minFilter:he,magFilter:he}:{};V.map!==null&&V.map.dispose(),V.map=new Rn(i.x,i.y,Q),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const q=V.getViewportCount();for(let Q=0;Q<q;Q++){const et=V.getViewport(Q);o.set(r.x*et.x,r.y*et.y,r.x*et.z,r.y*et.w),G.viewport(o),V.updateMatrices(Y,Q),n=V.getFrustum(),T(b,W,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===Je&&y(V,W),V.needsUpdate=!1}d=this.type,p.needsUpdate=!1,s.setRenderTarget(x,E,H)};function y(A,b){const W=t.update(B);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Rn(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,W,f,B,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,W,m,B,null)}function M(A,b,W,x){let E=null;const H=W.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(H!==void 0)E=H;else if(E=W.isPointLight===!0?l:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const G=E.uuid,tt=b.uuid;let R=c[G];R===void 0&&(R={},c[G]=R);let O=R[tt];O===void 0&&(O=E.clone(),R[tt]=O,b.addEventListener("dispose",C)),E=O}if(E.visible=b.visible,E.wireframe=b.wireframe,x===Je?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:u[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,W.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const G=s.properties.get(E);G.light=W}return E}function T(A,b,W,x,E){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===Je)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,A.matrixWorld);const tt=t.update(A),R=A.material;if(Array.isArray(R)){const O=tt.groups;for(let z=0,Y=O.length;z<Y;z++){const V=O[z],X=R[V.materialIndex];if(X&&X.visible){const q=M(A,X,x,E);A.onBeforeShadow(s,A,b,W,tt,q,V),s.renderBufferDirect(W,null,tt,q,A,V),A.onAfterShadow(s,A,b,W,tt,q,V)}}}else if(R.visible){const O=M(A,R,x,E);A.onBeforeShadow(s,A,b,W,tt,O,null),s.renderBufferDirect(W,null,tt,O,A,null),A.onAfterShadow(s,A,b,W,tt,O,null)}}const G=A.children;for(let tt=0,R=G.length;tt<R;tt++)T(G[tt],b,W,x,E)}function C(A){A.target.removeEventListener("dispose",C);for(const W in c){const x=c[W],E=A.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function bf(s,t,e){const n=e.isWebGL2;function i(){let w=!1;const st=new ce;let rt=null;const St=new ce(0,0,0,0);return{setMask:function(_t){rt!==_t&&!w&&(s.colorMask(_t,_t,_t,_t),rt=_t)},setLocked:function(_t){w=_t},setClear:function(_t,Xt,Yt,ae,_e){_e===!0&&(_t*=ae,Xt*=ae,Yt*=ae),st.set(_t,Xt,Yt,ae),St.equals(st)===!1&&(s.clearColor(_t,Xt,Yt,ae),St.copy(st))},reset:function(){w=!1,rt=null,St.set(-1,0,0,0)}}}function r(){let w=!1,st=null,rt=null,St=null;return{setTest:function(_t){_t?Rt(s.DEPTH_TEST):Mt(s.DEPTH_TEST)},setMask:function(_t){st!==_t&&!w&&(s.depthMask(_t),st=_t)},setFunc:function(_t){if(rt!==_t){switch(_t){case qo:s.depthFunc(s.NEVER);break;case $o:s.depthFunc(s.ALWAYS);break;case Ko:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case jo:s.depthFunc(s.EQUAL);break;case Zo:s.depthFunc(s.GEQUAL);break;case Jo:s.depthFunc(s.GREATER);break;case Qo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}rt=_t}},setLocked:function(_t){w=_t},setClear:function(_t){St!==_t&&(s.clearDepth(_t),St=_t)},reset:function(){w=!1,st=null,rt=null,St=null}}}function o(){let w=!1,st=null,rt=null,St=null,_t=null,Xt=null,Yt=null,ae=null,_e=null;return{setTest:function(qt){w||(qt?Rt(s.STENCIL_TEST):Mt(s.STENCIL_TEST))},setMask:function(qt){st!==qt&&!w&&(s.stencilMask(qt),st=qt)},setFunc:function(qt,ve,Ge){(rt!==qt||St!==ve||_t!==Ge)&&(s.stencilFunc(qt,ve,Ge),rt=qt,St=ve,_t=Ge)},setOp:function(qt,ve,Ge){(Xt!==qt||Yt!==ve||ae!==Ge)&&(s.stencilOp(qt,ve,Ge),Xt=qt,Yt=ve,ae=Ge)},setLocked:function(qt){w=qt},setClear:function(qt){_e!==qt&&(s.clearStencil(qt),_e=qt)},reset:function(){w=!1,st=null,rt=null,St=null,_t=null,Xt=null,Yt=null,ae=null,_e=null}}}const a=new i,l=new r,c=new o,h=new WeakMap,u=new WeakMap;let f={},m={},g=new WeakMap,B=[],p=null,d=!1,y=null,M=null,T=null,C=null,A=null,b=null,W=null,x=new Ht(0,0,0),E=0,H=!1,G=null,tt=null,R=null,O=null,z=null;const Y=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,X=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),V=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),V=X>=2);let Q=null,et={};const k=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),ot=new ce().fromArray(k),mt=new ce().fromArray($);function pt(w,st,rt,St){const _t=new Uint8Array(4),Xt=s.createTexture();s.bindTexture(w,Xt),s.texParameteri(w,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(w,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Yt=0;Yt<rt;Yt++)n&&(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)?s.texImage3D(st,0,s.RGBA,1,1,St,0,s.RGBA,s.UNSIGNED_BYTE,_t):s.texImage2D(st+Yt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_t);return Xt}const At={};At[s.TEXTURE_2D]=pt(s.TEXTURE_2D,s.TEXTURE_2D,1),At[s.TEXTURE_CUBE_MAP]=pt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(At[s.TEXTURE_2D_ARRAY]=pt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),At[s.TEXTURE_3D]=pt(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Rt(s.DEPTH_TEST),l.setFunc($i),Lt(!1),S(fr),Rt(s.CULL_FACE),ut(cn);function Rt(w){f[w]!==!0&&(s.enable(w),f[w]=!0)}function Mt(w){f[w]!==!1&&(s.disable(w),f[w]=!1)}function kt(w,st){return m[w]!==st?(s.bindFramebuffer(w,st),m[w]=st,n&&(w===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=st),w===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=st)),!0):!1}function D(w,st){let rt=B,St=!1;if(w)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),w.isWebGLMultipleRenderTargets){const _t=w.texture;if(rt.length!==_t.length||rt[0]!==s.COLOR_ATTACHMENT0){for(let Xt=0,Yt=_t.length;Xt<Yt;Xt++)rt[Xt]=s.COLOR_ATTACHMENT0+Xt;rt.length=_t.length,St=!0}}else rt[0]!==s.COLOR_ATTACHMENT0&&(rt[0]=s.COLOR_ATTACHMENT0,St=!0);else rt[0]!==s.BACK&&(rt[0]=s.BACK,St=!0);St&&(e.isWebGL2?s.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Be(w){return p!==w?(s.useProgram(w),p=w,!0):!1}const Bt={[yn]:s.FUNC_ADD,[Lo]:s.FUNC_SUBTRACT,[Do]:s.FUNC_REVERSE_SUBTRACT};if(n)Bt[Br]=s.MIN,Bt[_r]=s.MAX;else{const w=t.get("EXT_blend_minmax");w!==null&&(Bt[Br]=w.MIN_EXT,Bt[_r]=w.MAX_EXT)}const Tt={[Uo]:s.ZERO,[Io]:s.ONE,[No]:s.SRC_COLOR,[zs]:s.SRC_ALPHA,[Go]:s.SRC_ALPHA_SATURATE,[Ho]:s.DST_COLOR,[Oo]:s.DST_ALPHA,[Fo]:s.ONE_MINUS_SRC_COLOR,[Gs]:s.ONE_MINUS_SRC_ALPHA,[zo]:s.ONE_MINUS_DST_COLOR,[ko]:s.ONE_MINUS_DST_ALPHA,[Vo]:s.CONSTANT_COLOR,[Wo]:s.ONE_MINUS_CONSTANT_COLOR,[Xo]:s.CONSTANT_ALPHA,[Yo]:s.ONE_MINUS_CONSTANT_ALPHA};function ut(w,st,rt,St,_t,Xt,Yt,ae,_e,qt){if(w===cn){d===!0&&(Mt(s.BLEND),d=!1);return}if(d===!1&&(Rt(s.BLEND),d=!0),w!==Po){if(w!==y||qt!==H){if((M!==yn||A!==yn)&&(s.blendEquation(s.FUNC_ADD),M=yn,A=yn),qt)switch(w){case Zn:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pr:s.blendFunc(s.ONE,s.ONE);break;case mr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gr:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Zn:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case pr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case mr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case gr:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}T=null,C=null,b=null,W=null,x.set(0,0,0),E=0,y=w,H=qt}return}_t=_t||st,Xt=Xt||rt,Yt=Yt||St,(st!==M||_t!==A)&&(s.blendEquationSeparate(Bt[st],Bt[_t]),M=st,A=_t),(rt!==T||St!==C||Xt!==b||Yt!==W)&&(s.blendFuncSeparate(Tt[rt],Tt[St],Tt[Xt],Tt[Yt]),T=rt,C=St,b=Xt,W=Yt),(ae.equals(x)===!1||_e!==E)&&(s.blendColor(ae.r,ae.g,ae.b,_e),x.copy(ae),E=_e),y=w,H=!1}function Kt(w,st){w.side===de?Mt(s.CULL_FACE):Rt(s.CULL_FACE);let rt=w.side===Te;st&&(rt=!rt),Lt(rt),w.blending===Zn&&w.transparent===!1?ut(cn):ut(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),l.setFunc(w.depthFunc),l.setTest(w.depthTest),l.setMask(w.depthWrite),a.setMask(w.colorWrite);const St=w.stencilWrite;c.setTest(St),St&&(c.setMask(w.stencilWriteMask),c.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),c.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),I(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?Rt(s.SAMPLE_ALPHA_TO_COVERAGE):Mt(s.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(w){G!==w&&(w?s.frontFace(s.CW):s.frontFace(s.CCW),G=w)}function S(w){w!==Ro?(Rt(s.CULL_FACE),w!==tt&&(w===fr?s.cullFace(s.BACK):w===Co?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Mt(s.CULL_FACE),tt=w}function _(w){w!==R&&(V&&s.lineWidth(w),R=w)}function I(w,st,rt){w?(Rt(s.POLYGON_OFFSET_FILL),(O!==st||z!==rt)&&(s.polygonOffset(st,rt),O=st,z=rt)):Mt(s.POLYGON_OFFSET_FILL)}function Z(w){w?Rt(s.SCISSOR_TEST):Mt(s.SCISSOR_TEST)}function j(w){w===void 0&&(w=s.TEXTURE0+Y-1),Q!==w&&(s.activeTexture(w),Q=w)}function J(w,st,rt){rt===void 0&&(Q===null?rt=s.TEXTURE0+Y-1:rt=Q);let St=et[rt];St===void 0&&(St={type:void 0,texture:void 0},et[rt]=St),(St.type!==w||St.texture!==st)&&(Q!==rt&&(s.activeTexture(rt),Q=rt),s.bindTexture(w,st||At[w]),St.type=w,St.texture=st)}function dt(){const w=et[Q];w!==void 0&&w.type!==void 0&&(s.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function at(){try{s.compressedTexImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ct(){try{s.compressedTexImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function xt(){try{s.texSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Dt(){try{s.texSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function K(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Vt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ot(){try{s.texStorage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Et(){try{s.texStorage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function gt(){try{s.texImage2D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ht(){try{s.texImage3D.apply(s,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ct(w){ot.equals(w)===!1&&(s.scissor(w.x,w.y,w.z,w.w),ot.copy(w))}function Gt(w){mt.equals(w)===!1&&(s.viewport(w.x,w.y,w.z,w.w),mt.copy(w))}function Jt(w,st){let rt=u.get(st);rt===void 0&&(rt=new WeakMap,u.set(st,rt));let St=rt.get(w);St===void 0&&(St=s.getUniformBlockIndex(st,w.name),rt.set(w,St))}function It(w,st){const St=u.get(st).get(w);h.get(st)!==St&&(s.uniformBlockBinding(st,St,w.__bindingPointIndex),h.set(st,St))}function nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},Q=null,et={},m={},g=new WeakMap,B=[],p=null,d=!1,y=null,M=null,T=null,C=null,A=null,b=null,W=null,x=new Ht(0,0,0),E=0,H=!1,G=null,tt=null,R=null,O=null,z=null,ot.set(0,0,s.canvas.width,s.canvas.height),mt.set(0,0,s.canvas.width,s.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Rt,disable:Mt,bindFramebuffer:kt,drawBuffers:D,useProgram:Be,setBlending:ut,setMaterial:Kt,setFlipSided:Lt,setCullFace:S,setLineWidth:_,setPolygonOffset:I,setScissorTest:Z,activeTexture:j,bindTexture:J,unbindTexture:dt,compressedTexImage2D:at,compressedTexImage3D:ct,texImage2D:gt,texImage3D:ht,updateUBOMapping:Jt,uniformBlockBinding:It,texStorage2D:Ot,texStorage3D:Et,texSubImage2D:xt,texSubImage3D:Dt,compressedTexSubImage2D:K,compressedTexSubImage3D:Vt,scissor:Ct,viewport:Gt,reset:nt}}function Af(s,t,e,n,i,r,o){const a=i.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let u;const f=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(S,_){return m?new OffscreenCanvas(S,_):Bi("canvas")}function B(S,_,I,Z){let j=1;if((S.width>Z||S.height>Z)&&(j=Z/Math.max(S.width,S.height)),j<1||_===!0)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap){const J=_?Ks:Math.floor,dt=J(j*S.width),at=J(j*S.height);u===void 0&&(u=g(dt,at));const ct=I?g(dt,at):u;return ct.width=dt,ct.height=at,ct.getContext("2d").drawImage(S,0,0,dt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+S.width+"x"+S.height+") to ("+dt+"x"+at+")."),ct}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+S.width+"x"+S.height+")."),S;return S}function p(S){return $r(S.width)&&$r(S.height)}function d(S){return a?!1:S.wrapS!==He||S.wrapT!==He||S.minFilter!==he&&S.minFilter!==De}function y(S,_){return S.generateMipmaps&&_&&S.minFilter!==he&&S.minFilter!==De}function M(S){s.generateMipmap(S)}function T(S,_,I,Z,j=!1){if(a===!1)return _;if(S!==null){if(s[S]!==void 0)return s[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let J=_;if(_===s.RED&&(I===s.FLOAT&&(J=s.R32F),I===s.HALF_FLOAT&&(J=s.R16F),I===s.UNSIGNED_BYTE&&(J=s.R8)),_===s.RED_INTEGER&&(I===s.UNSIGNED_BYTE&&(J=s.R8UI),I===s.UNSIGNED_SHORT&&(J=s.R16UI),I===s.UNSIGNED_INT&&(J=s.R32UI),I===s.BYTE&&(J=s.R8I),I===s.SHORT&&(J=s.R16I),I===s.INT&&(J=s.R32I)),_===s.RG&&(I===s.FLOAT&&(J=s.RG32F),I===s.HALF_FLOAT&&(J=s.RG16F),I===s.UNSIGNED_BYTE&&(J=s.RG8)),_===s.RGBA){const dt=j?Ki:Wt.getTransfer(Z);I===s.FLOAT&&(J=s.RGBA32F),I===s.HALF_FLOAT&&(J=s.RGBA16F),I===s.UNSIGNED_BYTE&&(J=dt===$t?s.SRGB8_ALPHA8:s.RGBA8),I===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),I===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function C(S,_,I){return y(S,I)===!0||S.isFramebufferTexture&&S.minFilter!==he&&S.minFilter!==De?Math.log2(Math.max(_.width,_.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?_.mipmaps.length:1}function A(S){return S===he||S===vr||S===cs?s.NEAREST:s.LINEAR}function b(S){const _=S.target;_.removeEventListener("dispose",b),x(_),_.isVideoTexture&&h.delete(_)}function W(S){const _=S.target;_.removeEventListener("dispose",W),H(_)}function x(S){const _=n.get(S);if(_.__webglInit===void 0)return;const I=S.source,Z=f.get(I);if(Z){const j=Z[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&E(S),Object.keys(Z).length===0&&f.delete(I)}n.remove(S)}function E(S){const _=n.get(S);s.deleteTexture(_.__webglTexture);const I=S.source,Z=f.get(I);delete Z[_.__cacheKey],o.memory.textures--}function H(S){const _=S.texture,I=n.get(S),Z=n.get(_);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(I.__webglFramebuffer[j]))for(let J=0;J<I.__webglFramebuffer[j].length;J++)s.deleteFramebuffer(I.__webglFramebuffer[j][J]);else s.deleteFramebuffer(I.__webglFramebuffer[j]);I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer[j])}else{if(Array.isArray(I.__webglFramebuffer))for(let j=0;j<I.__webglFramebuffer.length;j++)s.deleteFramebuffer(I.__webglFramebuffer[j]);else s.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&s.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&s.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let j=0;j<I.__webglColorRenderbuffer.length;j++)I.__webglColorRenderbuffer[j]&&s.deleteRenderbuffer(I.__webglColorRenderbuffer[j]);I.__webglDepthRenderbuffer&&s.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(S.isWebGLMultipleRenderTargets)for(let j=0,J=_.length;j<J;j++){const dt=n.get(_[j]);dt.__webglTexture&&(s.deleteTexture(dt.__webglTexture),o.memory.textures--),n.remove(_[j])}n.remove(_),n.remove(S)}let G=0;function tt(){G=0}function R(){const S=G;return S>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+i.maxTextures),G+=1,S}function O(S){const _=[];return _.push(S.wrapS),_.push(S.wrapT),_.push(S.wrapR||0),_.push(S.magFilter),_.push(S.minFilter),_.push(S.anisotropy),_.push(S.internalFormat),_.push(S.format),_.push(S.type),_.push(S.generateMipmaps),_.push(S.premultiplyAlpha),_.push(S.flipY),_.push(S.unpackAlignment),_.push(S.colorSpace),_.join()}function z(S,_){const I=n.get(S);if(S.isVideoTexture&&Kt(S),S.isRenderTargetTexture===!1&&S.version>0&&I.__version!==S.version){const Z=S.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(I,S,_);return}}e.bindTexture(s.TEXTURE_2D,I.__webglTexture,s.TEXTURE0+_)}function Y(S,_){const I=n.get(S);if(S.version>0&&I.__version!==S.version){ot(I,S,_);return}e.bindTexture(s.TEXTURE_2D_ARRAY,I.__webglTexture,s.TEXTURE0+_)}function V(S,_){const I=n.get(S);if(S.version>0&&I.__version!==S.version){ot(I,S,_);return}e.bindTexture(s.TEXTURE_3D,I.__webglTexture,s.TEXTURE0+_)}function X(S,_){const I=n.get(S);if(S.version>0&&I.__version!==S.version){mt(I,S,_);return}e.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+_)}const q={[Xs]:s.REPEAT,[He]:s.CLAMP_TO_EDGE,[Ys]:s.MIRRORED_REPEAT},Q={[he]:s.NEAREST,[vr]:s.NEAREST_MIPMAP_NEAREST,[cs]:s.NEAREST_MIPMAP_LINEAR,[De]:s.LINEAR,[ll]:s.LINEAR_MIPMAP_NEAREST,[mi]:s.LINEAR_MIPMAP_LINEAR},et={[xl]:s.NEVER,[bl]:s.ALWAYS,[Ml]:s.LESS,[Qa]:s.LEQUAL,[Sl]:s.EQUAL,[Tl]:s.GEQUAL,[yl]:s.GREATER,[El]:s.NOTEQUAL};function k(S,_,I){if(I?(s.texParameteri(S,s.TEXTURE_WRAP_S,q[_.wrapS]),s.texParameteri(S,s.TEXTURE_WRAP_T,q[_.wrapT]),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,q[_.wrapR]),s.texParameteri(S,s.TEXTURE_MAG_FILTER,Q[_.magFilter]),s.texParameteri(S,s.TEXTURE_MIN_FILTER,Q[_.minFilter])):(s.texParameteri(S,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(S,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(S===s.TEXTURE_3D||S===s.TEXTURE_2D_ARRAY)&&s.texParameteri(S,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(_.wrapS!==He||_.wrapT!==He)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(S,s.TEXTURE_MAG_FILTER,A(_.magFilter)),s.texParameteri(S,s.TEXTURE_MIN_FILTER,A(_.minFilter)),_.minFilter!==he&&_.minFilter!==De&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),_.compareFunction&&(s.texParameteri(S,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(S,s.TEXTURE_COMPARE_FUNC,et[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const Z=t.get("EXT_texture_filter_anisotropic");if(_.magFilter===he||_.minFilter!==cs&&_.minFilter!==mi||_.type===ln&&t.has("OES_texture_float_linear")===!1||a===!1&&_.type===gi&&t.has("OES_texture_half_float_linear")===!1)return;(_.anisotropy>1||n.get(_).__currentAnisotropy)&&(s.texParameterf(S,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy)}}function $(S,_){let I=!1;S.__webglInit===void 0&&(S.__webglInit=!0,_.addEventListener("dispose",b));const Z=_.source;let j=f.get(Z);j===void 0&&(j={},f.set(Z,j));const J=O(_);if(J!==S.__cacheKey){j[J]===void 0&&(j[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,I=!0),j[J].usedTimes++;const dt=j[S.__cacheKey];dt!==void 0&&(j[S.__cacheKey].usedTimes--,dt.usedTimes===0&&E(_)),S.__cacheKey=J,S.__webglTexture=j[J].texture}return I}function ot(S,_,I){let Z=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Z=s.TEXTURE_3D);const j=$(S,_),J=_.source;e.bindTexture(Z,S.__webglTexture,s.TEXTURE0+I);const dt=n.get(J);if(J.version!==dt.__version||j===!0){e.activeTexture(s.TEXTURE0+I);const at=Wt.getPrimaries(Wt.workingColorSpace),ct=_.colorSpace===Ue?null:Wt.getPrimaries(_.colorSpace),xt=_.colorSpace===Ue||at===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Dt=d(_)&&p(_.image)===!1;let K=B(_.image,Dt,!1,i.maxTextureSize);K=Lt(_,K);const Vt=p(K)||a,Ot=r.convert(_.format,_.colorSpace);let Et=r.convert(_.type),gt=T(_.internalFormat,Ot,Et,_.colorSpace,_.isVideoTexture);k(Z,_,Vt);let ht;const Ct=_.mipmaps,Gt=a&&_.isVideoTexture!==!0&&gt!==ja,Jt=dt.__version===void 0||j===!0,It=C(_,K,Vt);if(_.isDepthTexture)gt=s.DEPTH_COMPONENT,a?_.type===ln?gt=s.DEPTH_COMPONENT32F:_.type===on?gt=s.DEPTH_COMPONENT24:_.type===bn?gt=s.DEPTH24_STENCIL8:gt=s.DEPTH_COMPONENT16:_.type===ln&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),_.format===An&&gt===s.DEPTH_COMPONENT&&_.type!==Qs&&_.type!==on&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),_.type=on,Et=r.convert(_.type)),_.format===ei&&gt===s.DEPTH_COMPONENT&&(gt=s.DEPTH_STENCIL,_.type!==bn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),_.type=bn,Et=r.convert(_.type))),Jt&&(Gt?e.texStorage2D(s.TEXTURE_2D,1,gt,K.width,K.height):e.texImage2D(s.TEXTURE_2D,0,gt,K.width,K.height,0,Ot,Et,null));else if(_.isDataTexture)if(Ct.length>0&&Vt){Gt&&Jt&&e.texStorage2D(s.TEXTURE_2D,It,gt,Ct[0].width,Ct[0].height);for(let nt=0,w=Ct.length;nt<w;nt++)ht=Ct[nt],Gt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ht.width,ht.height,Ot,Et,ht.data):e.texImage2D(s.TEXTURE_2D,nt,gt,ht.width,ht.height,0,Ot,Et,ht.data);_.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(s.TEXTURE_2D,It,gt,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,K.width,K.height,Ot,Et,K.data)):e.texImage2D(s.TEXTURE_2D,0,gt,K.width,K.height,0,Ot,Et,K.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Gt&&Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,gt,Ct[0].width,Ct[0].height,K.depth);for(let nt=0,w=Ct.length;nt<w;nt++)ht=Ct[nt],_.format!==ze?Ot!==null?Gt?e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,K.depth,Ot,ht.data,0,0):e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,nt,gt,ht.width,ht.height,K.depth,0,ht.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage3D(s.TEXTURE_2D_ARRAY,nt,0,0,0,ht.width,ht.height,K.depth,Ot,Et,ht.data):e.texImage3D(s.TEXTURE_2D_ARRAY,nt,gt,ht.width,ht.height,K.depth,0,Ot,Et,ht.data)}else{Gt&&Jt&&e.texStorage2D(s.TEXTURE_2D,It,gt,Ct[0].width,Ct[0].height);for(let nt=0,w=Ct.length;nt<w;nt++)ht=Ct[nt],_.format!==ze?Ot!==null?Gt?e.compressedTexSubImage2D(s.TEXTURE_2D,nt,0,0,ht.width,ht.height,Ot,ht.data):e.compressedTexImage2D(s.TEXTURE_2D,nt,gt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Gt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,ht.width,ht.height,Ot,Et,ht.data):e.texImage2D(s.TEXTURE_2D,nt,gt,ht.width,ht.height,0,Ot,Et,ht.data)}else if(_.isDataArrayTexture)Gt?(Jt&&e.texStorage3D(s.TEXTURE_2D_ARRAY,It,gt,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,Ot,Et,K.data)):e.texImage3D(s.TEXTURE_2D_ARRAY,0,gt,K.width,K.height,K.depth,0,Ot,Et,K.data);else if(_.isData3DTexture)Gt?(Jt&&e.texStorage3D(s.TEXTURE_3D,It,gt,K.width,K.height,K.depth),e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,Ot,Et,K.data)):e.texImage3D(s.TEXTURE_3D,0,gt,K.width,K.height,K.depth,0,Ot,Et,K.data);else if(_.isFramebufferTexture){if(Jt)if(Gt)e.texStorage2D(s.TEXTURE_2D,It,gt,K.width,K.height);else{let nt=K.width,w=K.height;for(let st=0;st<It;st++)e.texImage2D(s.TEXTURE_2D,st,gt,nt,w,0,Ot,Et,null),nt>>=1,w>>=1}}else if(Ct.length>0&&Vt){Gt&&Jt&&e.texStorage2D(s.TEXTURE_2D,It,gt,Ct[0].width,Ct[0].height);for(let nt=0,w=Ct.length;nt<w;nt++)ht=Ct[nt],Gt?e.texSubImage2D(s.TEXTURE_2D,nt,0,0,Ot,Et,ht):e.texImage2D(s.TEXTURE_2D,nt,gt,Ot,Et,ht);_.generateMipmaps=!1}else Gt?(Jt&&e.texStorage2D(s.TEXTURE_2D,It,gt,K.width,K.height),e.texSubImage2D(s.TEXTURE_2D,0,0,0,Ot,Et,K)):e.texImage2D(s.TEXTURE_2D,0,gt,Ot,Et,K);y(_,Vt)&&M(Z),dt.__version=J.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function mt(S,_,I){if(_.image.length!==6)return;const Z=$(S,_),j=_.source;e.bindTexture(s.TEXTURE_CUBE_MAP,S.__webglTexture,s.TEXTURE0+I);const J=n.get(j);if(j.version!==J.__version||Z===!0){e.activeTexture(s.TEXTURE0+I);const dt=Wt.getPrimaries(Wt.workingColorSpace),at=_.colorSpace===Ue?null:Wt.getPrimaries(_.colorSpace),ct=_.colorSpace===Ue||dt===at?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const xt=_.isCompressedTexture||_.image[0].isCompressedTexture,Dt=_.image[0]&&_.image[0].isDataTexture,K=[];for(let nt=0;nt<6;nt++)!xt&&!Dt?K[nt]=B(_.image[nt],!1,!0,i.maxCubemapSize):K[nt]=Dt?_.image[nt].image:_.image[nt],K[nt]=Lt(_,K[nt]);const Vt=K[0],Ot=p(Vt)||a,Et=r.convert(_.format,_.colorSpace),gt=r.convert(_.type),ht=T(_.internalFormat,Et,gt,_.colorSpace),Ct=a&&_.isVideoTexture!==!0,Gt=J.__version===void 0||Z===!0;let Jt=C(_,Vt,Ot);k(s.TEXTURE_CUBE_MAP,_,Ot);let It;if(xt){Ct&&Gt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,Jt,ht,Vt.width,Vt.height);for(let nt=0;nt<6;nt++){It=K[nt].mipmaps;for(let w=0;w<It.length;w++){const st=It[w];_.format!==ze?Et!==null?Ct?e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,w,0,0,st.width,st.height,Et,st.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,w,ht,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,w,0,0,st.width,st.height,Et,gt,st.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,w,ht,st.width,st.height,0,Et,gt,st.data)}}}else{It=_.mipmaps,Ct&&Gt&&(It.length>0&&Jt++,e.texStorage2D(s.TEXTURE_CUBE_MAP,Jt,ht,K[0].width,K[0].height));for(let nt=0;nt<6;nt++)if(Dt){Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,K[nt].width,K[nt].height,Et,gt,K[nt].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ht,K[nt].width,K[nt].height,0,Et,gt,K[nt].data);for(let w=0;w<It.length;w++){const rt=It[w].image[nt].image;Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,w+1,0,0,rt.width,rt.height,Et,gt,rt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,w+1,ht,rt.width,rt.height,0,Et,gt,rt.data)}}else{Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Et,gt,K[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ht,Et,gt,K[nt]);for(let w=0;w<It.length;w++){const st=It[w];Ct?e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,w+1,0,0,Et,gt,st.image[nt]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+nt,w+1,ht,Et,gt,st.image[nt])}}}y(_,Ot)&&M(s.TEXTURE_CUBE_MAP),J.__version=j.version,_.onUpdate&&_.onUpdate(_)}S.__version=_.version}function pt(S,_,I,Z,j,J){const dt=r.convert(I.format,I.colorSpace),at=r.convert(I.type),ct=T(I.internalFormat,dt,at,I.colorSpace);if(!n.get(_).__hasExternalTextures){const Dt=Math.max(1,_.width>>J),K=Math.max(1,_.height>>J);j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?e.texImage3D(j,J,ct,Dt,K,_.depth,0,dt,at,null):e.texImage2D(j,J,ct,Dt,K,0,dt,at,null)}e.bindFramebuffer(s.FRAMEBUFFER,S),ut(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,j,n.get(I).__webglTexture,0,Tt(_)):(j===s.TEXTURE_2D||j>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,j,n.get(I).__webglTexture,J),e.bindFramebuffer(s.FRAMEBUFFER,null)}function At(S,_,I){if(s.bindRenderbuffer(s.RENDERBUFFER,S),_.depthBuffer&&!_.stencilBuffer){let Z=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(I||ut(_)){const j=_.depthTexture;j&&j.isDepthTexture&&(j.type===ln?Z=s.DEPTH_COMPONENT32F:j.type===on&&(Z=s.DEPTH_COMPONENT24));const J=Tt(_);ut(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,Z,_.width,_.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,Z,_.width,_.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,_.width,_.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,S)}else if(_.depthBuffer&&_.stencilBuffer){const Z=Tt(_);I&&ut(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,_.width,_.height):ut(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,S)}else{const Z=_.isWebGLMultipleRenderTargets===!0?_.texture:[_.texture];for(let j=0;j<Z.length;j++){const J=Z[j],dt=r.convert(J.format,J.colorSpace),at=r.convert(J.type),ct=T(J.internalFormat,dt,at,J.colorSpace),xt=Tt(_);I&&ut(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt,ct,_.width,_.height):ut(_)?l.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt,ct,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ct,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Rt(S,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,S),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),z(_.depthTexture,0);const Z=n.get(_.depthTexture).__webglTexture,j=Tt(_);if(_.depthTexture.format===An)ut(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(_.depthTexture.format===ei)ut(_)?l.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,j):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Mt(S){const _=n.get(S),I=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!_.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");Rt(_.__webglFramebuffer,S)}else if(I){_.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[Z]),_.__webglDepthbuffer[Z]=s.createRenderbuffer(),At(_.__webglDepthbuffer[Z],S,!1)}else e.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer=s.createRenderbuffer(),At(_.__webglDepthbuffer,S,!1);e.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(S,_,I){const Z=n.get(S);_!==void 0&&pt(Z.__webglFramebuffer,S,S.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),I!==void 0&&Mt(S)}function D(S){const _=S.texture,I=n.get(S),Z=n.get(_);S.addEventListener("dispose",W),S.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=_.version,o.memory.textures++);const j=S.isWebGLCubeRenderTarget===!0,J=S.isWebGLMultipleRenderTargets===!0,dt=p(S)||a;if(j){I.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer[at]=[];for(let ct=0;ct<_.mipmaps.length;ct++)I.__webglFramebuffer[at][ct]=s.createFramebuffer()}else I.__webglFramebuffer[at]=s.createFramebuffer()}else{if(a&&_.mipmaps&&_.mipmaps.length>0){I.__webglFramebuffer=[];for(let at=0;at<_.mipmaps.length;at++)I.__webglFramebuffer[at]=s.createFramebuffer()}else I.__webglFramebuffer=s.createFramebuffer();if(J)if(i.drawBuffers){const at=S.texture;for(let ct=0,xt=at.length;ct<xt;ct++){const Dt=n.get(at[ct]);Dt.__webglTexture===void 0&&(Dt.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&S.samples>0&&ut(S)===!1){const at=J?_:[_];I.__webglMultisampledFramebuffer=s.createFramebuffer(),I.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let ct=0;ct<at.length;ct++){const xt=at[ct];I.__webglColorRenderbuffer[ct]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,I.__webglColorRenderbuffer[ct]);const Dt=r.convert(xt.format,xt.colorSpace),K=r.convert(xt.type),Vt=T(xt.internalFormat,Dt,K,xt.colorSpace,S.isXRRenderTarget===!0),Ot=Tt(S);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ot,Vt,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ct,s.RENDERBUFFER,I.__webglColorRenderbuffer[ct])}s.bindRenderbuffer(s.RENDERBUFFER,null),S.depthBuffer&&(I.__webglDepthRenderbuffer=s.createRenderbuffer(),At(I.__webglDepthRenderbuffer,S,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(j){e.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),k(s.TEXTURE_CUBE_MAP,_,dt);for(let at=0;at<6;at++)if(a&&_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)pt(I.__webglFramebuffer[at][ct],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else pt(I.__webglFramebuffer[at],S,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);y(_,dt)&&M(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(J){const at=S.texture;for(let ct=0,xt=at.length;ct<xt;ct++){const Dt=at[ct],K=n.get(Dt);e.bindTexture(s.TEXTURE_2D,K.__webglTexture),k(s.TEXTURE_2D,Dt,dt),pt(I.__webglFramebuffer,S,Dt,s.COLOR_ATTACHMENT0+ct,s.TEXTURE_2D,0),y(Dt,dt)&&M(s.TEXTURE_2D)}e.unbindTexture()}else{let at=s.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(a?at=S.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,Z.__webglTexture),k(at,_,dt),a&&_.mipmaps&&_.mipmaps.length>0)for(let ct=0;ct<_.mipmaps.length;ct++)pt(I.__webglFramebuffer[ct],S,_,s.COLOR_ATTACHMENT0,at,ct);else pt(I.__webglFramebuffer,S,_,s.COLOR_ATTACHMENT0,at,0);y(_,dt)&&M(at),e.unbindTexture()}S.depthBuffer&&Mt(S)}function Be(S){const _=p(S)||a,I=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let Z=0,j=I.length;Z<j;Z++){const J=I[Z];if(y(J,_)){const dt=S.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,at=n.get(J).__webglTexture;e.bindTexture(dt,at),M(dt),e.unbindTexture()}}}function Bt(S){if(a&&S.samples>0&&ut(S)===!1){const _=S.isWebGLMultipleRenderTargets?S.texture:[S.texture],I=S.width,Z=S.height;let j=s.COLOR_BUFFER_BIT;const J=[],dt=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,at=n.get(S),ct=S.isWebGLMultipleRenderTargets===!0;if(ct)for(let xt=0;xt<_.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let xt=0;xt<_.length;xt++){J.push(s.COLOR_ATTACHMENT0+xt),S.depthBuffer&&J.push(dt);const Dt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(Dt===!1&&(S.depthBuffer&&(j|=s.DEPTH_BUFFER_BIT),S.stencilBuffer&&(j|=s.STENCIL_BUFFER_BIT)),ct&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,at.__webglColorRenderbuffer[xt]),Dt===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[dt]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[dt])),ct){const K=n.get(_[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,K,0)}s.blitFramebuffer(0,0,I,Z,0,0,I,Z,j,s.NEAREST),c&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J)}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ct)for(let xt=0;xt<_.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,at.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,at.__webglColorRenderbuffer[xt]);const Dt=n.get(_[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,at.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Dt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function Tt(S){return Math.min(i.maxSamples,S.samples)}function ut(S){const _=n.get(S);return a&&S.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Kt(S){const _=o.render.frame;h.get(S)!==_&&(h.set(S,_),S.update())}function Lt(S,_){const I=S.colorSpace,Z=S.format,j=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||S.format===qs||I!==tn&&I!==Ue&&(Wt.getTransfer(I)===$t?a===!1?t.has("EXT_sRGB")===!0&&Z===ze?(S.format=qs,S.minFilter=De,S.generateMipmaps=!1):_=eo.sRGBToLinear(_):(Z!==ze||j!==un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",I)),_}this.allocateTextureUnit=R,this.resetTextureUnits=tt,this.setTexture2D=z,this.setTexture2DArray=Y,this.setTexture3D=V,this.setTextureCube=X,this.rebindTextures=kt,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ut}function wf(s,t,e){const n=e.isWebGL2;function i(r,o=Ue){let a;const l=Wt.getTransfer(o);if(r===un)return s.UNSIGNED_BYTE;if(r===Xa)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Ya)return s.UNSIGNED_SHORT_5_5_5_1;if(r===cl)return s.BYTE;if(r===hl)return s.SHORT;if(r===Qs)return s.UNSIGNED_SHORT;if(r===Wa)return s.INT;if(r===on)return s.UNSIGNED_INT;if(r===ln)return s.FLOAT;if(r===gi)return n?s.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===ul)return s.ALPHA;if(r===ze)return s.RGBA;if(r===dl)return s.LUMINANCE;if(r===fl)return s.LUMINANCE_ALPHA;if(r===An)return s.DEPTH_COMPONENT;if(r===ei)return s.DEPTH_STENCIL;if(r===qs)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===pl)return s.RED;if(r===qa)return s.RED_INTEGER;if(r===ml)return s.RG;if(r===$a)return s.RG_INTEGER;if(r===Ka)return s.RGBA_INTEGER;if(r===hs||r===us||r===ds||r===fs)if(l===$t)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===hs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===fs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===hs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===us)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===fs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===xr||r===Mr||r===Sr||r===yr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===xr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Mr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===yr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ja)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Er||r===Tr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Er)return l===$t?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Tr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===br||r===Ar||r===wr||r===Rr||r===Cr||r===Pr||r===Lr||r===Dr||r===Ur||r===Ir||r===Nr||r===Fr||r===Or||r===kr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===br)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ar)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===wr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Cr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Pr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Lr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Ur)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ir)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Nr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Fr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Or)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kr)return l===$t?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ps||r===Hr||r===zr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===ps)return l===$t?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===zr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===gl||r===Gr||r===Vr||r===Wr)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===ps)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Gr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Vr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wr)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===bn?n?s.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Rf extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Tn extends ie{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Cf={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const B of t.hand.values()){const p=e.getJointPose(B,n),d=this._getHandJoint(c,B);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Cf)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Tn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Pf extends ii{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,m=null,g=null;const B=e.getContextAttributes();let p=null,d=null;const y=[],M=[],T=new zt;let C=null;const A=new ke;A.layers.enable(1),A.viewport=new ce;const b=new ke;b.layers.enable(2),b.viewport=new ce;const W=[A,b],x=new Rf;x.layers.enable(1),x.layers.enable(2);let E=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let $=y[k];return $===void 0&&($=new ks,y[k]=$),$.getTargetRaySpace()},this.getControllerGrip=function(k){let $=y[k];return $===void 0&&($=new ks,y[k]=$),$.getGripSpace()},this.getHand=function(k){let $=y[k];return $===void 0&&($=new ks,y[k]=$),$.getHandSpace()};function G(k){const $=M.indexOf(k.inputSource);if($===-1)return;const ot=y[$];ot!==void 0&&(ot.update(k.inputSource,k.frame,c||o),ot.dispatchEvent({type:k.type,data:k.inputSource}))}function tt(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",tt),i.removeEventListener("inputsourceschange",R);for(let k=0;k<y.length;k++){const $=M[k];$!==null&&(M[k]=null,y[k].disconnect($))}E=null,H=null,t.setRenderTarget(p),m=null,f=null,u=null,i=null,d=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){r=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){a=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(k){if(i=k,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",tt),i.addEventListener("inputsourceschange",R),B.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const $={antialias:i.renderState.layers===void 0?B.antialias:!0,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),d=new Rn(m.framebufferWidth,m.framebufferHeight,{format:ze,type:un,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil})}else{let $=null,ot=null,mt=null;B.depth&&(mt=B.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=B.stencil?ei:An,ot=B.stencil?bn:on);const pt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(pt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Rn(f.textureWidth,f.textureHeight,{format:ze,type:un,depthTexture:new po(f.textureWidth,f.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0});const At=t.properties.get(d);At.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function R(k){for(let $=0;$<k.removed.length;$++){const ot=k.removed[$],mt=M.indexOf(ot);mt>=0&&(M[mt]=null,y[mt].disconnect(ot))}for(let $=0;$<k.added.length;$++){const ot=k.added[$];let mt=M.indexOf(ot);if(mt===-1){for(let At=0;At<y.length;At++)if(At>=M.length){M.push(ot),mt=At;break}else if(M[At]===null){M[At]=ot,mt=At;break}if(mt===-1)break}const pt=y[mt];pt&&pt.connect(ot)}}const O=new L,z=new L;function Y(k,$,ot){O.setFromMatrixPosition($.matrixWorld),z.setFromMatrixPosition(ot.matrixWorld);const mt=O.distanceTo(z),pt=$.projectionMatrix.elements,At=ot.projectionMatrix.elements,Rt=pt[14]/(pt[10]-1),Mt=pt[14]/(pt[10]+1),kt=(pt[9]+1)/pt[5],D=(pt[9]-1)/pt[5],Be=(pt[8]-1)/pt[0],Bt=(At[8]+1)/At[0],Tt=Rt*Be,ut=Rt*Bt,Kt=mt/(-Be+Bt),Lt=Kt*-Be;$.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Lt),k.translateZ(Kt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const S=Rt+Kt,_=Mt+Kt,I=Tt-Lt,Z=ut+(mt-Lt),j=kt*Mt/_*S,J=D*Mt/_*S;k.projectionMatrix.makePerspective(I,Z,j,J,S,_),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}function V(k,$){$===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices($.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(i===null)return;x.near=b.near=A.near=k.near,x.far=b.far=A.far=k.far,(E!==x.near||H!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,H=x.far);const $=k.parent,ot=x.cameras;V(x,$);for(let mt=0;mt<ot.length;mt++)V(ot[mt],$);ot.length===2?Y(x,A,b):x.projectionMatrix.copy(A.projectionMatrix),X(k,x,$)};function X(k,$,ot){ot===null?k.matrix.copy($.matrixWorld):(k.matrix.copy(ot.matrixWorld),k.matrix.invert(),k.matrix.multiply($.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy($.projectionMatrix),k.projectionMatrixInverse.copy($.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=$s*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=k)};let q=null;function Q(k,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const ot=h.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let mt=!1;ot.length!==x.cameras.length&&(x.cameras.length=0,mt=!0);for(let pt=0;pt<ot.length;pt++){const At=ot[pt];let Rt=null;if(m!==null)Rt=m.getViewport(At);else{const kt=u.getViewSubImage(f,At);Rt=kt.viewport,pt===0&&(t.setRenderTargetTextures(d,kt.colorTexture,f.ignoreDepthValues?void 0:kt.depthStencilTexture),t.setRenderTarget(d))}let Mt=W[pt];Mt===void 0&&(Mt=new ke,Mt.layers.enable(pt),Mt.viewport=new ce,W[pt]=Mt),Mt.matrix.fromArray(At.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(At.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),pt===0&&(x.matrix.copy(Mt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),mt===!0&&x.cameras.push(Mt)}}for(let ot=0;ot<y.length;ot++){const mt=M[ot],pt=y[ot];mt!==null&&pt!==void 0&&pt.update(mt,$,c||o)}q&&q(k,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const et=new fo;et.setAnimationLoop(Q),this.setAnimationLoop=function(k){q=k},this.dispose=function(){}}}function Lf(s,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,co(s)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function i(p,d,y,M,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),u(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,T)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),B(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,y,M):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Te&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Te&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const y=t.get(d).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,y,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*y,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,y){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Te&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function B(p,d){const y=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Df(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(y,M){const T=M.program;n.uniformBlockBinding(y,T)}function c(y,M){let T=i[y.id];T===void 0&&(g(y),T=h(y),i[y.id]=T,y.addEventListener("dispose",p));const C=M.program;n.updateUBOMapping(y,C);const A=t.render.frame;r[y.id]!==A&&(f(y),r[y.id]=A)}function h(y){const M=u();y.__bindingPointIndex=M;const T=s.createBuffer(),C=y.__size,A=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,T),s.bufferData(s.UNIFORM_BUFFER,C,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,T),T}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const M=i[y.id],T=y.uniforms,C=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let A=0,b=T.length;A<b;A++){const W=Array.isArray(T[A])?T[A]:[T[A]];for(let x=0,E=W.length;x<E;x++){const H=W[x];if(m(H,A,x,C)===!0){const G=H.__offset,tt=Array.isArray(H.value)?H.value:[H.value];let R=0;for(let O=0;O<tt.length;O++){const z=tt[O],Y=B(z);typeof z=="number"||typeof z=="boolean"?(H.__data[0]=z,s.bufferSubData(s.UNIFORM_BUFFER,G+R,H.__data)):z.isMatrix3?(H.__data[0]=z.elements[0],H.__data[1]=z.elements[1],H.__data[2]=z.elements[2],H.__data[3]=0,H.__data[4]=z.elements[3],H.__data[5]=z.elements[4],H.__data[6]=z.elements[5],H.__data[7]=0,H.__data[8]=z.elements[6],H.__data[9]=z.elements[7],H.__data[10]=z.elements[8],H.__data[11]=0):(z.toArray(H.__data,R),R+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,G,H.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(y,M,T,C){const A=y.value,b=M+"_"+T;if(C[b]===void 0)return typeof A=="number"||typeof A=="boolean"?C[b]=A:C[b]=A.clone(),!0;{const W=C[b];if(typeof A=="number"||typeof A=="boolean"){if(W!==A)return C[b]=A,!0}else if(W.equals(A)===!1)return W.copy(A),!0}return!1}function g(y){const M=y.uniforms;let T=0;const C=16;for(let b=0,W=M.length;b<W;b++){const x=Array.isArray(M[b])?M[b]:[M[b]];for(let E=0,H=x.length;E<H;E++){const G=x[E],tt=Array.isArray(G.value)?G.value:[G.value];for(let R=0,O=tt.length;R<O;R++){const z=tt[R],Y=B(z),V=T%C;V!==0&&C-V<Y.boundary&&(T+=C-V),G.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=T,T+=Y.storage}}}const A=T%C;return A>0&&(T+=C-A),y.__size=T,y.__cache={},this}function B(y){const M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function p(y){const M=y.target;M.removeEventListener("dispose",p);const T=o.indexOf(M.__bindingPointIndex);o.splice(T,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function d(){for(const y in i)s.deleteBuffer(i[y]);o=[],i={},r={}}return{bind:l,update:c,dispose:d}}class xo{constructor(t={}){const{canvas:e=wl(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),g=new Int32Array(4);let B=null,p=null;const d=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=hn,this.toneMappingExposure=1;const M=this;let T=!1,C=0,A=0,b=null,W=-1,x=null;const E=new ce,H=new ce;let G=null;const tt=new Ht(0);let R=0,O=e.width,z=e.height,Y=1,V=null,X=null;const q=new ce(0,0,O,z),Q=new ce(0,0,O,z);let et=!1;const k=new er;let $=!1,ot=!1,mt=null;const pt=new ne,At=new zt,Rt=new L,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return b===null?Y:1}let D=n;function Be(v,P){for(let N=0;N<v.length;N++){const F=v[N],U=e.getContext(F,P);if(U!==null)return U}return null}try{const v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Js}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",w,!1),e.addEventListener("webglcontextcreationerror",st,!1),D===null){const P=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&P.shift(),D=Be(P,v),D===null)throw Be(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Bt,Tt,ut,Kt,Lt,S,_,I,Z,j,J,dt,at,ct,xt,Dt,K,Vt,Ot,Et,gt,ht,Ct,Gt;function Jt(){Bt=new Gu(D),Tt=new Nu(D,Bt,t),Bt.init(Tt),ht=new wf(D,Bt,Tt),ut=new bf(D,Bt,Tt),Kt=new Xu(D),Lt=new df,S=new Af(D,Bt,ut,Lt,Tt,ht,Kt),_=new Ou(M),I=new zu(M),Z=new Ql(D,Tt),Ct=new Uu(D,Bt,Z,Tt),j=new Vu(D,Z,Kt,Ct),J=new Ku(D,j,Z,Kt),Ot=new $u(D,Tt,S),Dt=new Fu(Lt),dt=new uf(M,_,I,Bt,Tt,Ct,Dt),at=new Lf(M,Lt),ct=new pf,xt=new xf(Bt,Tt),Vt=new Du(M,_,I,ut,J,f,l),K=new Tf(M,J,Tt),Gt=new Df(D,Kt,Tt,ut),Et=new Iu(D,Bt,Kt,Tt),gt=new Wu(D,Bt,Kt,Tt),Kt.programs=dt.programs,M.capabilities=Tt,M.extensions=Bt,M.properties=Lt,M.renderLists=ct,M.shadowMap=K,M.state=ut,M.info=Kt}Jt();const It=new Pf(M,D);this.xr=It,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const v=Bt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Bt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(v){v!==void 0&&(Y=v,this.setSize(O,z,!1))},this.getSize=function(v){return v.set(O,z)},this.setSize=function(v,P,N=!0){if(It.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=v,z=P,e.width=Math.floor(v*Y),e.height=Math.floor(P*Y),N===!0&&(e.style.width=v+"px",e.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(O*Y,z*Y).floor()},this.setDrawingBufferSize=function(v,P,N){O=v,z=P,Y=N,e.width=Math.floor(v*N),e.height=Math.floor(P*N),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(E)},this.getViewport=function(v){return v.copy(q)},this.setViewport=function(v,P,N,F){v.isVector4?q.set(v.x,v.y,v.z,v.w):q.set(v,P,N,F),ut.viewport(E.copy(q).multiplyScalar(Y).floor())},this.getScissor=function(v){return v.copy(Q)},this.setScissor=function(v,P,N,F){v.isVector4?Q.set(v.x,v.y,v.z,v.w):Q.set(v,P,N,F),ut.scissor(H.copy(Q).multiplyScalar(Y).floor())},this.getScissorTest=function(){return et},this.setScissorTest=function(v){ut.setScissorTest(et=v)},this.setOpaqueSort=function(v){V=v},this.setTransparentSort=function(v){X=v},this.getClearColor=function(v){return v.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(v=!0,P=!0,N=!0){let F=0;if(v){let U=!1;if(b!==null){const lt=b.texture.format;U=lt===Ka||lt===$a||lt===qa}if(U){const lt=b.texture.type,ft=lt===un||lt===on||lt===Qs||lt===bn||lt===Xa||lt===Ya,vt=Vt.getClearColor(),yt=Vt.getClearAlpha(),Ut=vt.r,bt=vt.g,wt=vt.b;ft?(m[0]=Ut,m[1]=bt,m[2]=wt,m[3]=yt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Ut,g[1]=bt,g[2]=wt,g[3]=yt,D.clearBufferiv(D.COLOR,0,g))}else F|=D.COLOR_BUFFER_BIT}P&&(F|=D.DEPTH_BUFFER_BIT),N&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",w,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ct.dispose(),xt.dispose(),Lt.dispose(),_.dispose(),I.dispose(),J.dispose(),Ct.dispose(),Gt.dispose(),dt.dispose(),It.dispose(),It.removeEventListener("sessionstart",_e),It.removeEventListener("sessionend",qt),mt&&(mt.dispose(),mt=null),ve.stop()};function nt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function w(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const v=Kt.autoReset,P=K.enabled,N=K.autoUpdate,F=K.needsUpdate,U=K.type;Jt(),Kt.autoReset=v,K.enabled=P,K.autoUpdate=N,K.needsUpdate=F,K.type=U}function st(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function rt(v){const P=v.target;P.removeEventListener("dispose",rt),St(P)}function St(v){_t(v),Lt.remove(v)}function _t(v){const P=Lt.get(v).programs;P!==void 0&&(P.forEach(function(N){dt.releaseProgram(N)}),v.isShaderMaterial&&dt.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,N,F,U,lt){P===null&&(P=Mt);const ft=U.isMesh&&U.matrixWorld.determinant()<0,vt=To(v,P,N,F,U);ut.setMaterial(F,ft);let yt=N.index,Ut=1;if(F.wireframe===!0){if(yt=j.getWireframeAttribute(N),yt===void 0)return;Ut=2}const bt=N.drawRange,wt=N.attributes.position;let te=bt.start*Ut,be=(bt.start+bt.count)*Ut;lt!==null&&(te=Math.max(te,lt.start*Ut),be=Math.min(be,(lt.start+lt.count)*Ut)),yt!==null?(te=Math.max(te,0),be=Math.min(be,yt.count)):wt!=null&&(te=Math.max(te,0),be=Math.min(be,wt.count));const oe=be-te;if(oe<0||oe===1/0)return;Ct.setup(U,F,vt,N,yt);let Xe,jt=Et;if(yt!==null&&(Xe=Z.get(yt),jt=gt,jt.setIndex(Xe)),U.isMesh)F.wireframe===!0?(ut.setLineWidth(F.wireframeLinewidth*kt()),jt.setMode(D.LINES)):jt.setMode(D.TRIANGLES);else if(U.isLine){let Nt=F.linewidth;Nt===void 0&&(Nt=1),ut.setLineWidth(Nt*kt()),U.isLineSegments?jt.setMode(D.LINES):U.isLineLoop?jt.setMode(D.LINE_LOOP):jt.setMode(D.LINE_STRIP)}else U.isPoints?jt.setMode(D.POINTS):U.isSprite&&jt.setMode(D.TRIANGLES);if(U.isBatchedMesh)jt.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else if(U.isInstancedMesh)jt.renderInstances(te,oe,U.count);else if(N.isInstancedBufferGeometry){const Nt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,rs=Math.min(N.instanceCount,Nt);jt.renderInstances(te,oe,rs)}else jt.render(te,oe)};function Xt(v,P,N){v.transparent===!0&&v.side===de&&v.forceSinglePass===!1?(v.side=Te,v.needsUpdate=!0,Mi(v,P,N),v.side=dn,v.needsUpdate=!0,Mi(v,P,N),v.side=de):Mi(v,P,N)}this.compile=function(v,P,N=null){N===null&&(N=v),p=xt.get(N),p.init(),y.push(p),N.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),v!==N&&v.traverseVisible(function(U){U.isLight&&U.layers.test(P.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights(M._useLegacyLights);const F=new Set;return v.traverse(function(U){const lt=U.material;if(lt)if(Array.isArray(lt))for(let ft=0;ft<lt.length;ft++){const vt=lt[ft];Xt(vt,N,U),F.add(vt)}else Xt(lt,N,U),F.add(lt)}),y.pop(),p=null,F},this.compileAsync=function(v,P,N=null){const F=this.compile(v,P,N);return new Promise(U=>{function lt(){if(F.forEach(function(ft){Lt.get(ft).currentProgram.isReady()&&F.delete(ft)}),F.size===0){U(v);return}setTimeout(lt,10)}Bt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Yt=null;function ae(v){Yt&&Yt(v)}function _e(){ve.stop()}function qt(){ve.start()}const ve=new fo;ve.setAnimationLoop(ae),typeof self<"u"&&ve.setContext(self),this.setAnimationLoop=function(v){Yt=v,It.setAnimationLoop(v),v===null?ve.stop():ve.start()},It.addEventListener("sessionstart",_e),It.addEventListener("sessionend",qt),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),It.enabled===!0&&It.isPresenting===!0&&(It.cameraAutoUpdate===!0&&It.updateCamera(P),P=It.getCamera()),v.isScene===!0&&v.onBeforeRender(M,v,P,b),p=xt.get(v,y.length),p.init(),y.push(p),pt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),k.setFromProjectionMatrix(pt),ot=this.localClippingEnabled,$=Dt.init(this.clippingPlanes,ot),B=ct.get(v,d.length),B.init(),d.push(B),Ge(v,P,0,M.sortObjects),B.finish(),M.sortObjects===!0&&B.sort(V,X),this.info.render.frame++,$===!0&&Dt.beginShadows();const N=p.state.shadowsArray;if(K.render(N,v,P),$===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset(),Vt.render(B,v),p.setupLights(M._useLegacyLights),P.isArrayCamera){const F=P.cameras;for(let U=0,lt=F.length;U<lt;U++){const ft=F[U];or(B,v,ft,ft.viewport)}}else or(B,v,P);b!==null&&(S.updateMultisampleRenderTarget(b),S.updateRenderTargetMipmap(b)),v.isScene===!0&&v.onAfterRender(M,v,P),Ct.resetDefaultState(),W=-1,x=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,d.pop(),d.length>0?B=d[d.length-1]:B=null};function Ge(v,P,N,F){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)p.pushLight(v),v.castShadow&&p.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||k.intersectsSprite(v)){F&&Rt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(pt);const ft=J.update(v),vt=v.material;vt.visible&&B.push(v,ft,vt,N,Rt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||k.intersectsObject(v))){const ft=J.update(v),vt=v.material;if(F&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Rt.copy(v.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Rt.copy(ft.boundingSphere.center)),Rt.applyMatrix4(v.matrixWorld).applyMatrix4(pt)),Array.isArray(vt)){const yt=ft.groups;for(let Ut=0,bt=yt.length;Ut<bt;Ut++){const wt=yt[Ut],te=vt[wt.materialIndex];te&&te.visible&&B.push(v,ft,te,N,Rt.z,wt)}}else vt.visible&&B.push(v,ft,vt,N,Rt.z,null)}}const lt=v.children;for(let ft=0,vt=lt.length;ft<vt;ft++)Ge(lt[ft],P,N,F)}function or(v,P,N,F){const U=v.opaque,lt=v.transmissive,ft=v.transparent;p.setupLightsView(N),$===!0&&Dt.setGlobalState(M.clippingPlanes,N),lt.length>0&&Eo(U,lt,P,N),F&&ut.viewport(E.copy(F)),U.length>0&&xi(U,P,N),lt.length>0&&xi(lt,P,N),ft.length>0&&xi(ft,P,N),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Eo(v,P,N,F){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;const lt=Tt.isWebGL2;mt===null&&(mt=new Rn(1,1,{generateMipmaps:!0,type:Bt.has("EXT_color_buffer_half_float")?gi:un,minFilter:mi,samples:lt?4:0})),M.getDrawingBufferSize(At),lt?mt.setSize(At.x,At.y):mt.setSize(Ks(At.x),Ks(At.y));const ft=M.getRenderTarget();M.setRenderTarget(mt),M.getClearColor(tt),R=M.getClearAlpha(),R<1&&M.setClearColor(16777215,.5),M.clear();const vt=M.toneMapping;M.toneMapping=hn,xi(v,N,F),S.updateMultisampleRenderTarget(mt),S.updateRenderTargetMipmap(mt);let yt=!1;for(let Ut=0,bt=P.length;Ut<bt;Ut++){const wt=P[Ut],te=wt.object,be=wt.geometry,oe=wt.material,Xe=wt.group;if(oe.side===de&&te.layers.test(F.layers)){const jt=oe.side;oe.side=Te,oe.needsUpdate=!0,lr(te,N,F,be,oe,Xe),oe.side=jt,oe.needsUpdate=!0,yt=!0}}yt===!0&&(S.updateMultisampleRenderTarget(mt),S.updateRenderTargetMipmap(mt)),M.setRenderTarget(ft),M.setClearColor(tt,R),M.toneMapping=vt}function xi(v,P,N){const F=P.isScene===!0?P.overrideMaterial:null;for(let U=0,lt=v.length;U<lt;U++){const ft=v[U],vt=ft.object,yt=ft.geometry,Ut=F===null?ft.material:F,bt=ft.group;vt.layers.test(N.layers)&&lr(vt,P,N,yt,Ut,bt)}}function lr(v,P,N,F,U,lt){v.onBeforeRender(M,P,N,F,U,lt),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(M,P,N,F,v,lt),U.transparent===!0&&U.side===de&&U.forceSinglePass===!1?(U.side=Te,U.needsUpdate=!0,M.renderBufferDirect(N,P,F,U,v,lt),U.side=dn,U.needsUpdate=!0,M.renderBufferDirect(N,P,F,U,v,lt),U.side=de):M.renderBufferDirect(N,P,F,U,v,lt),v.onAfterRender(M,P,N,F,U,lt)}function Mi(v,P,N){P.isScene!==!0&&(P=Mt);const F=Lt.get(v),U=p.state.lights,lt=p.state.shadowsArray,ft=U.state.version,vt=dt.getParameters(v,U.state,lt,P,N),yt=dt.getProgramCacheKey(vt);let Ut=F.programs;F.environment=v.isMeshStandardMaterial?P.environment:null,F.fog=P.fog,F.envMap=(v.isMeshStandardMaterial?I:_).get(v.envMap||F.environment),Ut===void 0&&(v.addEventListener("dispose",rt),Ut=new Map,F.programs=Ut);let bt=Ut.get(yt);if(bt!==void 0){if(F.currentProgram===bt&&F.lightsStateVersion===ft)return hr(v,vt),bt}else vt.uniforms=dt.getUniforms(v),v.onBuild(N,vt,M),v.onBeforeCompile(vt,M),bt=dt.acquireProgram(vt,yt),Ut.set(yt,bt),F.uniforms=vt.uniforms;const wt=F.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(wt.clippingPlanes=Dt.uniform),hr(v,vt),F.needsLights=Ao(v),F.lightsStateVersion=ft,F.needsLights&&(wt.ambientLightColor.value=U.state.ambient,wt.lightProbe.value=U.state.probe,wt.directionalLights.value=U.state.directional,wt.directionalLightShadows.value=U.state.directionalShadow,wt.spotLights.value=U.state.spot,wt.spotLightShadows.value=U.state.spotShadow,wt.rectAreaLights.value=U.state.rectArea,wt.ltc_1.value=U.state.rectAreaLTC1,wt.ltc_2.value=U.state.rectAreaLTC2,wt.pointLights.value=U.state.point,wt.pointLightShadows.value=U.state.pointShadow,wt.hemisphereLights.value=U.state.hemi,wt.directionalShadowMap.value=U.state.directionalShadowMap,wt.directionalShadowMatrix.value=U.state.directionalShadowMatrix,wt.spotShadowMap.value=U.state.spotShadowMap,wt.spotLightMatrix.value=U.state.spotLightMatrix,wt.spotLightMap.value=U.state.spotLightMap,wt.pointShadowMap.value=U.state.pointShadowMap,wt.pointShadowMatrix.value=U.state.pointShadowMatrix),F.currentProgram=bt,F.uniformsList=null,bt}function cr(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=qi.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function hr(v,P){const N=Lt.get(v);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function To(v,P,N,F,U){P.isScene!==!0&&(P=Mt),S.resetTextureUnits();const lt=P.fog,ft=F.isMeshStandardMaterial?P.environment:null,vt=b===null?M.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:tn,yt=(F.isMeshStandardMaterial?I:_).get(F.envMap||ft),Ut=F.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,bt=!!N.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),wt=!!N.morphAttributes.position,te=!!N.morphAttributes.normal,be=!!N.morphAttributes.color;let oe=hn;F.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(oe=M.toneMapping);const Xe=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,jt=Xe!==void 0?Xe.length:0,Nt=Lt.get(F),rs=p.state.lights;if($===!0&&(ot===!0||v!==x)){const Pe=v===x&&F.id===W;Dt.setState(F,v,Pe)}let Qt=!1;F.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==rs.state.version||Nt.outputColorSpace!==vt||U.isBatchedMesh&&Nt.batching===!1||!U.isBatchedMesh&&Nt.batching===!0||U.isInstancedMesh&&Nt.instancing===!1||!U.isInstancedMesh&&Nt.instancing===!0||U.isSkinnedMesh&&Nt.skinning===!1||!U.isSkinnedMesh&&Nt.skinning===!0||U.isInstancedMesh&&Nt.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Nt.instancingColor===!1&&U.instanceColor!==null||Nt.envMap!==yt||F.fog===!0&&Nt.fog!==lt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Dt.numPlanes||Nt.numIntersection!==Dt.numIntersection)||Nt.vertexAlphas!==Ut||Nt.vertexTangents!==bt||Nt.morphTargets!==wt||Nt.morphNormals!==te||Nt.morphColors!==be||Nt.toneMapping!==oe||Tt.isWebGL2===!0&&Nt.morphTargetsCount!==jt)&&(Qt=!0):(Qt=!0,Nt.__version=F.version);let fn=Nt.currentProgram;Qt===!0&&(fn=Mi(F,P,U));let ur=!1,li=!1,as=!1;const fe=fn.getUniforms(),pn=Nt.uniforms;if(ut.useProgram(fn.program)&&(ur=!0,li=!0,as=!0),F.id!==W&&(W=F.id,li=!0),ur||x!==v){fe.setValue(D,"projectionMatrix",v.projectionMatrix),fe.setValue(D,"viewMatrix",v.matrixWorldInverse);const Pe=fe.map.cameraPosition;Pe!==void 0&&Pe.setValue(D,Rt.setFromMatrixPosition(v.matrixWorld)),Tt.logarithmicDepthBuffer&&fe.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&fe.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,li=!0,as=!0)}if(U.isSkinnedMesh){fe.setOptional(D,U,"bindMatrix"),fe.setOptional(D,U,"bindMatrixInverse");const Pe=U.skeleton;Pe&&(Tt.floatVertexTextures?(Pe.boneTexture===null&&Pe.computeBoneTexture(),fe.setValue(D,"boneTexture",Pe.boneTexture,S)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}U.isBatchedMesh&&(fe.setOptional(D,U,"batchingTexture"),fe.setValue(D,"batchingTexture",U._matricesTexture,S));const os=N.morphAttributes;if((os.position!==void 0||os.normal!==void 0||os.color!==void 0&&Tt.isWebGL2===!0)&&Ot.update(U,N,fn),(li||Nt.receiveShadow!==U.receiveShadow)&&(Nt.receiveShadow=U.receiveShadow,fe.setValue(D,"receiveShadow",U.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(pn.envMap.value=yt,pn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),li&&(fe.setValue(D,"toneMappingExposure",M.toneMappingExposure),Nt.needsLights&&bo(pn,as),lt&&F.fog===!0&&at.refreshFogUniforms(pn,lt),at.refreshMaterialUniforms(pn,F,Y,z,mt),qi.upload(D,cr(Nt),pn,S)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(qi.upload(D,cr(Nt),pn,S),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&fe.setValue(D,"center",U.center),fe.setValue(D,"modelViewMatrix",U.modelViewMatrix),fe.setValue(D,"normalMatrix",U.normalMatrix),fe.setValue(D,"modelMatrix",U.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Pe=F.uniformsGroups;for(let ls=0,wo=Pe.length;ls<wo;ls++)if(Tt.isWebGL2){const dr=Pe[ls];Gt.update(dr,fn),Gt.bind(dr,fn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return fn}function bo(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Ao(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(v,P,N){Lt.get(v.texture).__webglTexture=P,Lt.get(v.depthTexture).__webglTexture=N;const F=Lt.get(v);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=N===void 0,F.__autoAllocateDepthBuffer||Bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(v,P){const N=Lt.get(v);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,N=0){b=v,C=P,A=N;let F=!0,U=null,lt=!1,ft=!1;if(v){const yt=Lt.get(v);yt.__useDefaultFramebuffer!==void 0?(ut.bindFramebuffer(D.FRAMEBUFFER,null),F=!1):yt.__webglFramebuffer===void 0?S.setupRenderTarget(v):yt.__hasExternalTextures&&S.rebindTextures(v,Lt.get(v.texture).__webglTexture,Lt.get(v.depthTexture).__webglTexture);const Ut=v.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ft=!0);const bt=Lt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(bt[P])?U=bt[P][N]:U=bt[P],lt=!0):Tt.isWebGL2&&v.samples>0&&S.useMultisampledRTT(v)===!1?U=Lt.get(v).__webglMultisampledFramebuffer:Array.isArray(bt)?U=bt[N]:U=bt,E.copy(v.viewport),H.copy(v.scissor),G=v.scissorTest}else E.copy(q).multiplyScalar(Y).floor(),H.copy(Q).multiplyScalar(Y).floor(),G=et;if(ut.bindFramebuffer(D.FRAMEBUFFER,U)&&Tt.drawBuffers&&F&&ut.drawBuffers(v,U),ut.viewport(E),ut.scissor(H),ut.setScissorTest(G),lt){const yt=Lt.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,yt.__webglTexture,N)}else if(ft){const yt=Lt.get(v.texture),Ut=P||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,yt.__webglTexture,N||0,Ut)}W=-1},this.readRenderTargetPixels=function(v,P,N,F,U,lt,ft){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Lt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ft!==void 0&&(vt=vt[ft]),vt){ut.bindFramebuffer(D.FRAMEBUFFER,vt);try{const yt=v.texture,Ut=yt.format,bt=yt.type;if(Ut!==ze&&ht.convert(Ut)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const wt=bt===gi&&(Bt.has("EXT_color_buffer_half_float")||Tt.isWebGL2&&Bt.has("EXT_color_buffer_float"));if(bt!==un&&ht.convert(bt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(bt===ln&&(Tt.isWebGL2||Bt.has("OES_texture_float")||Bt.has("WEBGL_color_buffer_float")))&&!wt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-F&&N>=0&&N<=v.height-U&&D.readPixels(P,N,F,U,ht.convert(Ut),ht.convert(bt),lt)}finally{const yt=b!==null?Lt.get(b).__webglFramebuffer:null;ut.bindFramebuffer(D.FRAMEBUFFER,yt)}}},this.copyFramebufferToTexture=function(v,P,N=0){const F=Math.pow(2,-N),U=Math.floor(P.image.width*F),lt=Math.floor(P.image.height*F);S.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,N,0,0,v.x,v.y,U,lt),ut.unbindTexture()},this.copyTextureToTexture=function(v,P,N,F=0){const U=P.image.width,lt=P.image.height,ft=ht.convert(N.format),vt=ht.convert(N.type);S.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment),P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,F,v.x,v.y,U,lt,ft,vt,P.image.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,F,v.x,v.y,P.mipmaps[0].width,P.mipmaps[0].height,ft,P.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,F,v.x,v.y,ft,vt,P.image),F===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(v,P,N,F,U=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const lt=v.max.x-v.min.x+1,ft=v.max.y-v.min.y+1,vt=v.max.z-v.min.z+1,yt=ht.convert(F.format),Ut=ht.convert(F.type);let bt;if(F.isData3DTexture)S.setTexture3D(F,0),bt=D.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)S.setTexture2DArray(F,0),bt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const wt=D.getParameter(D.UNPACK_ROW_LENGTH),te=D.getParameter(D.UNPACK_IMAGE_HEIGHT),be=D.getParameter(D.UNPACK_SKIP_PIXELS),oe=D.getParameter(D.UNPACK_SKIP_ROWS),Xe=D.getParameter(D.UNPACK_SKIP_IMAGES),jt=N.isCompressedTexture?N.mipmaps[U]:N.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,jt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,jt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,v.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,v.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,v.min.z),N.isDataTexture||N.isData3DTexture?D.texSubImage3D(bt,U,P.x,P.y,P.z,lt,ft,vt,yt,Ut,jt.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(bt,U,P.x,P.y,P.z,lt,ft,vt,yt,jt.data)):D.texSubImage3D(bt,U,P.x,P.y,P.z,lt,ft,vt,yt,Ut,jt),D.pixelStorei(D.UNPACK_ROW_LENGTH,wt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,te),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe),U===0&&F.generateMipmaps&&D.generateMipmap(bt),ut.unbindTexture()},this.initTexture=function(v){v.isCubeTexture?S.setTextureCube(v,0):v.isData3DTexture?S.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?S.setTexture2DArray(v,0):S.setTexture2D(v,0),ut.unbindTexture()},this.resetState=function(){C=0,A=0,b=null,ut.reset(),Ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qe}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===tr?"display-p3":"srgb",e.unpackColorSpace=Wt.workingColorSpace===es?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?wn:Za}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===wn?ue:tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class Uf extends xo{}Uf.prototype.isWebGL1Renderer=!0;class If extends ie{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Mo extends ri{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Da=new ne,Zs=new so,Wi=new ns,Xi=new L;class Nf extends ie{constructor(t=new Ce,e=new Mo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wi.copy(n.boundingSphere),Wi.applyMatrix4(i),Wi.radius+=r,t.ray.intersectsSphere(Wi)===!1)return;Da.copy(i).invert(),Zs.copy(t.ray).applyMatrix4(Da);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,B=m;g<B;g++){const p=c.getX(g);Xi.fromBufferAttribute(u,p),Ua(Xi,p,l,i,t,e,this)}}else{const f=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let g=f,B=m;g<B;g++)Xi.fromBufferAttribute(u,g),Ua(Xi,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ua(s,t,e,n,i,r,o){const a=Zs.distanceSqToPoint(s);if(a<e){const l=new L;Zs.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class Ia extends Se{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sr extends Ce{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);const r=[],o=[],a=[],l=[],c=new L,h=new zt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const m=n+u/e*i;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ge(o,3)),this.setAttribute("normal",new ge(a,3)),this.setAttribute("uv",new ge(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sr(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class rr extends Ce{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,m=[],g=[],B=[],p=[];for(let d=0;d<=n;d++){const y=[],M=d/n;let T=0;d===0&&o===0?T=.5/e:d===n&&l===Math.PI&&(T=-.5/e);for(let C=0;C<=e;C++){const A=C/e;u.x=-t*Math.cos(i+A*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+A*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),B.push(f.x,f.y,f.z),p.push(A+T,1-M),y.push(c++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<e;y++){const M=h[d][y+1],T=h[d][y],C=h[d+1][y],A=h[d+1][y+1];(d!==0||o>0)&&m.push(M,T,A),(d!==n-1||l<Math.PI)&&m.push(T,C,A)}this.setIndex(m),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(B,3)),this.setAttribute("uv",new ge(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ar extends Ce{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const B=g/i*r,p=m/n*Math.PI*2;u.x=(t+e*Math.cos(p))*Math.cos(B),u.y=(t+e*Math.cos(p))*Math.sin(B),u.z=e*Math.sin(p),a.push(u.x,u.y,u.z),h.x=t*Math.cos(B),h.y=t*Math.sin(B),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const B=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,d=(i+1)*(m-1)+g,y=(i+1)*m+g;o.push(B,p,y),o.push(p,d,y)}this.setIndex(o),this.setAttribute("position",new ge(a,3)),this.setAttribute("normal",new ge(l,3)),this.setAttribute("uv",new ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ar(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class We extends ri{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ja,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Qi={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Ff{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const m=c[u],g=c[u+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Of=new Ff;class vi{constructor(t){this.manager=t!==void 0?t:Of,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vi.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ze={};class kf extends Error{constructor(t,e){super(t),this.response=e}}class Hf extends vi{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Qi.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(Ze[t]!==void 0){Ze[t].push({onLoad:e,onProgress:n,onError:i});return}Ze[t]=[],Ze[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Ze[t],u=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let B=0;const p=new ReadableStream({start(d){y();function y(){u.read().then(({done:M,value:T})=>{if(M)d.close();else{B+=T.byteLength;const C=new ProgressEvent("progress",{lengthComputable:g,loaded:B,total:m});for(let A=0,b=h.length;A<b;A++){const W=h[A];W.onProgress&&W.onProgress(C)}d.enqueue(T),y()}})}}});return new Response(p)}else throw new kf(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),f=u&&u[1]?u[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Qi.add(t,c);const h=Ze[t];delete Ze[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=Ze[t];if(h===void 0)throw this.manager.itemError(t),c;delete Ze[t];for(let u=0,f=h.length;u<f;u++){const m=h[u];m.onError&&m.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class zf extends vi{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Qi.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=Bi("img");function l(){h(),Qi.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Gf extends vi{constructor(t){super(t)}load(t,e,n,i){const r=new Se,o=new zf(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class So extends ie{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ht(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Hs=new ne,Na=new L,Fa=new L;class Vf{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new er,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Na.setFromMatrixPosition(t.matrixWorld),e.position.copy(Na),Fa.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Fa),e.updateMatrixWorld(),Hs.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hs)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Wf extends Vf{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xf extends So{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ie.DEFAULT_UP),this.updateMatrix(),this.target=new ie,this.shadow=new Wf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Yf extends So{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Yi;class yo{static getContext(){return Yi===void 0&&(Yi=new(window.AudioContext||window.webkitAudioContext)),Yi}static setContext(t){Yi=t}}class qf extends vi{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new Hf(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(l){try{const c=l.slice(0);yo.getContext().decodeAudioData(c,function(u){e(u)}).catch(a)}catch(c){a(c)}},n,i);function a(l){i?i(l):console.error(l),r.manager.itemError(t)}}}class $f{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Oa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Oa();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Oa(){return(typeof performance>"u"?Date:performance).now()}const vn=new L,ka=new si,Kf=new L,xn=new L;class jf extends ie{constructor(){super(),this.type="AudioListener",this.context=yo.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new $f}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(vn,ka,Kf),xn.set(0,0,-1).applyQuaternion(ka),e.positionX){const i=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(vn.x,i),e.positionY.linearRampToValueAtTime(vn.y,i),e.positionZ.linearRampToValueAtTime(vn.z,i),e.forwardX.linearRampToValueAtTime(xn.x,i),e.forwardY.linearRampToValueAtTime(xn.y,i),e.forwardZ.linearRampToValueAtTime(xn.z,i),e.upX.linearRampToValueAtTime(n.x,i),e.upY.linearRampToValueAtTime(n.y,i),e.upZ.linearRampToValueAtTime(n.z,i)}else e.setPosition(vn.x,vn.y,vn.z),e.setOrientation(xn.x,xn.y,xn.z,n.x,n.y,n.z)}}class Zf extends ie{constructor(t){super(),this.type="Audio",this.listener=t,this.context=t.context,this.gain=this.context.createGain(),this.gain.connect(t.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(t){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=t,this.connect(),this}setMediaElementSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(t),this.connect(),this}setMediaStreamSource(t){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(t),this.connect(),this}setBuffer(t){return this.buffer=t,this.sourceType="buffer",this.autoplay&&this.play(),this}play(t=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+t;const e=this.context.createBufferSource();return e.buffer=this.buffer,e.loop=this.loop,e.loopStart=this.loopStart,e.loopEnd=this.loopEnd,e.onended=this.onEnded.bind(this),e.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=e,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].connect(this.filters[t]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let t=1,e=this.filters.length;t<e;t++)this.filters[t-1].disconnect(this.filters[t]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(t){return t||(t=[]),this._connected===!0?(this.disconnect(),this.filters=t.slice(),this.connect()):this.filters=t.slice(),this}setDetune(t){if(this.detune=t,this.source.detune!==void 0)return this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(t){return this.setFilters(t?[t]:[])}setPlaybackRate(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=t,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(t){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=t,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(t){return this.loopStart=t,this}setLoopEnd(t){return this.loopEnd=t,this}getVolume(){return this.gain.gain.value}setVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Js}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Js);class Jf{constructor(t,e){this.scene=t,this.blockManager=e,this.isJumping=!1,this.isFalling=!1,this.velocity=0,this.isColliding=!1,this.isFreezingForPortal=!1,this.position={x:0,y:-3.75,z:0},this.defaultSpeed=.1,this.speed=this.defaultSpeed,this.initialSpeed=.08,this.baseGravity=.015,this.baseJumpForce=.28,this.terminalVelocity=-.3,this.fastSpeedMultiplier=1.6,this.slowSpeedMultiplier=.4,this.isRightKeyHeld=!1,this.isLeftKeyHeld=!1,this.isJumpKeyHeld=!1,this.jumpKeyPressed=!1,this.jumpBufferFrames=0,this.maxJumpBufferFrames=4,this.jumpLandBuffer=0,this.maxJumpLandBuffer=3,this.width=.4,this.height=.5,this.textureLoader=new Gf,this.sprites=[],this.currentFrame=0,this.baseAnimationSpeed=40,this.animationTimer=0,this.loadSprites(),this.createMesh(),this.createEyes()}loadSprites(){const t="/game/";for(let e=1;e<=6;e++){const n=e.toString().padStart(2,"0"),i=`${t}sprites/player/player${n}.png`,r=this.textureLoader.load(i);r.magFilter=he,r.minFilter=he,this.sprites.push(r)}}createMesh(){const t=new Me(this.width,this.height),e=new We({map:this.sprites[0],transparent:!0,alphaTest:.1,side:de,roughness:1,metalness:0,emissiveMap:this.sprites[0],emissiveIntensity:1});this.mesh=new Zt(t,e),this.mesh.position.set(this.position.x,this.position.y,this.position.z),this.mesh.castShadow=!0,this.mesh.receiveShadow=!1,this.scene.add(this.mesh)}createEyes(){this.eyesGroup=new Tn;const t=.01,e=10*t,n=3*t,i=3*t,r=3*t,o=9*t,a=17*t,l=this.width/2-n-r/2,c=l-r/2-i-o/2,h=this.height/2-e-a/2,u=.01,f=new Me(r,a),m=new Cn({color:16777215});this.rightEye=new Zt(f,m),this.rightEye.position.set(l,h,u);const g=new Me(o,a),B=new Cn({color:16777215});this.leftEye=new Zt(g,B),this.leftEye.position.set(c,h,u),this.eyesGroup.add(this.rightEye),this.eyesGroup.add(this.leftEye),this.mesh.add(this.eyesGroup),this.eyesGroup.visible=!1,this.eyeOriginalProperties={height:a,leftEyeY:this.leftEye.position.y,rightEyeY:this.rightEye.position.y,minBlinkHeight:3*t},this.blinkProperties={isBlinking:!1,blinkTimer:0,blinkInterval:Math.random()*3+2,blinkDuration:.25,blinkProgress:0}}showEyes(){this.eyesGroup&&(this.eyesGroup.visible=!0)}updateAnimation(t){if(this.isColliding){this.mesh.material.map!==this.sprites[0]&&(this.mesh.material.map=this.sprites[0],this.mesh.material.emissiveMap=this.sprites[0]);return}if(!this.isJumping&&!this.isFalling){const e=this.speed/this.defaultSpeed,i=1/(this.baseAnimationSpeed*e);this.animationTimer+=1/60*t,this.animationTimer>=i&&(this.currentFrame=(this.currentFrame+1)%this.sprites.length,this.mesh.material.map=this.sprites[this.currentFrame],this.mesh.material.emissiveMap=this.sprites[this.currentFrame],this.animationTimer=0)}else this.mesh.material.map!==this.sprites[1]&&(this.mesh.material.map=this.sprites[1],this.mesh.material.emissiveMap=this.sprites[1]);this.mesh.material.needsUpdate=!0,this.updateEyeBlinking(t)}updateEyeBlinking(t){if(!this.eyesGroup||!this.leftEye||!this.rightEye)return;const e=1/60*t;if(this.blinkProperties.isBlinking)if(this.blinkProperties.blinkProgress+=e/this.blinkProperties.blinkDuration,this.blinkProperties.blinkProgress>=1)this.blinkProperties.isBlinking=!1,this.blinkProperties.blinkProgress=0,this.blinkProperties.blinkInterval=Math.random()*3+2,this.blinkProperties.blinkTimer=0,this.updateEyeGeometry(this.eyeOriginalProperties.height),this.leftEye.position.y=this.eyeOriginalProperties.leftEyeY,this.rightEye.position.y=this.eyeOriginalProperties.rightEyeY;else{const n=Math.sin(this.blinkProperties.blinkProgress*Math.PI),i=this.eyeOriginalProperties.height-n*(this.eyeOriginalProperties.height-this.eyeOriginalProperties.minBlinkHeight),r=(this.eyeOriginalProperties.height-i)*1/3;this.updateEyeGeometry(i),this.leftEye.position.y=this.eyeOriginalProperties.leftEyeY-r,this.rightEye.position.y=this.eyeOriginalProperties.rightEyeY-r}else this.blinkProperties.blinkTimer+=e,this.blinkProperties.blinkTimer>=this.blinkProperties.blinkInterval&&(this.blinkProperties.isBlinking=!0,this.blinkProperties.blinkProgress=0)}updateEyeGeometry(t){const e=this.leftEye.geometry.parameters.width,n=this.rightEye.geometry.parameters.width,i=new Me(e,t),r=new Me(n,t);this.leftEye.geometry.dispose(),this.rightEye.geometry.dispose(),this.leftEye.geometry=i,this.rightEye.geometry=r}jump(){if(!this.isJumping&&!this.isFalling&&(this.jumpKeyPressed||this.jumpLandBuffer>0)||this.jumpBufferFrames>0&&this.jumpKeyPressed){const t={left:this.position.x-this.width/2,right:this.position.x+this.width/2,top:this.position.y+this.height/2+.1,bottom:this.position.y-this.height/2},e=this.blockManager.checkVerticalCollision(t,this.baseJumpForce);(!e.collision||e.direction!=="up")&&(this.isJumping=!0,this.isFalling=!1,this.jumpBufferFrames=0,this.jumpLandBuffer=0,this.velocity=this.baseJumpForce,this.jumpKeyPressed=!1)}else this.isFalling&&this.jumpKeyPressed&&(this.jumpLandBuffer=this.maxJumpLandBuffer,this.jumpKeyPressed=!1)}setJumpKeyHeld(t){t&&!this.isJumpKeyHeld&&(this.jumpKeyPressed=!0),this.isJumpKeyHeld=t}setRightKeyHeld(t){this.isRightKeyHeld=t,this.updateSpeed()}setLeftKeyHeld(t){this.isLeftKeyHeld=t,this.updateSpeed()}updateSpeed(){this.isRightKeyHeld?this.speed=this.defaultSpeed*this.fastSpeedMultiplier:this.isLeftKeyHeld?this.speed=this.defaultSpeed*this.slowSpeedMultiplier:this.speed=this.defaultSpeed}reset(){this.isJumping=!1,this.isFalling=!1,this.isColliding=!1,this.isFreezingForPortal=!1,this.velocity=0,this.position={x:0,y:-3.75,z:0},this.speed=this.defaultSpeed,this.isRightKeyHeld=!1,this.isLeftKeyHeld=!1,this.currentFrame=0,this.animationTimer=0,this.isJumpKeyHeld=!1,this.jumpKeyPressed=!1,this.jumpBufferFrames=0,this.jumpLandBuffer=0,this.mesh.material.map=this.sprites[0],this.mesh.material.emissiveMap=this.sprites[0],this.mesh.position.set(this.position.x,this.position.y,this.position.z),this.mesh.visible=!0,this.blinkProperties&&(this.blinkProperties.isBlinking=!1,this.blinkProperties.blinkProgress=0,this.blinkProperties.blinkTimer=0,this.blinkProperties.blinkInterval=Math.random()*3+2,this.leftEye&&this.rightEye&&this.eyeOriginalProperties&&(this.updateEyeGeometry(this.eyeOriginalProperties.height),this.leftEye.position.y=this.eyeOriginalProperties.leftEyeY,this.rightEye.position.y=this.eyeOriginalProperties.rightEyeY))}die(){return this.mesh.visible=!1,{x:this.mesh.position.x,y:this.mesh.position.y,z:this.mesh.position.z}}getBounds(){return{left:this.position.x-this.width/2,right:this.position.x+this.width/2,top:this.position.y+this.height/2,bottom:this.position.y-this.height/2}}update(t){if(this.isFreezingForPortal)return;const e=this.getBounds(),n=this.position.x+this.speed*t,i={left:n-this.width/2,right:n+this.width/2,top:e.top,bottom:e.bottom},r=this.blockManager.checkHorizontalCollision(i);if(r.collision?(this.isColliding=!0,r.direction==="right"?this.position.x=r.blockX-this.width/2:this.position.x=r.blockX+this.width/2):(this.isColliding=!1,this.position.x=n),this.isJumping||this.isFalling){this.isJumping&&this.velocity>0&&(this.isJumpKeyHeld||(this.velocity=0));const o=this.baseGravity*t;this.velocity=this.velocity-o,this.velocity<this.terminalVelocity&&(this.velocity=this.terminalVelocity);const a=Math.abs(this.velocity*t),l=Math.max(1,Math.ceil(a/.2)),c=this.velocity*t/l;let h=!1,u=this.position.y;for(let f=0;f<l&&!h;f++){const m=this.position.y+c,g={left:this.position.x-this.width/2,right:this.position.x+this.width/2,top:m+this.height/2,bottom:m-this.height/2},B=this.blockManager.checkVerticalCollision(g,this.velocity);if(B.collision)h=!0,B.direction==="up"?(u=B.blockY-this.height/2,this.velocity=0,this.isJumping=!1,this.isFalling=!0,this.velocity=-.03):B.direction==="down"&&(u=B.blockY+this.height/2,this.isJumping=!1,this.isFalling=!1,this.velocity=0);else{const p=this.blockManager.findGroundYAtPosition(this.position.x,g.bottom);p!==null&&g.bottom<=p&&this.velocity<0?(u=p+this.height/2,this.isJumping=!1,this.isFalling=!1,this.velocity=0,h=!0):f===l-1?(u=m,this.isJumping&&this.velocity<=0&&(this.isJumping=!1,this.isFalling=!0)):this.position.y=m}}this.position.y=u}else{const o=this.getBounds();this.blockManager.checkVerticalCollision({left:o.left,right:o.right,top:o.top,bottom:o.bottom-.05},this.velocity).collision||(this.isFalling=!0,this.velocity=0,this.jumpBufferFrames=this.maxJumpBufferFrames)}return this.isFalling?this.jumpBufferFrames>0&&(this.jumpBufferFrames=Math.max(0,this.jumpBufferFrames-t)):this.isJumping||this.jumpLandBuffer>0&&(this.jump(),this.jumpLandBuffer=0),this.mesh.position.set(this.position.x,this.position.y,this.position.z),this.updateAnimation(t),!0}getBoundingBox(){return new Ln().setFromObject(this.mesh)}}class Qf{constructor(t,e){this.scene=t,this.blockManager=e,this.obstacles=[],this.obstacleSize=.5,this.obstacleTypes=[{color:0}]}reset(){this.obstacles.forEach(t=>{this.scene.remove(t.mesh)}),this.obstacles=[]}createSpike(t,e){const n=new Ce,i=new Float32Array([-.25,0,.025,.25,0,.025,0,.5,.025,-.25,0,-.025,.25,0,-.025,0,.5,-.025]),r=[0,1,2,5,4,3];n.setAttribute("position",new Re(i,3)),n.setIndex(r),n.computeVertexNormals();const o=new We({color:this.obstacleTypes[0].color,roughness:.7,metalness:.2,emissive:this.obstacleTypes[0].color,emissiveIntensity:1,side:de}),a=new Zt(n,o);a.castShadow=!0,a.position.set(t+.25,e,0),a.receiveShadow=!1,this.scene.add(a);const l={left:t,right:t+.5,top:e+.5,bottom:e};return a.userData={bounds:l,isSpike:!0},this.obstacles.push({mesh:a,type:0,bounds:l}),{mesh:a,bounds:l}}getObstacles(){return this.obstacles.map(t=>t.mesh)}getObstacleBounds(){return this.obstacles.map(t=>t.bounds)}}class tp{constructor(t){this.scene=t,this.blocks=[],this.blockWidth=4,this.blockHeight=1,this.baseGroundY=-5}createBlock(t,e,n,i){const r=new ai(n,i,.1),o=new We({color:0,emissive:0,emissiveIntensity:1}),a=new Zt(r,o);a.position.set(t+n/2,e+i/2,0),a.castShadow=!0,a.receiveShadow=!1,this.scene.add(a);const l={mesh:a,x:t,y:e,width:n,height:i,bounds:{left:t,right:t+n,top:e+i,bottom:e}};return this.blocks.push(l),l}getBlocksNearX(t,e=10){return this.blocks.filter(n=>t+e>=n.bounds.left&&t-e<=n.bounds.right)}isPointInsideAnyBlock(t,e){for(const n of this.blocks)if(t>=n.bounds.left&&t<=n.bounds.right&&e>=n.bounds.bottom&&e<=n.bounds.top)return!0;return!1}findGroundYAtPosition(t,e){let n=null,i=1/0;const r=this.getBlocksNearX(t);for(const o of r)if(t>=o.bounds.left&&t<=o.bounds.right&&o.bounds.top<=e){const a=e-o.bounds.top;a<i&&(i=a,n=o.bounds.top)}return n}checkHorizontalCollision(t){const e=this.getBlocksNearX(t.left+(t.right-t.left)/2);for(const n of e)if(t.top>n.bounds.bottom+.05&&t.bottom<n.bounds.top-.05){if(t.left<=n.bounds.right&&t.left>n.bounds.left)return{collision:!0,direction:"left",blockX:n.bounds.right};if(t.right>=n.bounds.left&&t.right<n.bounds.right)return{collision:!0,direction:"right",blockX:n.bounds.left}}return{collision:!1}}checkVerticalCollision(t,e=null){const n=this.getBlocksNearX(t.left+(t.right-t.left)/2);for(const i of n)if(t.right>i.bounds.left+.05&&t.left<i.bounds.right-.05){if(t.top>=i.bounds.bottom&&t.top<i.bounds.top&&t.top>i.bounds.bottom+.01&&(e===null||e>0))return{collision:!0,direction:"up",blockY:i.bounds.bottom};if(t.bottom<=i.bounds.top&&t.bottom>i.bounds.bottom)return{collision:!0,direction:"down",blockY:i.bounds.top}}return{collision:!1}}checkBlockCollision(t){const e=this.getBlocksNearX(t.left+(t.right-t.left)/2);for(const n of e)if(t.right>n.bounds.left&&t.left<n.bounds.right&&t.top>n.bounds.bottom&&t.bottom<n.bounds.top){const i=t.right-n.bounds.left,r=n.bounds.right-t.left,o=n.bounds.top-t.bottom,a=t.top-n.bounds.bottom,l=Math.min(i,r,o,a);let c,h=0,u=0;return l===i?(c="right",h=n.bounds.left):l===r?(c="left",h=n.bounds.right):l===o?(c="up",u=n.bounds.top):(c="down",u=n.bounds.bottom),{collision:!0,direction:c,blockX:h,blockY:u}}return{collision:!1}}removeBlock(t){const e=this.blocks.indexOf(t);e!==-1&&(this.scene.remove(t.mesh),this.blocks.splice(e,1))}removeBlocksBeforeX(t){this.blocks=this.blocks.filter(e=>e.bounds.right<t?(this.scene.remove(e.mesh),!1):!0)}reset(){for(const t of this.blocks)this.scene.remove(t.mesh);this.blocks=[]}}class ep{constructor(t,e){this.scene=t,this.blockManager=e,this.lasers=[],this.onDuration=30,this.offDuration=30,this.totalCycleDuration=this.onDuration+this.offDuration,this.globalPhase=0}reset(){this.lasers.forEach(t=>{this.scene.remove(t.beam),this.scene.remove(t.glow),t.sparks&&t.sparks.length>0&&t.sparks.forEach(e=>{this.scene.remove(e.mesh)}),t.marker&&this.scene.remove(t.marker)}),this.lasers=[],this.globalPhase=0}createLaser(t,e,n=!1){const r=t+.25,o=e+.5/2,a=.1,l=.5,c=new Me(a,l),h=new We({color:16711680,emissive:16711680,emissiveIntensity:1.5,transparent:!0,opacity:.9,side:de}),u=new Zt(c,h);u.position.set(r,o,.02),u.castShadow=!1,u.visible=!0,this.scene.add(u);const f=.3,m=new Tn;m.position.set(r,o,.01),m.visible=!0;const g=.15,B=new Me(g,l),p=new We({color:16724787,emissive:16724787,emissiveIntensity:1,transparent:!0,opacity:.6,side:de}),d=new Zt(B,p);m.add(d);const y=new Me(f,l),M=new We({color:16742263,emissive:16742263,emissiveIntensity:.4,transparent:!0,opacity:.2,side:de}),T=new Zt(y,M);m.add(T),this.scene.add(m);const C={left:r-a/2,right:r+a/2,top:o+l/2,bottom:o-l/2};let A=[],b=e;if(n){const E=this.blockManager.getBlocksNearX(r,2);b=-5;let H=!1;for(const G of E)r>=G.bounds.left&&r<=G.bounds.right&&G.bounds.top>b&&(b=G.bounds.top,H=!0);if(!H)for(const G of this.blockManager.blocks)r>=G.bounds.left&&r<=G.bounds.right&&G.bounds.top>b&&(b=G.bounds.top,H=!0);H||(b=-4)}const W={beam:u,glow:m,sparks:A,bounds:C,x:r,y:o,sparkY:b,hasSparks:n,active:!0,isActive:!0,sparkSpawnTimer:0,sparkSpawnRate:.6},x=this.globalPhase<this.onDuration;return W.beam.visible=x,W.glow.visible=x,W.isActive=x,this.lasers.push(W),W}createSparkMesh(t,e,n){const i=new Me(n,n),r=new We({color:16711680,emissive:16711680,emissiveIntensity:2,transparent:!0,opacity:1,side:de}),o=new Zt(i,r),a=(Math.random()-.5)*.05,l=Math.random()*.05;o.position.set(t+a,e+l,.2),this.scene.add(o);const c=Math.random()*Math.PI*2,h=Math.random()*.02+.01,u=Math.random()*.5+.3;return{mesh:o,size:n,originalSize:n,velocity:{x:Math.cos(c)*h,y:Math.sin(c)*h},lifetime:u,maxLifetime:u}}update(t){for(this.globalPhase+=t;this.globalPhase>=this.totalCycleDuration;)this.globalPhase-=this.totalCycleDuration;const e=this.globalPhase<this.onDuration;for(const n of this.lasers)if(n.active){if(e){if(n.beam.visible||(n.beam.visible=!0,n.glow.visible=!0,n.isActive=!0),n.hasSparks){const i=Math.floor(n.sparkSpawnRate*t*3);for(let r=0;r<i;r++)if(Math.random()<.7){const o=Math.random()*.08+.03,a=this.createSparkMesh(n.x,n.sparkY,o);n.sparks.push(a)}}}else n.beam.visible&&(n.beam.visible=!1,n.glow.visible=!1,n.isActive=!1);n.hasSparks&&n.sparks.length>0&&this.updateSparks(n,t)}}updateSparks(t,e){for(let n=t.sparks.length-1;n>=0;n--){const i=t.sparks[n];i.mesh.position.x+=i.velocity.x*e,i.mesh.position.y+=i.velocity.y*e,i.lifetime-=e/60;const r=i.lifetime/i.maxLifetime;i.mesh.scale.set(r,r,1),i.lifetime<=0&&(this.scene.remove(i.mesh),t.sparks.splice(n,1))}}getLaserBounds(){return this.lasers.filter(t=>t.isActive).map(t=>t.bounds)}checkCollision(t){for(const e of this.lasers)if(e.isActive&&t.left<e.bounds.right&&t.right>e.bounds.left&&t.top>e.bounds.bottom&&t.bottom<e.bounds.top)return!0;return!1}}const np={vibeverse_portal:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............P...............
..............................
..............................
..............................
..............................
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},flat_ground:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},spikes1:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
.....SS................SS.....
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},pits1:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},raised_platform1:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..........BBBBBBBBBB..........
..............................
..............................
BBBBBB..................BBBBBB
BBBBBB..................BBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},stairs_up1:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
...........................BBB
...........................BBB
......................BBBBBBBB
......................BBBBBBBB
.................BBBBBBBBBBBBB
.................BBBBBBBBBBBBB
............BBBBBBBBBBBBBBBBBB
............BBBBBBBBBBBBBBBBBB
.......BBBBBBBBBBBBBBBBBBBBBBB
.......BBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!0}},stair_down1:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBB...........................
BBB...........................
BBBBBBBB......................
BBBBBBBB......................
BBBBBBBBBBBBB.................
BBBBBBBBBBBBB.................
BBBBBBBBBBBBBBBBBB............
BBBBBBBBBBBBBBBBBB............
BBBBBBBBBBBBBBBBBBBBBBB.......
BBBBBBBBBBBBBBBBBBBBBBB.......
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!0,endsHigh:!1}},raised_pits1:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
BBBBB...BBBBB...BBBBB...BBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}},raised_spikes1:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
.....SS................SS.....
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}},sunk_platform1:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB....BBBBBBBBB....BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}}},ip={spikes2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
....SSS......SSS......SSS.....
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},pits2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},raised_platform2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
.........BBBB....BBBB.........
..............................
..............................
BBBB......................BBBB
BBBB......................BBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},jumping2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
.....BBBB....BBBB....BBBB.....
..............................
..SSSSSSSSSSSSSSSSSSSSSSSSSS..
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},lasers2:{layout:`
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
..............L...............
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},stair_up2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
...........................BBB
..............................
......................BBB.....
..............................
.................BBB..........
..............................
............BBB...............
..............................
.......BBB....................
..............................
BBBBB.........................
BBBBB.........................
`,metadata:{startsHigh:!1,endsHigh:!0}},stair_down2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBB...........................
..............................
.....BBB......................
..............................
..........BBB.................
..............................
...............BBB............
..............................
....................BBB.......
..............................
.........................BBBBB
.........................BBBBB
`,metadata:{startsHigh:!0,endsHigh:!1}},raised_pits2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
BBBBB....BBBB....BBBB....BBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}},raised_spikes2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
....SSS......SSS......SSS.....
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}},sunk_platform2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
.....SS.......................
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.....BBBBBBB.....BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}},raised_lasers2:{layout:`
...........L...........L......
...........L...........L......
...........L...........L......
...........L...........L......
...........L...........L......
...........L...........L......
...........L...........L......
...........L...........L......
BBB...BBBBBBBBBBBBBBBBBB...BBB
BBB...BBBBBBBBBBBBBBBBBB...BBB
BBB...BBBBBBBBBBBBBBB......BBB
BBB...BBBBBBBBBBBBBBB......BBB
BBB...BBBBBBBBBBBBBBB...BBBBBB
BBB...BBBBBBBBBBBB......BBBBBB
BBB...BBBBBBBBBBBB......BBBBBB
BBB...BBBBBBBBBBBB...BBBBBBBBB
BBB..................BBBBBBBBB
BBB..................BBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}}},sp={spikes3:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
....SSSS.....SSSS.....SSSS....
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},pits3:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBBBB.....BBB.....BBB.....BBBB
BBBBB.....BBB.....BBB.....BBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},raised_platform3:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
............S.......S.........
.........BBBB....BBBB.........
..............................
..............................
BBBB......................BBBB
BBBB......................BBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},jumping2:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
......BBB.....BB.....BBB......
..............................
..SSSSSSSSSSSSSSSSSSSSSSSSSS..
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},lasers3:{layout:`
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
....L.........L.........L.....
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!1,endsHigh:!1}},stair_up3:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
............................BB
..............................
.......................BB.....
..............................
..................BB..........
..............................
.............BB...............
..............................
........BB....................
..............................
BBBBB.........................
BBBBB.........................
`,metadata:{startsHigh:!1,endsHigh:!0}},stair_down3:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBB...........................
.....S........................
.....BBB......................
..............................
..........BBB.................
...............S..............
...............BBB............
..............................
....................BBB.......
.........................S....
.........................BBBBB
.........................BBBBB
`,metadata:{startsHigh:!0,endsHigh:!1}},raised_pits3:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
..............................
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
BBBB......BBB....BBB......BBBB
`,metadata:{startsHigh:!0,endsHigh:!0}},raised_spikes3:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
....SSSS.....SSSS.....SSSS....
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}},sunk_platform3:{layout:`
..............................
..............................
..............................
..............................
..............................
..............................
..............................
.....SS.......................
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB..BBB.......BBB..BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
BBBBBBB.................BBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}},raised_lasers3:{layout:`
..........LL..........LL......
..........LL..........LL......
..........LL..........LL......
..........LL..........LL......
..........LL..........LL......
..........LL..........LL......
..........LL..........LL......
..........LL..........LL......
BBB...BBBBBBBBBBBBBBBBBB...BBB
BBB...BBBBBBBBBBBBBBBBBB...BBB
BBB...BBBBBBBBBBBBBBB......BBB
BBB...BBBBBBBBBBBBBBB......BBB
BBB...BBBBBBBBBBBBBBB...BBBBBB
BBB...BBBBBBBBBBBB......BBBBBB
BBB...BBBBBBBBBBBB......BBBBBB
BBB...BBBBBBBBBBBB...BBBBBBBBB
BBB.............L....BBBBBBBBB
BBB.............L....BBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB
`,metadata:{startsHigh:!0,endsHigh:!0}}};class rp{constructor(){this.playerDistance=0,this.difficultyThresholds={level1:0,level2:100,level3:300},this.difficultyWeights={level1:1,level2:0,level3:0},this.maxDifficultyWeights={level1:1,level2:1,level3:1},this.phaseOutThresholds={level1:300,level2:600}}updateDifficulty(t){if(this.playerDistance=t,t>=this.phaseOutThresholds.level1)this.difficultyWeights.level1=0;else if(t>=this.difficultyThresholds.level2){const e=(t-this.difficultyThresholds.level2)/(this.phaseOutThresholds.level1-this.difficultyThresholds.level2);this.difficultyWeights.level1=Math.max(0,1-e)}else this.difficultyWeights.level1=this.maxDifficultyWeights.level1;if(t>=this.phaseOutThresholds.level2)this.difficultyWeights.level2=0;else if(t>=this.difficultyThresholds.level3){const e=(t-this.difficultyThresholds.level3)/(this.phaseOutThresholds.level2-this.difficultyThresholds.level3);this.difficultyWeights.level2=Math.max(0,1-e)}else if(t>=this.difficultyThresholds.level2){const e=(t-this.difficultyThresholds.level2)/(this.difficultyThresholds.level3-this.difficultyThresholds.level2);this.difficultyWeights.level2=Math.min(this.maxDifficultyWeights.level2,e)}else this.difficultyWeights.level2=0;if(t>=this.difficultyThresholds.level3){const e=(t-this.difficultyThresholds.level3)/(this.phaseOutThresholds.level2-this.difficultyThresholds.level3);this.difficultyWeights.level3=Math.min(this.maxDifficultyWeights.level3,e)}else this.difficultyWeights.level3=0}selectDifficulty(){const t=this.difficultyWeights.level1+this.difficultyWeights.level2+this.difficultyWeights.level3;if(t<=0)return"level3";const e=Math.random()*t;let n=0;return n+=this.difficultyWeights.level1,e<n?"level1":(n+=this.difficultyWeights.level2,e<n?"level2":"level3")}getDifficultyWeights(){return{...this.difficultyWeights}}reset(){this.playerDistance=0,this.difficultyWeights={level1:1,level2:0,level3:0}}}class ap{constructor(t,e,n,i,r,o){this.scene=t,this.blockManager=e,this.obstacleManager=n,this.laserManager=i,this.portalManager=r,this.debugManager=o,this.sceneWidth=30,this.sceneHeight=20,this.gridCellSize=.5,this.currentSceneX=0,this.generatedScenes=[],this.hasUsedVibePortal=!1,this.baseGroundY=-5,this.difficultyManager=new rp,this.templates=this.loadTemplates(),this.categorizeTemplates(),this.playerDistance=0,this.debugManager&&this.debugManager.populateTemplateDropdown(this.templates)}loadTemplates(){const t={};for(const[e,n]of Object.entries(np))t[e]={grid:this.parseTemplate(n.layout),metadata:{...n.metadata,difficulty:"level1"}};for(const[e,n]of Object.entries(ip))t[e]={grid:this.parseTemplate(n.layout),metadata:{...n.metadata,difficulty:"level2"}};for(const[e,n]of Object.entries(sp))t[e]={grid:this.parseTemplate(n.layout),metadata:{...n.metadata,difficulty:"level3"}};return t}categorizeTemplates(){this.highStartTemplates={level1:[],level2:[],level3:[]},this.lowStartTemplates={level1:[],level2:[],level3:[]},this.templateCounts={lowToLow:{level1:0,level2:0,level3:0},lowToHigh:{level1:0,level2:0,level3:0},highToLow:{level1:0,level2:0,level3:0},highToHigh:{level1:0,level2:0,level3:0},total:{level1:0,level2:0,level3:0}};for(const[t,e]of Object.entries(this.templates)){const n=e.metadata.startsHigh,i=e.metadata.endsHigh,r=e.metadata.difficulty||"level1";n&&i?this.templateCounts.highToHigh[r]++:n&&!i?this.templateCounts.highToLow[r]++:!n&&i?this.templateCounts.lowToHigh[r]++:this.templateCounts.lowToLow[r]++,this.templateCounts.total[r]++,n?this.highStartTemplates[r].push(t):this.lowStartTemplates[r].push(t)}console.log("High start templates:",this.highStartTemplates),console.log("Low start templates:",this.lowStartTemplates),console.log("Template counts:",this.templateCounts)}parseTemplate(t){return t.trim().split(`
`).map(e=>e.split(""))}selectNextTemplate(t){if(!t)return"flat_ground";if(this.debugManager){const o=this.debugManager.getForceTemplate();if(o&&this.templates[o])return o==="vibeverse_portal"&&(this.hasUsedVibePortal=!0),o}this.difficultyManager.updateDifficulty(this.playerDistance);const e=this.difficultyManager.selectDifficulty();this.debugManager&&this.debugManager.updateDifficultyWeights(this.difficultyManager.getDifficultyWeights());const n=this.templates[t].metadata.endsHigh;let i,r;if(n?this.highStartTemplates[e]&&this.highStartTemplates[e].length>0?r=this.highStartTemplates[e]:this.lowStartTemplates[e]&&this.lowStartTemplates[e].length>0?r=this.lowStartTemplates[e]:e!=="level2"&&this.highStartTemplates.level2.length>0?r=this.highStartTemplates.level2:e!=="level1"&&this.highStartTemplates.level1.length>0?r=this.highStartTemplates.level1:e!=="level3"&&this.highStartTemplates.level3.length>0?r=this.highStartTemplates.level3:r=[...this.lowStartTemplates.level1,...this.lowStartTemplates.level2,...this.lowStartTemplates.level3].filter(o=>o):this.lowStartTemplates[e]&&this.lowStartTemplates[e].length>0?r=this.lowStartTemplates[e]:e!=="level2"&&this.lowStartTemplates.level2.length>0?r=this.lowStartTemplates.level2:e!=="level1"&&this.lowStartTemplates.level1.length>0?r=this.lowStartTemplates.level1:e!=="level3"&&this.lowStartTemplates.level3.length>0?r=this.lowStartTemplates.level3:r=Object.keys(this.templates),r&&r.length>0)return i=r[Math.floor(Math.random()*r.length)],i==="flat_ground"||i==="vibeverse_portal"&&this.hasUsedVibePortal?this.selectNextTemplate(t):(i==="vibeverse_portal"&&(this.hasUsedVibePortal=!0),i);{const o=Object.keys(this.templates).filter(a=>a!=="flat_ground");if(o.length>0)return i=o[Math.floor(Math.random()*o.length)],i==="vibeverse_portal"&&this.hasUsedVibePortal?this.selectNextTemplate(t):(i==="vibeverse_portal"&&(this.hasUsedVibePortal=!0),i);{console.warn("No valid templates found - should never happen");const a=Object.keys(this.templates).filter(l=>l!=="flat_ground");return a[Math.floor(Math.random()*a.length)]}}}generateScene(t,e=null){var c;let n;if(e)n=e;else{const h=this.generatedScenes.length-1,u=h>=0?this.generatedScenes[h].template:null;n=this.selectNextTemplate(u)}const i=this.templates[n].grid;console.log(`Generating scene '${n}' at x=${t}`);const r=t,o=t+this.sceneWidth*this.gridCellSize,a={blocks:[],obstacles:[],lasers:[],portals:[]};for(let h=0;h<this.sceneHeight;h++)for(let u=0;u<this.sceneWidth;u++){const f=((c=i[this.sceneHeight-1-h])==null?void 0:c[u])||".",m=r+u*this.gridCellSize,g=this.baseGroundY+h*this.gridCellSize;if(f==="B")if(h===0){const p=this.gridCellSize*3,d=g-this.gridCellSize*2,y=this.blockManager.createBlock(m,d,this.gridCellSize,p);a.blocks.push(y)}else{const p=this.blockManager.createBlock(m,g,this.gridCellSize,this.gridCellSize);a.blocks.push(p)}else if(f==="S"){const B=this.obstacleManager.createSpike(m,g);a.obstacles.push(B)}else if(f==="L"){let B=!1;const p=this.sceneHeight-1-h;(p+1<this.sceneHeight?i[p+1][u]:null)==="B"&&(B=!0);const y=this.laserManager.createLaser(m,g,B);a.lasers.push(y)}else if(f==="P"&&this.portalManager){const B=this.portalManager.checkIfComingFromPortal(),p=t>=this.sceneWidth*this.gridCellSize*1-1&&t<=this.sceneWidth*this.gridCellSize*1+1,y=B&&p&&n==="vibeverse_portal";console.log(`Creating portal: isEntry=${y}, template=${n}, scene pos=${t}, isFromPortal=${B}`);const M=this.portalManager.createPortal(m,g,y);a.portals.push(M)}}const l=[];if(this.debugManager){const h=this.debugManager.createMarker(r,this.baseGroundY),u=this.debugManager.createMarker(r,this.baseGroundY+this.sceneHeight*this.gridCellSize);h&&u&&l.push(h,u)}return this.generatedScenes.push({startX:r,endX:o,entities:a,template:n,markers:l,metadata:this.templates[n].metadata}),a}update(t){const e=this.generatedScenes[this.generatedScenes.length-1];if(!e||t+30>e.endX){const n=e?e.endX:0;this.generateScene(n)}if(this.debugManager&&this.debugManager.updateTemplateInfo(this.generatedScenes,t),this.generatedScenes.length>3){let n=[];for(let i=0;i<this.generatedScenes.length-3;i++){const r=this.generatedScenes[i];r.endX<t-30&&(n.push(i),this.debugManager&&r.markers&&r.markers.length>0&&this.debugManager.removeMarkers(r.markers))}for(let i=n.length-1;i>=0;i--)this.generatedScenes.splice(n[i],1);this.blockManager.removeBlocksBeforeX(t-30)}}reset(){this.currentSceneX=0,this.generatedScenes=[],this.hasUsedVibePortal=!1,this.debugManager&&this.debugManager.initialPlayerPosition>0?(this.playerDistance=this.debugManager.initialPlayerPosition,this.currentSceneX=this.playerDistance):this.playerDistance=0,this.difficultyManager.reset(),this.playerDistance>0&&this.difficultyManager.updateDifficulty(this.playerDistance),this.debugManager&&this.generatedScenes.forEach(n=>{n.markers&&n.markers.length>0&&this.debugManager.removeMarkers(n.markers)});const t=this.playerDistance>0?this.playerDistance-15:-15;this.generateScene(t,"flat_ground"),this.generateScene(t+this.sceneWidth*this.gridCellSize,"flat_ground"),this.portalManager&&this.portalManager.checkIfComingFromPortal()?(console.log("Generating entry portal in third scene for returning to source game"),this.generateScene(t+this.sceneWidth*this.gridCellSize*2,"vibeverse_portal")):this.generateScene(t+this.sceneWidth*this.gridCellSize*2)}updatePlayerDistance(t){this.playerDistance=t}getSceneNameAtPosition(t){const e=this.generatedScenes.find(n=>t>=n.startX&&t<n.endX);return e?e.template:"unknown"}}class op{constructor(t,e){this.scene=t,this.blockManager=e,this.portals=[],this.particleSystems=[],this.portalLabels=[],this.active=!0,this.isEnteringPortal=!1,this.game=null,this.PORTAL_WIDTH=.5,this.PORTAL_HEIGHT=1,this.PORTAL_DEPTH=.05,this.EXIT_PORTAL_COLOR=65280,this.EXIT_PORTAL_EMISSIVE=65280,this.ENTRY_PORTAL_COLOR=16711680,this.ENTRY_PORTAL_EMISSIVE=16711680,this.PORTAL_OPACITY=.8,this.portalDestination="https://portal.pieter.com",this.createPortalLabelTextures()}createPortalLabelTextures(){const t=document.createElement("canvas"),e=t.getContext("2d");t.width=3072,t.height=512,e.fillStyle="#00ff00",e.font="bold 200px Arial",e.textAlign="center",e.fillText("VIBEVERSE PORTAL →",t.width/2,t.height/2),this.exitPortalLabelTexture=new Ia(t);const n=document.createElement("canvas"),i=n.getContext("2d");n.width=3072,n.height=512,i.fillStyle="#ff0000",i.font="bold 200px Arial",i.textAlign="center",i.fillText("← BACK TO PREVIOUS GAME",n.width/2,n.height/2),this.entryPortalLabelTexture=new Ia(n)}createPortal(t,e,n=!1){const i=new Tn;i.position.set(t,e,0);const r=n?this.ENTRY_PORTAL_COLOR:this.EXIT_PORTAL_COLOR,o=n?this.ENTRY_PORTAL_EMISSIVE:this.EXIT_PORTAL_EMISSIVE,a=n?this.entryPortalLabelTexture:this.exitPortalLabelTexture,l=new ar(.5,.12,16,32),c=new We({color:r,emissive:o,transparent:!0,opacity:this.PORTAL_OPACITY}),h=new Zt(l,c);h.rotation.x=Math.PI*.15,h.rotation.y=0,h.rotation.z=0,i.add(h);const u=new sr(.38,32),f=new Cn({color:r,transparent:!0,opacity:.5,side:de}),m=new Zt(u,f);m.rotation.x=Math.PI*.15,m.rotation.y=0,m.rotation.z=0,i.add(m);const g=new Me(6,1.2),B=new Cn({map:a,transparent:!0,side:de}),p=new Zt(g,B);p.position.y=1.5,i.add(p),this.portalLabels.push(p),this.createPortalParticles(i,t,e,n),this.scene.add(i),i.children[0];const d=.5,y=.12,M=new L(t,e,0);return this.portals.push({group:i,position:M,portalRadius:d,portalThickness:y,isEntry:n}),i}createPortalParticles(t,e,n,i=!1){const o=new Ce,a=new Float32Array(90*3),l=new Float32Array(90*3),c=Math.PI*.15,h=Math.cos(c),u=Math.sin(c);for(let g=0;g<90*3;g+=3){const B=Math.random()*Math.PI*2,p=.5+(Math.random()-.5)*.18,d=Math.cos(B)*p,y=Math.sin(B)*p,M=y*h,T=y*u;a[g]=d,a[g+1]=M,a[g+2]=T+(Math.random()-.5)*.07,i?(l[g]=.8+Math.random()*.2,l[g+1]=0,l[g+2]=0):(l[g]=0,l[g+1]=.8+Math.random()*.2,l[g+2]=0)}o.setAttribute("position",new Re(a,3)),o.setAttribute("color",new Re(l,3));const f=new Mo({size:.2,vertexColors:!0,transparent:!0,opacity:.85}),m=new Nf(o,f);t.add(m),this.particleSystems.push({system:m,geometry:o,isEntry:i})}update(t){if(!(!this.active||this.isEnteringPortal))try{this.animateParticles();for(let e=0;e<this.portals.length;e++){const n=this.portals[e],i=t instanceof L?t:new L(t.x,t.y,t.z),r=i.distanceTo(n.position),o=new Ln().setFromCenterAndSize(i,new L(.4,.5,.1));if(r<2){const p=Math.max(.8,1.5-r/2);n.group.children[0].material.emissiveIntensity=p}const a=.2,l=n.portalRadius+n.portalThickness,c=n.portalRadius-n.portalThickness,h=i.x-n.position.x,u=i.y-n.position.y,f=Math.sqrt(h*h+u*u),m=f<l+a,g=f>c-a;if(m&&g){console.log(`Portal collision detected! Distance: ${r.toFixed(2)}, isEntry: ${n.isEntry}`),console.log(`Player position: x=${i.x.toFixed(2)}, y=${i.y.toFixed(2)}`),console.log(`Portal position: x=${n.position.x.toFixed(2)}, y=${n.position.y.toFixed(2)}`),this.enterPortal(n.isEntry);break}}}catch(e){console.error("Error in PortalManager update:",e)}}animateParticles(){const t=Math.PI*.15,e=Math.cos(t),n=Math.sin(t),i=Date.now()*.001;for(let r=0;r<this.particleSystems.length;r++){const o=this.particleSystems[r],a=o.geometry.attributes.position.array;for(let l=0;l<a.length;l+=3){const c=Math.atan2(a[l+1]/e,a[l]),u=Math.sqrt(Math.pow(a[l],2)+Math.pow(a[l+1]/e,2))+.02*Math.sin(i*3+c*4),f=Math.cos(c)*u,m=Math.sin(c)*u,g=m*e,B=m*n;a[l]=f,a[l+1]=g,a[l+2]=B+.02*Math.sin(i*2+l)}o.geometry.attributes.position.needsUpdate=!0}}enterPortal(t=!1){if(this.isEnteringPortal)return;this.freezeGame();const e="player",n=.2,i="https://omiigames.com/game/";if(console.log(`Entering ${t?"entry (return)":"exit (next game)"} portal`),t){const c=this.getReturnPortalUrl();if(c){console.log(`Returning to source game: ${c}`);const h=new URLSearchParams(window.location.search),u=new URLSearchParams;for(const[B,p]of h.entries())B!=="ref"&&u.append(B,p);u.has("portal")||u.append("portal","true");let f=c;!f.startsWith("http://")&&!f.startsWith("https://")&&(f="https://"+f);const m=u.toString(),g=f+(m?"?"+m:"");console.log(`Redirecting to: ${g}`),setTimeout(()=>{window.location.href=g},0);return}else console.warn("Entry portal activated but no return URL found")}let r=this.portalDestination;const o=new URLSearchParams;o.append("portal","true"),o.append("username",e),o.append("color","green"),o.append("speed",n),o.append("ref",i);const a=new URLSearchParams(window.location.search);if(a.has("portal"))for(const[c,h]of a.entries())!o.has(c)&&c!=="ref"&&o.append(c,h);const l=`${r}?${o.toString()}`;console.log(`Redirecting to portal hub: ${l}`),setTimeout(()=>{window.location.href=l},0)}checkIfComingFromPortal(){const t=new URLSearchParams(window.location.search),e=t.has("portal"),n=t.has("ref")&&t.get("ref").trim()!=="",i=e&&n;return e&&!n&&console.warn("Portal parameter is present but no valid ref URL is provided"),i&&console.log(`Player is coming from a portal: ${t.get("ref")}`),i}getPortalEntryPoint(){return this.portals.length>0?this.portals[0].position:null}getReturnPortalUrl(){return new URLSearchParams(window.location.search).get("ref")}cleanup(){for(const t of this.portals)this.scene.remove(t.group);this.portals=[],this.particleSystems=[],this.portalLabels=[],this.active=!0,this.isEnteringPortal=!1,this.game&&(this.game.portalTransitionActive=!1),this.createPortalLabelTextures()}setGame(t){this.game=t}freezeGame(){this.active=!1,this.isEnteringPortal=!0,this.game&&(console.log("Freezing game for portal transition"),this.game.portalTransitionActive=!0,this.game.player&&(this.game.player.isFreezingForPortal=!0))}}class lp{constructor(){this.collisionBuffer=0}checkCollision(t,e){return t.left<e.right&&t.right>e.left&&t.top>e.bottom&&t.bottom<e.top}checkCollisionWithMeshes(t,e){const n=t.getBounds(),i={left:n.left-this.collisionBuffer,right:n.right+this.collisionBuffer,top:n.top,bottom:n.bottom};for(const r of e){let o;if(r.userData&&r.userData.bounds){if(o=r.userData.bounds,r.userData.isSpike){if(this.checkTriangleCollision(i,o))return!0;continue}}else o={left:r.position.x-r.scale.x/2,right:r.position.x+r.scale.x/2,top:r.position.y+r.scale.y/2,bottom:r.position.y-r.scale.y/2};if(this.checkCollision(i,o))return!0}return!1}checkTriangleCollision(t,e){if(t.left>=e.right||t.right<=e.left||t.top<=e.bottom||t.bottom>=e.top)return!1;const n=e.right-e.left,i=e.top-e.bottom,r=e.bottom,o=.9,a=n*(1-o)/2,l=e.left+a,c=e.right-a;if(t.right<=l||t.left>=c)return!1;let h;t.right<(l+c)/2?h=t.right:h=t.left;const u=(h-l)/(c-l),f=i*o*(1-2*Math.abs(u-.5)),m=r+f;return t.bottom<m}checkFallDeath(t){return t.position.y<t.fallDeathLevel}}class cp{constructor(t){this.scene=t,this.debugMarkers=[],this.infoElements={},this.enabled=this.isDebugEnabled(),this.selectedTemplate=this.getSelectedTemplate(),this.initialPlayerPosition=this.getInitialPlayerPosition(),this.difficultyWeights={level1:0,level2:0,level3:0},this.currentFps=0,this.handleKeyDown=this.handleKeyDown.bind(this),this.debugContainer=document.createElement("div"),this.debugContainer.id="debug-container",this.debugContainer.style.position="absolute",this.debugContainer.style.top="10px",this.debugContainer.style.right="10px",this.debugContainer.style.display=this.enabled?"flex":"none",this.debugContainer.style.flexDirection="column",this.debugContainer.style.gap="10px",this.debugContainer.style.zIndex="1000",document.body.appendChild(this.debugContainer),this.createDebugPanel("performance","Performance"),this.createDebugPanel("coordinates","Player Coordinates"),this.createDebugPanel("templateInfo","Template Information"),this.createTemplateSelector(),this.templateCounts={lowToLow:0,lowToHigh:0,highToLow:0,highToHigh:0,total:0},this.setupKeyboardListener(),console.log(`Debug mode initially ${this.enabled?"enabled":"disabled"} (toggle with 'p' key)`)}isDebugEnabled(){return localStorage.getItem("debug")==="true"}getSelectedTemplate(){return this.isDebugEnabled()&&localStorage.getItem("selectedTemplate")||"none"}getInitialPlayerPosition(){if(this.isDebugEnabled()){const t=localStorage.getItem("initialPlayerPosition");return t?parseFloat(t):0}return 0}createTemplateSelector(){const t=document.createElement("div");t.style.backgroundColor="rgba(0, 0, 0, 0.7)",t.style.color="white",t.style.padding="10px",t.style.borderRadius="5px",t.style.fontFamily="monospace",t.style.fontSize="14px",t.style.minWidth="300px";const e=document.createElement("div");e.textContent="Level Template Selector",e.style.fontWeight="bold",e.style.marginBottom="5px",e.style.borderBottom="1px solid #666",t.appendChild(e);const n=document.createElement("div");n.style.display="flex",n.style.alignItems="center",n.style.gap="10px",n.style.marginTop="5px";const i=document.createElement("label");i.textContent="Force template:",i.style.marginRight="5px",n.appendChild(i),this.templateSelect=document.createElement("select"),this.templateSelect.style.backgroundColor="#333",this.templateSelect.style.color="white",this.templateSelect.style.border="1px solid #666",this.templateSelect.style.padding="5px",this.templateSelect.style.borderRadius="3px",this.templateSelect.style.fontFamily="monospace";const r=document.createElement("option");r.value="none",r.textContent="None (Random)",this.templateSelect.appendChild(r),this.templateSelect.value=this.selectedTemplate,this.templateSelect.addEventListener("change",l=>{this.selectedTemplate=l.target.value,localStorage.setItem("selectedTemplate",this.selectedTemplate),console.log(`Template selection set to: ${this.selectedTemplate}`)}),n.appendChild(this.templateSelect),t.appendChild(n);const o=document.createElement("div");o.style.display="flex",o.style.alignItems="center",o.style.gap="10px",o.style.marginTop="10px";const a=document.createElement("label");a.textContent="Initial distance:",a.style.marginRight="5px",o.appendChild(a),this.positionInput=document.createElement("input"),this.positionInput.type="number",this.positionInput.value=this.initialPlayerPosition,this.positionInput.style.backgroundColor="#333",this.positionInput.style.color="white",this.positionInput.style.border="1px solid #666",this.positionInput.style.padding="5px",this.positionInput.style.borderRadius="3px",this.positionInput.style.fontFamily="monospace",this.positionInput.style.width="70px",this.positionInput.min="0",this.positionInput.step="100",this.positionInput.addEventListener("change",l=>{const c=parseFloat(l.target.value);this.initialPlayerPosition=isNaN(c)?0:c,localStorage.setItem("initialPlayerPosition",this.initialPlayerPosition),console.log(`Initial player distance set to: ${this.initialPlayerPosition}`)}),o.appendChild(this.positionInput),t.appendChild(o),this.debugContainer.appendChild(t),this.templateSelectorPanel=t}populateTemplateDropdown(t){if(this.templateSelect){for(;this.templateSelect.options.length>1;)this.templateSelect.remove(1);for(const e of Object.keys(t)){const n=document.createElement("option");n.value=e,n.textContent=e,this.templateSelect.appendChild(n)}this.templateSelect.value=this.selectedTemplate}}getForceTemplate(){return this.enabled&&this.selectedTemplate!=="none"?this.selectedTemplate:null}handleKeyDown(t){t.key==="p"&&this.toggleDebug()}setupKeyboardListener(){document.addEventListener("keydown",this.handleKeyDown)}createDebugPanel(t,e){const n=document.createElement("div");n.style.backgroundColor="rgba(0, 0, 0, 0.7)",n.style.color="white",n.style.padding="10px",n.style.borderRadius="5px",n.style.fontFamily="monospace",n.style.fontSize="14px",n.style.minWidth="300px";const i=document.createElement("div");i.textContent=e,i.style.fontWeight="bold",i.style.marginBottom="5px",i.style.borderBottom="1px solid #666",n.appendChild(i);const r=document.createElement("div");return n.appendChild(r),this.debugContainer.appendChild(n),this.infoElements[t]=r,r}toggleDebug(){this.enabled=!this.enabled,localStorage.setItem("debug",this.enabled.toString()),this.debugContainer.style.display=this.enabled?"flex":"none",this.debugMarkers.forEach(t=>{t.visible=this.enabled}),this.enabled&&(this.selectedTemplate=localStorage.getItem("selectedTemplate")||"none",this.templateSelect&&(this.templateSelect.value=this.selectedTemplate),this.initialPlayerPosition=this.getInitialPlayerPosition(),this.positionInput&&(this.positionInput.value=this.initialPlayerPosition)),console.log(`Debug mode ${this.enabled?"enabled":"disabled"} (toggle with 'p' key)`)}updateCoordinates(t){if(!this.enabled)return;const e=t.position.x.toFixed(2),n=t.position.y.toFixed(2),i=t.position.z.toFixed(2),r=t.isColliding?"BLOCKED":t.isJumping?"JUMPING":t.isFalling?"FALLING":"RUNNING";this.infoElements.coordinates.innerHTML=`
      <div>Position: (${e}, ${n}, ${i})</div>
      <div>Status: ${r}</div>
      <div>Speed: ${t.speed.toFixed(3)}</div>
    `}updatePerformance(t){if(!this.enabled||!t)return;this.currentFps=t.currentFps||0;let e=`
      <div>Current FPS: <strong>${t.currentFps}</strong></div>
      <div>Average FPS: <strong>${t.averageFps}</strong></div>
    `;t.memory&&(e+=`
        <div>Memory: <strong>${t.memory.usedHeapSize}MB</strong> / ${t.memory.totalHeapSize}MB</div>
      `),this.infoElements.performance.innerHTML=e}getDifficultyWeightsHtml(t="Template Selection Weights"){const i="background-color: #ccc; border-radius: 3px;";return`
      <div style="margin-top: 10px; border-top: 1px solid #666; padding-top: 5px;">
        <div style="margin-bottom: 6px;"><strong>${t}:</strong></div>
        <div style="display: flex; align-items: center; margin-top: 3px;">
          <span style="width: 75px;">Level 1:</span>
          <div style="flex-grow: 1; height: 20px; ${i} overflow: hidden;">
            <div style="height: 100%; background: #4CAF50; width: ${Math.round(this.difficultyWeights.level1*100)}%;"></div>
          </div>
          <span style="margin-left: 5px; width: 40px; text-align: right;">${Math.round(this.difficultyWeights.level1*100)}%</span>
        </div>
        <div style="display: flex; align-items: center; margin-top: 3px;">
          <span style="width: 75px;">Level 2:</span>
          <div style="flex-grow: 1; height: 20px; ${i} overflow: hidden;">
            <div style="height: 100%; background: #FFC107; width: ${Math.round(this.difficultyWeights.level2*100)}%;"></div>
          </div>
          <span style="margin-left: 5px; width: 40px; text-align: right;">${Math.round(this.difficultyWeights.level2*100)}%</span>
        </div>
        <div style="display: flex; align-items: center; margin-top: 3px;">
          <span style="width: 75px;">Level 3:</span>
          <div style="flex-grow: 1; height: 20px; ${i} overflow: hidden;">
            <div style="height: 100%; background: #F44336; width: ${Math.round(this.difficultyWeights.level3*100)}%;"></div>
          </div>
          <span style="margin-left: 5px; width: 40px; text-align: right;">${Math.round(this.difficultyWeights.level3*100)}%</span>
        </div>
      </div>
    `}updateTemplateInfo(t,e){if(!this.enabled)return;this.lastGeneratedScenes=t,this.lastPlayerX=e;const n=t.find(o=>e>=o.startX&&e<o.endX);let i="";if(n){const o=n.metadata||{},a=o.startsHigh?"High":"Low",l=o.endsHigh?"High":"Low";i=`
        <div>Current Template: <strong>${n.template}</strong></div>
        <div>Height: ${a} → ${l}</div>
        <div>Scene Range: ${n.startX.toFixed(1)} to ${n.endX.toFixed(1)}</div>
      `}else i=`
        <div>Current Template: <strong>None</strong></div>
      `;const r=this.getDifficultyWeightsHtml("Template Selection Weights");this.infoElements.templateInfo.innerHTML=i+r}createMarker(t,e,n=.2,i=16711680){if(!this.enabled)return null;const r=new rr(n,16,16),o=new Cn({color:i}),a=new Zt(r,o);return a.position.set(t,e,.1),this.scene.add(a),this.debugMarkers.push(a),a}clearMarkers(){this.debugMarkers.forEach(t=>{this.scene.remove(t)}),this.debugMarkers=[]}removeMarkers(t){t.forEach(e=>{if(e){this.scene.remove(e);const n=this.debugMarkers.indexOf(e);n!==-1&&this.debugMarkers.splice(n,1)}})}cleanup(){this.clearMarkers(),this.debugContainer&&this.debugContainer.parentNode&&this.debugContainer.parentNode.removeChild(this.debugContainer),document.removeEventListener("keydown",this.handleKeyDown),this.infoElements={}}getFPS(){return this.currentFps}updateDifficultyWeights(t){this.difficultyWeights=t,this.lastGeneratedScenes&&this.lastPlayerX!==void 0&&this.updateTemplateInfo(this.lastGeneratedScenes,this.lastPlayerX),this.debugElement&&this.updateDebugPanel()}updateDebugPanel(){if(this.debugElement){let t="";this.templateCounts&&(t=`
          <div class="debug-section">
            <h3>Template Counts</h3>
            <table>
              <tr>
                <th>Type</th>
                <th>Level 1</th>
                <th>Level 2</th>
                <th>Level 3</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>Low → Low</td>
                <td>${this.templateCounts.lowToLow.level1||0}</td>
                <td>${this.templateCounts.lowToLow.level2||0}</td>
                <td>${this.templateCounts.lowToLow.level3||0}</td>
                <td>${(this.templateCounts.lowToLow.level1||0)+(this.templateCounts.lowToLow.level2||0)+(this.templateCounts.lowToLow.level3||0)}</td>
              </tr>
              <tr>
                <td>Low → High</td>
                <td>${this.templateCounts.lowToHigh.level1||0}</td>
                <td>${this.templateCounts.lowToHigh.level2||0}</td>
                <td>${this.templateCounts.lowToHigh.level3||0}</td>
                <td>${(this.templateCounts.lowToHigh.level1||0)+(this.templateCounts.lowToHigh.level2||0)+(this.templateCounts.lowToHigh.level3||0)}</td>
              </tr>
              <tr>
                <td>High → Low</td>
                <td>${this.templateCounts.highToLow.level1||0}</td>
                <td>${this.templateCounts.highToLow.level2||0}</td>
                <td>${this.templateCounts.highToLow.level3||0}</td>
                <td>${(this.templateCounts.highToLow.level1||0)+(this.templateCounts.highToLow.level2||0)+(this.templateCounts.highToLow.level3||0)}</td>
              </tr>
              <tr>
                <td>High → High</td>
                <td>${this.templateCounts.highToHigh.level1||0}</td>
                <td>${this.templateCounts.highToHigh.level2||0}</td>
                <td>${this.templateCounts.highToHigh.level3||0}</td>
                <td>${(this.templateCounts.highToHigh.level1||0)+(this.templateCounts.highToHigh.level2||0)+(this.templateCounts.highToHigh.level3||0)}</td>
              </tr>
              <tr>
                <td><strong>Total</strong></td>
                <td><strong>${this.templateCounts.total.level1||0}</strong></td>
                <td><strong>${this.templateCounts.total.level2||0}</strong></td>
                <td><strong>${this.templateCounts.total.level3||0}</strong></td>
                <td><strong>${(this.templateCounts.total.level1||0)+(this.templateCounts.total.level2||0)+(this.templateCounts.total.level3||0)}</strong></td>
              </tr>
            </table>
          </div>
        `);const e=this.difficultyWeights?`
        <div class="debug-section">
          <h3>Current Difficulty</h3>
          ${this.getDifficultyWeightsHtml("Difficulty Weights")}
        </div>
      `:"";this.debugElement.innerHTML=`
        <div class="debug-panel">
          ${t}
          ${e}
          <!-- Other debug sections can be added here -->
        </div>
      `}}}class hp{constructor(t,e,n){this.scene=t,this.blockManager=e,this.obstacleManager=n,this.particles=[],this.active=!1,this.pxToUnit=.01,this.baseGravityPerFrame=.005,this.cameraViewBoundaries={left:-100,right:100,top:100,bottom:-100}}updateCameraViewBoundaries(t,e){this.cameraViewBoundaries={left:t.position.x-t.right-1,right:t.position.x+t.right+1,top:t.position.y+t.top+1,bottom:t.position.y+t.bottom-1}}createParticles(t,e=100){this.clearParticles(),this.active=!0;for(let n=0;n<e;n++){const i=(Math.random()*8+2)*this.pxToUnit,r=new Me(i,i),o=new We({color:16711680,roughness:.1,metalness:.1,emissive:16729156,emissiveIntensity:1}),a=new Zt(r,o);a.position.set(t.x,t.y,.1),a.userData.initialPosition={x:a.position.x,y:a.position.y,z:a.position.z},a.userData.velocity={x:Math.random()*.12-.06,y:Math.random()*.15+.02,z:0},a.userData.gravityFactor=.8+Math.random()*1.2,a.userData.settled=!1,a.userData.penetrationResistance=Math.random(),a.userData.distanceTraveled=0,a.userData.collisionSize=i*.5,a.castShadow=!0,a.receiveShadow=!1,this.scene.add(a),this.particles.push(a)}}update(t){if(!this.active)return;let e=!0;const n=t||1;this.particles.forEach(i=>{if(i.userData.settled)return;e=!1;const r={x:i.position.x,y:i.position.y,z:i.position.z},o=this.baseGravityPerFrame*i.userData.gravityFactor*n;i.userData.velocity.y-=o,i.position.x+=i.userData.velocity.x*n,i.position.y+=i.userData.velocity.y*n;const a=i.position.x-r.x,l=i.position.y-r.y,c=Math.sqrt(a*a+l*l);if(i.userData.distanceTraveled+=c,i.position.y<this.cameraViewBoundaries.bottom){this.settleParticle(i);return}const h=Math.min(i.userData.distanceTraveled/1.5,.5);if(Math.random()<h){if(this.blockManager){const f=this.blockManager.checkBlockCollision({left:i.position.x,right:i.position.x,top:i.position.y,bottom:i.position.y});if(f.collision){f.direction==="down"?i.position.y=f.blockY+i.userData.collisionSize:f.direction==="up"?i.position.y=f.blockY-i.userData.collisionSize:f.direction==="right"?i.position.x=f.blockX-i.userData.collisionSize:f.direction==="left"&&(i.position.x=f.blockX+i.userData.collisionSize),i.position.z=.1,this.settleParticle(i);return}}if(this.obstacleManager){const f=this.obstacleManager.getObstacles();for(const m of f){const g=m.userData.bounds,B=m.userData.isSpike;if(i.position.x>=g.left&&i.position.x<=g.right&&i.position.y>=g.bottom&&i.position.y<=g.top){if(B){const d=g.right-g.left,y=g.top-g.bottom,M=g.bottom,T=i.position.x,C=(T-g.left)/d,A=y*(1-2*Math.abs(C-.5)),b=M+A;if(i.position.y>b)continue;let W=1,x=C<.5?2*y/d:-2*y/d;const E=Math.sqrt(W*W+x*x),H=W/E,G=x/E,tt=i.userData.collisionSize;i.position.x=T-H*tt,i.position.y=b-G*tt}else{const d=i.userData.velocity.x,y=i.userData.velocity.y;Math.abs(d)>Math.abs(y)?i.position.x=d>0?g.left-i.userData.collisionSize:g.right+i.userData.collisionSize:i.position.y=y>0?g.bottom-i.userData.collisionSize:g.top+i.userData.collisionSize}i.position.z=.1,this.settleParticle(i);return}}}}}),e&&(this.active=!1)}settleParticle(t){t.userData.settled=!0,t.userData.velocity.x=0,t.userData.velocity.y=0,t.userData.velocity.z=0,t.material.color.setHex(16711680),t.material.emissive.setHex(16720418),t.material.emissiveIntensity=.8,t.material.needsUpdate=!0}clearParticles(){this.particles.forEach(t=>{this.scene.remove(t),t.geometry.dispose(),t.material.dispose()}),this.particles=[],this.active=!1}removeSettledParticles(){for(let t=this.settledParticles.length-1;t>=0;t--){const e=this.settledParticles[t];e.userData.settleTime+=1,e.userData.settleTime>this.maxSettleTime&&(this.scene.remove(e),this.settledParticles.splice(t,1))}}reset(){for(;this.particles.length>0;){const t=this.particles.pop();this.scene.remove(t)}for(;this.settledParticles.length>0;){const t=this.settledParticles.pop();this.scene.remove(t)}}}class up{constructor(){if(this.sessionStartTime=Date.now(),this.frameRates=[],this.frameRateTrackingEnabled=!1,this.isLocalhost=this.checkIfLocalhost(),this.isLocalhost){console.log("Running on localhost - analytics tracking is disabled"),this.isAvailable=!1;return}this.isAvailable=typeof window<"u"&&typeof window.gtag=="function",this.isAvailable||console.warn("Google Analytics is not available - events will not be tracked")}checkIfLocalhost(){if(typeof window>"u"||!window.location)return!1;const t=window.location.hostname;return t==="localhost"||t==="127.0.0.1"||t===""||t.startsWith("192.168.")||t.startsWith("10.")||t.endsWith(".local")}trackEvent(t,e={}){if(this.isLocalhost){console.log(`[Analytics Disabled on Localhost] Event: ${t}`,e);return}if(this.isAvailable)try{window.gtag("event",t,e)}catch(n){console.error("Error tracking event:",n)}}trackGameStart(){this.sessionStartTime=Date.now(),this.frameRates=[],this.trackEvent("game_start")}trackGameOver(t,e,n,i,r){const o={reason:t,distance:Math.floor(e*10),time_seconds:Math.floor(n/1e3),time_formatted:this.formatTime(n),scene_name:i,score:r||0};if(this.frameRateTrackingEnabled&&this.frameRates.length>0){const a=this.frameRates.reduce((l,c)=>l+c,0)/this.frameRates.length;o.avg_frame_rate=Math.round(a)}this.trackEvent("game_over",o)}trackDistanceMilestone(t){const e=Math.floor((Date.now()-this.sessionStartTime)/1e3);this.trackEvent("distance_milestone",{milestone:t,time_to_milestone:e})}enableFrameRateTracking(){if(this.isLocalhost){console.log("[Analytics Disabled on Localhost] Frame rate tracking not enabled");return}this.frameRateTrackingEnabled=!0}trackFrameRate(t){this.isLocalhost||this.frameRateTrackingEnabled&&(this.frameRates.push(t),this.frameRates.length>100&&this.frameRates.shift())}formatTime(t){const e=t/1e3,n=Math.floor(e/60),i=Math.floor(e%60),r=Math.floor(e*100%100);return`${n.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}.${r.toString().padStart(2,"0")}`}}class dp{constructor(){this.frameRates=[],this.frameCount=0,this.lastFpsUpdateTime=performance.now(),this.currentFps=0,this.averageFps=0,this.updateInterval=500}reset(){this.frameRates=[],this.frameCount=0,this.lastFpsUpdateTime=performance.now(),this.currentFps=0,this.averageFps=0}update(t){this.frameCount++;const e=performance.now(),n=e-this.lastFpsUpdateTime;n>=this.updateInterval&&(this.currentFps=Math.round(this.frameCount*1e3/n),this.frameRates.push(this.currentFps),this.frameRates.length>100&&this.frameRates.shift(),this.averageFps=Math.round(this.frameRates.reduce((i,r)=>i+r,0)/this.frameRates.length),this.frameCount=0,this.lastFpsUpdateTime=e)}getCurrentFPS(){return this.currentFps}getAverageFPS(){return this.averageFps}getFrameRates(){return this.frameRates}getPerformanceInfo(){const t={currentFps:this.currentFps,averageFps:this.averageFps};if(window.performance&&window.performance.memory){const e=window.performance.memory;t.memory={usedHeapSize:Math.round(e.usedJSHeapSize/(1024*1024)),totalHeapSize:Math.round(e.totalJSHeapSize/(1024*1024)),limit:Math.round(e.jsHeapSizeLimit/(1024*1024))}}return t}}class fp{constructor(){this.audioListener=new jf,this.audioLoader=new qf,this.currentTrack=null,this.currentTrackName=null,this.tracks=["ElectricWonderland.mp3","LoomingPinnacle.mp3","LostInTheAbyss.mp3","NeonPulse.mp3","RidingTheWaves.mp3","SadEnding.mp3","SpaceVoyage.mp3","SuperBlockBoyTheme.mp3","WhispersOfTheUnknown.mp3","Ascension.mp3","CelestialShimmer.mp3","DanceOfDemons.mp3","DigitalShowdown.mp3","EchoesOfMyself.mp3","MysteriousReverie.mp3","MeanderingRoam.mp3"],this.isPlaying=!1,this.isFirstTrack=!0,this.isMuted=localStorage.getItem("musicMuted")==="true"}formatTrackName(t){const e=t.replace(".mp3","").split(/(?=[A-Z])/),n=["of","the","in","and","to","a","an"];return e.map(i=>{const r=i.toLowerCase();return n.includes(r)?r:i}).join(" ")}getCurrentTrackName(){return this.currentTrackName}init(t){t.add(this.audioListener)}playRandomTrack(){if(this.isFirstTrack||!this.currentTrack){this.isFirstTrack=!1;const t=Math.floor(Math.random()*this.tracks.length),n=`/game/music/${this.tracks[t]}`;this.currentTrackName=this.formatTrackName(this.tracks[t]),this.audioLoader.load(n,i=>{this.currentTrack=new Zf(this.audioListener),this.currentTrack.setBuffer(i),this.currentTrack.setLoop(!1),this.currentTrack.setVolume(this.isMuted?0:1),this.currentTrack.play(),this.isPlaying=!0,this.currentTrack.onEnded=()=>{this.isPlaying=!1,this.currentTrack=null,this.playRandomTrack()}})}}toggleMute(){return this.isMuted=!this.isMuted,localStorage.setItem("musicMuted",this.isMuted),this.currentTrack&&(this.isMuted?this.currentTrack.setVolume(0):this.currentTrack.setVolume(1)),this.isMuted}skipTrack(){this.currentTrack&&(this.currentTrack.stop(),this.currentTrack=null,this.isPlaying=!1,this.playRandomTrack())}stop(){this.currentTrack&&(this.currentTrack.stop(),this.currentTrack=null,this.isPlaying=!1,this.isFirstTrack=!0)}pause(){this.currentTrack&&this.isPlaying&&(this.currentTrack.pause(),this.isPlaying=!1)}resume(){this.currentTrack&&!this.isPlaying&&(this.currentTrack.play(),this.isPlaying=!0)}}class pp{constructor(t,e,n){this.container=t,this.scoreElement=e,this.gameOverElement=n,this.isRunning=!1,this.isDead=!1,this.isPaused=!1,this.distance=0,this.gameTime=0,this.gameSpeed=1,this.lastFrameTime=0,this.finalScore=0,this.performanceTracker=new dp,this.analytics=new up,this.lastMilestone=0,this.milestoneIncrement=100,this.cameraOffsetX=6,this.targetAspectRatio=16/9,this.frustumHeight=10,this.audioManager=new fp,this.initScene(),this.initCamera(),this.initRenderer(),this.debugManager=new cp(this.scene),this.blockManager=new tp(this.scene),this.obstacleManager=new Qf(this.scene,this.blockManager),this.laserManager=new ep(this.scene,this.blockManager),this.portalManager=new op(this.scene,this.blockManager),this.portalManager.setGame(this),this.portalTransitionActive=!1,this.levelGenerator=new ap(this.scene,this.blockManager,this.obstacleManager,this.laserManager,this.portalManager,this.debugManager),this.player=new Jf(this.scene,this.blockManager),this.collisionDetector=new lp,this.bloodParticleSystem=new hp(this.scene,this.blockManager,this.obstacleManager),this.backgroundPlane.position.x=this.player.position.x,this.levelGenerator.reset(),window.addEventListener("resize",this.handleResize.bind(this))}initScene(){this.scene=new If,this.scene.background=new Ht(8900331);const t=new Me(3e3,1e3),e=new We({color:12642559,roughness:1,metalness:0});this.backgroundPlane=new Zt(t,e),this.backgroundPlane.position.set(0,0,-.5),this.backgroundPlane.receiveShadow=!0,this.scene.add(this.backgroundPlane);const n=new Yf(16777215,.6);this.scene.add(n),this.directionalLight=new Xf(16777215,.8),this.directionalLight.position.set(2,2,6),this.directionalLight.castShadow=!0,this.directionalLight.target=new ie,this.directionalLight.target.position.set(0,0,0),this.scene.add(this.directionalLight.target),this.directionalLight.shadow.mapSize.width=2048,this.directionalLight.shadow.mapSize.height=2048,this.directionalLight.shadow.camera.near=.5,this.directionalLight.shadow.camera.far=20,this.directionalLight.shadow.camera.left=-12,this.directionalLight.shadow.camera.right=20,this.directionalLight.shadow.camera.top=8,this.directionalLight.shadow.camera.bottom=-8,this.directionalLight.shadow.bias=-1e-4,this.directionalLight.shadow.radius=1.5,this.scene.add(this.directionalLight)}initCamera(){const t=this.frustumHeight*this.targetAspectRatio;this.camera=new nr(t/-2,t/2,this.frustumHeight/2,this.frustumHeight/-2,.1,1e3),this.camera.position.set(this.cameraOffsetX,0,10),this.camera.lookAt(this.cameraOffsetX,0,0),this.audioManager.init(this.camera)}initRenderer(){this.renderer=new xo({antialias:!0});const t=this.container.clientWidth,e=this.container.clientHeight;this.renderer.setSize(t,e),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=za,this.container.appendChild(this.renderer.domElement)}init(){this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.isRunning=!1,this.isDead=!1,this.debugManager&&this.debugManager.initialPlayerPosition>0?(this.distance=this.debugManager.initialPlayerPosition,this.player.position.x=this.distance,this.player.mesh.position.x=this.distance,this.camera.position.x=this.player.position.x+this.cameraOffsetX,this.backgroundPlane.position.x=this.player.position.x,console.log(`Starting at distance: ${this.distance}`)):this.distance=0,this.gameTime=0,this.gameSpeed=1,this.performanceTracker.reset(),this.lastFrameTime=performance.now(),this.updateDisplay(),this.renderer.render(this.scene,this.camera)}start(){this.isRunning=!0,this.isPaused=!1,this.player&&typeof this.player.showEyes=="function"&&this.player.showEyes(),this.analytics.enableFrameRateTracking(),this.analytics.trackGameStart(),this.audioManager.playRandomTrack(),this.lastFrameTime=performance.now(),this.animate(this.lastFrameTime)}pause(){this.isRunning&&!this.isDead&&(this.isPaused=!0)}resume(){this.isPaused&&(this.isPaused=!1)}togglePause(){return this.isPaused?this.resume():this.pause(),this.isPaused}restart(){this.player.reset(),this.obstacleManager.reset(),this.laserManager.reset(),this.blockManager.reset(),this.portalManager&&(this.portalManager.cleanup(),this.portalManager.setGame(this)),this.levelGenerator.reset(),this.performanceTracker.reset(),this.bloodParticleSystem.clearParticles(),this.directionalLight.position.set(this.player.position.x+2,2,6),this.directionalLight.target.position.x=this.player.position.x,this.directionalLight.target.updateMatrixWorld(),this.backgroundPlane.position.x=this.player.position.x,this.debugManager&&this.debugManager.clearMarkers(),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.isRunning=!0,this.isDead=!1,this.debugManager&&this.debugManager.initialPlayerPosition>0?(this.distance=this.debugManager.initialPlayerPosition,this.player.position.x=this.distance,this.player.mesh.position.x=this.distance,this.camera.position.x=this.player.position.x+this.cameraOffsetX,this.backgroundPlane.position.x=this.player.position.x,this.directionalLight.position.x=this.player.position.x+2,this.directionalLight.target.position.x=this.player.position.x,this.directionalLight.target.updateMatrixWorld()):this.distance=0,this.gameTime=0,this.gameSpeed=1,this.lastFrameTime=performance.now(),this.updateDisplay(),this.animate(this.lastFrameTime),this.lastMilestone=0}calculateScore(t,e){const i=Math.floor(t*10)*10,r=Math.floor(e/10);return{score:Math.max(0,i-r),distanceScore:i,timePenalty:r}}gameOver(t="obstacle"){this.isRunning=!1,this.isDead=!0,this.finalScore=this.calculateScore(this.distance,this.gameTime);const e=this.player.die();if(t==="fall"){const h={x:e.x,y:this.camera.position.y+this.camera.bottom-.5,z:e.z};this.bloodParticleSystem.createParticles(h)}else this.bloodParticleSystem.createParticles(e);const n="#ff5252";let i=`<span style="color: ${n};">DEAD!</span>`,r="";t==="fall"?r=`<span style="color: ${n};">You fell to your doom.</span>`:t==="obstacle"?r=`<span style="color: ${n};">You were impaled. Ouch!</span>`:t==="laser"&&(r=`<span style="color: ${n};">You were zapped into oblivion.</span>`);const o=this.formatDistance(this.distance),a=this.formatTime(this.gameTime),l=this.calculateScore(this.distance,this.gameTime);this.finalScore=l.score,document.getElementById("game-over-message").innerHTML=i,document.getElementById("game-over-stats").innerHTML=`
      <div style="font-size: 20px; margin-bottom: 15px;">${r}</div>
      <div style="font-size: 32px; margin-bottom: 15px;"><strong>Score: ${this.finalScore}</strong></div>
      <div style="margin-bottom: 10px;">Distance: ${o} <span style="color: #4caf50">(+${l.distanceScore} pts)</span></div>
      <div>Time: ${a} <span style="color: #ff6b6b">(-${l.timePenalty} pts)</span></div>
    `,this.gameOverElement.style.display="block",setTimeout(()=>{this.gameOverElement.classList.add("visible")},10);const c=this.levelGenerator.getSceneNameAtPosition(this.distance);this.analytics.trackGameOver(t,this.distance,this.gameTime,c,this.finalScore)}updateDisplay(){const t=document.getElementById("score");t&&(t.innerHTML=`Distance: ${Math.floor(this.distance*10)} m<br />Time: ${this.formatTime(this.gameTime)}`);const e=document.getElementById("track-display");if(e){const n=this.audioManager.getCurrentTrackName(),i=this.audioManager.isMuted,r=this.audioManager.isPlaying;n&&!i&&r?(e.innerHTML=`♪ ${n} ♪`,e.style.display="block"):e.style.display="none"}this.player.isColliding||this.levelGenerator.updatePlayerDistance(this.distance)}formatDistance(t){return`${Math.floor(t*10)} m`}formatTime(t){const n=Math.floor(t/10)*10/1e3,i=Math.floor(n/60),r=Math.floor(n%60),o=Math.floor(n*100%100);return`${i.toString().padStart(2,"0")}:${r.toString().padStart(2,"0")}.${o.toString().padStart(2,"0")}`}updateCoordinates(){this.debugManager&&this.debugManager.updateCoordinates(this.player)}handleKeyDown(t){if(!(!this.isRunning&&!["m","n"].includes(t.key.toLowerCase()))&&(t.key.toLowerCase()==="m"?this.audioManager.toggleMute():t.key.toLowerCase()==="n"&&this.audioManager.skipTrack(),!!this.isRunning))switch(t.key.toLowerCase()){case" ":case"arrowup":this.isPaused||(this.player.setJumpKeyHeld(!0),this.player.jump());break;case"arrowdown":this.isPaused||(this.player.setLeftKeyHeld(!0),this.player.updateSpeed());break;case"arrowright":case"d":this.isPaused||(this.player.setRightKeyHeld(!0),this.player.updateSpeed());break;case"arrowleft":case"a":this.isPaused||(this.player.setLeftKeyHeld(!0),this.player.updateSpeed());break;case"enter":this.isDead?this.restart():this.isPaused?this.resume():this.pause();break}}handleKeyUp(t){if(this.isRunning)switch(t.key.toLowerCase()){case" ":case"arrowup":this.isPaused||this.player.setJumpKeyHeld(!1);break;case"arrowdown":this.isPaused||(this.player.setLeftKeyHeld(!1),this.player.updateSpeed());break;case"arrowright":case"d":this.isPaused||(this.player.setRightKeyHeld(!1),this.player.updateSpeed());break;case"arrowleft":case"a":this.isPaused||(this.player.setLeftKeyHeld(!1),this.player.updateSpeed());break}}handleResize(){const t=this.container.clientWidth,e=this.container.clientHeight,n=this.frustumHeight*this.targetAspectRatio;this.camera.left=n/-2,this.camera.right=n/2,this.camera.top=this.frustumHeight/2,this.camera.bottom=this.frustumHeight/-2,this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e)}update(t){if(!this.isRunning&&!this.bloodParticleSystem.active||this.portalTransitionActive)return;const e=Math.min(t,100),n=e/16.67*this.gameSpeed;if(this.laserManager.update(n),!this.isDead){if(this.levelGenerator.update(this.player.position.x),this.player.position.y<this.camera.position.y+this.camera.bottom-1){this.gameOver("fall");return}if(this.player.update(n),this.updateCoordinates(),!this.player.isColliding){this.camera.position.x=this.player.position.x+this.cameraOffsetX,this.backgroundPlane.position.x=this.player.position.x,this.directionalLight.position.x=this.player.position.x+2,this.directionalLight.target.position.x=this.player.position.x,this.directionalLight.target.updateMatrixWorld(),this.distance=this.player.position.x;const o=Math.floor(this.distance*10),a=Math.floor(o/this.milestoneIncrement)*this.milestoneIncrement;a>this.lastMilestone&&(this.analytics.trackDistanceMilestone(a),this.lastMilestone=a)}this.gameTime+=e;const i=this.obstacleManager.getObstacles();if(this.collisionDetector.checkCollisionWithMeshes(this.player,i)){this.gameOver("obstacle");return}const r=this.player.getBounds();if(this.laserManager.checkCollision(r)){this.gameOver("laser");return}this.portalManager&&this.portalManager.update(this.player.position)}this.bloodParticleSystem&&(this.bloodParticleSystem.updateCameraViewBoundaries(this.camera,this.cameraOffsetX),this.bloodParticleSystem.update(n))}animate(t){const e=t-this.lastFrameTime;if(this.lastFrameTime=t,this.performanceTracker.update(e),this.analytics.frameRateTrackingEnabled){const n=this.performanceTracker.getCurrentFPS();n>0&&this.analytics.trackFrameRate(n)}if(this.debugManager){const n=this.performanceTracker.getPerformanceInfo();this.debugManager.updatePerformance(n),n&&typeof n.currentFps=="number"&&(this.debugManager.currentFps=n.currentFps)}this.updateDisplay(),this.isPaused||this.update(e),this.renderer.render(this.scene,this.camera),this.animationFrameId=requestAnimationFrame(this.animate.bind(this))}cleanup(){this.audioManager.stop(),this.animationFrameId&&(cancelAnimationFrame(this.animationFrameId),this.animationFrameId=null),this.debugManager&&this.debugManager.cleanup(),this.laserManager&&this.laserManager.reset(),this.portalManager&&this.portalManager.cleanup(),this.bloodParticleSystem&&this.bloodParticleSystem.clearParticles(),window.removeEventListener("resize",this.handleResize.bind(this)),this.renderer.dispose(),this.renderer.domElement.parentNode&&this.renderer.domElement.parentNode.removeChild(this.renderer.domElement),this.scene=null,this.camera=null,this.renderer=null,this.player=null,this.blockManager=null,this.obstacleManager=null,this.laserManager=null,this.levelGenerator=null,this.debugManager=null,this.collisionDetector=null,this.bloodParticleSystem=null}}window.addEventListener("load",()=>{const s=document.getElementById("game-container"),t=document.getElementById("score"),e=document.getElementById("game-over"),n=document.getElementById("restart-button"),i=document.getElementById("splash-screen"),r=document.getElementById("start-button"),o=new pp(s,t,e);o.init(),r.addEventListener("click",()=>{i.style.display="none",o.isPaused?(o.resume(),a(!1)):o.start()}),n.addEventListener("click",()=>{e.classList.remove("visible"),setTimeout(()=>{e.style.display="none",o.restart()},500)});const a=l=>{const c=document.getElementById("start-button"),h=document.querySelector(".start-hint");l?(c.textContent="Resume",h.textContent="Press Enter to resume",i.style.display="block",i.classList.add("paused")):(c.textContent="Start",h.textContent="Press Enter to start",i.classList.remove("paused"),i.style.display="none")};window.addEventListener("keydown",l=>{if(l.code==="Enter"&&i.style.display!=="none"&&e.style.display!=="block"&&!o.isPaused)i.style.display="none",o.start(),l.preventDefault();else if(l.code==="Enter"&&o.isPaused)i.style.display="none",o.resume(),a(!1),l.preventDefault();else if(l.code==="Enter"&&e.style.display==="block")e.classList.remove("visible"),setTimeout(()=>{e.style.display="none",o.restart()},500),l.preventDefault();else if(l.code==="Enter"&&o.isRunning&&!o.isDead&&!o.isPaused){const c=o.togglePause();a(c),l.preventDefault()}else{let c=l.key.toLowerCase();l.code==="Space"&&(c=" "),l.code==="ArrowRight"&&(c="arrowright"),l.code==="ArrowLeft"&&(c="arrowleft"),l.code==="ArrowUp"&&(c="arrowup"),l.code==="ArrowDown"&&(c="arrowdown"),l.code==="KeyD"&&(c="d"),l.code==="KeyA"&&(c="a"),o.handleKeyDown({key:c})}}),window.addEventListener("keyup",l=>{let c=l.key.toLowerCase();l.code==="Space"&&(c=" "),l.code==="ArrowRight"&&(c="arrowright"),l.code==="ArrowLeft"&&(c="arrowleft"),l.code==="ArrowUp"&&(c="arrowup"),l.code==="ArrowDown"&&(c="arrowdown"),l.code==="KeyD"&&(c="d"),l.code==="KeyA"&&(c="a"),o.handleKeyUp({key:c})}),s.addEventListener("touchstart",l=>{if(i.style.display!=="none"&&e.style.display!=="block"){const c=r.getBoundingClientRect(),h=l.touches[0].clientX,u=l.touches[0].clientY;h>=c.left&&h<=c.right&&u>=c.top&&u<=c.bottom&&(i.style.display="none",o.isPaused?(o.resume(),a(!1)):o.start())}else o.isRunning&&!o.isPaused&&o.handleKeyDown({key:" "})}),s.addEventListener("touchend",()=>{o.isRunning&&!o.isPaused&&o.handleKeyUp({key:" "})})});
//# sourceMappingURL=main-CHeeY-Pp.js.map
